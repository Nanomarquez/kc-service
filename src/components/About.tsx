import { motion } from 'framer-motion'
import { CheckCircle, Award, Users, TrendingUp } from 'lucide-react'
import SlotCounter from 'react-slot-counter';

const About = () => {
  const stats = [
    { icon: Award, value: 10, suffix: '+', label: 'Años de Experiencia' },
    { icon: Users, value: 500, suffix: '+', label: 'Clientes Satisfechos' },
    { icon: CheckCircle, value: 1000, suffix: '+', label: 'Reparaciones Exitosas' },
    { icon: TrendingUp, value: 98, suffix: '%', label: 'Tasa de Satisfacción' },
  ]

  const values = [
    'Reparación profesional y confiable',
    'Técnico certificado y experimentado',
    'Servicio rápido y eficiente',
    'Garantía en todos nuestros trabajos',
    'Precios justos y transparentes',
    'Atención personalizada',
  ]

  return (
    <section id="nosotros" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Sobre <span className="text-primary-600">KC Service</span>
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Técnicos especializado en la reparación de electrodomésticos,
              con años de experiencia en el sector. Dedicado a brindar un servicio de calidad,
              rápido y confiable para que tus electrodomésticos vuelvan a funcionar como nuevos.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Trabajamos con todas las marcas y modelos, ofreciendo soluciones efectivas y
              garantizadas. Nuestro compromiso es tu satisfacción.
            </p>
            <div className="space-y-3">
              {values.map((value, index) => (
                <motion.div
                  key={value}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-6 h-6 bg-primary-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="text-white" size={16} />
                  </div>
                  <span className="text-gray-700 font-medium">{value}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-accent-500 rounded-xl flex items-center justify-center mb-4">
                  <stat.icon className="text-white" size={24} />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">
                  <SlotCounter animateOnVisible value={`${stat.value}${stat.suffix}`} duration={2.5} />
                </div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About

