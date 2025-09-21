// Toggle mobile menu
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

// Contact form validation
const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

if(contactForm){
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if(name && email && message){
      formMessage.textContent = 'Thank you! Your message has been sent.';
      formMessage.style.color = 'green';
      contactForm.reset();
    } else {
      formMessage.textContent = 'Please fill out all fields.';
      formMessage.style.color = 'red';
    }
  });
}