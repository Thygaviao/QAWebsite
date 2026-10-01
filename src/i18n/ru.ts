import type { Translations } from './types';

export const ru: Translations = {
  locale: 'ru',
  seo: {
    title: 'Кирилл Бурчиков — QA Engineer | Web, Mobile, API, Automation',
    description:
      'QA Engineer с 6+ годами коммерческого опыта в тестировании Web, Mobile, API и интеграционных систем. Kotlin automation, SQL, Kafka, Android, AI-assisted testing.',
  },
  header: {
    name: 'Кирилл Бурчиков',
    role: 'QA Engineer',
    nav: [
      { id: 'about', label: 'Обо мне' },
      { id: 'experience', label: 'Опыт' },
      { id: 'cases', label: 'Кейсы' },
      { id: 'skills', label: 'Навыки' },
      { id: 'contact', label: 'Контакты' },
    ],
    themeToggleAria: 'Переключить цветовую тему',
    languageToggleAria: 'Сменить язык на английский',
  },
  hero: {
    greetingBadge: '6+ лет опыта',
    openToWorkStatus: 'Открыт к удалённым QA-позициям',
    name: 'Кирилл Бурчиков',
    title: 'QA Engineer',
    subtitle: 'Web / Mobile / API / Automation',
    descriptionParagraphs: [
      'QA Engineer с 6+ годами коммерческого опыта в тестировании Web, Mobile (Android), API и интеграционных систем. Коммерческий опыт автоматизации на Kotlin, глубокая работа с SQL, Kafka, логами и практическое применение AI-агентов в рутине QA.',
    ],
    cta: {
      viewExperience: 'Опыт работы',
      downloadCv: 'Резюме (PDF)',
      cvUnavailableTooltip: 'Резюме доступно по запросу',
      linkedIn: 'LinkedIn',
      telegram: 'Telegram',
    },
  },
  metrics: {
    sectionTitle: 'Ключевые показатели',
    items: [
      {
        value: '6+ лет',
        label: 'Коммерческого опыта в QA',
        subtext: 'Fintech и продуктовые команды',
      },
      {
        value: '1 200+',
        label: 'Android-автотестов',
        subtext: 'Рефакторинг и поддержка на Kotlin',
      },
      {
        value: '60–70%',
        label: 'Сокращение времени регресса',
        subtext: 'С 3–4 ч до 50–90 мин',
      },
      {
        value: '80% → 95%',
        label: 'Рост покрытия web-regression',
        subtext: 'За 2–3 месяца работы',
      },
      {
        value: '75%',
        label: 'Экономия времени на задачах с AI',
        subtext: 'С 2 ч до 30 мин на задачу',
      },
    ],
  },
  about: {
    sectionTitle: 'Обо мне',
    paragraphs: [
      'QA Engineer с 6+ годами коммерческого опыта в web, mobile, API и интеграционном тестировании. Сильная техническая база: SQL, Kafka, REST/SOAP, логи, CI/CD и Kotlin automation.',
      'Использую AI-агентов и LLM для анализа кодовой базы, диагностики ошибок и рефакторинга тестов. Предпочитаю практичный подход: понимать систему целиком, быстро находить первопричины и автоматизировать там, где это реально сокращает время обратной связи.',
    ],
    keyHighlightsTitle: 'Инженерный фокус',
    keyHighlights: [],
  },
  experience: {
    sectionTitle: 'Опыт работы',
    achievementsLabel: 'Ключевые результаты',
    responsibilitiesLabel: 'Основные задачи',
    techStackLabel: 'Стек технологий',
    items: [
      {
        company: 'SimbirSoft',
        role: 'QA Engineer',
        focus: 'Web / Mobile / API / Automation',
        period: 'Июль 2022 — настоящее время',
        description: 'Работа над крупными fintech-проектами в составе продуктовых команд.',
        achievements: [
          '<strong>Масштабный рефакторинг 1 200+ Android-автотестов</strong> в рамках нескольких инфраструктурных изменений: генерация тестовых данных, миграция SDK, подготовка пользовательских балансов и переход на Deep Links.',
          '<strong>Сократил время полного Android-регресса на 60–70%</strong>: с 3–4 часов до 50–90 минут.',
          '<strong>Повысил покрытие web-regression автоматизацией с 80% до 95%</strong> за 2–3 месяца.',
          '<strong>Оптимизировал Android UI-сценарии</strong> с использованием перехвата Intent, Deep Links и контролируемых тестовых состояний вместо переходов во внешние приложения.',
          '<strong>Успешно вошёл в новый fintech-проект за 1 месяц</strong>: поддержал непрерывный QA-flow в рамках временной замены коллег без просадки по скорости и качеству релизов.',
          '<strong>Сократил время типовых массовых изменений на 75%</strong>: с 2 часов до 30 минут за счёт AI-агентов и переиспользуемых инструкций.',
          '<strong>Регулярно проводил технические интервью</strong> QA-кандидатов и участвовал в оценке их технического уровня.',
        ],
        responsibilities: [
          'Функциональное, регрессионное, интеграционное и приёмочное тестирование web- и Android-приложений.',
          'Тестирование REST/SOAP API, SQL, Kafka и интеграционных взаимодействий.',
          'Backend- и Android-автоматизация на Kotlin с использованием внутреннего фреймворка и Custom DSL.',
          'Анализ падений автотестов, рефакторинг, Java-заглушки и диагностика дефектов через Kibana.',
          'Jenkins, тестовые окружения и AI-assisted анализ кодовой базы и тестов.',
        ],
        tech: [
          'Kotlin',
          'Java',
          'SQL',
          'REST API',
          'SOAP',
          'Kafka',
          'Jenkins',
          'Kubernetes',
          'Linux',
          'Swagger',
          'Kibana',
          'Git',
          'Android Studio',
          'AI Agents / LLM',
          'Custom DSL',
        ],
      },
      {
        company: 'RITM',
        role: 'QA Engineer',
        focus: 'Web / Mobile / API',
        period: 'Октябрь 2020 — Июль 2022',
        description: 'Был первым QA в продуктовой команде из 4 человек и помог выстроить базовый процесс тестирования с нуля.',
        achievements: [
          '<strong>Сформировал с нуля регрессионный набор из ~100 тест-кейсов</strong>, покрыв ключевые пользовательские и интеграционные сценарии продукта.',
          '<strong>Внедрил Confluence и Zephyr Scale</strong> для базы знаний и управления тестовой документацией.',
          '<strong>Внедрил Charles Proxy</strong> для диагностики клиент-серверного взаимодействия.',
          '<strong>Внедрил JMeter</strong> для нагрузочного тестирования.',
          '<strong>Организовал взаимодействие QA с поддержкой</strong> и сформировал внутреннюю базу знаний по продукту.',
          '<strong>Протестировал 5 внешних интеграций</strong> с банковскими и охранными системами.',
          '<strong>Регулярно проводил технические интервью</strong> QA-кандидатов и участвовал в оценке их технического уровня.',
        ],
        responsibilities: [
          'Функциональное, регрессионное и интеграционное тестирование web- и mobile-приложений.',
          'Анализ требований, REST API и интеграционное тестирование.',
          'Работа с MySQL, PostgreSQL и Kafka.',
          'Jenkins, Docker и тестовые окружения.',
          'Selenium UI automation, JMeter и взаимодействие с заказчиками и поддержкой.',
        ],
        tech: [
          'REST API',
          'SQL',
          'MySQL',
          'PostgreSQL',
          'Kafka',
          'Docker',
          'Jenkins',
          'Selenium',
          'JMeter',
          'Charles Proxy',
          'Confluence',
          'Zephyr Scale',
        ],
      },
    ],
  },
  cases: {
    sectionTitle: 'Избранные технические кейсы',
    problemLabel: 'Проблема',
    solutionLabel: 'Что сделано',
    resultLabel: 'Результат',
    items: [
      {
        title: 'Оптимизация Android-регресса',
        problem: 'Полный прогон Android-регресса занимал 3–4 часа.',
        work: 'Рефакторинг автотестов, улучшение подготовки тестовых данных, адаптация сценариев, связанных с изменениями SDK, и оптимизация внешних переходов с использованием Deep Links, Intent interception и контролируемых тестовых состояний.',
        result: 'Время полного регресса снижено до 50–90 минут.',
      },
      {
        title: 'Рост покрытия web-автоматизацией',
        problem: 'Покрытие web-regression автоматизацией составляло 80%.',
        work: 'Расширил и актуализировал набор автоматизированных регрессионных тестов, закрыл недостающие ключевые пользовательские потоки и подготовил набор тестов к передаче профильной команде.',
        result: 'Покрытие увеличено до 95% за 2–3 месяца.',
      },
      {
        title: 'AI-assisted рефакторинг тестов',
        problem: 'Типовые массовые изменения в тестовом коде занимали до 2 часов.',
        work: 'Использование AI-агентов и переиспользуемых инструкций для анализа кодовой базы и массовых изменений.',
        result: 'Время выполнения сокращено до 30 минут.',
      },
    ],
  },
  skills: {
    sectionTitle: 'Навыки и технологии',
    primaryTitle: 'Ключевые компетенции',
    primarySkills: [
      'Software Quality Assurance',
      'API Testing',
      'Mobile Application Testing',
      'Test Automation',
      'SQL',
    ],
    groups: [
      {
        category: 'Основные QA-навыки',
        skills: [
          'Functional Testing',
          'Regression Testing',
          'Integration Testing',
          'API Testing',
          'Mobile Testing',
          'Web Testing',
          'Test Design',
          'Automated Testing',
        ],
      },
      {
        category: 'Backend / Интеграции',
        skills: ['REST API', 'SOAP', 'SQL', 'Kafka', 'Swagger', 'Kibana'],
      },
      {
        category: 'Automation / Development',
        skills: ['Kotlin', 'Java', 'Selenium', 'Custom DSL', 'Git'],
      },
      {
        category: 'Infrastructure',
        skills: ['Jenkins', 'Docker', 'Kubernetes', 'Linux'],
      },
      {
        category: 'Инструменты',
        skills: [
          'Android Studio',
          'Charles Proxy',
          'JMeter',
          'Confluence',
          'Zephyr Scale',
        ],
      },
      {
        category: 'AI',
        skills: ['AI-assisted Testing', 'Agentic Development', 'AI Agents / LLM'],
      },
    ],
  },
  languages: {
    sectionTitle: 'Языки',
    items: [
      {
        language: 'Русский',
        level: 'Родной',
      },
      {
        language: 'Английский',
        level: 'B2',
      },
    ],
  },
  contact: {
    sectionTitle: 'Связаться со мной',
    description:
      'Открыт к предложениям на позиции QA Engineer / Senior QA Engineer / Mobile QA / Fullstack QA.',
    buttons: {
      email: 'Email',
      telegram: 'Telegram',
      linkedIn: 'LinkedIn',
      downloadCv: 'Скачать резюме',
    },
  },
  footer: {
    name: 'Кирилл Бурчиков',
    role: 'QA Engineer',
    allRightsReserved: 'Все права защищены.',
    backToTop: 'Наверх',
  },
};
