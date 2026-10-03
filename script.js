// Toggle responsive mobile navigation menu
let menuIcon = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-times');
    navbar.classList.toggle('active');
};

// Active link state on scroll & close menu on click
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('.navbar a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.getAttribute('height');
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + sec.offsetHeight) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('.navbar a[href*=' + id + ']').classList.add('active');
            });
        }
    });

    // Remove mobile menu on scroll
    menuIcon.classList.remove('fa-times');
    navbar.classList.remove('active');
};

// Handle Contact Form Submission Alert
const contactForm = document.getElementById('contact-form');
if(contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Thank you! Your message has been sent successfully. I will get back to you soon.');
        contactForm.reset();
    });
}