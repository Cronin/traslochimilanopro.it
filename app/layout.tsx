import type { Metadata } from "next";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://traslochimilanopro.it"),
  title: {
    default: "Traslochi Milano Pro | Traslochi 24/7 a Milano",
    template: "%s | Traslochi Milano Pro",
  },
  description: "Traslochi a Milano disponibili 24h. Servizio professionale per traslochi residenziali, uffici, magazzini. Preventivo gratuito. Via Lodovico Ariosto, 19, Milano. Tel: 379 172 1331",
  keywords: "traslochi milano, trasloco milano, ditta traslochi milano, traslochi economici milano, traslochi professionali",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="it" className="scroll-smooth">
      <head>
        {/* Google Tag Manager */}
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-TRASLOCHI1');
            `,
          }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Space+Grotesk:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-TRASLOCHI1"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {children}
        <Analytics />
        <SpeedInsights />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
  "@context": "https://schema.org",
  "@type": "MovingCompany",
  "name": "Traslochi Milano Pro",
  "url": "https://traslochimilanopro.it",
  "logo": "https://traslochimilanopro.it/logo.png",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Via Lodovico Ariosto, 19",
    "addressLocality": "Milano",
    "postalCode": "20145",
    "addressCountry": "IT"
  },
  "telephone": "+39 379 172 1331",
  "openingHours": "Mo-Su 00:00-23:59",
  "priceRange": "€€",
  "areaServed": {
    "@type": "City",
    "name": "Milano"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "127"
  }
})
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
  "@context": "https://schema.org",
  "@type": "WebSite",
  "url": "https://traslochimilanopro.it",
  "name": "Traslochi Milano Pro",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://traslochimilanopro.it/search?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
})
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

        {/* Google Analytics - TO BE CONFIGURED */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-PLACEHOLDER"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-PLACEHOLDER', {
              page_path: window.location.pathname,
            });
          `}
        </Script>

      </body>
    </html>
  );
}
