
import React from 'react';

interface AnimatedBackgroundProps {
  theme?: 'forest' | 'lagoon' | 'strait' | 'deep' | 'storm';
}

const AnimatedBackground: React.FC<AnimatedBackgroundProps> = ({ theme = 'forest' }) => {
  const getBackgroundStyles = () => {
    switch (theme) {
      case 'forest':
        return 'bg-gradient-to-b from-sky-300 via-blue-50 to-emerald-100';
      case 'lagoon':
        return 'bg-gradient-to-b from-sky-400 via-blue-300 to-cyan-200';
      case 'strait':
        return 'bg-gradient-to-b from-indigo-900 via-indigo-700 to-blue-900';
      case 'deep':
        return 'bg-gradient-to-b from-blue-900 via-blue-800 to-indigo-900';
      case 'storm':
        return 'bg-gradient-to-b from-slate-800 via-slate-700 to-slate-900';
      default:
        return 'bg-gradient-to-b from-sky-300 via-blue-50 to-emerald-100';
    }
  };

  return (
    <div className={`fixed inset-0 -z-10 ${getBackgroundStyles()} overflow-hidden`}>
      {/* Animated elements specific to each theme */}
      {theme === 'forest' && (
        <>
          <div className="absolute top-[10%] left-[15%] w-16 h-16 bg-white/20 rounded-full filter blur-xl animate-float opacity-70"></div>
          <div className="absolute top-[25%] right-[10%] w-20 h-20 bg-white/30 rounded-full filter blur-xl animate-float opacity-70 animation-delay-1000"></div>
          <div className="absolute bottom-[20%] left-[25%] w-24 h-24 bg-white/20 rounded-full filter blur-xl animate-float opacity-70 animation-delay-2000"></div>
          
          {/* Sun */}
          <div className="absolute top-[10%] right-[10%] w-32 h-32 bg-yellow-300/80 rounded-full filter blur-md animate-pulse-subtle"></div>
          
          {/* Birds */}
          <div className="absolute top-[15%] left-[30%] w-1 h-1 bg-slate-700 rounded-full before:content-[''] before:absolute before:w-2 before:h-1 before:-left-2 before:top-0 before:bg-slate-700 before:rounded-full animate-float"></div>
          <div className="absolute top-[12%] left-[32%] w-1 h-1 bg-slate-700 rounded-full before:content-[''] before:absolute before:w-2 before:h-1 before:-left-2 before:top-0 before:bg-slate-700 before:rounded-full animate-float animation-delay-500"></div>
          <div className="absolute top-[13%] left-[28%] w-1 h-1 bg-slate-700 rounded-full before:content-[''] before:absolute before:w-2 before:h-1 before:-left-2 before:top-0 before:bg-slate-700 before:rounded-full animate-float animation-delay-1000"></div>
          
          {/* Trees in the distance */}
          <div className="absolute bottom-0 left-0 right-0 h-[20%] bg-forest/30 rounded-t-[100%] filter blur-sm"></div>
          <div className="absolute bottom-0 left-[10%] w-20 h-[30%] bg-forest/40 rounded-t-[70%] filter blur-sm"></div>
          <div className="absolute bottom-0 left-[25%] w-28 h-[25%] bg-forest/50 rounded-t-[80%] filter blur-sm"></div>
          <div className="absolute bottom-0 right-[30%] w-24 h-[28%] bg-forest/45 rounded-t-[75%] filter blur-sm"></div>
          <div className="absolute bottom-0 right-[10%] w-32 h-[22%] bg-forest/35 rounded-t-[85%] filter blur-sm"></div>
        </>
      )}
      
      {/* Subtle noise texture overlay */}
      <div className="absolute inset-0 bg-forest-pattern opacity-[0.03]"></div>
    </div>
  );
};

export default AnimatedBackground;
