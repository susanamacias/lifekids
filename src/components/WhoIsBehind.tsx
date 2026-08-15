import React from 'react';
import { ShieldCheck, UserCheck, FileText, Palette } from 'lucide-react';
import { WHO_IS_BEHIND_COPY } from '../data/copyData';
const susanaImg = "https://www.lifekidsclub.com/wp-content/uploads/2025/04/susana-circulo-1.png";
const beatrizImg = "https://www.lifekidsclub.com/wp-content/uploads/2024/06/Foto02.png";
const ebenezerImg = "https://www.lifekidsclub.com/wp-content/uploads/2024/06/Foto03.png";

export const WhoIsBehind: React.FC = () => {
  const teamImages = [susanaImg, beatrizImg, ebenezerImg];

  return (
    <section className="py-16 md:py-24 bg-slate-100 text-slate-900 border-b border-slate-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="bg-slate-200 text-slate-800 font-extrabold text-xs md:text-sm tracking-widest uppercase px-3.5 py-1 rounded-full border border-slate-300">
          PROPÓSITO Y AUTORIDAD PEDAGÓGICA
        </span>
        <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mt-4 mb-4 tracking-tight">
          {WHO_IS_BEHIND_COPY.title}
        </h2>
        <p className="text-base sm:text-lg text-slate-700 font-medium max-w-3xl mx-auto mb-10 leading-relaxed">
          {WHO_IS_BEHIND_COPY.intro}
        </p>
        
        {/* Team Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto text-left mb-10">
          {WHO_IS_BEHIND_COPY.team.map((member, idx) => (
            <div key={idx} className="bg-white rounded-2xl p-6 border border-slate-200 shadow-md flex flex-col items-center text-center hover:shadow-lg transition-shadow">
              <div className="relative w-24 h-24 rounded-full overflow-hidden border-2 border-orange-400 mb-4 shadow-inner shrink-0 bg-slate-100">
                <img
                  src={teamImages[idx]}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-lg font-bold text-slate-900">{member.name}</h3>
              <p className="text-xs font-black text-orange-600 uppercase tracking-wider mb-3">
                {member.role}
              </p>
              <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">
                {member.detail}
              </p>
            </div>
          ))}
        </div>

        {/* Conclusion / Manifesto */}
        <div className="bg-white p-6 md:p-8 rounded-2xl border border-slate-200 shadow-sm text-center max-w-3xl mx-auto mb-10">
          <p className="text-sm sm:text-base text-slate-700 font-medium leading-relaxed">
            {WHO_IS_BEHIND_COPY.conclusion}
          </p>
        </div>

        {/* Trust Seal */}
        <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-800 border border-emerald-200 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold shadow-sm max-w-3xl">
          <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0" />
          <span>Diseñado para explorar la creación mediante actividades de observación, preguntas y reflexión, desde una cosmovisión bíblica.</span>
        </div>
      </div>
    </section>
  );
};





