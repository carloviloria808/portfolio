import { useState } from 'react'
import { profile } from '../data/portfolio.js'

export default function Contact() {
  const [copied, setCopied] = useState(false)

  // Try the mail client (the href) AND copy the address as a fallback, so the
  // button always does something even without a default mail handler.
  const copyEmail = () => {
    if (!navigator.clipboard) return
    navigator.clipboard
      .writeText(profile.email)
      .then(() => {
        setCopied(true)
        setTimeout(() => setCopied(false), 2200)
      })
      .catch(() => {})
  }

  return (
    <section id="contact" className="section section--alt">
      <div className="container contact">
        <h2 className="section__title">
          <span className="section__num">04.</span>CONTACT
        </h2>
        <p className="contact__lead">
          &gt; Terminal open. I'm currently available for new opportunities —
          send a transmission and I'll respond.
        </p>
        <a
          className="btn btn--primary"
          href={`mailto:${profile.email}`}
          onClick={copyEmail}
        >
          SEND_TRANSMISSION
        </a>
        <p
          className={`contact__copied ${copied ? 'is-shown' : ''}`}
          aria-live="polite"
        >
          &gt; {profile.email} copied to clipboard
        </p>

        <div className="contact__links">
          {profile.socials.github && (
            <a href={profile.socials.github} target="_blank" rel="noopener noreferrer">
              <i className="ti ti-brand-github" aria-hidden="true" />
              GITHUB
            </a>
          )}
          {profile.socials.linkedin && (
            <a href={profile.socials.linkedin} target="_blank" rel="noopener noreferrer">
              <i className="ti ti-brand-linkedin" aria-hidden="true" />
              LINKEDIN
            </a>
          )}
          <a href={`mailto:${profile.email}`} onClick={copyEmail}>
            <i className="ti ti-mail" aria-hidden="true" />
            {profile.email}
          </a>
        </div>
      </div>
    </section>
  )
}
