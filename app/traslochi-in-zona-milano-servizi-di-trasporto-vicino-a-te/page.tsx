'use client';

import Header from '../components/Header';
import Footer from '../components/Footer';
import { businessData } from '../lib/business-data';

export default function TraslochiZonaMilanoPage() {
  return (
    <>
      <Header />
      <main className="pt-[120px] pb-16">
        <article className="container-custom max-w-4xl">
          <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-8 md:p-12 text-white mb-12">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">Traslochi in Zona Milano: Servizio Rapido Vicino a Te</h1>
            <p className="text-xl text-blue-100 mb-6">Operiamo in tutta Milano e provincia con interventi rapidi in ogni zona della citta e hinterland</p>
            <a href={`tel:${businessData.phoneFormatted}`} className="inline-flex bg-white text-blue-600 font-bold py-3 px-6 rounded-lg">
              Chiama {businessData.phone}
            </a>
          </div>

          <div className="prose prose-lg max-w-none">
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-4">Zone Servite a Milano</h2>
              <p className="text-gray-700 mb-6">Operiamo in tutte le zone di Milano e provincia con la stessa professionalita e rapidita. Interveniamo in:</p>
              
              <div className="grid md:grid-cols-3 gap-4">
                {businessData.areasServed.map((area, idx) => (
                  <div key={idx} className="bg-blue-50 rounded-lg p-4 flex items-center space-x-3">
                    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    </svg>
                    <span className="font-medium text-gray-800">{area}</span>
                  </div>
                ))}
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-4">Vantaggi del Servizio Locale</h2>
              <div className="space-y-4">
                {[
                  { title: 'Intervento Rapido', desc: 'Essendo basati a Milano, arriviamo in qualsiasi zona in 30-60 minuti per sopralluoghi urgenti' },
                  { title: 'Conoscenza del Territorio', desc: 'Conosciamo ogni zona, parcheggi, ZTL, vie critiche. Evitiamo problemi logistici che rallentano il trasloco' },
                  { title: 'Prezzi Competitivi Locali', desc: 'Nessun costo di trasferta. Per traslochi nella stessa zona, tariffe piu basse del 15-20%' },
                  { title: 'Flessibilita Oraria', desc: 'Possiamo organizzare traslochi anche in orari specifici per ZTL, permessi, esigenze condominiali' },
                  { title: 'Disponibilita Immediata', desc: 'Essendo locali, possiamo intervenire anche per traslochi urgenti con 24-48 ore di preavviso' },
                ].map((item, idx) => (
                  <div key={idx} className="bg-white rounded-xl p-6 shadow-md">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-700">{item.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-4">Traslochi tra Zone di Milano</h2>
              <p className="text-gray-700 mb-6">Traslochi all interno di Milano o tra Milano e hinterland hanno tariffe vantaggiose:</p>
              
              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 border-2 border-green-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Tariffe Traslochi Locali</h3>
                <ul className="space-y-3">
                  <li className="flex justify-between items-center py-2 border-b border-green-200">
                    <span className="text-gray-700">Stessa zona Milano (es. Centro - Centro)</span>
                    <span className="font-bold text-green-600">Da 280 €</span>
                  </li>
                  <li className="flex justify-between items-center py-2 border-b border-green-200">
                    <span className="text-gray-700">Milano Centro - Hinterland (max 15 km)</span>
                    <span className="font-bold text-green-600">Da 350 €</span>
                  </li>
                  <li className="flex justify-between items-center py-2 border-b border-green-200">
                    <span className="text-gray-700">Tra comuni provincia (max 30 km)</span>
                    <span className="font-bold text-green-600">Da 450 €</span>
                  </li>
                  <li className="flex justify-between items-center py-2">
                    <span className="text-gray-700">Milano - Bergamo/Monza/Como</span>
                    <span className="font-bold text-green-600">Da 600 €</span>
                  </li>
                </ul>
                <p className="text-sm text-gray-600 mt-4">Prezzi per monolocale/bilocale, servizio base con trasporto e manodopera</p>
              </div>
            </section>
          </div>

          <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-8 text-white text-center mt-12">
            <h2 className="text-3xl font-bold mb-4">Trova il Trasloco Piu Vicino a Te</h2>
            <p className="text-xl text-blue-100 mb-6">Chiamaci per verificare disponibilita nella tua zona e ricevere un preventivo immediato</p>
            <a href={`tel:${businessData.phoneFormatted}`} className="inline-flex bg-white text-blue-600 font-bold py-4 px-8 rounded-lg text-lg">
              Chiama {businessData.phone}
            </a>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
