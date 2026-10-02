export interface SiteConfig {
  siteUrl: string;
  telegramUrl: string;
  email: string;
  linkedInUrl: string;
  cv: {
    ru: {
      path: string;
      available: boolean;
    };
    en: {
      path: string;
      available: boolean;
    };
  };
}

export const siteConfig: SiteConfig = {
  siteUrl: 'https://kirillburchikov.pages.dev',
  telegramUrl: 'https://t.me/nekerill1337',
  email: 'thygaviao@yandex.ru',
  // Configurable LinkedIn profile URL. Replace with your exact LinkedIn vanity handle if different:
  linkedInUrl: 'https://www.linkedin.com/in/kirill-burchikov',
  cv: {
    ru: {
      path: '/cv/kirill-burchikov-cv-ru.pdf',
      available: true, // Will show link to Russian CV
    },
    en: {
      path: '/cv/kirill-burchikov-cv-en.pdf',
      available: true,
    },
  },
};
