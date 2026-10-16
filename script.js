const mobileToggle = document.getElementById('mobileToggle');
const mainNav = document.getElementById('mainNav');

mobileToggle?.addEventListener('click', () => {
  const isOpen = mainNav.classList.toggle('open');
  mobileToggle.setAttribute('aria-expanded', String(isOpen));
  mobileToggle.textContent = isOpen ? '×' : '☰';
});

mainNav?.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    mainNav.classList.remove('open');
    mobileToggle?.setAttribute('aria-expanded', 'false');
    if (mobileToggle) mobileToggle.textContent = '☰';
  });
});

// نمایش تاریخ فارسی
const today = document.getElementById('today');
if (today) {
  today.textContent = new Intl.DateTimeFormat('fa-IR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }).format(new Date());
}

// فرم تماس نمایشی
const contactForm = document.getElementById('contactForm');
const formNote = document.getElementById('formNote');

contactForm?.addEventListener('submit', event => {
  event.preventDefault();
  if (formNote) {
    formNote.textContent =
      'فرم معتبر است، اما هنوز به سامانه ارسال پیام متصل نشده است.';
    formNote.style.color = '#b65b14';
  }
});

// منوهای چهارگانه؛ با باز شدن یکی، بقیه بسته می‌شوند.
const pathwayCards = document.querySelectorAll('.pathway-card');

pathwayCards.forEach(card => {
  card.addEventListener('toggle', () => {
    if (card.open) {
      pathwayCards.forEach(other => {
        if (other !== card) other.open = false;
      });
    }
  });
});
