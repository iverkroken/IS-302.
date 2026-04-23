import { useReveal } from '../hooks/useReveal'
import './Page.css'

export default function OmOss() {
  const headRef = useReveal()
  const bodyRef = useReveal({ delay: 0.1 })

  return (
    <div className="page">
      <div className="container">
        <div className="page__header" ref={headRef}>
          <p className="page__tag mono">Om oss</p>
          <h1 className="page__title">Hvem er vi?</h1>
        </div>
        <div className="page__body" ref={bodyRef}>
          <p>
            Vi er en gruppe IT-studenter ved Universitetet i Agder som tar
            praksisemnet IS-302. Her kommer en beskrivelse av gruppen, kontekst
            rundt praksisstedet og hva vi ønsker å lære.
          </p>
          <p className="page__placeholder mono">[ Innhold legges til ]</p>
        </div>
      </div>
    </div>
  )
}
