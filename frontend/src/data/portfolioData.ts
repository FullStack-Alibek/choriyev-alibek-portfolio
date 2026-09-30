export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: {
    en: string;
    uz: string;
    ru: string;
  };
  longDescription: {
    en: string;
    uz: string;
    ru: string;
  };
  category: "Saas Platform" | "Mobile Apps" | "Web Apps" | "Full Stack";
  tags: string[];
  techStack: string[];
  featured: boolean;
  image: string;
  screenshots: string[];
  liveUrl: string;
  githubUrl: string;
  metrics: {
    label: { en: string; uz: string; ru: string };
    value: string;
  }[];
  features: {
    en: string[];
    uz: string[];
    ru: string[];
  };
}

export interface SkillItem {
  name: string;
  category: "Frontend" | "Backend" | "Mobile" | "Database" | "DevOps";
  proficiency: number;
  iconName: string;
  yearsOfExp: number;
  description: {
    en: string;
    uz: string;
    ru: string;
  };
}

export interface ServiceItem {
  id: string;
  title: { en: string; uz: string; ru: string };
  description: { en: string; uz: string; ru: string };
  icon: string;
  deliverables: { en: string[]; uz: string[]; ru: string[] };
  startingPrice: string;
  timeline: string;
  featured: boolean;
}

export interface ExperienceItem {
  id: string;
  role: { en: string; uz: string; ru: string };
  company: string;
  location: string;
  type: string;
  period: string;
  current: boolean;
  description: { en: string; uz: string; ru: string };
  achievements: { en: string[]; uz: string[]; ru: string[] };
  technologies: string[];
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  content: { en: string; uz: string; ru: string };
  rating: number;
}

export interface BlogPost {
  slug: string;
  title: { en: string; uz: string; ru: string };
  excerpt: { en: string; uz: string; ru: string };
  content: { en: string; uz: string; ru: string };
  date: string;
  readTime: string;
  category: string;
  tags: string[];
  image: string;
  author: {
    name: string;
    avatar: string;
    role: string;
  };
}

export const developerProfile = {
  name: "Alibek Choriyev",
  title: "Full Stack Developer",
  location: "Uzbekistan",
  email: "choriyevalibek226@gmail.com",
  phone: "+998 91 846 70 06",
  phoneUrl: "tel:+998918467006",
  whatsapp: "+998 91 574 19 03",
  whatsappUrl: "https://wa.me/998915741903",
  telegram: "https://t.me/choriyev_alibek",
  telegramHandle: "@choriyev_alibek",
  instagram: "https://instagram.com/2008a_libek",
  instagramHandle: "@2008a_libek",
  tiktok: "https://tiktok.com/@choriyev.alibek",
  tiktokHandle: "@choriyev.alibek",
  github: "https://github.com/FullStack-Alibek",
  githubHandle: "@FullStack-Alibek",
  linkedin: "https://linkedin.com/in/alibek-choriyev",
  availability: "Available for freelance projects & full-time roles",
  bio: {
    en: "Full Stack Developer specializing in Next.js, React Native, TypeScript, Node.js, FastAPI and PostgreSQL. I build modern web applications, mobile apps and scalable SaaS products.",
    uz: "Next.js, React Native, TypeScript, Node.js, FastAPI va PostgreSQL bo'yicha ixtisoslashgan Full Stack Dasturchi. Zamonaviy web ilovalar, mobil ilovalar va kengayuvchan SaaS mahsulotlarini yarataman.",
    ru: "Full Stack разработчик, специализирующийся на Next.js, React Native, TypeScript, Node.js, FastAPI и PostgreSQL. Создаю современные веб-приложения, мобильные продукты и SaaS платформы."
  },
  stats: {
    projectsCompleted: 38,
    technologies: 16,
    experienceYears: 4,
    satisfactionRate: "99%",
  },
};

