import { ShoppingBag, Star } from 'lucide-react';

export default function Merchandise() {
  return (
    <section className="relative py-24 bg-black overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-red-950/20"></div>

      <div className="absolute top-20 right-0 w-96 h-96 bg-red-700/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-red-900/10 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-6 py-2 bg-red-700/20 border border-red-700">
            <p className="text-red-500 font-bold tracking-wider text-sm">MERCHANDISING</p>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-6">
            VISTE COMO UN <span className="text-red-700">SPARTAN</span>
          </h2>
          <div className="w-24 h-1 bg-red-700 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-red-700/20 to-red-900/20 blur-xl group-hover:blur-2xl transition-all"></div>
            <div className="relative bg-gradient-to-br from-gray-900 to-black border-2 border-red-900/30 p-8 group-hover:border-red-700 transition-all">
              <img
                src="/Black%20and%20White%20Minimalist%20T-Shirt%20Mockup%20Instagram%20Post%20(1).png"
                alt="Camiseta Spartan Crossfit"
                className="w-full transform group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          <div>
            <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-red-700/20 border border-red-700">
              <Star className="text-red-500" size={16} />
              <span className="text-red-500 font-bold text-sm">PRODUCTO DESTACADO</span>
            </div>

            <h3 className="text-3xl sm:text-4xl font-black text-white mb-4">
              CAMISETA OFICIAL SPARTAN
            </h3>

            <div className="w-20 h-1 bg-red-700 mb-6"></div>

            <div className="mb-8 p-6 bg-gradient-to-r from-red-950/50 to-transparent border-l-4 border-red-700">
              <p className="text-xl text-gray-300 italic font-light leading-relaxed">
                "No hay nada imposible para aquel que lo intenta."
              </p>
              <p className="text-sm text-gray-500 mt-2">— Alejandro Magno</p>
            </div>

            <ul className="space-y-4 mb-8">
              {[
                'Diseño exclusivo Spartan Crossfit',
                'Material técnico de alta calidad',
                'Transpirable y de secado rápido',
                'Logo //SPC. en la espalda',
                'Corte atlético y cómodo',
                'Perfecto para entrenar o usar casual'
              ].map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-600 transform rotate-45 mt-2"></div>
                  <span className="text-gray-300">{feature}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="flex items-center justify-center gap-3 bg-red-700 hover:bg-red-800 text-white px-8 py-4 font-black tracking-wider transition-all transform hover:scale-105">
                <ShoppingBag size={20} />
                CONSIGUE LA TUYA
              </button>

              <button className="bg-transparent border-2 border-red-700 text-red-600 hover:bg-red-700 hover:text-white px-8 py-4 font-black tracking-wider transition-all">
                VER MÁS PRODUCTOS
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
