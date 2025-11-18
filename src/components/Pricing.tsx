import { Check, Crown } from 'lucide-react';

export default function Pricing() {
  const plans = [
    {
      name: 'MENSUAL',
      price: '120',
      period: '/mes',
      features: [
        'Acceso ilimitado al box',
        'Todas las clases incluidas',
        'Asesoramiento personalizado',
        'Comunidad Spartan',
        'Sin permanencia'
      ],
      popular: false
    },
    {
      name: 'TRIMESTRAL',
      price: '300',
      period: '/3 meses',
      features: [
        'Acceso ilimitado al box',
        'Todas las clases incluidas',
        'Asesoramiento personalizado',
        'Plan de nutrición básico',
        'Comunidad Spartan',
        'Ahorra 60€'
      ],
      popular: true
    },
    {
      name: 'ANUAL',
      price: '1000',
      period: '/año',
      features: [
        'Acceso ilimitado al box',
        'Todas las clases incluidas',
        'Asesoramiento personalizado premium',
        'Plan de nutrición completo',
        'Sesiones de fisioterapia',
        'Comunidad Spartan',
        'Ahorra 440€'
      ],
      popular: false
    }
  ];

  const scrollToContact = () => {
    const element = document.getElementById('inscripcion');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="precios" className="relative py-24 bg-gradient-to-b from-gray-900 via-black to-gray-900 overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-red-700 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-red-900 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-6 py-2 bg-red-700/20 border border-red-700">
            <p className="text-red-500 font-bold tracking-wider text-sm">PLANES</p>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-6">
            ELIGE TU <span className="text-red-700">MEMBRESÍA</span>
          </h2>
          <div className="w-24 h-1 bg-red-700 mx-auto mb-6"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Selecciona el plan que mejor se adapte a tus objetivos y comienza tu transformación hoy
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-gradient-to-b from-gray-900 to-black border-2 ${
                plan.popular ? 'border-red-700 transform scale-105' : 'border-red-900/30'
              } p-8 hover:border-red-700 transition-all duration-300 ${
                !plan.popular && 'hover:scale-105'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-red-700 px-6 py-2 flex items-center gap-2">
                  <Crown size={16} />
                  <span className="text-white font-black text-sm tracking-wider">MÁS POPULAR</span>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-black text-white mb-6">{plan.name}</h3>
                <div className="flex items-end justify-center mb-2">
                  <span className="text-5xl font-black text-red-600">{plan.price}</span>
                  <span className="text-2xl text-gray-400 ml-2">€</span>
                </div>
                <p className="text-gray-500 font-semibold">{plan.period}</p>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={scrollToContact}
                className={`w-full py-4 font-black tracking-wider transition-all ${
                  plan.popular
                    ? 'bg-red-700 hover:bg-red-800 text-white'
                    : 'bg-transparent border-2 border-red-700 text-red-600 hover:bg-red-700 hover:text-white'
                }`}
              >
                HAZTE MIEMBRO
              </button>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-500 text-sm">
            Todos los planes incluyen acceso completo a nuestras instalaciones y clases
          </p>
        </div>
      </div>
    </section>
  );
}
