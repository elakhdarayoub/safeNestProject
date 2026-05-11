"use client";

import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Clock, Search } from 'lucide-react';
import { articles } from '@/data/articles';

const categories = ['All', 'Case Study', 'Platform Update', 'AI Safety', 'News'];

export default function InsightsPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredArticles = articles.filter(article => {
    const matchesCategory = activeCategory === 'All' || article.category === activeCategory;
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredArticle = filteredArticles[0];
  const gridArticles = filteredArticles.slice(1);

  return (
    <main className="pt-[140px] pb-[128px]">
      <section className="max-w-[1440px] mx-auto px-8 text-center mb-16">
        <h1 className="font-display text-[56px] font-bold leading-[1.05] text-white mb-6">SafeNest Intelligence</h1>
        <p className="text-[18px] text-content-secondary max-w-[600px] mx-auto">Latest insights, case studies, and updates on AI safety technology and proactive risk intelligence.</p>
      </section>

      {/* Filter & Search Bar */}
      <section className="max-w-[1440px] mx-auto px-8 mb-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="flex flex-wrap gap-2 border border-border-subtle p-1 rounded-full bg-surface">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-full text-[13px] font-semibold transition-all ${
                activeCategory === cat 
                  ? 'bg-brand-primary text-white shadow-glow' 
                  : 'text-content-secondary hover:text-white'
              }`}
            >
              {cat === 'Case Study' ? 'Case Studies' : cat === 'Platform Update' ? 'Platform Updates' : cat}
            </button>
          ))}
        </div>

        <div className="relative w-full max-w-[320px]">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-content-muted" />
          <input 
            type="text"
            placeholder="Search articles..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-surface border border-border-subtle rounded-full py-2.5 pl-10 pr-4 text-white text-[14px] focus:border-brand-primary outline-none transition-colors"
          />
        </div>
      </section>

      {filteredArticles.length > 0 ? (
        <section className="max-w-[1440px] mx-auto px-8 grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          {/* Featured Article - only show if there's no active search or if it's the first result */}
          {featuredArticle && (
            <div className="lg:col-span-12">
              <Link href={`/insights/${featuredArticle.slug}`} className="group flex flex-col md:flex-row bg-surface border border-border-subtle rounded-[16px] overflow-hidden hover:border-brand-primary/50 transition-colors">
                <div className="md:w-1/2 h-[300px] md:h-auto relative bg-base overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-brand-primary/20 to-transparent mix-blend-overlay z-10 group-hover:opacity-50 transition-opacity"></div>
                  <div className="w-full h-full bg-border-subtle flex items-center justify-center">
                    <span className="text-content-muted">Featured Image: {featuredArticle.title}</span>
                  </div>
                </div>
                <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-[11px] font-semibold tracking-widest text-brand-primary uppercase">{featuredArticle.category}</span>
                    <span className="text-[13px] text-content-muted flex items-center gap-1"><Clock className="w-3 h-3" /> {featuredArticle.readTime}</span>
                  </div>
                  <h2 className="text-display-md text-white mb-4 group-hover:text-brand-primary transition-colors">{featuredArticle.title}</h2>
                  <p className="text-body-md text-content-secondary mb-8 line-clamp-3">
                    {featuredArticle.excerpt}
                  </p>
                  <div className="flex items-center gap-2 text-[14px] font-semibold text-white group-hover:text-brand-primary transition-colors">
                    Read Full Study <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            </div>
          )}

          {/* Article Grid */}
          {gridArticles.map((article, index) => (
            <div key={article.slug} className="lg:col-span-4 flex animate-fade-in" style={{ animationDelay: `${index * 50}ms` }}>
              <Link href={`/insights/${article.slug}`} className="group flex flex-col w-full bg-surface border border-border-subtle rounded-[12px] overflow-hidden hover:border-brand-primary/50 transition-colors">
                <div className="h-[200px] relative bg-base overflow-hidden">
                  <div className="w-full h-full bg-border-subtle flex items-center justify-center">
                    <span className="text-[12px] text-content-muted">Article Image: {article.slug}</span>
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-[10px] font-semibold tracking-widest text-brand-primary uppercase">
                      {article.category}
                    </span>
                    <span className="text-[12px] text-content-muted">{article.date}</span>
                  </div>
                  <h3 className="text-[20px] font-bold text-white mb-3 group-hover:text-brand-primary transition-colors leading-tight">
                    {article.title}
                  </h3>
                  <p className="text-[14px] text-content-secondary mb-6 line-clamp-2 flex-1">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center gap-2 text-[13px] font-semibold text-content-secondary group-hover:text-white transition-colors">
                    Read More <ArrowRight className="w-3 h-3" />
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </section>
      ) : (
        <section className="max-w-[1440px] mx-auto px-8 text-center py-24">
          <div className="text-content-muted mb-4">No articles found matching your criteria.</div>
          <button 
            onClick={() => {setActiveCategory('All'); setSearchQuery('');}}
            className="text-brand-primary hover:underline font-semibold"
          >
            Clear all filters
          </button>
        </section>
      )}

      {filteredArticles.length > 6 && (
        <section className="text-center">
          <button className="btn-secondary">Load More Insights</button>
        </section>
      )}
    </main>
  );
}
