const menuToggle = document.querySelector("#menu-toggle");
const siteNav = document.querySelector("#site-nav");

// Open or close the mobile navigation.
menuToggle.addEventListener("click", () => {
  const isOpen = siteNav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
});

// Close the mobile navigation after choosing a section.
siteNav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    siteNav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open navigation");
  });
});

// Keep the copyright year current.
document.querySelector("#year").textContent = new Date().getFullYear();
