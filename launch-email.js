(function () {
  var form = document.getElementById('launch-email');
  if (!form) return;

  var email = form.elements.email;
  var button = form.querySelector('button');
  var status = form.querySelector('[role="status"]');

  form.addEventListener('submit', async function (event) {
    event.preventDefault();
    if (button.disabled) return;

    button.disabled = true;
    form.setAttribute('aria-busy', 'true');
    status.textContent = 'Signing up…';

    var controller = new AbortController();
    var timeout = setTimeout(function () { controller.abort(); }, 12000);

    try {
      var response = await fetch(form.action, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email.value.trim(), consent: true }),
        signal: controller.signal
      });
      if (response.status === 204) {
        form.reset();
        status.textContent = 'You’re signed up for Flincth launch emails.';
      } else if (response.status === 429) {
        status.textContent = 'Too many attempts. Please wait a minute and try again.';
      } else {
        throw new Error('Email signup failed');
      }
    } catch {
      status.textContent = 'We couldn’t sign you up. Please try again.';
    } finally {
      clearTimeout(timeout);
      button.disabled = false;
      form.removeAttribute('aria-busy');
    }
  });

  form.hidden = false;
})();
