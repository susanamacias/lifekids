import React, { useState } from 'react';
import { SHOWCASE_RESOURCES, SHOWCASE_HEADER_COPY } from '../data/copyData';
import { BookOpen, GraduationCap, Sparkles, Target, Users, Search, Award, CheckCircle2, ZoomIn, X, Maximize2 } from 'lucide-react';
import magazinePreviewImg from '../assets/images/magazine_preview_1785099730458.jpg';
import { WorksheetsOnTableMockup } from './WorksheetsOnTableMockup';
import { FamilyDialogueMockup } from './FamilyDialogueMockup';
import { DiplomaOnTableMockup } from './DiplomaOnTableMockup';
const explorerMockup1Img = "https://www.lifekidsclub.com/wp-content/uploads/2026/08/103.png";
const educatorGuideImg = "https://www.lifekidsclub.com/wp-content/uploads/2026/08/102.png";
const worksheetsTableImg = "https://www.lifekidsclub.com/wp-content/uploads/2026/07/ChatGPT-Image-30-jul-2026-09_43_14.png";
const fichasCap1_7_9 = "https://www.lifekidsclub.com/wp-content/uploads/2026/08/104-1.png";
const fichasCap1_10_12 = "https://www.lifekidsclub.com/wp-content/uploads/2026/08/105-1.png";
const enigmaImg = "https://www.lifekidsclub.com/wp-content/uploads/2026/08/106.png";
const fichasCap7_7_9 = "https://www.lifekidsclub.com/wp-content/uploads/2026/07/Cap7-F1-7-9a.png";
const conversemosCap1Img = "https://www.lifekidsclub.com/wp-content/uploads/2026/07/1-7.png";
import familyDialogueImg from '../assets/images/family_dialogue_mockup_1785101721359.jpg';
const diplomaImg = "https://www.lifekidsclub.com/wp-content/uploads/2026/08/Copia-de-Agente-Hunter-Modelo-de-Mockups-3.png";
const posterA4Img = "https://www.lifekidsclub.com/wp-content/uploads/2026/07/Poster-skater-2.png";

interface ShowcaseProps {
  onOpenPreview?: (resourceId?: string) => void;
}

