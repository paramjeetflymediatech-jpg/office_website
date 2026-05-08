'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useNotification } from '@/components/NotificationContext';
import { ChevronLeft, Save, Upload, RefreshCw } from 'lucide-react';
import Link from 'next/link';

interface BlogFormProps {
  initialData?: any;
  onSubmitAction: (formData: FormData) => Promise<{ success: boolean; error?: string }>;
}

export default function BlogForm({ initialData, onSubmitAction }: BlogFormProps) {
  const router = useRouter();
  const { showNotification } = useNotification();
  const [loading, setLoading] = useState(false);
  
  const [title, setTitle] = useState(initialData?.title || '');
  const [slug, setSlug] = useState(initialData?.slug || '');
  const [excerpt, setExcerpt] = useState(initialData?.excerpt || '');
  const [content, setContent] = useState(initialData?.content || '');
  const [category, setCategory] = useState(initialData?.category || '');
  const [date, setDate] = useState(initialData?.date || '');
  const [imageUrl, setImageUrl] = useState(initialData?.image || '');
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(initialData?.image || null);

  const isEdit = !!initialData;

  // Handle title changes to auto-generate a slug if not already editing an existing slug
  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setTitle(val);
    if (!isEdit) {
      setSlug(
        val
          .toLowerCase()
          .replace(/\s+/g, '-')
          .replace(/[^a-z0-9-]/g, '')
      );
    }
  };

  const handleSlugChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSlug(
      e.target.value
        .toLowerCase()
        .replace(/\s+/g, '-')
        .replace(/[^a-z0-9-]/g, '')
    );
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files[0]) {
      const file = files[0];
      setImageFile(file);
      setImagePreview(URL.createObjectURL(file));
      // Reset imageUrl so they know they are uploading a file instead
      setImageUrl('');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !slug || !excerpt || !content || !category) {
      showNotification('error', 'Please fill in all required fields');
      return;
    }

    setLoading(true);
    
    const formData = new FormData();
    formData.append('title', title);
    formData.append('slug', slug);
    formData.append('excerpt', excerpt);
    formData.append('content', content);
    formData.append('category', category);
    formData.append('date', date);
    formData.append('imageUrl', imageUrl);
    if (imageFile) {
      formData.append('imageFile', imageFile);
    }

    const result = await onSubmitAction(formData);

    if (result.success) {
      showNotification('success', isEdit ? 'Blog post updated successfully' : 'Blog post created successfully');
      router.push('/admin/blog');
      router.refresh();
    } else {
      showNotification('error', result.error || 'Failed to save blog post');
    }
    setLoading(false);
  };

  return (
    <div className="space-y-6">
      {/* Back Header */}
      <div className="flex items-center gap-4">
        <Link 
          href="/admin/blog"
          className="p-2.5 bg-white border border-gray-100 rounded-xl text-gray-500 hover:text-[#ff9900] shadow-sm hover:shadow transition-all"
        >
          <ChevronLeft size={20} />
        </Link>
        <div>
          <h1 className="text-2xl font-bold text-gray-900">{isEdit ? 'Edit Post' : 'Create Blog Post'}</h1>
          <p className="text-sm text-gray-500">{isEdit ? 'Update details of your live article' : 'Add a new article to your blog feed'}</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Side: Form Fields (8 columns) */}
        <div className="lg:col-span-8 bg-white p-6 sm:p-8 rounded-2xl border border-gray-100 shadow-sm space-y-6">
          <div className="space-y-2">
            <label className="text-sm font-bold text-gray-700">Article Title <span className="text-red-500">*</span></label>
            <input 
              type="text"
              value={title}
              onChange={handleTitleChange}
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:border-[#ff9900] outline-none transition-all focus:ring-2 focus:ring-[#ff9900]/20 font-bold text-gray-900 text-lg"
              placeholder="Enter a catchy title..."
              required
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-bold text-gray-700">Slug (URL Route) <span className="text-red-500">*</span></label>
            <div className="flex items-center">
              <span className="bg-gray-100 border border-r-0 border-gray-200 px-3 py-3 rounded-l-xl text-sm font-semibold text-gray-400">/blog/</span>
              <input 
                type="text"
                value={slug}
                onChange={handleSlugChange}
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-r-xl focus:border-[#ff9900] outline-none transition-all focus:ring-2 focus:ring-[#ff9900]/20 font-medium text-gray-800"
                placeholder="slug-url-route"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-bold text-gray-700">Short Excerpt / Summary <span className="text-red-500">*</span></label>
            <textarea 
              value={excerpt}
              onChange={(e) => setExcerpt(e.target.value)}
              rows={3}
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:border-[#ff9900] outline-none transition-all focus:ring-2 focus:ring-[#ff9900]/20 font-medium text-gray-600 leading-relaxed resize-none"
              placeholder="Enter a brief 1-2 sentence description..."
              required
            ></textarea>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <label className="text-sm font-bold text-gray-700">Full Content <span className="text-red-500">*</span></label>
              <span className="text-xs text-gray-400 font-medium">Accepts HTML or raw text</span>
            </div>
            <textarea 
              value={content}
              onChange={(e) => setContent(e.target.value)}
              rows={15}
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:border-[#ff9900] outline-none transition-all focus:ring-2 focus:ring-[#ff9900]/20 font-mono text-[14px] leading-relaxed resize-y"
              placeholder="Type or paste the complete post content here..."
              required
            ></textarea>
          </div>
        </div>

        {/* Right Side: Sidebar Settings (4 columns) */}
        <div className="lg:col-span-4 space-y-6">
          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-6">
            <h3 className="font-bold text-gray-900 border-b border-gray-50 pb-3">Metadata</h3>
            
            <div className="space-y-2">
              <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">Category <span className="text-red-500">*</span></label>
              <input 
                type="text"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:border-[#ff9900] outline-none transition-all"
                placeholder="e.g. Movers, SEO, AI Marketing"
                required
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">Custom Date</label>
              <input 
                type="text"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:border-[#ff9900] outline-none transition-all"
                placeholder="e.g. May 6, 2026 (Leave empty for today)"
              />
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-4">
            <h3 className="font-bold text-gray-900 border-b border-gray-50 pb-3">Featured Image</h3>

            {imagePreview && (
              <div className="relative aspect-video rounded-xl overflow-hidden border border-gray-100 bg-gray-50 shadow-inner">
                <img src={imagePreview} alt="Preview" className="w-full h-full object-cover" />
              </div>
            )}

            <div className="space-y-2">
              <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">Upload Image File</label>
              <div className="border-2 border-dashed border-gray-200 rounded-xl p-4 text-center hover:border-[#ff9900] transition-colors relative bg-gray-50/50 cursor-pointer">
                <input 
                  type="file"
                  onChange={handleFileChange}
                  accept="image/*"
                  className="absolute inset-0 opacity-0 cursor-pointer"
                />
                <div className="flex flex-col items-center gap-1.5 text-gray-500 text-sm">
                  <Upload size={20} className="text-[#ff9900]" />
                  <span>Choose file...</span>
                </div>
              </div>
            </div>

            <div className="relative flex py-2 items-center">
              <div className="flex-grow border-t border-gray-100"></div>
              <span className="flex-shrink mx-4 text-xs font-bold text-gray-400 uppercase tracking-wider">OR</span>
              <div className="flex-grow border-t border-gray-100"></div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">Direct Image URL</label>
              <input 
                type="text"
                value={imageUrl}
                onChange={(e) => {
                  setImageUrl(e.target.value);
                  setImagePreview(e.target.value || null);
                  setImageFile(null); // Clear selected file if any
                }}
                className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:border-[#ff9900] outline-none transition-all"
                placeholder="https://images.unsplash.com/..."
              />
            </div>
          </div>

          <button 
            type="submit"
            disabled={loading}
            className="w-full bg-[#ff9900] text-white font-bold py-4 rounded-2xl hover:bg-black transition-colors flex items-center justify-center gap-2 shadow-lg shadow-orange-100 text-lg uppercase tracking-wider"
          >
            {loading ? (
              <RefreshCw className="animate-spin" size={20} />
            ) : (
              <Save size={20} />
            )}
            {isEdit ? 'Update Article' : 'Publish Article'}
          </button>
        </div>
      </form>
    </div>
  );
}
