"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Eye, ChevronRight, BookOpen } from "lucide-react";
import { getBlogs } from "@/app/actions/blog";

export default function BlogPage() {
  const [blogPosts, setBlogPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  useEffect(() => {
    async function loadBlogs() {
      const data = await getBlogs('global');
      setBlogPosts(data);
      setLoading(false);
    }
    loadBlogs();
  }, []);
  // Pagination logic
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = blogPosts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(blogPosts.length / postsPerPage);

  return (
    <main className="min-h-screen bg-[#EFEFEF] pb-20">
      {/* Full Width Headline Banner */}
      <section className="w-full pt-10 pb-16 md:pt-10 md:pb-12 mb-12" style={{ backgroundColor: '#FA7E09' }}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="relative inline-block">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-2" style={{ fontFamily: '"Playfair Display", sans-serif' }}>
              Blog
            </h1>
            <span className="block w-16 border-t-[4px] border-black"></span>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Sidebar Form - 4 columns on desktop (Appears LAST on mobile) */}
          <div className="lg:col-span-4 order-2 lg:order-1">
            <div className="bg-[#FA7E09] p-8 rounded-xl shadow-sm border border-gray-100 lg:sticky top-32">
              <h2 className="text-2xl font-bold text-white mb-6" style={{ fontFamily: '"Playfair Display", sans-serif' }}>Contact Us</h2>
              
              <form className="space-y-4">
                <div className="space-y-4">
                  <div>
                    <input 
                      type="text" 
                      placeholder="Enter your name" 
                      className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff9900]/50 focus:border-[#ff9900] transition-all placeholder:text-black"
                      required
                    />
                  </div>
                  <div>
                    <input 
                      type="email" 
                      placeholder="Enter your email" 
                      className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff9900]/50 focus:border-[#ff9900] transition-all placeholder:text-black"
                      required
                    />
                  </div>
                  <div>
                    <input 
                      type="tel" 
                      placeholder="Enter your phone number" 
                      className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff9900]/50 focus:border-[#ff9900] transition-all placeholder:text-black"
                      required
                    />
                  </div>
                  <div>
                    <textarea 
                      placeholder="Type your message here..." 
                      rows={5}
                      className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff9900]/50 focus:border-[#ff9900] transition-all resize-none placeholder:text-black"
                      required
                    ></textarea>
                  </div>
                </div>
                
                <button 
                  type="submit" 
                  className="w-full bg-black text-white font-bold py-4 rounded-lg hover:bg-white hover:text-black transition-colors uppercase tracking-wide mt-2 cursor-pointer"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>

          {/* Main Blog Posts Content - 8 columns on desktop (Appears FIRST on mobile) */}
          <div className="lg:col-span-8 order-1 lg:order-2">
            {loading ? (
              <div className="flex items-center justify-center min-h-[300px]">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#ff9900]"></div>
              </div>
            ) : blogPosts.length === 0 ? (
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-12 text-center">
                <BookOpen className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-1">No blog posts found</h3>
                <p className="text-gray-500">Please seed database or add blogs in your Admin dashboard.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
                {currentPosts.map((post) => (
                  <article key={post.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden group flex flex-col hover:shadow-md transition-shadow">
                    {/* Thumbnail */}
                    {post.image && (
                      <div className="relative overflow-hidden bg-gray-50 aspect-video">
                        <Link href={`/blog/${post.slug}`}>
                          <img 
                            src={post.image} 
                            alt={post.title} 
                            className="w-full h-full object-contain p-2 transition-transform duration-500"
                          />
                        </Link>
                      </div>
                    )}

                    {/* Content */}
                    <div className="p-6 flex flex-col flex-grow">
                      <h3 className="text-xl font-bold text-black mb-3 hover:text-[#FA7E09] transition-colors leading-tight line-clamp-2 min-h-[3.5rem]">
                        <Link href={`/blog/${post.slug}`}>
                          {post.title}
                        </Link>
                      </h3>
                      
                      <div 
                        className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3"
                        dangerouslySetInnerHTML={{ __html: post.excerpt }}
                      />

                      <div className="mt-auto">
                        <Link href={`/blog/${post.slug}`} className="text-[#FA7E09] font-bold text-sm uppercase tracking-wide flex items-center gap-1 hover:text-black transition-colors mb-6">
                          Read More <ChevronRight size={16} />
                        </Link>

                        {/* Meta Footer */}
                        <div className="flex items-center justify-between text-[12px] text-gray-500 pt-4 border-t border-gray-100">
                          <div className="flex flex-col gap-1">
                            <span className="font-semibold text-black">{post.date}</span>
                            <span>No Comments</span>
                          </div>
                          <div className="flex items-center gap-1.5 bg-gray-50 px-3 py-1.5 rounded-full">
                            <Eye size={12} className="text-gray-400" />
                            <span className="font-bold text-gray-700">{post.views} views</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            )}

            {/* Pagination */}
            {!loading && totalPages > 1 && (
                  <nav className="flex flex-wrap items-center justify-center sm:justify-start gap-2 pt-8" aria-label="Pagination">
                    {Array.from({ length: totalPages }).map((_, index) => {
                      const pageNumber = index + 1;
                      
                      // Show first, last, current, and adjacent pages
                      if (
                        pageNumber === 1 ||
                        pageNumber === totalPages ||
                        (pageNumber >= currentPage - 1 && pageNumber <= currentPage + 1)
                      ) {
                        return (
                          <button
                            key={pageNumber}
                            onClick={() => {
                              setCurrentPage(pageNumber);
                              window.scrollTo({ top: 0, behavior: 'smooth' });
                            }}
                            className={`w-10 h-10 flex items-center justify-center rounded-lg font-bold shadow-sm transition-colors ${
                              currentPage === pageNumber
                                ? 'bg-[#ff9900] text-white'
                                : 'bg-white text-black hover:bg-[#ff9900] hover:text-white'
                            }`}
                          >
                            {pageNumber}
                          </button>
                        );
                      } else if (
                        pageNumber === currentPage - 2 ||
                        pageNumber === currentPage + 2
                      ) {
                        return <span key={pageNumber} className="w-10 h-10 flex items-center justify-center text-gray-500 font-bold tracking-widest">...</span>;
                      }
                      return null;
                    })}
                  </nav>
            )}
          </div>

        </div>
      </div>
    </main>
  );
}
