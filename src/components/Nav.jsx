import logo from '../assets/logo.png';
import { CHECKOUT_URL } from '../data/content';
import './Nav.css';

export default function Nav() {
  return (
    <header className="nav">
      <img src={logo} alt="PHENOM Academy" className="nav__logo" width="150" height="44" />
      <a href={CHECKOUT_URL} target="_blank" rel="noopener" className="btn btn--pill">
        GARANTIR VAGA
      </a>
    </header>
  );
}
