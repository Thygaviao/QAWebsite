import type { Translations } from './types';

export const en: Translations = {
  locale: 'en',
  seo: {
    title: 'Kirill Burchikov — QA Engineer | Web, Mobile, API, Automation',
    description:
      'QA Engineer with 6+ years of commercial experience in Web, Mobile, API and integration testing. Kotlin automation, SQL, Kafka, Android and AI-assisted testing.',
  },
  header: {
    name: 'Kirill Burchikov',
    role: 'QA Engineer',
    nav: [
      { id: 'about', label: 'About' },
      { id: 'experience', label: 'Experience' },
      { id: 'cases', label: 'Cases' },
      { id: 'skills', label: 'Skills' },
      { id: 'contact', label: 'Contact' },
    ],
    themeToggleAria: 'Toggle color theme',
    languageToggleAria: 'Switch language to Russian',
  },
  hero: {
    greetingBadge: '6+ Years Experience',
    openToWorkStatus: 'Open to remote QA opportunities',
    name: 'Kirill Burchikov',
    title: 'QA Engineer',
    subtitle: 'Web / Mobile / API / Automation',
    descriptionParagraphs: [
      'QA Engineer with 6+ years of commercial experience in Web, Mobile (Android), API, and integration testing. Commercial Kotlin automation background, hands-on SQL, Kafka, log diagnostics, and practical AI-agent workflows.',
    ],
    cta: {
      viewExperience: 'Work Experience',
      downloadCv: 'Download CV (PDF)',
      cvUnavailableTooltip: 'Available on request',
      linkedIn: 'LinkedIn',
      telegram: 'Telegram',
    },
  },
  metrics: {
    sectionTitle: 'Key Metrics',
    items: [
      {
        value: '6+ years',
        label: 'Commercial QA experience',
        subtext: 'Fintech and product teams',
      },
      {
        value: '1,200+',
        label: 'Android automated tests',
        subtext: 'Refactoring & maintenance with Kotlin',
      },
      {
        value: '60–70%',
        label: 'Regression time reduction',
        subtext: 'From 3–4h to 50–90 min',
      },
      {
        value: '80% → 95%',
        label: 'Web regression coverage',
        subtext: 'Achieved in 2–3 months',
      },
      {
        value: '75%',
        label: 'Repetitive task time savings with AI',
        subtext: 'From 2h to 30 min per task',
      },
    ],
  },
  about: {
    sectionTitle: 'About',
    paragraphs: [
      'QA Engineer with 6+ years of commercial experience in web, mobile, API, and integration testing. Strong technical background: SQL, Kafka, REST/SOAP, logs, CI/CD, and Kotlin automation.',
      'I use AI agents and LLMs for codebase exploration, defect investigation, and test refactoring. Practical mindset: understanding the system end-to-end, isolating root causes quickly, and automating where it delivers measurable feedback speed.',
    ],
    keyHighlightsTitle: 'Engineering Focus',
    keyHighlights: [],
  },
  experience: {
    sectionTitle: 'Experience',
    achievementsLabel: 'Key Achievements',
    responsibilitiesLabel: 'Responsibilities',
    techStackLabel: 'Tech Stack',
    items: [
      {
        company: 'SimbirSoft',
        role: 'QA Engineer',
        focus: 'Web / Mobile / API / Automation',
        period: 'July 2022 — Present',
        description: 'Worked on large fintech projects as part of product teams.',
        achievements: [
          '<strong>Refactored 1,200+ Android automated tests</strong> across major infrastructure changes including test data generation, SDK migration, user balance preparation, and migration to Deep Links.',
          '<strong>Reduced full Android regression time by 60–70%</strong>, from 3–4 hours to 50–90 minutes.',
          '<strong>Increased web regression automation coverage from 80% to 95%</strong> within 2–3 months.',
          '<strong>Optimized Android UI test flows</strong> using Intent interception, Deep Links, and controlled test states instead of external app transitions.',
          '<strong>Joined a new fintech project within 1 month</strong> during a temporary team replacement and maintained the existing QA flow without disrupting releases.',
          '<strong>Reduced repetitive test-code task time by 75%</strong>, from 2 hours to 30 minutes, using AI agents and reusable instructions.',
          '<strong>Regularly conducted technical interviews</strong> for QA candidates and participated in technical assessment.',
        ],
        responsibilities: [
          'Functional, regression, integration and acceptance testing of web and Android applications.',
          'REST/SOAP API, SQL, Kafka and integration testing.',
          'Backend and Android automation in Kotlin using internal framework and Custom DSL.',
          'Test failure analysis, refactoring, Java stubs and Kibana diagnostics.',
          'Jenkins, test environments and AI-assisted codebase/test analysis.',
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
        period: 'October 2020 — July 2022',
        description:
          'Joined a product team as the first dedicated QA and helped establish the testing process from scratch.',
        achievements: [
          '<strong>Built regression suite of ~100 test cases from scratch</strong>, covering critical user and integration scenarios.',
          '<strong>Introduced Confluence & Zephyr Scale</strong> for knowledge management and test documentation.',
          '<strong>Introduced Charles Proxy</strong> for client-server network diagnostics.',
          '<strong>Introduced JMeter</strong> for performance and load testing.',
          '<strong>Established collaboration between QA and the support team</strong> and created an internal product knowledge base.',
          '<strong>Tested 5 external integrations</strong> with banking and security systems.',
          '<strong>Regularly conducted technical interviews</strong> for QA candidates and participated in technical assessment.',
        ],
        responsibilities: [
          'Functional, regression and integration testing of web and mobile applications.',
          'Requirements analysis, REST API and integration testing.',
          'Working with MySQL, PostgreSQL and Kafka.',
          'Jenkins, Docker and test environments.',
          'Selenium UI automation, JMeter, and collaboration with stakeholders and support.',
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
    sectionTitle: 'Selected Engineering Cases',
    problemLabel: 'Problem',
    solutionLabel: 'What was done',
    resultLabel: 'Result',
    items: [
      {
        title: 'Android Regression Optimization',
        problem: 'Full Android regression execution took 3–4 hours.',
        work: 'Refactored automated tests, improved test-data preparation, adapted scenarios for SDK changes, and replaced external transitions with Deep Links, Intent interception, and controlled test states.',
        result: 'Regression execution time was reduced to 50–90 minutes.',
      },
      {
        title: 'Web Automation Coverage',
        problem: 'Web regression automation coverage was 80%.',
        work: 'Expanded and updated the automated regression test suite, covered missing key user flows, and prepared the test suite for handoff to the responsible team.',
        result: 'Coverage increased to 95% within 2–3 months.',
      },
      {
        title: 'AI-assisted Test Refactoring',
        problem: 'Typical repetitive test-code changes took up to 2 hours.',
        work: 'Used AI agents with reusable instructions for codebase analysis and repetitive refactoring tasks.',
        result: 'Typical execution time was reduced to 30 minutes.',
      },
    ],
  },
  skills: {
    sectionTitle: 'Skills & Technologies',
    primaryTitle: 'Core Competencies',
    primarySkills: [
      'Software Quality Assurance',
      'API Testing',
      'Mobile Application Testing',
      'Test Automation',
      'SQL',
    ],
    groups: [
      {
        category: 'Core QA',
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
        category: 'Backend / Integration',
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
        category: 'Tools',
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
    sectionTitle: 'Languages',
    items: [
      {
        language: 'Russian',
        level: 'Native',
      },
      {
        language: 'English',
        level: 'B2',
      },
    ],
  },
  contact: {
    sectionTitle: 'Get in touch',
    description:
      'Open to QA Engineer / Senior QA Engineer / Mobile QA / Fullstack QA opportunities.',
    buttons: {
      email: 'Email',
      telegram: 'Telegram',
      linkedIn: 'LinkedIn',
      downloadCv: 'Download CV',
    },
  },
  footer: {
    name: 'Kirill Burchikov',
    role: 'QA Engineer',
    allRightsReserved: 'All rights reserved.',
    backToTop: 'Back to top',
  },
};
