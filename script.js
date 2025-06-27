// Toggle mobile menu
const menuBtn = document.getElementById("menu-btn");
const navMenu = document.getElementById("nav-menu");
const mobileMenu = document.getElementById("mobile-menu");

menuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});

// Typewriter effect
const roles = [
  "Web Developer",
  "Web Designer",
  "QA Developer",
  "WordPress Developer",
  "Content Creator"
];
const typeEl = document.getElementById("typewriter");
let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;
let speed = 100;

function type() {
  const current = roles[roleIndex];
  if (isDeleting) {
    typeEl.textContent = current.substring(0, charIndex--);
    speed = 50;
  } else {
    typeEl.textContent = current.substring(0, charIndex++);
    speed = 100;
  }

  if (!isDeleting && charIndex === current.length) {
    isDeleting = true;
    speed = 1500; 
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    roleIndex = (roleIndex + 1) % roles.length;
    speed = 500;
  }

  setTimeout(type, speed);
}

type();
