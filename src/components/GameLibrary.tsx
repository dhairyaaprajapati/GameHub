
import React from 'react';
import { GameCard } from './GameCard';
import { Library } from 'lucide-react';

const libraryGames = [
  {
    id: 4,
    title: "Space Odyssey",
    description: "Journey through the vast cosmos in this epic space adventure with stunning visuals",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&h=400&fit=crop",
    genre: "Sci-Fi",
    rating: 4.5,
    price: "$24.99"
  },
  {
    id: 5,
    title: "Tech Ninja",
    description: "Master the art of stealth in a high-tech world filled with dangers",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=400&fit=crop",
    genre: "Stealth",
    rating: 4.4,
    price: "$22.99"
  },
  {
    id: 6,
    title: "Casual Cat",
    description: "Relax and unwind with this charming puzzle game featuring adorable cats",
    image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=800&h=400&fit=crop",
    genre: "Casual",
    rating: 4.9,
    price: "$9.99"
  },
  {
    id: 7,
    title: "Dev World",
    description: "Build and code your way to programming mastery in this educational adventure",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&h=400&fit=crop",
    genre: "Educational",
    rating: 4.3,
    price: "$18.99"
  }
];

export const GameLibrary = () => {
  return (
    <section id="library" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-slide-in-bottom">
          <div className="flex items-center justify-center mb-4">
            <Library className="w-8 h-8 text-purple-400 mr-3 animate-float" />
            <h2 className="text-5xl md:text-6xl font-black text-white neon-text">
              GAME LIBRARY
            </h2>
          </div>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Explore our vast collection of games across all genres and platforms
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {libraryGames.map((game, index) => (
            <div key={game.id} className={`animate-slide-in-bottom delay-${index * 100}`}>
              <GameCard game={game} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
