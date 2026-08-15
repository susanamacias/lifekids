import React from 'react';

interface LifeKidsLogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  showSubtitle?: boolean;
}

export const LifeKidsLogo: React.FC<LifeKidsLogoProps> = ({
  size = 'md',
  className = '',
  showSubtitle = false,
}) => {
  // Size mapping for font size
  const sizeClasses = {
    sm: 'text-2xl',
    md: 'text-3xl md:text-4xl',
    lg: 'text-5xl md:text-6xl',
    xl: 'text-6xl md:text-7xl',
  };

  const strokeWidth = size === 'sm' ? '1.5px' : size === 'md' ? '2px' : size === 'lg' ? '3px' : '3.5px';

  return (
    <div className={`inline-flex flex-col items-center sm:items-start ${className}`}>
      <div
        className={`font-black flex items-baseline leading-none select-none ${sizeClasses[size]}`}
        style={{
          fontFamily: "'Fredoka', 'Arial Black', sans-serif",
          letterSpacing: '-0.02em',
        }}
      >
        {/* LIFE in Bright Vibrant Orange */}
        <span
          className="text-[#FF7000] font-black"
          style={{
            WebkitTextStroke: `${strokeWidth} #000000`,
            paintOrder: 'stroke fill',
            textShadow: '0px 2px 4px rgba(0,0,0,0.3)',
            marginRight: '1px',
          }}
        >
          LIFE
        </span>

        {/* k in Mint Cyan */}
        <span
          className="text-[#2DD4BF] font-black"
          style={{
            WebkitTextStroke: `${strokeWidth} #000000`,
            paintOrder: 'stroke fill',
            textShadow: '0px 2px 4px rgba(0,0,0,0.3)',
          }}
        >
          k
        </span>

        {/* i in Sky Blue */}
        <span
          className="text-[#0284C7] font-black"
          style={{
            WebkitTextStroke: `${strokeWidth} #000000`,
            paintOrder: 'stroke fill',
            textShadow: '0px 2px 4px rgba(0,0,0,0.3)',
          }}
        >
          i
        </span>

        {/* d in Leaf Green */}
        <span
          className="text-[#22C55E] font-black"
          style={{
            WebkitTextStroke: `${strokeWidth} #000000`,
            paintOrder: 'stroke fill',
            textShadow: '0px 2px 4px rgba(0,0,0,0.3)',
          }}
        >
          d
        </span>

        {/* s in Sun Yellow */}
        <span
          className="text-[#FACC15] font-black"
          style={{
            WebkitTextStroke: `${strokeWidth} #000000`,
            paintOrder: 'stroke fill',
            textShadow: '0px 2px 4px rgba(0,0,0,0.3)',
          }}
        >
          s
        </span>
      </div>

      {showSubtitle && (
        <span className="text-[11px] md:text-xs font-black tracking-widest text-sky-400 uppercase mt-1">
          Ciencia & Fe para Niños
        </span>
      )}
    </div>
  );
};

