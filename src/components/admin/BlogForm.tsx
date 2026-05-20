'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useNotification } from '@/components/NotificationContext';
import { getLegacyBlogData } from '@/app/actions/blog';
import { ChevronLeft, Save, Upload, RefreshCw, X, Zap, Globe, Share2 } from 'lucide-react';
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
  const [region, setRegion] = useState(initialData?.region || 'global');
  const [date, setDate] = useState(initialData?.date || '');
  const [imageUrl, setImageUrl] = useState(initialData?.image || '');
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(initialData?.image || null);

  // SEO Fields
  const [metaTitle, setMetaTitle] = useState(initialData?.metaTitle || '');
  const [metaDescription, setMetaDescription] = useState(initialData?.metaDescription || '');
  const [focusKeyword, setFocusKeyword] = useState(initialData?.focusKeyword || '');
  const [keywords, setKeywords] = useState(initialData?.keywords || '');
  const [schema, setSchema] = useState(initialData?.schema || '');
  const [ogTitle, setOgTitle] = useState(initialData?.ogTitle || '');
  const [ogDescription, setOgDescription] = useState(initialData?.ogDescription || '');
  const [ogImage, setOgImage] = useState(initialData?.ogImage || '');
  const [canonicalUrl, setCanonicalUrl] = useState(initialData?.canonicalUrl || '');
  const [metaRobots, setMetaRobots] = useState(initialData?.metaRobots || 'index, follow');
  const [twitterCard, setTwitterCard] = useState(initialData?.twitterCard || 'summary_large_image');

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

  const handleFetchLegacySEO = async () => {
    if (!slug) {
      showNotification('error', 'Slug is required to fetch legacy data');
      return;
    }

    setLoading(true);
    const result = await getLegacyBlogData(slug);
    if (result.success && result.data) {
      const data = result.data;
      if (data.metaTitle) setMetaTitle(data.metaTitle);
      if (data.metaDescription) setMetaDescription(data.metaDescription);
      if (data.keywords) setKeywords(data.keywords);
      
      // Auto-fill OG as well
      if (data.metaTitle) setOgTitle(data.metaTitle);
      if (data.metaDescription) setOgDescription(data.metaDescription);
      if (imageUrl) setOgImage(imageUrl);

      showNotification('success', 'SEO data fetched from WordPress successfully!');
    } else {
      showNotification('error', result.error || 'Failed to fetch legacy SEO data');
    }
    setLoading(false);
  };

  const handleSyncSocial = () => {
    setOgTitle(metaTitle || title);
    setOgDescription(metaDescription || excerpt);
    setOgImage(imageUrl);
    showNotification('success', 'Social meta synced with page SEO');
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
    formData.append('region', region);
    formData.append('date', date);
    formData.append('imageUrl', imageUrl);
    formData.append('metaTitle', metaTitle);
    formData.append('metaDescription', metaDescription);
    formData.append('focusKeyword', focusKeyword);
    formData.append('keywords', keywords);
    formData.append('schema', schema);
    formData.append('ogTitle', ogTitle);
    formData.append('ogDescription', ogDescription);
    formData.append('ogImage', ogImage);
    formData.append('canonicalUrl', canonicalUrl);
    formData.append('metaRobots', metaRobots);
    formData.append('twitterCard', twitterCard);
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

      <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        {/* Left Side: Blog Content & Media */}
        <div className="space-y-6">
          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-gray-100 shadow-sm space-y-6">
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
                <span className="bg-gray-100 border border-r-0 border-gray-200 px-3 py-3 rounded-l-xl text-sm font-semibold text-gray-400">/</span>
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
                rows={12}
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:border-[#ff9900] outline-none transition-all focus:ring-2 focus:ring-[#ff9900]/20 font-mono text-[14px] leading-relaxed resize-y"
                placeholder="Type or paste the complete post content here..."
                required
              ></textarea>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-6">
            <h3 className="font-bold text-gray-900 border-b border-gray-50 pb-3 flex items-center gap-2">
              <RefreshCw size={18} className="text-[#ff9900]" />
              Metadata
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">Category <span className="text-red-500">*</span></label>
                <input 
                  type="text"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:border-[#ff9900] outline-none transition-all"
                  placeholder="e.g. Movers, SEO"
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">Region <span className="text-red-500">*</span></label>
                <select 
                  value={region}
                  onChange={(e) => setRegion(e.target.value)}
                  className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:border-[#ff9900] outline-none transition-all"
                  required
                >
                  <option value="global">Global (India & Canada)</option>
                  <option value="australia">Australia</option>
                </select>
              </div>
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
            <h3 className="font-bold text-gray-900 border-b border-gray-50 pb-3 flex items-center gap-2">
              <Upload size={18} className="text-[#ff9900]" />
              Featured Image
            </h3>

            {imagePreview && (
              <div className="relative aspect-video rounded-xl overflow-hidden border border-gray-100 bg-gray-50 shadow-inner group">
                <img src={imagePreview} alt="Preview" className="w-full h-full object-cover" />
                <button
                  type="button"
                  onClick={() => {
                    setImagePreview(null);
                    setImageFile(null);
                    setImageUrl('');
                  }}
                  className="absolute top-2 right-2 bg-black/50 hover:bg-red-500 text-white rounded-full p-1.5 transition-colors opacity-0 group-hover:opacity-100"
                  title="Remove Image"
                >
                  <X size={16} />
                </button>
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
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

              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">Direct Image URL</label>
                <input 
                  type="text"
                  value={imageUrl}
                  onChange={(e) => {
                    setImageUrl(e.target.value);
                    setImagePreview(e.target.value || null);
                    setImageFile(null);
                  }}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:border-[#ff9900] outline-none transition-all"
                  placeholder="https://..."
                />
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: SEO Settings */}
        <div className="space-y-6 lg:sticky lg:top-6">
          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-gray-100 shadow-sm space-y-5">
            <div className="flex items-center gap-2 border-b border-gray-50 pb-3">
              <div className="w-7 h-7 bg-green-50 rounded-lg flex items-center justify-center">
                <svg className="w-4 h-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-900">SEO Management</h3>
              <button
                type="button"
                onClick={handleFetchLegacySEO}
                className="ml-auto flex items-center gap-1 text-[10px] font-bold uppercase tracking-widest bg-orange-50 text-[#ff9900] px-2 py-1 rounded hover:bg-orange-100 transition-colors"
                title="Fetch from WordPress blog.json"
              >
                <Zap size={10} />
                Sync WP
              </button>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">Focus Keyword</label>
              <input
                type="text"
                value={focusKeyword}
                onChange={(e) => setFocusKeyword(e.target.value)}
                className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:border-green-500 outline-none transition-all"
                placeholder="e.g. digital marketing ludhiana"
              />
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">Meta Title</label>
                <span className={`text-[11px] font-bold ${metaTitle.length > 60 ? 'text-red-500' : metaTitle.length > 50 ? 'text-yellow-500' : 'text-gray-400'}`}>
                  {metaTitle.length}/60
                </span>
              </div>
              <input
                type="text"
                value={metaTitle}
                onChange={(e) => setMetaTitle(e.target.value)}
                className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:border-green-500 outline-none transition-all"
                placeholder="SEO page title"
              />
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">Meta Description</label>
                <span className={`text-[11px] font-bold ${metaDescription.length > 160 ? 'text-red-500' : metaDescription.length > 140 ? 'text-yellow-500' : 'text-gray-400'}`}>
                  {metaDescription.length}/160
                </span>
              </div>
              <textarea
                value={metaDescription}
                onChange={(e) => setMetaDescription(e.target.value)}
                rows={3}
                className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:border-green-500 outline-none transition-all resize-none"
                placeholder="Search result snippet..."
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">Keywords</label>
              <input
                type="text"
                value={keywords}
                onChange={(e) => setKeywords(e.target.value)}
                className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:border-green-500 outline-none transition-all"
                placeholder="keyword1, keyword2..."
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-gray-400 uppercase tracking-wider flex items-center gap-1">
                <Globe size={12} />
                Canonical URL
              </label>
              <input
                type="text"
                value={canonicalUrl}
                onChange={(e) => setCanonicalUrl(e.target.value)}
                className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:border-green-500 outline-none transition-all"
                placeholder="https://flymediatech.in/blog/..."
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">Meta Robots</label>
                <select
                  value={metaRobots}
                  onChange={(e) => setMetaRobots(e.target.value)}
                  className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:border-green-500 outline-none transition-all"
                >
                  <option value="index, follow">Index, Follow</option>
                  <option value="noindex, follow">Noindex, Follow</option>
                  <option value="index, nofollow">Index, Nofollow</option>
                  <option value="noindex, nofollow">Noindex, Nofollow</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">Twitter Card</label>
                <select
                  value={twitterCard}
                  onChange={(e) => setTwitterCard(e.target.value)}
                  className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:border-green-500 outline-none transition-all"
                >
                  <option value="summary">Summary</option>
                  <option value="summary_large_image">Summary Large Image</option>
                  <option value="app">App</option>
                  <option value="player">Player</option>
                </select>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">Custom Page Schema</label>
              <textarea
                value={schema}
                onChange={(e) => setSchema(e.target.value)}
                rows={3}
                className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:border-green-500 outline-none transition-all resize-y font-mono text-[12px]"
                placeholder='{ "@type": "Article", ... }'
              />
            </div>

            <div className="relative flex py-2 items-center">
              <div className="flex-grow border-t border-gray-100"></div>
              <span className="flex-shrink mx-4 text-xs font-bold text-gray-400 uppercase tracking-wider">Social Sharing (OG)</span>
              <button
                type="button"
                onClick={handleSyncSocial}
                className="flex items-center gap-1 text-[10px] font-bold uppercase tracking-widest text-[#ff9900] hover:underline"
              >
                <RefreshCw size={10} />
                Sync
              </button>
              <div className="flex-grow border-t border-gray-100"></div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">OG Title</label>
              <input
                type="text"
                value={ogTitle}
                onChange={(e) => setOgTitle(e.target.value)}
                className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:border-green-500 outline-none transition-all"
                placeholder="Title for Facebook/Twitter sharing"
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">OG Description</label>
              <textarea
                value={ogDescription}
                onChange={(e) => setOgDescription(e.target.value)}
                rows={2}
                className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:border-green-500 outline-none transition-all resize-none"
                placeholder="Description for social shares..."
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">OG Image URL</label>
              <input
                type="text"
                value={ogImage}
                onChange={(e) => setOgImage(e.target.value)}
                className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:border-green-500 outline-none transition-all"
                placeholder="https://... (Image for social sharing)"
              />
              <p className="text-[11px] text-gray-400">Recommended size: 1200x630px.</p>
            </div>

            {/* Google Preview */}
            {(metaTitle || title) && (
              <div className="bg-gray-50 rounded-xl p-4 border border-gray-100 space-y-1">
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-2">Google Preview</p>
                <p className="text-blue-600 text-sm font-medium leading-tight truncate">
                  {metaTitle || title}
                </p>
                <p className="text-green-700 text-[11px]">/{slug}</p>
                <p className="text-gray-500 text-xs leading-relaxed line-clamp-2">
                  {metaDescription || excerpt || 'No description set.'}
                </p>
              </div>
            )}
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
