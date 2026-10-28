import { createContext, useContext, useEffect, useRef, useState } from 'react';
import { LANGS, content, profile } from './content.js';

const SECTION_IDS = ['work', 'about', 'experience', 'contact'];

const prefersReducedMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ---------- Language ---------- */

const LangContext = createContext({ lang: 'en', t: content.en, setLang: () => {} });

const useLang = () => useContext(LangContext);

// A ?lang= link, else the visitor's last choice, else the browser's language, else English.
function initialLang() {
  const param = new URLSearchParams(window.location.search).get('lang');
  if (LANGS.includes(param)) return param;
  try {
    const saved = localStorage.getItem('lang');
    if (LANGS.includes(saved)) return saved;
  } catch {
    // Storage can be blocked; fall through to the browser's language.
  }
  return navigator.language?.toLowerCase().startsWith('fr') ? 'fr' : 'en';
}

function useLanguage() {
  const [lang, setLang] = useState(initialLang);
  const t = content[lang];
  const first = useRef(true);

  useEffect(() => {
    document.documentElement.lang = lang;
    document.title = t.meta.title;
    document.querySelector('meta[name="description"]')?.setAttribute('content', t.meta.description);
    try {
      localStorage.setItem('lang', lang);
    } catch {
      // Not remembered this time; the page still works.
    }

    // A short fade so the swap reads as a change of language, not a glitch.
    if (first.current) {
      first.current = false;
      return;
    }
    document.querySelectorAll('main, .footer, .bar-nav').forEach((el) =>
      el.animate([{ opacity: 0.35 }, { opacity: 1 }], { duration: 350, easing: 'ease-out' }),
    );
  }, [lang, t]);

  return { lang, t, setLang };
}

/* ---------- Motion helpers ---------- */

// Reveals an element once when it scrolls into view. Never re-hides.
function useReveal() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: '0px 0px -10% 0px' },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return [ref, visible];
}

// Children opt in with className="rise" and style={{ '--i': n }} for their stagger slot.
function Reveal({ as = 'div', className = '', children, ...rest }) {
  const [ref, visible] = useReveal();
  const Tag = as;
  return (
    <Tag ref={ref} className={className} data-visible={visible || undefined} {...rest}>
      {children}
    </Tag>
  );
}

// Tracks which section is currently in the middle of the viewport.
function useActiveSection(ids) {
  const [active, setActive] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: '-45% 0px -50% 0px' },
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [ids]);

  return active;
}

