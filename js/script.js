document.addEventListener('DOMContentLoaded', () => {
    // Automatically set the current year in the footer
    const yearSpan = document.getElementById('currentYear');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // Example of a simple form submit handler (prevent default)
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            // Here you would typically handle the form submission, 
            // e.g., send data to an API or email service.
            alert('¡Gracias por tu mensaje! (Esta es una respuesta genérica de prueba)');
            contactForm.reset();
        });
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
});