export const DetailedResourcesShowcase: React.FC<ShowcaseProps> = () => {
  const [lightboxImg, setLightboxImg] = useState<{ src: string; title: string } | null>(null);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'BookOpen':
        return <BookOpen className="w-6 h-6 text-orange-500" />;
      case 'GraduationCap':
        return <GraduationCap className="w-6 h-6 text-indigo-500" />;
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-yellow-500" />;
      case 'Target':
        return <Target className="w-6 h-6 text-rose-500" />;
      case 'Users':
        return <Users className="w-6 h-6 text-emerald-500" />;
      case 'Search':
        return <Search className="w-6 h-6 text-sky-500" />;
      case 'Award':
        return <Award className="w-6 h-6 text-teal-500" />;
      default:
        return <BookOpen className="w-6 h-6 text-orange-500" />;
    }
  };

  // Helper colors for each card in LifeKids playful brand palette
  const getCardTheme = (idx: number) => {
    const themes = [
      { border: 'border-orange-200', bgBadge: 'bg-orange-100 text-orange-800', accent: 'from-orange-500 to-yellow-400', textColor: 'text-orange-600' },
      { border: 'border-sky-200', bgBadge: 'bg-sky-100 text-sky-800', accent: 'from-sky-400 to-indigo-500', textColor: 'text-sky-600' },
      { border: 'border-emerald-200', bgBadge: 'bg-emerald-100 text-emerald-800', accent: 'from-emerald-400 to-teal-500', textColor: 'text-emerald-600' },
      { border: 'border-teal-200', bgBadge: 'bg-teal-100 text-teal-800', accent: 'from-teal-400 to-sky-500', textColor: 'text-teal-600' },
      { border: 'border-amber-200', bgBadge: 'bg-amber-100 text-amber-800', accent: 'from-yellow-400 to-orange-400', textColor: 'text-amber-600' },
      { border: 'border-indigo-200', bgBadge: 'bg-indigo-100 text-indigo-800', accent: 'from-indigo-400 to-sky-500', textColor: 'text-indigo-600' },
      { border: 'border-rose-200', bgBadge: 'bg-rose-100 text-rose-800', accent: 'from-rose-400 to-orange-400', textColor: 'text-rose-600' },
    ];
    return themes[idx % themes.length];
  };

  const getResourceImage = (idx: number) => {
    switch (idx) {
      case 0: return explorerMockup1Img;
      case 1: return educatorGuideImg;
      case 2: return fichasCap1_7_9;
      case 3: return fichasCap1_10_12;
      case 4: return familyDialogueImg;
      case 5: return enigmaImg;
      case 6: return posterA4Img;
      case 7: return diplomaImg;
      default: return worksheetsTableImg;
    }
  };

  return (
    <section id="programa-completo" className="py-20 md:py-32 bg-slate-50 text-slate-900 border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <span className="bg-orange-500 text-white font-black text-xs md:text-sm tracking-widest uppercase px-4 py-1.5 rounded-full shadow-sm">
            {SHOWCASE_HEADER_COPY.badge}
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 mt-5 mb-6 tracking-tight leading-tight">
            {SHOWCASE_HEADER_COPY.title}
          </h2>
          <p className="text-base sm:text-lg md:text-xl font-medium text-slate-700 leading-relaxed max-w-2xl mx-auto">
            {SHOWCASE_HEADER_COPY.subtitle}
          </p>
        </div>

        {/* List of 7 Material Blocks */}
        <div className="space-y-12 md:space-y-16">
          {SHOWCASE_RESOURCES.map((item, idx) => {
            const theme = getCardTheme(idx);
            const isEven = idx % 2 === 0;

            return (
              <div
                key={item.id}
                className={`bg-white rounded-3xl p-5 sm:p-7 md:p-8 border ${theme.border} shadow-lg hover:shadow-xl transition-all duration-300 grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 items-center`}
              >
                {/* Mockup / Image Area (Expanded Large Protagonist Element) */}
                <div
                  className={`md:col-span-7 lg:col-span-7 ${
                    isEven ? 'md:order-1' : 'md:order-2'
                  }`}
                >
                  <div className="relative group">
                    <div className={`absolute -inset-2 bg-gradient-to-tr ${theme.accent} rounded-3xl blur-lg opacity-25 group-hover:opacity-50 transition duration-300`} />
                    
                    {/* Visual Card Mockup Frame - Spacious Floating Container */}
                    {idx === 4 ? (
                      <FamilyDialogueMockup />
                    ) : (
                      <div
                        onClick={() => setLightboxImg({ src: getResourceImage(idx), title: item.title })}
                        className="relative bg-gradient-to-br from-slate-50 via-white to-amber-50/40 rounded-2xl overflow-hidden border-2 border-slate-200/90 shadow-xl group-hover:shadow-2xl group-hover:border-orange-300/80 flex items-center justify-center p-1.5 sm:p-2.5 group-hover:-translate-y-1.5 transition-all duration-300 cursor-pointer"
                      >
                        <img
                          src={getResourceImage(idx)}
                          alt={item.title}
                          className="w-full h-auto max-h-[520px] sm:max-h-[620px] object-contain rounded-xl drop-shadow-[0_12px_24px_rgba(0,0,0,0.18)] transition-all duration-300 group-hover:scale-[1.02]"
                          referrerPolicy="no-referrer"
                        />
                        {/* Floating Zoom Action Badge */}
                        <div className="absolute bottom-3 right-3 bg-slate-900/90 hover:bg-orange-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg backdrop-blur-sm flex items-center gap-1.5 transition-all border border-white/20 group-hover:scale-105 z-10">
                          <ZoomIn className="w-3.5 h-3.5 text-orange-400" />
                          <span>Ampliar Imagen</span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Content Explanation Area */}
                <div
                  className={`md:col-span-5 lg:col-span-5 flex flex-col justify-center ${
                    isEven ? 'md:order-2' : 'md:order-1'
                  }`}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <span className={`text-xs font-black px-3 py-0.5 rounded-full ${theme.bgBadge}`}>
                      {item.badge}
                    </span>
                    <span className="text-xs text-slate-400 font-semibold">
                      Recurso #{idx + 1} de {SHOWCASE_RESOURCES.length}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-black text-slate-900 mb-3 tracking-tight leading-snug">
                    {item.title}
                  </h3>

                  {/* Benefit statement / Subtitle & Benefits */}
                  <div className="mb-4 bg-slate-50 p-3.5 sm:p-4 rounded-xl border border-slate-200/80">
                    <p className="text-xs sm:text-sm font-medium text-slate-700 leading-relaxed mb-2">
                      {item.shortDesc}
                    </p>
                    {item.benefitsList && item.benefitsList.length > 0 ? (
                      <div className="space-y-1.5 pt-2 border-t border-slate-200/80">
                        <p className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">
                          Beneficios:
                        </p>
                        {item.benefitsList.map((b, bIdx) => (
                          <div key={bIdx} className="flex items-start gap-2 text-xs sm:text-sm font-bold text-slate-800">
                            <span className="text-emerald-600 shrink-0">✅</span>
                            <span>{b}</span>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <p className="text-xs sm:text-sm font-semibold text-slate-800 leading-relaxed pt-1 border-t border-slate-200/60">
                        💡 <span className={`${theme.textColor} font-black`}>Beneficio:</span> {item.benefit}
                      </p>
                    )}
                  </div>

                  {/* Problem solved - render only if present */}
                  {item.problemSolved && item.problemSolved.trim() !== '' && (
                    <div className="flex items-start gap-2 text-xs sm:text-sm font-medium text-slate-600 mb-3">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span><strong className="text-slate-800">Resuelve:</strong> {item.problemSolved}</span>
                    </div>
                  )}

                  {/* Zoom button on text area as well */}
                  <button
                    onClick={() => setLightboxImg({ src: getResourceImage(idx), title: item.title })}
                    className="inline-flex items-center gap-2 text-xs font-bold text-orange-600 hover:text-orange-700 bg-orange-50 hover:bg-orange-100 border border-orange-200/80 px-3.5 py-2 rounded-xl transition-all w-fit"
                  >
                    <Maximize2 className="w-3.5 h-3.5" />
                    <span>Ver portada e imágenes en detalle</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Lightbox High-Resolution Fullscreen Modal */}
      {lightboxImg && (
        <div
          className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-fadeIn"
          onClick={() => setLightboxImg(null)}
        >
          <div
            className="relative bg-slate-900 border border-slate-700 rounded-2xl max-w-4xl w-full max-h-[92vh] flex flex-col overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between p-4 border-b border-slate-800 bg-slate-950/80">
              <div className="flex items-center gap-2">
                <span className="bg-orange-500 text-slate-950 text-xs font-black px-2.5 py-0.5 rounded-full uppercase">
                  Vista Ampliada
                </span>
                <h4 className="text-white font-bold text-sm sm:text-base truncate">
                  {lightboxImg.title}
                </h4>
              </div>
              <button
                onClick={() => setLightboxImg(null)}
                className="text-slate-400 hover:text-white bg-slate-800 hover:bg-slate-700 p-2 rounded-xl transition-colors"
                title="Cerrar"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Image View Area */}
            <div className="p-4 sm:p-6 flex-1 flex items-center justify-center bg-slate-950 overflow-auto min-h-[350px]">
              <img
                src={lightboxImg.src}
                alt={lightboxImg.title}
                className="max-h-[75vh] w-auto max-w-full object-contain rounded-lg drop-shadow-2xl"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Modal Footer */}
            <div className="p-3 sm:p-4 border-t border-slate-800 bg-slate-950/80 flex justify-between items-center text-xs text-slate-400">
              <span>Muestra oficial del Kit Life Kids</span>
              <button
                onClick={() => setLightboxImg(null)}
                className="px-4 py-1.5 bg-orange-500 hover:bg-orange-400 text-slate-950 font-bold rounded-lg transition-colors"
              >
                Cerrar vista
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

