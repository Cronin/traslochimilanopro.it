'use client';

import Header from '../components/Header';
import Footer from '../components/Footer';
import { businessData } from '../lib/business-data';

export default function DitteTraslochiMilanoPage() {
  const trackConversion = (eventName: string, location: string) => {
    if (typeof window !== 'undefined' && window.dataLayer) {
      window.dataLayer.push({
        event: eventName,
        button_location: location,
      });
    }
  };

  return (
    <>
      <Header />
      <main className="pt-[120px] pb-16">
        <article className="container-custom max-w-4xl">
          <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-8 md:p-12 text-white mb-12">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">
              Ditte di Traslochi a Milano: Come Trovare l'Azienda Giusta
            </h1>
            <p className="text-xl text-blue-100 mb-6">
              Guida completa per scegliere la ditta di traslochi affidabile, evitare truffe e ottenere il miglior servizio
            </p>
            <div className="flex flex-wrap gap-4">
              <a href={`tel:${businessData.phoneFormatted}`} onClick={() => trackConversion('phone_click', 'hero')} className="inline-flex items-center space-x-2 bg-white text-blue-600 font-bold py-3 px-6 rounded-lg hover:bg-blue-50 transition-colors">
                <span>Chiama {businessData.phone}</span>
              </a>
              <a href={`https://wa.me/${businessData.phoneFormatted.replace(/\+/g, '')}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center space-x-2 bg-green-500 text-white font-bold py-3 px-6 rounded-lg hover:bg-green-600 transition-colors">
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

          <div className="prose prose-lg max-w-none">
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-4">Come Riconoscere una Ditta di Traslochi Seria</h2>
              <p className="text-gray-700 mb-6">Scegliere la ditta di traslochi sbagliata puo trasformare il tuo trasloco in un incubo. Ecco cosa verificare prima di affidarti a un'azienda:</p>

              <div className="space-y-6">
                {[
                  { title: 'Partita IVA e Iscrizione Camera di Commercio', desc: 'Una ditta seria ha partita IVA regolare, e iscritta alla Camera di Commercio e rilascia fattura. Diffidate da chi opera in nero o offre solo ricevute non fiscali.' },
                  { title: 'Assicurazione RC e Merci Trasportate', desc: 'Verifica che la ditta abbia assicurazione di responsabilita civile e copertura per le merci trasportate. Chiedi sempre di vedere i certificati assicurativi.' },
                  { title: 'Sede Fisica e Mezzi Propri', desc: 'Una ditta affidabile ha una sede fisica verificabile (non solo numero di cellulare) e mezzi propri intestati all azienda, non noleggiati per l occasione.' },
                  { title: 'Preventivo Scritto e Dettagliato', desc: 'Diffidate di preventivi solo telefonici. Una ditta seria fa sempre un sopralluogo gratuito e rilascia preventivo scritto con tutti i dettagli.' },
                  { title: 'Recensioni Google Verificate', desc: 'Controlla le recensioni su Google My Business. Almeno 10-20 recensioni verificate con foto e dettagli sono indice di affidabilita.' },
                  { title: 'Contratto con Condizioni Chiare', desc: 'Prima del trasloco deve esserci un contratto scritto che specifichi: cosa e incluso, tempi, costi, responsabilita, modalita di pagamento.' },
                ].map((item, idx) => (
                  <div key={idx} className="bg-white rounded-xl p-6 shadow-md border-l-4 border-blue-500">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{idx + 1}. {item.title}</h3>
                    <p className="text-gray-700">{item.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-4">Bandiere Rosse: Quando Diffidare</h2>
              <div className="bg-red-50 rounded-xl p-6 border-2 border-red-200">
                <ul className="space-y-3">
                  {[
                    'Prezzi troppo bassi (30-50% sotto la media di mercato)',
                    'Richiesta di pagamento anticipato totale in contanti',
                    'Nessun sopralluogo preventivo per traslochi completi',
                    'Impossibilita di vedere i mezzi e le attrezzature',
                    'Mancanza di contratto scritto o condizioni vaghe',
                    'Recensioni negative ripetute o assenza totale di recensioni',
                    'Numero di cellulare come unico contatto (no sede, no email aziendale)',
                    'Operatori senza divise aziendali o badge identificativi',
                  ].map((flag, idx) => (
                    <li key={idx} className="flex items-start space-x-2">
                      <span className="text-red-500 font-bold text-xl">⚠</span>
                      <span className="text-gray-700">{flag}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-4">Domande da Fare Prima di Scegliere</h2>
              <div className="space-y-4">
                {[
                  { q: 'Siete una ditta regolare con partita IVA?', a: 'Devono fornire numero partita IVA verificabile online sul sito dell Agenzia delle Entrate.' },
                  { q: 'Avete assicurazione per i mobili trasportati?', a: 'Devono mostrare certificato assicurativo valido e spiegare massimali e coperture.' },
                  { q: 'Il preventivo e definitivo o potrebbero esserci costi aggiuntivi?', a: 'Preventivo scritto deve essere vincolante. Costi extra solo se aggiungi servizi non previsti.' },
                  { q: 'Come gestite eventuali danni durante il trasloco?', a: 'Procedura chiara: denuncia immediata, perizia, rimborso tramite assicurazione entro tempi definiti.' },
                  { q: 'Posso vedere i vostri mezzi e depositi?', a: 'Ditta seria ti fa vedere furgoni, magazzini, attrezzature. Trasparenza totale.' },
                  { q: 'Quali garanzie offrite sul servizio?', a: 'Contratto scritto, assicurazione, possibilita di reclamo, eventuale risarcimento danni.' },
                ].map((item, idx) => (
                  <div key={idx} className="bg-gray-50 rounded-xl p-6">
                    <h3 className="text-lg font-bold text-blue-600 mb-2">{item.q}</h3>
                    <p className="text-gray-700">{item.a}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-4">Perche Scegliere Traslochi Milano Pro</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  { icon: '✓', title: 'Azienda Regolare', desc: 'Partita IVA, fattura, iscrizione CCIAA' },
                  { icon: '✓', title: 'Assicurazione Completa', desc: 'RC e merci trasportate fino a 50.000 €' },
                  { icon: '✓', title: 'Preventivo Gratuito', desc: 'Sopralluogo senza impegno in 24 ore' },
                  { icon: '✓', title: 'Prezzi Trasparenti', desc: 'Costi chiari, nessuna sorpresa finale' },
                  { icon: '✓', title: 'Team Professionale', desc: 'Operatori formati, divise aziendali' },
                  { icon: '✓', title: 'Recensioni 5 Stelle', desc: 'Clienti soddisfatti su Google' },
                  { icon: '✓', title: 'Mezzi Moderni', desc: 'Flotta propria, furgoni attrezzati' },
                  { icon: '✓', title: 'Disponibilita 24/7', desc: 'Anche weekend, festivi, urgenze' },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start space-x-3 bg-blue-50 rounded-lg p-4">
                    <span className="text-green-600 font-bold text-2xl">{item.icon}</span>
                    <div>
                      <h3 className="font-bold text-gray-900">{item.title}</h3>
                      <p className="text-sm text-gray-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-8 text-white text-center mt-12">
            <h2 className="text-3xl font-bold mb-4">Affidati a Professionisti Certificati</h2>
            <p className="text-xl text-blue-100 mb-6">Traslochiamo da oltre 10 anni a Milano con garanzia totale sui servizi</p>
            <a href={`tel:${businessData.phoneFormatted}`} className="inline-flex items-center space-x-2 bg-white text-blue-600 font-bold py-4 px-8 rounded-lg hover:bg-blue-50 transition-colors text-lg">
              <span>Chiama Ora: {businessData.phone}</span>
            </a>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
