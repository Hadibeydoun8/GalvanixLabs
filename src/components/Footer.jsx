import './Footer.css'

const navLinks = [
  { label: 'Home',     href: '#home' },
  { label: 'Projects', href: '#projects' },
  { label: 'Services', href: '#services' },
  { label: 'About',    href: '#about' },
  { label: 'Contact',  href: '#contact' },
]

export default function Footer() {
  const handleNav = (e, href) => {
    e.preventDefault()
    const target = document.querySelector(href)
    if (target) target.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="footer">
      <div className="footer__inner">
        {/* Brand */}
        <div className="footer__brand">
          <a href="#home" className="footer__logo" onClick={e => handleNav(e, '#home')}>
            <svg width="28" height="28" viewBox="0 0 60 60" fill="none" aria-hidden="true">
              <defs>
                <linearGradient id="fg1" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#00d4ff"/>
                  <stop offset="100%" stopColor="#6366f1"/>
                </linearGradient>
              </defs>
              <rect width="60" height="60" rx="12" fill="#0b0c1a"/>
              <polygon points="34,6 18,32 28,32 26,54 42,28 32,28" fill="url(#fg1)"/>
            </svg>
            <span>Galvanix<span className="footer__logo-accent">Labs</span></span>
          </a>
          <p className="footer__tagline">
            Michigan-based software &amp; engineering company.<br/>
            Precision engineering across every layer of the stack.
          </p>
        </div>

        {/* Nav */}
        <nav className="footer__nav" aria-label="Footer navigation">
          {navLinks.map(link => (
            <a
              key={link.href}
              href={link.href}
              className="footer__nav-link"
              onClick={e => handleNav(e, link.href)}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>

      <div className="footer__bottom">
        <p>© {new Date().getFullYear()} Galvanix Labs. All rights reserved.</p>
        <button
          className="footer__back-top"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="Back to top"
        >
          ↑ Back to top
        </button>
      </div>
    </footer>
  )
}
