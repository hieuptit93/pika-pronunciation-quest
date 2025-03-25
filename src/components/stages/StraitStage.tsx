
import React from 'react';
import { motion } from 'framer-motion';
import Character from '../Character';

const StraitStage: React.FC = () => {
  return (
    <div className="relative w-full h-full min-h-[600px] overflow-hidden rounded-2xl border border-white/20 shadow-lg">
      {/* Night sky */}
      <div className="absolute inset-0 bg-gradient-to-b from-night via-indigo-900 to-indigo-800"></div>
      
      {/* Moon */}
      <motion.div 
        className="absolute top-[10%] right-[15%] w-16 h-16 bg-gray-100 rounded-full opacity-90 shadow-[0_0_20px_10px_rgba(255,255,255,0.3)]"
        animate={{
          scale: [1, 1.03, 1],
          opacity: [0.8, 0.9, 0.8]
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
      
      {/* Stars */}
      <div className="absolute inset-0">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              top: `${Math.random() * 40}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.4, 1, 0.4],
            }}
            transition={{
              duration: 2 + Math.random() * 3,
              repeat: Infinity,
              repeatType: "reverse",
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
      
      {/* Narrow strait water */}
      <div className="absolute bottom-0 left-0 right-0 h-[50%] bg-gradient-to-b from-indigo-800/90 to-indigo-900/90"></div>
      
      {/* Jagged rocks */}
      <div className="absolute bottom-[40%] left-[5%] w-[15%] h-[30%] bg-gray-700 rounded-t-lg transform rotate-[10deg]"></div>
      <div className="absolute bottom-[35%] left-[10%] w-[8%] h-[25%] bg-gray-800 rounded-t-lg transform rotate-[5deg]"></div>
      <div className="absolute bottom-[37%] right-[8%] w-[12%] h-[28%] bg-gray-700 rounded-t-lg transform rotate-[-8deg]"></div>
      <div className="absolute bottom-[35%] right-[15%] w-[10%] h-[22%] bg-gray-800 rounded-t-lg transform rotate-[-12deg]"></div>
      
      {/* Wind visualization */}
      <motion.div 
        className="absolute top-[30%] left-0 w-full h-[2px] bg-white/10"
        animate={{ 
          x: ["-100%", "100%"],
          opacity: [0, 0.2, 0]
        }}
        transition={{ 
          duration: 3,
          repeat: Infinity,
        }}
      />
      <motion.div 
        className="absolute top-[35%] left-0 w-full h-[2px] bg-white/10"
        animate={{ 
          x: ["-100%", "100%"],
          opacity: [0, 0.2, 0]
        }}
        transition={{ 
          duration: 3.5,
          repeat: Infinity,
          delay: 0.5
        }}
      />
      <motion.div 
        className="absolute top-[40%] left-0 w-full h-[2px] bg-white/10"
        animate={{ 
          x: ["-100%", "100%"],
          opacity: [0, 0.2, 0]
        }}
        transition={{ 
          duration: 4,
          repeat: Infinity,
          delay: 1
        }}
      />
      
      {/* Character on raft */}
      <div className="absolute bottom-[25%] left-1/2 transform -translate-x-1/2">
        {/* Improved raft with lantern */}
        <div className="relative w-40 h-12 bg-amber-800 rounded-md border-2 border-amber-900">
          <div className="absolute -top-8 left-5 w-4 h-8 bg-amber-900 rounded-t-sm"></div>
          <motion.div 
            className="absolute -top-12 left-3 w-8 h-8 bg-yellow-200 rounded-full opacity-80 shadow-[0_0_10px_5px_rgba(255,200,0,0.3)]"
            animate={{
              opacity: [0.7, 0.9, 0.7]
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity
            }}
          />
        </div>
        {/* Character on raft */}
        <div className="absolute -top-32 left-1/2 transform -translate-x-1/2">
          <Character state="nervous" />
        </div>
      </div>
      
      {/* Navigation path */}
      <div className="absolute bottom-[24%] left-[30%] right-[30%] h-[1px] bg-white/30 flex items-center justify-between px-4">
        <div className="w-2 h-2 bg-white/60 rounded-full"></div>
        <div className="w-2 h-2 bg-white/60 rounded-full"></div>
        <div className="w-2 h-2 bg-white/60 rounded-full"></div>
        <div className="w-2 h-2 bg-white/60 rounded-full"></div>
        <div className="w-2 h-2 bg-white/60 rounded-full"></div>
      </div>
      
      {/* Progress bar */}
      <div className="absolute top-4 left-4 right-4">
        <div className="bg-white/30 backdrop-blur-sm p-3 rounded-lg shadow-sm">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium">Strait Stage: 3/5</span>
            <span className="text-sm font-medium">5/10 items collected</span>
          </div>
          <div className="h-2 bg-white/50 rounded-full overflow-hidden">
            <motion.div 
              className="h-full bg-primary rounded-full"
              initial={{ width: "0%" }}
              animate={{ width: "50%" }}
              transition={{ duration: 1 }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StraitStage;
