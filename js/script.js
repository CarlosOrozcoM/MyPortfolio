document.addEventListener('DOMContentLoaded', () => {
    // Automatically set the current year in the footer
    const yearSpan = document.getElementById('currentYear');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // Navbar shadow on scroll
    const navbar = document.getElementById('navbar');
    if (navbar) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
            } else {
                navbar.style.boxShadow = 'none';
            }
        });
    }

    // EmailJS Form Submit Handler
    const contactForm = document.getElementById('contactForm');
    const btn = document.getElementById('submit-button');

    if (contactForm && btn) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();

            // Update button text using textContent, not value, because it's a <button> tag
            const originalText = btn.textContent;
            btn.textContent = 'Sending...';

            const serviceID = 'default_service';
            const templateID = 'template_8xnjjb3';

            emailjs.sendForm(serviceID, templateID, this)
            .then(() => {
                btn.textContent = originalText;
                alert('I will get in touch soon!');
                contactForm.reset(); // Reset form only after successful sending
            }, (err) => {
                btn.textContent = originalText;
                alert(JSON.stringify(err));
            });
        });
    }
});