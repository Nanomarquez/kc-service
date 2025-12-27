import { motion } from 'framer-motion'
import { Phone, MapPin, Code, ExternalLink } from 'lucide-react'
import WspIcon from './WspIcon'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-accent-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">KC</span>
              </div>
              <span className="text-xl font-bold text-white">KC Service</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Servicio profesional de reparación de electrodomésticos. 
              Trabajamos con dedicación para mantener tus equipos funcionando perfectamente.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-white font-semibold text-lg mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <a href="#inicio" className="hover:text-white transition-colors">Inicio</a>
              </li>
              <li>
                <a href="#servicios" className="hover:text-white transition-colors">Servicios</a>
              </li>
              <li>
                <a href="#nosotros" className="hover:text-white transition-colors">Nosotros</a>
              </li>
              <li>
                <a href="#contacto" className="hover:text-white transition-colors">Contacto</a>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-white font-semibold text-lg mb-4">Contacto</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <Phone size={20} className="text-primary-400" />
                <a href="tel:+541141611724" className="hover:text-white transition-colors">
                  11 4161-1724
                </a>
              </li>
              <li className="flex items-center gap-3">
                <WspIcon size={20} />
                <a 
                  href="https://wa.me/541141611724" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  WhatsApp
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-primary-400 mt-1" />
                <a 
                  href="https://www.google.com/maps/place/BUM,+Dr.+H.+Leguizam%C3%B3n+693,+B1630+Pilar+Centro,+Provincia+de+Buenos+Aires/data=!4m2!3m1!1s0x95bc9d241921ee0b:0xab9ab55e01a1a378?sa=X&ved=1t:242&ictx=111"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  <p>H. Leguizamón 693</p>
                  <p className="text-sm text-gray-500">Pilar - Barrio San Alejo</p>
                </a>
              </li>
            </ul>
          </motion.div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-center md:text-left">
              © {currentYear} KC Service. Todos los derechos reservados.
            </p>
            
            {/* Developer Info */}
            <div className="flex flex-col items-center md:items-end gap-2">
              <p className="text-gray-500 text-sm flex items-center gap-2">
                <Code size={16} className="text-primary-400" />
                Desarrollado por
              </p>
              <div className="flex items-center gap-4">
                <a
                  href="https://new-portfolio-bynano.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-primary-400 transition-colors text-sm flex items-center gap-1"
                  title="Portfolio de Federico Marquez"
                >
                  Federico Marquez
                  <ExternalLink size={14} />
                </a>
                <div className="flex items-center gap-3">
                  <a
                    href="https://github.com/Nanomarquez/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-primary-400 transition-colors"
                    title="GitHub"
                    aria-label="GitHub de Federico Marquez"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                    </svg>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/-federico-marquez-/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-primary-400 transition-colors"
                    title="LinkedIn"
                    aria-label="LinkedIn de Federico Marquez"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </a>
                  <a
                    href="https://new-portfolio-bynano.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-primary-400 transition-colors"
                    title="Portfolio"
                    aria-label="Portfolio de Federico Marquez"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

