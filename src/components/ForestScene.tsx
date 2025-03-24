
import React from 'react';
import { motion } from 'framer-motion';
import Character from './Character';
import PronunciationChallenge from './PronunciationChallenge';

const ForestScene: React.FC = () => {
  return (
    <div className="relative w-full h-full min-h-[600px] overflow-hidden rounded-2xl border border-white/20 shadow-lg">
      {/* Sky */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-300 via-blue-200 to-blue-100"></div>
      
      {/* Sun */}
      <motion.div 
        className="absolute top-[10%] right-[15%] w-20 h-20 bg-yellow-200 rounded-full opacity-90"
        animate={{
          scale: [1, 1.05, 1],
          opacity: [0.9, 1, 0.9]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
      
      {/* Clouds */}
      <motion.div 
        className="absolute top-[15%] left-[10%] w-24 h-8 bg-white rounded-full opacity-80"
        animate={{ x: [0, 30, 0] }}
        transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
      />
      <motion.div 
        className="absolute top-[20%] left-[20%] w-32 h-10 bg-white rounded-full opacity-80"
        animate={{ x: [0, -40, 0] }}
        transition={{ duration: 25, repeat: Infinity, repeatType: "reverse" }}
      />
      <motion.div 
        className="absolute top-[10%] left-[50%] w-40 h-12 bg-white rounded-full opacity-80"
        animate={{ x: [0, 50, 0] }}
        transition={{ duration: 30, repeat: Infinity, repeatType: "reverse" }}
      />
      
      {/* Distant mountains */}
      <div className="absolute bottom-[40%] left-0 right-0 h-[20%]">
        <div className="absolute bottom-0 left-[5%] w-[30%] h-full bg-blue-300/50 rounded-t-[100%]"></div>
        <div className="absolute bottom-0 left-[25%] w-[40%] h-[80%] bg-blue-400/50 rounded-t-[100%]"></div>
        <div className="absolute bottom-0 left-[55%] w-[35%] h-full bg-blue-300/50 rounded-t-[100%]"></div>
      </div>
      
      {/* Forest background */}
      <div className="absolute bottom-0 left-0 right-0 h-[40%] bg-forest/60 rounded-t-xl"></div>
      
      {/* Trees */}
      <div className="absolute bottom-[38%] left-[10%] w-16 h-32 flex flex-col items-center">
        <div className="w-[80%] h-[70%] bg-green-700 rounded-t-full"></div>
        <div className="w-[20%] h-[30%] bg-amber-800"></div>
      </div>
      <div className="absolute bottom-[38%] left-[20%] w-20 h-40 flex flex-col items-center">
        <div className="w-[80%] h-[70%] bg-green-600 rounded-t-full"></div>
        <div className="w-[20%] h-[30%] bg-amber-800"></div>
      </div>
      <div className="absolute bottom-[38%] right-[15%] w-14 h-28 flex flex-col items-center">
        <div className="w-[80%] h-[70%] bg-green-700 rounded-t-full"></div>
        <div className="w-[20%] h-[30%] bg-amber-800"></div>
      </div>
      <div className="absolute bottom-[38%] right-[25%] w-18 h-36 flex flex-col items-center">
        <div className="w-[80%] h-[70%] bg-green-600 rounded-t-full"></div>
        <div className="w-[20%] h-[30%] bg-amber-800"></div>
      </div>
      
      {/* Foreground grass */}
      <div className="absolute bottom-0 left-0 right-0 h-[10%] bg-green-500"></div>
      
      {/* Character */}
      <div className="absolute bottom-[10%] left-1/2 transform -translate-x-1/2">
        <Character state="idle" />
      </div>
      
      {/* Floating leaves (as collectible items) */}
      <motion.div 
        className="absolute top-[45%] left-[30%] w-12 h-6 bg-green-400 rounded-full rotate-45 opacity-80"
        animate={{ 
          y: [0, -10, 0],
          rotate: [45, 55, 45]
        }}
        transition={{ 
          duration: 3,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
      <motion.div 
        className="absolute top-[40%] right-[35%] w-10 h-5 bg-green-500 rounded-full rotate-[30deg] opacity-80"
        animate={{ 
          y: [0, -8, 0],
          rotate: [30, 40, 30]
        }}
        transition={{ 
          duration: 2.5,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
      <motion.div 
        className="absolute top-[50%] right-[25%] w-8 h-4 bg-green-600 rounded-full rotate-[15deg] opacity-80"
        animate={{ 
          y: [0, -6, 0],
          rotate: [15, 25, 15]
        }}
        transition={{ 
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
      
      {/* Game Challenge UI */}
      <div className="absolute bottom-[20%] left-1/2 transform -translate-x-1/2">
        <PronunciationChallenge 
          word="tree"
          hint="Focus on the 'tr' sound at the beginning"
        />
      </div>
      
      {/* Progress bar */}
      <div className="absolute top-4 left-4 right-4">
        <div className="bg-white/30 backdrop-blur-sm p-3 rounded-lg shadow-sm">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium">Forest Stage: 1/5</span>
            <span className="text-sm font-medium">2/10 items collected</span>
          </div>
          <div className="h-2 bg-white/50 rounded-full overflow-hidden">
            <motion.div 
              className="h-full bg-primary rounded-full"
              initial={{ width: "0%" }}
              animate={{ width: "20%" }}
              transition={{ duration: 1 }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForestScene;
