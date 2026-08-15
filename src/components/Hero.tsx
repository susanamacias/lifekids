import React from 'react';
import { HERO_COPY } from '../data/copyData';
import { CheckCircle2, Download, ShieldCheck, Star, Zap } from 'lucide-react';
import { LifeKidsLogo } from './LifeKidsLogo';

const heroBundleImg = "https://www.lifekidsclub.com/wp-content/uploads/2026/07/todos-los-libros.png";

interface HeroProps {
  onOpenCheckout: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenCheckout }) => {
  return (
    <section className="relative bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white pt-8 pb-16 md:pt-14 md:pb-24 overflow-hidden border-b border-slate-800">
      {/* Background Decorative Glow Elements in Brand Colors */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-orange-500/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-sky-500/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Prominent Logo & Category Pill Tag */}
        <div className="flex flex-col items-center justify-center mb-6 text-center gap-3">
          <LifeKidsLogo size="xl" showSubtitle={true} />
          
          <div className="mt-3 inline-flex items-center gap-2 bg-gradient-to-r from-orange-500/20 via-amber-500/20 to-teal-500/20 border border-orange-500/40 text-orange-300 px-4 py-2 rounded-full text-xs sm:text-sm font-extrabold tracking-wide shadow-sm backdrop-blur-sm">
            <Zap className="w-4 h-4 text-orange-400 fill-orange-400 shrink-0" />
            <span>¿Venimos de una simple casualidad o de un Diseño Inteligente?</span>
          </div>
        </div>

        {/* Main Huge Headline (H1) */}
        <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-center tracking-tight leading-[1.15] max-w-5xl mx-auto mb-6">
          <span className="bg-gradient-to-r from-white via-orange-100 to-amber-200 text-transparent bg-clip-text drop-shadow-md">
            Prepara a tus hijos para fortalecer su fe en un mundo que cada día cuestiona lo que creen.
          </span>
        </h1>

        {/* Subtitle Description */}
        <p className="text-base sm:text-lg md:text-xl text-slate-300 text-center font-normal leading-relaxed max-w-4xl mx-auto mb-10">
          {HERO_COPY.subheadline}
        </p>

        {/* Hero Visual Mockup Box */}
        <div className="relative max-w-4xl lg:max-w-5xl mx-auto mb-10 group">
          <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 via-amber-400 to-teal-400 rounded-3xl blur-xl opacity-50 group-hover:opacity-80 transition duration-500" />
          <div className="relative bg-slate-900 border-2 border-orange-400/70 rounded-3xl p-2 sm:p-4 shadow-2xl overflow-hidden flex items-center justify-center">
            <img
              src={heroBundleImg}
              alt="Programa Educativo Life Kids Mockup Completo"
              className="w-full h-auto max-h-[550px] sm:max-h-[650px] object-contain rounded-2xl shadow-md transform transition-transform duration-700 group-hover:scale-[1.01]"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>

        {/* Price Tag Callout & Conversion Box */}
        <div className="bg-slate-800/90 border border-orange-500/40 rounded-2xl p-6 md:p-8 max-w-2xl mx-auto text-center shadow-2xl backdrop-blur-md">
          {/* Rating Proof */}
          <div className="flex flex-col items-center justify-center gap-2 mb-4">
            <div className="flex items-center justify-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
              ))}
            </div>
            <div className="text-xs sm:text-sm font-semibold text-slate-200 space-y-1 text-center max-w-lg leading-relaxed">
              <p>👧👦 Más de 400 niños han aprendido con Life Kids.</p>
              <p>🏡 Ideal para familias, iglesias, colegios, escuelas, educación en casa (homeschooling), campamentos cristianos y clubes infantiles.</p>
              <p>📖 Fundamentado en principios bíblicos, psicología educativa y desarrollo infantil.</p>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center gap-1 mb-2">
            <span className="text-xl sm:text-2xl md:text-3xl font-black text-orange-400 text-center">
              Precio especial de lanzamiento: 12,99 €
            </span>
            <span className="text-xs sm:text-sm text-slate-300 font-semibold">
              (Pago único sin suscripciones)
            </span>
          </div>

          <p className="text-xs text-slate-300 mb-6 font-medium">
            Archivos PDF con descarga inmediata y acceso ilimitado para siempre + 12 meses de acceso digital interactivo
          </p>

          {/* Big CTA Button in LIFEkids Orange & Yellow */}
          <button
            onClick={onOpenCheckout}
            className="w-full bg-gradient-to-r from-orange-500 via-amber-400 to-yellow-400 hover:from-orange-400 hover:to-yellow-300 text-slate-950 font-black text-base sm:text-lg md:text-xl py-4 px-6 rounded-xl shadow-xl shadow-orange-500/25 transform transition-all hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-3"
          >
            <Download className="w-6 h-6" />
            <span>{HERO_COPY.ctaText}</span>
          </button>

          {/* Micro Guarantee Labels */}
          <div className="grid grid-cols-3 gap-2 mt-6 pt-5 border-t border-slate-700/60 text-[11px] sm:text-xs text-slate-300 font-medium">
            <div className="flex items-center justify-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
              <span>Descarga PDF Inmediata</span>
            </div>
            <div className="flex items-center justify-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-sky-400 flex-shrink-0" />
              <span>Garantía 15 Días</span>
            </div>
            <div className="flex items-center justify-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
              <span>Pago 100% Seguro</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

