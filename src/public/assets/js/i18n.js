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
    heroTitle: "WordPress & Front-End Developer Who Delivers Results",
    heroSub: "I build fast, scalable websites that convert visitors into customers—no page builders, no bloat.",
    heroDesc: "Building high-performance WordPress solutions, elegant front-end experiences, and sharing knowledge through technical literature.",
    heroBullet1: "Custom WordPress themes, not templates",
    heroBullet2: "Performance-first, Core Web Vitals optimized",
    heroBullet3: "9+ technical books published on Amazon",
    heroHire: "Hire Me",
    heroProjects: "View Projects",
    heroAmazon: "Amazon Author",

    workLabel: "Portfolio",
    workTitle: "Featured Work",
    workDesc: "Real projects showcasing expertise in WordPress development, front-end engineering, and DevOps automation.",
    workWhatBuilt: "Delivered:",
    workViewProject: "View Project",
    workOpenWebsite: "Open Website",
    workPerekladTitle: "Pereklad.site — Translation & Localization Platform",
    workPerekladProblem: "Problem: A translation agency needed a professional web presence to attract B2B clients. Their old site was slow, hard to update, and didn't support multiple languages.",
    workPerekladSolution: "Solution: Built a custom WordPress theme with multilingual architecture (Polylang + ACF), optimized performance, and set up SEO foundations. Clean UX for both clients and translators.",
    workWpErrorTitle: "WP Error Guard — Error Monitoring Plugin",
    workWpErrorProblem: "Problem: Developers and site administrators need to track PHP errors, warnings, and notices. Default WordPress logging is insufficient for debugging and monitoring.",
    workWpErrorSolution: "Solution: A comprehensive WordPress plugin for monitoring, logging, and managing errors. Real-time dashboard, email notifications, and export tools for analysis.",
    workTykhyiTitle: "Tykhyi Dvir (Тихий Двір) — Custom Business Website",
    workTykhyiProblem: "Problem: A business needed a unique website that reflected their brand—no generic templates. They required flexible content editing and fast performance.",
    workTykhyiSolution: "Solution: Developed a fully custom WordPress theme from scratch (no page builder). Reusable components, ACF-powered flexible blocks, and CI/CD for automated deployments.",
    workThemesProblem: "Problem: Off-the-shelf themes and page builders create bloat, slow sites, and limited flexibility. Clients need maintainable, scalable solutions.",
    workThemesSolution: "Solution: Modern themes built with Sage, Tailwind CSS, and ACF. Clean architecture, accessibility, and seamless content management—no page builder dependency.",
    workCicdProblem: "Problem: Manual FTP deployments are error-prone and slow. Teams need reliable, repeatable release workflows.",
    workCicdSolution: "Solution: Automated pipelines using GitHub Actions. Secure SSH deployments, environment-specific configs, and build processes. One push to deploy.",
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

    servicesLabel: "What I Offer",
    servicesTitle: "Services",
    servicesDesc: "From high-converting landing pages to full business websites, I deliver WordPress solutions built for real-world results.",
    servicesLanding: "Landing Pages",
    servicesLandingDesc: "Single-page sites designed to capture leads and drive conversions. Mobile-first, fast-loading, built for your specific offer.",
    servicesLanding1: "Conversion-optimized layouts",
    servicesLanding2: "Fast load times (< 2s)",
    servicesLanding3: "Contact forms & CTAs",
    servicesBusiness: "Business Websites",
    servicesBusinessDesc: "Full WordPress sites for companies that need a professional online presence. Custom design, easy content management, scalability.",
    servicesBusiness1: "Custom design (no templates)",
    servicesBusiness2: "Easy content editing (ACF)",
    servicesBusiness3: "Multilingual support",
    servicesCustom: "Custom WordPress Development",
    servicesCustomDesc: "Bespoke themes and plugins when off-the-shelf solutions fall short. Clean code, maintainable architecture, no page builder bloat.",
    servicesCustom1: "Sage + Tailwind + ACF",
    servicesCustom2: "Custom post types & plugins",
    servicesCustom3: "CI/CD deployment pipelines",
    servicesPerf: "Performance Optimization",
    servicesPerfDesc: "Slow sites lose customers. I audit, optimize, and fix Core Web Vitals so your site ranks better and converts more.",
    servicesPerf1: "Core Web Vitals improvement",
    servicesPerf2: "Asset optimization",
    servicesPerf3: "Caching & CDN setup",
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

    trustLabel: "Why Work With Me",
    trustTitle: "Trusted by Businesses & Developers",
    trustDesc: "Tools I use daily to ship production-ready code. Real experience, real results.",
    trustStat1: "Technical books published on Amazon",
    trustStat2: "Custom themes—no page builder bloat",
    trustStat3: "Automated deployments standard",
    trustTechTitle: "Technologies",
    trustViewStack: "View full tech stack →",

    ctaLabel: "Ready to Start?",
    ctaTitle: "Let's Build Your Next Website",
    ctaDesc: "Whether you need a landing page, a full business site, or a custom WordPress solution—I deliver clean code, fast performance, and results you can measure. Tell me about your project and I'll get back within 24 hours.",
    ctaButton1: "Describe Your Project",
    ctaButton2: "Send Email",
    ctaTrust: "No obligation. Just a short conversation to see if we're a fit.",

    contactLabel: "Get in Touch",
    contactTitle: "Let's Build Something Great",
    contactDesc: "The fastest way to start is by email. Share your project idea, timeline, and budget—I'll respond within 24 hours.",
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
    heroTitle: "WordPress та Front-End розробник, який дає результати",
    heroSub: "Створюю швидкі, масштабовані сайти, що перетворюють відвідувачів на клієнтів—без конструкторів сторінок і зайвого коду.",
    heroDesc: "Створюю швидкі рішення на WordPress, зручний фронтенд і ділюся досвідом через технічну літературу.",
    heroBullet1: "Кастомні теми WordPress, не шаблони",
    heroBullet2: "Продуктивність на першому місці, Core Web Vitals",
    heroBullet3: "9+ технічних книг на Amazon",
    heroHire: "Написати мені",
    heroProjects: "Дивитись проєкти",
    heroAmazon: "Автор на Amazon",

    workLabel: "Портфоліо",
    workTitle: "Обрані роботи",
    workDesc: "Реальні проєкти: WordPress, фронтенд та DevOps-автоматизація.",
    workWhatBuilt: "Зроблено:",
    workViewProject: "Дивитись проєкт",
    workOpenWebsite: "Відкрити сайт",
    workPerekladTitle: "Pereklad.site — Платформа перекладів та локалізації",
    workPerekladProblem: "Проблема: Бюро перекладів потребувало професійної веб-присутності для залучення B2B-клієнтів. Старий сайт був повільним, важким для оновлення і не підтримував кілька мов.",
    workPerekladSolution: "Рішення: Кастомна тема WordPress з багатомовною архітектурою (Polylang + ACF), оптимізація продуктивності та SEO. Зручний UX для клієнтів і перекладачів.",
    workWpErrorTitle: "WP Error Guard — Плагін моніторингу помилок",
    workWpErrorProblem: "Проблема: Розробникам та адміністраторам потрібно відстежувати PHP-помилки, попередження та нотиси. Стандартне логування WordPress недостатнє для дебагу.",
    workWpErrorSolution: "Рішення: Плагін для моніторингу, логування та управління помилками. Дашборд у реальному часі, email-сповіщення та експорт для аналізу.",
    workTykhyiTitle: "Тихий Двір — Кастомний бізнес-сайт",
    workTykhyiProblem: "Проблема: Бізнесу потрібен унікальний сайт, що відображає бренд—без шаблонів. Потрібне гнучке редагування контенту та швидкість.",
    workTykhyiSolution: "Рішення: Повністю кастомна тема WordPress з нуля (без конструктора). Перевикористовувані компоненти, ACF-блоки та CI/CD для автоматичних деплоїв.",
    workThemesProblem: "Проблема: Готові теми та конструктори створюють зайвий код, повільні сайти та обмежену гнучкість. Клієнтам потрібні підтримувані, масштабовані рішення.",
    workThemesSolution: "Рішення: Сучасні теми на Sage, Tailwind CSS та ACF. Чиста архітектура, доступність, зручне управління контентом—без конструкторів.",
    workCicdProblem: "Проблема: Ручні FTP-деплої схильні до помилок і повільні. Командам потрібні надійні, повторювані процеси релізу.",
    workCicdSolution: "Рішення: Автоматизовані пайплайни на GitHub Actions. Безпечні SSH-деплої, конфіги для середовищ, збірка. Один push — і деплой.",
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

    servicesLabel: "Що я пропоную",
    servicesTitle: "Послуги",
    servicesDesc: "Від конверсійних лендингів до повноцінних бізнес-сайтів—рішення на WordPress для реальних результатів.",
    servicesLanding: "Лендинги",
    servicesLandingDesc: "Односторінкові сайти для збору лідів та конверсій. Mobile-first, швидке завантаження, під вашу пропозицію.",
    servicesLanding1: "Конверсійні макети",
    servicesLanding2: "Швидке завантаження (< 2 с)",
    servicesLanding3: "Форми та CTA",
    servicesBusiness: "Бізнес-сайти",
    servicesBusinessDesc: "Повноцінні сайти на WordPress для компаній. Кастомний дизайн, зручне редагування контенту, масштабованість.",
    servicesBusiness1: "Кастомний дизайн (без шаблонів)",
    servicesBusiness2: "Зручне редагування (ACF)",
    servicesBusiness3: "Багатомовність",
    servicesCustom: "Кастомна розробка WordPress",
    servicesCustomDesc: "Індивідуальні теми та плагіни, коли готові рішення не підходять. Чистий код, підтримувана архітектура, без конструкторів.",
    servicesCustom1: "Sage + Tailwind + ACF",
    servicesCustom2: "Custom post types та плагіни",
    servicesCustom3: "CI/CD пайплайни деплою",
    servicesPerf: "Оптимізація продуктивності",
    servicesPerfDesc: "Повільні сайти втрачають клієнтів. Аудит, оптимізація Core Web Vitals—краща позиція та конверсія.",
    servicesPerf1: "Покращення Core Web Vitals",
    servicesPerf2: "Оптимізація ресурсів",
    servicesPerf3: "Кешування та CDN",
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

    trustLabel: "Чому варто працювати зі мною",
    trustTitle: "Мені довіряють бізнеси та розробники",
    trustDesc: "Інструменти, якими я щодня створюю production-ready код. Реальний досвід, реальні результати.",
    trustStat1: "Технічних книг опубліковано на Amazon",
    trustStat2: "Кастомні теми—без конструкторів",
    trustStat3: "Автоматизовані деплої за замовчуванням",
    trustTechTitle: "Технології",
    trustViewStack: "Дивитись повний стек →",

    ctaLabel: "Готові почати?",
    ctaTitle: "Давайте створимо ваш наступний сайт",
    ctaDesc: "Потрібен лендинг, повноцінний бізнес-сайт чи кастомне рішення на WordPress—я даю чистий код, швидкість і вимірювані результати. Опишіть проєкт, і я відповім протягом 24 годин.",
    ctaButton1: "Описати проєкт",
    ctaButton2: "Написати на email",
    ctaTrust: "Без зобов'язань. Просто коротка розмова, щоб зрозуміти, чи підходимо один одному.",

    contactLabel: "Зв'язок",
    contactTitle: "Давайте створимо щось крутезне",
    contactDesc: "Найшвидший спосіб почати—написати на email. Опишіть ідею, терміни та бюджет—відповім протягом 24 годин.",
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