export const projectsData: Project[] = [
  {
    id: "anor-saas",
    title: "Anor SaaS",
    subtitle: "AI-Powered Freelance & Client Workspace",
    description: {
      en: "AI-powered freelance assistant platform streamlining client proposals, project milestone tracking, and automated invoicing.",
      uz: "Frilanserlar uchun sun'iy intellekt bilan jihozlangan mijozlar, takliflar va hisob-fakturalarni boshqarish SaaS platformasi.",
      ru: "SaaS-платформа для фрилансеров на базе ИИ: управление клиентами, авто-генерация КП и финансовая аналитика."
    },
    longDescription: {
      en: "Anor SaaS is an end-to-end workspace built for freelancers and boutique agency owners. It integrates LLM-driven contract proposals, smart milestone tracking, automated multi-currency invoicing with Stripe & Telegram Pay, and client portals.",
      uz: "Anor SaaS - bu frilanserlar va kichik agentliklar uchun to'liq boshqaruv ekotizimi. Sun'iy intellekt orqali avtomatik takliflar tayyorlash, to'lovlarni Stripe va Telegram Pay orqali qabul qilish va mijozlar portalini o'z ichiga oladi.",
      ru: "Anor SaaS — это экосистема для фрилансеров и агентств. Включает генерацию предложений на базе ИИ, отслеживание этапов, платежные шлюзы Stripe/Telegram и клиентский портал."
    },
    category: "Saas Platform",
    tags: ["Next.js 15", "FastAPI", "OpenAI API", "PostgreSQL", "Tailwind CSS", "Stripe"],
    techStack: ["Next.js", "TypeScript", "FastAPI", "Python", "PostgreSQL", "Prisma", "Tailwind CSS", "Zustand"],
    featured: true,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
    screenshots: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop"
    ],
    liveUrl: "https://anor-saas.demo.app",
    githubUrl: "https://github.com/FullStack-Alibek/anor-saas",
    metrics: [
      { label: { en: "Proposal Speedup", uz: "Taklif tayyorlash hizi", ru: "Ускорение КП" }, value: "4.5x" },
      { label: { en: "Monthly Active Users", uz: "Oylik faol foydalanuvchilar", ru: "Активных пользователей" }, value: "12,400+" },
      { label: { en: "Client Invoice Volume", uz: "Jami to'lovlar hajmi", ru: "Объем счетов" }, value: "$2.4M+" }
    ],
    features: {
      en: [
        "AI Proposal Generator powered by GPT-4o for tailored client estimates",
        "Multi-tenant client portals with live task progress approval",
        "Automated multi-currency invoicing & payment gateway hooks",
        "Subsecond dashboard analytics rendered with Server Actions"
      ],
      uz: [
        "GPT-4o asosida avtomatik loyiha narxnomasi va tijorat taklifi yaratish",
        "Mijozlar uchun loyiha bosqichlarini tasdiqlash portali",
        "Stripe va Telegram Pay orqali ko'p valyutali to'lovlar",
        "Real vaqt rejimida daromadlar va loyihalar tahlili"
      ],
      ru: [
        "Генератор коммерческих предложений на GPT-4o",
        "Клиентский портал с подтверждением этапов работ",
        "Автоматические счета и прием платежей Stripe/Telegram",
        "Дашборды аналитики в реальном времени"
      ]
    }
  },
  {
    id: "cargo-driver",
    title: "Cargo Driver",
    subtitle: "Logistics & Driver Management Mobile Ecosystem",
    description: {
      en: "Driver management and real-time logistics tracking mobile application built with React Native and Node.js.",
      uz: "Yuk tashish va haydovchilarni real vaqt rejimida boshqarish uchun yaratilgan React Native mobil ilovasi.",
      ru: "Мобильное приложение для управления логистикой и отслеживания водителей в реальном времени."
    },
    longDescription: {
      en: "Cargo Driver is a production-grade logistics application designed for heavy transport fleets across Central Asia. Features offline route caching, real-time background GPS tracking, order assignment, digital waybills, and instant push notifications.",
      uz: "Cargo Driver - Markaziy Osiyo bo'ylab yuk tashuvchi haydovchilar va logistika kompaniyalari uchun mobil tizim. Oflayn xaritalar, orqa fonda GPS kuzatish va raqamli hujjatlar aylanishini ta'minlaydi.",
      ru: "Cargo Driver — мобильная система для логистических компаний и водителей грузовиков. Поддерживает оффлайн-карты, фоновый GPS-трекинг и электронный документооборот."
    },
    category: "Mobile Apps",
    tags: ["React Native", "Node.js", "MongoDB", "WebSockets", "Mapbox", "TypeScript"],
    techStack: ["React Native", "Expo", "TypeScript", "Node.js", "Express", "MongoDB", "Socket.io", "Mapbox SDK"],
    featured: true,
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1200&auto=format&fit=crop",
    screenshots: [
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1200&auto=format&fit=crop"
    ],
    liveUrl: "https://cargodriver.demo.app",
    githubUrl: "https://github.com/FullStack-Alibek/cargo-driver-mobile",
    metrics: [
      { label: { en: "Daily Active Drivers", uz: "Kunlik faol haydovchilar", ru: "Активных водителей" }, value: "3,800+" },
      { label: { en: "GPS Tracking Uptime", uz: "GPS barqarorligi", ru: "Аптайм GPS" }, value: "99.98%" },
      { label: { en: "Deliveries Processed", uz: "Bajarilgan yetkazmalar", ru: "Выполнено доставок" }, value: "180K+" }
    ],
    features: {
      en: [
        "Battery-optimized background GPS tracking with Mapbox SDK",
        "Offline-first route state storage & auto-sync upon reconnection",
        "Digital POD (Proof of Delivery) signature capture & photo attachment",
        "Real-time dispatcher-driver chat powered by Socket.io"
      ],
      uz: [
        "Mapbox SDK yordamida energiyani tejovchi background GPS kuzatuv",
        "Oflayn rejimda ishlash va internet ulaganda avtomatik sinxronizatsiya",
        "Raqamli imzo va yuk rasm shaklida tasdiqlash (POD)",
        "Dispetcher va haydovchi o'rtasidagi real vaqtli muloqot"
      ],
      ru: [
        "Фоновый GPS-трекинг с оптимизацией батареи",
        "Оффлайн-режим с авто-синхронизацией данных",
        "Электронная подпись и фотоподтверждение доставки",
        "Чат с диспетчером в реальном времени"
      ]
    }
  },
  {
    id: "alibek-maps",
    title: "Alibek Maps",
    subtitle: "High-Performance Interactive Mapping Web App",
    description: {
      en: "Google Maps-inspired web application featuring vector tile rendering, route optimization, spatial search, and custom POI management.",
      uz: "Google Maps uslubidagi tezkor va interaktiv xarita web ilovasi. Yo'nalishlarni hisoblash va joylarni qidirish xususiyatiga ega.",
      ru: "Интерактивная веб-карта в стиле Google Maps с оптимизацией маршрутов, геопоиском и пользовательскими метками."
    },
    longDescription: {
      en: "Alibek Maps is a feature-rich web mapping platform built on MapLibre GL and React. It delivers 60fps vector tile rendering, Dijkstra-driven shortest path routing, spatial GeoJSON data visualization, and custom layer overlays.",
      uz: "Alibek Maps - MapLibre GL va React yordamida yaratilgan zamonaviy xarita platformasi. Sekundiga 60 kadr tezlikda vektor xaritalarni ko'rsatish va aniq yo'nalish hisoblash imkonini beradi.",
      ru: "Alibek Maps — карта на MapLibre GL и React. Поддерживает рендеринг векторных тайлов на 60fps, расчет коротких маршрутов и слои данных GeoJSON."
    },
    category: "Web Apps",
    tags: ["React.js", "TypeScript", "MapLibre GL", "PostGIS", "Tailwind CSS", "Turf.js"],
    techStack: ["React.js", "TypeScript", "MapLibre GL", "Turf.js", "Node.js", "PostgreSQL", "PostGIS", "Tailwind CSS"],
    featured: true,
    image: "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=1200&auto=format&fit=crop",
    screenshots: [
      "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=1200&auto=format&fit=crop"
    ],
    liveUrl: "https://maps.demo.app",
    githubUrl: "https://github.com/FullStack-Alibek/alibek-maps",
    metrics: [
      { label: { en: "Tile Render Speed", uz: "Xarita yuklanish tezligi", ru: "Скорость рендера" }, value: "< 50ms" },
      { label: { en: "Map Layers Supported", uz: "Xarita qatlamlari", ru: "Слоев карты" }, value: "15+" },
      { label: { en: "Geo-search Latency", uz: "Qidiruv javobi", ru: "Задержка поиска" }, value: "12ms" }
    ],
    features: {
      en: [
        "Smooth 60fps vector tile map rendering with dynamic style switching",
        "Multi-point route planner with distance and ETA calculation",
        "Custom marker creation, spatial bookmarks, and GPX track export",
        "Debounced spatial autocomplete search powered by OpenStreetMap Nominatim"
      ],
      uz: [
        "Dinamik uslublarga ega 60fps tezlikdagi vektor xarita",
        "Ko'p nuqtali yo'nalish va vaqtni aniq hisoblash",
        "Shaxsiy nuqtalar yaratish va GPX fayllarni eksport qilish",
        "OpenStreetMap nominatim orqali tezkor manzil qidirish"
      ],
      ru: [
        "Плавный векторный рендеринг 60fps со сменой стилей",
        "Маршрутизатор с расчетом дистанции и времени прибытия",
        "Создание пользовательских меток и экспорт GPX-треков",
        "Быстрый геопоиск с автодополнением"
      ]
    }
  },
  {
    id: "e-commerce-platform",
    title: "Apex Store",
    subtitle: "Enterprise-Grade Headless E-Commerce Suite",
    description: {
      en: "Modern online shopping experience with instant search, headless checkout, dynamic cart, and localized multi-currency support.",
      uz: "Tezkor qidiruv, qulay xarid va ko'p valyutali to'lovlarga ega zamonaviy internet-do'kon platformasi.",
      ru: "Современный интернет-магазин с мгновенным поиском, гибкой корзиной и поддержкой мультивалютности."
    },
    longDescription: {
      en: "Apex Store is an enterprise headless e-commerce application powered by Next.js 15, PostgreSQL, and Zustand. Features instant faceted search, optimistic cart management, seamless Telegram bot notifications, and payment integrations.",
      uz: "Apex Store - bu Next.js 15, PostgreSQL va Zustand yordamida yaratilgan Headless e-commerce tizim. Tezkor filtrlar, savatcha holatini lahzada yangilash va Telegram-bot xabarnomalarini o'z ichiga oladi.",
      ru: "Apex Store — Headless e-commerce интернет-магазин на Next.js 15 и PostgreSQL. Быстрый поиск, мгновенная корзина и интеграция с Telegram-ботом заказов."
    },
    category: "Full Stack",
    tags: ["Next.js 15", "TypeScript", "PostgreSQL", "Prisma", "Tailwind CSS", "Zustand"],
    techStack: ["Next.js 15", "React", "TypeScript", "Tailwind CSS", "PostgreSQL", "Prisma", "Zustand", "Stripe"],
    featured: true,
    image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?q=80&w=1200&auto=format&fit=crop",
    screenshots: [
      "https://images.unsplash.com/photo-1472851294608-062f824d29cc?q=80&w=1200&auto=format&fit=crop"
    ],
    liveUrl: "https://store.demo.app",
    githubUrl: "https://github.com/FullStack-Alibek/apex-ecommerce",
    metrics: [
      { label: { en: "Conversion Rate Boost", uz: "Konversiya oshishi", ru: "Рост конверсии" }, value: "+34%" },
      { label: { en: "Page Load Speed", uz: "Sahifa yuklanishi", ru: "Загрузка страницы" }, value: "0.4s" },
      { label: { en: "Lighthouse Performance", uz: "Lighthouse ko'rsatkichi", ru: "Балл Lighthouse" }, value: "99/100" }
    ],
    features: {
      en: [
        "Sub-100ms faceted filtering and instant fuzzy product search",
        "Optimistic cart state sync across multi-tab browser sessions",
        "Automated order dispatching directly to Telegram channel & admin panel",
        "Full localization (UZ, EN, RU) with dynamic currency conversion"
      ],
      uz: [
        "100ms dan kam vaqtda mahsulotlarni lahzalik saralash va qidirish",
        "Brauzer oynalari o'rtasida sinxronlanuvchi xarid savatchasi",
        "Buyurtmalarni avtomatik Telegram guruhga va admin panelga yuborish",
        "Uch tilda to'liq ishlash va valyuta kurslarini dinamik hisoblash"
      ],
      ru: [
        "Мгновенный поиск и фильтрация товаров за считанные миллисекунды",
        "Синхронизация корзины между вкладками браузера",
        "Авто-отправка заказов в Telegram-канал и админ-панель",
        "Поддержка трех языков и динамический пересчет валют"
      ]
    }
  }
];

