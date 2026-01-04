import PhoneLink from "./components/PhoneLink";
import WhatsAppButton from "./components/WhatsAppButton";
import ContactForm from "./components/ContactForm";
import { Truck, Package, Shield, Clock, MapPin, Star, CheckCircle } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <header className="bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold">Traslochi Milano Pro</div>
          <PhoneLink className="text-white hover:text-blue-200 transition-colors" />
        </nav>

        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Traslochi Professionali a Milano
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100">
            Servizio 24/7 - Preventivo Gratuito - Esperienza Garantita
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#preventivo"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-50 transition-colors"
            >
              Richiedi Preventivo
            </a>
            <PhoneLink className="bg-blue-500 text-white px-8 py-4 rounded-lg hover:bg-blue-400 transition-colors" />
          </div>
        </div>
      </header>

      {/* Servizi */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">I Nostri Servizi</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Truck className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Traslochi Residenziali</h3>
              <p className="text-gray-600">Traslochi di case e appartamenti con cura e professionalita</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Package className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Traslochi Uffici</h3>
              <p className="text-gray-600">Trasferimento uffici e aziende in tempi rapidi</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Shield className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Imballaggio Sicuro</h3>
              <p className="text-gray-600">Materiale professionale per proteggere i tuoi beni</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Clock className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Servizio 24/7</h3>
              <p className="text-gray-600">Disponibili ogni giorno, anche festivi</p>
            </div>
          </div>
        </div>
      </section>

      {/* Perche Sceglierci */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Perche Scegliere Traslochi Milano Pro</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Esperienza Ventennale</h3>
              <p className="text-gray-600">Oltre 20 anni di esperienza nel settore traslochi</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Assicurazione Totale</h3>
              <p className="text-gray-600">Tutti i traslochi sono coperti da assicurazione</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Clienti Soddisfatti</h3>
              <p className="text-gray-600">4.8/5 stelle - oltre 127 recensioni positive</p>
            </div>
          </div>
        </div>
      </section>

      {/* Recensioni */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Cosa Dicono i Nostri Clienti</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="flex mb-4">
                {[1,2,3,4,5].map((i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 mb-4">Servizio eccellente! Hanno traslocato tutto con cura e professionalita. Consigliatissimi!</p>
              <p className="font-semibold">- Marco R., Milano</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="flex mb-4">
                {[1,2,3,4,5].map((i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 mb-4">Puntuali, veloci ed efficienti. Il miglior servizio di traslochi che abbia mai usato.</p>
              <p className="font-semibold">- Laura T., Milano</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="flex mb-4">
                {[1,2,3,4,5].map((i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 mb-4">Ottimo rapporto qualita-prezzo. Hanno gestito il trasloco del mio ufficio in modo impeccabile.</p>
              <p className="font-semibold">- Giuseppe M., Milano</p>
            </div>
          </div>
        </div>
      </section>

      {/* Form Preventivo */}
      <section id="preventivo" className="py-20">
        <div className="container mx-auto px-4 max-w-2xl">
          <h2 className="text-4xl font-bold text-center mb-4">Richiedi un Preventivo Gratuito</h2>
          <p className="text-center text-gray-600 mb-8">
            Compila il form e ti contatteremo entro 24 ore
          </p>
          <div className="bg-white rounded-lg shadow-xl p-8">
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Traslochi Milano Pro</h3>
              <p className="text-gray-400">Il tuo partner di fiducia per traslochi a Milano</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Contatti</h3>
              <div className="space-y-2 text-gray-400">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>Via Lodovico Ariosto, 19, 20145 Milano MI</span>
                </div>
                <div className="flex items-center gap-2">
                  <PhoneLink className="text-gray-400 hover:text-white" />
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Orari</h3>
              <p className="text-gray-400">Aperti 24 ore su 24, 7 giorni su 7</p>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>2026 Traslochi Milano Pro. Tutti i diritti riservati.</p>
          </div>
        </div>
      </footer>

      <WhatsAppButton />
    </div>
  );
}
