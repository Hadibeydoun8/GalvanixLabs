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
          Custom Software Development Company — Michigan
        </div>

        <h1 className="hero__title">
          Custom Software<br/>
          <span className="hero__title-gradient">Applications</span><br/>
          Built for Your Business
        </h1>

        <p className="hero__subtitle">
          Galvanix Labs is a <strong>custom software development company</strong> based in Michigan.
          We design and build bespoke applications tailored to your exact business needs —
          from native mobile apps processing <strong>15&nbsp;million images</strong> and real-time
          AI systems to full-stack web platforms and embedded hardware solutions.
        </p>

        <div className="hero__actions">
          <button className="btn btn--primary hero__btn" onClick={() => handleScroll('#projects')}>
            View Our Work
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <button className="btn btn--outline hero__btn" onClick={() => handleScroll('#contact')}>
            Get a Free Quote
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
