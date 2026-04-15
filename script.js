const menuToggle = document.getElementById('menuToggle');
const mainMenu = document.getElementById('mainMenu');
const contactForm = document.getElementById('contactForm');
const formStatus = document.getElementById('formStatus');

if (menuToggle && mainMenu) {
  menuToggle.addEventListener('click', () => {
    const expanded = menuToggle.getAttribute('aria-expanded') === 'true';
    menuToggle.setAttribute('aria-expanded', String(!expanded));
    mainMenu.classList.toggle('open');
  });
}

if (contactForm && formStatus) {
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();
    formStatus.textContent = 'تم إرسال رسالتك بنجاح، وسيتم التواصل معك قريباً.';
    contactForm.reset();
  });
}
