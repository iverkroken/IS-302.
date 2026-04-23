import { useReveal } from '../hooks/useReveal'
import './Page.css'

export default function Refleksjon() {
  const headRef = useReveal()
  const bodyRef = useReveal({ delay: 0.1 })

  return (
    <div className="page">
      <div className="container">
        <div className="page__header" ref={headRef}>
          <p className="page__tag mono">Avslutning</p>
          <h1 className="page__title">Refleksjon</h1>
        </div>
        <div className="page__body" ref={bodyRef}>
          <p>
            Hva sitter vi igjen med etter semesteret? Hva gikk bra, hva ville
            vi gjort annerledes, og hva tar vi med oss videre?
          </p>
          <p className="page__placeholder mono">[ Innhold legges til ]</p>
        </div>
      </div>
    </div>
  )
}
