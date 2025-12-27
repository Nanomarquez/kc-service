import { motion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'
import WspIcon from './WspIcon'

const Hero = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary-50 via-white to-accent-50">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-accent-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-primary-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Reparación de{' '}
              <span className="bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
                Electrodomésticos
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Servicio profesional y confiable para mantener tus electrodomésticos funcionando perfectamente
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <a
              href="https://wa.me/541141611724"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-primary-500 hover:bg-primary-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2"
            >
              <WspIcon size={34} />
              <span>Contactar por WhatsApp</span>
            </a>
            <a
              href="#servicios"
              className="group bg-white hover:bg-gray-50 text-gray-900 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl border-2 border-gray-200"
            >
              Ver Servicios
            </a>
          </motion.div>

          {/* <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto"
          >
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-100">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <Phone className="text-green-600" size={24} />
                </div>
                <div className="text-left">
                  <p className="text-sm text-gray-500">Teléfono</p>
                  <p className="text-lg font-semibold text-gray-900">11 4161-1724</p>
                </div>
              </div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-100">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                  <MapPin className="text-red-600" size={24} />
                </div>
                <div className="text-left">
                  <p className="text-sm text-gray-500">Ubicación</p>
                  <p className="text-lg font-semibold text-gray-900">H. Leguizamón 693</p>
                  <p className="text-sm text-gray-600">Pilar - Barrio San Alejo</p>
                </div>
              </div>
            </div>
          </motion.div> */}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <a href="#servicios" className="flex flex-col items-center gap-2 text-gray-400 hover:text-primary-600 transition-colors">
            <span className="text-sm font-medium">Explorar</span>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ArrowDown size={24} />
            </motion.div>
          </a>
        </motion.div>
      </div>

      <style>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  )
}

export default Hero

