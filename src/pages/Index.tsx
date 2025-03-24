
import React from 'react';
import TransitionEffect from '@/components/TransitionEffect';
import AnimatedBackground from '@/components/AnimatedBackground';
import Hero from '@/components/Hero';
import Navigation from '@/components/Navigation';

const Index: React.FC = () => {
  return (
    <TransitionEffect>
      <div className="min-h-screen">
        <AnimatedBackground theme="forest" />
        <Navigation />
        <Hero />
      </div>
    </TransitionEffect>
  );
};

export default Index;
