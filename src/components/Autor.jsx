import Reveal from './Reveal';
import fotoAutor from '../assets/foto_do_autor.webp';
import './Autor.css';

export default function Autor() {
  return (
    <Reveal as="section" className="section section--autor" aria-label="Sobre o autor">
      <div className="autor">
        <img
          src={fotoAutor}
          alt="Fundador da PHENOM Academy"
          className="autor__photo"
          loading="lazy"
          decoding="async"
          width="1000"
          height="1334"
        />
        <div>
          <div className="eyebrow">QUEM É PHEN6M</div>
          <h2 className="autor__title">Origem não define destino</h2>
          <p className="autor__text">
            Fui o cara que ia mal na escola. Larguei a faculdade. Trabalhei em telemarketing. Cresci com mãe
            solteira, usava roupa emprestada e passava horas de videogame tentando fugir de uma realidade que
            parecia não ter saída.
          </p>
          <p className="autor__text">
            Se alguém tivesse me falado que em menos de dois anos eu ia comprar uma BMW à vista, conhecer a Europa e
            dar pra minha mãe a mansão que ela sempre sonhou, eu ia rir. Eu só parei de aceitar a realidade que me
            deram e comecei, na marra, a construir a realidade que eu queria viver, e foi assim que nasceu o método
            que eu ensino na PHENOM Academy: sem lançar curso, sem mentoria, só resultado próprio, testado na
            prática.
          </p>
        </div>
      </div>
    </Reveal>
  );
}
