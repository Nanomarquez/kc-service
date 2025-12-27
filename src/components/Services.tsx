import { motion } from 'framer-motion'
import { Wind, Sparkles, Snowflake, Droplets, Wrench, Clock, Shield, Home } from 'lucide-react'

const Services = () => {
  const services = [
    {
      icon: Wind,
      title: 'Aires Acondicionados',
      description: 'Reparación, mantenimiento e instalación de sistemas de aire acondicionado. Servicio técnico especializado.',
      color: 'from-primary-500 to-primary-600',
    },
    {
      icon: Sparkles,
      title: 'Lavarropas',
      description: 'Reparación de lavarropas de todas las marcas. Diagnóstico rápido y soluciones efectivas.',
      color: 'from-accent-500 to-accent-600',
    },
    {
      icon: Snowflake,
      title: 'Heladeras',
      description: 'Servicio técnico para heladeras y freezers. Reparación de sistemas de refrigeración.',
      color: 'from-primary-400 to-accent-400',
    },
    {
      icon: Droplets,
      title: 'Lavavajillas',
      description: 'Reparación y mantenimiento de lavavajillas. Soluciones para todos los problemas comunes.',
      color: 'from-accent-400 to-primary-500',
    },
  ]

  const features = [
    {
      icon: Home,
      title: 'Trabajos a Domicilio',
      description: 'Atención personalizada hasta tu hogar.',
    },
    {
      icon: Clock,
      title: 'Atención Rápida',
      description: 'Respuesta inmediata a tu consulta',
    },
    {
      icon: Wrench,
      title: 'Técnicos Certificados',
      description: 'Profesional con años de experiencia',
    },
    {
      icon: Shield,
      title: 'Garantía',
      description: 'Trabajos con garantía de calidad',
    },
  ]

  return (
    <section id="servicios" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Nuestros <span className="text-primary-600">Servicios</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Especialista en reparación de electrodomésticos.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary-500/0 to-accent-500/0 group-hover:from-primary-500/5 group-hover:to-accent-500/5 transition-all duration-300"></div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-primary-50 to-accent-50 rounded-3xl p-8 md:p-12"
        >
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
            ¿Por qué elegirnos?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <feature.icon className="text-primary-600" size={32} />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h4>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Services

