const menuToggle = document.querySelector("[data-menu-toggle]");
const navigation = document.querySelector("[data-nav]");
const header = document.querySelector("[data-site-header]");
const navLinks = navigation ? navigation.querySelectorAll("a") : [];

if (menuToggle && navigation) {
  // Keep menu state changes in one place so button and nav stay synchronized.
  const closeMenu = () => {
    menuToggle.setAttribute("aria-expanded", "false");
    navigation.dataset.open = "false";
  };

  const openMenu = () => {
    menuToggle.setAttribute("aria-expanded", "true");
    navigation.dataset.open = "true";
  };

  closeMenu();

  menuToggle.addEventListener("click", () => {
    // The button state is the single source of truth for whether the menu is open.
    const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
    if (isOpen) {
      closeMenu();
      return;
    }

    openMenu();
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (window.innerWidth <= 800) {
        closeMenu();
      }
    });
  });

  document.addEventListener("keydown", (event) => {
    // Escape gives keyboard users a predictable way to dismiss the mobile menu.
    if (event.key === "Escape") {
      closeMenu();
      menuToggle.focus();
    }
  });

  window.addEventListener("resize", () => {
    // Reset nav state when switching between mobile and desktop layouts.
    if (window.innerWidth > 800) {
      navigation.dataset.open = "true";
      menuToggle.setAttribute("aria-expanded", "false");
      return;
    }

    closeMenu();
  });
}

if (header) {
  // A subtle shadow helps the sticky header separate from content after scrolling.
  const updateHeaderState = () => {
    header.classList.toggle("is-scrolled", window.scrollY > 12);
  };

  updateHeaderState();
  window.addEventListener("scroll", updateHeaderState, { passive: true });
}
