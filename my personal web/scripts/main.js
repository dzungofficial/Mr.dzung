// Smooth Scrolling for Navigation Links
document.addEventListener('DOMContentLoaded', () => {
    // Add smooth scrolling to all navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault(); // Prevent default anchor behavior
            const targetId = this.getAttribute('href'); // Get the target section ID
            const targetSection = document.querySelector(targetId); // Find the target section

            if (targetSection) {
                // Scroll to the target section smoothly
                targetSection.scrollIntoView({
                    behavior: 'smooth', // Smooth scrolling
                    block: 'start', // Align to the top of the section
                });
            }
        });
    });

    // Optional: Add a scroll-to-top button
    const scrollToTopButton = document.createElement('button');
    scrollToTopButton.id = 'scroll-to-top';
    scrollToTopButton.innerHTML = '↑';
    document.body.appendChild(scrollToTopButton);

    // Show/hide scroll-to-top button based on scroll position
    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            scrollToTopButton.style.display = 'block';
        } else {
            scrollToTopButton.style.display = 'none';
        }
    });

    // Scroll to top when the button is clicked
    scrollToTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    });
});

// Mobile Navigation Toggle
document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.createElement('div');
    menuToggle.className = 'menu-toggle';
    menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
    document.querySelector('.nav-content').appendChild(menuToggle);

    const navLinks = document.querySelector('.nav-links');

    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Close menu when a link is clicked
    navLinks.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});