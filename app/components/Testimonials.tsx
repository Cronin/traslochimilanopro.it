import Image from 'next/image';

const testimonials = [
  {
    name: 'Marco R.',
    location: 'Milano Centro',
    rating: 5,
    text: 'Servizio impeccabile! Hanno traslocato tutto il mio appartamento in mezza giornata. Professionali, puntuali e molto attenti ai dettagli. Consigliatissimi!',
    service: 'Trasloco Residenziale',
    avatar: '/images/avatar-marco.webp',
  },
  {
    name: 'Laura M.',
    location: 'Monza',
    rating: 5,
    text: 'Trasferimento ufficio senza intoppi. Hanno lavorato nel weekend per non interrompere la nostra attivita. Tutto perfetto, mobili rimontati alla perfezione.',
    service: 'Trasloco Ufficio',
    avatar: '/images/avatar-laura.webp',
  },
  {
    name: 'Giuseppe B.',
    location: 'Sesto San Giovanni',
    rating: 5,
    text: 'Ottimo rapporto qualita-prezzo. Il preventivo era chiaro e senza sorprese. Il team ha gestito anche il pianoforte con estrema cura. Bravissimi!',
    service: 'Trasloco con Pianoforte',
    avatar: '/images/avatar-giuseppe.webp',
  },
  {
    name: 'Francesca T.',
    location: 'Milano',
    rating: 5,
    text: 'Trasloco urgente organizzato in 48 ore. Nonostante i tempi stretti, tutto e andato liscio. Imballaggio professionale e nessun danno. Super consigliati!',
    service: 'Trasloco Urgente',
    avatar: '/images/avatar-francesca.webp',
  },
  {
    name: 'Alberto S.',
    location: 'Bergamo',
    rating: 5,
    text: 'Ho usufruito del servizio deposito per 3 mesi. Magazzino pulito e sicuro. Quando ho ritirato tutto era in perfette condizioni. Servizio eccellente.',
    service: 'Deposito e Custodia',
    avatar: '/images/avatar-alberto.webp',
  },
  {
    name: 'Silvia P.',
    location: 'Como',
    rating: 5,
    text: 'Trasloco internazionale verso la Svizzera gestito alla perfezione. Hanno curato tutte le pratiche doganali. Zero stress, massima professionalita.',
    service: 'Trasloco Internazionale',
    avatar: '/images/avatar-silvia.webp',
  },
]

export default function Testimonials() {
  return (
    <section id="recensioni" className="py-16 md:py-24 bg-gray-50">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Cosa Dicono i Nostri Clienti
          </h2>
          <p className="text-lg text-gray-600">
            La soddisfazione dei nostri clienti e la nostra priorita. Leggi le recensioni di chi ha gia scelto i nostri servizi.
          </p>
          {/* Rating summary */}
          <div className="flex items-center justify-center space-x-3 mt-6">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((i) => (
                <svg key={i} className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="font-bold text-xl text-gray-900">4.8/5</span>
            <span className="text-gray-500">su 150+ recensioni</span>
          </div>
        </div>

        {/* Testimonials grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-6 border border-gray-100"
            >
              {/* Stars */}
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Text */}
              <p className="text-gray-700 mb-4 leading-relaxed">
                &quot;{testimonial.text}&quot;
              </p>

              {/* Service badge */}
              <div className="inline-block bg-blue-50 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full mb-4">
                {testimonial.service}
              </div>

              {/* Author with avatar */}
              <div className="flex items-center space-x-3 pt-4 border-t border-gray-100">
                <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-200 flex-shrink-0">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    width={48}
                    height={48}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">{testimonial.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Statistics */}
        <div className="mt-16 grid grid-cols-3 gap-8 max-w-3xl mx-auto">
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600 mb-1">200+</div>
            <div className="text-gray-600 text-sm">Clienti Soddisfatti</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600 mb-1">15+</div>
            <div className="text-gray-600 text-sm">Anni di Esperienza</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600 mb-1">4.8/5</div>
            <div className="text-gray-600 text-sm">Rating Medio</div>
          </div>
        </div>
      </div>
    </section>
  )
}
