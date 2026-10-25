# Alexis G. Mayer — Portfolio

Live at **[alexisgmayer.dev](https://alexisgmayer.dev)**

A bilingual (English / French) single-page portfolio that presents my background, projects, experience and education, with a downloadable resume. It has light and dark themes and WebGL / scroll-driven animations.

## Tech Stack

| Area | Technology |
| --- | --- |
| Framework | [Next.js 16](https://nextjs.org) (App Router, Turbopack) |
| UI | [React 19](https://react.dev) |
| Language | [TypeScript 5](https://www.typescriptlang.org) |
| Styling | [Tailwind CSS 4](https://tailwindcss.com) via `@tailwindcss/postcss`, plus [clsx](https://github.com/lukeed/clsx) and [tailwind-merge](https://github.com/dcastil/tailwind-merge) |
| Animation | [Motion](https://motion.dev) (`motion/react`), [GSAP](https://gsap.com) with ScrollTrigger |
| WebGL | [OGL](https://github.com/oframe/ogl) for the Liquid Chrome and Metal Balls backgrounds |
| Internationalization | [i18next](https://www.i18next.com) + [react-i18next](https://react.i18next.com) |
| Linting | [ESLint 9](https://eslint.org) with `eslint-config-next` |

## Features

- **Bilingual content**: the navbar toggles between English and French. All copy lives in `app/utils/i18n/locales/en.json` and `fr.json`.
- **Dark mode**: a class-based Tailwind `dark` variant, managed by `app/utils/useDarkMode.ts`. A small inline script in `app/layout.tsx` applies the saved theme before first paint so the page doesn't flash light mode.
- **Animated sections**: content reveals on scroll, a project carousel and a glass-surface effect.
- **Resume download**: served from `public/ResumeAlexisMayer.pdf`.

## Project Structure

```
app/
├── layout.tsx              # Root layout, metadata, theme bootstrap
├── page.tsx                # Single page composing all sections
├── globals.css             # Tailwind import, theme tokens, dark variant
├── components/             # Page sections
│   ├── navbar.tsx          # Navigation, language and theme toggles
│   ├── landing.tsx
│   ├── summary.tsx
│   ├── projects.tsx
│   ├── experienceEducation.tsx
│   └── contact.tsx
└── utils/
    ├── i18n/               # i18next setup and en/fr locale files
    ├── AcerternityUi/      # Apple Cards Carousel (Aceternity UI)
    ├── ReactBits/          # AnimatedContent, GlassSurface, LiquidChrome, MetalBalls
    ├── images/             # Portrait image
    └── useDarkMode.ts
public/                     # Static assets (resume PDF)
portfolio/                  # Separate React + Vite app (independent of the Next.js site)
```

## Getting Started

Requires Node.js 20 or later.

```bash
npm install
npm run dev       # start the dev server at http://localhost:3000
```

### Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Create a production build |
| `npm run start` | Serve the production build |
| `npm run lint` | Run ESLint |

## Deployment

The site is hosted on [Vercel](https://vercel.com) at [alexisgmayer.dev](https://alexisgmayer.dev).

- Every push to `main` deploys to production.
- Pushes to any other branch create a preview deployment with its own URL.
- Vercel detects the Next.js build settings on its own, so the project needs no `vercel.json` or environment variables.
- `metadataBase` in `app/layout.tsx` is set to the production domain, so metadata URLs resolve to it.

## Resources Utilized

- [Flowbite](https://flowbite.com/): Tailwind component examples
- [Heroicons](https://heroicons.com/): SVG icons
- [Tailwind CSS documentation](https://tailwindcss.com/)
- [Aceternity UI: Apple Cards Carousel](https://ui.aceternity.com/components/apple-cards-carousel)
- [React Bits](https://www.reactbits.dev/): component variations (Animated Content, Glass Surface, Liquid Chrome, Metal Balls)
