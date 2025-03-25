
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import TransitionEffect from '@/components/TransitionEffect';
import GameStage from '@/components/GameStage';
import AnimatedBackground from '@/components/AnimatedBackground';
import Navigation from '@/components/Navigation';

const Game: React.FC = () => {
  const [currentStage, setCurrentStage] = useState(1);
  
  // Update background theme based on current stage
  const getBgTheme = () => {
    switch(currentStage) {
      case 1: return "forest";
      case 2: return "lagoon";
      case 3: return "strait";
      case 4: return "deep";
      case 5: return "storm";
      default: return "forest";
    }
  };
  
  const stageNames = [
    "Forest Beginning",
    "Lagoon & Tides",
    "Narrow Strait",
    "Deep Waters",
    "Storm Bay"
  ];
  
  return (
    <TransitionEffect>
      <div className="min-h-screen pt-20 pb-20">
        <AnimatedBackground theme={getBgTheme()} />
        <Navigation />
        
        {/* Stage Selection */}
        <div className="container max-w-6xl mx-auto px-4 py-4">
          <motion.h2
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-xl font-semibold mb-4 text-center"
          >
            Select a Stage to Play
          </motion.h2>
          
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {stageNames.map((name, index) => (
              <motion.button
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className={`px-4 py-2 rounded-full ${
                  currentStage === index + 1 
                    ? 'bg-primary text-white' 
                    : 'bg-white/20 backdrop-blur-sm hover:bg-white/30'
                }`}
                onClick={() => setCurrentStage(index + 1)}
              >
                Stage {index + 1}: {name}
              </motion.button>
            ))}
          </div>
        </div>
        
        <GameStage stage={currentStage} />
      </div>
    </TransitionEffect>
  );
};

export default Game;
