import './About.css'

const techStack = [
  'React', 'Next.js', 'Node.js', 'Python', 'Swift', 'Kotlin',
  'FPGA / Verilog', 'Embedded C', 'PyTorch', 'OpenCV',
  'PostgreSQL', 'Docker', 'AWS / Cloud', 'PCB Design',
]

export default function About() {
  return (
    <section id="about" className="about">
      <div className="section-inner">
        <div className="about__layout">
          {/* Text */}
          <div className="about__text">
            <span className="section-label">About</span>
            <h2 className="section-title about__title">
              Engineering from<br/>
              <span className="about__title-accent">first principles</span>
            </h2>
            <p className="about__para">
              Galvanix Labs was founded on the belief that technology should be built right —
              with precision, depth, and a genuine understanding of the problem at hand.
              Whether it&apos;s an FPGA running AI at a live sports event, a route-optimisation
              engine for UNICEF, or a custom microcontroller punch system, every project
              receives the same rigorous engineering approach.
            </p>
            <p className="about__para">
              We operate at every layer of the stack — from PCB design and embedded firmware
              to cloud APIs and polished user interfaces. That breadth allows us to build
              solutions that other teams simply cannot, delivering systems that are cohesive,
              reliable, and uniquely fitted to your needs.
            </p>
            <p className="about__para">
              Based in Michigan and serving clients from small local businesses to UN agencies
              worldwide — scale and sector don&apos;t matter. Challenging problems do.
            </p>
          </div>

          {/* Right side */}
          <div className="about__aside">
            <div className="about__logo-card">
              <svg width="80" height="80" viewBox="0 0 60 60" fill="none" aria-label="Galvanix Labs logo">
                <defs>
                  <linearGradient id="ag1" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#00d4ff"/>
                    <stop offset="100%" stopColor="#6366f1"/>
                  </linearGradient>
                </defs>
                <rect width="60" height="60" rx="14" fill="rgba(0,212,255,0.08)" stroke="rgba(0,212,255,0.2)" strokeWidth="1"/>
                <polygon points="34,6 18,32 28,32 26,54 42,28 32,28" fill="url(#ag1)"/>
              </svg>
              <p className="about__logo-tagline">Engineered&nbsp;Excellence</p>
            </div>

            <div className="about__stack">
              <p className="about__stack-label">Technologies we use</p>
              <div className="about__stack-tags">
                {techStack.map(t => (
                  <span key={t} className="about__stack-tag">{t}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
