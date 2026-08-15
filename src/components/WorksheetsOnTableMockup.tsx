import React from 'react';

const tableBgImg = "https://www.lifekidsclub.com/wp-content/uploads/2026/07/ChatGPT-Image-30-jul-2026-09_43_14.png";
const fichasCap1_7_9 = "https://www.lifekidsclub.com/wp-content/uploads/2026/08/104-1.png";
const fichasCap1_10_12 = "https://www.lifekidsclub.com/wp-content/uploads/2026/08/105-1.png";
const fichasCap7_7_9 = "https://www.lifekidsclub.com/wp-content/uploads/2026/07/Cap7-F1-7-9a.png";

interface WorksheetsOnTableMockupProps {
  className?: string;
  showLabels?: boolean;
}

export const WorksheetsOnTableMockup: React.FC<WorksheetsOnTableMockupProps> = ({
  className = "",
  showLabels = false,
}) => {
  return (
    <div className={`relative w-full h-full min-h-[260px] sm:min-h-[320px] rounded-2xl overflow-hidden border-2 border-slate-700/80 shadow-2xl bg-slate-900 group ${className}`}>
      {/* Wooden / Study Desk Background Image */}
      <img
        src={tableBgImg}
        alt="Mesa de trabajo con fichas Life Kids"
        className="absolute inset-0 w-full h-full object-cover brightness-[0.9] contrast-[1.05] group-hover:scale-105 transition-transform duration-700"
        referrerPolicy="no-referrer"
      />
      
      {/* Soft Vignette Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-slate-950/40 pointer-events-none" />

      {/* 3 Worksheets Spread on the Table (Container) */}
      <div className="absolute inset-0 p-3 sm:p-5 flex items-center justify-center gap-2 sm:gap-4 z-10">
        
        {/* Sheet 1: Cap 1 (7-9 años) - Rotated Left */}
        <div className="relative flex-1 max-w-[31%] aspect-[3/4] transform -rotate-6 hover:rotate-0 hover:scale-105 hover:z-30 transition-all duration-300 cursor-pointer shadow-[0_12px_30px_rgba(0,0,0,0.6)] rounded-lg bg-white p-1 border-2 border-white/90">
          <img
            src={fichasCap1_7_9}
            alt="Ficha Cap 1 (7-9 años)"
            className="w-full h-full object-cover rounded"
            referrerPolicy="no-referrer"
          />
          {showLabels && (
            <span className="absolute bottom-1 left-1 right-1 bg-slate-950/90 text-amber-300 font-extrabold text-[9px] sm:text-[10px] px-1.5 py-0.5 rounded text-center truncate shadow backdrop-blur-xs">
              7–9 Años (Cap 1)
            </span>
          )}
        </div>

        {/* Sheet 2: Cap 1 (10-12 años) - Center Upright */}
        <div className="relative flex-1 max-w-[32%] aspect-[3/4] transform rotate-1 translate-y-[-6px] hover:rotate-0 hover:scale-105 hover:z-30 transition-all duration-300 cursor-pointer shadow-[0_16px_35px_rgba(0,0,0,0.7)] rounded-lg bg-white p-1 border-2 border-white/95 z-20">
          <img
            src={fichasCap1_10_12}
            alt="Ficha Cap 1 (10-12 años)"
            className="w-full h-full object-cover rounded"
            referrerPolicy="no-referrer"
          />
          {showLabels && (
            <span className="absolute bottom-1 left-1 right-1 bg-slate-950/90 text-sky-300 font-extrabold text-[9px] sm:text-[10px] px-1.5 py-0.5 rounded text-center truncate shadow backdrop-blur-xs">
              10–12 Años (Cap 1)
            </span>
          )}
        </div>

        {/* Sheet 3: Cap 7 (7-9 años) - Rotated Right */}
        <div className="relative flex-1 max-w-[31%] aspect-[3/4] transform rotate-6 hover:rotate-0 hover:scale-105 hover:z-30 transition-all duration-300 cursor-pointer shadow-[0_12px_30px_rgba(0,0,0,0.6)] rounded-lg bg-white p-1 border-2 border-white/90">
          <img
            src={fichasCap7_7_9}
            alt="Ficha Cap 7 (7-9 años)"
            className="w-full h-full object-cover rounded"
            referrerPolicy="no-referrer"
          />
          {showLabels && (
            <span className="absolute bottom-1 left-1 right-1 bg-slate-950/90 text-teal-300 font-extrabold text-[9px] sm:text-[10px] px-1.5 py-0.5 rounded text-center truncate shadow backdrop-blur-xs">
              Geometría (Cap 7)
            </span>
          )}
        </div>

      </div>

      {/* Decorative Title Banner Badge */}
      {showLabels && (
        <div className="absolute top-3 left-3 z-20 pointer-events-none">
          <span className="bg-purple-600/90 text-white font-black text-[10px] sm:text-xs uppercase tracking-wider px-2.5 py-1 rounded-full border border-purple-400/60 shadow-lg backdrop-blur-md flex items-center gap-1">
            <span>📋 3 Fichas de Actividades en la Mesa</span>
          </span>
        </div>
      )}
    </div>
  );
};
