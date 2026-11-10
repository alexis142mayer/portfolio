import { StrictMode } from 'react';
import { hydrateRoot } from 'react-dom/client';
import '@fontsource-variable/inter/wght.css';
import './index.css';
import App from './App.jsx';

const path = window.location.pathname;
const lang = path.startsWith('/fr') ? 'fr' : 'en';

// Readers land on their language at / only; crawlers and /fr/ links stay put.
function preferredLang() {
  try {
    const saved = localStorage.getItem('lang');
    if (saved) return saved;
  } catch {
    // Storage can be blocked; fall through to the browser's language.
  }
  return navigator.language?.toLowerCase().startsWith('fr') ? 'fr' : 'en';
}

if (path === '/' && preferredLang() === 'fr') {
  window.location.replace(`/fr/${window.location.hash}`);
} else {
  // Vercel's ?lang=fr redirect keeps the query; the path already carries the language.
  if (new URLSearchParams(window.location.search).has('lang')) {
    window.history.replaceState(null, '', path + window.location.hash);
  }

  // Content stays visible until the reader scrolls, so renderers that never scroll see it all.
  window.addEventListener('scroll', () => document.documentElement.classList.add('reveal-armed'), {
    once: true,
    passive: true,
  });

  hydrateRoot(
    document.getElementById('root'),
    <StrictMode>
      <App lang={lang} />
    </StrictMode>,
  );
}
