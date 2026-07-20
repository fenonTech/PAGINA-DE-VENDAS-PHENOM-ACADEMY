import Reveal from './Reveal';
import { PILLARS } from '../data/content';
import './Recebe.css';

export default function Recebe() {
  return (
    <section className="section section--recebe" aria-label="O que você recebe">
      <div className="section__head">
        <div className="eyebrow">O QUE VOCÊ RECEBE</div>
        <h2 className="section__title">Dentro do PHENOM Academy</h2>
      </div>

      <div className="pillars">
        {PILLARS.map(({ Icon, title, desc }) => (
          <Reveal as="div" className="pillar" key={title}>
            <div className="pillar__icon">
              <Icon />
            </div>
            <h3 className="pillar__title">{title}</h3>
            <p className="pillar__desc">{desc}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
