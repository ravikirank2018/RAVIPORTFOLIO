// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Fade-in on scroll for sections
const faders = document.querySelectorAll('.animate__fadeIn, .animate__fadeInUp');
const options = {
    threshold: 0.1,
    rootMargin: "0px 0px -100px 0px"
};

const appearOnScroll = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('fade-in');
        observer.unobserve(entry.target);
    });
}, options);

faders.forEach(fader => {
    appearOnScroll.observe(fader);
});

// Theme toggle functionality
function toggleTheme() {
    document.body.classList.toggle('dark-mode');
}
