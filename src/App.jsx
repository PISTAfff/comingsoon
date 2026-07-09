import './App.css'

// The three brand logos shown as the centre triptych.
const LOGOS = [
  { src: '/images/vip.jpeg', name: 'VIP' },
  { src: '/images/react2.png', name: 'React' },
  { src: '/images/sonoff.png', name: 'Sonoff Egypt' },
]

const MARQUEE = ['Under maintenance', 'Back shortly', 'REACT', 'Hang tight']
// Repeat the phrases so a single copy overflows even wide screens; two identical
// copies then scroll as one continuous, seamless loop.
const MARQUEE_SEQUENCE = Array.from({ length: 4 }).flatMap(() => MARQUEE)

function WrenchIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
    </svg>
  )
}

function GearIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  )
}

function ScrewdriverIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <rect x="9.25" y="2.5" width="5.5" height="6" rx="1.5" />
      <path d="M12 8.5 V14.5" />
      <path d="M10.75 14.5 L12 20 L13.25 14.5" />
    </svg>
  )
}

export default function App() {
  return (
    <div className="page">
      <div className="glow" aria-hidden="true" />

      <header className="topbar">
        <div className="brand">
          <span className="brand-mark" aria-hidden="true" />
          <span className="brand-name">REACT</span>
        </div>
        <div className="status">
          <span className="status-dot" aria-hidden="true" />
          <span>Maintenance mode</span>
        </div>
      </header>

      <main className="hero">
        <div className="tools" aria-hidden="true">
          <WrenchIcon className="tool tool-wrench" />
          <GearIcon className="tool tool-gear" />
          <ScrewdriverIcon className="tool" />
        </div>

        <p className="kicker">
          <span className="kicker-rule" aria-hidden="true" />
          Scheduled maintenance in progress
          <span className="kicker-rule" aria-hidden="true" />
        </p>

        <h1 className="title">
          <span className="title-line title-outline">Under</span>
          <span className="title-line">
            Maintenance<span className="title-dot">.</span>
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
          We&rsquo;re making some improvements behind the scenes. Everything will
          be back to normal shortly.
        </p>
      </main>

      <div className="marquee" aria-hidden="true">
        {[0, 1].map((copy) => (
          <div className="marquee-copy" key={copy}>
            {MARQUEE_SEQUENCE.map((word, j) => (
              <span className="marquee-item" key={j}>
                {word}
                <WrenchIcon className="marquee-icon" />
              </span>
            ))}
          </div>
        ))}
      </div>

      <footer className="footer">
        <span>© REACT</span>
        <span className="footer-note">All rights reserved</span>
      </footer>
    </div>
  )
}
