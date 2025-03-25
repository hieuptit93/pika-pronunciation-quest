
import React from 'react';
import { motion } from 'framer-motion';
import ForestStage from './stages/ForestStage';
import LagoonStage from './stages/LagoonStage';
import StraitStage from './stages/StraitStage';
import DeepWatersStage from './stages/DeepWatersStage';
import StormBayStage from './stages/StormBayStage';
import ProgressTracker from './ProgressTracker';
import PronunciationChallenge from './PronunciationChallenge';

interface GameStageProps {
  stage: number;
}

const GameStage: React.FC<GameStageProps> = ({ stage = 1 }) => {
  const stageName = (() => {
    switch(stage) {
      case 1: return "Forest Beginning";
      case 2: return "Lagoon & Tides";
      case 3: return "Narrow Strait";
      case 4: return "Deep Waters";
      case 5: return "Storm Bay";
      default: return "Unknown Stage";
    }
  })();

  const stageWord = (() => {
    switch(stage) {
      case 1: return "tree";
      case 2: return "water";
      case 3: return "wind";
      case 4: return "ocean";
      case 5: return "storm";
      default: return "tree";
    }
  })();

  const stageHint = (() => {
    switch(stage) {
      case 1: return "Focus on the 'tr' sound at the beginning";
      case 2: return "Focus on the 'wa' sound";
      case 3: return "Focus on the 'i' sound";
      case 4: return "Focus on the 'sh' sound in the middle";
      case 5: return "Focus on the 'st' blend at the beginning";
      default: return "";
    }
  })();

  return (
    <div className="container max-w-6xl mx-auto px-4 py-8 relative">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-bold mb-6"
      >
        Stage {stage}: {stageName}
      </motion.h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Game instructions */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass-card rounded-2xl p-5 lg:col-span-1"
        >
          <h2 className="text-xl font-semibold mb-4">Instructions</h2>
          <div className="space-y-4">
            <p className="text-muted-foreground">
              Collect materials to build your raft by correctly pronouncing the words that appear.
            </p>
            
            <div className="rounded-lg bg-forest/10 p-3">
              <h3 className="font-medium mb-1">Your goal:</h3>
              <p className="text-sm">Collect 10 items by pronouncing {stageName.toLowerCase()}-themed words correctly.</p>
            </div>
            
            <div className="space-y-2">
              <div className="flex items-start gap-2">
                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-primary shrink-0 mt-0.5">1</div>
                <p className="text-sm">Click the "Press to Speak" button and say the word clearly.</p>
              </div>
              <div className="flex items-start gap-2">
                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-primary shrink-0 mt-0.5">2</div>
                <p className="text-sm">If pronounced correctly, Pika will collect the item.</p>
              </div>
              <div className="flex items-start gap-2">
                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-primary shrink-0 mt-0.5">3</div>
                <p className="text-sm">Build your raft to move to the next stage!</p>
              </div>
            </div>
            
            <div className="pt-4">
              <ProgressTracker 
                currentStage={stage} 
                totalStages={5}
                stageName={stageName}
                progress={stage === 1 ? 20 : stage === 2 ? 30 : stage === 3 ? 50 : stage === 4 ? 70 : 90}
              />
            </div>
          </div>
        </motion.div>
        
        {/* Game scene */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="lg:col-span-2 relative"
        >
          {stage === 1 && <ForestStage />}
          {stage === 2 && <LagoonStage />}
          {stage === 3 && <StraitStage />}
          {stage === 4 && <DeepWatersStage />}
          {stage === 5 && <StormBayStage />}
        </motion.div>
      </div>
      
      {/* Pronunciation challenge positioned outside the game area */}
      <PronunciationChallenge 
        word={stageWord}
        hint={stageHint}
      />
    </div>
  );
};

export default GameStage;
