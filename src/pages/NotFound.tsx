
import React from 'react';
import { Link, useLocation } from "react-router-dom";
import { motion } from 'framer-motion';
import TransitionEffect from '@/components/TransitionEffect';
import AnimatedBackground from '@/components/AnimatedBackground';
import Character from '@/components/Character';
import Navigation from '@/components/Navigation';

const NotFound: React.FC = () => {
  const location = useLocation();

  return (
    <TransitionEffect>
      <div className="min-h-screen pt-20">
        <AnimatedBackground theme="storm" />
        <Navigation />
        
        <div className="container max-w-4xl mx-auto px-4 py-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="glass-card rounded-2xl p-8 md:p-12"
          >
            <div className="flex flex-col items-center">
              <Character state="surprised" size="lg" className="mb-8" />
              
              <h1 className="text-5xl font-bold mb-4">Oh no!</h1>
              <p className="text-xl text-muted-foreground mb-8">
                Pika can't find the page at <code className="text-sm bg-gray-100 px-2 py-1 rounded">{location.pathname}</code>
              </p>
              
              <Link to="/">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 rounded-lg bg-primary text-white font-semibold shadow-lg hover:shadow-xl transition-all"
                >
                  Go Back Home
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </TransitionEffect>
  );
};

export default NotFound;
