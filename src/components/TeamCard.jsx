import './TeamCard.css'

export default function TeamCard({ member }) {
  const { name, role, description, skills = [], image, linkedin } = member

  return (
    <article className="team-card">
      <div className="team-card__img-wrap">
        {image
          ? <img src={image} alt={name} className="team-card__img" />
          : <div className="team-card__img-placeholder" aria-hidden="true" />
        }
      </div>
      <div className="team-card__body">
        <p className="team-card__role mono">{role}</p>
        <h3 className="team-card__name">{name}</h3>
        <p className="team-card__desc">{description}</p>
        {skills.length > 0 && (
          <ul className="team-card__skills">
            {skills.map(s => <li key={s} className="mono">{s}</li>)}
          </ul>
        )}
        {linkedin && (
          <a
            href={linkedin}
            target="_blank"
            rel="noreferrer"
            className="team-card__linkedin"
          >
            LinkedIn ↗
          </a>
        )}
      </div>
    </article>
  )
}
