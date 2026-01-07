import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://traslochimilanopro.it'
  const lastModified = new Date()

  const seoPages = [
    'trasloco-al-km-come-calcolare-il-costo-del-trasporto-mobili',
    'quanto-costa-un-trasloco-a-milano-tutto-quello-che-devi-sapere-sui-prezzi',
    'ditte-di-traslochi-a-milano-trova-lazienda-di-traslochi-giusta-per-te',
    'traslochi-milano-economici-soluzioni-convenienti-per-ogni-esigenza',
    'listino-prezzi-traslochi-milano-scopri-le-tariffe-e-richiedi-un-preventivo',
    'traslochi-in-zona-milano-servizi-di-trasporto-vicino-a-te',
    'trasloco-nella-stessa-citta-come-organizzarsi-e-ridurre-le-spese',
    'simulazione-preventivo-trasloco-ottieni-una-stima-personalizzata',
  ]

  return [
    {
      url: baseUrl,
      lastModified,
      changeFrequency: 'weekly',
      priority: 1,
    },
    ...seoPages.map((slug) => ({
      url: `${baseUrl}/${slug}/`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
  ]
}
