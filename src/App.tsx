import { Helmet, HelmetProvider } from 'react-helmet-async'
import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import About from './components/About'
import Brands from './components/Brands'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'
import WhatsAppFloat from './components/WhatsAppFloat'

function App() {
  return (
    <HelmetProvider>
      <Helmet>
        <html lang="es" />
        <title>KC Service - Reparación de Electrodomésticos Profesional | Pilar, Buenos Aires</title>
        <meta name="description" content="Servicio profesional de reparación de aires acondicionados, lavarropas, heladeras y lavavajillas. Trabajos a domicilio en Pilar, Barrio San Alejo. WhatsApp: 11 4161-1724. Técnico certificado con años de experiencia." />
        <meta name="keywords" content="reparación electrodomésticos, aires acondicionados, lavarropas, heladeras, lavavajillas, servicio técnico, Pilar, San Alejo, reparación a domicilio, técnico certificado, reparación heladeras Pilar, reparación aire acondicionado Pilar" />
        <meta name="author" content="KC Service | Desarrollado por Federico Marquez" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow" />
        <meta name="geo.region" content="AR-B" />
        <meta name="geo.placename" content="Pilar, Buenos Aires" />
        <meta name="geo.position" content="-34.4589;-58.9142" />
        <meta name="ICBM" content="-34.4589, -58.9142" />
        <link rel="canonical" href="https://kc-service-weld.vercel.app" />
        
        {/* Open Graph */}
        <meta property="og:title" content="KC Service - Reparación de Electrodomésticos Profesional | Pilar" />
        <meta property="og:description" content="Servicio profesional de reparación de aires acondicionados, lavarropas, heladeras y lavavajillas. Trabajos a domicilio en Pilar, Barrio San Alejo. WhatsApp: 11 4161-1724" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://kc-service-weld.vercel.app" />
        <meta property="og:site_name" content="KC Service" />
        <meta property="og:locale" content="es_AR" />
        <meta property="og:locale:alternate" content="es_ES" />
        <meta property="og:image" content="https://kc-service-weld.vercel.app/logo-kc-service.png" />
        <meta property="og:image:secure_url" content="https://kc-service-weld.vercel.app/logo-kc-service.png" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:alt" content="KC Service - Logo - Reparación de Electrodomésticos Profesional en Pilar, Buenos Aires" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="KC Service - Reparación de Electrodomésticos Profesional" />
        <meta name="twitter:description" content="Servicio profesional de reparación de electrodomésticos a domicilio en Pilar, Buenos Aires" />
        <meta name="twitter:image" content="https://kc-service-weld.vercel.app/logo-kc-service.png" />
        <meta name="twitter:image:alt" content="KC Service - Logo - Reparación de Electrodomésticos Profesional" />
        <meta name="twitter:image:alt" content="KC Service - Reparación de Electrodomésticos" />
        
        {/* Structured Data - LocalBusiness */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "KC Service",
            "description": "Servicio profesional de reparación de electrodomésticos: aires acondicionados, lavarropas, heladeras y lavavajillas",
            "url": "https://kc-service-weld.vercel.app",
            "telephone": "+541141611724",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "H. Leguizamón 693",
              "addressLocality": "Pilar",
              "addressRegion": "Buenos Aires",
              "addressCountry": "AR"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": -34.4589,
              "longitude": -58.9142
            },
            "openingHoursSpecification": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday"
              ],
              "opens": "09:00",
              "closes": "20:00"
            },
            "serviceArea": {
              "@type": "City",
              "name": "Pilar"
            },
            "priceRange": "$$",
            "image": "https://kc-service-weld.vercel.app/logo-kc-service.png"
          })}
        </script>
        
        {/* Structured Data - Organization */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "KC Service",
            "url": "https://kc-service-weld.vercel.app",
            "logo": "https://kc-service-weld.vercel.app/logo-kc-service.png",
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+541141611724",
              "contactType": "customer service",
              "availableLanguage": "Spanish"
            },
            "sameAs": [
              "https://wa.me/541141611724"
            ]
          })}
        </script>
      </Helmet>
      
      <div className="min-h-screen">
        <Header />
        <main>
          <Hero />
          <Services />
          <Brands />
          <About />
          <Testimonials />
          <Contact />
        </main>
        <Footer />
        <WhatsAppFloat />
      </div>
    </HelmetProvider>
  )
}

export default App

