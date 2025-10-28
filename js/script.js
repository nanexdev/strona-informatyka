// Mobile menu toggle functionality
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Active link highlighting
    const currentLocation = window.location.pathname;
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentLocation.split('/').pop()) {
            link.classList.add('active');
        }
    });

    // Form validation for contact page
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Basic form validation
            let isValid = true;
            const email = contactForm.querySelector('input[type="email"]');
            const message = contactForm.querySelector('textarea');

            if (!email.value.includes('@')) {
                alert('Please enter a valid email address');
                isValid = false;
            }

            if (message.value.length < 10) {
                alert('Please enter a message with at least 10 characters');
                isValid = false;
            }

            if (isValid) {
                alert('Thank you for your message! We will get back to you soon.');
                contactForm.reset();
            }
        });
    }
});