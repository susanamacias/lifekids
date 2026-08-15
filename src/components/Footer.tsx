import React from 'react';
import { Heart } from 'lucide-react';
import { LifeKidsLogo } from './LifeKidsLogo';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-800 text-center md:text-left">
          
          {/* Brand Logo */}
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <LifeKidsLogo size="md" />
            <div className="text-center sm:text-left border-t sm:border-t-0 sm:border-l border-slate-800 pt-2 sm:pt-0 sm:pl-3">
              <p className="text-xs text-slate-300 font-semibold">
                Programa Educativo Cristiano de Ciencia & Fe
              </p>
              <p className="text-[11px] text-slate-500">
                Para niños de 7 a 12 años • Formato PDF Imprimible e Interactivo
              </p>
            </div>
          </div>

          {/* Copyright & Info */}
          <div className="text-xs text-slate-400 space-y-1">
            <p>© {new Date().getFullYear()} Life Kids. Todos los derechos reservados.</p>
            <p className="text-[11px] text-slate-500">
              Diseñado para familias, iglesias y colegios cristianos.
            </p>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-400 gap-4">
          <div className="flex items-center gap-4">
            <a href="#programa-completo" className="hover:text-amber-400 transition-colors">Contenido del Programa</a>
            <a href="#oferta" className="hover:text-amber-400 transition-colors">Oferta 12,99€</a>
            <a href="#garantia" className="hover:text-amber-400 transition-colors">Garantía 15 Días</a>
          </div>

          <div className="flex items-center gap-1.5 text-slate-400">
            <span>Hecho con</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
            <span>para las familias cristianas</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

