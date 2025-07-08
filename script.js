// Smooth scroll for nav links
document.querySelectorAll('.navbar a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Hero buttons scroll
document.querySelector('.hero-btn')?.addEventListener('click', () => {
  document.querySelector('#collections').scrollIntoView({ behavior: 'smooth' });
});

document.querySelector('.shop-now-btn')?.addEventListener('click', () => {
  document.querySelector('#collections').scrollIntoView({ behavior: 'smooth' });
});

// Scroll reveal animations
const revealEls = document.querySelectorAll('.fade-in-up, .slide-left, .slide-right');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('reveal-visible');
    }
  });
}, { threshold: 0.1 });

revealEls.forEach(el => observer.observe(el));

// Dark mode toggle
const darkToggle = document.getElementById('darkToggle');
darkToggle?.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  darkToggle.textContent = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
});

// Newsletter modal logic
const modal = document.getElementById('newsletterModal');
const subscribeBtn = document.getElementById('subscribeBtn');
const closeBtn = document.querySelector('.close-btn');

setTimeout(() => {
  if (modal) modal.style.display = 'flex';
}, 3000);

closeBtn?.addEventListener('click', () => {
  modal.style.display = 'none';
});

subscribeBtn?.addEventListener('click', () => {
  const email = document.getElementById('emailInput')?.value;
  if (email && email.includes('@')) {
    alert(`Subscribed with ${email}`);
    modal.style.display = 'none';
  } else {
    alert('Please enter a valid email!');
  }
});

// Custom cursor
const cursorDot = document.querySelector('.cursor-dot');
window.addEventListener('mousemove', e => {
  if (cursorDot) {
    cursorDot.style.left = `${e.clientX}px`;
    cursorDot.style.top = `${e.clientY}px`;
  }
});
