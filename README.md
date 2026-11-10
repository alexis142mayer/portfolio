# Alexis G. Mayer — Portfolio

Live at **[alexisgmayer.dev](https://alexisgmayer.dev)**

A bilingual (English / French) single-page portfolio that presents my background, projects, experience and education, with a downloadable resume.

## Tech Stack

| Area | Technology |
| --- | --- |
| Build tool | [Vite 6](https://vite.dev) |
| UI | [React 19](https://react.dev) |
| Styling | Plain CSS (`src/index.css`) |
| Linting | [ESLint 9](https://eslint.org) |

## Features

- **Bilingual content**: English at `/` and French at `/fr/`, both prerendered, with `hreflang` links between them. Visitors arriving at `/` go to `/fr/` if they last chose French or their browser is in French. All copy lives in `src/content.js`.
- **Scroll reveals and parallax**: sections fade in with `IntersectionObserver`, and motion is turned off for visitors who prefer reduced motion.
- **Video backdrop**: a looping cloud video (WebM and MP4) that starts after the poster has painted.
- **Resume download**: served from `public/ResumeAlexisMayer.pdf`.

## Project Structure

```
index.html            # Entry HTML
scripts/
└── prerender.mjs     # Per-language HTML, metadata and JSON-LD
src/
├── main.jsx          # Hydrates the prerendered page, loads fonts
├── entry-server.jsx  # Renders the app for prerendering
├── App.jsx           # All page sections and hooks
├── content.js        # English and French copy, profile details
└── index.css         # Styles and theme tokens
public/
├── ResumeAlexisMayer.pdf
└── assets/           # Images, video and credits.json (media licenses)
```

## Getting Started

Requires Node.js 20 or later.

```bash
npm install
npm run dev       # start the dev server at http://localhost:5173
```

### Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Create a prerendered production build in `dist/` |
| `npm run preview` | Serve the production build at http://localhost:4173 |
| `npm run lint` | Run ESLint |

## Deployment

The site is hosted on [Vercel](https://vercel.com) at [alexisgmayer.dev](https://alexisgmayer.dev).

- Every push to `main` deploys to production.
- Pushes to any other branch create a preview deployment with its own URL.
- `vercel.json` sets the framework, output directory, security headers and caching.

## Media Credits

Third-party images and video are listed with their licenses in `public/assets/credits.json`.

## Previous Version

The earlier Next.js version of this site is in the git history, up to commit `a55ff16`.