export const skillsData: SkillItem[] = [
  {
    name: "Next.js (App Router)",
    category: "Frontend",
    proficiency: 96,
    iconName: "Globe",
    yearsOfExp: 4,
    description: {
      en: "Server Components, Server Actions, Streaming SSR, Parallel Routes, and Next.js 15 optimizations.",
      uz: "Server Components, Server Actions, SSR streaming va eng so'nggi Next.js 15 imkoniyatlari.",
      ru: "Server Components, Server Actions, потоковый SSR и оптимизация Next.js 15."
    }
  },
  {
    name: "React.js & Hooks",
    category: "Frontend",
    proficiency: 98,
    iconName: "Code",
    yearsOfExp: 4,
    description: {
      en: "Declarative UI architecture, custom hooks, performance profiling, and state management.",
      uz: "Interfeyslar yaratish, xususiy hooklar, unumdorlikni oshirish va holatlarni boshqarish.",
      ru: "Архитектура декларативного UI, кастомные хуки, профилирование производительности."
    }
  },
  {
    name: "TypeScript",
    category: "Frontend",
    proficiency: 94,
    iconName: "FileCode",
    yearsOfExp: 4,
    description: {
      en: "Strict type safety, generics, utility types, and strict static analysis across codebases.",
      uz: "Qat'iy tiplashtirish, genericlar, va xatoliklarni oldini oluvchi statik tahlil.",
      ru: "Строгая типизация, обобщения (generics) и статический анализ кода."
    }
  },
  {
    name: "Tailwind CSS",
    category: "Frontend",
    proficiency: 98,
    iconName: "Palette",
    yearsOfExp: 4,
    description: {
      en: "Utility-first styling, design system tokens, responsive layouts, and modern CSS primitives.",
      uz: "Dizayn tizimlari yaratish, moslashuvchan dizayn va zamonaviy CSS vositalari.",
      ru: "Utility-first верстка, токены дизайн-систем и адаптивные интерфейсы."
    }
  },
  {
    name: "Framer Motion",
    category: "Frontend",
    proficiency: 92,
    iconName: "Sparkles",
    yearsOfExp: 3,
    description: {
      en: "Complex layout animations, scroll-driven interactions, page transitions, and gesture controls.",
      uz: "Murakkab animatsiyalar, skroll reaksiyalari va saxifalar o'rtasidagi ravon o'tishlar.",
      ru: "Сложная анимация интерфейсов, взаимодействия при скролле и жестовое управление."
    }
  },
  {
    name: "React Native & Expo",
    category: "Mobile",
    proficiency: 90,
    iconName: "Smartphone",
    yearsOfExp: 3,
    description: {
      en: "Cross-platform iOS/Android development, native bridges, Expo Router, and offline caching.",
      uz: "iOS va Android uchun mobil ilovalar yaratish, native modullar va oflayn ishlash rejimida ma'lumotlar saqlash.",
      ru: "Кроссплатформенная разработка iOS/Android, нативные мосты и работу в оффлайн."
    }
  },
  {
    name: "Node.js & Express",
    category: "Backend",
    proficiency: 92,
    iconName: "Server",
    yearsOfExp: 4,
    description: {
      en: "Asynchronous backend logic, RESTful APIs, authentication middleware, and event loop tuning.",
      uz: "Tezkor backend logikasi, REST API interfeyslari, va xavfsiz autentifikatsiya tizimlari.",
      ru: "Асинхронный бэкенд, архитектура REST API, микросервисы и авторизация."
    }
  },
  {
    name: "FastAPI & Python",
    category: "Backend",
    proficiency: 88,
    iconName: "Cpu",
    yearsOfExp: 3,
    description: {
      en: "High-performance Python APIs, Pydantic data validation, OpenAPI specs, and async tasks.",
      uz: "Python FastAPI yordamida tezkor backendlar, Pydantic ma'lumotlar tekshiruvi va asinxron funksiyalar.",
      ru: "Высокоскоростные Python API, валидация Pydantic и асинхронная обработка данных."
    }
  },
  {
    name: "PostgreSQL & Prisma",
    category: "Database",
    proficiency: 90,
    iconName: "Database",
    yearsOfExp: 4,
    description: {
      en: "Relational schema design, complex SQL joins, PostGIS spatial queries, and Prisma ORM migrations.",
      uz: "Relyatsion ma'lumotlar bazasi sxemalari, optimallashtirilgan SQL so'rovlar va Prisma ORM.",
      ru: "Проектирование БД, сложные SQL-запросы, геопространственные индексы и миграции Prisma."
    }
  },
  {
    name: "MongoDB & Mongoose",
    category: "Database",
    proficiency: 88,
    iconName: "Layers",
    yearsOfExp: 3,
    description: {
      en: "Document-oriented schema modeling, aggregation pipelines, and high-throughput read/writes.",
      uz: "Hujjatga yo'naltirilgan ma'lumotlar modeli va agregatsiya quvurlari.",
      ru: "Документоориентированные модели, агрегационные пайплайны и масштабирование."
    }
  },
  {
    name: "Zustand & TanStack Query",
    category: "DevOps",
    proficiency: 95,
    iconName: "Zap",
    yearsOfExp: 4,
    description: {
      en: "Lightweight atomic state stores and resilient asynchronous client data fetching/caching.",
      uz: "Yengil va qulay global holat va so'rovlarni avtomatik keshlovchi vositalar.",
      ru: "Атомарное управление состоянием и кэширование асинхронных данных."
    }
  },
  {
    name: "Git, Docker & Vercel",
    category: "DevOps",
    proficiency: 88,
    iconName: "Cloud",
    yearsOfExp: 4,
    description: {
      en: "CI/CD automated deployment, containerization, serverless edge functions, and Git workflows.",
      uz: "CI/CD jarayonlari, Docker konteynerlari va Vercel platformasiga avtomatik joylashtirish.",
      ru: "Контейнеризация Docker, автоматизация CI/CD и серверлесс развертывание."
    }
  }
];

