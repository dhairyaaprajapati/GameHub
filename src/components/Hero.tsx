
import React from 'react';
import { Button } from '@/components/ui/button';
import { Play, Download } from 'lucide-react';

export const Hero = () => {
  return (
    <section id="home" className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 animate-fade-in">
            Epic Gaming
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
              Experience
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto animate-fade-in">
            Discover incredible games, join a thriving community, and embark on unforgettable adventures. 
            Your next favorite game is waiting.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
            <Button size="lg" className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-3">
              <Play className="w-5 h-5 mr-2" />
              Play Now
            </Button>
            <Button size="lg" variant="outline" className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black px-8 py-3">
              <Download className="w-5 h-5 mr-2" />
              Download
            </Button>
          </div>
        </div>
      </div>
      
      {/* Animated background elements */}
      <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
      <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-purple-400 rounded-full animate-pulse delay-75" />
      <div className="absolute bottom-1/4 right-1/4 w-3 h-3 bg-cyan-400 rounded-full animate-pulse delay-150" />
    </section>
  );
};
