import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-sm border-b border-red-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-3">
            <div className="text-2xl sm:text-3xl font-black text-red-700">
              SPARTAN
            </div>
            <div className="text-sm sm:text-base font-light text-white tracking-wider">
              CROSSFIT
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('inicio')} className="text-white hover:text-red-600 transition-colors font-semibold">
              INICIO
            </button>
            <button onClick={() => scrollToSection('nosotros')} className="text-white hover:text-red-600 transition-colors font-semibold">
              NOSOTROS
            </button>
            <button onClick={() => scrollToSection('precios')} className="text-white hover:text-red-600 transition-colors font-semibold">
              PRECIOS
            </button>
            <button onClick={() => scrollToSection('contacto')} className="text-white hover:text-red-600 transition-colors font-semibold">
              CONTACTO
            </button>
            <button
              onClick={() => scrollToSection('inscripcion')}
              className="bg-red-700 hover:bg-red-800 text-white px-6 py-3 font-black tracking-wider transition-all transform hover:scale-105"
            >
              INSCRÍBETE
            </button>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-black/98 border-t border-red-900/30">
          <div className="px-4 pt-2 pb-6 space-y-3">
            <button onClick={() => scrollToSection('inicio')} className="block w-full text-left text-white hover:text-red-600 transition-colors font-semibold py-3">
              INICIO
            </button>
            <button onClick={() => scrollToSection('nosotros')} className="block w-full text-left text-white hover:text-red-600 transition-colors font-semibold py-3">
              NOSOTROS
            </button>
            <button onClick={() => scrollToSection('precios')} className="block w-full text-left text-white hover:text-red-600 transition-colors font-semibold py-3">
              PRECIOS
            </button>
            <button onClick={() => scrollToSection('contacto')} className="block w-full text-left text-white hover:text-red-600 transition-colors font-semibold py-3">
              CONTACTO
            </button>
            <button
              onClick={() => scrollToSection('inscripcion')}
              className="w-full bg-red-700 hover:bg-red-800 text-white px-6 py-4 font-black tracking-wider transition-all mt-4"
            >
              INSCRÍBETE AHORA
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