export const servicesData: ServiceItem[] = [
  {
    id: "web-dev",
    title: {
      en: "Web Application Development",
      uz: "Web Ilovalar Yaratish",
      ru: "Разработка Веб-Приложений"
    },
    description: {
      en: "High-performance, pixel-perfect Next.js web applications engineered for speed, SEO, and flawless UX.",
      uz: "Tez va yuqori darajada ishlovchi, SEO optimallashgan hamda qulay interfeysli Next.js web ilovalari.",
      ru: "Высокоскоростные веб-приложения на Next.js с фокусом на SEO, скорость и идеальный UX."
    },
    icon: "Globe",
    deliverables: {
      en: ["Next.js 15 App Router Architecture", "100% Mobile Responsive Design", "Framer Motion Animations", "SEO & OpenGraph Metadata"],
      uz: ["Next.js 15 App Router arxitekturasi", "100% mobil moslashuvchanlik", "Framer Motion animatsiyalari", "SEO va ijtimoiy tarmoqlar uchun metadata"],
      ru: ["Архитектура Next.js 15 App Router", "100% адаптивный дизайн", "Анимации Framer Motion", "SEO и OpenGraph метаданные"]
    },
    startingPrice: "$800+",
    timeline: "1 - 3 weeks",
    featured: true
  },
  {
    id: "mobile-dev",
    title: {
      en: "Mobile App Development",
      uz: "Mobil Ilovalar Yaratish",
      ru: "Разработка Мобильных Приложений"
    },
    description: {
      en: "Cross-platform iOS and Android apps built with React Native for native performance and offline resiliency.",
      uz: "iOS va Android tizimlari uchun bir vaqtda ishlaydigan sifatli va tezkor React Native mobil ilovalari.",
      ru: "Кроссплатформенные приложения для iOS и Android на React Native с нативной скоростью."
    },
    icon: "Smartphone",
    deliverables: {
      en: ["iOS & Android Production Build", "Offline Data Caching & Sync", "Push Notifications Integration", "App Store & Google Play Submission"],
      uz: ["iOS va Android uchun tayyor fayllar", "Oflayn rejimda ishlash imkoniyati", "Push-xabarnomalar ulash", "App Store va Google Play-ga joylash"],
      ru: ["Сборки для iOS и Android", "Оффлайн-режим и синхронизация", "Интеграция Push-уведомлений", "Публикация в App Store и Google Play"]
    },
    startingPrice: "$1,200+",
    timeline: "2 - 4 weeks",
    featured: true
  },
  {
    id: "dashboard-dev",
    title: {
      en: "Custom Dashboards & CRM",
      uz: "Boshqaruv Panellari va CRM",
      ru: "Дашборды и CRM Системы"
    },
    description: {
      en: "Data-dense, real-time analytics platforms with granular permissions, dark mode UI, and interactive charts.",
      uz: "Real vaqt rejimida statistikani ko'rsatuvchi murakkab admin panellar va biznesni boshqarish tizimlari.",
      ru: "Аналитические панели и CRM с графиками в реальном времени и разграничением прав доступа."
    },
    icon: "LayoutDashboard",
    deliverables: {
      en: ["Real-time Dynamic Tables & Charts", "Role-based Access Control (RBAC)", "Export Data to CSV/Excel/PDF", "Light/Dark Silicon Valley Themes"],
      uz: ["Dinamik grafiklar va jadval tahlillar", "Foydalanuvchi huquqlarini boshqarish", "Ma'lumotlarni CSV/Excel/PDF shaklida yuklash", "Zamonaviy qorong'u/yorug' rejimlar"],
      ru: ["Динамические графики и таблицы", "Разграничение прав пользователей (RBAC)", "Экспорт данных в CSV/Excel/PDF", "Современный темный/светлый интерфейс"]
    },
    startingPrice: "$900+",
    timeline: "1 - 3 weeks",
    featured: true
  },
  {
    id: "api-dev",
    title: {
      en: "API & Backend Architecture",
      uz: "API va Backend Tizimlari",
      ru: "API и Разработка Бекэнда"
    },
    description: {
      en: "Scalable REST and GraphQL backend services built with Node.js or FastAPI, paired with PostgreSQL or MongoDB.",
      uz: "Node.js va FastAPI texnologiyalarida xavfsiz va kengayuvchi API va ma'lumotlar bazasi tizimlari.",
      ru: "Масштабируемые REST и GraphQL бэкенд сервисы на Node.js или FastAPI с PostgreSQL/MongoDB."
    },
    icon: "Server",
    deliverables: {
      en: ["RESTful / GraphQL Endpoints", "JWT Authentication & Security", "Database Schema & Indexing", "Swagger/OpenAPI Documentation"],
      uz: ["REST va GraphQL API nuqtalari", "JWT va xavfsiz autentifikatsiya", "Ma'lumotlar bazasi tuzilmasi va indekslar", "Swagger avtomatik hujjatlashtirish"],
      ru: ["REST / GraphQL эндпоинты", "Безопасность и JWT авторизация", "Схема и оптимизация БД", "Документация Swagger/OpenAPI"]
    },
    startingPrice: "$700+",
    timeline: "1 - 2 weeks",
    featured: false
  },
  {
    id: "saas-dev",
    title: {
      en: "SaaS Product Engineering",
      uz: "SaaS Mahsulotlarini Yaratish",
      ru: "Разработка SaaS Продуктов"
    },
    description: {
      en: "Turnkey SaaS development covering multi-tenancy, billing subscriptions, transactional emails, and admin tools.",
      uz: "G'oyadan tortib obuna to'lovlari va foydalanuvchilar boshqaruvigacha bo'lgan to'liq SaaS mahsulotlar.",
      ru: "Разработка SaaS проектов под ключ: подписки, авторизация, мультитенантность и биллинг."
    },
    icon: "Rocket",
    deliverables: {
      en: ["Stripe / Telegram Billing Integration", "Multi-tenant Database Design", "Automated User Onboarding", "Production Cloud Deployment"],
      uz: ["Stripe va Telegram obuna to'lovlari", "Ko'p tarmoqli bazalar tuzilmasi", "Foydalanuvchilarni qabul qilish oqimi", "Serverga xavfsiz joylashtirish"],
      ru: ["Интеграция подписок Stripe/Telegram", "Мультитенантная архитектура", "Автоматический онбординг пользователей", "Облачное развертывание"]
    },
    startingPrice: "$1,500+",
    timeline: "3 - 6 weeks",
    featured: true
  }
];

