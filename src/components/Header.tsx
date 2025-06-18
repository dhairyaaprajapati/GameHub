
import React from 'react';
import { Button } from '@/components/ui/button';
import { Gamepad2, User, Search, Menu, Zap } from 'lucide-react';

export const Header = () => {
  return (
    <header className="glass sticky top-0 z-50 border-b border-cyan-500/20">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3 animate-slide-in-left">
            <div className="relative">
              <Gamepad2 className="w-10 h-10 text-cyan-400 animate-glow" />
              <Zap className="w-4 h-4 text-yellow-400 absolute -top-1 -right-1 animate-pulse" />
            </div>
            <span className="text-3xl font-bold text-white neon-text">
              Game<span className="text-cyan-400">Hub</span>
            </span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8 animate-slide-in-bottom">
            <a href="#home" className="text-gray-300 hover:text-cyan-400 transition-all duration-300 hover:scale-110 relative group">
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#games" className="text-gray-300 hover:text-cyan-400 transition-all duration-300 hover:scale-110 relative group">
              Games
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#library" className="text-gray-300 hover:text-cyan-400 transition-all duration-300 hover:scale-110 relative group">
              Library
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#news" className="text-gray-300 hover:text-cyan-400 transition-all duration-300 hover:scale-110 relative group">
              News
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#about" className="text-gray-300 hover:text-cyan-400 transition-all duration-300 hover:scale-110 relative group">
              About
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
          </nav>

          <div className="flex items-center space-x-4 animate-slide-in-right">
            <Button variant="ghost" size="icon" className="text-gray-300 hover:text-cyan-400 hover:bg-cyan-400/10 transition-all duration-300 hover:scale-110">
              <Search className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-gray-300 hover:text-cyan-400 hover:bg-cyan-400/10 transition-all duration-300 hover:scale-110">
              <User className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon" className="md:hidden text-gray-300 hover:text-cyan-400 hover:bg-cyan-400/10 transition-all duration-300 hover:scale-110">
              <Menu className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};
