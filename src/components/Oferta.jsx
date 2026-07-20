import Reveal from './Reveal';
import { CHECKOUT_URL } from '../data/content';
import './Oferta.css';

export default function Oferta() {
  return (
    <Reveal as="section" id="oferta" className="section section--oferta" aria-label="Preço">
      <div className="offer-card">
        <div className="offer-card__price">R$ 397,00</div>
        <div className="offer-card__installments">
          ou 12x de R$ 41,00. Custa menos que um lanche por mês pra você mudar sua vida
        </div>
        <a href={CHECKOUT_URL} target="_blank" rel="noopener" className="btn btn--dark offer-card__cta">
          GARANTIR MINHA VAGA
        </a>
        <div className="offer-card__guarantee">Garantia incondicional de 7 dias. Sem perguntas.</div>
      </div>
    </Reveal>
  );
}
