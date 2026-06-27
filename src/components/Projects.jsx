import { projects } from '../data/portfolio.js'

function ProjectCard({ project, index }) {
  const { name, description, tech, live, repo, image, featured, logo, logoLabel } =
    project
  const id = String(index + 1).padStart(3, '0')
  return (
    <article className={`project ${image ? 'project--media' : ''}`}>
      <div className="project__head">
        <span>&gt; ENTRY {id} :: {name.toUpperCase()}</span>
        {featured && <span className="project__badge">[ FEATURED ]</span>}
      </div>
      <div className="project__grid">
        {image && (
          <div
            className={`project__media ${logo ? 'project__media--logo' : ''} ${
              logoLabel ? 'project__media--labeled' : ''
            }`}
          >
            <img src={image} alt={`${name} ${logo ? 'logo' : 'screenshot'}`} loading="lazy" />
            {logoLabel && (
              <figcaption className="project__logo-label">{logoLabel}</figcaption>
            )}
          </div>
        )}
        <div className="project__body">
          <h3 className="project__name">{name}</h3>
          <p className="project__desc">{description}</p>
          <ul className="project__tech">
            {tech.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
          <div className="project__links">
            {live && (
              <a href={live} target="_blank" rel="noopener noreferrer">
                OPEN_LIVE
              </a>
            )}
            {repo && (
              <a href={repo} target="_blank" rel="noopener noreferrer">
                VIEW_CODE
              </a>
            )}
            {!live && !repo && <span className="project__desc">// links coming soon</span>}
          </div>
        </div>
      </div>
    </article>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="section__title">
          <span className="section__num">03.</span>PROJECTS.LOG
        </h2>
        <div className="projects">
          {projects.map((p, i) => (
            <ProjectCard key={p.name} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
