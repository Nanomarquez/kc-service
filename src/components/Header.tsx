import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const menuItems = [
    { label: 'Inicio', href: '#inicio' },
    { label: 'Servicios', href: '#servicios' },
    { label: 'Nosotros', href: '#nosotros' },
    { label: 'Contacto', href: '#contacto' },
  ]

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMobileMenuOpen(false)
    }
  }

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg'
          : 'bg-white/80 backdrop-blur-sm'
      }`}
    >
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <motion.a
            href="#inicio"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="flex items-center space-x-2"
            onClick={(e) => {
              e.preventDefault()
              scrollToSection('#inicio')
            }}
            aria-label="KC Service - Ir al inicio"
          >
            <img 
              src="/logo-kc-service.png" 
              alt="KC Service - Logo - Reparación de Electrodomésticos Profesional en Pilar, Buenos Aires"
              className="h-12 w-auto object-contain"
              style={{
                filter: 'brightness(0) saturate(100%) invert(54%) sepia(99%) saturate(2918%) hue-rotate(167deg) brightness(97%) contrast(92%)'
              }}
              width="120"
              height="48"
            />
          </motion.a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item, index) => (
              <motion.button
                key={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                onClick={() => scrollToSection(item.href)}
                className="text-gray-700 hover:text-primary-600 font-medium transition-colors duration-200"
              >
                {item.label}
              </motion.button>
            ))}
            <motion.a
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 }}
              href="https://wa.me/541141611724"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary-500 hover:bg-primary-600 text-white px-6 py-2 rounded-full font-semibold transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              WhatsApp
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden mt-4 pb-4 space-y-4"
            >
              {menuItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full text-left text-gray-700 hover:text-primary-600 font-medium py-2 transition-colors"
                >
                  {item.label}
                </button>
              ))}
              <a
                href="https://wa.me/541141611724"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-primary-500 hover:bg-primary-600 text-white px-6 py-2 rounded-full font-semibold text-center transition-all duration-200"
              >
                WhatsApp
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  )
}

export default Header

