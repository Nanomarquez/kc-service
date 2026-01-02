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
        <link rel="canonical" href="https://www.kc-service.com.ar" />
        
        {/* Open Graph */}
        <meta property="og:title" content="KC Service - Reparación de Electrodomésticos Profesional | Pilar" />
        <meta property="og:description" content="Servicio profesional de reparación de aires acondicionados, lavarropas, heladeras y lavavajillas. Trabajos a domicilio en Pilar, Barrio San Alejo. WhatsApp: 11 4161-1724" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.kc-service.com.ar" />
        <meta property="og:site_name" content="KC Service" />
        <meta property="og:locale" content="es_AR" />
        <meta property="og:locale:alternate" content="es_ES" />
        <meta property="og:image" content="https://www.kc-service.com.ar/og-image.png" />
        <meta property="og:image:secure_url" content="https://www.kc-service.com.ar/og-image.png" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="KC Service - Logo - Reparación de Electrodomésticos Profesional en Pilar, Buenos Aires" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="KC Service - Reparación de Electrodomésticos Profesional" />
        <meta name="twitter:description" content="Servicio profesional de reparación de electrodomésticos a domicilio en Pilar, Buenos Aires" />
        <meta name="twitter:image" content="https://www.kc-service.com.ar/og-image.png" />
        <meta name="twitter:image:alt" content="KC Service - Logo - Reparación de Electrodomésticos Profesional" />
        <meta name="twitter:image:alt" content="KC Service - Reparación de Electrodomésticos" />
        
        {/* Structured Data - LocalBusiness */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "KC Service",
            "description": "Servicio profesional de reparación de electrodomésticos: aires acondicionados, lavarropas, heladeras y lavavajillas",
            "url": "https://www.kc-service.com.ar",
            "telephone": "+541141611724",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "H. Leguizamón 693",
              "addressLocality": "Pilar",
              "addressRegion": "Buenos Aires",
              "addressCountry": "AR",
              "postalCode": "B1630"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": -34.4589,
              "longitude": -58.9142
            },
            "openingHoursSpecification": [
              {
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
              }
            ],
            "serviceArea": {
              "@type": "City",
              "name": "Pilar"
            },
            "priceRange": "$$",
            "image": "https://www.kc-service.com.ar/og-image.png",
            "logo": "https://www.kc-service.com.ar/logo-kc-service.png",
            "potentialAction": [
              {
                "@type": "CommunicateAction",
                "target": {
                  "@type": "EntryPoint",
                  "urlTemplate": "https://wa.me/541141611724",
                  "actionPlatform": [
                    "http://schema.org/WhatsAppAction",
                    "https://www.google.com/search?q=kc+service"
                  ]
                },
                "result": {
                  "@type": "Message",
                  "name": "Enviar WhatsApp a KC Service"
                }
              },
              {
                "@type": "CommunicateAction",
                "target": {
                  "@type": "EntryPoint",
                  "urlTemplate": "tel:+541141611724",
                  "actionPlatform": [
                    "http://schema.org/TelephoneAction",
                    "https://www.google.com/search?q=kc+service"
                  ]
                },
                "result": {
                  "@type": "CallAction",
                  "name": "Llamar a KC Service"
                }
              },
              {
                "@type": "ViewAction",
                "target": {
                  "@type": "EntryPoint",
                  "urlTemplate": "https://www.google.com/maps/place/BUM,+Dr.+H.+Leguizam%C3%B3n+693,+B1630+Pilar+Centro,+Provincia+de+Buenos+Aires",
                  "actionPlatform": [
                    "http://schema.org/WebPlatform",
                    "https://www.google.com/search?q=kc+service"
                  ]
                },
                "result": {
                  "@type": "Place",
                  "name": "Ver ubicación de KC Service"
                }
              }
            ],
            "areaServed": {
              "@type": "City",
              "name": "Pilar",
              "sameAs": "https://es.wikipedia.org/wiki/Pilar_(Buenos_Aires)"
            }
          })}
        </script>
        
        {/* Structured Data - Organization */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "KC Service",
            "url": "https://www.kc-service.com.ar",
            "logo": "https://www.kc-service.com.ar/logo-kc-service.png",
            "contactPoint": [
              {
                "@type": "ContactPoint",
                "telephone": "+541141611724",
                "contactType": "customer service",
                "availableLanguage": ["Spanish", "es"],
                "areaServed": "AR",
                "contactOption": ["TollFree", "HearingImpairedSupported"]
              }
            ],
            "sameAs": [
              "https://wa.me/541141611724"
            ]
          })}
        </script>
        
        {/* Structured Data - WebSite */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "KC Service - Reparación de Electrodomésticos",
            "url": "https://www.kc-service.com.ar",
            "description": "Servicio profesional de reparación de electrodomésticos en Pilar, Buenos Aires",
            "publisher": {
              "@type": "Organization",
              "name": "KC Service",
              "logo": {
                "@type": "ImageObject",
                "url": "https://www.kc-service.com.ar/logo-kc-service.png"
              }
            },
            "potentialAction": {
              "@type": "SearchAction",
              "target": {
                "@type": "EntryPoint",
                "urlTemplate": "https://www.kc-service.com.ar/?q={search_term_string}"
              },
              "query-input": "required name=search_term_string"
            }
          })}
        </script>
        
        {/* Structured Data - BreadcrumbList */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Inicio",
                "item": "https://www.kc-service.com.ar/#inicio"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Servicios",
                "item": "https://www.kc-service.com.ar/#servicios"
              },
              {
                "@type": "ListItem",
                "position": 3,
                "name": "Nosotros",
                "item": "https://www.kc-service.com.ar/#nosotros"
              },
              {
                "@type": "ListItem",
                "position": 4,
                "name": "Contacto",
                "item": "https://www.kc-service.com.ar/#contacto"
              }
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

