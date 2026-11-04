(() => {
  const menuButton = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.main-nav');
  menuButton?.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', String(open));
    menuButton.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
  });
  nav?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    nav.classList.remove('open');
    menuButton?.setAttribute('aria-expanded', 'false');
  }));

  const revealItems = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    revealItems.forEach(item => observer.observe(item));
  } else {
    revealItems.forEach(item => item.classList.add('is-visible'));
  }

  const range = document.getElementById('compareRange');
  const compare = document.getElementById('compare');
  range?.addEventListener('input', () => compare.style.setProperty('--split', `${range.value}%`));

  const form = document.getElementById('bookingForm');
  const note = document.getElementById('formNote');
  form?.addEventListener('submit', event => {
    event.preventDefault();
    if (!form.reportValidity()) return;
    const data = new FormData(form);
    const fields = [
      'Hello Leakage Specialist, I would like to request a thermal inspection.',
      `Name: ${data.get('name')}`,
      `Mobile: ${data.get('phone')}`,
      `Email: ${data.get('email') || 'Not provided'}`,
      `Property location: ${data.get('location')}`,
      `Inspection type: ${data.get('type')}`,
      `Problem description: ${data.get('message') || 'Not provided'}`,
      data.get('photo')?.name ? `Photo selected: ${data.get('photo').name} (I will attach it in this WhatsApp chat)` : ''
    ].filter(Boolean);
    const url = `https://wa.me/918808188105?text=${encodeURIComponent(fields.join('\n'))}`;
    note.textContent = 'Opening WhatsApp with your inspection details. Review the message and press Send in WhatsApp. If you selected a photo, attach it manually in the chat.';
    window.open(url, '_blank', 'noopener,noreferrer');
  });
})();