// ===============================
// GHSS CHOWK SARWAR SHAHEED
// Website JavaScript
// ===============================


// Smooth navigation
document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener('click', function (event) {

        const target = document.querySelector(this.getAttribute('href'));

        if (target) {
            event.preventDefault();

            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }

    });

});


// Reveal sections when scrolling
const revealElements = document.querySelectorAll(
    '.section, .info-card, .card, .news-card, .achievement, .gallery-item, .contact-box'
);

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add('show');

            observer.unobserve(entry.target);

        }

    });

}, {
    threshold: 0.12
});


revealElements.forEach(element => {
    element.classList.add('reveal');
    observer.observe(element);
});


// Current year automatically
const year = new Date().getFullYear();

const copyright = document.querySelector('.copyright');

if (copyright) {
    copyright.innerHTML =
        `© ${year} Government Higher Secondary School Chowk Sarwar Shaheed. All Rights Reserved.`;
    }
