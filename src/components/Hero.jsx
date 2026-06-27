import { useState } from 'react'
import { profile, about } from '../data/portfolio.js'
import Weather from './Weather.jsx'

export default function Hero() {
  const [bioOpen, setBioOpen] = useState(false)
  return (
    <section id="top" className="hero">
      <div className="hero__inner">
        <div className="hero__main">
          <div className="hero__boot">
            <span>ROBCO INDUSTRIES (TM) TERMLINK PROTOCOL</span>
            <span>VAULT-TEC UNIFIED OPERATING SYSTEM</span>
            <span>COPYRIGHT 2075-2077 ROBCO INDUSTRIES</span>
            <span>-SERVER 1-</span>
            <Weather />
          </div>

          <h1 className="hero__name">{profile.name}</h1>
          <p className="hero__title">ROLE: {profile.title}</p>
          {profile.status && <p className="hero__status">STATUS: {profile.status}</p>}

          <button
            type="button"
            className="hero__bio-toggle"
            onClick={() => setBioOpen((o) => !o)}
            aria-expanded={bioOpen}
            aria-controls="hero-bio"
          >
            {bioOpen ? 'HIDE_BIO' : 'READ_BIO'} [{bioOpen ? '-' : '+'}]
          </button>
          <div
            id="hero-bio"
            className={`hero__bio ${bioOpen ? 'is-open' : ''}`}
            aria-hidden={!bioOpen}
          >
            <div className="hero__bio-inner">
              <div className="hero__bio-text">
                {about.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
                {profile.location && (
                  <p className="hero__meta">LOCATION: {profile.location}</p>
                )}
              </div>
              {profile.photo && (
                <figure className="hero__photo">
                  <img src={profile.photo} alt={profile.name} loading="lazy" />
                </figure>
              )}
            </div>
          </div>

          <p className="hero__title" aria-hidden="true">
            <span className="cursor" />
          </p>
        </div>
      </div>
    </section>
  )
}
