import React from 'react';
import { ShoppingBag, Sparkles } from 'lucide-react';
import { Currency } from '../types';
import { LifeKidsLogo } from './LifeKidsLogo';

interface HeaderProps {
  onOpenCheckout: () => void;
  currency: Currency;
  setCurrency: (c: Currency) => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenCheckout, currency, setCurrency }) => {
  return (
    <header className="sticky top-0 z-40 w-full shadow-md">
      {/* Top Notification Urgency Bar in LIFEkids colorful theme */}
      <div className="bg-gradient-to-r from-orange-500 via-yellow-400 to-sky-400 text-slate-950 px-4 py-2 text-xs md:text-sm text-center font-extrabold flex items-center justify-center gap-2">
        <Sparkles className="w-4 h-4 text-slate-950 animate-spin" style={{ animationDuration: '4s' }} />
        <span>OFERTA DE LANZAMIENTO ESPECIAL — Todo el contenido del Kit Life Kids por solo 12,99€ (Acceso Inmediato PDF)</span>
        <span className="hidden md:inline-block bg-slate-950/20 text-slate-950 text-[11px] font-black px-2 py-0.5 rounded ml-2">
          Garantía 15 Días
        </span>
      </div>

      {/* Main Navbar */}
      <nav className="bg-slate-900/95 backdrop-blur-md border-b border-slate-800 text-white px-4 md:px-8 py-3 flex items-center justify-between transition-all">
        {/* Brand Logo Component */}
        <a href="#" className="flex items-center gap-3 group py-1">
          <LifeKidsLogo size="sm" />
          <span className="hidden sm:inline-block text-[10px] text-slate-300 font-bold tracking-wider uppercase border-l border-slate-700 pl-2.5 ml-1">
            Ciencia & Fe
          </span>
        </a>

        {/* Currency Switcher & Fast CTA */}
        <div className="flex items-center gap-3">
          <div className="hidden sm:flex items-center bg-slate-800/80 rounded-lg p-1 border border-slate-700/60 text-xs font-semibold">
            {(['EUR', 'USD', 'MXN', 'COP'] as Currency[]).map((c) => (
              <button
                key={c}
                onClick={() => setCurrency(c)}
                className={`px-2.5 py-1 rounded-md transition-colors ${
                  currency === c
                    ? 'bg-orange-500 text-white font-bold'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                {c === 'EUR' ? '€ EUR' : c === 'USD' ? '$ USD' : c === 'MXN' ? '$ MXN' : '$ COP'}
              </button>
            ))}
          </div>

          <button
            onClick={onOpenCheckout}
            className="bg-gradient-to-r from-orange-500 via-amber-400 to-yellow-400 hover:from-orange-400 hover:to-yellow-300 text-slate-950 font-black px-4 md:px-5 py-2 md:py-2.5 rounded-xl shadow-lg shadow-orange-500/25 transition-all transform active:scale-95 flex items-center gap-2 text-xs md:text-sm"
          >
            <ShoppingBag className="w-4 h-4" />
            <span>Comprar por 12,99€</span>
          </button>
        </div>
      </nav>
    </header>
  );
};

