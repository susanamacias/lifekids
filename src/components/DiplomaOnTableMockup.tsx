import React from 'react';

const tableBgImg = "https://www.lifekidsclub.com/wp-content/uploads/2026/07/ChatGPT-Image-30-jul-2026-09_43_14.png";
const diplomaNinoUrl = "https://www.lifekidsclub.com/wp-content/uploads/2026/08/Copia-de-Agente-Hunter-Modelo-de-Mockups-3.png";
const diplomaNinaUrl = "https://www.lifekidsclub.com/wp-content/uploads/2026/07/Diploma-CIENCIA-VIDA-FE-nina.png";

interface DiplomaOnTableMockupProps {
  className?: string;
  showBadge?: boolean;
}

export const DiplomaOnTableMockup: React.FC<DiplomaOnTableMockupProps> = ({
  className = "",
  showBadge = true,
}) => {
  return (
    <div className={`relative w-full h-full min-h-[260px] sm:min-h-[320px] rounded-2xl overflow-hidden border-2 border-amber-900/40 shadow-2xl bg-slate-900 group ${className}`}>
      {/* Wooden Desk Background */}
      <img
        src={tableBgImg}
        alt="Mesa de escritorio"
        className="absolute inset-0 w-full h-full object-cover brightness-[0.85] contrast-[1.05] group-hover:scale-[1.03] transition-transform duration-700"
        referrerPolicy="no-referrer"
      />
      
      {/* Vignette Overlay for Warm Atmosphere */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-slate-950/30 pointer-events-none" />

      {/* Diplomas resting on the wooden table in the center */}
      <div className="absolute inset-0 p-3 sm:p-6 flex items-center justify-center gap-2 sm:gap-4 z-10">
        {/* Diploma Niño */}
        <div className="relative w-[48%] max-w-[260px] aspect-[1.414/1] transform -rotate-2 hover:rotate-0 hover:scale-[1.04] transition-all duration-300 shadow-[0_15px_35px_rgba(0,0,0,0.6)] rounded-lg bg-white p-1 sm:p-2 border-[2px] border-amber-100/90">
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent pointer-events-none rounded" />
          <img
            src={diplomaNinoUrl}
            alt="Diploma Oficial de Reconocimiento Life Kids (Niño)"
            className="w-full h-full object-contain rounded bg-white shadow-inner"
            referrerPolicy="no-referrer"
          />
          <span className="absolute -bottom-2.5 left-2 bg-sky-600 text-white font-bold text-[9px] sm:text-[10px] px-2 py-0.5 rounded-full shadow border border-sky-300 uppercase tracking-wider">
            Versión Niño
          </span>
        </div>

        {/* Diploma Niña */}
        <div className="relative w-[48%] max-w-[260px] aspect-[1.414/1] transform rotate-2 hover:rotate-0 hover:scale-[1.04] transition-all duration-300 shadow-[0_15px_35px_rgba(0,0,0,0.6)] rounded-lg bg-white p-1 sm:p-2 border-[2px] border-amber-100/90">
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent pointer-events-none rounded" />
          <img
            src={diplomaNinaUrl}
            alt="Diploma Oficial de Reconocimiento Life Kids (Niña)"
            className="w-full h-full object-contain rounded bg-white shadow-inner"
            referrerPolicy="no-referrer"
          />
          <span className="absolute -bottom-2.5 right-2 bg-rose-500 text-white font-bold text-[9px] sm:text-[10px] px-2 py-0.5 rounded-full shadow border border-rose-300 uppercase tracking-wider">
            Versión Niña
          </span>
        </div>
      </div>

      {showBadge && (
        <span className="absolute top-3 right-3 z-20 bg-amber-500 text-slate-950 font-black text-[10px] sm:text-xs px-2.5 py-1 rounded-full shadow-lg border border-amber-300 tracking-wide uppercase flex items-center gap-1">
          <span>🏆</span> Diplomas Personalizables (Niño y Niña)
        </span>
      )}
    </div>
  );
};
