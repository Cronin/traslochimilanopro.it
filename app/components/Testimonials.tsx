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

        {/* Trustpilot Section */}
        <div className="mt-16 pt-12 border-t border-gray-200">
          <div className="flex flex-col items-center justify-center">
            <p className="text-gray-500 text-sm mb-4">Le nostre recensioni su</p>
            <a
              href="https://www.trustpilot.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center hover:opacity-80 transition-opacity"
            >
              {/* Trustpilot Logo */}
              <svg className="h-8 mb-3" viewBox="0 0 126 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M33.076 10.148h-6.514V7.036h16.752v3.112h-6.514v17.096h-3.724V10.148zM44.152 12.096h3.388v2.576h.056c.168-.448.42-.868.756-1.26.336-.392.728-.728 1.176-1.008.448-.28.924-.504 1.428-.672.504-.168 1.008-.252 1.512-.252.392 0 .672.014.84.042.168.028.336.056.504.084v3.248c-.28-.056-.546-.098-.798-.126-.252-.028-.518-.042-.798-.042-.56 0-1.092.098-1.596.294-.504.196-.952.504-1.344.924-.392.42-.7.952-.924 1.596-.224.644-.336 1.414-.336 2.31v7.42h-3.864V12.096zM66.304 25.472c-.616.616-1.33 1.078-2.142 1.386-.812.308-1.722.462-2.73.462-1.008 0-1.918-.154-2.73-.462-.812-.308-1.526-.77-2.142-1.386-.616-.616-1.092-1.386-1.428-2.31-.336-.924-.504-2.002-.504-3.234v-7.84h3.864v7.42c0 .784.084 1.456.252 2.016.168.56.406 1.022.714 1.386.308.364.686.63 1.134.798.448.168.952.252 1.512.252s1.064-.084 1.512-.252c.448-.168.826-.434 1.134-.798.308-.364.546-.826.714-1.386.168-.56.252-1.232.252-2.016v-7.42h3.864v7.84c0 1.232-.168 2.31-.504 3.234-.336.924-.812 1.694-1.428 2.31zM71.204 18.64c0-.644.084-1.232.252-1.764.168-.532.42-.994.756-1.386.336-.392.756-.7 1.26-.924.504-.224 1.092-.336 1.764-.336.448 0 .868.056 1.26.168.392.112.742.28 1.05.504l-1.092 2.52c-.196-.14-.406-.252-.63-.336-.224-.084-.462-.126-.714-.126-.672 0-1.176.224-1.512.672-.336.448-.504 1.106-.504 1.974v6.62h-3.864l-.026-7.586zM78.508 18.108c0-1.064.168-2.016.504-2.856.336-.84.798-1.554 1.386-2.142.588-.588 1.288-1.036 2.1-1.344.812-.308 1.694-.462 2.646-.462.952 0 1.834.154 2.646.462.812.308 1.512.756 2.1 1.344.588.588 1.05 1.302 1.386 2.142.336.84.504 1.792.504 2.856 0 1.064-.168 2.016-.504 2.856-.336.84-.798 1.554-1.386 2.142-.588.588-1.288 1.036-2.1 1.344-.812.308-1.694.462-2.646.462-.952 0-1.834-.154-2.646-.462-.812-.308-1.512-.756-2.1-1.344-.588-.588-1.05-1.302-1.386-2.142-.336-.84-.504-1.792-.504-2.856zm3.948 0c0 .56.07 1.078.21 1.554.14.476.35.896.63 1.26.28.364.63.644 1.05.84.42.196.91.294 1.47.294.56 0 1.05-.098 1.47-.294.42-.196.77-.476 1.05-.84.28-.364.49-.784.63-1.26.14-.476.21-.994.21-1.554 0-.56-.07-1.078-.21-1.554-.14-.476-.35-.896-.63-1.26-.28-.364-.63-.644-1.05-.84-.42-.196-.91-.294-1.47-.294-.56 0-1.05.098-1.47.294-.42.196-.77.476-1.05.84-.28.364-.49.784-.63 1.26-.14.476-.21.994-.21 1.554zM93.38 12.096h3.388v2.016h.056c.448-.728 1.036-1.302 1.764-1.722.728-.42 1.568-.63 2.52-.63.784 0 1.498.14 2.142.42.644.28 1.19.686 1.638 1.218.448.532.798 1.176 1.05 1.932.252.756.378 1.61.378 2.562 0 .896-.126 1.722-.378 2.478-.252.756-.602 1.414-1.05 1.974-.448.56-.994 1.008-1.638 1.344-.644.336-1.358.504-2.142.504-.448 0-.896-.056-1.344-.168-.448-.112-.854-.266-1.218-.462-.364-.196-.7-.434-1.008-.714-.308-.28-.546-.574-.714-.882h-.056v7.14h-3.864l.476-17.01zm3.864 5.964c0 .56.07 1.078.21 1.554.14.476.35.896.63 1.26.28.364.616.644 1.008.84.392.196.854.294 1.386.294.532 0 .994-.098 1.386-.294.392-.196.728-.476 1.008-.84.28-.364.49-.784.63-1.26.14-.476.21-.994.21-1.554 0-.56-.07-1.078-.21-1.554-.14-.476-.35-.896-.63-1.26-.28-.364-.616-.644-1.008-.84-.392-.196-.854-.294-1.386-.294-.532 0-.994.098-1.386.294-.392.196-.728.476-1.008.84-.28.364-.49.784-.63 1.26-.14.476-.21.994-.21 1.554zM109.36 7.036h3.864v3.36h-3.864v-3.36zm0 5.06h3.864v15.136h-3.864V12.096zM116.152 7.036h3.864v20.196h-3.864V7.036zM121.36 18.108c0-1.064.168-2.016.504-2.856.336-.84.798-1.554 1.386-2.142.588-.588 1.288-1.036 2.1-1.344.812-.308 1.694-.462 2.646-.462.952 0 1.834.154 2.646.462.812.308 1.512.756 2.1 1.344.588.588 1.05 1.302 1.386 2.142.336.84.504 1.792.504 2.856 0 1.064-.168 2.016-.504 2.856-.336.84-.798 1.554-1.386 2.142-.588.588-1.288 1.036-2.1 1.344-.812.308-1.694.462-2.646.462-.952 0-1.834-.154-2.646-.462-.812-.308-1.512-.756-2.1-1.344-.588-.588-1.05-1.302-1.386-2.142-.336-.84-.504-1.792-.504-2.856zm3.948 0c0 .56.07 1.078.21 1.554.14.476.35.896.63 1.26.28.364.63.644 1.05.84.42.196.91.294 1.47.294.56 0 1.05-.098 1.47-.294.42-.196.77-.476 1.05-.84.28-.364.49-.784.63-1.26.14-.476.21-.994.21-1.554 0-.56-.07-1.078-.21-1.554-.14-.476-.35-.896-.63-1.26-.28-.364-.63-.644-1.05-.84-.42-.196-.91-.294-1.47-.294-.56 0-1.05.098-1.47.294-.42.196-.77.476-1.05.84-.28.364-.49.784-.63 1.26-.14.476-.21.994-.21 1.554z" fill="#191919"/>
                <path d="M0 31l11.8-3.6 5.2 3.6H0z" fill="#00B67A"/>
                <path d="M24.4 11.8L15.6 0 11.8 27.4l12.6-15.6z" fill="#00B67A"/>
                <path d="M24.4 11.8l-8.2 6 1.6 9.6 6.6-15.6z" fill="#005128"/>
                <path d="M0 11.8L6.6 0l5.2 27.4L0 11.8z" fill="#00B67A"/>
              </svg>

              {/* Trustpilot Stars */}
              <div className="flex items-center space-x-1 mb-2">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="w-7 h-7 bg-[#00b67a] flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                ))}
              </div>

              <div className="flex items-center space-x-2">
                <span className="font-bold text-gray-900">Eccellente</span>
                <span className="text-gray-500">4.8 su 5</span>
              </div>
              <p className="text-gray-400 text-sm mt-1">Basato su 150+ recensioni</p>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
