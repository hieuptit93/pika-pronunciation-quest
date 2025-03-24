
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import TransitionEffect from '@/components/TransitionEffect';
import GameStage from '@/components/GameStage';
import AnimatedBackground from '@/components/AnimatedBackground';
import Navigation from '@/components/Navigation';

const Game: React.FC = () => {
  const [currentStage, setCurrentStage] = useState(1);
  
  return (
    <TransitionEffect>
      <div className="min-h-screen pt-20">
        <AnimatedBackground theme="forest" />
        <Navigation />
        
        <GameStage stage={currentStage} />
      </div>
    </TransitionEffect>
  );
};

export default Game;
