import { Dumbbell, TrendingUp, Apple, Heart, Building2, Users } from 'lucide-react';

export default function Benefits() {
  const benefits = [
    {
      icon: Dumbbell,
      title: 'ALTA INTENSIDAD',
      description: 'Entrenamientos funcionales diseñados para maximizar resultados en el menor tiempo posible'
    },
    {
      icon: TrendingUp,
      title: 'RESULTADOS REALES',
      description: 'Métodos probados que garantizan transformaciones visibles y medibles'
    },
    {
      icon: Apple,
      title: 'NUTRICIÓN & FISIOTERAPIA',
      description: 'Asesoramiento completo para optimizar tu rendimiento dentro y fuera del box'
    },
    {
      icon: Heart,
      title: 'COMUNIDAD SPARTAN',
      description: 'Forma parte de una familia comprometida con la excelencia y el apoyo mutuo'
    },
    {
      icon: Building2,
      title: 'INSTALACIONES MODERNAS',
      description: 'Equipamiento de última generación en un espacio diseñado para tu éxito'
    },
    {
      icon: Users,
      title: 'CLASES DIRIGIDAS',
      description: 'Entrenadores certificados que personalizan cada sesión según tu nivel'
    }
  ];

  return (
    <section className="relative py-24 bg-black">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-black to-gray-900"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-6 py-2 bg-red-700/20 border border-red-700">
            <p className="text-red-500 font-bold tracking-wider text-sm">BENEFICIOS</p>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-6">
            ¿POR QUÉ ENTRENAR <span className="text-red-700">AQUÍ?</span>
          </h2>
          <div className="w-24 h-1 bg-red-700 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-gray-900 to-black border border-red-900/30 p-8 hover:border-red-700 transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-700 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>

              <div className="relative z-10">
                <div className="w-16 h-16 mb-6 bg-red-700/20 flex items-center justify-center group-hover:bg-red-700/30 transition-colors">
                  <benefit.icon className="w-8 h-8 text-red-600" />
                </div>

                <h3 className="text-xl font-black text-white mb-4 group-hover:text-red-500 transition-colors">
                  {benefit.title}
                </h3>

                <p className="text-gray-400 leading-relaxed text-sm">
                  {benefit.description}
                </p>
              </div>

              <div className="absolute -bottom-2 -right-2 w-24 h-24 bg-red-700/5 transform rotate-45 group-hover:bg-red-700/10 transition-colors"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
