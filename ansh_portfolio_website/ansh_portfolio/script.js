/* Ansh Hudda portfolio · script.js */
(() => {
  "use strict";

  /* ----- Mobile navigation ----- */
  const menuToggle = document.getElementById("menu-toggle");
  const siteNav = document.getElementById("site-nav");

  function setMenu(isOpen) {
    siteNav.classList.toggle("open", isOpen);
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute(
      "aria-label",
      isOpen ? "Close navigation" : "Open navigation",
    );
  }

  menuToggle.addEventListener("click", () => {
    setMenu(!siteNav.classList.contains("open"));
  });

  // Close the menu after a link is chosen
  siteNav.addEventListener("click", (event) => {
    if (event.target.closest("a")) setMenu(false);
  });

  // Close with Escape and return focus to the toggle
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && siteNav.classList.contains("open")) {
      setMenu(false);
      menuToggle.focus();
    }
  });

  // Reset the menu when the screen grows past the 860px mobile breakpoint
  window
    .matchMedia("(min-width: 861px)")
    .addEventListener("change", (event) => {
      if (event.matches) setMenu(false);
    });

  /* ----- Footer year ----- */
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ----- Reveal project cards as they scroll into view ----- */
  const cards = document.querySelectorAll(".project-card");

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 },
    );

    cards.forEach((card) => observer.observe(card));
  } else {
    // Older browsers: show every card immediately
    cards.forEach((card) => card.classList.add("visible"));
  }
})();
