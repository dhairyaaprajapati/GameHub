
import React from 'react';
import { Button } from '@/components/ui/button';
import { Star, Play, ShoppingCart } from 'lucide-react';

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
    <div className="group relative bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700/50 hover:border-cyan-400/50 transition-all duration-300 hover:scale-105">
      <div className="relative overflow-hidden">
        <img
          src={game.image}
          alt={game.title}
          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute top-4 right-4">
          <span className="bg-cyan-500 text-black px-2 py-1 rounded-full text-xs font-bold">
            {game.genre}
          </span>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
          {game.title}
        </h3>
        <p className="text-gray-400 mb-4 text-sm">{game.description}</p>
        
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-1">
            <Star className="w-4 h-4 text-yellow-400 fill-current" />
            <span className="text-white font-semibold">{game.rating}</span>
          </div>
          <span className="text-cyan-400 font-bold">{game.price}</span>
        </div>
        
        <div className="flex space-x-2">
          <Button size="sm" className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700">
            <Play className="w-4 h-4 mr-2" />
            Play
          </Button>
          <Button size="sm" variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-700">
            <ShoppingCart className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};
