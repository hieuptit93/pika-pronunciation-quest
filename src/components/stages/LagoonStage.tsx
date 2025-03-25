
import React from 'react';
import { motion } from 'framer-motion';
import Character from '../Character';

const LagoonStage: React.FC = () => {
  return (
    <div className="relative w-full h-full min-h-[600px] overflow-hidden rounded-2xl border border-white/20 shadow-lg">
      {/* Sky */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-400 via-blue-300 to-blue-200"></div>
      
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
      
      {/* Lagoon Water */}
      <div className="absolute bottom-0 left-0 right-0 h-[60%] bg-gradient-to-b from-blue-300/80 to-blue-500/90 rounded-t-xl"></div>
      
      {/* Water ripples */}
      <motion.div 
        className="absolute bottom-[30%] left-[20%] w-[60%] h-[1px] bg-white/40 rounded-full"
        animate={{ 
          scale: [1, 2, 3],
          opacity: [0.4, 0.2, 0]
        }}
        transition={{ 
          duration: 3,
          repeat: Infinity, 
        }}
      />
      <motion.div 
        className="absolute bottom-[40%] left-[30%] w-[40%] h-[1px] bg-white/40 rounded-full"
        animate={{ 
          scale: [1, 2, 3],
          opacity: [0.4, 0.2, 0]
        }}
        transition={{ 
          duration: 4,
          repeat: Infinity,
          delay: 1
        }}
      />
      
      {/* Small Island */}
      <div className="absolute bottom-[15%] left-[10%] right-[10%] h-[8%] bg-amber-200 rounded-full"></div>
      <div className="absolute bottom-[22%] left-[15%] w-[10%] h-[20%] bg-green-700 rounded-t-full"></div>
      <div className="absolute bottom-[22%] right-[20%] w-[15%] h-[25%] bg-green-600 rounded-t-full"></div>
      
      {/* Character on raft */}
      <div className="absolute bottom-[25%] left-[45%] transform -translate-x-1/2">
        {/* Simple raft */}
        <div className="w-32 h-8 bg-amber-800 rounded-md"></div>
        {/* Character on raft */}
        <div className="absolute -top-32 left-1/2 transform -translate-x-1/2">
          <Character state="thinking" />
        </div>
      </div>
      
      {/* Floating materials */}
      <motion.div 
        className="absolute bottom-[20%] right-[15%] w-16 h-4 bg-amber-700 rounded-md"
        animate={{ 
          y: [0, -5, 0],
          rotate: [0, 2, 0, -2, 0]
        }}
        transition={{ 
          duration: 4,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
      <motion.div 
        className="absolute bottom-[30%] left-[25%] w-12 h-3 bg-amber-700 rounded-md"
        animate={{ 
          y: [0, -4, 0],
          rotate: [0, -2, 0, 2, 0]
        }}
        transition={{ 
          duration: 3.5,
          repeat: Infinity,
          repeatType: "reverse",
          delay: 0.5
        }}
      />
      
      {/* Fish jumping */}
      <motion.div
        className="absolute bottom-[30%] right-[40%]"
        initial={{ y: 20, opacity: 0 }}
        animate={{ 
          y: [-20, -40, -20, 20],
          opacity: [0, 1, 1, 0],
          rotate: [0, -15, -30, -15]
        }}
        transition={{ 
          duration: 2,
          repeat: Infinity,
          repeatDelay: 5
        }}
      >
        <div className="w-8 h-4 bg-blue-600 rounded-full"></div>
        <div className="absolute top-0 right-0 w-4 h-2 bg-blue-600 transform rotate-45 translate-x-1 -translate-y-1"></div>
      </motion.div>
      
      {/* Progress bar */}
      <div className="absolute top-4 left-4 right-4">
        <div className="bg-white/30 backdrop-blur-sm p-3 rounded-lg shadow-sm">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium">Lagoon Stage: 2/5</span>
            <span className="text-sm font-medium">3/10 items collected</span>
          </div>
          <div className="h-2 bg-white/50 rounded-full overflow-hidden">
            <motion.div 
              className="h-full bg-primary rounded-full"
              initial={{ width: "0%" }}
              animate={{ width: "30%" }}
              transition={{ duration: 1 }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LagoonStage;
