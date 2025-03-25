
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface PronunciationChallengeProps {
  word: string;
  hint?: string;
}

const PronunciationChallenge: React.FC<PronunciationChallengeProps> = ({ 
  word, 
  hint 
}) => {
  const [isListening, setIsListening] = useState(false);
  const [attemptsLeft, setAttemptsLeft] = useState(3);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  
  // Simulate pronunciation check (in a real app this would use Speech Recognition API)
  const handleListen = () => {
    setIsListening(true);
    
    // Simulate processing delay
    setTimeout(() => {
      // 80% chance of success for demo purposes
      const isSuccessful = Math.random() > 0.2;
      
      setStatus(isSuccessful ? 'success' : 'error');
      setIsListening(false);
      
      if (!isSuccessful) {
        setAttemptsLeft(prev => prev - 1);
      }
      
      // Reset status after a delay
      setTimeout(() => {
        setStatus('idle');
      }, 2000);
    }, 1500);
  };

  return (
    <motion.div 
      className="fixed bottom-4 right-4 glass-card rounded-xl p-4 w-[250px] sm:w-[280px] shadow-lg border border-white/20 backdrop-blur-md z-50"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className="text-center mb-3">
        <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium mb-2">
          Say this word
        </div>
        <motion.h3 
          className="text-2xl font-bold tracking-wide"
          animate={status === 'error' ? { x: [0, -5, 5, -5, 5, 0] } : {}}
          transition={{ duration: 0.4 }}
        >
          {word}
        </motion.h3>
        {hint && (
          <p className="text-xs text-muted-foreground mt-1">{hint}</p>
        )}
      </div>
      
      <div className="flex justify-center mb-2">
        <AnimatePresence mode="wait">
          {status === 'success' && (
            <motion.div 
              key="success"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="bg-green-100 text-green-800 px-3 py-1 rounded-md text-sm font-medium"
            >
              Great job! 🎉
            </motion.div>
          )}
          
          {status === 'error' && (
            <motion.div 
              key="error"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="bg-red-100 text-red-800 px-3 py-1 rounded-md text-sm font-medium"
            >
              Try again! ({attemptsLeft} left)
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      
      <button
        onClick={handleListen}
        disabled={isListening || status === 'success'}
        className="relative w-full py-2.5 rounded-lg bg-primary text-white font-medium disabled:opacity-50 transition-all text-sm"
      >
        {isListening ? (
          <div className="flex items-center justify-center gap-2">
            <span>Listening...</span>
            <div className="flex gap-1">
              <motion.div 
                className="w-1.5 h-1.5 bg-white rounded-full"
                animate={{ y: [0, -4, 0] }}
                transition={{ duration: 0.6, repeat: Infinity, repeatType: "loop", delay: 0 }}
              />
              <motion.div 
                className="w-1.5 h-1.5 bg-white rounded-full"
                animate={{ y: [0, -4, 0] }}
                transition={{ duration: 0.6, repeat: Infinity, repeatType: "loop", delay: 0.2 }}
              />
              <motion.div 
                className="w-1.5 h-1.5 bg-white rounded-full"
                animate={{ y: [0, -4, 0] }}
                transition={{ duration: 0.6, repeat: Infinity, repeatType: "loop", delay: 0.4 }}
              />
            </div>
          </div>
        ) : (
          <span>Press to Speak</span>
        )}
        
        {isListening && (
          <motion.div 
            className="absolute inset-0 rounded-lg border-2 border-primary"
            initial={{ scale: 1 }}
            animate={{ scale: 1.1, opacity: 0 }}
            transition={{ duration: 1, repeat: Infinity }}
          />
        )}
      </button>
      
      <div className="mt-3 flex justify-between text-xs text-muted-foreground">
        <span>Attempts: {3 - attemptsLeft}/3</span>
        <button className="text-primary hover:underline">
          Skip
        </button>
      </div>
    </motion.div>
  );
};

export default PronunciationChallenge;
