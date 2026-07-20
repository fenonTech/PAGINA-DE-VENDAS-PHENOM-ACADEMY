import { CHECKOUT_URL } from '../data/content';
import './StickyCta.css';

export default function StickyCta() {
  return (
    <>
      <div className="sticky-cta">
        <a href={CHECKOUT_URL} target="_blank" rel="noopener" className="btn btn--main sticky-cta__btn">
          GARANTIR MINHA VAGA
        </a>
      </div>
      <div className="sticky-cta-spacer" />
    </>
  );
}
