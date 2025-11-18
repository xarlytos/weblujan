import { Gift, ArrowRight } from 'lucide-react';

export default function Promo() {
  const scrollToContact = () => {
    const element = document.getElementById('inscripcion');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative py-24 bg-black overflow-hidden">
      <div className="absolute inset-0 bg-[url('/Flyer%20promo%20mochila.png')] bg-cover bg-center opacity-20"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-transparent"></div>

      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-red-900/20 to-transparent"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-3 mb-6 px-6 py-3 bg-red-700/20 border border-red-700">
              <Gift className="text-red-500" size={24} />
              <p className="text-red-500 font-bold tracking-wider">PROMOCIÓN ESPECIAL</p>
            </div>

            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-6 leading-tight">
              ¡INSCRÍBETE HOY
              <br />
              Y LLÉVATE ESTA
              <br />
              <span className="text-red-700">MOCHILA GRATIS!</span>
            </h2>

            <div className="w-24 h-1 bg-red-700 mb-8"></div>

            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              Empieza tu viaje Spartan con el pie derecho. Al inscribirte hoy, recibirás completamente gratis
              nuestra mochila oficial Spartan Crossfit, perfecta para llevar todo tu equipamiento.
            </p>

            <ul className="space-y-4 mb-10">
              {[
                'Mochila oficial Spartan Crossfit',
                'Material resistente de alta calidad',
                'Compartimentos especiales para tu equipo',
                'Diseño exclusivo con logo bordado'
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-red-600 transform rotate-45"></div>
                  <span className="text-gray-300">{item}</span>
                </li>
              ))}
            </ul>

            <button
              onClick={scrollToContact}
              className="group bg-red-700 hover:bg-red-800 text-white px-10 py-5 font-black text-lg tracking-wider transition-all transform hover:scale-105 hover:shadow-2xl hover:shadow-red-700/50 flex items-center gap-3"
            >
              QUIERO MI MOCHILA GRATIS
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={24} />
            </button>

            <p className="text-gray-500 text-sm mt-6">
              *Oferta válida para nuevas inscripciones. Sujeto a disponibilidad.
            </p>
          </div>

          <div className="relative hidden lg:block">
            <div className="absolute -top-10 -right-10 w-96 h-96 bg-red-700/10 rounded-full blur-3xl"></div>
            <img
              src="/Flyer%20promo%20mochila.png"
              alt="Mochila Spartan Crossfit"
              className="relative z-10 w-full transform hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
