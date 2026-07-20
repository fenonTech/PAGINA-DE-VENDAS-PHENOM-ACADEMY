import logo from '../assets/logo.png';
import { SOCIAL_LINKS } from '../data/content';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <img src={logo} alt="PHENOM Academy" className="footer__logo" width="150" height="44" loading="lazy" />
      <div className="footer__social">
        {SOCIAL_LINKS.map((link) => (
          <a href={link.href} target="_blank" rel="noopener" key={link.label}>
            {link.label}
          </a>
        ))}
      </div>
      <div className="footer__copy">© 2026 PHENOM Academy. Todos os direitos reservados.</div>
    </footer>
  );
}
