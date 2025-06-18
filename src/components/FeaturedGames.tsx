
import React from 'react';
import { GameCard } from './GameCard';

const featuredGames = [
  {
    id: 1,
    title: "Cyber Warriors",
    description: "Fight in the neon-lit streets of a cyberpunk future",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&h=400&fit=crop",
    genre: "Action RPG",
    rating: 4.8,
    price: "$29.99"
  },
  {
    id: 2,
    title: "Mystic Forest",
    description: "Explore magical realms filled with ancient secrets",
    image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=800&h=400&fit=crop",
    genre: "Adventure",
    rating: 4.6,
    price: "$19.99"
  },
  {
    id: 3,
    title: "Code Breakers",
    description: "Hack your way through digital puzzles and mysteries",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=400&fit=crop",
    genre: "Puzzle",
    rating: 4.7,
    price: "$14.99"
  }
];

export const FeaturedGames = () => {
  return (
    <section className="py-16 bg-black/10">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-white text-center mb-12">
          Featured Games
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredGames.map((game) => (
            <GameCard key={game.id} game={game} featured />
          ))}
        </div>
      </div>
    </section>
  );
};