// Hides the bar while reading downwards, brings it back on any upward scroll.
function useScrollState() {
  const [state, setState] = useState({ hidden: false, scrolled: false });

  useEffect(() => {
    let last = window.scrollY;
    let frame = 0;
    const update = () => {
      frame = 0;
      const y = window.scrollY;
      const scrolled = y > 24;
      if (Math.abs(y - last) > 6) {
        setState({ hidden: y > last && y > window.innerHeight * 0.6, scrolled });
        last = y;
      } else {
        setState((s) => (s.scrolled === scrolled ? s : { ...s, scrolled }));
      }
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return state;
}

// Fallback for browsers without CSS scroll-driven animations (e.g. Firefox).
// Mirrors the *-sink and about-drift keyframes in index.css; writes transforms
// directly, no re-renders.
function useParallaxFallback() {
  useEffect(() => {
    if (CSS.supports('animation-timeline: scroll()') || prefersReducedMotion()) return;

    const head = document.querySelector('[data-parallax="head"]');
    const media = document.querySelector('[data-parallax="media"]');
    const about = document.querySelector('[data-parallax="about"]');
    let frame = 0;

    const update = () => {
      frame = 0;
      const vh = window.innerHeight;
      const p = Math.min(Math.max(window.scrollY / vh, 0), 1);
      if (head) {
        head.style.transform = `translateY(${p * 18}vh)`;
        head.style.opacity = String(1 - p * 0.9);
      }
      if (media) media.style.transform = `translateY(${p * 14}vh) scale(${1 + p * 0.08})`;
      if (about) {
        // 0 when the section's top enters the viewport, 1 when its bottom leaves.
        const rect = about.parentElement.getBoundingClientRect();
        const q = Math.min(Math.max((vh - rect.top) / (vh + rect.height), 0), 1);
        about.style.transform = `translateY(${-11 + q * 22}%) scale(${1.06 - q * 0.06})`;
      }
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);
}

// True while the media query matches; follows resizes and rotation.
function useMediaQuery(query) {
  const [matches, setMatches] = useState(() => window.matchMedia(query).matches);

  useEffect(() => {
    const list = window.matchMedia(query);
    const onChange = () => setMatches(list.matches);
    list.addEventListener('change', onChange);
    return () => list.removeEventListener('change', onChange);
  }, [query]);

  return matches;
}

// Slow crossfade between photographs, paused while the tab is hidden.
function useSlowCrossfade(count, hold = 5500) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (prefersReducedMotion()) return;
    let timer;
    const tick = () => {
      timer = setTimeout(() => {
        if (!document.hidden) setIndex((i) => (i + 1) % count);
        tick();
      }, hold);
    };
    tick();
    return () => clearTimeout(timer);
  }, [count, hold]);

  return index;
}

/* ---------- Page ---------- */

function Arrow() {
  return (
    <svg className="arrow" width="18" height="12" viewBox="0 0 18 12" aria-hidden="true">
      <path d="M0 6h16M11 1l5 5-5 5" fill="none" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

// Soft colour fields that drift behind every panel.
function Backdrop() {
  return (
    <div className="backdrop" aria-hidden="true">
      <span className="glow glow-blue" />
      <span className="glow glow-coral" />
      <span className="glow glow-crimson" />
    </div>
  );
}

function LangToggle() {
  const { lang, t, setLang } = useLang();
  const next = lang === 'en' ? 'fr' : 'en';

  return (
    <button
      type="button"
      className="lang-toggle"
      onClick={() => setLang(next)}
      aria-label={t.switchTo}
      lang={next}
    >
      {LANGS.map((code) => (
        <span key={code} className="lang-option" data-current={code === lang || undefined} aria-hidden="true">
          {code.toUpperCase()}
        </span>
      ))}
    </button>
  );
}

function Header({ active }) {
  const { t } = useLang();
  const { hidden, scrolled } = useScrollState();

  return (
    <header className="bar" data-hidden={hidden || undefined} data-scrolled={scrolled || undefined}>
      <nav aria-label={t.nav.label} className="bar-nav">
        {SECTION_IDS.map((id) => (
          <a key={id} href={`#${id}`} className="bar-link" aria-current={active === id ? 'true' : undefined}>
            {t.nav[id]}
          </a>
        ))}
      </nav>
      <a href="#top" className="mark" aria-label={`${profile.name}, ${t.backToTop}`}>
        AM
      </a>
      <div className="bar-end">
        <LangToggle />
        <a href={`mailto:${profile.email}`} className="bar-action">
          {t.emailMe} <Arrow />
        </a>
      </div>
    </header>
  );
}

function Hero() {
  const { t } = useLang();
  const video = useRef(null);
  // Reduced motion starts the clouds still; the button plays them on request.
  const [playing, setPlaying] = useState(() => !prefersReducedMotion());

  const togglePlay = () => {
    if (playing) video.current.pause();
    else video.current.play();
    setPlaying(!playing);
  };

  return (
    <section className="hero panel panel-light" id="top" aria-labelledby="hero-title">
      <div className="hero-head" data-parallax="head">
        <h1 id="hero-title" className="hero-title">
          <span className="load-mask">
            <span className="load-line" style={{ '--i': 0 }}>
              {t.hero.title[0]}
            </span>
          </span>{' '}
          <span className="load-mask">
            <span className="load-line" style={{ '--i': 1 }}>
              {t.hero.title[1]}
            </span>
          </span>
        </h1>
        <div className="hero-aside load-fade" style={{ '--i': 2 }}>
          <p>
            <strong className="tagline">{t.hero.tagline}</strong>{' '}
            <span className="hero-intro">{t.hero.intro}</span>
          </p>
          <a href="#work" className="button">
            {t.hero.cta} <Arrow />
          </a>
        </div>
      </div>
      <div className="hero-media">
        <div className="hero-media-inner" data-parallax="media">
          <video
            ref={video}
            className="hero-video"
            src="/assets/clouds.webm"
            poster="/assets/clouds-poster.jpg"
            autoPlay={playing}
            muted
            loop
            playsInline
            aria-label={t.hero.video}
          />
        </div>
        <button
          type="button"
          className="video-toggle"
          onClick={togglePlay}
          aria-label={playing ? t.hero.pause : t.hero.play}
        >
          <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
            {playing ? <path d="M4 2h3v12H4zM9 2h3v12H9z" /> : <path d="M4 2l10 6-10 6z" />}
          </svg>
        </button>
      </div>
    </section>
  );
}

function ProjectDetails({ project }) {
  const { t } = useLang();

  return (
    <dl className="details">
      <div>
        <dt>{t.work.objective}</dt>
        <dd>{project.objective}</dd>
      </div>
      <div>
        <dt>{t.work.role}</dt>
        <dd>{project.role}</dd>
      </div>
      <div>
        <dt>{t.work.technologies}</dt>
        <dd>
          <ul className="tech">
            {project.technologies.map((tech) => (
              <li key={tech}>{tech}</li>
            ))}
          </ul>
        </dd>
      </div>
    </dl>
  );
}

function Work() {
  const { t } = useLang();
  const [active, setActive] = useState(0);
  // Phones show each project's photo inline, so the names have nothing to switch.
  const narrow = useMediaQuery('(max-width: 800px)');
  const projects = t.projects;
  const project = projects[active];

  return (
    <section className="work panel" id="work" aria-labelledby="work-title">
      <div className="work-field">
        <Reveal className="work-head">
          <h2 id="work-title" className="section-title rise">
            {t.work.title}
          </h2>
          <p className="work-note rise" style={{ '--i': 1 }}>
            {t.work.note}
          </p>
        </Reveal>
        <ul className="work-index">
          {projects.map((p, i) => (
            <Reveal as="li" key={p.letter} className="work-row">
              <figure className="work-thumb rise" style={{ '--i': 0 }}>
                <img src={p.image} alt={p.alt} width="1400" height="1800" loading="lazy" />
              </figure>
              {narrow ? (
                <h3 className="work-name rise" style={{ '--i': 1 }}>
                  <span className="work-title">{p.title}</span>
                </h3>
              ) : (
                <button
                  type="button"
                  className="work-name rise"
                  style={{ '--i': 1 }}
                  aria-pressed={active === i}
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  onClick={() => setActive(i)}
                >
                  <span className="work-title">{p.title}</span>
                </button>
              )}
              <div className="work-desc-inline rise" style={{ '--i': 2 }}>
                <p className="work-kind">{p.kind}</p>
                <ul className="tech">
                  {p.technologies.map((tech) => (
                    <li key={tech}>{tech}</li>
                  ))}
                </ul>
                <details className="work-more">
                  <summary>{t.work.more}</summary>
                  <dl className="details">
                    <div>
                      <dt>{t.work.objective}</dt>
                      <dd>{p.objective}</dd>
                    </div>
                    <div>
                      <dt>{t.work.role}</dt>
                      <dd>{p.role}</dd>
                    </div>
                  </dl>
                </details>
              </div>
            </Reveal>
          ))}
        </ul>
        <div className="work-details" aria-live="polite">
          <div key={project.title} className="swap-block">
            <ProjectDetails project={project} />
          </div>
        </div>
      </div>
      <div className="work-stage">
        {projects.map((p, i) => (
          <figure
            key={p.letter}
            className="work-layer"
            data-current={i === active || undefined}
            aria-hidden={i === active ? undefined : 'true'}
          >
            <img src={p.image} alt={p.alt} width="1400" height="1800" loading="lazy" />
          </figure>
        ))}
        <div className="badge" aria-hidden="true">
          <span key={project.title} className="swap">
            <span className="badge-year">{project.letter}</span>
            <span className="badge-kind">{project.kind}</span>
          </span>
        </div>
      </div>
    </section>
  );
}

const WORDMARK = 'ALEXIS';

function About() {
  const { t } = useLang();
  const current = useSlowCrossfade(t.heroPhotos.length, 7000);
  const card = t.projects[2];

  return (
    <section className="about panel panel-dark" id="about" aria-labelledby="about-title">
      <div className="about-photos" data-parallax="about" aria-hidden="true">
        {t.heroPhotos.map((photo, i) => (
          <img
            key={photo.src}
            src={photo.src}
            alt=""
            width="1200"
            height="1500"
            loading="lazy"
            className="about-photo"
            data-current={i === current || undefined}
          />
        ))}
      </div>
      <Reveal className="about-inner">
        <p className="wordmark" aria-hidden="true">
          {WORDMARK.split('').map((ch, i) => (
            <span key={i} className="wordmark-mask">
              <span className="wordmark-letter" style={{ '--i': i }}>
                {ch}
              </span>
            </span>
          ))}
        </p>
        <h2 id="about-title" className="about-sub rise" style={{ '--i': 4 }}>
          {t.about.title}
        </h2>
        <div className="about-row">
          <figure className="news-card rise" style={{ '--i': 5 }}>
            <img src={card.image} alt={card.alt} width="1400" height="1800" loading="lazy" />
            <figcaption>
              <span className="news-title">{t.about.newsTitle}</span>
              <span className="news-desc">{t.about.newsDesc}</span>
              <a href="#experience" className="news-link">
                {t.about.newsLink} <Arrow />
              </a>
            </figcaption>
          </figure>
          <div className="letter">
            {t.letter.map((para, i) => {
              const [before, after] = para.split(t.letterMark);
              return (
                <p key={i} className="rise" style={{ '--i': i + 6 }}>
                  {after === undefined ? (
                    para
                  ) : (
                    <>
                      {before}
                      <mark className="marker">{t.letterMark}</mark>
                      {after}
                    </>
                  )}
                </p>
              );
            })}
          </div>
        </div>
      </Reveal>
    </section>
  );
}

function ListGroup({ label, items }) {
  return (
    <Reveal className="list-group">
      <p className="list-label rise">{label}</p>
      <ul>
        {items.map((item, i) => (
          <li key={i} className="list-row rise" style={{ '--i': i + 1 }}>
            <span className="list-name">
              <span className={item.short ? 'name-full' : undefined}>{item.name}</span>
              {item.short && <span className="name-short">{item.short}</span>}
            </span>
            <span className="list-value">{item.value}</span>
          </li>
        ))}
      </ul>
    </Reveal>
  );
}

function Experience() {
  const { t } = useLang();

  return (
    <section className="experience panel panel-light" id="experience" aria-labelledby="experience-title">
      <Reveal className="experience-head">
        <h2 id="experience-title" className="section-title rise">
          {t.experience.title}
        </h2>
      </Reveal>
      <div className="lists">
        <ListGroup label={t.experience.roles} items={t.roles} />
        <div className="lists-stack">
          <ListGroup label={t.experience.education} items={t.education} />
          <ListGroup label={t.experience.strengths} items={t.strengths} />
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const { t } = useLang();
  const [need, setNeed] = useState('project');
  const [copied, setCopied] = useState(false);
  const choice = t.needs.find((n) => n.id === need);
  const href = `mailto:${profile.email}?subject=${encodeURIComponent(choice.subject)}&body=${encodeURIComponent(choice.body)}`;

  useEffect(() => {
    if (!copied) return;
    const timer = setTimeout(() => setCopied(false), 1800);
    return () => clearTimeout(timer);
  }, [copied]);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  };

  return (
    <section className="contact panel panel-dark" id="contact" aria-labelledby="contact-title">
      <div className="contact-media" aria-hidden="true">
        <img src="/assets/hero-994.jpg" alt="" width="1200" height="1500" loading="lazy" className="contact-photo" />
      </div>
      <Reveal className="contact-inner">
        <h2 id="contact-title" className="contact-title rise">
          {t.contact.title}
        </h2>
        <div className="contact-card rise" style={{ '--i': 1 }}>
          <p className="contact-lead">{t.contact.lead}</p>
          <p className="contact-email">
            <a href={`mailto:${profile.email}`}>
              {profile.email.split('@')[0]}@<wbr />
              {profile.email.split('@')[1]}
            </a>
            <button type="button" className="text-button" onClick={copy}>
              <span className="copy-label" data-hidden={copied || undefined}>
                {t.contact.copy}
              </span>
              <span className="copy-label copy-done" data-hidden={!copied || undefined}>
                {t.contact.copied}
              </span>
            </button>
            <span className="sr-only" aria-live="polite">
              {copied ? t.contact.copiedAnnounce : ''}
            </span>
          </p>
          <fieldset className="needs">
            <legend>{t.contact.legend}</legend>
            <div className="needs-options">
              {t.needs.map((n) => (
                <label key={n.id} className="need">
                  <input
                    type="radio"
                    name="need"
                    value={n.id}
                    checked={need === n.id}
                    onChange={() => setNeed(n.id)}
                  />
                  <span>{n.label}</span>
                </label>
              ))}
            </div>
          </fieldset>
          <dl className="facts">
            <div>
              <dt>{t.contact.phone}</dt>
              <dd>
                <a href={`tel:+1${profile.phone.replaceAll('-', '')}`}>{profile.phone}</a>
              </dd>
            </div>
            <div className="fact-languages">
              <dt>{t.contact.languages}</dt>
              <dd>{t.contact.languagesValue}</dd>
            </div>
            <div>
              <dt>{t.contact.resume}</dt>
              <dd>
                <a href={profile.resume} target="_blank" rel="noreferrer">
                  {t.contact.download}
                </a>
              </dd>
            </div>
          </dl>
          <a href={href} className="button button-block">
            <span key={choice.cta} className="swap">
              {choice.cta}
            </span>
            <Arrow />
          </a>
        </div>
      </Reveal>
    </section>
  );
}

function Footer() {
  const { t } = useLang();
  const [showCredits, setShowCredits] = useState(false);

  return (
    <footer className="footer panel panel-dark">
      <div className="footer-line">
        <span>
          © {new Date().getFullYear()} {profile.name}
        </span>
        <ul className="footer-links">
          <li>
            <button
              type="button"
              className="footer-toggle"
              aria-expanded={showCredits}
              aria-controls="credits"
              onClick={() => setShowCredits((v) => !v)}
            >
              {t.footer.credits}
            </button>
          </li>
        </ul>
      </div>
      <p className="credits" id="credits" hidden={!showCredits}>
        {t.footer.pictures}{' '}
        <a href="https://picsum.photos/">Joe Beck, Caroline Sada, Jonathan Bean</a> via Unsplash;{' '}
        {t.footer.projectPhotos} <a href="https://unsplash.com/">Unsplash</a>;{' '}
        <a href="https://commons.wikimedia.org/w/index.php?curid=97277544">“Dilution Refrigerator”</a>{' '}
        {t.footer.by} UCL Mathematical &amp; Physical Sciences,{' '}
        <a href="https://creativecommons.org/licenses/by/2.0/">CC BY 2.0</a>, via Wikimedia Commons;{' '}
        <a href="https://commons.wikimedia.org/wiki/File:Clouds_above_Japan_-_2019_4_1.webm">
          “Clouds above Japan”
        </a>{' '}
        {t.footer.by} Nesnad, <a href="https://creativecommons.org/licenses/by-sa/4.0">CC BY-SA 4.0</a>, via
        Wikimedia Commons.
      </p>
    </footer>
  );
}

export default function App() {
  const language = useLanguage();
  const active = useActiveSection(SECTION_IDS);
  useParallaxFallback();

  return (
    <LangContext.Provider value={language}>
      <Backdrop />
      <Header active={active} />
      <main>
        <Hero />
        <Work />
        <About />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </LangContext.Provider>
  );
}
