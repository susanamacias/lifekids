import React from 'react';
import { BONO_PREMIUM_COPY } from '../data/copyData';
import { Gift, Tablet, BookMarked, Palette, Globe, Download, Sparkles } from 'lucide-react';
import bonusDigitalImg from '../assets/images/bonus_digital_1785099742961.jpg';
const devotionalCoverImg = "https://www.lifekidsclub.com/wp-content/uploads/2026/08/7-2.png";
const coloringCoverImg = "https://www.lifekidsclub.com/wp-content/uploads/2026/08/8-5.png";
import { InteractiveVideoPlayer } from './InteractiveVideoPlayer';

interface BonoProps {
  onOpenCheckout: () => void;
}

export const BonoPremium: React.FC<BonoProps> = ({ onOpenCheckout }) => {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-br from-slate-950 via-sky-950 to-slate-900 text-white relative overflow-hidden border-y-2 border-orange-400/50">
      {/* Background Lighting Effects */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-500/15 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Highlighted Ribbon Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-amber-400 text-slate-950 font-black text-xs md:text-sm tracking-widest uppercase px-5 py-2 rounded-full shadow-lg shadow-orange-500/30 mb-6">
            <Gift className="w-4 h-4 fill-slate-950" />
            <span>REGALO EXCLUSIVO HOY CON TU ORDEN</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight mb-4">
            {BONO_PREMIUM_COPY.title}
          </h2>

          <p className="text-base sm:text-lg text-slate-200 font-medium leading-relaxed max-w-2xl mx-auto mb-6">
            {BONO_PREMIUM_COPY.description}
          </p>

          <div className="inline-block bg-slate-900/90 border border-orange-400/40 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold text-orange-300">
            Regalo exclusivo — <span className="text-emerald-400 font-black uppercase">100% GRATIS (Acceso Anual + 2 Ebooks)</span> al comprar hoy todo el contenido del Kit Life Kids.
          </div>
        </div>

        {/* Main Grid: Video Player on left, 3 Bonus Cards on right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch max-w-5xl mx-auto mb-12">
          
          {/* Digital Bonus Video Player & Covers Showcase */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
            <div>
              <InteractiveVideoPlayer posterImage={bonusDigitalImg} />
              <div className="mt-3 text-center text-xs text-sky-200/90 font-medium bg-slate-900/60 p-2.5 rounded-xl border border-sky-800/40">
                💡 <span className="text-white font-bold">Experiencia Interactiva:</span> Formato online para computadores, tablets y móviles.
              </div>
            </div>

            {/* Visual Showcase of the 2 physical/PDF covers */}
            <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-4 shadow-lg">
              <div className="flex items-center gap-2 text-xs font-bold text-amber-300 mb-3">
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span>Portadas Oficiales de los 2 Regalos Ebook:</span>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="group relative rounded-xl overflow-hidden border border-orange-500/30 bg-slate-950 p-1.5 transition-transform hover:scale-105 shadow-md">
                  <img
                    src={devotionalCoverImg}
                    alt="Portada Devocional Diseñados con Propósito"
                    referrerPolicy="no-referrer"
                    className="w-full aspect-[3/4] object-cover rounded-lg"
                  />
                  <div className="mt-1.5 text-[11px] font-bold text-center text-amber-200 truncate">
                    Devocional 7 Días
                  </div>
                </div>
                <div className="group relative rounded-xl overflow-hidden border border-orange-500/30 bg-slate-950 p-1.5 transition-transform hover:scale-105 shadow-md">
                  <img
                    src={coloringCoverImg}
                    alt="Portada Libro para Colorear y Aprender"
                    referrerPolicy="no-referrer"
                    className="w-full aspect-[3/4] object-cover rounded-lg"
                  />
                  <div className="mt-1.5 text-[11px] font-bold text-center text-rose-200 truncate">
                    Libro para Colorear
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 3 Detailed Bonus Cards */}
          <div className="lg:col-span-7 space-y-4 flex flex-col justify-center">
            {BONO_PREMIUM_COPY.bonuses.map((bonus, idx) => (
              <div
                key={idx}
                className="bg-slate-900/90 border border-orange-500/30 hover:border-orange-400/80 rounded-2xl p-5 md:p-6 transition-all duration-300 shadow-lg backdrop-blur-sm relative overflow-hidden group"
              >
                <div className="flex items-start gap-4">
                  {/* Clean Icon Box */}
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500/20 to-amber-500/20 border border-orange-400/40 flex items-center justify-center text-orange-300 shrink-0 shadow-inner mt-0.5">
                    {bonus.icon === 'Tablet' && <Tablet className="w-6 h-6" />}
                    {bonus.icon === 'BookMarked' && <BookMarked className="w-6 h-6" />}
                    {bonus.icon === 'Palette' && <Palette className="w-6 h-6" />}
                    {bonus.icon === 'Globe' && <Globe className="w-6 h-6" />}
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                      <h3 className="text-base sm:text-lg font-bold text-white leading-snug">
                        {bonus.title}
                      </h3>
                      <span className="text-[11px] font-extrabold text-emerald-300 bg-emerald-950/80 px-2.5 py-0.5 rounded-full border border-emerald-500/40 shrink-0">
                        {bonus.value}
                      </span>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal mb-3">
                      {bonus.description}
                    </p>

                    {/* Additional tags for clarity */}
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="inline-flex items-center gap-1.5 text-[11px] font-bold text-sky-200 bg-sky-950/90 px-3 py-1 rounded-full border border-sky-700/60 shadow-sm">
                        <span className="text-sm leading-none">🇪🇸 🇬🇧</span>
                        <span>Bilingüe (Español / English)</span>
                      </span>
                      {idx === 0 && (
                        <span className="inline-flex items-center gap-1 text-[11px] font-bold text-amber-300 bg-amber-950/80 px-2.5 py-1 rounded-full border border-amber-800/50">
                          ⏱️ 12 Meses de Acceso
                        </span>
                      )}
                      {idx === 1 && (
                        <span className="inline-flex items-center gap-1 text-[11px] font-bold text-orange-300 bg-orange-950/80 px-2.5 py-1 rounded-full border border-orange-800/50">
                          📖 Guía Devocional de 7 Días
                        </span>
                      )}
                      {idx === 2 && (
                        <span className="inline-flex items-center gap-1 text-[11px] font-bold text-rose-300 bg-rose-950/80 px-2.5 py-1 rounded-full border border-rose-800/50">
                          🎨 Libro para Colorear y Aprender
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Callout Inside Bonus Section */}
        <div className="text-center bg-slate-900/95 border border-orange-400/40 rounded-2xl p-6 max-w-2xl mx-auto shadow-2xl">
          <p className="text-sm sm:text-base font-bold text-slate-100 mb-4 leading-relaxed">
            ¡Llévate todo el contenido del Kit Life Kids + Los 3 Bonos Premium por solo <span className="text-2xl font-black text-orange-400 whitespace-nowrap">12,99 €</span>!
          </p>
          <button
            onClick={onOpenCheckout}
            className="w-full sm:w-auto bg-gradient-to-r from-orange-500 via-amber-400 to-yellow-400 hover:from-orange-400 hover:to-yellow-300 text-slate-950 font-black text-base py-3.5 px-8 rounded-xl shadow-lg shadow-orange-500/25 transition-all hover:scale-105 inline-flex items-center justify-center gap-2"
          >
            <Download className="w-5 h-5" />
            <span>Reclamar Todo el contenido del Kit Life Kids + Bono Premium por 12,99 €</span>
          </button>
        </div>

      </div>
    </section>
  );
};

