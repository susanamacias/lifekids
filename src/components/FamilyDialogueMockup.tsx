import React, { useState } from 'react';
import familyDialogueImg from '../assets/images/family_dialogue_mockup_1785101721359.jpg';

const conversemosCap2Img = "https://www.lifekidsclub.com/wp-content/uploads/2026/07/2-3.png";
const conversemosCap6Img = "https://www.lifekidsclub.com/wp-content/uploads/2026/07/6-4.png";

const IMAGES = [
  {
    id: 'family',
    title: 'Tiempo en Familia',
    label: '👨‍👩‍👧 Conexión en el Hogar',
    src: familyDialogueImg,
  },
  {
    id: 'cap2',
    title: 'Guía Lección 2',
    label: '📄 Ficha Lección 2',
    src: conversemosCap2Img,
  },
  {
    id: 'cap6',
    title: 'Guía Lección 6',
    label: '📄 Ficha Lección 6',
    src: conversemosCap6Img,
  },
];

interface FamilyDialogueMockupProps {
  className?: string;
}

export const FamilyDialogueMockup: React.FC<FamilyDialogueMockupProps> = ({ className = '' }) => {
  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <div className={`relative bg-white rounded-2xl overflow-hidden border-2 border-slate-200/90 shadow-xl group-hover:shadow-2xl group-hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group ${className}`}>
      {/* Main Image View */}
      <div className="relative flex-1 w-full overflow-hidden bg-gradient-to-br from-slate-50 via-white to-amber-50/30 flex items-center justify-center p-1.5 sm:p-2.5">
        <img
          src={IMAGES[activeIdx].src}
          alt={IMAGES[activeIdx].title}
          className="w-full h-auto max-h-[520px] sm:max-h-[600px] object-contain rounded-xl drop-shadow-[0_12px_20px_rgba(0,0,0,0.15)] transition-all duration-300"
          referrerPolicy="no-referrer"
        />

        {/* Floating badge showing current active view */}
        <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md px-3 py-1 rounded-full border border-slate-200 shadow-md">
          <span className="text-[11px] font-extrabold text-orange-600 uppercase tracking-wide">
            {IMAGES[activeIdx].label}
          </span>
        </div>
      </div>

      {/* 3 Thumbnail Selector Bar */}
      <div className="bg-slate-50 p-2 sm:p-2.5 border-t border-slate-200/80 grid grid-cols-3 gap-2 z-10">
        {IMAGES.map((img, idx) => (
          <button
            key={img.id}
            onClick={() => setActiveIdx(idx)}
            className={`flex items-center gap-1.5 p-1.5 rounded-xl border text-left transition-all duration-200 ${
              activeIdx === idx
                ? 'bg-orange-50 border-orange-400 text-slate-900 shadow-sm ring-1 ring-orange-400/40'
                : 'bg-white border-slate-200 text-slate-600 hover:border-slate-300 hover:text-slate-900'
            }`}
          >
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg overflow-hidden shrink-0 border border-slate-200 bg-white">
              <img
                src={img.src}
                alt={img.title}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="hidden sm:block overflow-hidden">
              <p className="text-[10px] font-bold truncate leading-tight">
                {img.title}
              </p>
              <p className="text-[9px] text-slate-500 font-medium">Ver imagen</p>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};
