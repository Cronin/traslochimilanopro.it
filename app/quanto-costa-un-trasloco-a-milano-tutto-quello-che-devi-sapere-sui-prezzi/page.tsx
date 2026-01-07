'use client';

import Header from '../components/Header';
import Footer from '../components/Footer';
import { businessData } from '../lib/business-data';

export default function QuantoCostaTraslocoMilanoPage() {
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

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Quanto costa un trasloco a Milano per un monolocale?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Un trasloco di un monolocale a Milano costa mediamente tra 300 e 500 euro, includendo furgone, 2 operatori, carico/scarico. Il prezzo varia in base al piano, distanza e servizi aggiuntivi come imballaggio."
        }
      },
      {
        "@type": "Question",
        "name": "Qual e il periodo piu economico per traslocare a Milano?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "I periodi piu economici sono meta settimana (martedi-giovedi) da ottobre a marzo, evitando fine mese. Si risparmia fino al 30% rispetto a weekend estivi o fine mese quando c'e maggiore richiesta."
        }
      },
      {
        "@type": "Question",
        "name": "Il preventivo trasloco include tutto?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Dipende dal tipo di preventivo. Un preventivo base include trasporto e manodopera. Servizi come imballaggio, smontaggio mobili, deposito, salita scale e assicurazione possono essere quotati separatamente. Richiedi sempre un preventivo dettagliato scritto."
        }
      },
      {
        "@type": "Question",
        "name": "Come posso ridurre il costo del trasloco?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Per risparmiare: trasloca in giorni feriali, imballa tu stesso gli oggetti, riduci il volume vendendo cio che non serve, smonta i mobili in anticipo, confronta piu preventivi e prenota con largo anticipo."
        }
      },
      {
        "@type": "Question",
        "name": "Quanto costa traslocare da Milano a Roma?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Un trasloco completo Milano-Roma (600 km) per un appartamento di 80 m² costa tra 1.500 e 3.000 euro, includendo trasporto, manodopera, imballaggio e assicurazione. Il prezzo varia in base al volume e ai servizi richiesti."
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <Header />
      <main className="pt-[120px] pb-16">
        <article className="container-custom max-w-4xl">
          {/* Hero Section */}
          <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-8 md:p-12 text-white mb-12">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">
              Quanto Costa un Trasloco a Milano? Tutto sui Prezzi 2025
            </h1>
            <p className="text-xl text-blue-100 mb-6">
              Guida completa ai costi dei traslochi a Milano: prezzi per appartamenti, ville, uffici e preventivi dettagliati
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href={`tel:${businessData.phoneFormatted}`}
                onClick={() => trackConversion('phone_click', 'article_hero')}
                className="inline-flex items-center space-x-2 bg-white text-blue-600 font-bold py-3 px-6 rounded-lg hover:bg-blue-50 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>Preventivo Gratuito: {businessData.phone}</span>
              </a>
            </div>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Prezzi Medi Traslochi a Milano nel 2025</h2>
              <p className="text-gray-700 mb-6">
                Il <strong>costo di un trasloco a Milano</strong> varia significativamente in base a diversi fattori: dimensione dell'abitazione, distanza, piano, volume dei mobili e servizi richiesti. Ecco una panoramica completa dei prezzi medi applicati dalle ditte di traslochi professionali a Milano.
              </p>

              <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-8">
                <div className="bg-blue-600 text-white px-6 py-4">
                  <h3 className="text-2xl font-bold">Listino Prezzi per Tipologia Abitazione</h3>
                </div>
                <div className="divide-y divide-gray-200">
                  {[
                    { tipo: 'Monolocale (30-40 m²)', prezzo: '300 - 500', dettagli: '2 operatori, 3-4 ore' },
                    { tipo: 'Bilocale (50-60 m²)', prezzo: '450 - 700', dettagli: '2-3 operatori, 4-5 ore' },
                    { tipo: 'Trilocale (70-90 m²)', prezzo: '600 - 1.000', dettagli: '3 operatori, 5-7 ore' },
                    { tipo: 'Quadrilocale (100-120 m²)', prezzo: '900 - 1.500', dettagli: '3-4 operatori, 7-9 ore' },
                    { tipo: 'Villa/Attico (150+ m²)', prezzo: '1.500 - 3.000', dettagli: '4-5 operatori, 9-12 ore' },
                    { tipo: 'Ufficio piccolo (40-60 m²)', prezzo: '500 - 900', dettagli: 'Include scrivanie, archivi' },
                    { tipo: 'Ufficio grande (100+ m²)', prezzo: '1.200 - 2.500', dettagli: 'Include arredi completi' },
                  ].map((item, idx) => (
                    <div key={idx} className="px-6 py-4 hover:bg-blue-50 transition-colors">
                      <div className="flex justify-between items-center">
                        <div>
                          <h4 className="text-lg font-bold text-gray-900">{item.tipo}</h4>
                          <p className="text-sm text-gray-600">{item.dettagli}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-2xl font-bold text-blue-600">{item.prezzo}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                <p className="text-sm text-gray-700">
                  <strong>Prezzi indicativi</strong> per traslochi locali a Milano (entro 20 km), servizio base con trasporto e manodopera. Servizi aggiuntivi quotati separatamente.
                </p>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Cosa Include il Prezzo Base?</h2>
              <p className="text-gray-700 mb-6">
                Comprendere cosa e incluso nel preventivo e fondamentale per evitare sorprese. Il <strong>prezzo base</strong> di un trasloco professionale a Milano generalmente include:
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-green-50 rounded-xl p-6 border-2 border-green-200">
                  <h3 className="text-xl font-bold text-green-900 mb-4 flex items-center">
                    <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Servizi Inclusi
                  </h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">•</span>
                      <span>Furgone attrezzato con coperte e cinghie</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">•</span>
                      <span>Manodopera specializzata (2-4 operatori)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">•</span>
                      <span>Carico e scarico mobili</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">•</span>
                      <span>Trasporto fino a destinazione</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">•</span>
                      <span>Carburante per il tragitto base</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">•</span>
                      <span>Assicurazione RC base</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-orange-50 rounded-xl p-6 border-2 border-orange-200">
                  <h3 className="text-xl font-bold text-orange-900 mb-4 flex items-center">
                    <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                    Extra a Pagamento
                  </h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-orange-600 mr-2">+</span>
                      <span>Imballaggio professionale (150-400 €)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange-600 mr-2">+</span>
                      <span>Smontaggio/montaggio mobili (100-300 €)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange-600 mr-2">+</span>
                      <span>Salita scale senza ascensore (20-50 € per piano)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange-600 mr-2">+</span>
                      <span>Deposito mobili temporaneo (80-200 € al mese)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange-600 mr-2">+</span>
                      <span>Assicurazione completa (1-3% del valore)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange-600 mr-2">+</span>
                      <span>Distanze oltre 50 km (tariffa al km)</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Fattori che Influenzano il Prezzo</h2>
              <p className="text-gray-700 mb-6">
                Diversi elementi possono far variare significativamente il costo finale del trasloco. Ecco i principali fattori da considerare:
              </p>

              <div className="space-y-6">
                {[
                  {
                    title: '1. Distanza tra Origine e Destinazione',
                    icon: '🗺️',
                    description: 'Traslochi locali a Milano (0-20 km) hanno tariffe fisse. Oltre i 20 km si applica spesso una tariffa chilometrica (1,50-3,00 €/km). Traslochi interregionali costano molto di piu.',
                    esempio: 'Milano Centro - Monza (15 km): prezzo fisso. Milano - Bergamo (50 km): +100-150 € per distanza aggiuntiva.',
                  },
                  {
                    title: '2. Piano e Presenza di Ascensore',
                    icon: '🏢',
                    description: 'Ogni piano senza ascensore aumenta i tempi e lo sforzo fisico. La maggiorazione varia dal 10-15% per piano. Traslochi da/verso piani alti senza ascensore possono raddoppiare il costo.',
                    esempio: 'Trilocale 3° piano con ascensore: 650 €. Stesso trilocale 3° piano senza ascensore: 850-950 €.',
                  },
                  {
                    title: '3. Volume e Peso dei Mobili',
                    icon: '📦',
                    description: 'Piu mobili voluminosi e pesanti richiedono furgoni piu grandi e piu operatori. Un monolocale minimale costa molto meno dello stesso metraggio con molti mobili.',
                    esempio: 'Monolocale con mobili essenziali: 300-350 €. Monolocale completamente arredato: 450-550 €.',
                  },
                  {
                    title: '4. Giorno e Periodo dell\'Anno',
                    icon: '📅',
                    description: 'Weekend (+20-30%), fine mese (+15-25%), estate (+10-20%) hanno costi maggiorati. Meta settimana da ottobre a marzo e il periodo piu economico.',
                    esempio: 'Trasloco martedi meta novembre: 600 €. Stesso trasloco sabato fine luglio: 780-850 €.',
                  },
                  {
                    title: '5. Mobili Speciali e Oggetti Delicati',
                    icon: '🎹',
                    description: 'Pianoforti, casseforti, opere d\'arte, oggetti fragili richiedono attrezzature speciali e imballaggi professionali. Questi servizi hanno tariffe dedicate.',
                    esempio: 'Trasporto pianoforte: +200-400 €. Cassaforte: +150-300 €. Quadri di valore: imballaggio speciale +100-200 €.',
                  },
                  {
                    title: '6. Urgenza del Trasloco',
                    icon: '⚡',
                    description: 'Traslochi urgenti (24-48 ore) hanno maggiorazioni del 30-50%. Prenotazioni con 2-3 settimane di anticipo garantiscono i prezzi migliori.',
                    esempio: 'Trasloco programmato 3 settimane prima: 700 €. Stesso trasloco richiesto per domani: 950-1.050 €.',
                  },
                ].map((fattore, idx) => (
                  <div key={idx} className="bg-white rounded-xl p-6 shadow-md border-l-4 border-blue-500">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 flex items-center">
                      <span className="text-3xl mr-3">{fattore.icon}</span>
                      {fattore.title}
                    </h3>
                    <p className="text-gray-700 mb-3">{fattore.description}</p>
                    <div className="bg-blue-50 rounded p-3">
                      <p className="text-sm text-gray-700"><strong>Esempio pratico:</strong> {fattore.esempio}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* FAQ Section */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Domande Frequenti sui Prezzi Traslochi</h2>
              <div className="space-y-4">
                {faqSchema.mainEntity.map((faq, index) => (
                  <div key={index} className="bg-white rounded-xl p-6 shadow-md">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{faq.name}</h3>
                    <p className="text-gray-700">{faq.acceptedAnswer.text}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">10 Consigli per Risparmiare sul Trasloco</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  'Trasloca in giorni feriali (risparmi 20-30%)',
                  'Imballa tu stesso gli oggetti',
                  'Smonta i mobili in anticipo',
                  'Riduci il volume: vendi o dona cio che non serve',
                  'Prenota con 3-4 settimane di anticipo',
                  'Confronta almeno 3 preventivi dettagliati',
                  'Evita fine mese e periodo estivo',
                  'Trasporta tu gli oggetti di valore',
                  'Chiedi sconti per pagamento immediato',
                  'Fai il trasloco in bassa stagione (ottobre-marzo)',
                ].map((consiglio, idx) => (
                  <div key={idx} className="flex items-start space-x-3 bg-blue-50 rounded-lg p-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                      {idx + 1}
                    </div>
                    <p className="text-gray-700 font-medium">{consiglio}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-8 md:p-12 text-white text-center mt-12">
            <h2 className="text-3xl font-bold mb-4">Richiedi un Preventivo Gratuito e Senza Impegno</h2>
            <p className="text-xl text-blue-100 mb-6">
              Chiamaci ora per ricevere un preventivo dettagliato e personalizzato per il tuo trasloco a Milano
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href={`tel:${businessData.phoneFormatted}`}
                onClick={() => trackConversion('phone_click', 'article_bottom_cta')}
                className="inline-flex items-center space-x-2 bg-white text-blue-600 font-bold py-4 px-8 rounded-lg hover:bg-blue-50 transition-colors text-lg"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>Chiama {businessData.phone}</span>
              </a>
            </div>
            <p className="text-sm text-blue-200 mt-6">Disponibili 24/7, anche weekend e festivi</p>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
