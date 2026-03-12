import './Services.css'

const services = [
  {
    icon: '📱',
    title: 'Native Mobile Apps',
    desc: 'High-performance iOS and Android applications built with native frameworks — Swift, Kotlin, and cross-platform tools. From consumer apps to enterprise solutions.',
  },
  {
    icon: '🤖',
    title: 'AI & Machine Learning',
    desc: 'Computer vision, face recognition, predictive modelling, and custom ML pipelines. We build and deploy models that solve real problems at production scale.',
  },
  {
    icon: '⚡',
    title: 'Hardware & FPGA',
    desc: 'Custom embedded systems, microcontroller firmware, FPGA design, and PCB development. From prototype to production-ready hardware solutions.',
  },
  {
    icon: '🌐',
    title: 'Full-Stack Web Development',
    desc: 'Modern, responsive websites and web applications with robust server-side processing, databases, APIs, and third-party integrations. Built to scale.',
  },
  {
    icon: '⚙️',
    title: 'Systems & Infrastructure',
    desc: 'Print servers, backup systems, VPN setup, server provisioning, and custom networking. Reliable infrastructure that keeps your business running.',
  },
  {
    icon: '🗺️',
    title: 'Optimisation & Simulation',
    desc: 'Route optimisation, logistics algorithms, electrical grid simulation, and operational research. Data-driven tools that make complex decisions straightforward.',
  },
  {
    icon: '🕐',
    title: 'Custom Business Tools',
    desc: 'Bespoke software tailored to your exact workflow — from studio management and archive tools to custom punch systems with hardware integration.',
  },
  {
    icon: '🔒',
    title: 'Data Integrity & Backup',
    desc: 'Automated backup strategies, integrity verification, multi-site replication, and monitoring dashboards. Protect your most valuable assets.',
  },
]

export default function Services() {
  return (
    <section id="services" className="services">
      <div className="section-inner">
        <div className="section-header">
          <span className="section-label">What We Do</span>
          <h2 className="section-title">Services & Capabilities</h2>
          <p className="section-subtitle">
            Deep expertise across the full technology stack — from transistors to user interfaces,
            from embedded firmware to cloud infrastructure.
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
      </div>
    </section>
  )
}
