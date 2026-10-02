import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

const isGitHubActions = process.env.GITHUB_ACTIONS === 'true';
const base = process.env.ASTRO_BASE || (isGitHubActions ? '/QAWebsite' : '/');
const site = isGitHubActions ? 'https://thygaviao.github.io' : 'https://kirillburchikov.pages.dev';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  site: site,
  base: base,
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    sitemap({
      i18n: {
        defaultLocale: 'ru',
        locales: {
          ru: 'ru',
          en: 'en',
        },
      },
    }),
  ],
});
