import './Hero.css'

export default function Hero() {
  const handleScroll = (href) => {
    const target = document.querySelector(href)
    if (target) target.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className="hero">
      {/* Background grid */}
      <div className="hero__grid" aria-hidden="true"/>
      {/* Glow blobs */}
      <div className="hero__blob hero__blob--1" aria-hidden="true"/>
      <div className="hero__blob hero__blob--2" aria-hidden="true"/>

      <div className="hero__content">
        <div className="hero__badge">
          <span className="hero__badge-dot"/>
          Michigan Software Development &amp; Engineering
        </div>

        <h1 className="hero__title">
          Michigan&apos;s Custom<br/>
          <span className="hero__title-gradient">Software &amp; AI</span><br/>
          Engineering Studio
        </h1>

        <p className="hero__subtitle">
          Galvanix Labs is a <strong>Michigan-based software development company</strong> building
          custom web apps, mobile apps, AI/ML systems, and FPGA hardware — from native apps
          processing <strong>15&nbsp;million images</strong> to real-time on-site AI for live events.
        </p>

        <div className="hero__actions">
          <button className="btn btn--primary hero__btn" onClick={() => handleScroll('#projects')}>
            View Projects
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <button className="btn btn--outline hero__btn" onClick={() => handleScroll('#contact')}>
            Start a Project
          </button>
        </div>

        <div className="hero__stats">
          {[
            { value: '15M+',  label: 'Images Served' },
            { value: '50+',   label: 'Projects Delivered' },
            { value: 'FPGA',  label: 'Real-Time AI' },
            { value: '2 UN',  label: 'Agency Clients' },
          ].map(stat => (
            <div key={stat.label} className="hero__stat">
              <span className="hero__stat-value">{stat.value}</span>
              <span className="hero__stat-label">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
