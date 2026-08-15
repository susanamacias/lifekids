import React from 'react';
import { Currency } from '../types';
import { Check, ShieldCheck, Download, Lock, Clock, Sparkles } from 'lucide-react';
import { LifeKidsLogo } from './LifeKidsLogo';

interface PricingProps {
  onOpenCheckout: () => void;
  currency: Currency;
  setCurrency: (c: Currency) => void;
}

export const PricingCheckout: React.FC<PricingProps> = ({ onOpenCheckout, currency, setCurrency }) => {
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

  return (
    <section id="oferta" className="py-20 md:py-28 bg-slate-900 text-white relative border-b border-slate-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-10">
          <div className="flex justify-center mb-4">
            <LifeKidsLogo size="md" showSubtitle />
          </div>
          <span className="bg-orange-500/20 text-orange-300 font-bold text-xs uppercase tracking-widest px-4 py-1.5 rounded-full border border-orange-500/40">
            OFERTA DE TIEMPO LIMITADO
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mt-4 mb-3 tracking-tight">
            Consigue el Pack Completo
          </h2>
          <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto font-medium">
            Acceso instantáneo para descargar e imprimir hoy mismo. Sin suscripciones ni cobros recurrentes.
          </p>
        </div>

        {/* Currency Toggle */}
        <div className="flex justify-center mb-8">
          <div className="bg-slate-800 p-1.5 rounded-xl border border-slate-700 inline-flex items-center gap-1 text-xs font-bold">
            <span className="text-slate-400 px-2">Moneda:</span>
            {(['EUR', 'USD', 'MXN', 'COP'] as Currency[]).map((c) => (
              <button
                key={c}
                onClick={() => setCurrency(c)}
                className={`px-3 py-1.5 rounded-lg transition-all ${
                  currency === c
                    ? 'bg-orange-500 text-white font-black shadow-md'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        {/* Offer Stack Box */}
        <div className="bg-gradient-to-b from-slate-800/90 to-slate-900 border-2 border-orange-500/60 rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          
          {/* Top Banner Tag */}
          <div className="absolute top-0 right-0 bg-gradient-to-l from-orange-500 to-amber-400 text-slate-950 text-[11px] font-black uppercase px-6 py-1.5 rounded-bl-2xl tracking-wider shadow-md">
            Pago Único Sin Suscripciones
          </div>

          <div className="mb-8">
            <h3 className="text-xl sm:text-2xl font-extrabold text-white mb-2">
              Todo lo que recibirás hoy:
            </h3>
            <p className="text-xs text-sky-300 font-bold">
              Archivos PDF con Descarga Inmediata y Acceso Ilimitado para Siempre + Experiencia Digital Interactiva (12 Meses)
            </p>
          </div>

          {/* Checklist Stack */}
          <div className="space-y-3 mb-8">
            {[
              '📖 Libro del Explorador (formato revista a todo color con 8 lecciones de ciencia y Biblia)',
              '👩‍🏫 Guía del Educador (manual para padres y maestros con explicaciones paso a paso)',
              '🧒 Cuaderno de Actividades para 7 a 9 años (fichas prácticas para etapas tempranas)',
              '👧 Cuaderno de Actividades para 10 a 12 años (desafíos analíticos para preadolescentes)',
              '👨‍👩‍👧 Conversemos en Familia (guías de diálogo y preguntas de reflexión para la mesa)',
              '🧩 Resolviendo el Enigma (misiones de investigación científica y observación en la naturaleza)',
              '🖼️ Póster Ilustrado en A4 (lámina en alta resolución lista para imprimir y decorar)',
              '🎓 Diploma de Explorador (certificado de reconocimiento personalizable para premiar su esfuerzo)',
              '🎁 BONUS 1: 🇪🇸 🇬🇧 Experiencia Digital Interactiva Bilingüe (12 meses de acceso online en tablet, PC o móvil)',
              '🎁 BONUS 2: 🇪🇸 🇬🇧 Guía Devocional de 7 Días Bilingüe «Diseñados con Propósito / Designed with Purpose»',
              '🎁 BONUS 3: 🇪🇸 🇬🇧 Libro para Colorear y Aprender Bilingüe «Aprende y Colorea / Learn and Color»'
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-3 text-xs sm:text-sm text-slate-200 font-medium bg-slate-950/40 p-2.5 rounded-xl border border-slate-800">
                <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <span>{item}</span>
              </div>
            ))}

            {/* Bloque Especial: EXTRA MUY ESPECIAL */}
            <div className="mt-4 p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-amber-500/15 via-orange-500/10 to-amber-500/15 border-2 border-amber-400/50 shadow-lg shadow-amber-500/10 relative overflow-hidden">
              <div className="flex items-start gap-3.5">
                <div className="w-7 h-7 rounded-xl bg-amber-400/20 text-amber-300 flex items-center justify-center shrink-0 border border-amber-400/40 mt-0.5 shadow-sm">
                  <Sparkles className="w-4 h-4 text-amber-300" />
                </div>
                <div className="space-y-1">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-amber-400/20 text-amber-300 text-[11px] font-black tracking-wider uppercase border border-amber-400/30">
                    ✨ EXTRA MUY ESPECIAL
                  </div>
                  <h4 className="text-sm sm:text-base font-extrabold text-white flex items-center gap-2 pt-0.5">
                    <span>Acompañamiento digital Life Kids</span>
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-300 font-medium leading-relaxed">
                    Un acompañante digital de Susana Macías para ayudarte a responder las grandes preguntas de tus hijos con el enfoque de Life Kids.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Price Box & Highlights */}
          <div className="bg-slate-950/80 border border-orange-500/40 rounded-2xl p-6 text-center mb-8">
            <div className="text-xs text-orange-400 uppercase font-bold tracking-widest mb-2">
              Precio Especial de Lanzamiento
            </div>

            <div className="flex items-baseline justify-center gap-3 mb-1">
              <span className="text-4xl sm:text-5xl md:text-6xl font-black text-orange-400">
                {getDisplayPrice()}
              </span>
            </div>
            <div className="text-xs text-slate-300 font-semibold mb-3">
              (Pago único sin suscripciones)
            </div>
            <p className="text-xs text-emerald-400 font-bold mt-2 flex items-center justify-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              <span>Archivos PDF con descarga inmediata y acceso ilimitado para siempre.</span>
            </p>
          </div>

          {/* Action Button */}
          <button
            onClick={onOpenCheckout}
            className="w-full bg-gradient-to-r from-orange-500 via-amber-400 to-yellow-400 hover:from-orange-400 hover:to-yellow-300 text-slate-950 font-black text-lg sm:text-xl py-4 px-6 rounded-2xl shadow-xl shadow-orange-500/25 transform transition-all hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-3"
          >
            <Download className="w-6 h-6" />
            <span>DESCARGAR TODO EL CONTENIDO DEL KIT LIFE KIDS AHORA</span>
          </button>

          {/* Guarantee Seal Box */}
          <div className="mt-8 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center gap-4 bg-slate-950/30 p-4 rounded-2xl">
            <div className="w-12 h-12 rounded-2xl bg-orange-500/20 text-orange-400 flex items-center justify-center shrink-0 border border-orange-500/40">
              <ShieldCheck className="w-7 h-7" />
            </div>
            <div className="text-center sm:text-left">
              <h4 className="text-sm font-bold text-white mb-0.5">
                Garantía Incondicional de 15 Días — 100% Sin Riesgo
              </h4>
              <p className="text-xs text-slate-400">
                Prueba Life Kids con tus hijos. Si por cualquier motivo no quedas totalmente satisfecho, te reembolsamos el 100% de tu dinero inmediatamente.
              </p>
            </div>
          </div>

        </div>

        {/* Security & Payment Badges */}
        <div className="mt-8 text-center flex items-center justify-center gap-4 text-xs text-slate-400 font-medium">
          <div className="flex items-center gap-1">
            <Lock className="w-4 h-4 text-sky-400" />
            <span>Encriptación SSL 256-bit</span>
          </div>
          <span>•</span>
          <span>Pago Seguro con Tarjeta o PayPal</span>
          <span>•</span>
          <span>Descarga Inmediata</span>
        </div>

      </div>
    </section>
  );
};

