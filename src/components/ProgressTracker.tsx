
import React from 'react';
import { motion, Variants } from 'framer-motion';

interface ProgressTrackerProps {
  currentStage: number;
  totalStages: number;
  stageName: string;
  progress: number; // 0-100
}

const ProgressTracker: React.FC<ProgressTrackerProps> = ({
  currentStage,
  totalStages,
  stageName,
  progress
}) => {
  const stageVariants: Variants = {
    inactive: { scale: 0.85, opacity: 0.5 },
    active: { scale: 1, opacity: 1 },
    completed: { scale: 0.9, opacity: 0.8 }
  };

  const progressVariants: Variants = {
    initial: { width: '0%' },
    animate: { width: `${progress}%` }
  };

  const getStageColor = (stageIndex: number) => {
    if (stageIndex === 0) return 'bg-forest';
    if (stageIndex === 1) return 'bg-lagoon';
    if (stageIndex === 2) return 'bg-night';
    if (stageIndex === 3) return 'bg-blue-700';
    return 'bg-storm';
  };

  return (
    <div className="glass-card rounded-xl p-4 shadow-sm">
      <div className="flex items-center justify-between mb-2">
        <h4 className="font-semibold">{stageName}</h4>
        <span className="text-sm text-muted-foreground">
          Stage {currentStage}/{totalStages}
        </span>
      </div>

      {/* Progress bar */}
      <div className="h-2 bg-white/30 rounded-full overflow-hidden mb-4">
        <motion.div 
          className="h-full bg-primary rounded-full"
          variants={progressVariants}
          initial="initial"
          animate="animate"
          transition={{ duration: 0.8, ease: "easeOut" }}
        />
      </div>

      {/* Stage dots */}
      <div className="relative flex justify-between items-center">
        {Array.from({ length: totalStages }).map((_, index) => {
          const status = 
            index < currentStage - 1 ? 'completed' :
            index === currentStage - 1 ? 'active' : 'inactive';
          
          return (
            <div key={index} className="relative flex flex-col items-center">
              <motion.div
                variants={stageVariants}
                initial="inactive"
                animate={status}
                className={`w-4 h-4 rounded-full ${getStageColor(index)} ${status === 'active' ? 'ring-2 ring-primary ring-offset-2' : ''}`}
              />
              
              {index < totalStages - 1 && (
                <div className="absolute top-2 left-4 w-[calc(100%-16px)] h-0.5 bg-gray-200 -z-10" />
              )}
              
              {index === currentStage - 1 && (
                <motion.div
                  className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs font-medium whitespace-nowrap"
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  You are here
                </motion.div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProgressTracker;
