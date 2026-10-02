import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

const isGitHubActions = process.env.GITHUB_ACTIONS === 'true';

// Auto-detect base path in GitHub Actions:
// - If repo is <owner>.github.io, base is '/'
// - If repo is 'cv' or 'QAWebsite', base is '/<repo>'
// - On Cloudflare Pages or local, base is '/'
let base = '/';
if (isGitHubActions && process.env.GITHUB_REPOSITORY) {
  const [owner, repo] = process.env.GITHUB_REPOSITORY.split('/');
  if (repo && repo.toLowerCase() === `${owner.toLowerCase()}.github.io`) {
    base = '/';
  } else if (repo) {
    base = `/${repo}`;
  }
} else if (process.env.ASTRO_BASE) {
  base = process.env.ASTRO_BASE;
}

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
