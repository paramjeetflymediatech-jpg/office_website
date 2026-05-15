"use client";

import React, { useEffect, useState, useRef } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { Eye, ChevronLeft, BookOpen } from "lucide-react";
import { getBlogBySlug, incrementBlogViews } from "@/app/actions/blog";

export default function SingleBlogPage() {
  const params = useParams();
  const slug = params.slug as string;
  const [blog, setBlog] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const incrementedRef = useRef(false);

  useEffect(() => {
    async function loadBlog() {
      if (slug) {
        const data = await getBlogBySlug(slug);
        if (data) {
          setBlog(data);
          // Increment view counter only once per mount
          if (!incrementedRef.current) {
            incrementedRef.current = true;
            await incrementBlogViews(data.id);
          }
        }
      }
      setLoading(false);
    }
    loadBlog();
  }, [slug]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-[#EFEFEF]">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#ff9900]"></div>
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="min-h-screen bg-[#EFEFEF] py-32 px-4 flex flex-col items-center justify-center text-center">
        <div className="max-w-md bg-white p-12 rounded-2xl border border-gray-100 shadow-sm">
          <BookOpen className="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Post Not Found</h1>
          <p className="text-gray-500 mb-8">The blog article you are looking for does not exist or has been removed.</p>
          <Link
            href="/australia/blog"
            className="px-6 py-3 bg-[#ff9900] text-white font-bold rounded-xl hover:bg-black transition-colors"
          >
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-[#EFEFEF] pb-20">
      {/* Full Width Headline Banner */}
      <section className="w-full pt-32 pb-16 md:pt-20 md:pb-24 mb-12" style={{ backgroundColor: '#FA7E09' }}>
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="relative inline-block flex-1">
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-2 leading-tight max-w-4xl" style={{ fontFamily: '"Playfair Display", sans-serif' }}>
              {blog.title}
            </h1>
            <span className="block w-16 border-t-[4px] border-black mt-4"></span>
          </div>
          <Link
            href="/australia/blog"
            className="inline-flex items-center gap-1 text-sm font-bold text-black hover:text-[#FA7E09] transition-colors bg-white px-5 py-2.5 rounded-xl shadow-sm w-fit shrink-0 md:mb-2"
          >
            <ChevronLeft size={16} /> All Posts
          </Link>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

          {/* Sidebar Form - 4 columns on desktop (Left Side) */}
          <div className="lg:col-span-4 order-1">
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

          {/* Main Blog Post Content - 8 columns on desktop (Right Side) */}
          <div className="lg:col-span-8 order-2">
            <article className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
              {/* Featured Image */}
              {blog.image && (
                <div className="w-full h-auto">
                  <img
                    loading="lazy"
                    src={blog.image}
                    className="w-full h-auto object-cover max-h-[500px]"
                    alt={blog.title}
                  />
                </div>
              )}

              {/* Post Content */}
              <div className="p-8 md:p-12">
                {/* Meta data */}
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-8 pb-4 border-b border-gray-100">
                  <span className="font-medium text-black">{blog.date}</span>
                  <div className="flex items-center gap-1.5">
                    <Eye size={14} className="text-gray-400" />
                    <span>{blog.views + 1} views</span>
                  </div>
                </div>

                <div className="prose prose-lg max-w-none prose-a:text-[#ff9900] prose-a:no-underline hover:prose-a:underline prose-headings:text-black prose-p:text-gray-600 prose-p:leading-relaxed whitespace-pre-line">
                  {blog.content}
                </div>
              </div>
            </article>
          </div>

        </div>
      </div>
    </main>
  );
}
