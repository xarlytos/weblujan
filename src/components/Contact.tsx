import { MapPin, Phone, Mail, Instagram, Globe, ArrowRight } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <section id="inscripcion" className="relative py-24 bg-black">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-black to-black"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-6 py-2 bg-red-700/20 border border-red-700">
            <p className="text-red-500 font-bold tracking-wider text-sm">CONTACTO</p>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-6">
            COMIENZA TU <span className="text-red-700">TRANSFORMACIÓN</span>
          </h2>
          <div className="w-24 h-1 bg-red-700 mx-auto mb-6"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Estamos aquí para ayudarte a dar el primer paso hacia tus objetivos
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-black text-white mb-8">INFORMACIÓN DE CONTACTO</h3>

            <div className="space-y-6 mb-10">
              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 bg-red-700/20 border border-red-700/50 flex items-center justify-center flex-shrink-0 group-hover:bg-red-700/30 transition-colors">
                  <MapPin className="text-red-600" size={20} />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">UBICACIÓN</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Polígono Vara de Quart<br />
                    Av. de les Tres Creus, 42<br />
                    Patraix, 46014 Valencia
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 bg-red-700/20 border border-red-700/50 flex items-center justify-center flex-shrink-0 group-hover:bg-red-700/30 transition-colors">
                  <Phone className="text-red-600" size={20} />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">TELÉFONOS</h4>
                  <p className="text-gray-400 text-sm">
                    <a href="tel:+34676725611" className="hover:text-red-500 transition-colors">(+34) 676 725 611</a>
                    <br />
                    <a href="tel:+34601223305" className="hover:text-red-500 transition-colors">(+34) 601 223 305</a>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 bg-red-700/20 border border-red-700/50 flex items-center justify-center flex-shrink-0 group-hover:bg-red-700/30 transition-colors">
                  <Instagram className="text-red-600" size={20} />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">REDES SOCIALES</h4>
                  <p className="text-gray-400 text-sm">
                    <a href="https://instagram.com/spartancrossfit" target="_blank" rel="noopener noreferrer" className="hover:text-red-500 transition-colors">
                      @SpartanCrossfit
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 bg-red-700/20 border border-red-700/50 flex items-center justify-center flex-shrink-0 group-hover:bg-red-700/30 transition-colors">
                  <Globe className="text-red-600" size={20} />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">WEB</h4>
                  <p className="text-gray-400 text-sm">
                    <a href="https://www.spartancrossfit.com" target="_blank" rel="noopener noreferrer" className="hover:text-red-500 transition-colors">
                      www.spartancrossfit.com
                    </a>
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-black border border-red-900/30 p-6">
              <h4 className="text-white font-black mb-4">HORARIO DE ATENCIÓN</h4>
              <p className="text-gray-300 text-lg font-semibold">
                6:00 - 23:00 hrs
              </p>
              <p className="text-gray-500 text-sm mt-2">
                De lunes a domingo
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-black text-white mb-8">SOLICITA INFORMACIÓN</h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-white font-semibold mb-2">
                  NOMBRE COMPLETO *
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-gray-900 border border-red-900/30 text-white px-4 py-4 focus:outline-none focus:border-red-700 transition-colors"
                  placeholder="Tu nombre"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-white font-semibold mb-2">
                  EMAIL *
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-gray-900 border border-red-900/30 text-white px-4 py-4 focus:outline-none focus:border-red-700 transition-colors"
                  placeholder="tu@email.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-white font-semibold mb-2">
                  TELÉFONO *
                </label>
                <input
                  type="tel"
                  id="phone"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full bg-gray-900 border border-red-900/30 text-white px-4 py-4 focus:outline-none focus:border-red-700 transition-colors"
                  placeholder="+34 600 000 000"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-white font-semibold mb-2">
                  MENSAJE
                </label>
                <textarea
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-gray-900 border border-red-900/30 text-white px-4 py-4 focus:outline-none focus:border-red-700 transition-colors resize-none"
                  placeholder="Cuéntanos sobre tus objetivos..."
                />
              </div>

              <button
                type="submit"
                className="group w-full bg-red-700 hover:bg-red-800 text-white px-8 py-5 font-black text-lg tracking-wider transition-all transform hover:scale-105 hover:shadow-2xl hover:shadow-red-700/50 flex items-center justify-center gap-3"
              >
                ENVIAR SOLICITUD
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={24} />
              </button>

              <p className="text-gray-500 text-xs text-center">
                Al enviar este formulario, aceptas que nos pongamos en contacto contigo para informarte sobre nuestros servicios.
              </p>
            </form>
          </div>
        </div>

        <div className="mt-16 bg-gradient-to-br from-gray-900 to-black border-2 border-red-900/30 overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3080.2846944447!2d-0.4069213!3d39.4603077!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd604fd9274dace9%3A0xce46d0bb294d8f1e!2sAv.%20de%20les%20Tres%20Creus%2C%2042%2C%2046014%20Val%C3%A8ncia%2C%20Spain!5e0!3m2!1sen!2sus!4v1622012345678"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full"
          />
        </div>
      </div>
    </section>
  );
}
