import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Benefits from './components/Benefits';
import Pricing from './components/Pricing';
import Promo from './components/Promo';
import Values from './components/Values';
import Merchandise from './components/Merchandise';
import Schedule from './components/Schedule';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <Hero />
      <About />
      <Benefits />
      <Pricing />
      <Promo />
      <Values />
      <Merchandise />
      <Schedule />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
