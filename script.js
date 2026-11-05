// Mobile menu toggle
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('show');
});

// Close menu when link clicked
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('show');
    });
});

// Active nav link on scroll
const sections = document.querySelectorAll('section');
const navAs = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const top = section.offsetTop - 100;
        if (window.scrollY >= top) {
            current = section.getAttribute('id');
        }
    });
    navAs.forEach(a => {
        a.classList.remove('active');
        if (a.getAttribute('href') === '#' + current) {
            a.classList.add('active');
        }
    });
});

// Animate skill bars when visible
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const fills = entry.target.querySelectorAll('.fill');
            fills.forEach(fill => {
                fill.style.width = fill.getAttribute('data-width') + '%';
            });
        }
    });
}, { threshold: 0.3 });

const skillsSection = document.getElementById('skills');
if (skillsSection) observer.observe(skillsSection);

// Form validation
const form = document.getElementById('contactForm');
const formMsg = document.getElementById('formMsg');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (name === '' || email === '' || message === '') {
        formMsg.style.color = 'red';
        formMsg.textContent = 'Please fill all fields.';
        return;
    }
    if (!email.includes('@')) {
        formMsg.style.color = 'red';
        formMsg.textContent = 'Please enter a valid email.';
        return;
    }

    formMsg.style.color = '#00ff88';
    formMsg.textContent = 'Thanks ' + name + '! Your message has been sent.';
    form.reset();
});