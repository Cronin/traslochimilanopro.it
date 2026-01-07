'use client';

import Header from '../components/Header';
import Footer from '../components/Footer';
import { businessData } from '../lib/business-data';

export default function TraslocoAlKmPage() {
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

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Trasloco al Km: Come Calcolare il Costo del Trasporto Mobili",
    "description": "Guida completa al calcolo del costo trasloco al km. Scopri come funziona la tariffazione chilometrica, i fattori che influenzano il prezzo e come risparmiare sul tuo trasloco a Milano.",
    "author": {
      "@type": "Organization",
      "name": "Traslochi Milano Pro"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Traslochi Milano Pro",
      "logo": {
        "@type": "ImageObject",
        "url": "https://traslochimilanopro.it/logo.png"
      }
    },
    "datePublished": "2025-01-07",
    "dateModified": "2025-01-07"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Come si calcola il costo di un trasloco al km?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Il costo di un trasloco al km si calcola moltiplicando la distanza percorsa per la tariffa chilometrica, che varia tra 1,50 e 3,50 euro al km a seconda del tipo di furgone e servizi inclusi. A questo si aggiungono costi fissi per carico/scarico, imballaggio e manodopera."
        }
      },
      {
        "@type": "Question",
        "name": "Quanto costa un trasloco di 50 km?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Per un trasloco di 50 km, il costo medio si aggira tra 300 e 600 euro, includendo trasporto (75-175 euro), manodopera (150-300 euro) e servizi aggiuntivi. Il prezzo finale dipende dal volume dei mobili e dai servizi richiesti."
        }
      },
      {
        "@type": "Question",
        "name": "Conviene il trasloco al km o a forfait?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Il trasloco al km conviene per distanze brevi (fino a 50-70 km) e carichi ridotti. Per traslochi completi su lunghe distanze, il forfait risulta piu conveniente perche include tutti i servizi senza sorprese sul costo finale."
        }
      },
      {
        "@type": "Question",
        "name": "Cosa include la tariffa al km per traslochi?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "La tariffa al km base include solo il trasporto del furgone. Servizi come carico/scarico, smontaggio mobili, imballaggio, salita/discesa scale e assicurazione sono generalmente quotati a parte e vanno aggiunti al costo chilometrico."
        }
      },
      {
        "@type": "Question",
        "name": "Come risparmiare su un trasloco al km?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Per risparmiare: fai il trasloco in giorni feriali, imballa tu stesso gli oggetti, smonta i mobili in anticipo, riduci il volume da trasportare, scegli il furgone piu piccolo possibile e pianifica il percorso piu breve."
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
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
              Trasloco al Km: Come Calcolare il Costo del Trasporto Mobili
            </h1>
            <p className="text-xl text-blue-100 mb-6">
              Guida completa per capire come funziona la tariffazione chilometrica e quanto costa realmente traslocare
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
                <span>Chiama {businessData.phone}</span>
              </a>
            </div>
          </div>

          {/* Table of Contents */}
          <div className="bg-gray-50 rounded-xl p-6 mb-12">
            <h2 className="text-xl font-bold text-gray-900 mb-4">In questa guida</h2>
            <ul className="space-y-2">
              <li><a href="#come-funziona" className="text-blue-600 hover:text-blue-700">Come funziona il trasloco al km</a></li>
              <li><a href="#tariffe" className="text-blue-600 hover:text-blue-700">Tariffe chilometriche standard</a></li>
              <li><a href="#fattori-costo" className="text-blue-600 hover:text-blue-700">Fattori che influenzano il costo</a></li>
              <li><a href="#calcolo-pratico" className="text-blue-600 hover:text-blue-700">Calcolo pratico del preventivo</a></li>
              <li><a href="#confronto" className="text-blue-600 hover:text-blue-700">Trasloco al km vs forfait</a></li>
              <li><a href="#consigli" className="text-blue-600 hover:text-blue-700">Consigli per risparmiare</a></li>
            </ul>
          </div>

          {/* Main Content */}
          <div className="prose prose-lg max-w-none">
            <section id="come-funziona" className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Come Funziona il Trasloco al Km</h2>
              <p className="text-gray-700 mb-4">
                Il <strong>trasloco al chilometro</strong> e una modalita di tariffazione che calcola il costo del servizio in base alla distanza effettiva percorsa dal furgone tra l'indirizzo di partenza e quello di destinazione. Questa formula e particolarmente vantaggiosa per traslochi su brevi distanze o quando si deve trasportare un volume limitato di mobili e oggetti.
              </p>
              <p className="text-gray-700 mb-4">
                A differenza del <strong>preventivo a forfait</strong>, dove si paga un prezzo fisso indipendentemente dalla distanza, la tariffa chilometrica permette di ottimizzare i costi per spostamenti locali, come traslochi all'interno dello stesso quartiere o tra comuni vicini nell'area metropolitana di Milano.
              </p>
              <p className="text-gray-700">
                La formula base e semplice: <strong>Costo totale = (Distanza in km × Tariffa al km) + Costi fissi</strong>. I costi fissi includono generalmente manodopera per carico/scarico, eventuali servizi di smontaggio/montaggio mobili, imballaggio e assicurazione.
              </p>
            </section>

            <section id="tariffe" className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Tariffe Chilometriche Standard a Milano</h2>
              <p className="text-gray-700 mb-6">
                Le tariffe al km variano principalmente in base alla dimensione del furgone utilizzato e ai servizi inclusi. Ecco una panoramica delle tariffe medie applicate dalle ditte di traslochi a Milano:
              </p>

              <div className="bg-white rounded-xl shadow-md overflow-hidden mb-6">
                <table className="w-full">
                  <thead className="bg-blue-600 text-white">
                    <tr>
                      <th className="px-6 py-4 text-left">Tipo Furgone</th>
                      <th className="px-6 py-4 text-left">Capacita</th>
                      <th className="px-6 py-4 text-left">Tariffa al Km</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="px-6 py-4 font-semibold">Furgone Piccolo</td>
                      <td className="px-6 py-4">12-15 m³</td>
                      <td className="px-6 py-4 text-blue-600 font-bold">1,50 - 2,00 /km</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-semibold">Furgone Medio</td>
                      <td className="px-6 py-4">20-30 m³</td>
                      <td className="px-6 py-4 text-blue-600 font-bold">2,00 - 2,50 /km</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-semibold">Furgone Grande</td>
                      <td className="px-6 py-4">35-50 m³</td>
                      <td className="px-6 py-4 text-blue-600 font-bold">2,50 - 3,50 /km</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-600 p-4 mb-6">
                <p className="text-sm text-gray-700">
                  <strong>Nota importante:</strong> Queste tariffe coprono solo il costo del trasporto. Manodopera, imballaggio, smontaggio mobili e altri servizi sono quotati separatamente.
                </p>
              </div>
            </section>

            <section id="fattori-costo" className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Fattori che Influenzano il Costo Finale</h2>
              <p className="text-gray-700 mb-6">
                Oltre alla distanza chilometrica, diversi fattori possono influenzare significativamente il prezzo totale del trasloco:
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-white rounded-xl p-6 shadow-md">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Volume da trasportare</h3>
                      <p className="text-gray-600">Piu mobili e scatole aumentano il tempo di carico/scarico e possono richiedere un furgone piu grande.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-md">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Piano e ascensore</h3>
                      <p className="text-gray-600">Scale da percorrere e assenza di ascensore aumentano i tempi e i costi di manodopera (5-15% in piu per piano).</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-md">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Giorno e orario</h3>
                      <p className="text-gray-600">Weekend e festivi comportano maggiorazioni del 20-30%. I giorni feriali sono piu economici.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-md">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Servizi aggiuntivi</h3>
                      <p className="text-gray-600">Imballaggio, smontaggio mobili, deposito temporaneo aumentano il preventivo complessivo.</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section id="calcolo-pratico" className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Calcolo Pratico: Esempi di Preventivo</h2>
              <p className="text-gray-700 mb-6">
                Vediamo alcuni esempi concreti di come si calcola il costo di un trasloco al km a Milano:
              </p>

              <div className="space-y-6">
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 border-2 border-blue-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Esempio 1: Trasloco Locale (20 km)</h3>
                  <p className="text-gray-700 mb-4">Monolocale, furgone piccolo, Milano Centro - Sesto San Giovanni</p>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Trasporto: 20 km × 1,80 /km = <strong>36</strong></li>
                    <li>• Manodopera (2 operatori × 3 ore): <strong>150</strong></li>
                    <li>• Imballaggio scatole: <strong>50</strong></li>
                    <li>• Salita scale (2° piano senza ascensore): <strong>40</strong></li>
                  </ul>
                  <div className="mt-4 pt-4 border-t-2 border-blue-300">
                    <p className="text-2xl font-bold text-blue-600">Totale: circa 276 - 350</p>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 border-2 border-green-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Esempio 2: Trasloco Media Distanza (50 km)</h3>
                  <p className="text-gray-700 mb-4">Trilocale, furgone medio, Milano - Monza</p>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Trasporto: 50 km × 2,20 /km = <strong>110</strong></li>
                    <li>• Manodopera (3 operatori × 5 ore): <strong>300</strong></li>
                    <li>• Smontaggio/montaggio mobili: <strong>120</strong></li>
                    <li>• Imballaggio completo: <strong>150</strong></li>
                  </ul>
                  <div className="mt-4 pt-4 border-t-2 border-green-300">
                    <p className="text-2xl font-bold text-green-600">Totale: circa 680 - 800</p>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-6 border-2 border-orange-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Esempio 3: Trasloco Lungo Raggio (150 km)</h3>
                  <p className="text-gray-700 mb-4">Villa 150 m², furgone grande, Milano - Bergamo</p>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Trasporto: 150 km × 3,00 /km = <strong>450</strong></li>
                    <li>• Manodopera (4 operatori × 8 ore): <strong>640</strong></li>
                    <li>• Servizio completo (smontaggio + imballaggio): <strong>400</strong></li>
                    <li>• Assicurazione mobili: <strong>80</strong></li>
                  </ul>
                  <div className="mt-4 pt-4 border-t-2 border-orange-300">
                    <p className="text-2xl font-bold text-orange-600">Totale: circa 1.570 - 1.800</p>
                  </div>
                  <p className="text-sm text-gray-600 mt-3">
                    <strong>Nota:</strong> Su distanze superiori a 100 km conviene valutare un preventivo a forfait che potrebbe risultare piu economico.
                  </p>
                </div>
              </div>
            </section>

            <section id="confronto" className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Trasloco al Km vs Forfait: Quale Conviene?</h2>
              <p className="text-gray-700 mb-6">
                La scelta tra tariffa chilometrica e preventivo a forfait dipende da diversi fattori. Ecco quando conviene ciascuna opzione:
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-blue-50 rounded-xl p-6 border-2 border-blue-200">
                  <h3 className="text-xl font-bold text-blue-900 mb-4">Conviene il Trasloco al Km</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start space-x-2">
                      <span className="text-green-500 font-bold">✓</span>
                      <span>Distanze brevi (fino a 50-70 km)</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-green-500 font-bold">✓</span>
                      <span>Volume ridotto di mobili e oggetti</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-green-500 font-bold">✓</span>
                      <span>Traslochi parziali o singoli mobili</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-green-500 font-bold">✓</span>
                      <span>Quando fai tu stesso parte del lavoro (imballaggio, smontaggio)</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-green-500 font-bold">✓</span>
                      <span>Traslochi all'interno dello stesso comune</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-orange-50 rounded-xl p-6 border-2 border-orange-200">
                  <h3 className="text-xl font-bold text-orange-900 mb-4">Conviene il Forfait</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start space-x-2">
                      <span className="text-green-500 font-bold">✓</span>
                      <span>Distanze lunghe (oltre 100 km)</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-green-500 font-bold">✓</span>
                      <span>Traslochi completi di appartamenti o ville</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-green-500 font-bold">✓</span>
                      <span>Servizio chiavi in mano (tutto incluso)</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-green-500 font-bold">✓</span>
                      <span>Quando vuoi certezza del costo totale senza variabili</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-green-500 font-bold">✓</span>
                      <span>Traslochi internazionali o interregionali</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-6">
                <p className="text-sm text-gray-700">
                  <strong>Consiglio dell'esperto:</strong> Richiedi sempre entrambi i preventivi (al km e forfait) alla stessa ditta di traslochi. Confronta i totali e valuta quale ti offre il miglior rapporto qualita-prezzo per le tue specifiche esigenze.
                </p>
              </div>
            </section>

            <section id="consigli" className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">10 Consigli per Risparmiare sul Trasloco al Km</h2>
              <p className="text-gray-700 mb-6">
                Ecco come ottimizzare i costi quando scegli la tariffazione chilometrica:
              </p>

              <div className="space-y-4">
                {[
                  {
                    number: "1",
                    title: "Scegli giorni feriali",
                    description: "Evita weekend e festivi per risparmiare fino al 30% sulla manodopera."
                  },
                  {
                    number: "2",
                    title: "Riduci il volume",
                    description: "Vendi o dona oggetti inutilizzati prima del trasloco. Meno volume = furgone piu piccolo = risparmio."
                  },
                  {
                    number: "3",
                    title: "Imballa tu stesso",
                    description: "L'imballaggio professionale costa 150-400 euro. Fallo tu con anticipo usando scatole gratuite da supermercati."
                  },
                  {
                    number: "4",
                    title: "Smonta i mobili in anticipo",
                    description: "Il servizio di smontaggio/montaggio costa 100-250 euro. Se hai tempo e attrezzi, risparmia facendolo tu."
                  },
                  {
                    number: "5",
                    title: "Pianifica il percorso piu breve",
                    description: "Verifica su Google Maps la distanza esatta e comunica il percorso ottimale alla ditta."
                  },
                  {
                    number: "6",
                    title: "Prenota con anticipo",
                    description: "Prenotazioni dell'ultimo minuto costano il 20-40% in piu. Prenota almeno 2-3 settimane prima."
                  },
                  {
                    number: "7",
                    title: "Confronta piu preventivi",
                    description: "Chiedi almeno 3 preventivi dettagliati da diverse ditte. Le tariffe al km possono variare del 30-50%."
                  },
                  {
                    number: "8",
                    title: "Trasporta tu gli oggetti di valore",
                    description: "Documenti, gioielli e piccoli oggetti preziosi portali tu in auto. Risparmierai sull'assicurazione."
                  },
                  {
                    number: "9",
                    title: "Chiedi sconti per traslochi brevi",
                    description: "Molte ditte offrono tariffe promozionali per traslochi sotto i 20 km nello stesso quartiere."
                  },
                  {
                    number: "10",
                    title: "Prepara gli accessi",
                    description: "Assicurati di avere permessi di sosta e accessi liberi. Ogni minuto di attesa costa sulla manodopera."
                  }
                ].map((tip) => (
                  <div key={tip.number} className="flex items-start space-x-4 bg-white rounded-xl p-4 shadow-sm">
                    <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                      {tip.number}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-1">{tip.title}</h3>
                      <p className="text-gray-600">{tip.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* FAQ Section */}
            <section id="faq" className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Domande Frequenti sul Trasloco al Km</h2>
              <div className="space-y-4">
                {faqSchema.mainEntity.map((faq, index) => (
                  <div key={index} className="bg-white rounded-xl p-6 shadow-md">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{faq.name}</h3>
                    <p className="text-gray-700">{faq.acceptedAnswer.text}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-8 md:p-12 text-white text-center mt-12">
            <h2 className="text-3xl font-bold mb-4">Richiedi un Preventivo Personalizzato</h2>
            <p className="text-xl text-blue-100 mb-6">
              Vuoi sapere esattamente quanto costa il tuo trasloco? Chiamaci per un preventivo gratuito e dettagliato
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
                <span>{businessData.phone}</span>
              </a>
            </div>
            <p className="text-sm text-blue-200 mt-6">Disponibili 24/7 per emergenze e traslochi urgenti</p>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
