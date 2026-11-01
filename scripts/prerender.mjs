// Writes the English and French pages into dist/ with their content and metadata.
import { mkdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { render, content, profile } from '../dist-ssr/entry-server.js';

const ORIGIN = 'https://alexisgmayer.dev';
const urls = { en: `${ORIGIN}/`, fr: `${ORIGIN}/fr/` };
const OG_IMAGE = `${ORIGIN}/assets/og.jpg`;

const esc = (s) => s.replaceAll('&', '&amp;').replaceAll('"', '&quot;').replaceAll('<', '&lt;');

function jsonLd(lang) {
  const t = content[lang];
  const person = `${ORIGIN}/#person`;
  return {
    '@context': 'https://schema.org',
    '@graph': [
      { '@type': 'WebSite', '@id': `${ORIGIN}/#website`, url: urls.en, name: profile.name, inLanguage: ['en', 'fr'] },
      {
        '@type': 'ProfilePage',
        '@id': `${urls[lang]}#profilepage`,
        url: urls[lang],
        name: t.meta.title,
        description: t.meta.description,
        inLanguage: lang,
        isPartOf: { '@id': `${ORIGIN}/#website` },
        mainEntity: { '@id': person },
      },
      {
        '@type': 'Person',
        '@id': person,
        name: profile.name,
        alternateName: 'Alexis Mayer',
        url: urls.en,
        jobTitle: 'Team Lead (IT-03)',
        worksFor: { '@type': 'GovernmentOrganization', name: 'Canada Border Services Agency', alternateName: 'CBSA' },
        alumniOf: { '@type': 'CollegeOrUniversity', name: 'La Cité collégiale' },
        address: { '@type': 'PostalAddress', addressLocality: 'Ottawa', addressRegion: 'ON', addressCountry: 'CA' },
        knowsLanguage: ['en', 'fr'],
        knowsAbout: ['Microsoft Power Platform', 'Power Apps', 'Power Automate', 'Power BI', 'Dataverse', 'React', 'SQL'],
        ...(profile.sameAs.length ? { sameAs: profile.sameAs } : {}),
      },
    ],
  };
}

function head(lang) {
  const { title, description } = content[lang].meta;
  const tags = [
    `<title>${esc(title)}</title>`,
    `<meta name="description" content="${esc(description)}" />`,
    `<link rel="canonical" href="${urls[lang]}" />`,
    `<link rel="alternate" hreflang="en" href="${urls.en}" />`,
    `<link rel="alternate" hreflang="fr" href="${urls.fr}" />`,
    `<link rel="alternate" hreflang="x-default" href="${urls.en}" />`,
    `<meta property="og:type" content="profile" />`,
    `<meta property="og:site_name" content="${esc(profile.name)}" />`,
    `<meta property="og:title" content="${esc(title)}" />`,
    `<meta property="og:description" content="${esc(description)}" />`,
    `<meta property="og:url" content="${urls[lang]}" />`,
    `<meta property="og:image" content="${OG_IMAGE}" />`,
    `<meta property="og:image:width" content="1200" />`,
    `<meta property="og:image:height" content="630" />`,
    `<meta property="og:image:alt" content="${esc(title)}" />`,
    `<meta property="og:locale" content="${lang === 'fr' ? 'fr_CA' : 'en_CA'}" />`,
    `<meta property="og:locale:alternate" content="${lang === 'fr' ? 'en_CA' : 'fr_CA'}" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<script type="application/ld+json">${JSON.stringify(jsonLd(lang)).replaceAll('<', '\\u003c')}</script>`,
  ];
  return tags.join('\n    ');
}

const template = readFileSync('dist/index.html', 'utf8');

const page = (lang) =>
  template
    .replace('<html lang="en">', `<html lang="${lang}">`)
    .replace(/<!--head-->[\s\S]*<!--\/head-->/, () => head(lang))
    .replace('<div id="root"></div>', () => `<div id="root">${render(lang)}</div>`);

writeFileSync('dist/index.html', page('en'));
mkdirSync('dist/fr', { recursive: true });
writeFileSync('dist/fr/index.html', page('fr'));
rmSync('dist-ssr', { recursive: true });
