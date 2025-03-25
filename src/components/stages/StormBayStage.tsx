
import React from 'react';
import { motion } from 'framer-motion';
import Character from '../Character';
import PronunciationChallenge from '../PronunciationChallenge';

const StormBayStage: React.FC = () => {
  return (
    <div className="relative w-full h-full min-h-[600px] overflow-hidden rounded-2xl border border-white/20 shadow-lg">
      {/* Storm sky */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-800 via-gray-700 to-gray-600"></div>
      
      {/* Rain effect */}
      <div className="absolute inset-0 opacity-70">
        {Array.from({ length: 100 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-[1px] h-[10px] bg-blue-200/60"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              transform: 'rotate(15deg)'
            }}
            animate={{ 
              y: [0, 30],
              opacity: [0.7, 0]
            }}
            transition={{ 
              duration: 0.2 + Math.random() * 0.3,
              repeat: Infinity,
              delay: Math.random() * 0.5
            }}
          />
        ))}
      </div>
      
      {/* Lightning flashes */}
      <motion.div
        className="absolute inset-0 bg-white opacity-0"
        animate={{ 
          opacity: [0, 0, 0, 0.1, 0.5, 0.2, 0] 
        }}
        transition={{ 
          duration: 0.5,
          repeat: Infinity,
          repeatDelay: 5 + Math.random() * 5
        }}
      />
      <motion.div
        className="absolute inset-0 bg-white opacity-0"
        animate={{ 
          opacity: [0, 0, 0, 0.3, 0.7, 0.2, 0] 
        }}
        transition={{ 
          duration: 0.5,
          repeat: Infinity,
          repeatDelay: 7 + Math.random() * 6,
          delay: 2
        }}
      />
      
      {/* Storm clouds */}
      <motion.div 
        className="absolute top-[15%] left-0 w-full"
        animate={{
          x: [-20, 0, -20]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      >
        <div className="w-32 h-16 bg-gray-700 rounded-full absolute left-[10%] opacity-90"></div>
        <div className="w-48 h-24 bg-gray-600 rounded-full absolute left-[20%] top-[10px] opacity-90"></div>
        <div className="w-40 h-20 bg-gray-800 rounded-full absolute left-[40%] top-[-10px] opacity-90"></div>
        <div className="w-36 h-18 bg-gray-700 rounded-full absolute right-[20%] opacity-90"></div>
        <div className="w-44 h-22 bg-gray-600 rounded-full absolute right-[10%] top-[15px] opacity-90"></div>
      </motion.div>
      
      {/* Stormy sea */}
      <div className="absolute bottom-0 left-0 right-0 h-[50%] bg-gray-700"></div>
      
      {/* Waves */}
      <motion.div
        className="absolute bottom-[49%] left-0 right-0 h-[20px]"
        animate={{
          y: [0, 5, 0, -5, 0]
        }}
        transition={{
          duration: 3,
          repeat: Infinity
        }}
      >
        <div className="w-full h-full bg-gray-600 rounded-t-full"></div>
      </motion.div>
      <motion.div
        className="absolute bottom-[45%] left-[20%] w-[30%] h-[15px]"
        animate={{
          y: [0, -5, 0, 5, 0]
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          delay: 0.5
        }}
      >
        <div className="w-full h-full bg-gray-500 rounded-t-full"></div>
      </motion.div>
      <motion.div
        className="absolute bottom-[45%] right-[25%] w-[25%] h-[12px]"
        animate={{
          y: [0, 4, 0, -4, 0]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          delay: 1
        }}
      >
        <div className="w-full h-full bg-gray-500 rounded-t-full"></div>
      </motion.div>
      
      {/* Distant shore (goal) */}
      <motion.div
        className="absolute bottom-0 right-[-20%] w-[60%] h-[20%]"
        animate={{
          x: [-50, -70, -50]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      >
        <div className="absolute bottom-0 w-full h-[40%] bg-amber-800 rounded-tl-lg"></div>
        <div className="absolute bottom-[40%] left-[20%] w-[15%] h-[60%] bg-gray-800 rounded-t-lg"></div>
        <div className="absolute bottom-[40%] left-[40%] w-[20%] h-[100%] bg-gray-700 rounded-t-lg"></div>
        <motion.div
          className="absolute bottom-[40%] left-[70%] w-[5px] h-[30px]"
          animate={{
            opacity: [1, 0.7, 1]
          }}
          transition={{
            duration: 2,
            repeat: Infinity
          }}
        >
          <div className="w-full h-full bg-amber-500 rounded-full"></div>
        </motion.div>
      </motion.div>
      
      {/* Character on raft */}
      <motion.div 
        className="absolute bottom-[35%] left-1/2 transform -translate-x-1/2"
        animate={{
          y: [0, 10, 0, -10, 0],
          rotate: [0, 2, 0, -2, 0]
        }}
        transition={{
          duration: 4,
          repeat: Infinity
        }}
      >
        {/* Advanced raft with shelter */}
        <div className="relative w-56 h-16 bg-amber-800 rounded-md border-2 border-amber-900">
          <div className="absolute -top-36 left-1/2 transform -translate-x-1/2 w-2 h-36 bg-amber-900"></div>
          <motion.div
            className="absolute -top-32 -right-6 w-20 h-32 bg-gray-200/70 origin-left"
            animate={{
              skewY: [0, 5, 0, -5, 0]
            }}
            transition={{
              duration: 3,
              repeat: Infinity
            }}
          />
          <div className="absolute -top-20 left-[20%] right-[40%] h-20 bg-amber-700/90 rounded-t-lg"></div>
        </div>
        {/* Character on raft */}
        <div className="absolute -top-36 left-[30%] transform -translate-x-1/2">
          <Character state="nervous" />
        </div>
      </motion.div>
      
      {/* Weather control visualization */}
      <motion.div
        className="absolute top-[15%] left-[30%] w-[40%] h-[30%]"
        animate={{
          opacity: [0.7, 0.9, 0.7]
        }}
        transition={{
          duration: 5,
          repeat: Infinity
        }}
      >
        <div className="w-full h-full rounded-full bg-gradient-radial from-blue-300/5 to-transparent"></div>
      </motion.div>
      
      {/* Game Challenge UI */}
      <div className="absolute bottom-[20%] left-1/2 transform -translate-x-1/2">
        <PronunciationChallenge 
          word="storm"
          hint="Focus on the 'st' blend at the beginning"
        />
      </div>
      
      {/* Progress bar */}
      <div className="absolute top-4 left-4 right-4">
        <div className="bg-white/30 backdrop-blur-sm p-3 rounded-lg shadow-sm">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium">Storm Bay: 5/5</span>
            <span className="text-sm font-medium">9/10 items collected</span>
          </div>
          <div className="h-2 bg-white/50 rounded-full overflow-hidden">
            <motion.div 
              className="h-full bg-primary rounded-full"
              initial={{ width: "0%" }}
              animate={{ width: "90%" }}
              transition={{ duration: 1 }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StormBayStage;
