import Link from 'next/link'
import { businessData } from '@/app/lib/business-data'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container-custom py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company info */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Traslochi Milano Pro</h3>
            <p className="text-sm mb-4">
              Servizio traslochi professionale a Milano e provincia. Personale qualificato, disponibili 24/7.
            </p>
            <div className="flex items-center space-x-3 mt-4">
              <div className="bg-primary-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                Assicurati
              </div>
              <div className="bg-green-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                24/7
              </div>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Link Rapidi</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#servizi" className="hover:text-white transition-colors">Servizi</a></li>
              <li><a href="#come-funziona" className="hover:text-white transition-colors">Come Funziona</a></li>
              <li><a href="#zone" className="hover:text-white transition-colors">Zone Servite</a></li>
              <li><a href="#recensioni" className="hover:text-white transition-colors">Recensioni</a></li>
              <li><a href="#contatti" className="hover:text-white transition-colors">Contatti</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Servizi Principali</h3>
            <ul className="space-y-2 text-sm">
              {businessData.services.slice(0, 6).map(service => (
                <li key={service.slug}>
                  <a href="#servizi" className="hover:text-white transition-colors">
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Contatti</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-2">
                <svg className="w-5 h-5 text-primary-400 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>{businessData.address.fullAddress}</span>
              </li>
              <li className="flex items-center space-x-2">
                <svg className="w-5 h-5 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href={`tel:${businessData.phoneFormatted}`} className="hover:text-white transition-colors font-semibold">
                  {businessData.phone}
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <svg className="w-5 h-5 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href={`mailto:${businessData.email}`} className="hover:text-white transition-colors">
                  {businessData.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-sm">
            <p>&copy; {currentYear} {businessData.name}. Tutti i diritti riservati.</p>
            <div className="flex space-x-6">
              <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link href="/cookie" className="hover:text-white transition-colors">Cookie Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
