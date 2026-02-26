import Swiper from "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs";
import { applyLanguage, getCurrentLang } from "./i18n.js";

document.addEventListener("DOMContentLoaded", () => {
  // Apply saved language (EN/UK) so all [data-i18n] show correct text
  applyLanguage(getCurrentLang());
  updateLangSwitcherUI(getCurrentLang());

  // Language switcher: EN | UA
  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const lang = btn.getAttribute("data-lang");
      if (lang === "en" || lang === "uk") {
        applyLanguage(lang);
        updateLangSwitcherUI(lang);
      }
    });
  });

  function updateLangSwitcherUI(lang) {
    document.querySelectorAll(".lang-btn").forEach((b) => {
      const isActive = b.getAttribute("data-lang") === lang;
      b.setAttribute("aria-pressed", isActive ? "true" : "false");
      b.classList.toggle("text-stellar-cyan", isActive);
      b.classList.toggle("text-gray-300", !isActive);
    });
  }

  // Initialise projects slider via Swiper if present
  const projectsSlider = document.getElementById("projects-slider");
  if (projectsSlider) {
    const viewport = projectsSlider.querySelector(".slider__viewport");
    if (viewport) {
      // Swiper uses existing layout + classes, без зміни стилів
      // container: viewport, wrapper: .slider__track, slide: .slider__slide
      // навігація: вже існуючі кнопки і точки
      // eslint-disable-next-line no-new
      new Swiper(viewport, {
        loop: true,
        speed: 300,
        wrapperClass: "slider__track",
        slideClass: "slider__slide",
        navigation: {
          nextEl: ".slider__btn--next",
          prevEl: ".slider__btn--prev",
        },
        pagination: {
          el: ".slider__dots",
          clickable: true,
          bulletClass: "slider__dot",
          bulletActiveClass: "slider__dot--active",
        },
        keyboard: {
          enabled: true,
          onlyInViewport: true,
        },
      });
    }
  }

  // Smooth scroll for navigation
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", (event) => {
      const href = anchor.getAttribute("href");
      if (!href || href === "#") return;

      const target = document.querySelector(href);
      if (!target) return;

      event.preventDefault();
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  });

  // Intersection Observer for section reveal animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("opacity-100", "translate-y-0");
          entry.target.classList.remove("opacity-0", "translate-y-8");
        }
      });
    }, observerOptions);

    document.querySelectorAll("section").forEach((section) => {
      section.classList.add("transition-all", "duration-700", "ease-out");
      observer.observe(section);
    });
  }

  // Navbar scroll effect
  const navbar = document.querySelector("nav");
  if (navbar) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        navbar.classList.add("shadow-lg", "shadow-cosmic-500/5");
      } else {
        navbar.classList.remove("shadow-lg", "shadow-cosmic-500/5");
      }
    });
  }

  // Mobile menu (burger)
  const mobileMenuBtn = document.getElementById("mobile-menu-btn");
  const mobileMenu = document.getElementById("mobile-menu");
  const body = document.body;

  if (mobileMenuBtn && mobileMenu && body) {
    let isOpen = false;

    // Create dark overlay behind nav but above page content
    const overlay = document.createElement("div");
    overlay.id = "mobile-menu-overlay";
    overlay.className =
      "fixed inset-0 bg-space-900/70 backdrop-blur-sm opacity-0 pointer-events-none " +
      "transition-opacity duration-300 z-40";
    document.body.appendChild(overlay);

    // Prepare menu for animated open/close
    mobileMenu.classList.add(
      "transition-all",
      "duration-300",
      "ease-out",
      "transform",
      "opacity-0",
      "-translate-y-2",
      "pointer-events-none",
    );

    // Current burger icon path (3 lines) -> we’ll morph it to X
    const burgerPath = mobileMenuBtn.querySelector("svg path");
    const BURGER_D = "M4 6h16M4 12h16M4 18h16";
    const CLOSE_D = "M6 18L18 6M6 6l12 12";

    function setBurgerIcon(open) {
      if (!burgerPath) return;
      burgerPath.setAttribute("d", open ? CLOSE_D : BURGER_D);
    }

    function lockScroll() {
      body.style.overflow = "hidden";
    }

    function unlockScroll() {
      body.style.overflow = "";
    }

    function openMenu() {
      if (isOpen) return;
      isOpen = true;
      mobileMenuBtn.setAttribute("aria-expanded", "true");

      // Show overlay & menu with animation
      overlay.classList.remove("pointer-events-none");
      requestAnimationFrame(() => {
        overlay.classList.add("opacity-100");
      });

      mobileMenu.classList.remove("hidden", "pointer-events-none");
      // small delay to allow transition from initial state
      requestAnimationFrame(() => {
        mobileMenu.classList.remove("opacity-0", "-translate-y-2");
        mobileMenu.classList.add("opacity-100", "translate-y-0");
      });

      lockScroll();
      setBurgerIcon(true);
    }

    function closeMenu() {
      if (!isOpen) return;
      isOpen = false;
      mobileMenuBtn.setAttribute("aria-expanded", "false");

      // Fade out overlay
      overlay.classList.remove("opacity-100");
      // fade/slide menu up
      mobileMenu.classList.remove("opacity-100", "translate-y-0");
      mobileMenu.classList.add(
        "opacity-0",
        "-translate-y-2",
        "pointer-events-none",
      );

      // After transition, hide menu completely
      setTimeout(() => {
        if (!isOpen) {
          mobileMenu.classList.add("hidden");
          overlay.classList.add("pointer-events-none");
        }
      }, 300); // matches duration-300

      unlockScroll();
      setBurgerIcon(false);
    }

    function toggleMenu() {
      if (isOpen) {
        closeMenu();
      } else {
        openMenu();
      }
    }

    // Toggle on burger click
    mobileMenuBtn.addEventListener("click", (event) => {
      event.stopPropagation();
      toggleMenu();
    });

    // Close when clicking overlay
    overlay.addEventListener("click", () => {
      if (isOpen) closeMenu();
    });

    // Close on Escape
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && isOpen) {
        closeMenu();
      }
    });

    // Close when clicking any nav link inside mobile menu
    mobileMenu.querySelectorAll('a[href^="#"]').forEach((link) => {
      link.addEventListener("click", () => {
        if (isOpen) closeMenu();
      });
    });

    // Close when clicking language switch buttons
    document.querySelectorAll(".lang-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        if (isOpen) closeMenu();
      });
    });
  }
});
