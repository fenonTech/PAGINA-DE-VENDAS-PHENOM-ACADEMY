import Reveal from './Reveal';
import './Frase.css';

export function Frase() {
  return (
    <Reveal as="section" className="section section--frase" aria-label="Frase impactante">
      <h2 className="frase__title">
        Continuar dizendo "ano que vem eu mudo". Ou virar a <span className="accent">próxima pessoa</span> que
        decidiu agir primeiro.
      </h2>
    </Reveal>
  );
}

export function FraseFinal() {
  return (
    <Reveal as="section" className="section section--frase-final" aria-label="Frase impactante final">
      <div className="frase-final__fade" />
      <div className="frase-final__content">
        <h2 className="frase-final__title">
          O único risco de verdade é você continuar <span className="accent">adiando</span>
        </h2>
      </div>
    </Reveal>
  );
}
