
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
      
      {/* Lagoon theme */}
      {theme === 'lagoon' && (
        <>
          <div className="absolute top-[10%] left-[15%] w-16 h-16 bg-white/20 rounded-full filter blur-xl animate-float opacity-70"></div>
          <div className="absolute top-[20%] right-[15%] w-24 h-24 bg-white/30 rounded-full filter blur-xl animate-float opacity-70 animation-delay-1000"></div>
          
          {/* Sun */}
          <div className="absolute top-[15%] right-[20%] w-28 h-28 bg-yellow-200/80 rounded-full filter blur-md animate-pulse-subtle"></div>
          
          {/* Water ripples */}
          <div className="absolute bottom-[30%] w-full h-[40%] bg-blue-400/20 rounded-t-full filter blur-sm"></div>
          <div className="absolute bottom-[20%] w-full h-[30%] bg-blue-500/30 rounded-t-full filter blur-sm"></div>
          
          {/* Floating plants */}
          <div className="absolute bottom-[15%] left-[10%] w-8 h-24 bg-green-600/40 rounded-t-full filter blur-sm animate-float"></div>
          <div className="absolute bottom-[18%] left-[20%] w-12 h-20 bg-green-700/40 rounded-t-full filter blur-sm animate-float animation-delay-500"></div>
          <div className="absolute bottom-[12%] right-[15%] w-10 h-28 bg-green-600/40 rounded-t-full filter blur-sm animate-float animation-delay-1000"></div>
        </>
      )}
      
      {/* Strait theme */}
      {theme === 'strait' && (
        <>
          {/* Stars */}
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white/70 rounded-full animate-pulse-subtle"
              style={{
                top: `${Math.random() * 40}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 3}s`
              }}
            ></div>
          ))}
          
          {/* Moon */}
          <div className="absolute top-[15%] right-[20%] w-16 h-16 bg-gray-100/80 rounded-full filter blur-sm animate-pulse-subtle shadow-[0_0_15px_5px_rgba(255,255,255,0.2)]"></div>
          
          {/* Distant mountains */}
          <div className="absolute bottom-0 left-0 right-0 h-[25%] bg-indigo-950/40 rounded-t-[100%] filter blur-sm"></div>
          <div className="absolute bottom-0 left-[10%] w-40 h-[30%] bg-indigo-950/50 rounded-t-[70%] filter blur-sm"></div>
          <div className="absolute bottom-0 right-[20%] w-60 h-[28%] bg-indigo-950/60 rounded-t-[80%] filter blur-sm"></div>
        </>
      )}
      
      {/* Deep waters theme */}
      {theme === 'deep' && (
        <>
          {/* Underwater light rays */}
          <div className="absolute top-0 left-[20%] w-10 h-[60%] bg-gradient-to-b from-blue-300/10 to-transparent skew-x-12"></div>
          <div className="absolute top-0 left-[40%] w-16 h-[70%] bg-gradient-to-b from-blue-300/15 to-transparent skew-x-6"></div>
          <div className="absolute top-0 right-[30%] w-12 h-[50%] bg-gradient-to-b from-blue-300/10 to-transparent skew-x-[-12]"></div>
          
          {/* Bubbles */}
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-3 h-3 rounded-full bg-white/20 backdrop-blur-sm animate-float"
              style={{
                left: `${10 + Math.random() * 80}%`,
                top: `${40 + Math.random() * 50}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${4 + Math.random() * 4}s`
              }}
            ></div>
          ))}
          
          {/* Distant underwater mountains */}
          <div className="absolute bottom-0 left-0 right-0 h-[15%] bg-blue-950/50 rounded-t-[100%] filter blur-md"></div>
          <div className="absolute bottom-0 left-[20%] w-32 h-[22%] bg-blue-950/60 rounded-t-[70%] filter blur-md"></div>
          <div className="absolute bottom-0 right-[15%] w-40 h-[18%] bg-blue-950/70 rounded-t-[85%] filter blur-md"></div>
        </>
      )}
      
      {/* Storm theme */}
      {theme === 'storm' && (
        <>
          {/* Storm clouds */}
          <div className="absolute top-[10%] left-[5%] w-32 h-16 bg-gray-700/80 rounded-full filter blur-md"></div>
          <div className="absolute top-[15%] left-[25%] w-48 h-20 bg-gray-800/80 rounded-full filter blur-md"></div>
          <div className="absolute top-[8%] right-[10%] w-40 h-18 bg-gray-700/80 rounded-full filter blur-md"></div>
          <div className="absolute top-[20%] right-[25%] w-28 h-14 bg-gray-800/80 rounded-full filter blur-md"></div>
          
          {/* Lightning flashes */}
          <div className="absolute top-[30%] left-[40%] w-3 h-[40%] bg-white/10 skew-x-12 filter blur-sm"></div>
          <div className="absolute top-[25%] right-[30%] w-2 h-[35%] bg-white/10 skew-x-[-6] filter blur-sm"></div>
          
          {/* Raindrops */}
          {Array.from({ length: 40 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-[1px] h-[10px] bg-white/20 animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                transform: 'rotate(15deg)',
                animationName: 'none'
              }}
            ></div>
          ))}
          
          {/* Distant shore */}
          <div className="absolute bottom-0 left-0 right-0 h-[12%] bg-gray-900/40 rounded-t-[100%] filter blur-lg"></div>
        </>
      )}
      
      {/* Subtle noise texture overlay */}
      <div className="absolute inset-0 bg-forest-pattern opacity-[0.03]"></div>
    </div>
  );
};

export default AnimatedBackground;
