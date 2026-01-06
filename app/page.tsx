'use client';

import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import Testimonials from './components/Testimonials'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'
import { businessData } from './lib/business-data'

const trackConversion = (eventName: string, location: string) => {
  if (typeof window !== 'undefined' && window.dataLayer) {
    window.dataLayer.push({
      event: eventName,
      button_location: location,
      conversion_method: eventName.replace('_click', ''),
      conversion_action: 'click',
    });
  }
};

export default function HomePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MovingCompany',
    '@id': 'https://traslochimilanopro.it#business',
    name: businessData.name,
    image: 'https://traslochimilanopro.it/images/hero-movers.webp',
    telephone: businessData.phoneFormatted,
    email: businessData.email,
    url: 'https://traslochimilanopro.it',
    address: {
      '@type': 'PostalAddress',
      streetAddress: businessData.address.street,
      addressLocality: businessData.address.city,
      addressRegion: businessData.address.region,
      postalCode: businessData.address.postalCode,
      addressCountry: businessData.address.countryCode,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: businessData.coordinates.latitude,
      longitude: businessData.coordinates.longitude,
    },
    openingHoursSpecification: businessData.hours.structured.map(day => ({
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: day.day,
      opens: day.open,
      closes: day.close,
    })),
    priceRange: businessData.priceRange,
    areaServed: businessData.areasServed.map(area => ({
      '@type': 'City',
      name: area,
    })),
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Servizi Traslochi',
      itemListElement: businessData.services.map((service, idx) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: service.name,
          description: service.description,
        },
        position: idx + 1,
      })),
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5.0',
      reviewCount: '2',
      bestRating: '5',
      worstRating: '1',
    },
    review: [
      {
        '@type': 'Review',
        author: {
          '@type': 'Person',
          name: 'Klea Tanku',
        },
        reviewRating: {
          '@type': 'Rating',
          ratingValue: '5',
          bestRating: '5',
        },
        reviewBody: 'Servizio di traslochi a Milano davvero eccezionale! Ho recentemente utilizzato questa azienda per il mio trasloco e sono rimasta estremamente soddisfatta. Sono stati puntuali, organizzati e molto professionali.',
      },
      {
        '@type': 'Review',
        author: {
          '@type': 'Person',
          name: 'Cliente Verificato',
        },
        reviewRating: {
          '@type': 'Rating',
          ratingValue: '5',
          bestRating: '5',
        },
        reviewBody: 'Ho recentemente utilizzato questo servizio di traslochi per il mio trasferimento a Milano, e posso dire senza esitazioni che e stata la scelta migliore che potessi fare! Dal primo contatto fino al completamento del trasloco, tutto e stato gestito in modo impeccabile.',
      },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Header />
      <main className="pt-[120px]">
        <Hero />
        <Services />

        {/* Come Funziona */}
        <section id="come-funziona" className="py-16 md:py-24 bg-white">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Come Funziona</h2>
              <p className="text-lg text-gray-600">
                Richiedi un intervento traslochi in 3 semplici passi
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {[
                {
                  step: '1',
                  title: 'Chiama o Scrivi',
                  description: 'Contattaci telefonicamente o via WhatsApp. Descrivici il preventivo e ti daremo un preventivo immediato.',
                  icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  ),
                },
                {
                  step: '2',
                  title: 'Sopralluogo Gratuito',
                  description: 'Un nostro operatore valuta gli oggetti da traslocare e prepara un preventivo dettagliato senza impegno.',
                  icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  ),
                },
                {
                  step: '3',
                  title: 'Trasloco Completato',
                  description: 'Trasporto sicuro, montaggio mobili nella nuova casa. Pagamento solo a lavoro completato.',
                  icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  ),
                },
              ].map((item, idx) => (
                <div key={idx} className="text-center">
                  <div className="relative inline-flex items-center justify-center w-16 h-16 bg-orange-100 text-orange-600 rounded-full mb-4">
                    {item.icon}
                    <span className="absolute -top-1 -right-1 w-6 h-6 bg-blue-600 text-white text-xs font-bold rounded-full flex items-center justify-center">
                      {item.step}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Zone Servite */}
        <section id="zone" className="py-16 md:py-24 bg-blue-50">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Zone Servite</h2>
              <p className="text-lg text-gray-600">
                Operiamo in tutta Milano e Lombardia con interventi rapidi
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
              {businessData.areasServed.map((area, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-full px-4 py-2 shadow-sm border border-gray-100 hover:shadow-md hover:border-blue-200 transition-all cursor-default"
                >
                  <div className="flex items-center space-x-2">
                    <svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span className="font-medium text-gray-800">{area}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 text-center">
              <p className="text-gray-600 mb-4">
                Non trovi la tua zona? Chiamaci comunque, raggiungiamo anche altre localita!
              </p>
              <a
                href={`tel:${businessData.phoneFormatted}`}
                onClick={() => trackConversion('phone_click', 'zone_section')}
                className="inline-flex items-center space-x-2 text-blue-600 font-semibold hover:text-blue-700"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>Verifica Disponibilita</span>
              </a>
            </div>
          </div>
        </section>

        <Testimonials />

        {/* Google Maps & Reviews Section */}
        <section id="dove-siamo" className="py-16 md:py-24 bg-white">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Dove Siamo</h2>
              <p className="text-lg text-gray-600">
                La nostra sede a Milano - Facilmente raggiungibile
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 items-start">
              {/* Google Maps Embed */}
              <div className="rounded-2xl overflow-hidden shadow-lg h-[400px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2797.980888640392!2d9.165915799999999!3d45.4701889!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4786c1a648876375%3A0xdd9b044707ab1177!2sTraslochi%20Milano%20Pro!5e0!3m2!1sen!2sus!4v1767672107229!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Traslochi Milano Pro - Posizione"
                />
              </div>

              {/* Google Reviews - REAL */}
              <div className="bg-gray-50 rounded-2xl p-6 md:p-8">
                {/* Header with Google branding */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-3">
                    <svg className="w-8 h-8" viewBox="0 0 24 24">
                      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                    </svg>
                    <span className="font-bold text-gray-900">Recensioni Google</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl font-bold text-gray-900">5.0</span>
                    <div className="flex">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Real Reviews */}
                <div className="space-y-4">
                  {/* Review 1 - Klea Tanku */}
                  <div className="bg-white rounded-xl p-4 shadow-sm">
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                        <span className="font-bold text-purple-600">K</span>
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold text-gray-900">Klea Tanku</p>
                        <div className="flex items-center space-x-2">
                          <div className="flex">
                            {[1, 2, 3, 4, 5].map((i) => (
                              <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      &quot;Servizio di traslochi a Milano davvero eccezionale! Ho recentemente utilizzato questa azienda per il mio trasloco e sono rimasta estremamente soddisfatta. Sono stati puntuali, organizzati e molto professionali.&quot;
                    </p>
                  </div>

                  {/* Review 2 */}
                  <div className="bg-white rounded-xl p-4 shadow-sm">
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                        <span className="font-bold text-blue-600">C</span>
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold text-gray-900">Cliente Verificato</p>
                        <div className="flex items-center space-x-2">
                          <div className="flex">
                            {[1, 2, 3, 4, 5].map((i) => (
                              <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      &quot;Ho recentemente utilizzato questo servizio di traslochi per il mio trasferimento a Milano, e posso dire senza esitazioni che e stata la scelta migliore che potessi fare! Dal primo contatto fino al completamento del trasloco, tutto e stato gestito in modo impeccabile.&quot;
                    </p>
                  </div>
                </div>

                {/* Link to all reviews */}
                <a
                  href="https://maps.app.goo.gl/jQ2RtA3mCVesQScAA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 flex items-center justify-center space-x-2 text-blue-600 font-semibold hover:text-blue-700 py-3 border-t border-gray-200"
                >
                  <span>Vedi tutte le recensioni su Google</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section - Split Layout */}
        <section id="preventivo" className="py-16 md:py-24 bg-gradient-to-br from-blue-600 to-blue-700">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Hai Bisogno di un Trasloco a Milano?
              </h2>
              <p className="text-lg text-blue-100 max-w-2xl mx-auto">
                Chiamaci ora per un intervento rapido o compila il form per un preventivo gratuito. Siamo disponibili 24 ore su 24, 7 giorni su 7.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 items-start max-w-5xl mx-auto">
              {/* Left: Phone CTA */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center text-white">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-500 rounded-full mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-2">Chiamaci Subito</h3>
                <p className="text-blue-100 mb-6">
                  Per emergenze e interventi immediati<br />
                  Risposta rapida in 30 minuti
                </p>
                <a
                  href={`tel:${businessData.phoneFormatted}`}
                  onClick={() => trackConversion('phone_click', 'cta_section')}
                  className="inline-flex items-center justify-center space-x-2 bg-white text-blue-600 font-bold py-4 px-8 rounded-lg hover:bg-blue-50 transition-colors text-xl"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>{businessData.phone}</span>
                </a>
                <p className="text-sm text-blue-200 mt-4">Disponibile 24/7, anche festivi</p>

                {/* WhatsApp */}
                <div className="mt-6 pt-6 border-t border-white/20">
                  <p className="text-sm text-blue-100 mb-3">Oppure scrivici su WhatsApp</p>
                  <a
                    href={`https://wa.me/${businessData.phoneFormatted.replace(/\+/g, '')}`}
                    onClick={() => trackConversion('whatsapp_click', 'cta_section')}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center space-x-2 bg-green-500 text-white font-semibold py-3 px-6 rounded-lg hover:bg-green-600 transition-colors"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    <span>Chatta con noi</span>
                  </a>
                </div>
              </div>

              {/* Right: Contact Form */}
              <div id="contatti">
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
