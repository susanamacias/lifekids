import React from 'react';
import { WHY_WORKS_COPY } from '../data/copyData';
import { Brain, Compass, BookOpenCheck, HeartHandshake } from 'lucide-react';

export const WhyLifeKidsWorks: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Brain':
        return <Brain className="w-7 h-7 text-orange-500" />;
      case 'Compass':
        return <Compass className="w-7 h-7 text-sky-500" />;
      case 'BookOpenCheck':
        return <BookOpenCheck className="w-7 h-7 text-indigo-600" />;
      case 'HeartHandshake':
        return <HeartHandshake className="w-7 h-7 text-emerald-500" />;
      default:
        return <Brain className="w-7 h-7 text-orange-500" />;
    }
  };

  const cardThemes = [
    { badgeBg: 'bg-orange-100 text-orange-700 border-orange-200', iconBg: 'bg-orange-100 border-orange-200', accent: 'text-orange-600', dot: 'bg-orange-500' },
    { badgeBg: 'bg-sky-100 text-sky-700 border-sky-200', iconBg: 'bg-sky-100 border-sky-200', accent: 'text-sky-600', dot: 'bg-sky-500' },
    { badgeBg: 'bg-indigo-100 text-indigo-700 border-indigo-200', iconBg: 'bg-indigo-100 border-indigo-200', accent: 'text-indigo-600', dot: 'bg-indigo-500' },
    { badgeBg: 'bg-emerald-100 text-emerald-700 border-emerald-200', iconBg: 'bg-emerald-100 border-emerald-200', accent: 'text-emerald-600', dot: 'bg-emerald-500' },
  ];

  return (
    <section className="py-16 md:py-24 bg-slate-50 text-slate-900 border-b border-slate-200/80 relative overflow-hidden">
      {/* Soft colorful background accents */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-orange-200/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-sky-200/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="bg-orange-100/90 text-orange-800 font-extrabold text-xs md:text-sm tracking-widest uppercase px-3.5 py-1.5 rounded-full border border-orange-300">
            METODOLOGÍA EDUCATIVA
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 mt-4 mb-6 tracking-tight">
            {WHY_WORKS_COPY.title}
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-slate-700 font-medium leading-relaxed bg-white p-6 rounded-2xl border border-slate-200 shadow-sm backdrop-blur-sm">
            {WHY_WORKS_COPY.intro}
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
          {WHY_WORKS_COPY.cards.map((card, idx) => {
            const theme = cardThemes[idx % cardThemes.length];
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl p-7 border border-slate-200 shadow-sm hover:shadow-xl hover:border-orange-300 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
              >
                <div>
                  <div className={`w-14 h-14 rounded-2xl ${theme.iconBg} border flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}>
                    {getIcon(card.icon)}
                  </div>
                  <h3 className="text-xl font-black text-slate-900 mb-3 group-hover:text-orange-600 transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-sm text-slate-600 font-medium leading-relaxed">
                    {card.description}
                  </p>
                </div>

                <div className={`mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold ${theme.accent}`}>
                  <span>Pilar Metodológico #{idx + 1}</span>
                  <span className={`w-2.5 h-2.5 rounded-full ${theme.dot}`} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

