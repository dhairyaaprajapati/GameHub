
import React from 'react';
import { Calendar, User, Newspaper, TrendingUp } from 'lucide-react';

const newsItems = [
  {
    id: 1,
    title: "Revolutionary Graphics Engine Launched",
    excerpt: "Experience gaming like never before with our latest ray tracing technology and AI-enhanced performance optimization.",
    date: "Dec 15, 2024",
    author: "GameHub Team",
    category: "Technology"
  },
  {
    id: 2,
    title: "Global Gaming Tournament 2024",
    excerpt: "Join millions of players in the biggest esports event of the year! Registration now open with $10M prize pool.",
    date: "Dec 10, 2024",
    author: "Esports Division",
    category: "Tournament"
  },
  {
    id: 3,
    title: "Indie Developer Spotlight",
    excerpt: "Discover incredible indie games from talented creators worldwide. This month features breakthrough innovations.",
    date: "Dec 8, 2024",
    author: "Editorial Team",
    category: "Featured"
  }
];

export const NewsSection = () => {
  return (
    <section id="news" className="py-20 relative">
      <div className="absolute inset-0 bg-black/20" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-slide-in-bottom">
          <div className="flex items-center justify-center mb-4">
            <Newspaper className="w-8 h-8 text-green-400 mr-3 animate-pulse" />
            <h2 className="text-5xl md:text-6xl font-black text-white neon-text">
              GAMING NEWS
            </h2>
            <TrendingUp className="w-8 h-8 text-green-400 ml-3 animate-pulse" />
          </div>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Stay updated with the latest gaming trends, releases, and industry insights
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.map((item, index) => (
            <article key={item.id} className={`glass rounded-2xl p-8 border border-gray-700/50 hover:border-green-400/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-green-500/20 animate-slide-in-bottom delay-${index * 200}`}>
              <div className="mb-4">
                <span className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-3 py-1 rounded-full text-xs font-bold">
                  {item.category}
                </span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 hover:text-green-400 transition-colors cursor-pointer neon-text">
                {item.title}
              </h3>
              <p className="text-gray-400 mb-6 leading-relaxed">{item.excerpt}</p>
              <div className="flex items-center justify-between text-sm text-gray-500">
                <div className="flex items-center space-x-3">
                  <div className="flex items-center space-x-2">
                    <User className="w-4 h-4" />
                    <span>{item.author}</span>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="w-4 h-4" />
                  <span>{item.date}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
