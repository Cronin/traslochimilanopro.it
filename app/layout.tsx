import type { Metadata } from 'next'
import Script from "next/script";
import { Inter, Montserrat } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://traslochimilanopro.it'),
  title: {
    default: 'Traslochi Milano Pro | Servizio 24/7 | 02 4070 2372',
    template: '%s | Traslochi Milano Pro'
  },
  description: 'Traslochi Milano 24/7. Servizio professionale per traslochi residenziali, uffici, internazionali. Preventivo gratuito. Chiama ora 02 4070 2372. Via Lodovico Ariosto, 19, Milano.',
  keywords: [
    'traslochi milano',
    'ditta traslochi milano',
    'traslochi milano prezzi',
    'traslochi economici milano',
    'traslochi milano 24 ore',
    'traslochi uffici milano',
    'traslochi internazionali milano',
    'imballaggio trasloco milano',
    'deposito mobili milano'
  ],
  authors: [{ name: 'Traslochi Milano Pro' }],
  creator: 'Traslochi Milano Pro',
  publisher: 'Traslochi Milano Pro',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'it_IT',
    url: 'https://traslochimilanopro.it',
    title: 'Traslochi Milano Pro | Servizio 24/7 | 02 4070 2372',
    description: 'Traslochi Milano 24/7. Servizio professionale per traslochi residenziali, uffici, internazionali. Preventivo gratuito. Chiama ora 02 4070 2372.',
    siteName: 'Traslochi Milano Pro',
    images: [
      {
        url: 'https://traslochimilanopro.it/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'Traslochi Milano Pro - Servizio Professionale 24/7',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Traslochi Milano Pro | Servizio 24/7 | 02 4070 2372',
    description: 'Traslochi Milano 24/7. Servizio professionale per traslochi residenziali, uffici, internazionali. Preventivo gratuito. Chiama ora 02 4070 2372.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Quanto costa un trasloco a Milano?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Il costo di un trasloco a Milano dipende da diversi fattori: volume dei mobili, distanza, piano, accessibilita. I traslochi residenziali partono da 300 euro, quelli per uffici da 500 euro. Offriamo sempre un sopralluogo gratuito per un preventivo preciso e senza sorprese."
        }
      },
      {
        "@type": "Question",
        "name": "Quanto tempo prima devo prenotare il trasloco?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Consigliamo di prenotare con almeno 2-3 settimane di anticipo, soprattutto nei periodi di alta stagione (fine mese, estate). Per traslochi urgenti siamo comunque disponibili 24/7 e possiamo organizzare interventi anche in 24-48 ore."
        }
      },
      {
        "@type": "Question",
        "name": "I mobili sono assicurati durante il trasloco?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Si, tutti i nostri traslochi sono coperti da assicurazione completa. In caso di danni accidentali durante il trasporto, i vostri beni sono completamente tutelati. Forniamo documentazione scritta della copertura assicurativa."
        }
      },
      {
        "@type": "Question",
        "name": "Offrite servizio di imballaggio?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Si, offriamo servizio di imballaggio professionale completo. Il nostro team utilizza materiali di alta qualita (scatole rinforzate, pluriball, carta da imballaggio) per proteggere ogni oggetto. Possiamo imballare tutto noi o fornirvi i materiali per il fai-da-te."
        }
      },
      {
        "@type": "Question",
        "name": "Fate traslochi internazionali?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Si, effettuiamo traslochi in tutta Europa e nel mondo. Ci occupiamo di tutte le pratiche doganali, documenti di trasporto e assicurazione internazionale. Offriamo sia trasporto via terra che via mare per destinazioni extra-europee."
        }
      }
    ]
  };

  return (
    <html lang="it" className={`${inter.variable} ${montserrat.variable}`}>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/favicon.png" type="image/png" sizes="180x180" />
        <link rel="alternate icon" href="/favicon.ico" sizes="32x32" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqSchema),
          }}
        />

      {/* Microsoft Clarity */}
      <Script
        id="clarity-script"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "u1ur4kb2kq");
          `,
        }}
      />
      </head>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  )
}
