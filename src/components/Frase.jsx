import Reveal from './Reveal';
import './Frase.css';

export function Frase() {
  return (
    <Reveal as="section" className="section section--frase" aria-label="Frase impactante">
      <h2 className="frase__title">
        O único risco de verdade é você continuar <span className="accent">adiando</span>
      </h2>
    </Reveal>
  );
}
