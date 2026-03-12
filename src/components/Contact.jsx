import { useForm, ValidationError } from '@formspree/react'
import './Contact.css'

export default function Contact() {
  const [state, handleSubmit] = useForm("mbdzovoz")

  return (
      <section id="contact" className="contact">
        <div className="section-inner">
          <div className="contact__layout">

            {/* Left info — unchanged */}
            <div className="contact__info">
              <span className="section-label">Get in Touch</span>
              <h2 className="section-title contact__title">
                Work with a Michigan<br/>
                <span className="contact__title-accent">Software Company</span>
              </h2>
              <p className="contact__desc">
                Looking for a <strong>Michigan software development company</strong>? Whether
                you have a complex problem to solve, a product to build, or an existing system
                to improve — reach out and let&apos;s explore what&apos;s possible together.
              </p>
              <div className="contact__items">
                <div className="contact__item">
                  <span className="contact__item-icon" aria-hidden="true">✉️</span>
                  <div>
                    <p className="contact__item-label">Email</p>
                    <a href="mailto:hello@galvanixlabs.com" className="contact__item-value">
                      hello@galvanixlabs.com
                    </a>
                  </div>
                </div>
                <div className="contact__item">
                  <span className="contact__item-icon" aria-hidden="true">📍</span>
                  <div>
                    <p className="contact__item-label">Location</p>
                    <p className="contact__item-value">Michigan, United States</p>
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
                    <p className="contact__item-value">Remote &amp; On-site — Michigan &amp; Worldwide</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="contact__form-wrap">
              {state.succeeded ? (
                  <div className="contact__success">
                    <span className="contact__success-icon" aria-hidden="true">✅</span>
                    <h3>Message Sent!</h3>
                    <p>Thanks for reaching out. I&apos;ll be in touch within 24 hours.</p>
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
                            required
                            autoComplete="name"
                        />
                        <ValidationError prefix="Name" field="name" errors={state.errors} className="contact__error" />
                      </div>
                      <div className="contact__field">
                        <label htmlFor="email" className="contact__label">Email Address</label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            className="contact__input"
                            placeholder="jane@example.com"
                            required
                            autoComplete="email"
                        />
                        <ValidationError prefix="Email" field="email" errors={state.errors} className="contact__error" />
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
                          required
                      />
                      <ValidationError prefix="Subject" field="subject" errors={state.errors} className="contact__error" />
                    </div>

                    <div className="contact__field">
                      <label htmlFor="message" className="contact__label">Message</label>
                      <textarea
                          id="message"
                          name="message"
                          className="contact__input contact__textarea"
                          placeholder="Tell me about your project, timeline, and any technical requirements…"
                          rows={6}
                          required
                      />
                      <ValidationError prefix="Message" field="message" errors={state.errors} className="contact__error" />
                    </div>

                    {state.errors?.length > 0 && !state.errors[0]?.field && (
                        <p className="contact__error">
                          Something went wrong. Please try emailing directly at{' '}
                          <a href="mailto:hello@galvanixlabs.com">hello@galvanixlabs.com</a>
                        </p>
                    )}

                    <button
                        type="submit"
                        className="btn btn--primary contact__submit"
                        disabled={state.submitting}
                    >
                      {state.submitting ? 'Sending…' : 'Send Message'}
                      {!state.submitting && (
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
