
import React from 'react';
import { motion } from 'framer-motion';

interface CharacterProps {
  state?: 'idle' | 'happy' | 'thinking' | 'surprised' | 'nervous';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const Character: React.FC<CharacterProps> = ({ state = 'idle', size = 'md', className = '' }) => {
  // Size mapping
  const sizeClasses = {
    sm: 'w-24 h-24',
    md: 'w-36 h-36',
    lg: 'w-48 h-48'
  };

  // Animation variants based on character state
  const variants = {
    idle: {
      y: [0, -10, 0],
      transition: {
        y: {
          repeat: Infinity,
          duration: 2,
          ease: "easeInOut"
        }
      }
    },
    happy: {
      rotate: [0, 5, 0, -5, 0],
      scale: [1, 1.05, 1],
      transition: {
        rotate: {
          repeat: Infinity,
          duration: 1,
          ease: "easeInOut"
        },
        scale: {
          repeat: Infinity,
          duration: 0.5,
          ease: "easeInOut"
        }
      }
    },
    thinking: {
      rotate: [0, 5, 0],
      transition: {
        rotate: {
          repeat: Infinity,
          duration: 1.5,
          ease: "easeInOut"
        }
      }
    },
    surprised: {
      scale: [1, 1.2, 1],
      transition: {
        scale: {
          repeat: Infinity,
          duration: 0.5,
          ease: "easeInOut"
        }
      }
    },
    nervous: {
      x: [0, 3, -3, 0],
      transition: {
        x: {
          repeat: Infinity,
          duration: 0.3,
          ease: "easeInOut"
        }
      }
    }
  };

  return (
    <motion.div
      className={`relative ${sizeClasses[size]} ${className}`}
      initial="idle"
      animate={state}
      variants={variants}
    >
      {/* Character Body - Stylized as a yellow Pikachu-inspired character */}
      <div className="absolute inset-0 bg-yellow-300 rounded-3xl overflow-hidden">
        {/* Ears */}
        <div className="absolute top-0 left-1/4 w-[15%] h-[30%] bg-yellow-300 rounded-t-full transform -rotate-15"></div>
        <div className="absolute top-0 right-1/4 w-[15%] h-[30%] bg-yellow-300 rounded-t-full transform rotate-15"></div>
        
        {/* Face */}
        <div className="absolute top-[20%] left-1/2 transform -translate-x-1/2 w-[80%] h-[60%] bg-yellow-200 rounded-full overflow-hidden">
          {/* Eyes */}
          <div className="absolute top-[25%] left-[25%] w-[15%] h-[15%] bg-black rounded-full"></div>
          <div className="absolute top-[25%] right-[25%] w-[15%] h-[15%] bg-black rounded-full"></div>
          
          {/* Mouth (changes based on state) */}
          {state === 'happy' && (
            <div className="absolute top-[55%] left-1/2 transform -translate-x-1/2 w-[40%] h-[15%] border-b-4 border-black rounded-b-xl"></div>
          )}
          
          {state === 'thinking' && (
            <div className="absolute top-[60%] left-[40%] w-[20%] h-[5%] bg-black rounded-full"></div>
          )}
          
          {state === 'surprised' && (
            <div className="absolute top-[55%] left-1/2 transform -translate-x-1/2 w-[20%] h-[20%] bg-white border-2 border-black rounded-full"></div>
          )}
          
          {state === 'nervous' && (
            <div className="absolute top-[60%] left-1/2 transform -translate-x-1/2 w-[30%] h-[5%] bg-black rounded-full"></div>
          )}
          
          {state === 'idle' && (
            <div className="absolute top-[55%] left-1/2 transform -translate-x-1/2 w-[30%] h-[10%] border-b-2 border-black rounded-b-md"></div>
          )}
          
          {/* Cheeks */}
          <div className="absolute top-[50%] left-[15%] w-[15%] h-[15%] bg-red-400 rounded-full opacity-70"></div>
          <div className="absolute top-[50%] right-[15%] w-[15%] h-[15%] bg-red-400 rounded-full opacity-70"></div>
        </div>
      </div>
    </motion.div>
  );
};

export default Character;
