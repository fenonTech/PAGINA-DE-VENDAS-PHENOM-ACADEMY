import Nav from './components/Nav';
import Hero from './components/Hero';
import Dor from './components/Dor';
import Recebe from './components/Recebe';
import Autor from './components/Autor';
import Conquista from './components/Conquista';
import { Frase, FraseFinal } from './components/Frase';
import Oferta from './components/Oferta';
import Footer from './components/Footer';
import StickyCta from './components/StickyCta';

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Dor />
        <Recebe />
        <Autor />
        <Conquista />
        <Frase />
        <Oferta />
        <FraseFinal />
      </main>
      <Footer />
      <StickyCta />
    </>
  );
}
