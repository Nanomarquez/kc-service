import { motion } from 'framer-motion'

const Brands = () => {
  const brands = [
    { name: 'Samsung', logo: '/samsung-logo.svg' },
    { name: 'LG', logo: '/lg-logo.png' },
    { name: 'Whirlpool', logo: '/whirlpool-logo.png' },
    { name: 'Bosch', logo: '/bosch-logo.png' },
    { name: 'BGH', logo: '/bgh-logo.png' },
    { name: 'Drean', logo: '/drean-logo.png' },
    { name: 'Electrolux', logo: '/electrolux-logo.svg' },
    { name: 'Philco', logo: '/philco-logo.png' },
    { name: 'Siemens', logo: '/siemens-logo.png' },
    { name: 'Gafa', logo: '/gafa-logo.png' },
    { name: 'Longvie', logo: '/longvie-logo.png' },
    { name: 'Atma', logo: '/atma-logo.png' },
  ]

  // Duplicar marcas para efecto infinito
  const duplicatedBrands = [...brands, ...brands]

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Marcas que <span className="text-primary-600">Trabajamos</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Reparamos todas las marcas principales de electrodomésticos
          </p>
        </motion.div>

        <div className="relative overflow-hidden py-8">
          {/* Gradient overlays for fade effect */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white via-white to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white via-white to-transparent z-10 pointer-events-none" />

          <div className="flex animate-scroll gap-4 md:gap-6">
            {duplicatedBrands.map((brand, index) => (
              <div
                key={`${brand.name}-${index}`}
                className="flex-shrink-0"
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="flex items-center justify-center h-20 w-44 sm:h-24 sm:w-52 md:h-28 md:w-56 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200 group px-4 py-3"
                >
                  <img
                    src={brand.logo}
                    alt={`${brand.name} logo - Reparación de electrodomésticos`}
                    className="max-h-full max-w-full object-contain opacity-75 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ 
                      maxHeight: '52px',
                      maxWidth: '150px',
                      height: 'auto',
                      width: 'auto'
                    }}
                    loading="lazy"
                    onError={(e) => {
                      // Fallback si la imagen no carga
                      e.currentTarget.style.display = 'none'
                    }}
                  />
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-50% - 1rem));
          }
        }
        .animate-scroll {
          animation: scroll 40s linear infinite;
          display: flex;
          width: fit-content;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  )
}

export default Brands

