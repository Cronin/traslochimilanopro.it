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
    image: 'https://traslochimilanopro.it/images/hero-main.webp',
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
      ratingValue: '4.8',
      reviewCount: '150',
      bestRating: '5',
      worstRating: '1',
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Header />
      <main>
        <Hero />
        <Services />

        {/* How it works */}
        <section id="come-funziona" className="section-padding bg-white">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="heading-lg mb-4">Come Funziona</h2>
              <p className="text-xl text-gray-600">
                Organizza il tuo trasloco in 3 semplici passi
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  step: '1',
                  title: 'Richiedi Preventivo',
                  description: 'Contattaci telefonicamente o via form. Descrivi le tue esigenze e ricevi un preventivo gratuito e senza impegno.',
                  icon: (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  ),
                },
                {
                  step: '2',
                  title: 'Sopralluogo Gratuito',
                  description: 'Un nostro esperto effettua un sopralluogo per valutare volumi e specifiche esigenze. Preventivo definitivo in 24h.',
                  icon: (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                  ),
                },
                {
                  step: '3',
                  title: 'Trasloco Garantito',
                  description: 'Il giorno stabilito, il nostro team si occupa di tutto: imballaggio, trasporto, montaggio. Tu rilassati, pensiamo a tutto noi.',
                  icon: (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  ),
                },
              ].map((item, idx) => (
                <div key={idx} className="relative text-center">
                  <div className="relative inline-block mb-6">
                    <div className="w-20 h-20 bg-primary-600 rounded-full flex items-center justify-center">
                      <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        {item.icon}
                      </svg>
                    </div>
                    <div className="absolute -top-2 -right-2 w-10 h-10 bg-accent-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                      {item.step}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Areas served */}
        <section id="zone" className="section-padding bg-gradient-to-br from-primary-50 to-accent-50">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="heading-lg mb-4">Zone Servite</h2>
              <p className="text-xl text-gray-600">
                Operiamo in tutta Milano e provincia, Lombardia e Nord Italia
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {businessData.areasServed.map((area, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-lg shadow-md p-4 text-center hover:shadow-lg hover:scale-105 transition-all"
                >
                  <div className="w-10 h-10 bg-primary-100 rounded-full mx-auto mb-2 flex items-center justify-center">
                    <svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div className="font-semibold text-gray-900">{area}</div>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <p className="text-gray-600 mb-6">
                Non trovi la tua zona? Chiamaci comunque, operiamo in tutta la Lombardia!
              </p>
              <a
                href={`tel:${businessData.phoneFormatted}`}
                onClick={() => trackConversion('phone_click', 'zone_section')}
                className="btn-primary inline-flex items-center space-x-2"
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

        {/* Final CTA with Contact Form */}
        <section id="contatti" className="section-padding bg-gradient-to-br from-primary-600 to-primary-700 text-white">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="heading-lg mb-6">Hai Bisogno di un Trasloco a Milano?</h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
                Chiamaci ora per un preventivo gratuito o compila il form. Siamo disponibili 24 ore su 24, 7 giorni su 7.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 items-start max-w-6xl mx-auto">
              {/* Left: Primary CTA - Phone */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-accent-500 rounded-full mb-6">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <h3 className="text-3xl font-bold mb-4">Chiamaci Subito</h3>
                  <p className="text-lg mb-8 opacity-90">
                    Per preventivi e informazioni<br />
                    Risposta immediata garantita
                  </p>
                  <a
                    href={`tel:${businessData.phoneFormatted}`}
                    onClick={() => trackConversion('phone_click', 'final_cta')}
                    className="bg-white text-primary-600 hover:bg-gray-100 font-bold py-5 px-10 rounded-xl transition-all duration-200 shadow-xl hover:shadow-2xl inline-flex items-center justify-center space-x-3 text-2xl hover:scale-105"
                  >
                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span>{businessData.phone}</span>
                  </a>
                  <p className="text-sm mt-6 opacity-75">Disponibile 24/7, anche festivi</p>

                  {/* WhatsApp Button */}
                  <div className="mt-6 pt-6 border-t border-white/20">
                    <p className="text-sm mb-4 opacity-90">Oppure scrivici su WhatsApp</p>
                    <a
                      href={`https://wa.me/${businessData.phoneFormatted.replace(/\+/g, '')}`}
                      onClick={() => trackConversion('whatsapp_click', 'final_cta')}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 inline-flex items-center justify-center space-x-2"
                    >
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                      </svg>
                      <span>Chatta con noi</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Right: Secondary CTA - Contact Form */}
              <div>
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
