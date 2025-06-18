
import React from 'react';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { FeaturedGames } from '@/components/FeaturedGames';
import { GameLibrary } from '@/components/GameLibrary';
import { NewsSection } from '@/components/NewsSection';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-black grid-pattern relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>
      
      <div className="relative z-10">
        <Header />
        <Hero />
        <FeaturedGames />
        <GameLibrary />
        <NewsSection />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
