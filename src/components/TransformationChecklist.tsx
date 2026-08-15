import React from 'react';
import { TRANSFORMATION_COPY } from '../data/copyData';
import { CheckCircle2 } from 'lucide-react';

export const TransformationChecklist: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-white text-slate-900 border-b border-slate-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="bg-sky-50 text-sky-700 font-extrabold text-xs md:text-sm tracking-widest uppercase px-3.5 py-1 rounded-full border border-sky-200">
            RESULTADOS REALES Y VISIBLES
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 mt-4 mb-4 tracking-tight">
            {TRANSFORMATION_COPY.title}
          </h2>
          <p className="text-base sm:text-lg md:text-xl font-medium text-slate-700 leading-relaxed max-w-2xl mx-auto">
            {TRANSFORMATION_COPY.lead}
          </p>
        </div>

        {/* Checkmarks Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 max-w-4xl mx-auto">
          {TRANSFORMATION_COPY.points.map((point, idx) => (
            <div
              key={idx}
              className="bg-slate-50 rounded-2xl p-5 border border-slate-200/80 shadow-sm hover:shadow-md hover:border-orange-400 transition-all duration-300 flex items-start gap-4"
            >
              <div className="w-9 h-9 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                <CheckCircle2 className="w-6 h-6 stroke-[2.5]" />
              </div>
              <p className="text-sm sm:text-base font-semibold text-slate-800 leading-snug">
                {point}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

