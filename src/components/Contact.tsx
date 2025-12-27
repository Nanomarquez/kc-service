import { motion } from 'framer-motion'
import { Phone, MapPin, MessageCircle, Clock } from 'lucide-react'

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: 'Teléfono',
      content: '11 4161-1724',
      link: 'tel:+541141611724',
      color: 'primary',
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      content: '11 4161-1724',
      link: 'https://wa.me/541141611724',
      color: 'accent',
    },
    {
      icon: MapPin,
      title: 'Dirección',
      content: 'H. Leguizamón 693',
      subContent: 'Pilar - Barrio San Alejo',
      link: 'https://www.google.com/maps/place/BUM,+Dr.+H.+Leguizam%C3%B3n+693,+B1630+Pilar+Centro,+Provincia+de+Buenos+Aires/data=!4m2!3m1!1s0x95bc9d241921ee0b:0xab9ab55e01a1a378?sa=X&ved=1t:242&ictx=111',
      color: 'primary',
    },
    {
      icon: Clock,
      title: 'Horarios',
      content: 'Lunes a Sábado',
      subContent: '9:00 AM - 8:00 PM',
      color: 'accent',
    },
  ]

  const getColorClasses = (color: string) => {
    const colors: Record<string, string> = {
      primary: 'bg-primary-100 text-primary-600',
      accent: 'bg-accent-100 text-accent-600',
    }
    return colors[color] || 'bg-gray-100 text-gray-600'
  }

  return (
    <section id="contacto" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Contáctanos
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Estamos listos para ayudarte. Contáctanos y te responderemos a la brevedad.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {contactInfo.map((info, index) => (
            <motion.div
              key={info.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              {info.link ? (
                <a
                  href={info.link}
                  target={info.link.startsWith('http') ? '_blank' : undefined}
                  rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="block bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group"
                >
                  <div className={`w-14 h-14 ${getColorClasses(info.color)} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <info.icon size={28} />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{info.title}</h3>
                  <p className="text-gray-700 font-medium">{info.content}</p>
                  {info.subContent && (
                    <p className="text-sm text-gray-600 mt-1">{info.subContent}</p>
                  )}
                </a>
              ) : (
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                  <div className={`w-14 h-14 ${getColorClasses(info.color)} rounded-xl flex items-center justify-center mb-4`}>
                    <info.icon size={28} />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{info.title}</h3>
                  <p className="text-gray-700 font-medium">{info.content}</p>
                  {info.subContent && (
                    <p className="text-sm text-gray-600 mt-1">{info.subContent}</p>
                  )}
                </div>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-primary-500 to-accent-500 rounded-3xl p-8 md:p-12 text-center text-white"
        >
          <h3 className="text-3xl font-bold mb-4">¿Necesitas ayuda ahora?</h3>
          <p className="text-xl mb-8 opacity-90">
            Contáctanos por WhatsApp y te responderemos de inmediato
          </p>
          <a
            href="https://wa.me/541141611724"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-white text-primary-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-50 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <MessageCircle size={24} />
            <span>Enviar Mensaje por WhatsApp</span>
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact

