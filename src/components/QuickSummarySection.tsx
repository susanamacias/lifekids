import React from 'react';
import { BookOpen, Users, Home, Laptop, Tag, CheckCircle2 } from 'lucide-react';

interface QuickSummarySectionProps {
  onOpenCheckout?: () => void;
}

export const QuickSummarySection: React.FC<QuickSummarySectionProps> = ({ onOpenCheckout }) => {
  const highlights = [
    {
      emoji: "📚",
      icon: BookOpen,
      title: "Más de 200 páginas de recursos",
      description: "Cuadernos de trabajo, actividades guiadas y revista digital interactiva.",
      highlightColor: "from-amber-500/20 to-orange-500/10 border-amber-500/30",
    },
    {
      emoji: "👧👦",
      icon: Users,
      title: "Diseñado para niños de 7 a 12 años",
      description: "Contenidos y lenguaje adaptados especialmente para su etapa de desarrollo.",
      highlightColor: "from-blue-500/20 to-cyan-500/10 border-blue-500/30",
    },
    {
      emoji: "🏡",
      icon: Home,
      title: "Uso versátil y flexible",
      description: "Ideal para familias, iglesias, colegios, escuelas, educación en casa (homeschooling), campamentos cristianos y clubes infantiles.",
      highlightColor: "from-emerald-500/20 to-teal-500/10 border-emerald-500/30",
    },
    {
      emoji: "💻",
      icon: Laptop,
      title: "Acceso inmediato en formato digital",
      description: "Descarga al instante para imprimir o visualizar en cualquier dispositivo (ordenador, computadora, tablet o móvil).",
      highlightColor: "from-purple-500/20 to-indigo-500/10 border-purple-500/30",
    },
    {
      emoji: "💰",
      icon: Tag,
      title: "Solo 12,99 €",
      description: "Pago único sin mensualidades ni suscripciones. Acceso para siempre.",
      highlightColor: "from-orange-500/30 to-amber-500/20 border-orange-500/50",
      isPrice: true,
    },
  ];

  return (
    <section className="py-10 bg-slate-900 border-y border-slate-800 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-bold uppercase tracking-wider mb-3">
            <CheckCircle2 className="w-4 h-4" />
            <span>Lo que necesitas saber</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
            Life Kids en un Vistazo
          </h2>
          <p className="text-slate-300 text-sm sm:text-base mt-2">
            Todo lo que incluye el Kit Life Kids en 5 puntos clave
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          {highlights.map((item, idx) => (
            <div
              key={idx}
              className={`p-5 rounded-2xl bg-gradient-to-br ${item.highlightColor} border backdrop-blur-sm flex flex-col justify-between transition-transform duration-200 hover:-translate-y-1 shadow-lg ${
                item.isPrice ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <div>
                <div className="flex items-center gap-3 mb-2.5">
                  <span className="text-2xl p-2 rounded-xl bg-slate-900/60 border border-slate-800 shrink-0">
                    {item.emoji}
                  </span>
                  <h3 className={`font-bold text-base sm:text-lg leading-snug ${item.isPrice ? 'text-orange-400 font-black text-xl' : 'text-white'}`}>
                    {item.title}
                  </h3>
                </div>
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed pl-1">
                  {item.description}
                </p>
              </div>

              {item.isPrice && (
                <div className="mt-3 pt-3 border-t border-orange-500/30 text-xs text-orange-300 font-medium">
                  ✨ Acceso inmediato para siempre con todos los materiales y bonos incluidos.
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
