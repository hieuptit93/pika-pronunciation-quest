
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Book, Home, User, Settings } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navigation: React.FC = () => {
  const location = useLocation();
  
  const navItems = [
    { path: '/', icon: <Home size={24} />, label: 'Home' },
    { path: '/game', icon: <Book size={24} />, label: 'Game' },
    { path: '/profile', icon: <User size={24} />, label: 'Profile' },
    { path: '/settings', icon: <Settings size={24} />, label: 'Settings' },
  ];

  return (
    <header className="fixed top-0 inset-x-0 z-40 backdrop-blur-lg bg-white/40 border-b border-white/10">
      <div className="container max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="relative w-10 h-10 rounded-full bg-primary flex items-center justify-center">
            <span className="text-white font-bold text-lg">P</span>
            <motion.div 
              className="absolute inset-0 rounded-full border-2 border-primary"
              animate={{ 
                scale: [1, 1.1, 1], 
                opacity: [1, 0, 1] 
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity,
                repeatType: "loop" 
              }}
            />
          </div>
          <span className="font-bold text-xl tracking-tight">Pika's Quest</span>
        </Link>
        
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            
            return (
              <Link 
                key={item.path} 
                to={item.path}
                className={cn(
                  "relative px-3 py-2 rounded-md text-sm font-medium transition-colors",
                  isActive ? "text-primary" : "text-foreground/70 hover:text-primary"
                )}
              >
                <span className="flex items-center gap-2">
                  {item.icon}
                  {item.label}
                </span>
                {isActive && (
                  <motion.div 
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full"
                    layoutId="navbar-indicator"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </Link>
            );
          })}
        </nav>
        
        <div className="block md:hidden">
          {/* Mobile menu button */}
          <button className="p-2 rounded-md text-foreground/70 hover:text-primary hover:bg-secondary/10 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navigation;
