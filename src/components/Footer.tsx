
import React from 'react';
import { Gamepad2, Twitter, Facebook, Instagram, Youtube, Zap } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="glass border-t border-gray-700/50 py-16 relative">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="animate-slide-in-left">
            <div className="flex items-center space-x-3 mb-6">
              <div className="relative">
                <Gamepad2 className="w-8 h-8 text-cyan-400 animate-glow" />
                <Zap className="w-3 h-3 text-yellow-400 absolute -top-1 -right-1 animate-pulse" />
              </div>
              <span className="text-2xl font-bold text-white neon-text">
                Game<span className="text-cyan-400">Hub</span>
              </span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Your ultimate destination for epic gaming experiences. 
              Join millions of players in the most immersive gaming universe ever created.
            </p>
          </div>
          
          <div className="animate-slide-in-bottom delay-200">
            <h4 className="text-white font-bold mb-6 text-lg neon-text">Games</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-cyan-400 transition-all duration-300 hover:translate-x-2">New Releases</a></li>
              <li><a href="#" className="text-gray-400 hover:text-cyan-400 transition-all duration-300 hover:translate-x-2">Top Rated</a></li>
              <li><a href="#" className="text-gray-400 hover:text-cyan-400 transition-all duration-300 hover:translate-x-2">Free Games</a></li>
              <li><a href="#" className="text-gray-400 hover:text-cyan-400 transition-all duration-300 hover:translate-x-2">Coming Soon</a></li>
            </ul>
          </div>
          
          <div className="animate-slide-in-bottom delay-400">
            <h4 className="text-white font-bold mb-6 text-lg neon-text">Community</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-all duration-300 hover:translate-x-2">Forums</a></li>
              <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-all duration-300 hover:translate-x-2">Discord</a></li>
              <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-all duration-300 hover:translate-x-2">Tournaments</a></li>
              <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-all duration-300 hover:translate-x-2">Leaderboards</a></li>
            </ul>
          </div>
          
          <div className="animate-slide-in-right">
            <h4 className="text-white font-bold mb-6 text-lg neon-text">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-all duration-300 hover:scale-125 transform">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-all duration-300 hover:scale-125 transform">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-pink-400 transition-all duration-300 hover:scale-125 transform">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-red-400 transition-all duration-300 hover:scale-125 transform">
                <Youtube className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700/50 mt-12 pt-8 text-center animate-slide-in-bottom delay-600">
          <p className="text-gray-400">
            © 2024 GameHub. All rights reserved. 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 font-bold">
              {" "}Built for Gamers, By Gamers.
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};
