import './TeamCard.css'

const LinkedInIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <rect width="24" height="24" rx="4" fill="#0A66C2" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.5 6.25a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5zM6.25 10h2.5v8h-2.5v-8zm4.25 0H13v1.1c.42-.73 1.32-1.35 2.75-1.35 2.62 0 3.25 1.63 3.25 3.75V18H16.5v-4c0-1-.02-2.3-1.5-2.3s-1.75 1.16-1.75 2.22V18H10.5V10z"
      fill="white"
    />
  </svg>
)

export default function TeamCard({ member }) {
  const { name, image, linkedin } = member

  return (
    <article className="team-card">
      <div className="team-card__img-wrap">
        {image
          ? <img src={image} alt={name} className="team-card__img" />
          : <div className="team-card__img-placeholder" aria-hidden="true" />
        }
      </div>
      <div className="team-card__body">
        <h3 className="team-card__name">{name}</h3>
        {linkedin && (
          <a
            href={linkedin}
            target="_blank"
            rel="noreferrer"
            className="team-card__linkedin"
          >
            <LinkedInIcon />
            LinkedIn
          </a>
        )}
      </div>
    </article>
  )
}
