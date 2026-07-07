import { useState } from 'react'
import './App.css'

// The three centrepieces. Swap `src` for real artwork and set `href` to the
// destination each image should link to (links coming soon).
const PREVIEWS = [
  { src: '/images/placeholder-1.svg', no: '01', label: 'First look', href: '#' },
  { src: '/images/placeholder-2.svg', no: '02', label: 'In the works', href: '#' },
  { src: '/images/placeholder-3.svg', no: '03', label: 'Almost there', href: '#' },
]

// Seven small logo / link slots. Fill in `href` (and swap the glyph for a real
// logo) once the list of links is ready.
const LINKS = Array.from({ length: 7 }, (_, i) => ({
  label: `Link ${i + 1}`,
  href: '#',
}))

const MARQUEE = ['Coming soon', 'Stay tuned', 'REACTEG', 'Something new']

export default function App() {
  const [email, setEmail] = useState('')
  const [joined, setJoined] = useState(false)

  function handleSubmit(event) {
    event.preventDefault()
    if (!email.trim()) return
    // Front-end only for now: nothing is stored or sent anywhere yet.
    setJoined(true)
  }

  return (
    <div className="page">
      <div className="grain" aria-hidden="true" />
      <div className="glow" aria-hidden="true" />

      <header className="topbar">
        <div className="brand">
          <span className="brand-mark" aria-hidden="true" />
          <span className="brand-name">REACTEG</span>
        </div>
        <div className="status">
          <span className="status-dot" aria-hidden="true" />
          <span>In production</span>
        </div>
      </header>

      <main className="hero">
        <p className="kicker">
          <span className="kicker-rule" aria-hidden="true" />
          Est. MMXXVI · Something is taking shape
          <span className="kicker-rule" aria-hidden="true" />
        </p>

        <h1 className="title">
          <span className="title-line title-outline">Coming</span>
          <span className="title-line">
            Soon<span className="title-dot">.</span>
          </span>
        </h1>

        <section className="gallery" aria-label="A glimpse of what's coming">
          {PREVIEWS.map((preview, i) => (
            <a
              className="frame"
              key={preview.no}
              href={preview.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${preview.label} (preview ${preview.no})`}
              style={{
                '--d': `${0.55 + i * 0.12}s`,
                '--float-d': `${6 + i}s`,
                '--float-delay': `${i * 0.7}s`,
              }}
            >
              <span className="frame-no">{preview.no}</span>
              <span className="frame-media">
                <img
                  src={preview.src}
                  alt={`Preview ${preview.no} placeholder`}
                  loading="lazy"
                />
              </span>
              <span className="frame-label">{preview.label}</span>
            </a>
          ))}
        </section>

        <p className="tagline">
          We&rsquo;re building something considered. Quiet, deliberate, and worth
          the wait. Leave your email and we&rsquo;ll tell you the moment it&rsquo;s
          live.
        </p>

        {joined ? (
          <p className="notify-done" role="status">
            <span className="notify-check" aria-hidden="true">
              ✓
            </span>
            You&rsquo;re on the list. Talk soon.
          </p>
        ) : (
          <form className="notify" onSubmit={handleSubmit}>
            <input
              type="email"
              inputMode="email"
              placeholder="your@email.com"
              aria-label="Email address"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
            />
            <button type="submit">
              <span>Notify me</span>
              <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path
                  d="M4 12h15M13 6l6 6-6 6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </form>
        )}

        <nav className="badges" aria-label="Find us elsewhere">
          {LINKS.map((link, i) => (
            <a
              className="badge"
              key={i}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
            >
              <span className="badge-glyph">{i + 1}</span>
            </a>
          ))}
        </nav>
      </main>

      <div className="marquee" aria-hidden="true">
        <div className="marquee-track">
          {[0, 1].map((group) => (
            <span className="marquee-group" key={group}>
              {MARQUEE.map((word, j) => (
                <span className="marquee-item" key={j}>
                  {word}
                  <span className="marquee-dot">◆</span>
                </span>
              ))}
            </span>
          ))}
        </div>
      </div>

      <footer className="footer">
        <span>© MMXXVI REACTEG</span>
        <span className="footer-note">All rights reserved</span>
      </footer>
    </div>
  )
}
