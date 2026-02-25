/**
 * EN / UK translations and language switcher.
 * Use data-i18n="key" on elements to replace textContent; key uses dot notation (e.g. nav.home).
 */
const translations = {
  en: {
    skip: "Skip to main content",
    navHome: "Home",
    navWork: "Work",
    navBooks: "Books",
    navServices: "Services",
    navStack: "Stack",
    navContact: "Contact",
    openMenu: "Open main menu",

    heroName: "ILLIA IVASYK",
    heroBadge: "Available for new projects",
    heroTitle: "Web Developer & Landing Specialist",
    heroSub: "WordPress Systems Engineer • Front-End Developer • Amazon Author",
    heroDesc: "Building high-performance WordPress solutions, elegant front-end experiences, and sharing knowledge through technical literature.",
    heroHire: "Hire Me",
    heroProjects: "View Projects",
    heroAmazon: "Amazon Author",

    workLabel: "Portfolio",
    workTitle: "Featured Work",
    workDesc: "Real projects showcasing expertise in WordPress development, front-end engineering, and DevOps automation.",
    workWhatBuilt: "What I Built:",
    workViewProject: "View Project",
    workPerekladDesc: "Professional translation and localization services website. A multilingual platform designed to connect clients with professional translators, featuring clean UX and optimized performance.",
    workBuilt1: "Custom WordPress theme with Tailwind CSS",
    workBuilt2: "Multilingual setup and performance optimization",
    workBuilt3: "Performance optimization and SEO setup",

    booksLabel: "Author",
    booksTitle: "Published Works",
    booksDesc: "Technical literature focused on practical learning, hands-on exercises, and proven methodologies for aspiring developers.",
    booksLearning: "LEARNING",
    booksPractice: "PRACTICE",
    booksZeroHero: "ZERO TO HERO Series",
    booksPractical: "Practical Exercises",
    booksViewAmazon: "View on Amazon",
    booksHtmlGuide: "HTML Complete Guide",
    booksHtml300: "HTML 300 Tasks",
    booksJs300: "JavaScript 300 Tasks",
    booksPy300: "Python 300 Tasks",
    booksJava300: "Java 300 Tasks",

    servicesLabel: "Expertise",
    servicesTitle: "Services",
    servicesDesc: "Professional WordPress development services tailored to your project needs.",
    servicesThemes: "Custom Themes",
    servicesThemesDesc: "Modern WordPress themes built with Sage, Tailwind CSS, and ACF for maximum flexibility and performance.",
    servicesBlade: "Blade Templates",
    servicesCpt: "Custom Post Types",
    servicesResponsive: "Responsive Design",
    servicesPlugins: "Plugin Development",
    servicesPluginsDesc: "Custom WordPress plugins tailored to extend functionality and solve specific business requirements.",
    servicesCustom: "Custom Solutions",
    servicesApi: "API Integrations",
    servicesAdmin: "Admin Interfaces",
    servicesPerf: "Performance",
    servicesPerfDesc: "Speed optimization services to improve Core Web Vitals, load times, and overall user experience.",
    servicesCwv: "Core Web Vitals",
    servicesCaching: "Caching Strategies",
    servicesAsset: "Asset Optimization",
    servicesCicd: "CI/CD Pipelines",
    servicesCicdDesc: "Automated deployment workflows using GitHub Actions for reliable and repeatable releases.",
    servicesGha: "GitHub Actions",
    servicesSsh: "SSH Deployments",
    servicesSecrets: "Secret Management",

    stackLabel: "Tools",
    stackTitle: "Tech Stack",
    stackDesc: "Technologies and tools I work with daily to build exceptional digital experiences.",
    stackFrontend: "Frontend",
    stackUiCssJs: "UI · CSS · JS",
    stackBackend: "Backend",
    stackDevops: "DevOps & Deploy",

    philosophyLabel: "Values",
    philosophyTitle: "Engineering Philosophy",
    philosophyDesc: "Principles that guide every line of code and every project I deliver.",
    philosophyClean: "Clean Architecture First",
    philosophyCleanDesc: "Code should be readable, maintainable, and scalable. I prioritize structure and documentation to ensure long-term project health.",
    philosophyPerf: "Performance by Design",
    philosophyPerfDesc: "Fast websites aren't an afterthought. Optimization is built into every decision, from asset loading to database queries.",
    philosophyAuto: "Automate Everything",
    philosophyAutoDesc: "Manual processes introduce errors. CI/CD pipelines, automated testing, and deployment scripts are standard practice.",
    philosophyShare: "Knowledge Sharing",
    philosophyShareDesc: "Technical writing and teaching deepen understanding. Documentation and education benefit the entire community.",

    contactLabel: "Get in Touch",
    contactTitle: "Let's Build Something Great",
    contactDesc: "Ready to start your next project? I'm available for freelance work, consulting, and collaboration opportunities.",
    contactEmail: "Email",
    contactGitHub: "GitHub",
    contactLinkedIn: "LinkedIn",
    contactAmazon: "Amazon Author Page",

    footerCrafted: "© 2026 Illia Ivasyk. Crafted with precision.",
  },
  uk: {
    skip: "Перейти до основного вмісту",
    navHome: "Головна",
    navWork: "Проєкти",
    navBooks: "Книги",
    navServices: "Послуги",
    navStack: "Стек",
    navContact: "Контакт",
    openMenu: "Відкрити меню",
    
    heroName: "Ілля Івасик",
    heroBadge: "Відкритий до нових проєктів",
    heroTitle: "Веб-розробник та спеціаліст з лендингів",
    heroSub: "Інженер WordPress • Front-End розробник • Автор на Amazon",
    heroDesc: "Створюю швидкі рішення на WordPress, зручний фронтенд і ділюся досвідом через технічну літературу.",
    heroHire: "Написати мені",
    heroProjects: "Дивитись проєкти",
    heroAmazon: "Автор на Amazon",

    workLabel: "Портфоліо",
    workTitle: "Обрані роботи",
    workDesc: "Реальні проєкти: WordPress, фронтенд та DevOps-автоматизація.",
    workWhatBuilt: "Що зроблено:",
    workViewProject: "Дивитись проєкт",
    workPerekladDesc: "Сайт професійних перекладів та локалізації. Багатомовна платформа для зв'язку клієнтів з перекладачами, зручний інтерфейс та оптимізація.",
    workBuilt1: "Кастомна тема WordPress з Tailwind CSS",
    workBuilt2: "Багатомовність та оптимізація швидкодії",
    workBuilt3: "Оптимізація продуктивності та SEO",

    booksLabel: "Автор",
    booksTitle: "Публікації",
    booksDesc: "Технічна література: практика, вправи та перевірені методики для розробників.",
    booksLearning: "НАВЧАННЯ",
    booksPractice: "ПРАКТИКА",
    booksZeroHero: "Серія ZERO TO HERO",
    booksPractical: "Практичні вправи",
    booksViewAmazon: "Дивитись на Amazon",
    booksHtmlGuide: "Повний посібник з HTML",
    booksHtml300: "HTML 300 завдань",
    booksJs300: "JavaScript 300 завдань",
    booksPy300: "Python 300 завдань",
    booksJava300: "Java 300 завдань",

    servicesLabel: "Експертиза",
    servicesTitle: "Послуги",
    servicesDesc: "Розробка під WordPress під ваш проєкт.",
    servicesThemes: "Кастомні теми",
    servicesThemesDesc: "Сучасні теми на Sage, Tailwind CSS та ACF для гнучкості та швидкодії.",
    servicesBlade: "Blade-шаблони",
    servicesCpt: "Custom Post Types",
    servicesResponsive: "Адаптивний дизайн",
    servicesPlugins: "Плагіни",
    servicesPluginsDesc: "Кастомні плагіни WordPress під ваші задачі та бізнес-вимоги.",
    servicesCustom: "Індивідуальні рішення",
    servicesApi: "Інтеграції API",
    servicesAdmin: "Адмін-інтерфейси",
    servicesPerf: "Продуктивність",
    servicesPerfDesc: "Оптимізація швидкодії, Core Web Vitals та завантаження.",
    servicesCwv: "Core Web Vitals",
    servicesCaching: "Кешування",
    servicesAsset: "Оптимізація ресурсів",
    servicesCicd: "CI/CD пайплайни",
    servicesCicdDesc: "Автоматизовані деплої через GitHub Actions для стабільних релізів.",
    servicesGha: "GitHub Actions",
    servicesSsh: "SSH-деплой",
    servicesSecrets: "Управління секретами",

    stackLabel: "Інструменти",
    stackTitle: "Технічний стек",
    stackDesc: "Технології та інструменти, з якими я працюю щодня.",
    stackFrontend: "Фронтенд",
    stackUiCssJs: "UI · CSS · JS",
    stackBackend: "Бекенд",
    stackDevops: "DevOps та деплой",

    philosophyLabel: "Цінності",
    philosophyTitle: "Інженерна філософія",
    philosophyDesc: "Принципи, якими керуюсь у кожному проєкті.",
    philosophyClean: "Чиста архітектура",
    philosophyCleanDesc: "Код має бути читабельним, підтримуваним і масштабованим. Структура та документація — основа довгострокового здоров'я проєкту.",
    philosophyPerf: "Продуктивність з самого початку",
    philosophyPerfDesc: "Швидкі сайти — не випадковість. Оптимізація врахована в кожному рішенні: від завантаження ресурсів до запитів до БД.",
    philosophyAuto: "Автоматизуй усе",
    philosophyAutoDesc: "Ручні процеси породжують помилки. CI/CD, автотести та скрипти деплою — стандартна практика.",
    philosophyShare: "Ділитися знаннями",
    philosophyShareDesc: "Технічне письмо та навчання поглибують розуміння. Документація та освіта корисні всій спільноті.",

    contactLabel: "Зв'язок",
    contactTitle: "Давайте створимо щось крутезне",
    contactDesc: "Готовий розпочати проєкт? Відкритий до фрілансу, консалтингу та співпраці.",
    contactEmail: "Email",
    contactGitHub: "GitHub",
    contactLinkedIn: "LinkedIn",
    contactAmazon: "Сторінка автора на Amazon",

    footerCrafted: "© 2026 Illia Ivasyk. Зроблено з точністю.",
  },
};

const STORAGE_KEY = "portfolio-lang";
const DEFAULT_LANG = "en";

function getStoredLang() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === "uk" || stored === "en") return stored;
  } catch (_) {}
  return DEFAULT_LANG;
}

function setStoredLang(lang) {
  try {
    localStorage.setItem(STORAGE_KEY, lang);
  } catch (_) {}
}

function getTranslation(lang, key) {
  const val = translations[lang]?.[key];
  return val != null ? String(val) : "";
}

/** Apply language: set html lang, then replace all [data-i18n] textContent. */
export function applyLanguage(lang) {
  if (!translations[lang]) lang = DEFAULT_LANG;
  document.documentElement.lang = lang === "uk" ? "uk" : "en";

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (!key) return;
    const text = getTranslation(lang, key);
    if (text) el.textContent = text;
  });

  setStoredLang(lang);
  return lang;
}

export function getCurrentLang() {
  return getStoredLang();
}

export function setLanguage(lang) {
  return applyLanguage(lang);
}

export { translations, DEFAULT_LANG };
