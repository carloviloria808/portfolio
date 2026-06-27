import { useEffect, useState } from 'react'

const items = [
  { id: 'skills', n: '01', label: 'SKILLS' },
  { id: 'experience', n: '02', label: 'EXPERIENCE' },
  { id: 'projects', n: '03', label: 'PROJECTS' },
  { id: 'contact', n: '04', label: 'CONTACT' },
]

// Fixed left-margin nav that highlights the section currently in view.
export default function SectionNav() {
  const [active, setActive] = useState('skills')

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id)
        })
      },
      { rootMargin: '-45% 0px -45% 0px' },
    )
    items.forEach((it) => {
      const el = document.getElementById(it.id)
      if (el) obs.observe(el)
    })
    return () => obs.disconnect()
  }, [])

  return (
    <nav className="section-nav" aria-label="Section navigation">
      <ul>
        {items.map((it) => (
          <li key={it.id} className={active === it.id ? 'is-active' : ''}>
            <a href={`#${it.id}`}>
              <span className="section-nav__num">{it.n}</span>
              <span className="section-nav__label">{it.label}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