export const experienceData: ExperienceItem[] = [
  {
    id: "exp-1",
    role: {
      en: "Senior Full Stack Engineer",
      uz: "Senior Full Stack Dasturchi",
      ru: "Senior Full Stack Инженер"
    },
    company: "Freelance & Agency Tech Lead",
    location: "Uzbekistan / Remote",
    type: "Full-time / Contract",
    period: "2023 - Present",
    current: true,
    description: {
      en: "Leading end-to-end development of custom web and mobile solutions for international clients across USA, Europe, and Asia.",
      uz: "Xalqaro va mahalliy mijozlar uchun veb va mobil ilovalarni g'oyadan yakuniy serverga joylashgacha bo'lgan jarayonlarini boshqarish.",
      ru: "Руководство полной разработкой веб и мобильных решений для международных клиентов."
    },
    achievements: {
      en: [
        "Delivered 25+ production applications with 99%+ client satisfaction rate.",
        "Architected Anor SaaS platform reducing freelance proposal turnaround time by 75%.",
        "Optimized Next.js core vitals to reach 98+ scores on Google Lighthouse."
      ],
      uz: [
        "25 dan ortiq murakkab loyihalarni topshirdim va 99% ijobiy baholarga erishdim.",
        "Anor SaaS platformasining arxitekturasini yaratib, mijozlar vaqtini 75% ga tejashga erishdik.",
        "Next.js loyihalarida Google Lighthouse ko'rsatkichlarini 98+ ballga ko'tardim."
      ],
      ru: [
        "Успешно сдал более 25 проектов с 99% уровнем удовлетворенности клиентов.",
        "Спроектировал архитектуру Anor SaaS, сократив время на подготовку КП на 75%.",
        "Оптимизировал показатель Lighthouse до 98+ баллов на проектах Next.js."
      ]
    },
    technologies: ["Next.js 15", "TypeScript", "React Native", "Node.js", "FastAPI", "PostgreSQL", "Tailwind CSS"]
  },
  {
    id: "exp-2",
    role: {
      en: "Full Stack Developer",
      uz: "Full Stack Dasturchi",
      ru: "Full Stack Разработчик"
    },
    company: "Logistics Tech Innovation",
    location: "Uzbekistan",
    type: "Full-time",
    period: "2022 - 2023",
    current: false,
    description: {
      en: "Spearheaded the mobile driver app and central dispatch system for cross-border logistics transport.",
      uz: "Logistika sohasida haydovchilar uchun mobil ilova va dispetcherlar uchun markazlashtirilgan tizimni yaratdim.",
      ru: "Руководил разработкой мобильного приложения для водителей и диспетчерской платформы логистики."
    },
    achievements: {
      en: [
        "Engineered background GPS tracking module supporting over 3,800 active truck drivers.",
        "Reduced app crash rates to under 0.02% by implementing strict TypeScript and error boundaries.",
        "Built real-time dispatcher socket feeds handling 10,000+ spatial events per minute."
      ],
      uz: [
        "3,800 dan ortiq haydovchilar uchun orqa fonda ishlovchi optimallashgan GPS modulini yaratdim.",
        "TypeScript va xatolar nazorati orqali ilova to'xtab qolish ehtimolini 0.02% dan pastga tushirdim.",
        "Daqiqasiga 10,000 dan ortiq xarita hodisalarini qayta ishlaydigan real-vaqtli Socket.io modullarini ishga tushirdim."
      ],
      ru: [
        "Разработал модуль фонового GPS-трекинга для 3,800+ водителей грузовиков.",
        "Снизил уровень сбоев приложения до <0.02% за счет TypeScript и обработчиков ошибок.",
        "Внедрил Socket.io соединения, обрабатывающие 10,000+ гео-событий в минуту."
      ]
    },
    technologies: ["React Native", "Node.js", "Express", "MongoDB", "Socket.io", "Mapbox SDK"]
  }
];

