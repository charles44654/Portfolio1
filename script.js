// Menu burger pour mobile
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
}

// Fermer le menu après un clic sur un lien
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// Simulation d'envoi de formulaire (feedback uniquement)
const form = document.getElementById('demoForm');
const feedback = document.getElementById('formFeedback');

if (form) {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const btn = document.getElementById('submitBtn');
        const originalText = btn.innerHTML;
        btn.innerHTML = '<i class="fas fa-spinner fa-pulse"></i> Envoi...';
        btn.disabled = true;

        setTimeout(() => {
            feedback.innerHTML = '✓ Message bien reçu ! Je vous recontacte très vite.';
            feedback.style.color = '#2c7a4a';
            form.reset();
            btn.innerHTML = originalText;
            btn.disabled = false;

            setTimeout(() => {
                feedback.innerHTML = '';
            }, 4000);
        }, 800);
    });
}

// Animation d'apparition des cartes projets
window.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.project-card');
    cards.forEach((card, idx) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        setTimeout(() => {
            card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, idx * 100);
    });
});
