import { Instagram, Facebook, Twitter, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contacto" className="relative bg-black border-t border-red-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="text-3xl font-black text-red-700">SPARTAN</div>
              <div className="text-base font-light text-white tracking-wider">CROSSFIT</div>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed max-w-md">
              Más que un gimnasio, somos una comunidad de guerreros comprometidos con la excelencia.
              Únete a nosotros y descubre tu verdadero potencial.
            </p>
            <div className="flex gap-4">
              <a
                href="https://instagram.com/spartancrossfit"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-red-700/20 border border-red-700/50 flex items-center justify-center hover:bg-red-700 hover:border-red-700 transition-all"
              >
                <Instagram size={20} className="text-white" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-red-700/20 border border-red-700/50 flex items-center justify-center hover:bg-red-700 hover:border-red-700 transition-all"
              >
                <Facebook size={20} className="text-white" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-red-700/20 border border-red-700/50 flex items-center justify-center hover:bg-red-700 hover:border-red-700 transition-all"
              >
                <Twitter size={20} className="text-white" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-red-700/20 border border-red-700/50 flex items-center justify-center hover:bg-red-700 hover:border-red-700 transition-all"
              >
                <Youtube size={20} className="text-white" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-black text-lg mb-4">ENLACES RÁPIDOS</h4>
            <ul className="space-y-3">
              <li>
                <a href="#inicio" className="text-gray-400 hover:text-red-500 transition-colors text-sm">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#nosotros" className="text-gray-400 hover:text-red-500 transition-colors text-sm">
                  Nosotros
                </a>
              </li>
              <li>
                <a href="#precios" className="text-gray-400 hover:text-red-500 transition-colors text-sm">
                  Precios
                </a>
              </li>
              <li>
                <a href="#inscripcion" className="text-gray-400 hover:text-red-500 transition-colors text-sm">
                  Inscripción
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-black text-lg mb-4">LEGAL</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-400 hover:text-red-500 transition-colors text-sm">
                  Política de Privacidad
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-red-500 transition-colors text-sm">
                  Términos y Condiciones
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-red-500 transition-colors text-sm">
                  Normativa del Centro
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-red-500 transition-colors text-sm">
                  Política de Cookies
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-red-900/30">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm text-center md:text-left">
              © {new Date().getFullYear()} Spartan Crossfit Valencia. Todos los derechos reservados.
            </p>
            <p className="text-gray-600 text-xs italic text-center md:text-right">
              "No hay nada imposible para aquel que lo intenta." — Alejandro Magno
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
