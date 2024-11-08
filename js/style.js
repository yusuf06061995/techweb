document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


// main.js
document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('shrink');
        } else {
            navbar.classList.remove('shrink');
        }
    });
});


document.querySelectorAll('.cta-button').forEach(button => {
    button.addEventListener('click', () => {
        button.classList.add('clicked');
        setTimeout(() => {
            button.classList.remove('clicked');
        }, 300);
    });
});



// JavaScript to change icon color on hover
document.querySelectorAll('.service-card').forEach(card => {
    const icon = card.querySelector('.service-icon');
    card.addEventListener('mouseenter', () => {
        icon.style.color = '#ff6347'; // Change to accent color on hover
    });
    card.addEventListener('mouseleave', () => {
        icon.style.color = 'var(--primary-color)'; // Revert to original color
    });
});


// Add click animation to submit button
document.querySelector('.submit-btn').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent actual form submission for demo purposes
    this.classList.add('clicked');
    setTimeout(() => {
        this.classList.remove('clicked');
        alert('Message sent successfully!');
    }, 300);
});


// Smooth scroll to section
document.querySelectorAll('.footer-links a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
