import { profile } from '../data/portfolio.js'

const links = [
  { icon: 'brand-github', href: profile.socials.github, label: 'GitHub' },
  { icon: 'brand-linkedin', href: profile.socials.linkedin, label: 'LinkedIn' },
  { icon: 'mail', href: `mailto:${profile.email}`, label: 'Email' },
]

// Fixed right-margin rail of social/contact links.
export default function SocialRail() {
  return (
    <div className="social-rail" aria-label="Social links">
      <ul>
        {links.map(
          (l) =>
            l.href && (
              <li key={l.label}>
                <a
                  href={l.href}
                  aria-label={l.label}
                  target={l.href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                >
                  <i className={`ti ti-${l.icon}`} aria-hidden="true" />
                </a>
              </li>
            ),
        )}
      </ul>
    </div>
  )
}
