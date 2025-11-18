import { Clock, Calendar } from 'lucide-react';

export default function Schedule() {
  const schedule = [
    { day: 'LUNES', morning: '6:00 - 10:00', afternoon: '16:00 - 23:00' },
    { day: 'MARTES', morning: '6:00 - 10:00', afternoon: '16:00 - 23:00' },
    { day: 'MIÉRCOLES', morning: '6:00 - 10:00', afternoon: '16:00 - 23:00' },
    { day: 'JUEVES', morning: '6:00 - 10:00', afternoon: '16:00 - 23:00' },
    { day: 'VIERNES', morning: '6:00 - 10:00', afternoon: '16:00 - 23:00' },
    { day: 'SÁBADO', morning: '8:00 - 14:00', afternoon: '16:00 - 21:00' },
    { day: 'DOMINGO', morning: '9:00 - 14:00', afternoon: 'Cerrado' }
  ];

  return (
    <section className="relative py-24 bg-gradient-to-b from-gray-900 via-black to-gray-900">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-red-700 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-6 py-2 bg-red-700/20 border border-red-700">
            <p className="text-red-500 font-bold tracking-wider text-sm">HORARIOS</p>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-6">
            ABRIMOS CUANDO TÚ <span className="text-red-700">LO NECESITAS</span>
          </h2>
          <div className="w-24 h-1 bg-red-700 mx-auto mb-6"></div>

          <div className="flex items-center justify-center gap-3 mb-8">
            <Clock className="text-red-600" size={24} />
            <p className="text-xl text-gray-300 font-semibold">
              Horario de atención: 6:00 - 23:00 hrs
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-b from-gray-900 to-black border-2 border-red-900/30 overflow-hidden">
          <div className="hidden md:grid grid-cols-3 bg-red-700 text-white font-black text-center">
            <div className="py-4 border-r border-red-800 flex items-center justify-center gap-2">
              <Calendar size={20} />
              <span>DÍA</span>
            </div>
            <div className="py-4 border-r border-red-800 flex items-center justify-center gap-2">
              <Clock size={20} />
              <span>MAÑANA</span>
            </div>
            <div className="py-4 flex items-center justify-center gap-2">
              <Clock size={20} />
              <span>TARDE</span>
            </div>
          </div>

          {schedule.map((item, index) => (
            <div
              key={index}
              className={`grid md:grid-cols-3 gap-4 md:gap-0 p-6 md:p-0 ${
                index !== schedule.length - 1 ? 'border-b border-red-900/30' : ''
              } hover:bg-red-950/20 transition-colors`}
            >
              <div className="md:py-6 md:px-8 md:border-r md:border-red-900/30">
                <span className="md:hidden text-red-500 font-bold text-sm mb-2 block">DÍA</span>
                <p className="text-white font-black text-lg">{item.day}</p>
              </div>
              <div className="md:py-6 md:px-8 md:border-r md:border-red-900/30">
                <span className="md:hidden text-red-500 font-bold text-sm mb-2 block">MAÑANA</span>
                <p className="text-gray-300 font-semibold">{item.morning}</p>
              </div>
              <div className="md:py-6 md:px-8">
                <span className="md:hidden text-red-500 font-bold text-sm mb-2 block">TARDE</span>
                <p className={`font-semibold ${item.afternoon === 'Cerrado' ? 'text-gray-600' : 'text-gray-300'}`}>
                  {item.afternoon}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <p className="text-gray-500 text-sm">
            Clases dirigidas cada hora. Reserva tu plaza con antelación.
          </p>
        </div>
      </div>
    </section>
  );
}
