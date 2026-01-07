'use client';

import Header from '../components/Header';
import Footer from '../components/Footer';
import { businessData } from '../lib/business-data';

export default function TraslocoStessaCittaPage() {
  return (
    <>
      <Header />
      <main className="pt-[120px] pb-16">
        <article className="container-custom max-w-4xl">
          <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-8 md:p-12 text-white mb-12">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">Trasloco nella Stessa Citta: Come Organizzarsi e Risparmiare</h1>
            <p className="text-xl text-blue-100 mb-6">Guida completa per traslocare all interno di Milano ottimizzando tempi e costi</p>
            <a href={`tel:${businessData.phoneFormatted}`} className="inline-flex bg-white text-blue-600 font-bold py-3 px-6 rounded-lg">
              Preventivo {businessData.phone}
            </a>
          </div>

          <div className="prose prose-lg max-w-none">
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-4">Perche il Trasloco Locale Conviene</h2>
              <p className="text-gray-700 mb-6">Traslocare nella stessa citta ha vantaggi significativi rispetto a traslochi su lunghe distanze:</p>
              
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  { title: 'Costi Ridotti', desc: 'Nessun costo chilometrico, tariffe forfettarie vantaggiose. Risparmi 30-50% vs lunghe distanze', icon: '💰' },
                  { title: 'Tempi Rapidi', desc: 'Trasloco completato in 1 giorno. Non servono pernottamenti o logistica complessa', icon: '⏱️' },
                  { title: 'Flessibilita', desc: 'Puoi fare piu viaggi, portare cose in anticipo, organizzare con calma', icon: '🔄' },
                  { title: 'Meno Stress', desc: 'Conosci gia zona, servizi, parcheggi. Nessun adattamento a citta sconosciuta', icon: '😌' },
                ].map((item, idx) => (
                  <div key={idx} className="bg-blue-50 rounded-xl p-6">
                    <div className="text-4xl mb-3">{item.icon}</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-700">{item.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-4">Come Organizzare un Trasloco Locale Perfetto</h2>
              <div className="space-y-6">
                {[
                  {
                    fase: '3-4 Settimane Prima',
                    tasks: [
                      'Richiedi 3-4 preventivi a ditte locali',
                      'Fai sopralluogo gratuito con 2-3 ditte',
                      'Prenota la ditta scelta (meglio meta settimana)',
                      'Inizia a fare decluttering: vendi/dona cio che non serve',
                    ]
                  },
                  {
                    fase: '2 Settimane Prima',
                    tasks: [
                      'Raccogli scatole gratuite da supermercati',
                      'Acquista materiale imballaggio (pluriball, nastro)',
                      'Inizia a imballare oggetti non essenziali',
                      'Organizza disdette utenze vecchia casa e allacci nuova casa',
                    ]
                  },
                  {
                    fase: '1 Settimana Prima',
                    tasks: [
                      'Completa imballaggio oggetti fragili e libri',
                      'Smonta mobili smontabili in anticipo',
                      'Verifica permessi parcheggio per furgone',
                      'Prepara lista priorita per scarico (cosa serve subito)',
                    ]
                  },
                  {
                    fase: 'Giorno del Trasloco',
                    tasks: [
                      'Svuota e sbrina frigorifero (fatto la sera prima)',
                      'Fai ultima pulizia casa vecchia',
                      'Segui i traslocatori, verifica carico',
                      'Controlla casa vecchia prima di lasciare chiavi',
                    ]
                  },
                ].map((fase, idx) => (
                  <div key={idx} className="bg-white rounded-xl p-6 shadow-md border-l-4 border-blue-500">
                    <h3 className="text-xl font-bold text-blue-600 mb-4">{fase.fase}</h3>
                    <ul className="space-y-2">
                      {fase.tasks.map((task, i) => (
                        <li key={i} className="flex items-start space-x-2">
                          <span className="text-green-500 mt-1">✓</span>
                          <span className="text-gray-700">{task}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-4">Quanto Costa un Trasloco Locale a Milano</h2>
              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 border-2 border-green-200 mb-6">
                <h3 className="text-2xl font-bold mb-4">Prezzi Medi Traslochi Stessa Citta</h3>
                <div className="space-y-3">
                  {[
                    ['Monolocale (stessa zona)', '280 - 450 €'],
                    ['Bilocale (max 10 km)', '420 - 650 €'],
                    ['Trilocale (max 15 km)', '550 - 900 €'],
                    ['Quadrilocale (max 20 km)', '800 - 1.300 €'],
                  ].map(([tipo, prezzo], idx) => (
                    <div key={idx} className="flex justify-between items-center py-2 border-b border-green-200">
                      <span className="text-gray-700 font-medium">{tipo}</span>
                      <span className="text-green-600 font-bold text-lg">{prezzo}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                <p className="text-sm text-gray-700"><strong>Nota:</strong> Prezzi per servizio base (trasporto + manodopera). Imballaggio, smontaggio mobili, scale aggiuntive quotate a parte.</p>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-4">10 Consigli per Risparmiare</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  'Trasloca martedi-giovedi (risparmi 20-30%)',
                  'Imballa tutto tu stesso',
                  'Porta in auto scatole leggere',
                  'Smonta mobili la sera prima',
                  'Riduci volume: 1 scatolone in meno = risparmio',
                  'Evita traslochi a fine mese',
                  'Chiedi sconto per pagamento immediato',
                  'Prenota almeno 3 settimane prima',
                  'Fai piu preventivi e negozia',
                  'Organizza accessi liberi (no attese = no costi extra)',
                ].map((tip, idx) => (
                  <div key={idx} className="flex items-start space-x-2 bg-blue-50 rounded-lg p-3">
                    <span className="text-blue-600 font-bold">{idx + 1}.</span>
                    <span className="text-gray-700">{tip}</span>
                  </div>
                ))}
              </div>
            </section>
          </div>

          <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-8 text-white text-center mt-12">
            <h2 className="text-3xl font-bold mb-4">Organizza il Tuo Trasloco Locale con Noi</h2>
            <p className="text-xl text-blue-100 mb-6">Esperti in traslochi all interno di Milano. Chiamaci per un preventivo immediato</p>
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
