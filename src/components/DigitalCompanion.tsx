import React from 'react';
import { Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';

interface DigitalCompanionProps {
  gptUrl?: string;
}

export const DigitalCompanion: React.FC<DigitalCompanionProps> = ({
  gptUrl = "https://chatgpt.com/g/g-6a7b733ea6ac8191885449a5d4200467-life-kids-aprender-con-proposito"
}) => {
  const topics = [
    "Ciencia y creación",
    "Dios, Biblia y fe",
    "Identidad, dignidad y propósito",
    "Dinosaurios, fósiles y orígenes",
    "Preguntas difíciles que surgen en la infancia",
    "Actividades y propuestas adaptadas a la edad"
  ];

  return (
    <section 
      id="acompanante-digital" 
      className="py-20 md:py-28 bg-gradient-to-b from-slate-900 via-sky-950/70 to-slate-900 text-white relative overflow-hidden border-t-2 border-amber-400/40"
    >
      {/* Ambient background glows */}
      <div className="absolute top-1/3 left-1/4 -translate-y-1/2 w-96 h-96 bg-amber-500/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Special Benefit Badge */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500/20 via-orange-400/20 to-amber-500/20 text-amber-300 border border-amber-400/50 font-black text-xs sm:text-sm tracking-widest uppercase px-5 py-2 rounded-full shadow-lg shadow-amber-500/10">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>BENEFICIO ESPECIAL INCLUIDO EN LIFE KIDS</span>
          </div>
        </div>

        {/* Main Card Container */}
        <div className="bg-slate-950/80 backdrop-blur-md rounded-3xl border-2 border-amber-400/30 p-6 sm:p-10 md:p-14 shadow-2xl relative overflow-hidden">
          
          {/* Header Title & Subtitle */}
          <div className="text-center max-w-3xl mx-auto mb-10">
            <div className="inline-flex items-center justify-center mb-5">
              <img
                src="https://www.lifekidsclub.com/wp-content/uploads/2026/08/susana-avatar-jpeg.jpg"
                alt="Susana Macías"
                referrerPolicy="no-referrer"
                className="w-18 h-18 sm:w-20 sm:h-20 rounded-full object-cover border-2 border-amber-400 shadow-xl shadow-amber-500/20 ring-4 ring-amber-400/20"
              />
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight mb-3">
              “¿Y AHORA QUÉ LE DIGO?”
            </h2>
            
            <p className="text-base sm:text-lg font-bold text-amber-400 tracking-wide uppercase mb-3">
              Acompañante digital Life Kids — Aprender con Propósito
            </p>

            <p className="text-sm sm:text-base text-slate-300 font-medium leading-relaxed max-w-2xl mx-auto">
              Un acompañante digital creado por Susana Macías para ayudarte a responder las grandes preguntas de tus hijos sobre ciencia, creación, fe, Biblia, identidad y propósito, utilizando los materiales de Life Kids.
            </p>
          </div>

          {/* Description Texts */}
          <div className="max-w-3xl mx-auto space-y-5 text-slate-200 text-base sm:text-lg leading-relaxed text-center sm:text-left mb-10">
            <p className="font-semibold text-white text-lg sm:text-xl text-center">
              Cuando tu hijo te hace una pregunta difícil, no tienes que quedarte sin palabras.
            </p>
            
            <p className="text-slate-300">
              <strong className="text-amber-300 font-bold">Life Kids</strong> incluye un acompañante digital que te ayuda a encontrar una forma adecuada de acompañar esas grandes preguntas sobre ciencia, creación, Dios, Biblia, identidad y propósito.
            </p>

            <p className="text-slate-300">
              Puedes contarle la edad de tu hijo y explicarle qué te ha preguntado para recibir orientación basada en los materiales de Life Kids.
            </p>
          </div>

          {/* Topics Grid */}
          <div className="bg-slate-900/90 rounded-2xl border border-slate-700/70 p-6 sm:p-8 mb-10 max-w-3xl mx-auto">
            <p className="text-sm font-bold text-amber-300 uppercase tracking-wider mb-5 text-center sm:text-left">
              Te ayuda a preparar respuestas y acompañar conversaciones sobre:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {topics.map((topic, idx) => (
                <div key={idx} className="flex items-start gap-3 text-sm sm:text-base text-slate-200">
                  <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <span>{topic}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Button & Disclaimer */}
          <div className="text-center max-w-xl mx-auto">
            <a
              id="btn-acompanante-digital"
              href={gptUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 w-full sm:w-auto px-8 py-4 sm:py-5 rounded-2xl bg-gradient-to-r from-amber-500 via-orange-400 to-amber-500 text-slate-950 font-black text-lg sm:text-xl shadow-xl shadow-amber-500/25 hover:shadow-amber-500/40 hover:scale-[1.02] active:scale-[0.99] transition-all border border-amber-300/60 group"
            >
              <span>QUIERO ENCONTRAR UNA RESPUESTA</span>
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </a>

            <p className="mt-4 text-xs sm:text-sm text-slate-400 font-medium leading-normal">
              Al hacer clic accederás a ChatGPT para utilizar el acompañante digital Life Kids.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};
