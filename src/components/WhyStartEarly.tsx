import React from 'react';
import { WHY_START_EARLY_COPY } from '../data/copyData';
import { Lightbulb, Quote } from 'lucide-react';
import kidsFaithScienceImg from '../assets/images/kids_faith_science_hero_1785101748946.jpg';

export const WhyStartEarly: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-slate-900 text-white relative overflow-hidden border-b border-slate-800">
      {/* Background Decorative Element */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ff7000_1px,transparent_1px)] [background-size:16px_16px]" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-slate-800/90 border border-slate-700/80 rounded-3xl p-6 sm:p-10 shadow-2xl relative">
          
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 bg-orange-500/20 text-orange-300 border border-orange-500/30 px-4 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase mb-4">
              <Lightbulb className="w-4 h-4 text-orange-400" />
              <span>{WHY_START_EARLY_COPY.badge}</span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight leading-snug">
              {WHY_START_EARLY_COPY.title}
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Visual Image Showcase */}
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 via-teal-400 to-sky-500 rounded-2xl blur opacity-50 group-hover:opacity-80 transition duration-500" />
                <div className="relative bg-slate-950 border border-slate-700 rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src={kidsFaithScienceImg}
                    alt="Niños explorando la ciencia y la fe"
                    className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute bottom-3 left-3 right-3 bg-slate-950/80 backdrop-blur-md p-3 rounded-xl border border-slate-800 text-center">
                    <p className="text-xs sm:text-sm font-extrabold text-sky-300">
                      {WHY_START_EARLY_COPY.imageCaption}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Copy Content & Bible Verse */}
            <div className="lg:col-span-7 order-1 lg:order-2 space-y-5">
              {/* Main Text Paragraph */}
              <div className="p-6 sm:p-7 rounded-2xl bg-slate-900/90 border border-slate-700/80 text-left shadow-lg">
                <p className="text-sm sm:text-base md:text-lg text-slate-200 font-normal leading-relaxed">
                  {WHY_START_EARLY_COPY.bodyText}
                </p>
              </div>

              {/* Bible Verse Box Below */}
              <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-orange-500/15 via-amber-500/10 to-teal-500/15 border border-orange-500/40 text-center shadow-lg relative">
                <Quote className="w-8 h-8 text-orange-400/20 absolute top-3 left-3 pointer-events-none" />
                <p className="text-sm sm:text-base md:text-lg italic font-serif text-amber-100 leading-relaxed px-2">
                  {WHY_START_EARLY_COPY.quoteText}
                </p>
                <p className="text-xs sm:text-sm font-bold text-orange-400 tracking-wider mt-2">
                  {WHY_START_EARLY_COPY.quoteRef}
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};


