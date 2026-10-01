# Кирилл Бурчиков — QA Engineer | Personal Resume & Portfolio

Clean, modern, high-performance multilingual personal resume website for **Кирилл Бурчиков (Kirill Burchikov)**, QA Engineer.

- **Primary Language:** Russian (`/ru`)
- **Secondary Language:** English (`/en`)
- **Stack:** [Astro](https://astro.build/) (v5), TypeScript, [Tailwind CSS](https://tailwindcss.com/)
- **Architecture:** 100% Static Generation (SSG), 0kb JS runtime overhead, Core Web Vitals optimized
- **Deployment Target:** [Cloudflare Pages](https://pages.cloudflare.com/)

---

## Features

- **Multilingual URL-based routing:**
  - `/ru` — Default & primary language (Russian)
  - `/en` — Secondary language (English)
  - `/` — Automatic 302 redirect to `/ru` via Cloudflare Pages `_redirects` and fallback HTML redirect
  - In-header `RU | EN` switcher preserving current anchor/section
- **Clean Engineering Aesthetic:**
  - Minimalistic, typography-focused design with generous whitespace
  - Light theme by default with clean Dark Mode toggle (respects system preference, zero FOUT)
  - No bloated animations, fake charts, or marketing fluff
- **SEO & Social Cards:**
  - Distinct SEO titles and descriptions for Russian and English
  - Accurate `canonical` and bidirectional `hreflang` tags (`ru`, `en`, and `x-default`)
  - Open Graph and Twitter Card metadata
  - Automated `sitemap-index.xml` and `robots.txt`
- **Accessibility (a11y):**
  - Semantic HTML (`header`, `main`, `section`, `article`, `footer`)
  - Skip-to-content link, keyboard navigable, visible focus outlines
  - Screen-reader accessible buttons and ARIA attributes
- **Recruiter-Ready Content:**
  - 6+ years QA experience in Web, Mobile, API, and Integration testing
  - Factual metrics: 1,200+ Android automated tests, 60–70% regression time reduction, 80% → 95% web automation coverage
  - Kotlin automation, internal test framework & Custom DSL
  - Categorized skills with top 5 highlighted competencies
  - Two-career milestones (SimbirSoft & RITM) with achievements, responsibilities, and stack tags
  - Selected engineering deep-dives (Android regression, web coverage, AI-assisted refactoring)
  - Downloadable CV support (`/cv/kirill-burchikov-cv-ru.pdf` and `/cv/kirill-burchikov-cv-en.pdf`) with graceful fallback

---

## Project Structure

```text
├── public/
│   ├── _redirects         # Cloudflare Pages redirect rules (/ -> /ru 302)
│   ├── robots.txt         # Crawler indexing rules & sitemap pointer
│   ├── favicon.svg        # Clean SVG engineering favicon
│   └── cv/                # Resume PDF directory
│       └── README.md      # Instructions for placing CV files
├── src/
│   ├── components/
│   │   ├── Header.astro      # Navigation, RU|EN switcher, theme toggle
│   │   ├── Hero.astro        # Value proposition, title, CTA buttons
│   │   ├── Metrics.astro     # Factual key engineering numbers
│   │   ├── About.astro       # Profile background & engineering focus
│   │   ├── Experience.astro  # SimbirSoft & RITM stacked experience cards
│   │   ├── CaseStudies.astro # 3 Selected engineering problem/solution/result cases
│   │   ├── Skills.astro      # Categorized skills & 5 primary competencies
│   │   ├── Languages.astro   # Russian (Native) & English (B2)
│   │   ├── Contact.astro     # Email, Telegram, LinkedIn, CV links
│   │   ├── Footer.astro      # Minimal copyright & back to top
│   │   └── ResumePage.astro  # Reusable page template (no duplicate layout code)
│   ├── data/
│   │   └── config.ts         # Central contact info, LinkedIn URL, and CV paths
│   ├── i18n/
│   │   ├── types.ts          # TypeScript interfaces for translations
│   │   ├── ru.ts             # Russian content strings
│   │   ├── en.ts             # English content strings
│   │   └── utils.ts          # Localization utilities
│   ├── layouts/
│   │   └── BaseLayout.astro  # HTML shell, SEO, hreflang, OG tags, dark mode
│   ├── pages/
│   │   ├── index.astro       # Root redirect to /ru
│   │   ├── ru/index.astro    # Russian page (/ru)
│   │   └── en/index.astro    # English page (/en)
│   └── styles/
│       └── global.css        # Tailwind base, typography, theme variables
├── astro.config.mjs          # Astro configuration (static output, sitemap)
├── tailwind.config.mjs       # Tailwind CSS configuration
├── tsconfig.json             # TypeScript strict configuration
└── package.json
```

---

## Local Development

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start local dev server:
   ```bash
   npm run dev
   ```
   Open `http://localhost:4321` in your browser.

3. Type-check:
   ```bash
   npm run check
   ```

4. Build for production:
   ```bash
   npm run build
   ```
   The static production output will be generated in `dist/`.

---

## DEPLOY TO CLOUDFLARE PAGES

Cloudflare Pages is the recommended hosting platform for this static Astro website. It provides global CDN distribution, automatic HTTPS, HTTP/3, and instant deployments on Git push.

### Build Configuration in Cloudflare Pages

| Setting | Value |
|---|---|
| **Framework preset** | `Astro` |
| **Build command** | `npm run build` |
| **Build output directory** | `dist` |
| **Node.js Version** | `20.x` or `22.x` (LTS) |

### Environment Variables

In the Cloudflare Pages project settings (**Settings > Environment variables**):
- Add variable: `NODE_VERSION` = `20.18.0` (or `22.x`)
- Add variable: `ASTRO_TELEMETRY_DISABLED` = `1`

---

### Step-by-Step: Connect GitHub Repository to Cloudflare Pages

1. **Push your code to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: multilingual QA Engineer resume"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<repo-name>.git
   git push -u origin main
   ```

2. **Open Cloudflare Dashboard:**
   - Go to [dash.cloudflare.com](https://dash.cloudflare.com/)
   - Navigate to **Workers & Pages** > **Create application** > **Pages** tab.
   - Click **Connect to Git**.

3. **Select Repository:**
   - Authorize Cloudflare to access your GitHub account.
   - Select your repository (`<repo-name>`).
   - Click **Begin setup**.

4. **Configure Build Settings:**
   - **Project name:** `kirill-burchikov-qa` (or any name you prefer)
   - **Production branch:** `main`
   - **Framework preset:** `Astro`
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
   - Under **Environment variables**, set `NODE_VERSION` to `20.18.0`.

5. **Deploy:**
   - Click **Save and Deploy**.
   - Cloudflare Pages will clone the repository, run `npm install`, execute `npm run build`, and publish the `dist` folder to its global edge network.
   - Your site will be live immediately at `https://<project-name>.pages.dev/`.

---

### Step-by-Step: Configure Custom Domain

To connect your own domain (e.g., `burchikov.qa` or `kirillburchikov.com`):

1. In the Cloudflare Pages project, click the **Custom domains** tab.
2. Click **Set up a custom domain**.
3. Enter your domain name (e.g. `burchikov.qa` or `www.burchikov.qa`).
4. If your domain is already managed on Cloudflare DNS:
   - Cloudflare will automatically create the required CNAME record.
   - Click **Activate domain**.
5. If your domain is with an external registrar (e.g. Namecheap, GoDaddy, Reg.ru):
   - Add the CNAME record indicated by Cloudflare in your registrar's DNS settings:
     - Name: `@` or `subdomain`
     - Target: `<project-name>.pages.dev`
6. Cloudflare automatically issues and renews a free SSL/TLS certificate for your domain.

---

## Configuration & Customization

All personal details, URLs, and CV settings are centralized in `src/data/config.ts`:

```typescript
export const siteConfig = {
  siteUrl: 'https://burchikov.qa', // Your production domain
  telegramUrl: 'https://t.me/nekerill1337',
  email: 'thygaviao@yandex.ru',
  linkedInUrl: 'https://www.linkedin.com/in/kirill-burchikov', // Customize your LinkedIn
  cv: {
    ru: {
      path: '/cv/kirill-burchikov-cv-ru.pdf',
      available: true,
    },
    en: {
      path: '/cv/kirill-burchikov-cv-en.pdf',
      available: false, // Set to true when you add kirill-burchikov-cv-en.pdf
    },
  },
};
```

### Adding CV PDFs:
Place your PDF files directly into `public/cv/`:
- `public/cv/kirill-burchikov-cv-ru.pdf`
- `public/cv/kirill-burchikov-cv-en.pdf`
When `available: true` is set in `config.ts`, the download buttons link directly to the files. If set to `false`, the button gracefully indicates that it is available upon request, preventing 404s.