export const testimonialsData: TestimonialItem[] = [
  {
    id: "test-1",
    name: "Sardor Mukhamedov",
    role: "Founder & CEO",
    company: "LogiTech Solutions",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop",
    content: {
      en: "Alibek is an extraordinary developer who delivers Silicon Valley quality. The Cargo Driver application he built transformed our fleet efficiency. Highly recommended!",
      uz: "Alibek ajoyib mahoratga ega dasturchi. U yaratgan Cargo Driver mobil ilovasi logistika biznesimiz samaradorligini keskin oshirdi!",
      ru: "Алибек — высококлассный специалист. Мобильное приложение Cargo Driver, которое он создал, кардинально повысило эффективность нашего автопарка."
    },
    rating: 5
  },
  {
    id: "test-2",
    name: "Elena Rostova",
    role: "Head of Product",
    company: "Apex Global",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200&auto=format&fit=crop",
    content: {
      en: "Working with Alibek was seamless. His attention to detail in Next.js, Framer Motion animations, and API performance set a new benchmark for our digital storefront.",
      uz: "Alibek bilan ishlash juda qulay bo'ldi. Next.js va animatsiyalardagi e'tibori va API tezligi loyihamiz darajasini yuqoriga ko'tardi.",
      ru: "Работать с Алибеком было одно удовольствие. Внимание к деталям в Next.js, плавная анимация и скорость API вывели наш магазин на новый уровень."
    },
    rating: 5
  },
  {
    id: "test-3",
    name: "Javohir Rashidov",
    role: "Co-Founder",
    company: "Anor Tech",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
    content: {
      en: "Alibek built our SaaS MVP in record time without compromising code quality. His full-stack expertise with FastAPI and Next.js is top tier.",
      uz: "Alibek SaaS mahsulotimizning MVP versiyasini rekord darajadagi qisqa muddatda va yuqori sifat bilan tayyorlab berdi.",
      ru: "Алибек разработал MVP нашего SaaS-сервиса в рекордные сроки без потери качества. Его Full Stack экспертиза с FastAPI и Next.js впечатляет."
    },
    rating: 5
  }
];

