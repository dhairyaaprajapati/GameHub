
import React from 'react';
import { Button } from '@/components/ui/button';
import { Star, Play, ShoppingCart, Zap, Heart } from 'lucide-react';

interface Game {
  id: number;
  title: string;
  description: string;
  image: string;
  genre: string;
  rating: number;
  price: string;
}

interface GameCardProps {
  game: Game;
  featured?: boolean;
}

export const GameCard: React.FC<GameCardProps> = ({ game, featured = false }) => {
  return (
    <div className="group relative glass rounded-2xl overflow-hidden border border-gray-700/50 hover:border-cyan-400/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20 animate-slide-in-bottom">
      <div className="relative overflow-hidden">
        <img
          src={game.image}
          alt={game.title}
          className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
        <div className="absolute top-4 right-4 flex space-x-2">
          <span className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-3 py-1 rounded-full text-xs font-bold animate-pulse">
            {game.genre}
          </span>
          {featured && (
            <span className="bg-gradient-to-r from-yellow-500 to-orange-600 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center">
              <Zap className="w-3 h-3 mr-1" />
              HOT
            </span>
          )}
        </div>
        <div className="absolute top-4 left-4">
          <Button variant="ghost" size="icon" className="text-white hover:text-red-400 hover:bg-red-400/10 transition-all duration-300">
            <Heart className="w-5 h-5" />
          </Button>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors neon-text">
          {game.title}
        </h3>
        <p className="text-gray-400 mb-6 text-sm leading-relaxed">{game.description}</p>
        
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-2">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i} 
                  className={`w-4 h-4 ${i < Math.floor(game.rating) ? 'text-yellow-400 fill-current' : 'text-gray-600'}`} 
                />
              ))}
            </div>
            <span className="text-white font-bold">{game.rating}</span>
          </div>
          <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
            {game.price}
          </span>
        </div>
        
        <div className="flex space-x-3">
          <Button size="sm" className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 transform hover:scale-105 transition-all duration-300">
            <Play className="w-4 h-4 mr-2" />
            PLAY NOW
          </Button>
          <Button size="sm" variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-700 hover:border-cyan-400 hover:text-cyan-400 transition-all duration-300">
            <ShoppingCart className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};
