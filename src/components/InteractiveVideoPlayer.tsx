import React from 'react';
import { Film, Play } from 'lucide-react';

interface InteractiveVideoPlayerProps {
  posterImage?: string;
}

export const InteractiveVideoPlayer: React.FC<InteractiveVideoPlayerProps> = () => {
  return (
    <div className="relative group w-full">
      {/* Outer Glow */}
      <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 via-amber-400 to-sky-500 rounded-3xl blur-md opacity-70 group-hover:opacity-100 transition duration-500" />

      {/* Main Video Frame */}
      <div className="relative bg-slate-950 border-2 border-orange-400/60 rounded-2xl overflow-hidden shadow-2xl">
        {/* Top Badge Header */}
        <div className="bg-slate-900/90 border-b border-slate-800 px-4 py-2.5 flex items-center justify-between gap-2">
          <div className="bg-orange-500 text-slate-950 text-[11px] sm:text-xs font-black uppercase tracking-wider px-3 py-1 rounded-full flex items-center gap-1.5 shadow">
            <Film className="w-3.5 h-3.5" />
            <span>Video Promo — Revista Digital Interactiva</span>
          </div>
          <div className="flex items-center gap-1.5 text-[11px] text-sky-300 font-bold bg-sky-950/80 px-2.5 py-1 rounded-full border border-sky-800/50">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>12 Meses de Acceso</span>
          </div>
        </div>

        {/* YouTube Responsive iFrame Container */}
        <div className="relative w-full aspect-video bg-slate-950">
          <iframe
            src="https://www.youtube.com/embed/AKHt6XIip6k?rel=0"
            title="Video Promo - Revista Digital Interactiva Life Kids"
            className="w-full h-full border-0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
      </div>

      <p className="text-xs text-slate-300 text-center mt-3 font-medium flex items-center justify-center gap-1.5">
        <Play className="w-3.5 h-3.5 text-orange-400 fill-orange-400" />
        <span>Haz clic en reproducir para ver la experiencia digital de Life Kids</span>
      </p>
    </div>
  );
};
