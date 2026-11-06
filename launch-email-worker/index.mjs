const siteOrigin = 'https://flincth.com';
const appId = 'b1a1845c-01c6-4927-be28-07d290bed717';

export default {
  async fetch(request, env) {
    if (new URL(request.url).pathname !== '/subscribe') {
      return new Response(null, { status: 404 });
    }
    if (request.headers.get('Origin') !== siteOrigin) {
      return new Response(null, { status: 403 });
    }

    const headers = {
      'Access-Control-Allow-Origin': siteOrigin,
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Cache-Control': 'no-store',
      Vary: 'Origin'
    };
    const respond = (status) => new Response(null, { status, headers });
    if (request.method === 'OPTIONS') return respond(204);
    if (request.method !== 'POST') return respond(405);
    if (request.headers.get('Content-Type') !== 'application/json') return respond(415);
    if (!env.ONESIGNAL_APP_KEY) return respond(503);

    const { success } = await env.SIGNUP_LIMIT.limit({
      key: request.headers.get('CF-Connecting-IP') || 'unknown'
    });
    if (!success) return respond(429);

    let body;
    try {
      if (Number(request.headers.get('Content-Length')) > 1024) return respond(413);
      const raw = await request.text();
      if (raw.length > 1024) return respond(413);
      body = JSON.parse(raw);
    } catch {
      return respond(400);
    }
    const email = typeof body?.email === 'string' ? body.email.trim().toLowerCase() : '';
    if (body?.consent !== true || email.length > 254 || !/^[^\s@]+@[^\s@.]+(?:\.[^\s@.]+)+$/.test(email)) {
      return respond(400);
    }

    // Give repeat signups the same identity without storing an address in an alias.
    const digest = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(email));
    const id = Array.from(new Uint8Array(digest), byte => byte.toString(16).padStart(2, '0')).join('');

    try {
      const result = await fetch(`https://api.onesignal.com/apps/${appId}/users`, {
        method: 'POST',
        headers: {
          Authorization: `Key ${env.ONESIGNAL_APP_KEY}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          identity: { external_id: `web-launch-email-${id}` },
          properties: { tags: { web_launch_email: '1' } },
          subscriptions: [{ type: 'Email', token: email, enabled: true }]
        }),
        signal: AbortSignal.timeout(8000)
      });
      if (!result.ok) return respond(result.status === 429 ? 429 : 502);
      return respond(204);
    } catch {
      return respond(502);
    }
  }
};
