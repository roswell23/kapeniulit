document.addEventListener('DOMContentLoaded', function() {
    // Contact form functionality
    const contactForm = document.querySelector('#contactForm'); // Updated selector to match the form ID
    contactForm.addEventListener('submit', handleFormSubmit);

    // Form validation
    function handleFormSubmit(event) {
        event.preventDefault(); // Prevent default form submission
        // Validate form fields
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;

        if (!name || !email || !subject || !message) {
            alert('Please fill in all fields.'); // Alert for validation error
            return;
        }

        // Proceed with form submission (e.g., send data to server)
        console.log('Form submitted:', { name, email, subject, message });
        alert('Thank you for your message! We will get back to you soon.'); // Alert for successful submission
        contactForm.reset(); // Reset form after submission
    }

    // Navbar effects
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    navLinks.forEach(link => {
        link.addEventListener('mouseenter', handleNavLinkHover);
        link.addEventListener('mouseleave', handleNavLinkLeave);
        link.addEventListener('click', handleNavLinkClick);
    });

    // Scroll effect for navbar
    window.addEventListener('scroll', handleNavbarScroll);

    // Initial display of coffees
    displayCoffees();

    // Coffee filter functionality
    document.getElementById('coffee-filter').addEventListener('change', function() {
        displayCoffees(this.value);
    });
});  
