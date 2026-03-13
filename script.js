const menuToggle = document.querySelector("[data-menu-toggle]");
const navigation = document.querySelector("[data-nav]");
const header = document.querySelector("[data-site-header]");
const utilityToggle = document.querySelector("[data-utility-toggle]");
const utilityPanel = document.querySelector("[data-utility-panel]");
const navLinks = navigation ? navigation.querySelectorAll("a") : [];
const mobileBreakpoint = window.matchMedia("(max-width: 800px)");

if (utilityToggle && utilityPanel) {
  const closeUtilityPanel = () => {
    utilityToggle.setAttribute("aria-expanded", "false");
    utilityPanel.hidden = true;
  };

  const openUtilityPanel = () => {
    utilityToggle.setAttribute("aria-expanded", "true");
    utilityPanel.hidden = false;
  };

  const syncUtilityPanel = () => {
    if (mobileBreakpoint.matches) {
      closeUtilityPanel();
      return;
    }

    utilityToggle.setAttribute("aria-expanded", "false");
    utilityPanel.hidden = false;
  };

  syncUtilityPanel();

  utilityToggle.addEventListener("click", () => {
    const isOpen = utilityToggle.getAttribute("aria-expanded") === "true";
    if (isOpen) {
      closeUtilityPanel();
      return;
    }

    openUtilityPanel();
  });

  mobileBreakpoint.addEventListener("change", syncUtilityPanel);
}

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
      const utilityIsOpen =
        utilityToggle &&
        utilityPanel &&
        mobileBreakpoint.matches &&
        utilityToggle.getAttribute("aria-expanded") === "true";

      if (utilityIsOpen) {
        utilityToggle.setAttribute("aria-expanded", "false");
        utilityPanel.hidden = true;
        utilityToggle.focus();
        return;
      }

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
