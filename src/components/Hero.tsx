
import React from 'react';
import { Button } from '@/components/ui/button';
import { Play, Download, Star, Zap } from 'lucide-react';

export const Hero = () => {
  return (
    <section id="home" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-blue-500/10" />
      
      {/* Floating gaming elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 animate-float">
          <Star className="w-6 h-6 text-yellow-400 animate-pulse" />
        </div>
        <div className="absolute top-40 right-20 animate-float delay-75">
          <Zap className="w-8 h-8 text-cyan-400 animate-pulse" />
        </div>
        <div className="absolute bottom-40 left-20 animate-float delay-150">
          <Play className="w-6 h-6 text-purple-400 animate-pulse" />
        </div>
        <div className="absolute top-60 right-10 animate-float delay-300">
          <Star className="w-4 h-4 text-pink-400 animate-pulse" />
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-6xl mx-auto">
          <div className="animate-slide-in-bottom">
            <h1 className="text-7xl md:text-9xl font-black text-white mb-8 leading-tight">
              EPIC
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 neon-text animate-glow">
                GAMING
              </span>
              <span className="block text-6xl md:text-8xl">UNIVERSE</span>
            </h1>
          </div>
          
          <div className="animate-slide-in-bottom delay-200">
            <p className="text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              Dive into the ultimate gaming experience with cutting-edge graphics, 
              immersive gameplay, and a community of millions. Your adventure starts here.
            </p>
          </div>
          
          <div className="animate-slide-in-bottom delay-400">
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button size="lg" className="bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 hover:from-cyan-400 hover:via-blue-500 hover:to-purple-500 text-white px-12 py-4 text-xl font-bold transform hover:scale-105 transition-all duration-300 animate-glow">
                <Play className="w-6 h-6 mr-3" />
                START PLAYING
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black px-12 py-4 text-xl font-bold transform hover:scale-105 transition-all duration-300 glass">
                <Download className="w-6 h-6 mr-3" />
                DOWNLOAD FREE
              </Button>
            </div>
          </div>

          <div className="mt-16 animate-slide-in-bottom delay-600">
            <div className="flex justify-center items-center space-x-12 text-gray-400">
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400 neon-text">10M+</div>
                <div className="text-sm">Active Players</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400 neon-text">500+</div>
                <div className="text-sm">Epic Games</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-pink-400 neon-text">24/7</div>
                <div className="text-sm">Gaming Action</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
