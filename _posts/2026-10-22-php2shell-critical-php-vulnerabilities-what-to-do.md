---
title: "PHP2Shell: What the Critical PHP Vulnerabilities Mean and What to Do Now"
seo_title: "PHP2Shell (CVE-2026-109618/109619): What to Do Now"
description: "Two critical flaws in PHP itself let an attacker run code on a web server without logging in. Who is affected, which versions fix it, and what to do today."
product: none
medium_url: https://medium.com/@flincth/php2shell-cve-2026-109618-109619-what-to-do-now-flincth-9d477a4ea8c3
---

This week's biggest security story isn't about a plugin or a framework. It's about PHP itself.

On 21 October 2026, the PHP project released fixes for two critical vulnerabilities in the PHP engine, **CVE-2026-109618** and **CVE-2026-109619**, now widely called **PHP2Shell**. Under the right conditions, they let an attacker run their own code on a web server with a single request, without logging in to anything.

PHP runs a large share of the web. W3Techs puts it at 69.3% of websites whose server-side language is known. So if you run a website, a shop, a WordPress blog or an internal tool, this one is worth ten minutes of your time today.

This post is a plain-language summary of what is known so far, with links to the primary sources at the end.

---

## What the two flaws are

Both are memory-safety bugs in PHP's core, and the PHP security team rates both **9.2 on CVSS v4.0**.

- **CVE-2026-109618** happens when PHP runs out of memory at the wrong moment. Request data can be left half-built, and PHP's cleanup then treats it as valid.
- **CVE-2026-109619** is about state from one request outliving its memory. A later request handled by the same worker can then use memory that has already been freed.

You don't need to follow the details. What matters is the consequence: an attacker who shapes a request carefully can corrupt PHP's memory and, from there, make the server run commands.

---

## Why this one is serious

Three things make PHP2Shell worse than a typical vulnerability.

**No login is needed.** PHP processes the malicious request before any of your application's code runs. Your app's own login screen, permissions and security checks never get a chance to step in.

**Your code doesn't have to be wrong.** The flaw is in the engine, not in WordPress, Drupal or your own scripts. Researchers say a page that does nothing but print "Hello World" can be enough on an affected version. Wiz reports that it achieved remote code execution against WordPress, Drupal and Joomla, and Tenable reports that Calif confirmed it against Magento.

**It reaches back years.** The researchers who found it say the vulnerable code goes back to **PHP 5.4**, released more than a decade ago.

The PHP project says every web-serving setup is in scope, including PHP-FPM, Apache with mod_php, php-cgi, FrankenPHP and LiteSpeed. It considers the risk **highest for Apache with mod_php**. On PHP-FPM, Datadog notes the attack also depends on what the application does after the request starts, which makes it harder but not impossible.

---

## Is anyone exploiting it?

Yes, and it started before the fix was public.

- **24 August:** Wiz Research reported the flaws to the PHP security team, after finding them on 19 August.
- **17 October:** Amazon Threat Intelligence saw an exploitation attempt against one of its honeypots, four days before disclosure. Amazon recommends starting any investigation from at least this date.
- **20 October:** the CVE numbers leaked online ahead of the planned release. PHP moved its release forward by a day.
- **21 October:** PHP released the fixes. The same day, hosting companies reported attack attempts, and Cloudflare said it was seeing early attacks.

Code claiming to exploit the flaws is circulating publicly. Not all of it works, but several security teams, including Datadog and watchTowr, have independently reproduced the bugs. It is safest to assume a working exploit is in attackers' hands.

---

## Which versions fix it

- **PHP 8.5:** update to **8.5.12** or later.
- **PHP 8.4:** update to **8.4.27** or later.
- **PHP 8.3:** update to **8.3.36** or later.
- **PHP 8.2:** update to **8.2.35** or later.
- **PHP 7.4, 8.0 and 8.1:** no official release. The PHP team published source patches, and your Linux distribution or hosting company may ship them. Better: move to a supported branch.
- **PHP 5.4 to 7.3:** no fix from the PHP project. Upgrade.

