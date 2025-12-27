import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import WspIcon from './WspIcon'

const WhatsAppFloat = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById('inicio')
      if (heroSection) {
        const rect = heroSection.getBoundingClientRect()
        // Si el Hero está fuera de la vista (scrolleado hacia abajo)
        setIsVisible(rect.bottom < 0)
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Check initial state

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.a
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{
            opacity: 1,
            scale: 1,
            y: [0, -10, 0]
          }}
          exit={{ opacity: 0, scale: 0.7 }}
          transition={{
            opacity: { duration: 0.15, ease: "easeOut" },
            scale: {
              type: "spring",
              stiffness: 500,
              damping: 25,
              duration: 0.3
            },
            y: {
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.3
            }
          }}
          href="https://wa.me/541141611724"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 z-50 bg-primary-500 hover:bg-primary-600 text-white rounded-full p-4 shadow-2xl hover:shadow-primary-500/50 transition-all duration-300 group"
          aria-label="Contactar por WhatsApp"
        >
          <WspIcon size={28} />

          {/* Pulse animation */}
          <motion.div
            className="absolute inset-0 rounded-full bg-primary-500"
            animate={{
              scale: [1, 1.5, 1.5],
              opacity: [0.7, 0, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeOut"
            }}
          />
        </motion.a>
      )}
    </AnimatePresence>
  )
}

export default WhatsAppFloat

