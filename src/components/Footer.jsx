import { profile } from '../data/portfolio.js'

export default function Footer() {
  return (
    <footer className="footer">
      <p>
        &gt; SESSION TERMINATED · {profile.name} · ©{' '}
        {new Date().getFullYear()} · BUILT WITH REACT + VITE
      </p>
    </footer>
  )
}
