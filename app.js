const menuButton = document.querySelector('[data-menu]');
const navLinks = document.querySelector('[data-nav]');

if (menuButton && navLinks) {
  menuButton.addEventListener('click', () => {
    const open = navLinks.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', String(open));
  });
}

const form = document.querySelector('[data-service-form]');
if (form) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    if (!form.reportValidity()) return;
    const data = new FormData(form);
    const message = [
      'ProSharp service request',
      `Name: ${data.get('name')}`,
      `Business: ${data.get('business') || 'Not provided'}`,
      `Phone: ${data.get('phone')}`,
      `Service: ${data.get('service')}`,
      `City: ${data.get('city') || 'Not provided'}`,
      `Preferred timing: ${data.get('timing') || 'Flexible'}`,
      `Details: ${data.get('details') || 'None provided'}`
    ].join('\n');
    const smsLink = `sms:+13852489184?&body=${encodeURIComponent(message)}`;
    const status = document.querySelector('[data-status]');
    status.style.display = 'block';
    status.textContent = 'Your request is ready. Your messaging app should open with the details filled in—review it, then tap Send.';
    window.location.href = smsLink;
  });
}
