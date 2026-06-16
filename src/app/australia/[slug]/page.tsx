import React from "react";
import Link from "next/link";
import { Eye, ChevronLeft } from "lucide-react";
import { getBlogBySlug, incrementBlogViews } from "@/app/actions/blog";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const blog = await getBlogBySlug(slug);
  if (!blog) return {};

  const cleanDescription = blog.metaDescription || 
    (blog.excerpt ? blog.excerpt.replace(/<[^>]*>?/gm, '').trim() : '');

  return {
    metadataBase: new URL("https://flymediatech.com"),
    title: blog.metaTitle || blog.title,
    description: cleanDescription.slice(0, 155),
    keywords: blog.keywords || blog.category,
    alternates: {
      canonical: blog.canonicalUrl || `https://flymediatech.com/australia/${slug}`,
    },
    openGraph: {
      title: blog.ogTitle || blog.metaTitle || blog.title,
      description: (blog.ogDescription || cleanDescription).slice(0, 155),
      images: blog.ogImage || blog.image ? [{ url: blog.ogImage || blog.image }] : [],
      url: blog.canonicalUrl || `https://flymediatech.com/australia/${slug}`,
      type: "article",
    },
    twitter: {
      card: (blog.twitterCard as any) || "summary_large_image",
      title: blog.ogTitle || blog.title,
      description: (blog.ogDescription || cleanDescription).slice(0, 155),
      images: blog.ogImage || blog.image ? [blog.ogImage || blog.image] : [],
    },
    robots: blog.metaRobots || "index, follow",
  };
}

export default async function SingleBlogPage({ params }: PageProps) {
  const { slug } = await params;
  const blog = await getBlogBySlug(slug);

  if (!blog) {
    notFound();
  }

  // Increment views on render safely on the server
  await incrementBlogViews(blog.id);

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

          {/* Sidebar Form - 4 columns on desktop */}
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

          {/* Main Blog Post Content - 8 columns on desktop */}
          <div className="lg:col-span-8 order-1 lg:order-2">
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

                <div 
                  className="prose prose-lg max-w-none prose-a:text-[#ff9900] prose-a:no-underline hover:prose-a:underline prose-headings:text-black prose-p:text-gray-600 prose-p:leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: blog.content }}
                />
              </div>
            </article>
          </div>

        </div>
      </div>
    </main>
  );
}
