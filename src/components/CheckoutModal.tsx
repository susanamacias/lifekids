import React, { useState } from 'react';
import { X, ShieldCheck, Lock, CheckCircle2, Download } from 'lucide-react';
import { Currency } from '../types';
import { LifeKidsLogo } from './LifeKidsLogo';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  currency: Currency;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({ isOpen, onClose, currency }) => {
  if (!isOpen) return null;

  const [email, setEmail] = useState('');
  const [fullName, setFullName] = useState('');
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'paypal' | 'bizum'>('card');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const getDisplayPrice = () => {
    switch (currency) {
      case 'USD':
        return '$13.99 USD';
      case 'MXN':
        return '$270 MXN';
      case 'COP':
        return '$54.000 COP';
      default:
        return '12,99 €';
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setIsSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md animate-fadeIn">
      <div className="bg-slate-900 border border-orange-500/40 text-white rounded-3xl max-w-lg w-full p-6 sm:p-8 relative shadow-2xl overflow-hidden max-h-[92vh] flex flex-col justify-between">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSubmitted ? (
          <div>
            {/* Modal Header */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-2">
                <LifeKidsLogo size="sm" />
                <span className="text-orange-400 font-extrabold text-[10px] uppercase tracking-widest bg-orange-500/10 px-2.5 py-1 rounded-full border border-orange-500/30">
                  PAGO SEGURO
                </span>
              </div>
              <h3 className="text-2xl font-black text-white mt-2">
                Completa tu Pedido
              </h3>
              <p className="text-xs text-slate-300 font-medium">
                Descarga inmediata en PDF con acceso ilimitado para siempre + 12 meses de acceso digital interactivo.
              </p>
            </div>

            {/* Order Summary Box */}
            <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 mb-6">
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm font-bold text-white">Kit Life Kids (8 Componentes) + 3 Bonos Premium</span>
                <span className="text-lg font-black text-orange-400">{getDisplayPrice()}</span>
              </div>
              <p className="text-[11px] text-orange-300 font-medium mb-3">
                Precio especial de lanzamiento (Pago único sin suscripciones)
              </p>
              <ul className="text-[11px] text-slate-300 space-y-1.5 font-medium">
                <li>✔️ 8 Componentes PDF: Libro del Explorador, Guía Educador, Cuadernos 7-9 y 10-12 años, Conversemos en Familia, Enigma, Póster y Diploma (Acceso ilimitado para siempre)</li>
                <li>✔️ 3 Bonos Bilingües 🇪🇸 🇬🇧: Experiencia Digital Interactiva (12 Meses) + Devocional «Diseñados con Propósito» + Ebook «Aprende y Colorea»</li>
                <li>✨ EXTRA MUY ESPECIAL: Acompañamiento digital Life Kids</li>
              </ul>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1">
                  Nombre Completo
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ej: María García"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-orange-400"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1">
                  Correo Electrónico (donde recibirás los enlaces de descarga)
                </label>
                <input
                  type="email"
                  required
                  placeholder="ejemplo@correo.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-orange-400"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1">
                  Método de Pago
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: 'card', name: 'Tarjeta' },
                    { id: 'paypal', name: 'PayPal' },
                    { id: 'bizum', name: 'Bizum / Transfer' }
                  ].map((m) => (
                    <button
                      key={m.id}
                      type="button"
                      onClick={() => setPaymentMethod(m.id as any)}
                      className={`p-2.5 text-xs font-bold rounded-xl border transition-all text-center ${
                        paymentMethod === m.id
                          ? 'bg-orange-500 text-white border-orange-400 font-extrabold'
                          : 'bg-slate-800 text-slate-300 border-slate-700 hover:border-slate-600'
                      }`}
                    >
                      {m.name}
                    </button>
                  ))}
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-orange-500 via-amber-400 to-yellow-400 hover:from-orange-400 hover:to-yellow-300 text-slate-950 font-black text-base py-3.5 px-6 rounded-xl shadow-lg shadow-orange-500/25 flex items-center justify-center gap-2"
                >
                  <Lock className="w-4 h-4" />
                  <span>PAGAR Y DESCARGAR AHORA ({getDisplayPrice()})</span>
                </button>
              </div>
            </form>

            <div className="mt-4 text-center text-[11px] text-slate-400 flex items-center justify-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Garantía de Satisfacción 15 Días • Reembolso 100% Sin Preguntas</span>
            </div>
          </div>
        ) : (
          /* SUCCESS STATE */
          <div className="text-center py-6">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <h3 className="text-2xl font-black text-white mb-2">
              ¡Felicidades, {fullName || 'Familia'}!
            </h3>
            <p className="text-sm text-slate-300 mb-6">
              Tu orden ha sido procesada con éxito. Hemos enviado una copia de respaldo de todos los archivos en PDF a <strong className="text-orange-400">{email}</strong>.
            </p>

            <div className="bg-slate-950 p-6 rounded-2xl border border-orange-500/40 mb-6 space-y-3">
              <p className="text-xs font-bold text-sky-300 uppercase">
                Tus Descargas Inmediatas Están Listas:
              </p>
              <a
                href="#descarga-simulada"
                onClick={(e) => {
                  e.preventDefault();
                  alert(`¡Descarga iniciada! Todos los archivos en PDF del Programa Life Kids para ${email} se están descargando.`);
                }}
                className="block bg-gradient-to-r from-orange-500 to-amber-400 text-slate-950 font-black text-sm py-3 px-4 rounded-xl shadow-lg hover:scale-105 transition-transform flex items-center justify-center gap-2"
              >
                <Download className="w-4 h-4" />
                <span>DESCARGAR PACK COMPLETO PDF (ZIP)</span>
              </a>
            </div>

            <button
              onClick={onClose}
              className="text-xs font-bold text-slate-400 hover:text-white underline"
            >
              Cerrar ventana
            </button>
          </div>
        )}

      </div>
    </div>
  );
};

