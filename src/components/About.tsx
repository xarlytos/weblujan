import { Shield, Target, Trophy, Users } from 'lucide-react';

export default function About() {
  return (
    <section id="nosotros" className="relative py-24 bg-gradient-to-b from-black via-gray-900 to-black overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-red-700 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-red-900 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-6 py-2 bg-red-700/20 border border-red-700">
            <p className="text-red-500 font-bold tracking-wider text-sm">QUIÉNES SOMOS</p>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-6">
            SPARTAN <span className="text-red-700">CROSSFIT</span>
          </h2>
          <div className="w-24 h-1 bg-red-700 mx-auto mb-8"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 border-l-4 border-red-700 transform hover:scale-105 transition-all duration-300">
            <h3 className="text-2xl font-black text-white mb-4">NUESTRO NOMBRE</h3>
            <p className="text-gray-300 leading-relaxed">
              El nombre "Spartan" evoca la disciplina, fuerza y resistencia de los antiguos guerreros espartanos.
              Representa el espíritu de sacrificio y la mentalidad inquebrantable necesaria para superar cualquier desafío.
              En Spartan Crossfit, adoptamos estos valores para transformar tu cuerpo y mente.
            </p>
          </div>

          <div className="bg-gradient-to-br from-red-950 to-black p-8 border-l-4 border-red-700 transform hover:scale-105 transition-all duration-300">
            <h3 className="text-2xl font-black text-white mb-4">NUESTRA UBICACIÓN</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              Nos encontramos en el corazón de Valencia, en el Polígono Vara de Quart:
            </p>
            <p className="text-white font-semibold">
              Av. de les Tres Creus, 42<br />
              Patraix, 46014 Valencia
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: Shield,
              title: 'DISCIPLINA',
              description: 'Forjamos hábitos que transforman vidas'
            },
            {
              icon: Trophy,
              title: 'FUERZA',
              description: 'Desarrolla tu máximo potencial físico'
            },
            {
              icon: Target,
              title: 'RESISTENCIA',
              description: 'Supera tus límites mentales y físicos'
            },
            {
              icon: Users,
              title: 'COMUNIDAD',
              description: 'Únete a una familia de guerreros'
            }
          ].map((item, index) => (
            <div
              key={index}
              className="group relative bg-black border border-red-900/30 p-8 text-center hover:border-red-700 transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-red-700/0 to-red-700/0 group-hover:from-red-700/10 group-hover:to-red-700/20 transition-all"></div>
              <div className="relative z-10">
                <item.icon className="w-12 h-12 mx-auto mb-4 text-red-600 group-hover:text-red-500 transition-colors" />
                <h4 className="text-xl font-black text-white mb-3">{item.title}</h4>
                <p className="text-gray-400 text-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
