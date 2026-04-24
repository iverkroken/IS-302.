import { useReveal } from '../hooks/useReveal'
import TeamCard from '../components/TeamCard'
import { teamMembers } from '../data/teamMembers'
import './Page.css'
import './Team.css'

export default function Team() {
  const headRef    = useReveal()
  const featRef    = useReveal({ delay: 0.05 })
  const gridRef    = useReveal({ delay: 0.1 })

  const featured = teamMembers.find(m => m.featured)
  const others   = teamMembers.filter(m => !m.featured)

  return (
    <div className="page">
      <div className="container">
        <div className="page__header" ref={headRef}>
          <p className="page__tag mono">Teamet</p>
          <h1 className="page__title">Møt gruppen</h1>
        </div>

        {featured && (
          <div ref={featRef} className="team-featured-wrap">
            <TeamCard member={featured} featured />
          </div>
        )}

        <div className="team-grid" ref={gridRef}>
          {others.map(m => <TeamCard key={m.id} member={m} />)}
        </div>
      </div>
    </div>
  )
}
