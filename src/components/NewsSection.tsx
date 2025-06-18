
import React from 'react';
import { Calendar, User } from 'lucide-react';

const newsItems = [
  {
    id: 1,
    title: "New Update: Enhanced Graphics Engine",
    excerpt: "Experience gaming like never before with our latest graphics update featuring ray tracing and improved performance.",
    date: "Dec 15, 2024",
    author: "GameHub Team"
  },
  {
    id: 2,
    title: "Community Tournament Announcement",
    excerpt: "Join thousands of players in our biggest tournament yet! Registration opens next week with amazing prizes.",
    date: "Dec 10, 2024",
    author: "Community Team"
  },
  {
    id: 3,
    title: "Developer Spotlight: Indie Games Rising",
    excerpt: "Discover incredible indie games from talented developers around the world. This month's featured creators are amazing!",
    date: "Dec 8, 2024",
    author: "Editorial Team"
  }
];

export const NewsSection = () => {
  return (
    <section id="news" className="py-16 bg-black/10">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-white text-center mb-12">
          Latest News
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.map((item) => (
            <article key={item.id} className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-cyan-400/50 transition-colors">
              <h3 className="text-xl font-bold text-white mb-3 hover:text-cyan-400 transition-colors cursor-pointer">
                {item.title}
              </h3>
              <p className="text-gray-400 mb-4">{item.excerpt}</p>
              <div className="flex items-center justify-between text-sm text-gray-500">
                <div className="flex items-center space-x-2">
                  <User className="w-4 h-4" />
                  <span>{item.author}</span>
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
