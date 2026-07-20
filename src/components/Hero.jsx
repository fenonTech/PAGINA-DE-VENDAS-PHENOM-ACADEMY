import { CHECKOUT_URL, STATS } from '../data/content';
import './Hero.css';

export default function Hero() {
  return (
    <section className="hero" aria-label="Título e VSL">
      <div className="hero__fade" />

      <div className="hero__content">
        <div className="eyebrow">PRIMEIRO E ÚNICO TREINAMENTO</div>
        <h1 className="hero__title">
          VOCÊ NÃO PRECISA SAIR DE CASA PRA VENDER PRO <span className="accent">mundo inteiro</span>
        </h1>
        <p className="hero__subtitle">
          Enquanto você troca tempo por um salário fixo, tem gente vendendo pro mundo inteiro de qualquer lugar, sem
          CLT, sem chefe, sem limite pra quanto pode ganhar. PHENOM Academy é o método que te tira dessa troca.
        </p>

        <div className="vsl">
          <div className="vsl__play">
            <span className="vsl__play-icon" />
          </div>
          <div className="vsl__label">ASSISTA ANTES DE GARANTIR SUA VAGA</div>
        </div>

        <a href={CHECKOUT_URL} target="_blank" rel="noopener" className="btn btn--main hero__cta">
          GARANTIR MINHA VAGA
        </a>

        <div className="hero__stats">
          {STATS.map((stat) => (
            <div className="stat" key={stat.label}>
              <div className="stat__value">{stat.value}</div>
              <div className="stat__label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
