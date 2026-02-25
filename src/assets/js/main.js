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
  document
    .querySelectorAll('a[href^="#"]')
    .forEach((anchor) => {
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
});