export const blogPostsData: BlogPost[] = [
  {
    slug: "building-scalable-nextjs-15-applications",
    title: {
      en: "Mastering Next.js 15: Server Actions, Streaming, & Edge Performance",
      uz: "Next.js 15: Server Actions, Streaming va Maksimal Tezlikka Erishish",
      ru: "Мастерство Next.js 15: Server Actions, Streaming и производительность"
    },
    excerpt: {
      en: "An architectural guide to leveraging Next.js 15 App Router capabilities for sub-second page transitions and zero-CLS web applications.",
      uz: "Next.js 15 App Router imkoniyatlaridan unumli foydalanish va sahifalarni lahzada yuklash bo'yicha amaliy qo'llanma.",
      ru: "Практическое руководство по использованию Next.js 15 App Router для мгновенной загрузки страниц."
    },
    content: {
      en: `Next.js 15 has redefined full-stack web development with React 19 integration, refined Server Actions, and uncompromised caching defaults. In this article, we explore how to structure clean folder hierarchies, optimize dynamic image rendering, and achieve 100/100 Lighthouse scores.`,
      uz: `Next.js 15 React 19 bilan integratsiyalashgan holda web dasturlashda yangi bosqichni ochdi. Ushbu maqolada biz to'g'ri loyiha strukturasini tuzish, rasm optimizatsiyasi va Lighthouse-da 100 ball olish usullarini ko'rib chiqamiz.`,
      ru: `Next.js 15 переопределил веб-разработку благодаря интеграции с React 19 и Server Actions. В этой статье мы разберем чистую структуру папок и получение 100 баллов в Lighthouse.`
    },
    date: "2025-02-10",
    readTime: "5 min",
    category: "Architecture",
    tags: ["Next.js 15", "React 19", "Performance", "TypeScript"],
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200&auto=format&fit=crop",
    author: {
      name: "Alibek Choriyev",
      avatar: "https://github.com/FullStack-Alibek.png",
      role: "Full Stack Developer"
    }
  },
  {
    slug: "react-native-offline-first-architecture",
    title: {
      en: "Building Offline-First Mobile Apps with React Native & SQLite",
      uz: "React Native da Oflayn Ishlovchi Mobil Ilovalar Arxitekturasi",
      ru: "Создание Offline-First мобильных приложений на React Native"
    },
    excerpt: {
      en: "How we implemented background GPS syncing and offline-first queue persistence in the Cargo Driver mobile app.",
      uz: "Cargo Driver ilovasida oflayn rejimda ishlash va internet ulaganda avtomatik sinxronizatsiya tizimini qanday yaratdik.",
      ru: "Как мы реализовали фоновую синхронизацию GPS и оффлайн-накопление данных в приложении Cargo Driver."
    },
    content: {
      en: `In logistics applications, internet connections are rarely stable. Building an offline-first system requires optimistic UI updates, local SQLite sync, and resilient background queues.`,
      uz: `Logistika mobil ilovalarida internet aloqasi doim ham barqaror bo'lmaydi. Oflayn tizim yaratish uchun local bazada ma'lumotlarni saqlash va sinxronizatsiya qiluvchi navbatlarni to'g'ri yo'lga qo'yish kerak.`,
      ru: `В логистических приложениях связь часто нестабильна. Построение системы Offline-First требует локальной баз данных и надежных фоновых очередей.`
    },
    date: "2025-01-20",
    readTime: "7 min",
    category: "Mobile",
    tags: ["React Native", "Offline First", "SQLite", "Logistics"],
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1200&auto=format&fit=crop",
    author: {
      name: "Alibek Choriyev",
      avatar: "https://github.com/FullStack-Alibek.png",
      role: "Full Stack Developer"
    }
  }
];
