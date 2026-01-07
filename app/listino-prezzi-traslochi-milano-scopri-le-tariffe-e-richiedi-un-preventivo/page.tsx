'use client';

import Header from '../components/Header';
import Footer from '../components/Footer';
import { businessData } from '../lib/business-data';

export default function ListinoPrezziPage() {
  return (
    <>
      <Header />
      <main className="pt-[120px] pb-16">
        <article className="container-custom max-w-4xl">
          <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-8 md:p-12 text-white mb-12">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">Listino Prezzi Traslochi Milano 2025</h1>
            <p className="text-xl text-blue-100 mb-6">Tariffe trasparenti per tutti i servizi di trasloco. Nessun costo nascosto, preventivo chiaro e dettagliato</p>
            <a href={`tel:${businessData.phoneFormatted}`} className="inline-flex items-center space-x-2 bg-white text-blue-600 font-bold py-3 px-6 rounded-lg">
              <span>Preventivo Gratuito: {businessData.phone}</span>
            </a>
          </div>

          <div className="prose prose-lg max-w-none">
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-4">Tariffe Base per Metratura</h2>
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <table className="w-full">
                  <thead className="bg-blue-600 text-white">
                    <tr>
                      <th className="px-6 py-4 text-left">Tipologia</th>
                      <th className="px-6 py-4 text-left">Metratura</th>
                      <th className="px-6 py-4 text-left">Prezzo (locale)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y">
                    {[
                      ['Monolocale', '30-40 m²', '300 - 500 €'],
                      ['Bilocale', '50-60 m²', '450 - 700 €'],
                      ['Trilocale', '70-90 m²', '600 - 1.000 €'],
                      ['Quadrilocale', '100-120 m²', '900 - 1.500 €'],
                      ['Villa/Attico', '150+ m²', '1.500 - 3.000 €'],
                    ].map(([tipo, mq, prezzo], idx) => (
                      <tr key={idx}>
                        <td className="px-6 py-4 font-semibold">{tipo}</td>
                        <td className="px-6 py-4">{mq}</td>
                        <td className="px-6 py-4 text-blue-600 font-bold">{prezzo}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-4">Servizi Aggiuntivi</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  { servizio: 'Imballaggio professionale', prezzo: '150 - 400 €' },
                  { servizio: 'Smontaggio/montaggio mobili', prezzo: '100 - 300 €' },
                  { servizio: 'Salita scale (per piano)', prezzo: '20 - 50 €' },
                  { servizio: 'Deposito mobili (mensile)', prezzo: '80 - 200 €' },
                  { servizio: 'Trasporto pianoforte', prezzo: '200 - 400 €' },
                  { servizio: 'Trasporto cassaforte', prezzo: '150 - 350 €' },
                  { servizio: 'Assicurazione completa', prezzo: '1-3% valore' },
                  { servizio: 'Trasloco urgente 24h', prezzo: '+30-50%' },
                ].map((item, idx) => (
                  <div key={idx} className="bg-gray-50 rounded-lg p-4 flex justify-between items-center">
                    <span className="text-gray-700 font-medium">{item.servizio}</span>
                    <span className="text-blue-600 font-bold">{item.prezzo}</span>
                  </div>
                ))}
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-4">Tariffe Chilometriche per Lunghe Distanze</h2>
              <div className="bg-blue-50 rounded-xl p-6">
                <ul className="space-y-3">
                  <li className="flex justify-between"><span>Furgone piccolo (12-15 m³)</span><span className="font-bold">1,50 - 2,00 €/km</span></li>
                  <li className="flex justify-between"><span>Furgone medio (20-30 m³)</span><span className="font-bold">2,00 - 2,50 €/km</span></li>
                  <li className="flex justify-between"><span>Furgone grande (35-50 m³)</span><span className="font-bold">2,50 - 3,50 €/km</span></li>
                </ul>
                <p className="text-sm text-gray-600 mt-4">+ manodopera e servizi di carico/scarico</p>
              </div>
            </section>

            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6">
              <h3 className="font-bold text-gray-900 mb-2">Nota Importante</h3>
              <p className="text-gray-700">Questi prezzi sono indicativi. Per un preventivo preciso e vincolante, contattaci per un sopralluogo gratuito. Ogni trasloco e unico e richiede una valutazione personalizzata.</p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-8 text-white text-center mt-12">
            <h2 className="text-3xl font-bold mb-4">Richiedi il Tuo Preventivo Personalizzato</h2>
            <p className="text-xl text-blue-100 mb-6">Sopralluogo gratuito e preventivo dettagliato senza impegno</p>
            <a href={`tel:${businessData.phoneFormatted}`} className="inline-flex items-center bg-white text-blue-600 font-bold py-4 px-8 rounded-lg text-lg">
              Chiama {businessData.phone}
            </a>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
