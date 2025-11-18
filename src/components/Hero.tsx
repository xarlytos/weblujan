import { ArrowRight, MapPin } from 'lucide-react';

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-red-950">
        <div className="absolute inset-0 bg-[url('/Flyer%20gym%20final.png')] bg-cover bg-center opacity-30"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent"></div>
      </div>

      <div className="absolute top-20 left-0 w-96 h-96 bg-red-700/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-0 w-96 h-96 bg-red-900/10 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <div className="inline-block mb-6 px-6 py-2 bg-red-700/20 border border-red-700 backdrop-blur-sm">
          <p className="text-red-500 font-bold tracking-wider text-sm">VALENCIA</p>
        </div>

        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white mb-6 leading-none tracking-tight">
          DESAFÍA
          <br />
          <span className="text-red-700">TUS LÍMITES</span>
        </h1>

        <p className="text-xl sm:text-2xl md:text-3xl text-gray-300 mb-4 font-light tracking-wide">
          Únete a Spartan Crossfit en Valencia
        </p>

        <p className="text-base sm:text-lg text-gray-400 mb-12 max-w-2xl mx-auto font-light">
          Disciplina. Fuerza. Resistencia. Sacrificio. Espíritu de lucha.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-16">
          <button
            onClick={() => scrollToSection('inscripcion')}
            className="group w-full sm:w-auto bg-red-700 hover:bg-red-800 text-white px-10 py-5 font-black text-lg tracking-wider transition-all transform hover:scale-105 hover:shadow-2xl hover:shadow-red-700/50 flex items-center justify-center gap-3"
          >
            INSCRÍBETE AHORA
            <ArrowRight className="group-hover:translate-x-1 transition-transform" size={24} />
          </button>

          <button
            onClick={() => scrollToSection('contacto')}
            className="w-full sm:w-auto bg-transparent border-2 border-white hover:bg-white hover:text-black text-white px-10 py-5 font-black text-lg tracking-wider transition-all"
          >
            RESERVAR VISITA
          </button>
        </div>

        <div className="flex items-center justify-center gap-2 text-gray-400 animate-pulse">
          <MapPin size={20} className="text-red-600" />
          <p className="text-sm sm:text-base">
            Polígono Vara de Quart - Valencia
          </p>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent"></div>
    </section>
  );
}
