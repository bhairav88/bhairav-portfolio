
/* =========================================
   BHAIRAV PORTFOLIO — INTERACTIONS
========================================= */

// Enable entrance animations only when JavaScript runs.
document.documentElement.classList.add("js-ready");

// Mobile navigation
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
const navigationItems = document.querySelectorAll(".nav-links a");

function closeMenu() {
  navLinks.classList.remove("open");
  menuToggle.setAttribute("aria-expanded", "false");
  document.body.classList.remove("menu-open");
}

menuToggle.addEventListener("click", () => {
  const isOpen =
    menuToggle.getAttribute("aria-expanded") === "true";

  if (isOpen) {
    closeMenu();
  } else {
    navLinks.classList.add("open");
    menuToggle.setAttribute("aria-expanded", "true");
    document.body.classList.add("menu-open");
  }
});

// Close the menu after clicking a navigation link.
navigationItems.forEach((link) => {
  link.addEventListener("click", closeMenu);
});

// Close the menu when Escape is pressed.
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeMenu();
  }
});

// Close the mobile menu when switching to desktop layout.
window.addEventListener("resize", () => {
  if (window.innerWidth > 760) {
    closeMenu();
  }
});

// Reveal sections as they enter the viewport.
const sections = document.querySelectorAll("main section");

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries, currentObserver) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          currentObserver.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.08
    }
  );

  sections.forEach((section) => {
    section.classList.add("reveal");
    observer.observe(section);
  });
} else {
  // Fallback for older browsers.
  sections.forEach((section) => {
    section.classList.add("visible");
  });
}

// Keep the footer year current.
const yearElement = document.querySelector("#year");

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}
