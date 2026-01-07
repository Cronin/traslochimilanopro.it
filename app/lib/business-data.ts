export const businessData = {
  name: 'Traslochi Milano Pro',
  legalName: 'Traslochi Milano Pro',
  domain: 'traslochimilanopro.it',
  email: 'info@traslochimilanopro.it',
  phone: '02 4070 2372',
  phoneFormatted: '+390240702372',

  address: {
    street: 'Via Lodovico Ariosto, 19',
    city: 'Milano',
    province: 'MI',
    region: 'Lombardia',
    postalCode: '20145',
    country: 'Italy',
    countryCode: 'IT',
    fullAddress: 'Via Lodovico Ariosto, 19, 20145 Milano MI, Italy',
  },

  coordinates: {
    latitude: 45.4773,
    longitude: 9.1583,
  },

  hours: {
    display: '24 ore su 24, 7 giorni su 7',
    structured: [
      { day: 'Monday', open: '00:00', close: '23:59' },
      { day: 'Tuesday', open: '00:00', close: '23:59' },
      { day: 'Wednesday', open: '00:00', close: '23:59' },
      { day: 'Thursday', open: '00:00', close: '23:59' },
      { day: 'Friday', open: '00:00', close: '23:59' },
      { day: 'Saturday', open: '00:00', close: '23:59' },
      { day: 'Sunday', open: '00:00', close: '23:59' },
    ],
  },

  serviceType: 'MovingCompany',
  priceRange: '$$',

  services: [
    {
      name: 'Traslochi Residenziali',
      slug: 'traslochi-residenziali',
      description: 'Trasloco completo di case e appartamenti. Imballaggio, trasporto e montaggio mobili inclusi.',
      price: 'Da 300',
      icon: 'home',
    },
    {
      name: 'Traslochi Uffici',
      slug: 'traslochi-uffici',
      description: 'Trasferimento uffici e aziende con minimo disagio. Interventi anche nel weekend.',
      price: 'Da 500',
      icon: 'building',
    },
    {
      name: 'Traslochi Internazionali',
      slug: 'traslochi-internazionali',
      description: 'Traslochi in tutta Europa e nel mondo. Pratiche doganali e assicurazione incluse.',
      price: 'Su preventivo',
      icon: 'globe',
    },
    {
      name: 'Imballaggio Professionale',
      slug: 'imballaggio-professionale',
      description: 'Servizio di imballaggio con materiali di alta qualita. Protezione garantita per ogni oggetto.',
      price: 'Da 150',
      icon: 'package',
    },
    {
      name: 'Smontaggio e Montaggio',
      slug: 'smontaggio-montaggio',
      description: 'Smontaggio e rimontaggio mobili, cucine, armadi. Personale specializzato.',
      price: 'Da 100',
      icon: 'tool',
    },
    {
      name: 'Deposito e Custodia',
      slug: 'deposito-custodia',
      description: 'Magazzini custoditi e climatizzati per stoccaggio temporaneo o lungo termine.',
      price: 'Da 80/mese',
      icon: 'warehouse',
    },
    {
      name: 'Traslochi Urgenti',
      slug: 'traslochi-urgenti',
      description: 'Servizio express per traslochi dell\'ultimo minuto. Disponibili 24/7.',
      price: 'Da 400',
      icon: 'clock',
    },
    {
      name: 'Sgomberi e Svuotamento',
      slug: 'sgomberi-svuotamento',
      description: 'Svuotamento cantine, solai, uffici. Smaltimento rifiuti incluso.',
      price: 'Da 200',
      icon: 'trash',
    },
    {
      name: 'Noleggio Furgoni',
      slug: 'noleggio-furgoni',
      description: 'Furgoni attrezzati disponibili per traslochi fai-da-te. Con o senza autista.',
      price: 'Da 50/giorno',
      icon: 'truck',
    },
    {
      name: 'Pianoforti e Casseforti',
      slug: 'pianoforti-casseforti',
      description: 'Trasporto specializzato di oggetti pesanti e delicati. Attrezzature dedicate.',
      price: 'Da 250',
      icon: 'piano',
    },
  ],

  areasServed: [
    'Milano Centro',
    'Monza',
    'Bergamo',
    'Brescia',
    'Como',
    'Varese',
    'Pavia',
    'Lodi',
    'Lecco',
    'Sesto San Giovanni',
    'Cinisello Balsamo',
    'Rho',
    'Legnano',
    'Busto Arsizio',
    'Gallarate',
  ],

  certifications: [
    {
      name: 'Disponibilita 24/7',
      icon: '/badges/disponibilita.svg',
      description: 'Sempre operativi, anche festivi',
    },
    {
      name: 'Assicurazione Totale',
      icon: '/badges/garanzia.svg',
      description: 'Copertura completa su tutti i traslochi',
    },
  ],

  social: {
    facebook: '',
    instagram: '',
  },

  seo: {
    mainKeyword: 'traslochi milano',
    secondaryKeywords: [
      'ditta traslochi milano',
      'traslochi milano prezzi',
      'traslochi economici milano',
      'traslochi milano 24 ore',
      'traslochi uffici milano',
      'traslochi internazionali milano',
    ],
  },
}

export type BusinessData = typeof businessData
