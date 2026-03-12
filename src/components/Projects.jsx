import { useState } from 'react'
import './Projects.css'

const categories = ['All', 'Mobile', 'AI / ML', 'Hardware', 'Web & Backend', 'Systems', 'Engineering']

const projects = [
  {
    id: 1,
    title: 'Photography Platform – Native iOS & Android App',
    category: 'Mobile',
    tags: ['iOS', 'Android', 'Swift', 'Kotlin', 'Payment Integration'],
    icon: '📷',
    highlight: '15M+ images',
    description:
      'Built a native iOS and Android application for a large-scale photography company. The app handles browsing and search across a library of over 15 million high-resolution images, in-app ordering, full payment processing, and a personalised portal showing customers their previous event images.',
    tech: ['Swift / SwiftUI', 'Kotlin / Jetpack Compose', 'REST API', 'Stripe Payments', 'CDN / Image Pipeline'],
  },
  {
    id: 2,
    title: 'AI Sport-Event Face Recognition',
    category: 'AI / ML',
    tags: ['Computer Vision', 'Deep Learning', 'Python', 'GPU'],
    icon: '🤖',
    highlight: '10K+ images/event',
    description:
      'Designed and trained a computer-vision model that identifies individuals in sports-event images — including heavily obfuscated or partially hidden faces — across datasets of over 10,000 images per event, enabling automated image matching and delivery to customers.',
    tech: ['Python', 'PyTorch', 'OpenCV', 'Custom CNN', 'REST Inference API'],
  },
  {
    id: 3,
    title: 'FPGA Real-Time On-Site AI',
    category: 'Hardware',
    tags: ['FPGA', 'Verilog', 'Embedded', 'Real-Time'],
    icon: '⚡',
    highlight: 'Near real-time',
    description:
      'Extended the AI face-recognition system onto a custom FPGA solution for on-site event use, where network latency to a remote server was not acceptable. Designed the hardware pipeline to run inference in near real-time, enabling live identification directly at the venue.',
    tech: ['FPGA', 'Verilog / VHDL', 'HLS', 'Embedded C', 'Custom PCB Design'],
  },
  {
    id: 4,
    title: 'Enterprise Print Server Platform',
    category: 'Systems',
    tags: ['Node.js', 'Hot Folder', 'Windows', 'Networking'],
    icon: '🖨️',
    highlight: 'Zero print failures',
    description:
      'Engineered a robust, cross-platform print-server solution to replace an unreliable Windows print server. Implemented intelligent hot-folder monitoring, automatic job queuing, driver abstraction, and failure recovery — enabling any device on the network to print reliably with full audit logging.',
    tech: ['Node.js', 'Samba / SMB', 'IPP', 'Windows API', 'Job Queue Engine'],
  },
  {
    id: 5,
    title: 'Route Optimisation Software – UNICEF',
    category: 'Web & Backend',
    tags: ['Optimisation', 'Geospatial', 'Python', 'UNICEF'],
    icon: '🗺️',
    highlight: 'UNICEF delivery ops',
    description:
      'Built a route-optimisation engine for UNICEF to minimise travel distance and time across multi-stop delivery operations. The system ingests delivery points, vehicle constraints, and time windows, then outputs optimal routing plans, cutting operational costs significantly.',
    tech: ['Python', 'OR-Tools', 'Geospatial APIs', 'React Dashboard', 'PostgreSQL'],
  },
  {
    id: 6,
    title: 'Electrical Grid Simulator – UN Agency',
    category: 'Engineering',
    tags: ['3-Phase Power', 'Simulation', 'Engineering', 'UN'],
    icon: '⚙️',
    highlight: 'UN agency infrastructure',
    description:
      'Developed a 3-phase power distribution and load simulation tool for a UN agency, enabling engineers to model grid loads, distribution scenarios, and failure cases before deployment. Provides real-time visual feedback on power flow, load balance, and fault conditions.',
    tech: ['Python', 'NumPy / SciPy', 'Matplotlib', 'Power Systems Modelling', 'React UI'],
  },
  {
    id: 7,
    title: 'Custom Punch & Time-Tracking System',
    category: 'Hardware',
    tags: ['Microcontroller', 'Hardware', 'Integration', 'Custom'],
    icon: '🕐',
    highlight: 'Full hardware-to-software stack',
    description:
      'Designed and built a complete punch-in/out system from the ground up — custom microcontroller hardware, firmware, and a full software stack integrating with existing payroll and HR workflows. The solution replaced manual processes with reliable, tamper-resistant time tracking.',
    tech: ['AVR / ARM Microcontroller', 'Embedded C', 'PCB Design', 'REST API', 'HR System Integration'],
  },
  {
    id: 8,
    title: 'Photography Studio Workflow Software',
    category: 'Systems',
    tags: ['Desktop App', 'File Management', 'Automation', 'Photography'],
    icon: '🗂️',
    highlight: 'End-to-end studio tool',
    description:
      'Created bespoke desktop software for a photography company to manage file imports, automated backups, order processing, and archive management. The tool unified previously fragmented workflows, reducing manual effort and eliminating data loss incidents.',
    tech: ['Electron / Node.js', 'SQLite', 'File System Watchers', 'Backup Engine', 'REST API'],
  },
  {
    id: 9,
    title: 'Museum Archive Management System',
    category: 'Systems',
    tags: ['Archive', 'Cataloguing', 'Desktop', 'Museum'],
    icon: '🏛️',
    highlight: 'Local heritage institution',
    description:
      'Built a custom archive and cataloguing tool for a local museum to digitise, tag, search, and manage their collection. Includes metadata management, image storage, loan-tracking, and export capabilities, replacing paper-based processes entirely.',
    tech: ['Python / PyQt', 'SQLite', 'Image Processing', 'PDF Export', 'Barcode Integration'],
  },
  {
    id: 10,
    title: 'Seating Reservation System',
    category: 'Web & Backend',
    tags: ['React', 'Node.js', 'Booking', 'Real-Time'],
    icon: '💺',
    highlight: 'Dual customer & admin portals',
    description:
      'Designed and built a real-time seating reservation platform with interactive seat maps. The system includes a customer-facing booking website, a back-office management console for venue operators, and automated confirmation emails — all with live seat availability updates.',
    tech: ['React', 'Node.js', 'WebSockets', 'PostgreSQL', 'Stripe'],
  },
  {
    id: 11,
    title: 'Backup & Data Integrity Platform',
    category: 'Systems',
    tags: ['Backup', 'Integrity', 'Automation', 'DevOps'],
    icon: '🔒',
    highlight: 'Zero data loss guarantee',
    description:
      'Engineered an automated backup and data-integrity monitoring system that schedules, verifies, and alerts on backup jobs. Includes hash-based integrity checks, multi-destination replication, and a dashboard for administrators to track backup health at a glance.',
    tech: ['Python', 'Shell Scripting', 'rsync / rclone', 'SHA-256 Verification', 'Email & SMS Alerts'],
  },
  {
    id: 12,
    title: 'Web & Server-Side Development',
    category: 'Web & Backend',
    tags: ['Full-Stack', 'Websites', 'APIs', 'Server'],
    icon: '🌐',
    highlight: 'Countless client sites',
    description:
      'Delivered numerous full-stack websites and web applications for clients across industries — including server-side rendering, database-driven content, e-commerce integrations, API development, and VPN/infrastructure setup — built to be performant, secure, and maintainable.',
    tech: ['React', 'Next.js', 'Node.js', 'PHP / Laravel', 'PostgreSQL / MySQL', 'VPN Setup'],
  },
]

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filtered = activeCategory === 'All'
    ? projects
    : projects.filter(p => p.category === activeCategory)

  return (
    <section id="projects" className="projects">
      <div className="section-inner">
        <div className="section-header">
          <span className="section-label">Portfolio</span>
          <h2 className="section-title">Projects & Case Studies</h2>
          <p className="section-subtitle">
            A selection of the complex, real-world challenges solved for clients
            across industry, government, and international organisations.
          </p>
        </div>

        {/* Category filter */}
        <div className="projects__filters" role="group" aria-label="Filter projects by category">
          {categories.map(cat => (
            <button
              key={cat}
              className={`projects__filter-btn${activeCategory === cat ? ' active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project grid */}
        <div className="projects__grid">
          {filtered.map(project => (
            <article key={project.id} className="project-card">
              <div className="project-card__header">
                <span className="project-card__icon" aria-hidden="true">{project.icon}</span>
                <span className="project-card__highlight">{project.highlight}</span>
              </div>

              <h3 className="project-card__title">{project.title}</h3>
              <p className="project-card__desc">{project.description}</p>

              <div className="project-card__tech">
                {project.tech.map(t => (
                  <span key={t} className="project-card__tag">{t}</span>
                ))}
              </div>

              <div className="project-card__footer">
                <span className="project-card__category">{project.category}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
