
import React from 'react';
import { motion } from 'framer-motion';
import Character from '../Character';

const DeepWatersStage: React.FC = () => {
  return (
    <div className="relative w-full h-full min-h-[600px] overflow-hidden rounded-2xl border border-white/20 shadow-lg">
      {/* Deep ocean background */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-600 via-blue-700 to-blue-900"></div>
      
      {/* Sun underwater effect */}
      <motion.div 
        className="absolute top-[10%] left-[15%] w-20 h-20 bg-blue-300 rounded-full opacity-30 blur-lg"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.2, 0.3, 0.2]
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
      
      {/* Underwater light rays */}
      <motion.div 
        className="absolute top-0 left-[20%] w-4 h-[40%] bg-gradient-to-b from-blue-200 to-transparent skew-x-12 opacity-10"
        animate={{
          opacity: [0.1, 0.15, 0.1]
        }}
        transition={{
          duration: 3,
          repeat: Infinity
        }}
      />
      <motion.div 
        className="absolute top-0 left-[30%] w-6 h-[50%] bg-gradient-to-b from-blue-200 to-transparent skew-x-12 opacity-10"
        animate={{
          opacity: [0.1, 0.2, 0.1]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          delay: 1
        }}
      />
      
      {/* Bubbles */}
      {Array.from({ length: 15 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-3 h-3 rounded-full bg-white/20 backdrop-blur-sm"
          style={{
            left: `${10 + Math.random() * 80}%`,
            bottom: `-10%`,
          }}
          animate={{ 
            y: [0, -600],
            x: Math.random() > 0.5 ? [0, 20, -20, 0] : [0, -20, 20, 0],
            opacity: [0.7, 0.7, 0]
          }}
          transition={{ 
            duration: 10 + Math.random() * 15,
            repeat: Infinity,
            delay: Math.random() * 10
          }}
        />
      ))}
      
      {/* Underwater plants */}
      <motion.div 
        className="absolute bottom-0 left-[10%] w-12 h-32 bg-green-800 rounded-t-full origin-bottom"
        animate={{
          scaleY: [1, 1.05, 1],
          skewX: [0, 2, 0, -2, 0]
        }}
        transition={{
          duration: 3,
          repeat: Infinity
        }}
      />
      <motion.div 
        className="absolute bottom-0 left-[20%] w-10 h-24 bg-green-900 rounded-t-full origin-bottom"
        animate={{
          scaleY: [1, 1.03, 1],
          skewX: [0, -1, 0, 1, 0]
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          delay: 0.5
        }}
      />
      <motion.div 
        className="absolute bottom-0 right-[15%] w-14 h-36 bg-green-800 rounded-t-full origin-bottom"
        animate={{
          scaleY: [1, 1.04, 1],
          skewX: [0, 1, 0, -1, 0]
        }}
        transition={{
          duration: 3.2,
          repeat: Infinity
        }}
      />
      
      {/* Character on raft */}
      <div className="absolute bottom-[35%] left-1/2 transform -translate-x-1/2">
        {/* Improved raft with sail */}
        <div className="relative w-48 h-14 bg-amber-800 rounded-md border-2 border-amber-900">
          <div className="absolute -top-36 left-1/2 transform -translate-x-1/2 w-2 h-36 bg-amber-900"></div>
          <motion.div
            className="absolute -top-32 -right-6 w-20 h-32 bg-white/80 origin-left"
            animate={{
              skewY: [0, 3, 0, -3, 0]
            }}
            transition={{
              duration: 4,
              repeat: Infinity
            }}
          />
        </div>
        {/* Character on raft */}
        <div className="absolute -top-40 left-1/2 transform -translate-x-1/2">
          <Character state="surprised" />
        </div>
      </div>
      
      {/* Shark silhouette */}
      <motion.div
        className="absolute bottom-[25%] right-[-10%]"
        animate={{
          x: [-80, -200],
          y: [0, 30, 0, -30, 0]
        }}
        transition={{
          x: {
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse"
          },
          y: {
            duration: 5,
            repeat: Infinity
          }
        }}
      >
        <div className="relative">
          <div className="w-40 h-20 bg-gray-900/60 rounded-l-full"></div>
          <div className="absolute top-[-15px] left-[20px] w-16 h-16 bg-gray-900/60 transform rotate-45 origin-bottom-left"></div>
          <div className="absolute bottom-[-2px] right-[10px] w-20 h-12 bg-gray-900/60 rounded-r-full"></div>
        </div>
      </motion.div>
      
      {/* Speed meter */}
      <div className="absolute top-[5rem] right-[1rem] bg-white/20 backdrop-blur-sm p-2 rounded-lg">
        <div className="text-xs text-white/80 mb-1">Speed</div>
        <div className="w-8 h-32 bg-white/20 rounded-full overflow-hidden flex flex-col-reverse">
          <motion.div 
            className="w-full bg-gradient-to-t from-green-500 to-yellow-400 rounded-b-full"
            animate={{ height: ["20%", "50%", "30%"] }}
            transition={{ 
              duration: 3,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          />
        </div>
      </div>
      
      {/* Progress bar */}
      <div className="absolute top-4 left-4 right-4">
        <div className="bg-white/30 backdrop-blur-sm p-3 rounded-lg shadow-sm">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium">Deep Waters: 4/5</span>
            <span className="text-sm font-medium">7/10 items collected</span>
          </div>
          <div className="h-2 bg-white/50 rounded-full overflow-hidden">
            <motion.div 
              className="h-full bg-primary rounded-full"
              initial={{ width: "0%" }}
              animate={{ width: "70%" }}
              transition={{ duration: 1 }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeepWatersStage;
