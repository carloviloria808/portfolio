import { skills } from '../data/portfolio.js'

function Bar({ level }) {
  return (
    <div className="skill__bar" aria-hidden="true">
      <span className="skill__bracket">[</span>
      <div className="skill__track">
        <div className="skill__fill" style={{ width: `${level}%` }} />
      </div>
      <span className="skill__bracket">]</span>
    </div>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="section section--alt">
      <div className="container">
        <h2 className="section__title">
          <span className="section__num">01.</span>SKILLS.DAT
        </h2>
        <div className="skills">
          {skills.map((group) => (
            <div key={group.group} className="skills__group">
              <h3 className="skills__heading">{group.group}</h3>
              {group.items.map((item) => (
                <div key={item.name} className="skill">
                  <div className="skill__row">
                    <i className={`ti ti-${item.icon} skill__icon`} aria-hidden="true" />
                    <span className="skill__name">{item.name}</span>
                    <span className="skill__pct">{item.level}%</span>
                  </div>
                  <Bar level={item.level} />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
