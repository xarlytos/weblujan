import { Target, Eye, Heart } from 'lucide-react';

export default function Values() {
  const values = [
    {
      icon: Target,
      title: 'NUESTRA MISIÓN',
      description: 'Transformar vidas a través del entrenamiento funcional de alta intensidad, creando una comunidad de guerreros comprometidos con la excelencia física y mental. Ofrecemos un ambiente donde cada persona puede alcanzar su máximo potencial, sin importar su nivel inicial.'
    },
    {
      icon: Eye,
      title: 'NUESTRA VISIÓN',
      description: 'Ser el referente en CrossFit en Valencia, reconocidos por nuestra metodología efectiva, instalaciones de primer nivel y una comunidad inquebrantable. Aspiramos a crear un legado de transformación que inspire a generaciones futuras a adoptar un estilo de vida saludable y activo.'
    },
    {
      icon: Heart,
      title: 'NUESTROS VALORES',
      description: 'Disciplina como base del progreso. Respeto hacia todos los miembros y sus objetivos. Trabajo en equipo y apoyo mutuo. Superación constante y mentalidad de crecimiento. Integridad en cada entrenamiento y relación. Pasión por el fitness y el bienestar integral.'
    }
  ];

  return (
    <section className="relative py-24 bg-gradient-to-b from-black via-gray-900 to-black">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-red-700 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-6 py-2 bg-red-700/20 border border-red-700">
            <p className="text-red-500 font-bold tracking-wider text-sm">FILOSOFÍA</p>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-6">
            MISIÓN, VISIÓN Y <span className="text-red-700">VALORES</span>
          </h2>
          <div className="w-24 h-1 bg-red-700 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-b from-gray-900 to-black border-2 border-red-900/30 p-10 hover:border-red-700 transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-red-700 via-red-600 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>

              <div className="w-20 h-20 mb-6 bg-red-700/10 border-2 border-red-700/30 flex items-center justify-center group-hover:bg-red-700/20 group-hover:border-red-700 transition-all">
                <value.icon className="w-10 h-10 text-red-600" />
              </div>

              <h3 className="text-2xl font-black text-white mb-6 group-hover:text-red-500 transition-colors">
                {value.title}
              </h3>

              <p className="text-gray-400 leading-relaxed">
                {value.description}
              </p>

              <div className="absolute -bottom-3 -right-3 w-32 h-32 border-2 border-red-900/20 transform rotate-45 group-hover:border-red-700/30 transition-colors"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
