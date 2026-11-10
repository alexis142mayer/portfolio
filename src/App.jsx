import { createContext, useContext, useEffect, useRef, useState } from 'react';
import { Analytics } from '@vercel/analytics/react';
import { LANGS, content, profile } from './content.js';

const SECTION_IDS = ['work', 'about', 'experience', 'contact'];

const prefersReducedMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ---------- Language ---------- */

const LangContext = createContext({ lang: 'en', t: content.en });

const useLang = () => useContext(LangContext);

const LANG_PATHS = { en: '/', fr: '/fr/' };

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
      { threshold: 0 },
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

/* GhostType (after React Bits Pro): the start of a heading types itself, the rest
 * streams in word by word as a faded autocomplete suggestion, then is accepted with
 * an accent sweep. Runs once when scrolled into view; a click accepts early.
 * The full title is always in the DOM (sr-only + an invisible sizer), so screen
 * readers, the prerendered HTML and the layout never see a partial heading. */
const GT = { type: 45, think: 600, stream: 70, accept: 1200 };

function GhostType({ text, as = 'h2', className = '', ...rest }) {
  const Tag = as;
  const cut = text.indexOf(',') + 1 || Math.ceil(text.length / 2);
  const head = text.slice(0, cut);
  const words = text.slice(cut).match(/\s*\S+/g) || [];

  // phase: static (SSR, no JS, reduced motion) | wait | type | think | stream | offer | accepted
  const [state, setState] = useState({ phase: 'static', typed: head.length, shown: words.length });
  const ref = useRef(null);
  const acceptRef = useRef(() => {});

  useEffect(() => {
    const node = ref.current;
    if (!node || prefersReducedMotion()) return;
    let timer;
    let cancelled = false;
    const wait = (ms) => new Promise((r) => { timer = setTimeout(r, ms); });
    const set = (s) => !cancelled && setState(s);
    let accepted = false;
    let wake = () => {};
    acceptRef.current = () => { accepted = true; clearTimeout(timer); wake(); };

    set({ phase: 'wait', typed: 0, shown: 0 });

    const run = async () => {
      for (let i = 1; i <= head.length; i++) {
        await wait(GT.type * (0.6 + Math.random() * 0.8));
        set({ phase: 'type', typed: i, shown: 0 });
      }
      set({ phase: 'think', typed: head.length, shown: 0 });
      await wait(GT.think);
      for (let w = 1; w <= words.length && !accepted; w++) {
        set({ phase: 'stream', typed: head.length, shown: w });
        await wait(GT.stream);
      }
      set({ phase: 'offer', typed: head.length, shown: words.length });
      if (!accepted) await new Promise((r) => { wake = r; timer = setTimeout(r, GT.accept); });
      set({ phase: 'accepted', typed: head.length, shown: words.length });
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          observer.disconnect();
          run();
        }
      },
      { threshold: 0.6 },
    );
    observer.observe(node);
    return () => {
      cancelled = true;
      clearTimeout(timer);
      observer.disconnect();
    };
  }, [head, words.length]);

  const { phase, typed, shown } = state;
  const ghost = words.slice(0, shown).join('');
  const live = phase !== 'static';
  const suggesting = phase === 'stream' || phase === 'offer';

  return (
    <Tag
      ref={ref}
      className={`ghost-type ${className}`}
      data-phase={phase}
      onClick={suggesting ? () => acceptRef.current() : undefined}
      {...rest}
    >
      <span className="sr-only">{text}</span>
      <span className="gt-stack" aria-hidden="true">
        <span className="gt-sizer">{text}</span>
        <span className="gt-live">
          {live ? head.slice(0, typed) : head}
          {live && phase !== 'accepted' && <span className="gt-caret" />}
          {(live ? ghost : words.join('')) && (
            <span className={live ? (phase === 'accepted' ? 'gt-accepted' : 'gt-ghost') : undefined}>
              {live ? ghost : words.join('')}
            </span>
          )}
          {suggesting && <kbd className="gt-hint">Tab</kbd>}
        </span>
      </span>
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

/* ---------- Page ---------- */

function Chevron() {
  return (
    <svg className="chevron" width="7" height="12" viewBox="0 0 7 12" aria-hidden="true">
      <path d="M1 1l5 5-5 5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

// Ring swing after React Bits' Bell Toggle: decaying passes around a pivot near the top,
// bunched towards the start, with a wave on alternating sides at each pass.
const RING = { amplitude: 17, passes: 5, duration: 820, ease: 'cubic-bezier(0.77, 0, 0.175, 1)' };
const passOffset = (k) => 1 - Math.pow(1 - (k + 2 / 3) / (RING.passes + 1), 0.6);

function ringKeyframes() {
  const frames = [{ transform: 'rotate(0deg)', offset: 0, easing: RING.ease }];
  for (let k = 0; k < RING.passes; k++) {
    const angle = RING.amplitude * (1 - k / RING.passes) * (k % 2 ? 1 : -1);
    frames.push({ transform: `rotate(${angle.toFixed(2)}deg)`, offset: passOffset(k), easing: RING.ease });
  }
  frames.push({ transform: 'rotate(0deg)', offset: 1 });
  return frames;
}

// EN / FR as a two-state pill: English is off, French is on. Choosing it rings the globe,
// crossfades the label, then follows the link once the swing has mostly settled.
function LangToggle() {
  const { lang, t } = useLang();
  const next = lang === 'en' ? 'fr' : 'en';
  const [on, setOn] = useState(lang === 'fr');
  const [pressed, setPressed] = useState(false);
  const glyph = useRef(null);
  const waves = useRef([]);
  const leave = useRef(0);

  useEffect(() => () => clearTimeout(leave.current), []);

  const ring = () => {
    glyph.current?.animate(ringKeyframes(), { duration: RING.duration, easing: 'linear' });
    for (let k = 0; k < RING.passes; k++) {
      waves.current[k % 2]?.animate(
        [
          { opacity: 0, transform: 'scale(0.55)' },
          { opacity: 0.9 * (1 - k / RING.passes), offset: 0.3 },
          { opacity: 0, transform: 'scale(1.25)' },
        ],
        { duration: 380, delay: passOffset(k) * RING.duration, easing: 'ease-out' },
      );
    }
  };

  const choose = (e) => {
    try {
      localStorage.setItem('lang', next);
    } catch {
      // Not remembered this time; the link still works.
    }
    // New tab, new window or a second click: let the browser handle the link.
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0 || on !== (lang === 'fr')) return;
    e.preventDefault();
    const reduce = prefersReducedMotion();
    setOn(!on);
    if (!reduce) ring();
    const href = e.currentTarget.href;
    leave.current = setTimeout(() => window.location.assign(href), reduce ? 220 : 600);
  };

  return (
    <a
      href={LANG_PATHS[next]}
      className="lang-toggle"
      data-on={on || undefined}
      data-pressed={pressed || undefined}
      onClick={choose}
      onPointerDown={(e) => e.button === 0 && setPressed(true)}
      onPointerUp={() => setPressed(false)}
      onPointerLeave={() => setPressed(false)}
      onPointerCancel={() => setPressed(false)}
      aria-label={t.switchTo}
      lang={next}
      hrefLang={next}
    >
      <span className="lt-pill">
        <span className="lt-icon" aria-hidden="true">
          <svg ref={glyph} className="lt-glyph" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="9" />
            <path d="M3 12h18M12 3c2.5 2.6 3.8 5.6 3.8 9s-1.3 6.4-3.8 9c-2.5-2.6-3.8-5.6-3.8-9S9.5 5.6 12 3z" />
          </svg>
          <svg ref={(el) => (waves.current[0] = el)} className="lt-wave lt-wave-left" viewBox="0 0 14 14">
            <path d="M14 8a6 6 0 0 0-6 6" />
            <path d="M14 4A10 10 0 0 0 4 14" />
          </svg>
          <svg ref={(el) => (waves.current[1] = el)} className="lt-wave lt-wave-right" viewBox="0 0 14 14">
            <path d="M0 8a6 6 0 0 1 6 6" />
            <path d="M0 4a10 10 0 0 1 10 10" />
          </svg>
        </span>
        <span className="lt-say" aria-hidden="true">
          {LANGS.map((code) => (
            <span key={code} className="lt-face" data-current={(code === 'fr') !== on || undefined}>
              {code.toUpperCase()}
            </span>
          ))}
        </span>
      </span>
    </a>
  );
}

// Project photographs, in the three widths generated under public/assets.
function Photo({ name, sizes, alt = '', width, height, ...rest }) {
  return (
    <img
      src={`/assets/${name}-1200.webp`}
      srcSet={`/assets/${name}-480.webp 480w, /assets/${name}-800.webp 800w, /assets/${name}-1200.webp 1200w`}
      sizes={sizes}
      alt={alt}
      width={width}
      height={height}
      loading="lazy"
      {...rest}
    />
  );
}

function Header({ active }) {
  const { t } = useLang();

  return (
    <header className="nav">
      <div className="nav-inner">
        <a href="#top" className="nav-mark" aria-label={`${profile.name}, ${t.backToTop}`}>
          {profile.name}
        </a>
        <nav aria-label={t.nav.label} className="nav-links">
          {SECTION_IDS.map((id) => (
            <a key={id} href={`#${id}`} aria-current={active === id ? 'true' : undefined}>
              {t.nav[id]}
            </a>
          ))}
        </nav>
        <div className="nav-end">
          <LangToggle />
        </div>
      </div>
    </header>
  );
}

function Hero() {
  const { t } = useLang();
  const video = useRef(null);
  const [playing, setPlaying] = useState(true);
  const startTimer = useRef(0);

  // Set from a script: React doesn't write `muted` to prerendered HTML, and browsers
  // only autoplay muted video. Reduced motion starts the clouds still.
  useEffect(() => {
    const el = video.current;
    el.muted = true;
    if (prefersReducedMotion()) {
      setPlaying(false);
      return;
    }
    // The poster paints first; the video's bytes wait until the page has settled.
    startTimer.current = setTimeout(() => el.play().catch(() => setPlaying(false)), 1500);
    return () => clearTimeout(startTimer.current);
  }, []);

  const togglePlay = () => {
    clearTimeout(startTimer.current);
    if (playing) video.current.pause();
    else video.current.play();
    setPlaying(!playing);
  };

  return (
    <section className="hero section" id="top" aria-labelledby="hero-title">
      <div className="hero-copy">
        <h1 id="hero-title">
          <span className="eyebrow load" style={{ '--i': 0 }}>
            {profile.name}
          </span>{' '}
          <span className="display load" style={{ '--i': 1 }}>
            {t.hero.title}
          </span>
        </h1>
        <p className={`lead load${Array.isArray(t.hero.sub) ? ' lead-list' : ''}`} style={{ '--i': 2 }}>
          {Array.isArray(t.hero.sub)
            ? t.hero.sub.map((item, i, all) => (
                <span key={item}>
                  <span className="lead-item">
                    {item}
                    {i < all.length - 1 && (
                      <span className="lead-dot">
                        <span className="sr-only">, </span>
                      </span>
                    )}
                  </span>{' '}
                </span>
              ))
            : t.hero.sub}
        </p>
        <div className="actions load" style={{ '--i': 3 }}>
          <a href="#work" className="button">
            {t.hero.cta}
          </a>
          <a href={profile.resume} className="link" target="_blank" rel="noreferrer">
            {t.hero.resume} <Chevron />
          </a>
        </div>
      </div>
      <div className="hero-media load-media">
        <video
          ref={video}
          className="hero-video"
          poster="/assets/clouds-poster.webp"
          preload="none"
          muted
          loop
          playsInline
          aria-label={t.hero.video}
        >
          <source src="/assets/clouds.webm" type="video/webm" />
          <source src="/assets/clouds.mp4" type="video/mp4" />
        </video>
        <button
          type="button"
          className="video-toggle"
          onClick={togglePlay}
          aria-label={playing ? t.hero.pause : t.hero.play}
        >
          <svg width="12" height="12" viewBox="0 0 16 16" aria-hidden="true">
            {playing ? <path d="M3 2h3.5v12H3zM9.5 2H13v12H9.5z" /> : <path d="M4 2l10 6-10 6z" />}
          </svg>
        </button>
      </div>
    </section>
  );
}

// Accordion gallery after React Bits: the chosen panel takes about half the row, the
// others tilt away in grey, and each photograph drifts against its frame.
const EXPAND = 0.52;
const STEPS = { ArrowRight: 1, ArrowDown: 1, ArrowLeft: -1, ArrowUp: -1 };

function Work() {
  const { t } = useLang();
  const [active, setActive] = useState(0);
  const gallery = useRef(null);
  const panels = useRef([]);
  const projects = t.projects;
  const count = projects.length;
  const grow = (EXPAND * (count - 1)) / (1 - EXPAND);

  // Photographs keep one size while their frames open and close, so they slide instead of rescaling.
  useEffect(() => {
    const el = gallery.current;
    const measure = () => {
      const style = getComputedStyle(el);
      const vertical = style.flexDirection === 'column';
      const rect = el.getBoundingClientRect();
      const gap = parseFloat(vertical ? style.rowGap : style.columnGap) || 0;
      const usable = Math.max((vertical ? rect.height : rect.width) - gap * (count - 1), 120);
      el.style.setProperty('--ag-media', `${Math.max(140, usable * EXPAND * 1.22)}px`);
    };
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(el);
    return () => observer.disconnect();
  }, [count]);

  const step = (i, e) => {
    if (!STEPS[e.key]) return;
    e.preventDefault();
    const n = (i + STEPS[e.key] + count) % count;
    setActive(n);
    panels.current[n]?.focus();
  };

  return (
    <section className="work section section-alt" id="work" aria-labelledby="work-title">
      <Reveal className="section-head">
        <h2 id="work-title" className="headline rise">
          {t.work.title}
        </h2>
        <p className="note rise" style={{ '--i': 1 }}>
          {t.work.note}
        </p>
      </Reveal>
      <Reveal className="work-body">
        <div ref={gallery} className="gallery rise" role="group" aria-label={t.work.title}>
          {projects.map((p, i) => (
            <button
              key={p.title}
              ref={(el) => (panels.current[i] = el)}
              type="button"
              className="ag-panel"
              data-active={i === active || undefined}
              aria-pressed={i === active}
              aria-label={`${p.title}${t.colon}${p.kind}`}
              style={{
                '--grow': i === active ? grow : 1,
                '--tilt': i === active ? 0 : i < active ? 1 : -1,
                '--drift': Math.max(-1.5, Math.min(1.5, active - i)),
              }}
              onMouseEnter={() => setActive(i)}
              onFocus={() => setActive(i)}
              onClick={() => setActive(i)}
              onKeyDown={(e) => step(i, e)}
            >
              <span className="ag-media">
                <Photo name={p.image} sizes="(max-width: 734px) 100vw, 60vw" alt={p.alt} width={p.width} height={p.height} />
              </span>
              <span className="ag-overlay" aria-hidden="true" />
              <span className="ag-label" aria-hidden="true">
                <span className="ag-bar" />
                <span className="ag-text">
                  {p.title}
                  <span className="ag-kind">{p.kind}</span>
                </span>
              </span>
            </button>
          ))}
        </div>
        <div className="ag-details rise" style={{ '--i': 1 }} aria-live="polite">
          {projects.map((p, i) => (
            <div key={p.title} className="ag-detail" data-current={i === active || undefined}>
              <h3 className="sr-only">
                {p.title}
                {t.colon}
                {p.kind}
              </h3>
              <p className="ag-summary">{p.summary}</p>
              <p className="ag-meta">
                {p.role} · {p.technologies.join(', ')}
              </p>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}

function About() {
  const { t } = useLang();

  return (
    <section className="about section section-dark" id="about" aria-labelledby="about-title">
      <Reveal className="about-inner">
        <GhostType id="about-title" className="headline rise" text={t.about.title} />
        <p className="lead rise" style={{ '--i': 1 }}>
          {t.about.body}
        </p>
        <dl className="facts">
          {t.about.facts.map((f, i) => (
            <div key={f.name} className="rise" style={{ '--i': i + 2 }}>
              <dt>{f.name}</dt>
              <dd>{f.value}</dd>
            </div>
          ))}
        </dl>
      </Reveal>
    </section>
  );
}

function ListGroup({ label, items }) {
  return (
    <Reveal className="list-group">
      <h3 className="list-label rise">{label}</h3>
      <ul>
        {items.map((item, i) => (
          <li key={item.name} className="list-row rise" style={{ '--i': i + 1 }}>
            <span className="list-name">
              {item.name}
              <span className="list-org">{item.org}</span>
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
    <section className="experience section" id="experience" aria-labelledby="experience-title">
      <Reveal className="section-head">
        <h2 id="experience-title" className="headline rise">
          {t.experience.title}
        </h2>
      </Reveal>
      <div className="lists">
        <ListGroup label={t.experience.roles} items={t.roles} />
        <ListGroup label={t.experience.education} items={t.education} />
      </div>
    </section>
  );
}

function Contact() {
  const { t } = useLang();
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return;
    const timer = setTimeout(() => setCopied(false), 2400);
    return () => clearTimeout(timer);
  }, [copied]);

  const copy = async () => {
    if (copied) return;
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  };

  return (
    <section className="contact section section-alt" id="contact" aria-labelledby="contact-title">
      <Reveal className="contact-inner">
        <h2 id="contact-title" className="headline rise">
          {t.contact.title}
        </h2>
        <p className="lead rise" style={{ '--i': 1 }}>
          {t.contact.lead}
        </p>
        <div className="contact-email-row rise" style={{ '--i': 2 }}>
          <p className="contact-email">
            <a href={`mailto:${profile.email}`}>
              {profile.email.split('@')[0]}@<wbr />
              {profile.email.split('@')[1]}
            </a>
          </p>
          <button
            type="button"
            className="button button-secondary copy-button"
            data-copied={copied || undefined}
            aria-label={copied ? t.contact.copied : t.contact.copy}
            title={t.contact.copy}
            onClick={copy}
          >
            <svg className="copy-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
              <rect x="8.5" y="8.5" width="11" height="11" rx="2.5" />
              <path d="M15.5 8.5V6.5A2 2 0 0 0 13.5 4.5H6.5A2 2 0 0 0 4.5 6.5V13.5A2 2 0 0 0 6.5 15.5H8.5" />
            </svg>
            <svg className="copy-check" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
              <path d="M5 12.5l4.5 4.5L19 7.5" />
            </svg>
          </button>
          <span className="sr-only" aria-live="polite">
            {copied ? t.contact.copiedAnnounce : ''}
          </span>
        </div>
        <ul className="contact-more rise" style={{ '--i': 3 }}>
          <li>
            <a href={profile.resume} target="_blank" rel="noreferrer">
              {t.contact.resume}
            </a>
          </li>
          {profile.sameAs.map((url) => (
            <li key={url}>
              <a href={url} rel="me noreferrer">
                {new URL(url).hostname.replace('www.', '')}
              </a>
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}

function Footer() {
  const { t } = useLang();
  const [showCredits, setShowCredits] = useState(false);

  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-line">
          <span suppressHydrationWarning>
            © {new Date().getFullYear()} {profile.name} · {t.footer.updated}
          </span>
          <button
            type="button"
            className="footer-toggle"
            aria-expanded={showCredits}
            aria-controls="credits"
            onClick={() => setShowCredits((v) => !v)}
          >
            {t.footer.credits}
          </button>
        </div>
        <p className="credits" id="credits" hidden={!showCredits}>
          {t.footer.pictures}{' '}
          <a href="https://commons.wikimedia.org/wiki/File:Frontier_supercomputer_(25).jpg">“Frontier supercomputer”</a>{' '}
          {t.footer.by} Oak Ridge National Laboratory,{' '}
          <a href="https://creativecommons.org/licenses/by/2.0/">CC BY 2.0</a>, via Wikimedia Commons;{' '}
          <a href="https://commons.wikimedia.org/wiki/File:Grasshoppers_and_Mormon_Crickets_in_Western_States_(20210715-APHIS-LSC-0861).jpg">
            “Grasshoppers and Mormon Crickets in Western States”
          </a>{' '}
          {t.footer.by} USDA APHIS, {t.footer.publicDomain}, via Wikimedia Commons;{' '}
          <a href="https://commons.wikimedia.org/wiki/File:Businessman_working_and_writing_notes_in_office_(Unsplash).jpg">
            “Businessman working and writing notes in office”
          </a>{' '}
          {t.footer.by} JESHOOTS.com, <a href="https://creativecommons.org/publicdomain/zero/1.0/">CC0</a>, via Wikimedia
          Commons;{' '}
          <a href="https://commons.wikimedia.org/wiki/File:A_woman_sits_at_a_desk_with_her_laptop,_deeply_focused_on_her_work_in_a_low-light_environment.jpg">
            “A woman sits at a desk with her laptop”
          </a>{' '}
          {t.footer.by} Shixart1985, <a href="https://creativecommons.org/licenses/by/2.0/">CC BY 2.0</a>, via
          Wikimedia Commons;{' '}
          <a href="https://commons.wikimedia.org/wiki/File:Clouds_above_Japan_-_2019_4_1.webm">“Clouds above Japan”</a>{' '}
          {t.footer.by} Nesnad, <a href="https://creativecommons.org/licenses/by-sa/4.0">CC BY-SA 4.0</a>, via Wikimedia
          Commons.
        </p>
      </div>
    </footer>
  );
}

export default function App({ lang }) {
  const language = { lang, t: content[lang] };
  const active = useActiveSection(SECTION_IDS);

  return (
    <LangContext.Provider value={language}>
      <Header active={active} />
      <main>
        <Hero />
        <Work />
        <About />
        <Experience />
        <Contact />
      </main>
      <Footer />
      <Analytics />
    </LangContext.Provider>
  );
}