One catch: Linux distributions often patch the version they ship without changing its version number. If your server says 8.2.20 but your distribution's security update says it includes the fix, you may already be protected. Check your vendor's advisory rather than the number alone.

---

## What to do today

**If someone else hosts your site** (shared hosting, managed WordPress, a website builder): ask your host whether their PHP has been patched for CVE-2026-109618 and CVE-2026-109619. Many hosts and vendors received advance notice and some acted before the announcement. Don't assume; ask, and get a yes in writing.

**If you run your own server:**

1. **Find the PHP that serves your website.** The `php -v` command shows the command-line PHP, which can be a different version or configuration from the one behind your web server. Check the web runtime too: your PHP-FPM or Apache module version, or your package manager's installed package.
2. **Update it.** Install the patched package from your distribution, or the versions in the table above.
3. **Restart every PHP worker.** PHP-FPM pools and Apache keep the old code in memory until they restart. An update that hasn't been restarted protects nothing.
4. **Rebuild your containers.** If you run PHP in Docker, rebuild the images from patched base images and redeploy. Wiz found the official `wordpress`, `drupal` and `joomla` images exploitable at the time of its testing.

**If you can't update right away,** the PHP project lists temporary measures that block the known attack paths but not every variant:

- Disable session upload progress: `session.upload_progress.enabled=0`, set in `php.ini`, the FPM pool or the server configuration, not with `ini_set()` or `.user.ini`.
- On PHP 8.5, also set `fatal_error_backtraces=0`.
- Reduce `post_max_size` to what you actually need, and see the PHP advisory for its memory-limit guidance.
- Restart all workers after changing any of these.

Cloudflare has published WAF rules for the known attack patterns, available on its free plan too. It calls them a stopgap, and they only help if your server accepts traffic exclusively through Cloudflare.

If you can do none of this, the UK's National Cyber Security Centre advises considering taking the system offline until you can.

---

## After patching: check for intruders

Because attacks began before the fix, patching closes the door but doesn't tell you whether someone already came in.

- Look for files, scheduled tasks or user accounts you don't recognize, especially changes since **17 October**.
- Check your web server logs for unusual requests to PHP pages since then.
- The flaws can also leak server memory, which may hold passwords and keys. If there is any sign of compromise, rotate database passwords, API keys and other secrets the server uses.

If something looks wrong and the site handles customers' data, bring in a professional rather than cleaning it up alone.

---

## A note on how it was found

Wiz says its researcher used AI models throughout the work, and that "a single researcher completed in a week what previously would have taken a world-class team months of work." Calif, which also reported the issues, has said it used AI models too. That is the researchers' own account, but the direction is hard to miss: bugs that sat unnoticed for a decade are getting cheaper to find, for defenders and attackers alike. Prompt updates matter more than ever.

---

## Does this affect Flincth?

No. This website is a set of static pages built with Jekyll and served by GitHub Pages, so no PHP runs behind it. Our apps and browser extension don't use PHP either. We wrote this because a lot of people who read about tools for their Mac and browser also run a website or two, and this one deserves attention.

---

## Sources

- [PHP security release notes](https://www.php.net/archive/2026.php) (PHP project)
- [PHP2Shell FAQ](https://www.tenable.com/blog/php2shell-cve-2026-109618-cve-2026-109619-frequently-asked-questions-about-critical-php-remote) (Tenable)
- [PHP2Shell: AI uncovers critical RCE vulnerabilities](https://www.wiz.io/blog/php2shell-php-rce) (Wiz Research)
- [PHP2Shell: detection, analysis and remediation](https://securitylabs.datadoghq.com/articles/php2shell-critical-vulnerabilities-in-php/) (Datadog Security Labs)
- [Major security alert: PHP vulnerable to critical RCE](https://patchstack.com/articles/php-major-vulnerability-alert-10-2026/) (Patchstack)
- [Critical security issue affecting PHP](https://www.ncsc.gov.uk/news/critical-security-issue-affecting-php) (UK National Cyber Security Centre)

This post reflects what was public on 22 October 2026. The situation is moving quickly; check your vendor's advisory for the latest.
