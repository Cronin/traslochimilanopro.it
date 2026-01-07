'use client';

import Header from '../components/Header';
import Footer from '../components/Footer';
import { businessData } from '../lib/business-data';

export default function TraslochiMilanoEconomiciPage() {
  const trackConversion = (eventName: string, location: string) => {
    if (typeof window !== 'undefined' && window.dataLayer) {
      window.dataLayer.push({ event: eventName, button_location: location });
    }
  };

  return (
    <>
      <Header />
      <main className="pt-[120px] pb-16">
        <article className="container-custom max-w-4xl">
          <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-8 md:p-12 text-white mb-12">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">Traslochi Milano Economici: Qualita a Prezzi Convenienti</h1>
            <p className="text-xl text-blue-100 mb-6">Traslochi professionali a Milano senza spendere una fortuna. Scopri come risparmiare senza rinunciare alla qualita</p>
            <div className="flex flex-wrap gap-4">
              <a href={`tel:${businessData.phoneFormatted}`} onClick={() => trackConversion('phone_click', 'hero')} className="inline-flex items-center space-x-2 bg-white text-blue-600 font-bold py-3 px-6 rounded-lg hover:bg-blue-50">
                <span>Preventivo Economico: {businessData.phone}</span>
              </a>
            </div>
          </div>

          <div className="prose prose-lg max-w-none">
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-4">Cosa Significa "Trasloco Economico"</h2>
              <p className="text-gray-700 mb-6">Un trasloco economico non e un trasloco di scarsa qualita. Significa ottimizzare i costi mantenendo professionalita, affidabilita e sicurezza. Ecco come risparmiare davvero:</p>
              
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                {[
                  { title: 'Monolocale', prezzo: 'Da 280 €', desc: 'Trasloco base entro 20 km' },
                  { title: 'Bilocale', prezzo: 'Da 420 €', desc: 'Servizio completo locale' },
                  { title: 'Trilocale', prezzo: 'Da 550 €', desc: 'Professionale ed economico' },
                ].map((item, idx) => (
                  <div key={idx} className="bg-green-50 rounded-xl p-6 text-center border-2 border-green-200">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-3xl font-bold text-green-600 mb-2">{item.prezzo}</p>
                    <p className="text-sm text-gray-600">{item.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-4">10 Modi per Risparmiare sul Trasloco a Milano</h2>
              <div className="space-y-4">
                {[
                  { tip: 'Scegli giorni feriali', save: 'Risparmi 20-30%', desc: 'Weekend e festivi costano molto di piu' },
                  { tip: 'Imballa tu stesso', save: 'Risparmi 150-400 €', desc: 'Servizio imballaggio e un costo extra significativo' },
                  { tip: 'Riduci il volume', save: 'Risparmi 15-25%', desc: 'Meno oggetti = furgone piu piccolo = meno costo' },
                  { tip: 'Smonta i mobili in anticipo', save: 'Risparmi 100-250 €', desc: 'Servizio smontaggio ha costo aggiuntivo' },
                  { tip: 'Evita fine mese', save: 'Risparmi 15-20%', desc: 'Meta mese e meno richiesto e piu economico' },
                  { tip: 'Prenota con anticipo', save: 'Risparmi 10-20%', desc: 'Last minute costa 30-50% in piu' },
                  { tip: 'Bassa stagione (ott-mar)', save: 'Risparmi 10-15%', desc: 'Estate e periodo piu costoso' },
                  { tip: 'Trasporta piccoli oggetti tu', save: 'Risparmi tempo', desc: 'Scatole leggere in auto riducono carico' },
                  { tip: 'Confronta piu preventivi', save: 'Risparmi 20-40%', desc: 'I prezzi variano molto tra ditte' },
                  { tip: 'Chiedi sconti per pagamento immediato', save: 'Risparmi 5-10%', desc: 'Molte ditte offrono sconti per contanti/bonifico immediato' },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start space-x-4 bg-white rounded-xl p-4 shadow-sm">
                    <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">{idx + 1}</div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-gray-900">{item.tip}</h3>
                      <p className="text-green-600 font-semibold">{item.save}</p>
                      <p className="text-sm text-gray-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-4">Pacchetti Economici Traslochi Milano Pro</h2>
              <div className="space-y-6">
                {[
                  {
                    nome: 'Base Economico',
                    prezzo: '280-450 €',
                    include: ['Furgone piccolo/medio', 'Trasporto locale (max 20 km)', '2 operatori per 3-5 ore', 'Carico e scarico'],
                    ideale: 'Monolocale o bilocale con mobili essenziali'
                  },
                  {
                    nome: 'Standard Conveniente',
                    prezzo: '500-750 €',
                    include: ['Furgone medio', 'Trasporto fino a 50 km', '2-3 operatori per 5-7 ore', 'Carico, scarico, protezione mobili', 'Smontaggio/montaggio base'],
                    ideale: 'Trilocale completo, traslochi inter-comunali'
                  },
                  {
                    nome: 'Premium Competitivo',
                    prezzo: '850-1.200 €',
                    include: ['Furgone grande', 'Qualsiasi distanza Lombardia', '3-4 operatori', 'Imballaggio parziale incluso', 'Smontaggio/montaggio completo', 'Assicurazione base'],
                    ideale: 'Quadrilocale, ville piccole, traslochi provinciali'
                  },
                ].map((pacchetto, idx) => (
                  <div key={idx} className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 border-2 border-blue-300">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">{pacchetto.nome}</h3>
                        <p className="text-sm text-gray-600 italic">Ideale per: {pacchetto.ideale}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-3xl font-bold text-blue-600">{pacchetto.prezzo}</p>
                      </div>
                    </div>
                    <ul className="space-y-2">
                      {pacchetto.include.map((item, i) => (
                        <li key={i} className="flex items-start space-x-2">
                          <span className="text-green-500 font-bold">✓</span>
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>
          </div>

          <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-8 text-white text-center mt-12">
            <h2 className="text-3xl font-bold mb-4">Preventivo Economico Personalizzato</h2>
            <p className="text-xl text-blue-100 mb-6">Chiamaci per un preventivo su misura che ottimizza i costi senza rinunciare alla qualita</p>
            <a href={`tel:${businessData.phoneFormatted}`} className="inline-flex items-center space-x-2 bg-white text-blue-600 font-bold py-4 px-8 rounded-lg hover:bg-blue-50 text-lg">
              <span>Chiama {businessData.phone}</span>
            </a>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
