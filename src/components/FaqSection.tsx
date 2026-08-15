import React, { useState } from 'react';
import { FAQS } from '../data/copyData';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { LifeKidsLogo } from './LifeKidsLogo';

export const FaqSection: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section className="py-20 md:py-28 bg-slate-50 text-slate-900 border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="flex justify-center mb-3">
            <LifeKidsLogo size="sm" />
          </div>
          <span className="bg-slate-200 text-slate-800 font-extrabold text-xs uppercase tracking-widest px-3.5 py-1 rounded-full">
            PREGUNTAS FRECUENTES
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mt-4 mb-3 tracking-tight">
            ¿Tienes dudas sobre el Programa?
          </h2>
          <p className="text-slate-600 text-sm sm:text-base font-medium">
            Aquí respondemos a las preguntas más comunes de padres, educadores y líderes de ministerio.
          </p>
        </div>

        {/* Accordion list */}
        <div className="space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-5 text-left font-bold text-slate-900 text-base sm:text-lg flex items-center justify-between gap-4 hover:bg-slate-50/80 transition-colors"
                >
                  <span className="flex items-center gap-3">
                    <HelpCircle className="w-5 h-5 text-amber-600 shrink-0" />
                    <span>{faq.question}</span>
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 text-amber-600' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-sm text-slate-600 font-medium leading-relaxed border-t border-slate-100">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
