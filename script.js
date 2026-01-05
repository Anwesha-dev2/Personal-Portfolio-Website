// ================================
// Mobile Menu Toggle
// ================================
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (menuToggle && navLinks) {
  menuToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('active');
    menuToggle.setAttribute('aria-expanded', isOpen);
  });
}

// ================================
// Smooth Scrolling (Fixed Navbar Safe)
// ================================
const NAVBAR_HEIGHT = 80; // adjust if navbar height changes

document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', event => {
    const targetId = link.getAttribute('href');

    if (!targetId.startsWith('#')) return;

    event.preventDefault();
    const target = document.querySelector(targetId);

    if (!target) return;

    const targetPosition =
      target.getBoundingClientRect().top + window.pageYOffset - NAVBAR_HEIGHT;

    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth'
    });

    // Close mobile menu after click
    navLinks.classList.remove('active');
    menuToggle?.setAttribute('aria-expanded', 'false');
  });
});

// ================================
// Skills Selection (Single Active)
// ================================
const skills = document.querySelectorAll('.skill-item');

skills.forEach(skill => {
  skill.addEventListener('click', () => {
    skills.forEach(s => s.classList.remove('selected'));
    skill.classList.add('selected');
  });
});
