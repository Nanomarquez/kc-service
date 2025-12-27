import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Star, MessageSquare, Send } from 'lucide-react'
import SlotCounter from 'react-slot-counter'

interface Testimonial {
  id: string
  name: string
  rating: number
  comment: string
  avatar?: string
  date: string
}

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([])
  const [newTestimonial, setNewTestimonial] = useState({
    name: '',
    rating: 0,
    comment: '',
  })
  const [hoveredStar, setHoveredStar] = useState(0)
  const [showForm, setShowForm] = useState(false)

  // Load testimonials from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('kc-service-testimonials')
    if (saved) {
      setTestimonials(JSON.parse(saved))
    } else {
      // Initial testimonials
      const initial: Testimonial[] = [
        {
          id: '1',
          name: 'María González',
          rating: 5,
          comment: 'Excelente servicio! Repararon mi heladera en el día y quedó perfecta. Muy profesionales y puntuales.',
          date: '2024-01-15',
        },
        {
          id: '2',
          name: 'Carlos Rodríguez',
          rating: 5,
          comment: 'Arreglaron mi aire acondicionado que no enfriaba. El técnico fue muy amable y explicó todo el proceso. Totalmente recomendado.',
          date: '2024-01-20',
        },
        {
          id: '3',
          name: 'Ana Martínez',
          rating: 4,
          comment: 'Buen servicio, llegaron a tiempo y solucionaron el problema de mi lavarropas. El precio fue justo.',
          date: '2024-02-01',
        },
        {
          id: '4',
          name: 'Juan Pérez',
          rating: 5,
          comment: 'Increíble atención! Mi lavavajillas quedó como nuevo. Definitivamente los volveré a llamar si necesito algo.',
          date: '2024-02-10',
        },
      ]
      setTestimonials(initial)
      localStorage.setItem('kc-service-testimonials', JSON.stringify(initial))
    }
  }, [])

  // Save to localStorage whenever testimonials change
  useEffect(() => {
    if (testimonials.length > 0) {
      localStorage.setItem('kc-service-testimonials', JSON.stringify(testimonials))
    }
  }, [testimonials])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (newTestimonial.name && newTestimonial.comment && newTestimonial.rating > 0) {
      const testimonial: Testimonial = {
        id: Date.now().toString(),
        name: newTestimonial.name,
        rating: newTestimonial.rating,
        comment: newTestimonial.comment,
        date: new Date().toISOString().split('T')[0],
      }
      setTestimonials([testimonial, ...testimonials])
      setNewTestimonial({ name: '', rating: 0, comment: '' })
      setShowForm(false)
    }
  }

  const averageRating = testimonials.length > 0
    ? testimonials.reduce((sum, t) => sum + t.rating, 0) / testimonials.length
    : 0

  const stats = [
    {
      value: testimonials.length,
      suffix: '+',
      label: 'Testimonios',
      displayValue: `${testimonials.length}+`,
    },
    {
      value: averageRating > 0 ? averageRating.toFixed(1) : '0.0',
      suffix: '/5',
      label: 'Calificación Promedio',
      displayValue: averageRating > 0 ? `${averageRating.toFixed(1)}/5` : '0.0/5',
    },
    {
      value: testimonials.filter(t => t.rating === 5).length,
      suffix: '+',
      label: '5 Estrellas',
      displayValue: `${testimonials.filter(t => t.rating === 5).length}+`,
    },
  ]

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(n => n[0])
      .join('')
      .toUpperCase()
      .slice(0, 2)
  }

  const getAvatarColor = (name: string) => {
    const colors = [
      'bg-gradient-to-br from-primary-500 to-primary-600',
      'bg-gradient-to-br from-accent-500 to-accent-600',
      'bg-gradient-to-br from-primary-400 to-primary-500',
      'bg-gradient-to-br from-accent-400 to-accent-500',
      'bg-gradient-to-br from-primary-600 to-accent-600',
      'bg-gradient-to-br from-accent-600 to-primary-600',
    ]
    const index = name.charCodeAt(0) % colors.length
    return colors[index]
  }

  return (
    <section id="testimonios" className="py-20 bg-gradient-to-br from-white via-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Lo que dicen nuestros <span className="text-primary-600">Clientes</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Tu opinión es importante para nosotros. Comparte tu experiencia con nuestro servicio.
          </p>
        </motion.div>

        {/* Add Testimonial Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12 text-center"
        >
          <button
            onClick={() => setShowForm(!showForm)}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-primary-500 to-accent-500 hover:from-primary-600 hover:to-accent-600 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <MessageSquare size={20} />
            <span>{showForm ? 'Cancelar' : 'Agregar Testimonio'}</span>
          </button>
        </motion.div>

        {/* Form */}
        {showForm && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="mb-12 max-w-2xl mx-auto"
          >
            <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Comparte tu experiencia</h3>
              
              {/* Name Input */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Nombre
                </label>
                <input
                  type="text"
                  value={newTestimonial.name}
                  onChange={(e) => setNewTestimonial({ ...newTestimonial, name: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                  placeholder="Tu nombre"
                  required
                />
              </div>

              {/* Rating */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Calificación
                </label>
                <div className="flex gap-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setNewTestimonial({ ...newTestimonial, rating: star })}
                      onMouseEnter={() => setHoveredStar(star)}
                      onMouseLeave={() => setHoveredStar(0)}
                      className="transition-transform hover:scale-110"
                    >
                      <Star
                        size={32}
                        className={`${
                          star <= (hoveredStar || newTestimonial.rating)
                            ? 'fill-primary-400 text-primary-400'
                            : 'text-gray-300'
                        } transition-colors`}
                      />
                    </button>
                  ))}
                </div>
              </div>

              {/* Comment Input */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Comentario
                </label>
                <textarea
                  value={newTestimonial.comment}
                  onChange={(e) => setNewTestimonial({ ...newTestimonial, comment: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all resize-none"
                  rows={4}
                  placeholder="Cuéntanos sobre tu experiencia..."
                  required
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-primary-500 to-accent-500 hover:from-primary-600 hover:to-accent-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
              >
                <Send size={20} />
                <span>Enviar Testimonio</span>
              </button>
            </form>
          </motion.div>
        )}

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
            >
              {/* Header */}
              <div className="flex items-start gap-4 mb-4">
                <div className={`w-12 h-12 ${getAvatarColor(testimonial.name)} rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0`}>
                  {getInitials(testimonial.name)}
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-gray-900 mb-1">{testimonial.name}</h4>
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        size={16}
                        className={`${
                          star <= testimonial.rating
                            ? 'fill-primary-400 text-primary-400'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Comment */}
              <p className="text-gray-600 leading-relaxed mb-4">{testimonial.comment}</p>

              {/* Date */}
              <p className="text-sm text-gray-400">
                {new Date(testimonial.date).toLocaleDateString('es-AR', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-primary-500 to-accent-500 rounded-3xl p-8 md:p-12 text-white"
        >
          <h3 className="text-3xl font-bold text-center mb-12">
            Estadísticas de Satisfacción
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-5xl font-bold mb-2">
                  {stat.label === 'Calificación Promedio' ? (
                    <div className="flex items-center justify-center gap-1">
                      <SlotCounter
                        value={averageRating > 0 ? parseFloat(averageRating.toFixed(1)) : 0}
                        duration={2.5}
                        animateOnVisible
                        numberSlotClassName="text-white"
                      />
                      <span className="text-white">/5</span>
                    </div>
                  ) : (
                    <SlotCounter
                      value={stat.displayValue}
                      duration={2.5}
                      animateOnVisible
                      numberSlotClassName="text-white"
                    />
                  )}
                </div>
                <div className="text-xl opacity-90">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonials

