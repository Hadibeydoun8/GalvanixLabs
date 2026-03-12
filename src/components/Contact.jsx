import { useState } from 'react'
import './Contact.css'

const initialForm = { name: '', email: '', subject: '', message: '' }

export default function Contact() {
  const [form, setForm] = useState(initialForm)
  const [status, setStatus] = useState('idle') // idle | sending | success | error

  const handleChange = e => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async e => {
    e.preventDefault()
    setStatus('sending')
    // Replace this with your preferred form service (Formspree, EmailJS, etc.)
    // For now, we simulate a short delay and show success state.
    try {
      await new Promise(r => setTimeout(r, 1000))
      setStatus('success')
      setForm(initialForm)
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="contact">
      <div className="section-inner">
        <div className="contact__layout">
          {/* Left info */}
          <div className="contact__info">
            <span className="section-label">Get in Touch</span>
            <h2 className="section-title contact__title">
              Let&apos;s Build Something<br/>
              <span className="contact__title-accent">Extraordinary</span>
            </h2>
            <p className="contact__desc">
              Have a complex problem to solve, a product to build, or an existing system
              to improve? Reach out and let&apos;s explore what&apos;s possible.
            </p>

            <div className="contact__items">
              <div className="contact__item">
                <span className="contact__item-icon" aria-hidden="true">✉️</span>
                <div>
                  <p className="contact__item-label">Email</p>
                  {/* Update this email address as needed */}
                  <a href="mailto:hello@galvanixlabs.com" className="contact__item-value">
                    hello@galvanixlabs.com
                  </a>
                </div>
              </div>
              <div className="contact__item">
                <span className="contact__item-icon" aria-hidden="true">⚡</span>
                <div>
                  <p className="contact__item-label">Response time</p>
                  <p className="contact__item-value">Within 24 hours</p>
                </div>
              </div>
              <div className="contact__item">
                <span className="contact__item-icon" aria-hidden="true">🌍</span>
                <div>
                  <p className="contact__item-label">Availability</p>
                  <p className="contact__item-value">Remote & On-site worldwide</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="contact__form-wrap">
            {status === 'success' ? (
              <div className="contact__success">
                <span className="contact__success-icon" aria-hidden="true">✅</span>
                <h3>Message Sent!</h3>
                <p>Thanks for reaching out. I&apos;ll be in touch within 24 hours.</p>
                <button className="btn btn--outline" onClick={() => setStatus('idle')}>
                  Send Another
                </button>
              </div>
            ) : (
              <form className="contact__form" onSubmit={handleSubmit} noValidate>
                <div className="contact__row">
                  <div className="contact__field">
                    <label htmlFor="name" className="contact__label">Your Name</label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      className="contact__input"
                      placeholder="Jane Smith"
                      value={form.name}
                      onChange={handleChange}
                      required
                      autoComplete="name"
                    />
                  </div>
                  <div className="contact__field">
                    <label htmlFor="email" className="contact__label">Email Address</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      className="contact__input"
                      placeholder="jane@example.com"
                      value={form.email}
                      onChange={handleChange}
                      required
                      autoComplete="email"
                    />
                  </div>
                </div>

                <div className="contact__field">
                  <label htmlFor="subject" className="contact__label">Subject</label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    className="contact__input"
                    placeholder="Project enquiry / consultation"
                    value={form.subject}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="contact__field">
                  <label htmlFor="message" className="contact__label">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    className="contact__input contact__textarea"
                    placeholder="Tell me about your project, timeline, and any technical requirements…"
                    value={form.message}
                    onChange={handleChange}
                    rows={6}
                    required
                  />
                </div>

                {status === 'error' && (
                  <p className="contact__error">
                    Something went wrong. Please try emailing directly at hello@galvanixlabs.com
                  </p>
                )}

                <button
                  type="submit"
                  className="btn btn--primary contact__submit"
                  disabled={status === 'sending'}
                >
                  {status === 'sending' ? 'Sending…' : 'Send Message'}
                  {status !== 'sending' && (
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                      <path d="M2 8l10-6-4 6 4 6z" fill="currentColor" opacity="0.3"/>
                      <path d="M2 8l12-6M2 8l12 6M2 8h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
