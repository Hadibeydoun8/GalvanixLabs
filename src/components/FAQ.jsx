import { useState } from 'react'
import './FAQ.css'

const faqs = [
  {
    question: 'What is custom software development?',
    answer:
      'Custom software development is the process of designing, building, and deploying software specifically tailored to your business\'s unique needs and workflows — rather than using generic off-the-shelf products. Custom applications are built from scratch to match your exact processes, integrate with your existing systems, and scale with your growth.',
  },
  {
    question: 'Why choose custom software over off-the-shelf solutions?',
    answer:
      'Custom software gives you a competitive advantage that generic tools cannot — it fits your exact workflows, eliminates unnecessary features, and you own it outright with no recurring licence fees. Off-the-shelf software forces you to adapt your business to the software; custom software adapts to you. It also integrates seamlessly with your existing systems and can be extended as your business evolves.',
  },
  {
    question: 'How much does custom software development cost?',
    answer:
      'The cost depends on the complexity, features, and timeline of your project. A focused custom business tool may take a few weeks and cost a few thousand dollars, while a large-scale enterprise platform may run into six figures. Galvanix Labs offers competitive, transparent pricing for all project sizes. Contact us for a free consultation and a detailed quote.',
  },
  {
    question: 'How long does it take to build a custom application?',
    answer:
      'A simple custom web or mobile app can be delivered in 4–8 weeks. Complex enterprise systems or hardware-integrated solutions may take 3–6 months. We use agile development with clear milestones so you can see progress and give feedback throughout — no surprises.',
  },
  {
    question: 'What types of custom software does Galvanix Labs build?',
    answer:
      'We build custom web applications, native iOS and Android mobile apps, AI and machine learning systems, embedded systems and FPGA hardware, full-stack enterprise platforms, custom business tools, automation software, data management systems, and more. If you have a software problem, we can solve it.',
  },
  {
    question: 'Do you work with startups as well as established businesses?',
    answer:
      'Yes. We work with businesses of all sizes — from first-time founders building an MVP to enterprises modernising legacy systems. Our team adapts to your budget, timeline, and technical requirements to deliver the best possible solution regardless of company size.',
  },
  {
    question: 'Can you build AI and machine learning applications?',
    answer:
      'Yes. We design, train, and deploy custom AI applications including computer vision, face recognition, predictive analytics, and custom ML pipelines. Our AI systems run at production scale on both cloud infrastructure and edge hardware (including FPGA). We\'ve delivered AI systems processing tens of thousands of images per event.',
  },
  {
    question: 'Do you build both iOS and Android mobile apps?',
    answer:
      'Yes. We build native iOS apps with Swift and SwiftUI, native Android apps with Kotlin and Jetpack Compose, and cross-platform solutions. Our mobile apps have been built to handle millions of images, real-time payments, and complex personalised user portals.',
  },
  {
    question: 'How do I start a custom software project with Galvanix Labs?',
    answer:
      'Simply reach out at hello@galvanixlabs.com or use the contact form on this page. We\'ll schedule a free consultation to understand your requirements, recommend the best technical approach, and provide a project quote — typically within 24 hours. There\'s no commitment required.',
  },
  {
    question: 'Where is Galvanix Labs based, and do you work remotely?',
    answer:
      'Galvanix Labs is based in Michigan, United States. We work with clients locally across Michigan as well as nationally and globally. We\'re fully capable of working remotely or on-site, depending on your preference and project requirements.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i)

  return (
    <section id="faq" className="faq">
      <div className="section-inner">
        <div className="section-header">
          <span className="section-label">FAQ</span>
          <h2 className="section-title" id="faq-heading">Frequently Asked Questions</h2>
          <p className="section-subtitle">
            Common questions about custom software development and working with Galvanix Labs.
          </p>
        </div>

        <div className="faq__list" aria-labelledby="faq-heading" itemScope itemType="https://schema.org/FAQPage">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`faq__item${openIndex === i ? ' faq__item--open' : ''}`}
              itemScope
              itemProp="mainEntity"
              itemType="https://schema.org/Question"
            >
              <button
                className="faq__question"
                onClick={() => toggle(i)}
                aria-expanded={openIndex === i}
              >
                <span itemProp="name">{faq.question}</span>
                <svg
                  className="faq__chevron"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  aria-hidden="true"
                >
                  <path d="M5 7.5l5 5 5-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <div
                className="faq__answer"
                itemScope
                itemProp="acceptedAnswer"
                itemType="https://schema.org/Answer"
              >
                <p itemProp="text">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="faq__footer">
          <p>Still have questions?{' '}
            <a
              href="#contact"
              onClick={e => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }) }}
            >
              Contact us
            </a>{' '}
            — we respond within 24 hours.
          </p>
        </div>
      </div>
    </section>
  )
}
