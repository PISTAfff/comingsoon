import { useState } from 'react'
import './App.css'

// The three centrepieces. Swap `src` for real artwork when it's ready —
// drop the files into /public/images and update these paths.
const PREVIEWS = [
  { src: '/images/placeholder-1.svg', no: '01', label: 'First look' },
  { src: '/images/placeholder-2.svg', no: '02', label: 'In the works' },
  { src: '/images/placeholder-3.svg', no: '03', label: 'Almost there' },
]

const MARQUEE = ['Coming soon', 'Stay tuned', "Pista’s Spot", 'Something new']

export default function App() {
  const [email, setEmail] = useState('')
  const [joined, setJoined] = useState(false)

  function handleSubmit(event) {
    event.preventDefault()
    if (!email.trim()) return
    // No backend yet — acknowledge locally so the page feels alive.
    setJoined(true)
  }

  return (
    <div className="page">
      <div className="grain" aria-hidden="true" />
      <div className="glow" aria-hidden="true" />

      <header className="topbar">
        <div className="brand">
          <span className="brand-mark" aria-hidden="true" />
          <span className="brand-name">Pista&rsquo;s Spot</span>
        </div>
        <div className="status">
          <span className="status-dot" aria-hidden="true" />
          <span>In production</span>
        </div>
      </header>

      <main className="hero">
        <p className="kicker">
          <span className="kicker-rule" aria-hidden="true" />
          Est. MMXXVI — something is taking shape
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
            <figure
              className="frame"
              key={preview.no}
              style={{
                '--d': `${0.55 + i * 0.12}s`,
                '--float-d': `${6 + i}s`,
                '--float-delay': `${i * 0.7}s`,
              }}
            >
              <span className="frame-no">{preview.no}</span>
              <div className="frame-media">
                <img
                  src={preview.src}
                  alt={`Preview ${preview.no} — placeholder`}
                  loading="lazy"
                />
              </div>
              <figcaption className="frame-label">{preview.label}</figcaption>
            </figure>
          ))}
        </section>

        <p className="tagline">
          We&rsquo;re building something considered — quiet, deliberate, and worth
          the wait. Leave your email and we&rsquo;ll tell you the moment it&rsquo;s live.
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
        <span>© MMXXVI Pista&rsquo;s Spot</span>
        <nav className="footer-links">
          <a href="#" aria-label="Instagram">
            Instagram
          </a>
          <a href="#" aria-label="X">
            X
          </a>
          <a href="mailto:hello@pistasspot.com">Contact</a>
        </nav>
      </footer>
    </div>
  )
}
