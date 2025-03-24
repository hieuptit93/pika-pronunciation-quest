
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Character from './Character';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[90vh] overflow-hidden flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 pt-24 pb-16">
      {/* Floating elements background */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/4 w-24 h-24 bg-primary/10 rounded-full"
          animate={{
            y: [0, -20, 0],
            x: [0, 10, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
        <motion.div
          className="absolute top-1/3 right-1/4 w-32 h-32 bg-secondary/10 rounded-full"
          animate={{
            y: [0, 30, 0],
            x: [0, -15, 0],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/3 w-20 h-20 bg-accent/10 rounded-full"
          animate={{
            y: [0, -15, 0],
            x: [0, -10, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
      </div>

      <div className="container max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
        {/* Text content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="order-2 lg:order-1"
        >
          <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-primary/10 text-primary text-sm font-medium">
            A fun educational adventure
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tighter mb-6">
            Pika's Pronunciation
            <span className="relative">
              <span className="relative z-10">Adventure</span>
              <motion.span
                className="absolute bottom-1 left-0 right-0 h-3 bg-accent/40 -z-0 rounded"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 0.6, delay: 1.2 }}
              />
            </span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl">
            Join Pika on an epic journey across magical islands, improving pronunciation skills through fun mini-games and exciting challenges.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <Link to="/game">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 rounded-lg bg-primary text-white font-semibold shadow-lg hover:shadow-xl transition-all"
              >
                Start Adventure
              </motion.button>
            </Link>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 rounded-lg bg-white border border-input text-foreground font-semibold shadow hover:shadow-md transition-all"
            >
              Learn More
            </motion.button>
          </div>
        </motion.div>
        
        {/* Character showcase */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="order-1 lg:order-2 flex justify-center"
        >
          <div className="relative w-72 h-72 md:w-96 md:h-96">
            {/* Spotlight effect */}
            <div className="absolute inset-0 bg-gradient-radial from-primary/20 via-transparent to-transparent rounded-full" />
            
            {/* Character */}
            <motion.div
              initial={{ y: 20 }}
              animate={{ y: [20, -20, 20] }}
              transition={{ duration: 4, repeat: Infinity, repeatType: "loop" }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <Character state="happy" size="lg" />
            </motion.div>
            
            {/* Floating items around character */}
            <motion.div
              className="absolute top-1/4 left-0 w-16 h-16 bg-forest/20 rounded-full backdrop-blur-sm flex items-center justify-center"
              animate={{ y: [0, -15, 0], rotate: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, repeatType: "reverse" }}
            >
              <span className="text-2xl">🌲</span>
            </motion.div>
            
            <motion.div
              className="absolute bottom-1/4 right-0 w-16 h-16 bg-lagoon/20 rounded-full backdrop-blur-sm flex items-center justify-center"
              animate={{ y: [0, 15, 0], rotate: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, repeatType: "reverse" }}
            >
              <span className="text-2xl">🌊</span>
            </motion.div>
            
            <motion.div
              className="absolute top-0 right-1/4 w-14 h-14 bg-sunset/20 rounded-full backdrop-blur-sm flex items-center justify-center"
              animate={{ y: [0, 10, 0], x: [0, 10, 0] }}
              transition={{ duration: 6, repeat: Infinity, repeatType: "reverse" }}
            >
              <span className="text-2xl">⭐</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
      
      {/* Features section */}
      <div className="container max-w-6xl mx-auto mt-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">Embark on a Learning Adventure</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover the five exciting stages of Pika's journey, each with unique challenges and pronunciation skills.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Forest Beginning",
              description: "Gather materials by pronouncing words correctly and build your raft.",
              icon: "🌳",
              color: "bg-forest/10"
            },
            {
              title: "Lagoon & Tides",
              description: "Navigate through gentle waters by mastering vowel sounds.",
              icon: "🌊",
              color: "bg-lagoon/10"
            },
            {
              title: "Stormy Weather",
              description: "Brave the elements with perfect pronunciation to reach the shore.",
              icon: "⚡",
              color: "bg-storm/10"
            }
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 + index * 0.2 }}
              className={`rounded-2xl ${feature.color} p-6 backdrop-blur-sm border border-white/20 shadow-glass`}
            >
              <div className="rounded-full w-12 h-12 flex items-center justify-center mb-4 text-2xl">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
