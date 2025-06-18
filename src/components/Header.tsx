
import React from 'react';
import { Button } from '@/components/ui/button';
import { Gamepad2, User, Search, Menu } from 'lucide-react';

export const Header = () => {
  return (
    <header className="bg-black/20 backdrop-blur-lg border-b border-cyan-500/20 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Gamepad2 className="w-8 h-8 text-cyan-400" />
            <span className="text-2xl font-bold text-white">GameHub</span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-300 hover:text-cyan-400 transition-colors">Home</a>
            <a href="#games" className="text-gray-300 hover:text-cyan-400 transition-colors">Games</a>
            <a href="#library" className="text-gray-300 hover:text-cyan-400 transition-colors">Library</a>
            <a href="#news" className="text-gray-300 hover:text-cyan-400 transition-colors">News</a>
            <a href="#about" className="text-gray-300 hover:text-cyan-400 transition-colors">About</a>
          </nav>

          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="text-gray-300 hover:text-cyan-400">
              <Search className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-gray-300 hover:text-cyan-400">
              <User className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon" className="md:hidden text-gray-300 hover:text-cyan-400">
              <Menu className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};
