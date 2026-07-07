import { useState } from 'react'
import './App.css'

// The three brand logos shown as the centre triptych.
const LOGOS = [
  { src: '/images/vip.jpeg', name: 'VIP' },
  { src: '/images/react.png', name: 'React' },
  { src: '/images/sonoff.png', name: 'Sonoff Egypt' },
]

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

        <section className="gallery" aria-label="Our brands">
          {LOGOS.map((logo, i) => (
            <figure
              className="frame"
              key={logo.name}
              style={{
                '--d': `${0.55 + i * 0.12}s`,
                '--float-d': `${6 + i}s`,
                '--float-delay': `${i * 0.7}s`,
              }}
            >
              <span className="frame-media">
                <img src={logo.src} alt={`${logo.name} logo`} />
              </span>
            </figure>
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
