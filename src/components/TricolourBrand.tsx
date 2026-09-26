import React from 'react';

interface TricolourBrandProps {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  withSubtitle?: boolean;
  withBadge?: boolean;
  withChakraIcon?: boolean;
  className?: string;
}

export const TricolourBrand: React.FC<TricolourBrandProps> = ({
  size = 'md',
  withSubtitle = false,
  withBadge = true,
  withChakraIcon = true,
  className = ''
}) => {
  const textSizeMap = {
    xs: 'text-xs font-bold tracking-tight',
    sm: 'text-sm sm:text-base font-extrabold tracking-tight',
    md: 'text-lg sm:text-xl font-black tracking-tight',
    lg: 'text-2xl sm:text-3xl font-black tracking-tight',
    xl: 'text-3xl sm:text-5xl font-black tracking-tight',
  };

  const chakraSizeMap = {
    xs: 'w-2.5 h-2.5',
    sm: 'w-3 h-3',
    md: 'w-4 h-4',
    lg: 'w-6 h-6',
    xl: 'w-8 h-8',
  };

  return (
    <div className={`inline-flex flex-col ${className}`}>
      <div className="flex items-center gap-2">
        {/* Authentic Indian Tiranga Flag Badge */}
        {withBadge && (
          <div 
            className="flex flex-col w-3.5 h-5 rounded-[3px] overflow-hidden shadow-sm shrink-0 border border-slate-700/80 ring-1 ring-white/10" 
            title="Tiranga - National Flag Colors of India"
          >
            {/* Saffron / Kesari */}
            <div className="h-1/3 bg-[#FF9933] w-full" />
            {/* White with Ashoka Chakra Blue center */}
            <div className="h-1/3 bg-slate-50 w-full flex items-center justify-center relative">
              <div className="w-1.5 h-1.5 rounded-full border-[0.8px] border-[#000080] bg-white flex items-center justify-center">
                <div className="w-0.5 h-0.5 rounded-full bg-[#000080]" />
              </div>
            </div>
            {/* India Green / Harita */}
            <div className="h-1/3 bg-[#138808] w-full" />
          </div>
        )}

        {/* Tricolour Name: Saffron (Kesari) Bhoomi + Ashoka Chakra + India Green Rakshak */}
        <div className="flex items-center">
          {/* BHOOMI in Saffron gradient */}
          <span 
            className={`${textSizeMap[size]} bg-gradient-to-r from-orange-400 via-amber-500 to-orange-500 bg-clip-text text-transparent drop-shadow-[0_1px_2px_rgba(245,158,11,0.35)]`}
          >
            Bhoomi
          </span>

          {/* Central Ashoka Chakra Navy Emblem */}
          {withChakraIcon ? (
            <span className="mx-1 sm:mx-1.5 inline-flex items-center justify-center select-none" title="Ashoka Chakra - 24 Spokes of Dharma">
              <svg 
                className={`${chakraSizeMap[size]} text-blue-500 hover:text-blue-400 transition-colors animate-[spin_20s_linear_infinite]`} 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="1.5"
              >
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
                <circle cx="12" cy="12" r="2.5" fill="currentColor" />
                {/* 24 spokes simplified representation */}
                {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((angle) => (
                  <line 
                    key={angle}
                    x1="12" 
                    y1="12" 
                    x2={12 + 9.5 * Math.cos((angle * Math.PI) / 180)} 
                    y2={12 + 9.5 * Math.sin((angle * Math.PI) / 180)} 
                    stroke="currentColor" 
                    strokeWidth="1"
                    strokeOpacity="0.8"
                  />
                ))}
              </svg>
            </span>
          ) : (
            <span className="mx-1 text-slate-300 font-light select-none">
              ·
            </span>
          )}

          {/* RAKSHAK in Sacred India Green gradient */}
          <span 
            className={`${textSizeMap[size]} bg-gradient-to-r from-emerald-400 via-green-500 to-emerald-600 bg-clip-text text-transparent drop-shadow-[0_1px_2px_rgba(19,136,8,0.35)]`}
          >
            Rakshak
          </span>

          {/* National Bharat Badge */}
          <span className="ml-2 text-[10px] font-mono uppercase px-1.5 py-0.5 rounded bg-slate-900 text-amber-300/90 border border-amber-500/30 tracking-wider shadow-inner hidden sm:inline-flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>Bharat</span>
          </span>
        </div>
      </div>

      {withSubtitle && (
        <p className="text-xs text-slate-400 mt-1 flex items-center gap-1.5 font-medium">
          <span className="text-amber-400 font-semibold">Tiranga Edition</span>
          <span>·</span>
          <span>National Climate Risk & Disaster Intelligence Platform</span>
        </p>
      )}
    </div>
  );
};
