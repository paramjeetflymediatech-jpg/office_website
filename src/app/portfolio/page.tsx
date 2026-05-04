'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { getPortfolioItems } from '@/app/actions/portfolio';
import { X, Search, Filter, Maximize2 } from 'lucide-react';

export default function PortfolioPage() {
  const [items, setItems] = useState<any[]>([]);
  const [filteredItems, setFilteredItems] = useState<any[]>([]);
  const [categories, setCategories] = useState<string[]>(['All']);
  const [activeCategory, setActiveCategory] = useState('All');
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  
  // Pagination State
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 20;

  useEffect(() => {
    async function load() {
      const data = await getPortfolioItems();
      setItems(data);
      setFilteredItems(data);
      
      // Extract unique categories
      const uniqueCats = ['All', ...new Set(data.map((item: any) => item.category).filter(Boolean))];
      setCategories(uniqueCats as string[]);
      setLoading(false);
    }
    load();
  }, []);

  useEffect(() => {
    let result = items;
    if (activeCategory !== 'All') {
      result = items.filter(item => item.category === activeCategory);
    }
    setFilteredItems(result);
    setCurrentPage(1); // Reset to page 1 on filter change
  }, [activeCategory, items]);

  // Pagination Logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredItems.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="w-12 h-12 border-4 border-[#ff9900]/20 border-t-[#ff9900] rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50 pt-32 pb-20 px-4 sm:px-6 lg:px-24">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto text-center mb-16 space-y-4">
        <h2 className="text-[#ff9900] font-bold tracking-widest uppercase text-sm">Our Work</h2>
        <h1 className="text-4xl md:text-6xl font-serif font-black text-black">
          Showcasing Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff9900] to-[#ffcc33]">Creative Excellence</span>
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
          Explore our diverse portfolio of digital success stories, from high-converting websites to stunning brand identities.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="max-w-7xl mx-auto mb-12">
        <div className="flex flex-wrap justify-center gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-8 py-3 rounded-full font-bold transition-all duration-300 border-2 ${
                activeCategory === cat
                  ? 'bg-black border-black text-white shadow-xl scale-105'
                  : 'bg-white border-gray-100 text-gray-500 hover:border-[#ff9900] hover:text-[#ff9900]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Grid Layout */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {currentItems.map((item, index) => (
          <div 
            key={item.id}
            className="group relative bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100 aspect-square cursor-pointer"
            onClick={() => setSelectedImage(item.imageUrl)}
          >
            <Image
              src={item.imageUrl}
              alt={item.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-8">
              <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500 space-y-2">
                <span className="text-[#ff9900] text-xs font-bold uppercase tracking-widest">{item.category}</span>
                <h3 className="text-white text-xl font-serif font-bold">{item.title}</h3>
                <div className="w-8 h-0.5 bg-[#ff9900] rounded-full"></div>
                <div className="pt-4">
                  <div className="inline-flex items-center gap-2 text-white/80 text-sm font-medium">
                    <Maximize2 size={16} />
                    View Project
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="max-w-7xl mx-auto mt-16 flex justify-center items-center gap-4">
          <button
            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="p-3 rounded-full border border-gray-200 text-gray-400 hover:text-[#ff9900] hover:border-[#ff9900] disabled:opacity-30 disabled:cursor-not-allowed transition-all"
          >
            <X size={20} className="rotate-45" /> {/* Using X rotated as a simple arrow alternative or just use icons */}
            <span className="sr-only">Previous</span>
          </button>
          
          <div className="flex items-center gap-2">
            {[...Array(totalPages)].map((_, i) => (
              <button
                key={i + 1}
                onClick={() => setCurrentPage(i + 1)}
                className={`w-10 h-10 rounded-full font-bold transition-all ${
                  currentPage === i + 1
                    ? 'bg-[#ff9900] text-white shadow-lg'
                    : 'text-gray-400 hover:text-black hover:bg-gray-100'
                }`}
              >
                {i + 1}
              </button>
            ))}
          </div>

          <button
            onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
            className="p-3 rounded-full border border-gray-200 text-gray-400 hover:text-[#ff9900] hover:border-[#ff9900] disabled:opacity-30 disabled:cursor-not-allowed transition-all"
          >
            <X size={20} className="-rotate-[135deg]" />
            <span className="sr-only">Next</span>
          </button>
        </div>
      )}

      {/* Empty State */}
      {filteredItems.length === 0 && (
        <div className="text-center py-20 bg-white rounded-3xl border-2 border-dashed border-gray-100">
          <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-4 text-gray-300">
            <Search size={32} />
          </div>
          <h3 className="text-xl font-bold text-gray-900">No projects found</h3>
          <p className="text-gray-500">We haven't added projects to this category yet. Check back soon!</p>
        </div>
      )}

      {/* Lightbox / Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[200] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 sm:p-10 animate-in fade-in duration-300"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors bg-white/10 p-3 rounded-full"
            onClick={() => setSelectedImage(null)}
          >
            <X size={32} />
          </button>
          
          <div className="relative w-full h-full flex items-center justify-center pointer-events-none">
            <div className="relative w-full max-w-5xl h-full max-h-[85vh] pointer-events-auto">
              <Image
                src={selectedImage}
                alt="Enlarged view"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
