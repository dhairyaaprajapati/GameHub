
import React from 'react';
import { GameCard } from './GameCard';

const libraryGames = [
  {
    id: 4,
    title: "Space Odyssey",
    description: "Journey through the vast cosmos in this epic space adventure",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&h=400&fit=crop",
    genre: "Sci-Fi",
    rating: 4.5,
    price: "$24.99"
  },
  {
    id: 5,
    title: "Tech Ninja",
    description: "Master the art of stealth in a high-tech world",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=400&fit=crop",
    genre: "Stealth",
    rating: 4.4,
    price: "$22.99"
  },
  {
    id: 6,
    title: "Casual Cat",
    description: "Relax and unwind with this charming puzzle game",
    image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=800&h=400&fit=crop",
    genre: "Casual",
    rating: 4.9,
    price: "$9.99"
  },
  {
    id: 7,
    title: "Dev World",
    description: "Build and code your way to programming mastery",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&h=400&fit=crop",
    genre: "Educational",
    rating: 4.3,
    price: "$18.99"
  }
];

export const GameLibrary = () => {
  return (
    <section id="library" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-white text-center mb-12">
          Game Library
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {libraryGames.map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>
      </div>
    </section>
  );
};
