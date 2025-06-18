
import React from 'react';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { FeaturedGames } from '@/components/FeaturedGames';
import { GameLibrary } from '@/components/GameLibrary';
import { NewsSection } from '@/components/NewsSection';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      <Header />
      <Hero />
      <FeaturedGames />
      <GameLibrary />
      <NewsSection />
      <Footer />
    </div>
  );
};

export default Index;
