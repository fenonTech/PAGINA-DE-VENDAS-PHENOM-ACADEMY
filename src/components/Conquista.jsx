import Reveal from './Reveal';
import conquistaImg from '../assets/conquista.webp';
import './Conquista.css';

export default function Conquista() {
  return (
    <Reveal as="section" className="section section--conquista" aria-label="Conquistas">
      <div className="eyebrow">A CONQUISTA</div>
      <h2 className="conquista__title">
        A mansão da minha mãe. A BMW à vista. A <span className="accent">liberdade financeira</span>.
      </h2>
      <img
        src={conquistaImg}
        alt="Conquista: casa própria, carro dos sonhos e liberdade financeira"
        className="conquista__img"
        loading="lazy"
        decoding="async"
        width="1600"
        height="898"
      />
      <p className="conquista__text">
        Resultado de parar de aceitar a realidade que me deram e sair pra vender pro mundo inteiro. Isso não veio de
        curso, mentoria ou sorte, veio do método que eu abro agora, pela primeira e única vez, pra você.
      </p>
    </Reveal>
  );
}
