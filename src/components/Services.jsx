import './Services.css'

const prefersReducedMotion = () =>
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

const smoothScrollTo = (selector) => {
  const target = document.querySelector(selector)
  if (target) target.scrollIntoView({ behavior: prefersReducedMotion() ? 'auto' : 'smooth' })
}

const services = [
  {
    icon: '📱',
    title: 'Custom Mobile App Development',
    desc: 'Native iOS and Android applications built with Swift, Kotlin, and cross-platform frameworks. We build custom mobile apps for enterprises, startups, and consumer platforms — from MVP to production at scale.',
  },
  {
    icon: '🤖',
    title: 'AI & Machine Learning Development',
    desc: 'Custom AI software including computer vision, face recognition, predictive modelling, and ML pipelines. We design and deploy production-grade AI systems that solve real business problems.',
  },
  {
    icon: '⚡',
    title: 'Embedded Systems & FPGA Development',
    desc: 'Custom embedded software, microcontroller firmware, FPGA design, and PCB development. Full hardware-to-software custom solutions from prototype to production.',
  },
  {
    icon: '🌐',
    title: 'Custom Web Application Development',
    desc: 'Bespoke web applications with server-side processing, databases, REST/GraphQL APIs, and third-party integrations. Modern full-stack custom software built to scale with your business.',
  },
  {
    icon: '⚙️',
    title: 'Systems & Infrastructure Engineering',
    desc: 'Custom print servers, backup systems, VPN setup, server provisioning, and networking solutions. Reliable custom infrastructure software that keeps your business running 24/7.',
  },
  {
    icon: '🗺️',
    title: 'Optimisation & Simulation Software',
    desc: 'Custom route optimisation engines, logistics algorithms, electrical grid simulators, and operational research tools. Data-driven custom applications that make complex decisions straightforward.',
  },
  {
    icon: '🕐',
    title: 'Custom Business Software & Tools',
    desc: 'Bespoke business applications tailored to your exact workflows — from studio management and archive systems to custom time-tracking hardware integrations. Replace generic tools with software built for you.',
  },
  {
    icon: '🔒',
    title: 'Data Integrity & Backup Systems',
    desc: 'Automated backup strategies, integrity verification, multi-site replication, and monitoring dashboards. Custom software solutions that protect your most valuable business assets.',
  },
]

export default function Services() {
  return (
    <section id="services" className="services">
      <div className="section-inner">
        <div className="section-header">
          <span className="section-label">What We Build</span>
          <h2 className="section-title">Custom Software Development Services</h2>
          <p className="section-subtitle">
            End-to-end custom application development across the full technology stack —
            from embedded firmware to cloud infrastructure. Every solution is built from
            scratch to fit your exact business requirements.
          </p>
        </div>

        <div className="services__grid">
          {services.map(s => (
            <div key={s.title} className="service-card">
              <div className="service-card__icon" aria-hidden="true">{s.icon}</div>
              <h3 className="service-card__title">{s.title}</h3>
              <p className="service-card__desc">{s.desc}</p>
            </div>
          ))}
        </div>

        <div className="services__cta-row">
          <p className="services__cta-text">
            Need a custom application built for your business?
          </p>
          <a href="#contact" className="btn btn--primary" onClick={e => { e.preventDefault(); smoothScrollTo('#contact') }}>
            Get a Free Consultation
          </a>
        </div>
      </div>
    </section>
  )
}
