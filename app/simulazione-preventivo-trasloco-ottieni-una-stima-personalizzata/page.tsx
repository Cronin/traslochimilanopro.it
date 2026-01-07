'use client';

import Header from '../components/Header';
import Footer from '../components/Footer';
import { businessData } from '../lib/business-data';

export default function SimulazionePreventivoPage() {
  return (
    <>
      <Header />
      <main className="pt-[120px] pb-16">
        <article className="container-custom max-w-4xl">
          <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-8 md:p-12 text-white mb-12">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">Simulazione Preventivo Trasloco: Stima Personalizzata</h1>
            <p className="text-xl text-blue-100 mb-6">Calcola una stima orientativa del costo del tuo trasloco a Milano e ricevi un preventivo dettagliato gratuito</p>
            <a href={`tel:${businessData.phoneFormatted}`} className="inline-flex bg-white text-blue-600 font-bold py-3 px-6 rounded-lg">
              Preventivo Gratuito: {businessData.phone}
            </a>
          </div>

          <div className="prose prose-lg max-w-none">
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-4">Come Calcolare il Costo del Tuo Trasloco</h2>
              <p className="text-gray-700 mb-6">Il costo finale di un trasloco dipende da diversi fattori. Ecco come fare una stima accurata:</p>

              <div className="bg-blue-50 rounded-xl p-6 mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Formula Calcolo Preventivo</h3>
                <div className="bg-white rounded-lg p-6 text-center">
                  <p className="text-lg text-gray-700 mb-2">Costo Totale =</p>
                  <p className="text-2xl font-bold text-blue-600">Base Metratura + Distanza + Servizi Extra + Maggiorazioni</p>
                </div>
              </div>

              <div className="space-y-8">
                <div className="bg-white rounded-xl p-6 shadow-md">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">1. Costo Base per Metratura</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {[
                      ['Monolocale (30-40 m²)', '300 €'],
                      ['Bilocale (50-60 m²)', '500 €'],
                      ['Trilocale (70-90 m²)', '700 €'],
                      ['Quadrilocale (100-120 m²)', '1.100 €'],
                      ['Villa (150+ m²)', '1.800 €'],
                    ].map(([tipo, base], idx) => (
                      <div key={idx} className="flex justify-between items-center bg-blue-50 rounded p-3">
                        <span className="text-gray-700">{tipo}</span>
                        <span className="font-bold text-blue-600">{base}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-md">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">2. Costo Distanza</h3>
                  <ul className="space-y-2">
                    <li className="flex justify-between py-2 border-b">
                      <span className="text-gray-700">0-20 km (locale Milano)</span>
                      <span className="font-bold text-green-600">Incluso</span>
                    </li>
                    <li className="flex justify-between py-2 border-b">
                      <span className="text-gray-700">21-50 km (provincia)</span>
                      <span className="font-bold text-blue-600">+50-100 €</span>
                    </li>
                    <li className="flex justify-between py-2 border-b">
                      <span className="text-gray-700">51-100 km (regionale)</span>
                      <span className="font-bold text-blue-600">+100-200 €</span>
                    </li>
                    <li className="flex justify-between py-2">
                      <span className="text-gray-700">Oltre 100 km</span>
                      <span className="font-bold text-blue-600">Tariffa al km</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-md">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">3. Servizi Extra</h3>
                  <div className="grid md:grid-cols-2 gap-3">
                    {[
                      ['Imballaggio completo', '+150-400 €'],
                      ['Smontaggio/montaggio mobili', '+100-300 €'],
                      ['Salita scale (per piano)', '+20-50 €'],
                      ['Deposito temporaneo (mese)', '+80-200 €'],
                      ['Trasporto pianoforte', '+200-400 €'],
                      ['Assicurazione completa', '+1-3% valore'],
                    ].map(([servizio, costo], idx) => (
                      <div key={idx} className="flex justify-between items-center bg-gray-50 rounded p-2">
                        <span className="text-sm text-gray-700">{servizio}</span>
                        <span className="text-sm font-bold text-orange-600">{costo}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-md">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">4. Maggiorazioni</h3>
                  <ul className="space-y-2">
                    <li className="flex justify-between py-2 border-b">
                      <span className="text-gray-700">Weekend/festivi</span>
                      <span className="font-bold text-red-600">+20-30%</span>
                    </li>
                    <li className="flex justify-between py-2 border-b">
                      <span className="text-gray-700">Fine mese (25-31)</span>
                      <span className="font-bold text-red-600">+15-25%</span>
                    </li>
                    <li className="flex justify-between py-2 border-b">
                      <span className="text-gray-700">Trasloco urgente (24-48h)</span>
                      <span className="font-bold text-red-600">+30-50%</span>
                    </li>
                    <li className="flex justify-between py-2">
                      <span className="text-gray-700">Alta stagione (giu-ago)</span>
                      <span className="font-bold text-red-600">+10-20%</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-4">Esempi di Simulazione Preventivo</h2>
              <div className="space-y-6">
                {[
                  {
                    caso: 'Monolocale Milano Centro - Lambrate (8 km)',
                    dettagli: [
                      'Base monolocale: 300 €',
                      'Distanza locale: incluso',
                      'Martedi meta mese: nessuna maggiorazione',
                      'Imballaggio fai-da-te: 0 €',
                      '2° piano con ascensore: incluso',
                    ],
                    totale: '300 - 400 €',
                    colorClass: 'green'
                  },
                  {
                    caso: 'Trilocale Milano - Monza (18 km)',
                    dettagli: [
                      'Base trilocale: 700 €',
                      'Distanza locale: incluso',
                      'Imballaggio professionale: +200 €',
                      'Smontaggio cucina e armadi: +150 €',
                      '3° piano senza ascensore: +90 € (30€ x 3 piani)',
                    ],
                    totale: '1.140 - 1.350 €',
                    colorClass: 'blue'
                  },
                  {
                    caso: 'Quadrilocale Milano - Bergamo (50 km)',
                    dettagli: [
                      'Base quadrilocale: 1.100 €',
                      'Distanza 50 km: +100 €',
                      'Sabato: +250 € (maggiorazione 20%)',
                      'Servizio completo (imballaggio + smontaggio): +400 €',
                      'Assicurazione mobili di valore: +80 €',
                    ],
                    totale: '1.930 - 2.200 €',
                    colorClass: 'orange'
                  },
                ].map((esempio, idx) => (
                  <div key={idx} className={`bg-gradient-to-br from-${esempio.colorClass}-50 to-${esempio.colorClass}-100 rounded-xl p-6 border-2 border-${esempio.colorClass}-200`}>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Esempio {idx + 1}: {esempio.caso}</h3>
                    <ul className="space-y-2 mb-4">
                      {esempio.dettagli.map((det, i) => (
                        <li key={i} className="flex items-start space-x-2">
                          <span className="text-gray-600">•</span>
                          <span className="text-gray-700">{det}</span>
                        </li>
                      ))}
                    </ul>
                    <div className={`bg-${esempio.colorClass}-200 rounded-lg p-4 text-center`}>
                      <p className="text-sm text-gray-700 mb-1">Costo Totale Stimato</p>
                      <p className={`text-3xl font-bold text-${esempio.colorClass}-700`}>{esempio.totale}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-8">
              <h3 className="font-bold text-gray-900 mb-2">Importante: Questa e Solo una Stima</h3>
              <p className="text-gray-700">Ogni trasloco e unico. Per un <strong>preventivo preciso e vincolante</strong>, e necessario un sopralluogo gratuito da parte di un nostro tecnico.</p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-8 text-white text-center mt-12">
            <h2 className="text-3xl font-bold mb-4">Richiedi il Tuo Preventivo Preciso e Gratuito</h2>
            <p className="text-xl text-blue-100 mb-6">Sopralluogo gratuito senza impegno. Preventivo dettagliato in 24 ore</p>
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
