import { experience, education } from '../data/portfolio.js'

export default function Experience() {
  return (
    <section id="experience" className="section section--alt">
      <div className="container">
        <h2 className="section__title">
          <span className="section__num">02.</span>SERVICE_RECORD
        </h2>

        <div className="xp">
          {experience.map((e, i) => (
            <article key={i} className="xp__entry">
              <div className="xp__period">{e.period}</div>
              <div className="xp__body">
                <h3 className="xp__role">{e.role}</h3>
                <p className="xp__org">{e.org}</p>
                <ul className="xp__points">
                  {e.points.map((p, j) => (
                    <li key={j}>{p}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>

        <h3 className="xp__subhead">// EDUCATION</h3>
        <div className="xp">
          {education.map((e, i) => (
            <article key={i} className="xp__entry">
              <div className="xp__period">{e.period}</div>
              <div className="xp__body">
                <h3 className="xp__role">{e.degree}</h3>
                <p className="xp__org">{e.school}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
