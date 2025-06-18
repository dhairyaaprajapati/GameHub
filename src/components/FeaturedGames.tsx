
import React from 'react';
import { GameCard } from './GameCard';
import { Zap } from 'lucide-react';

const featuredGames = [
  {
    id: 1,
    title: "Cyber Warriors",
    description: "Fight in the neon-lit streets of a cyberpunk future with enhanced combat mechanics",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&h=400&fit=crop",
    genre: "Action RPG",
    rating: 4.8,
    price: "$29.99"
  },
  {
    id: 2,
    title: "Mystic Forest",
    description: "Explore magical realms filled with ancient secrets and mythical creatures",
    image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=800&h=400&fit=crop",
    genre: "Adventure",
    rating: 4.6,
    price: "$19.99"
  },
  {
    id: 3,
    title: "Code Breakers",
    description: "Hack your way through digital puzzles and uncover global conspiracies",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=400&fit=crop",
    genre: "Puzzle",
    rating: 4.7,
    price: "$14.99"
  }
];

export const FeaturedGames = () => {
  return (
    <section className="py-20 relative">
      <div className="absolute inset-0 bg-black/20" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-slide-in-bottom">
          <div className="flex items-center justify-center mb-4">
            <Zap className="w-8 h-8 text-yellow-400 mr-3 animate-pulse" />
            <h2 className="text-5xl md:text-6xl font-black text-white neon-text">
              FEATURED
            </h2>
            <Zap className="w-8 h-8 text-yellow-400 ml-3 animate-pulse" />
          </div>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Discover the hottest games that are breaking the internet right now
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredGames.map((game, index) => (
            <div key={game.id} className={`animate-slide-in-bottom delay-${index * 200}`}>
              <GameCard game={game} featured />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
