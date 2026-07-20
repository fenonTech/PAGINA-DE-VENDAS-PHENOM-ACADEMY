import Reveal from './Reveal';
import { DOR_ITEMS } from '../data/content';
import './Dor.css';

export default function Dor() {
  return (
    <Reveal as="section" className="section section--dor" aria-label="A dor">
      <div className="section__head">
        <div className="eyebrow">A VERDADE QUE NINGUÉM TE CONTA</div>
        <h2 className="section__title">Fazer tudo "certo" não paga as contas</h2>
      </div>

      <div className="dor__list">
        {DOR_ITEMS.map((item) => (
          <Reveal as="div" className="dor__row" key={item.num}>
            <div className="dor__num">{item.num}</div>
            <p className="dor__text">
              {item.text ?? (
                <>
                  {item.before}
                  <strong>{item.bold}</strong>
                  {item.after}
                </>
              )}
            </p>
          </Reveal>
        ))}
      </div>
    </Reveal>
  );
}
