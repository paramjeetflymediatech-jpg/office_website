"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Eye, ChevronRight, BookOpen } from "lucide-react";
import { getBlogs } from "@/app/actions/blog";

export default function BlogPage() {
  const [blogPosts, setBlogPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadBlogs() {
      const data = await getBlogs();
      setBlogPosts(data);
      setLoading(false);
    }
    loadBlogs();
  }, []);

  return (
    <main className="min-h-screen bg-[#EFEFEF] py-20 px-4">
      {/* Headline Section */}
      <section className="max-w-7xl mx-auto pt-10 pb-6 border-b border-gray-200/60 mb-8">
        <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">
          Blog
        </h1>
        <div className="w-16 h-1 bg-[#ff9900]"></div>
      </section>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Sidebar Form - 4 columns on desktop (Left Side) */}
          <div className="lg:col-span-4 order-1">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 lg:sticky top-32">
              <h2 className="text-2xl font-bold text-black mb-6">Contact Us</h2>
              
              <form className="space-y-4">
                <div className="space-y-4">
                  <div>
                    <input 
                      type="text" 
                      placeholder="Enter your name" 
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff9900]/50 focus:border-[#ff9900] transition-all"
                      required
                    />
                  </div>
                  <div>
                    <input 
                      type="email" 
                      placeholder="Enter your email" 
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff9900]/50 focus:border-[#ff9900] transition-all"
                      required
                    />
                  </div>
                  <div>
                    <input 
                      type="tel" 
                      placeholder="Enter your phone number" 
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff9900]/50 focus:border-[#ff9900] transition-all"
                      required
                    />
                  </div>
                  <div>
                    <textarea 
                      placeholder="Type your message here..." 
                      rows={5}
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff9900]/50 focus:border-[#ff9900] transition-all resize-none"
                      required
                    ></textarea>
                  </div>
                </div>
                
                <button 
                  type="submit" 
                  className="w-full bg-[#ff9900] text-black font-bold py-4 rounded-lg hover:bg-black hover:text-white transition-colors uppercase tracking-wide mt-2"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>

          {/* Main Blog Posts Content - 8 columns on desktop (Right Side) */}
          <div className="lg:col-span-8 space-y-10 order-2">
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
              <>
                {blogPosts.map((post) => (
                  <article key={post.id} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden group">
                    <div className="flex flex-col md:flex-row">
                      {/* Thumbnail */}
                      <div className="md:w-2/5 relative overflow-hidden bg-gray-50">
                        <Link href={`/blog/${post.slug}`}>
                          <img 
                            src={post.image} 
                            alt={post.title} 
                            className="w-full h-full object-cover min-h-[250px] transition-transform duration-500 group-hover:scale-105"
                          />
                        </Link>
                      </div>

                      {/* Content */}
                      <div className="md:w-3/5 p-6 md:p-8 flex flex-col justify-center">
                        <h3 className="text-2xl font-bold text-black mb-3 hover:text-[#ff9900] transition-colors leading-tight">
                          <Link href={`/blog/${post.slug}`}>
                            {post.title}
                          </Link>
                        </h3>
                        
                        <div className="text-gray-600 text-[15px] leading-relaxed mb-4">
                          <p>{post.excerpt}</p>
                        </div>

                        <Link href={`/blog/${post.slug}`} className="text-[#ff9900] font-bold text-[15px] uppercase tracking-wide flex items-center gap-1 hover:text-black transition-colors mb-6">
                          Read More <ChevronRight size={16} />
                        </Link>

                        {/* Meta Footer */}
                        <div className="flex items-center justify-between text-sm text-gray-500 pt-4 border-t border-gray-100">
                          <div className="flex items-center gap-4">
                            <span className="font-medium text-black">{post.date}</span>
                            <span>No Comments</span>
                          </div>
                          <div className="flex items-center gap-1.5 bg-gray-50 px-3 py-1.5 rounded-full">
                            <Eye size={14} className="text-gray-400" />
                            <span className="font-semibold text-gray-600">{post.views} views</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </article>
                ))}

                {/* Pagination */}
                <nav className="flex flex-wrap items-center justify-center sm:justify-start gap-2 pt-8" aria-label="Pagination">
                  <span className="w-10 h-10 flex items-center justify-center rounded-lg bg-[#ff9900] text-white font-bold shadow-sm">1</span>
                  <Link href="/blog/2" className="w-10 h-10 flex items-center justify-center rounded-lg bg-white text-black font-bold hover:bg-[#ff9900] hover:text-white transition-colors shadow-sm">2</Link>
                  <Link href="/blog/3" className="w-10 h-10 flex items-center justify-center rounded-lg bg-white text-black font-bold hover:bg-[#ff9900] hover:text-white transition-colors shadow-sm">3</Link>
                  <span className="w-10 h-10 flex items-center justify-center text-gray-500 font-bold tracking-widest">...</span>
                  <Link href="/blog/120" className="w-10 h-10 flex items-center justify-center rounded-lg bg-white text-black font-bold hover:bg-[#ff9900] hover:text-white transition-colors shadow-sm">120</Link>
                </nav>
              </>
            )}
          </div>

        </div>
      </div>
    </main>
  );
}
