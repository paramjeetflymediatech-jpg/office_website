'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { getBlogs, deleteBlog, seedOriginalBlogs } from '@/app/actions/blog';
import { syncAllBlogSEO } from '@/app/actions/pageSeo';
import { Plus, Trash2, Edit, BookOpen, Eye, Calendar, Sparkles, Search, RefreshCw } from 'lucide-react';
import { useNotification } from '@/components/NotificationContext';
import ConfirmModal from '@/components/ConfirmModal';

export default function AdminBlogPage() {
  const { showNotification } = useNotification();
  const [blogs, setBlogs] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [actionLoading, setActionLoading] = useState(false);
  const [blogToDelete, setBlogToDelete] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 15;

  const filteredBlogs = blogs.filter(blog => {
    const searchLower = searchQuery.toLowerCase();
    const cleanSearch = searchLower.startsWith('/') ? searchLower.slice(1) : searchLower;
    return (
      blog.title?.toLowerCase().includes(searchLower) || 
      blog.slug?.toLowerCase().includes(cleanSearch) ||
      `/${blog.slug?.toLowerCase()}`.includes(searchLower) ||
      blog.region?.toLowerCase().includes(searchLower)
    );
  });

  // Pagination calculations
  const totalPages = Math.ceil(filteredBlogs.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentBlogs = filteredBlogs.slice(startIndex, startIndex + itemsPerPage);

  // Reset to page 1 when searching
  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery]);

  useEffect(() => {
    loadBlogs();
  }, []);

  async function loadBlogs() {
    setLoading(true);
    const data = await getBlogs();
    setBlogs(data);
    setLoading(false);
  }

  const handleDelete = async (id: number) => {
    setActionLoading(true);
    const result = await deleteBlog(id);
    if (result.success) {
      showNotification('success', 'Blog post deleted successfully');
      await loadBlogs();
    } else {
      showNotification('error', result.error || 'Failed to delete blog post');
    }
    setBlogToDelete(null);
    setActionLoading(false);
  };

  const handleSeed = async () => {
    setActionLoading(true);
    const result = await seedOriginalBlogs();
    if (result.success) {
      showNotification('success', result.message || 'Seeded successfully!');
      await loadBlogs();
    } else {
      showNotification('error', result.error || 'Failed to seed blogs');
    }
    setActionLoading(false);
  };

  const handleSyncSEO = async () => {
    if (!confirm('This will synchronize SEO metadata (Title, Description, Keywords) for all 733+ blogs. Proceed?')) return;
    
    setActionLoading(true);
    const result = await syncAllBlogSEO();
    if (result.success) {
      showNotification('success', result.message || 'SEO data synchronized successfully!');
    } else {
      showNotification('error', result.error || 'Failed to sync SEO data');
    }
    setActionLoading(false);
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#ff9900]"></div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Blogs</h1>
          <p className="text-gray-500 mt-1">Manage and publish articles on your website.</p>
        </div>
        <div className="flex gap-3 w-full sm:w-auto">
          {blogs.length === 0 && (
            <button 
              onClick={handleSeed}
              disabled={actionLoading}
              className="flex items-center justify-center gap-2 border-2 border-orange-100 text-[#ff9900] bg-orange-50 px-6 py-2.5 rounded-lg font-bold hover:bg-orange-100 transition-all flex-1 sm:flex-none"
            >
              <Sparkles size={20} />
              Seed Initial Blogs
            </button>
          )}
          <button 
            onClick={handleSyncSEO}
            disabled={actionLoading}
            className="flex items-center justify-center gap-2 border-2 border-blue-100 text-blue-600 bg-blue-50 px-6 py-2.5 rounded-lg font-bold hover:bg-blue-100 transition-all flex-1 sm:flex-none"
            title="Sync SEO metadata from blog.json to Database"
          >
            <RefreshCw size={20} className={actionLoading ? 'animate-spin' : ''} />
            Sync SEO
          </button>
          <Link 
            href="/admin/blog/new"
            className="flex items-center justify-center gap-2 bg-[#ff9900] text-white px-6 py-2.5 rounded-lg font-bold hover:bg-black transition-all flex-1 sm:flex-none shadow-lg shadow-orange-100 text-center"
          >
            <Plus size={20} />
            Create Post
          </Link>
        </div>
      </div>

      {/* Stats Bar */}
      {blogs.length > 0 && (
        <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-orange-50 rounded-lg flex items-center justify-center text-[#ff9900]">
              <BookOpen size={20} />
            </div>
            <div>
              <p className="text-xs font-medium text-gray-400 uppercase tracking-wider">Publication Status</p>
              <p className="text-sm font-bold text-gray-900">
                You have published <span className="text-[#ff9900]">{blogs.length}</span> Articles
              </p>
            </div>
          </div>
          
          {/* Search Bar */}
          <div className="relative flex-1 sm:max-w-md w-full">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
              <Search size={18} />
            </div>
            <input
              type="text"
              placeholder="Search by title or slug..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="block w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#ff9900]/30 focus:border-[#ff9900] transition-all text-sm font-medium placeholder:text-gray-400"
            />
          </div>

          <div className="hidden sm:flex items-center gap-2 text-xs font-bold text-gray-500 bg-gray-50 px-3 py-1.5 rounded-full border border-gray-100 shrink-0">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            Live
          </div>
        </div>
      )}

      {/* Blogs Table */}
      {blogs.length === 0 ? (
        <div className="bg-white p-12 text-center rounded-2xl border border-gray-100 shadow-sm">
          <BookOpen className="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <h3 className="text-lg font-bold text-gray-900 mb-1">No blogs published</h3>
          <p className="text-gray-500 mb-6">Create your first blog post or seed the original 6 ones to start.</p>
          <div className="flex justify-center gap-4">
            <button 
              onClick={handleSeed}
              className="bg-gray-100 text-gray-700 font-bold px-6 py-2.5 rounded-lg hover:bg-gray-200 transition-colors"
            >
              Seed Originals
            </button>
            <Link 
              href="/admin/blog/new"
              className="bg-[#ff9900] text-white font-bold px-6 py-2.5 rounded-lg hover:bg-black transition-colors"
            >
              Create Post
            </Link>
          </div>
        </div>
      ) : filteredBlogs.length === 0 ? (
        <div className="bg-white p-12 text-center rounded-2xl border border-gray-100 shadow-sm">
          <Search className="w-12 h-12 text-gray-300 mx-auto mb-4" />
          <h3 className="text-lg font-bold text-gray-900 mb-1">No blogs match your search</h3>
          <p className="text-gray-500">Try adjusting your search query or clear it to see all blogs.</p>
        </div>
      ) : (
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-100 text-xs font-bold text-gray-400 uppercase tracking-wider">
                  <th className="p-4 sm:p-5">Article</th>
                  <th className="p-4 sm:p-5">Category</th>
                  <th className="p-4 sm:p-5">Published Date</th>
                  <th className="p-4 sm:p-5">Views</th>
                  <th className="p-4 sm:p-5 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {currentBlogs.map((blog) => (
                  <tr key={blog.id} className="hover:bg-gray-50/50 transition-colors">
                    <td className="p-4 sm:p-5">
                      <div className="flex items-center gap-4">
                        {blog.image ? (
                          <img 
                            src={blog.image} 
                            alt={blog.title}
                            className="w-12 h-12 object-cover rounded-lg bg-gray-50 flex-shrink-0"
                          />
                        ) : (
                          <div className="w-12 h-12 rounded-lg bg-gray-100 flex items-center justify-center flex-shrink-0 text-gray-400">
                            <BookOpen size={20} />
                          </div>
                        )}
                        <div className="min-w-0 max-w-xs md:max-w-md">
                          <p className="font-bold text-gray-900 truncate">{blog.title}</p>
                          <p className="text-xs text-gray-400 truncate">/{blog.slug}</p>
                        </div>
                      </div>
                    </td>
                    <td className="p-4 sm:p-5">
                      <div className="flex flex-col gap-2 items-start">
                        <span className="inline-flex items-center px-2.5 py-1.5 rounded-full text-xs font-semibold bg-orange-50 text-[#ff9900]">
                          {blog.category}
                        </span>
                        <span className={`inline-flex items-center px-2 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider ${
                          blog.region === 'australia' ? 'bg-blue-50 text-blue-600 border border-blue-100' : 'bg-gray-100 text-gray-500 border border-gray-200'
                        }`}>
                          {blog.region || 'Global'}
                        </span>
                      </div>
                    </td>
                    <td className="p-4 sm:p-5 text-sm text-gray-500">
                      <div className="flex items-center gap-1.5">
                        <Calendar size={14} />
                        {blog.date}
                      </div>
                    </td>
                    <td className="p-4 sm:p-5 text-sm font-semibold text-gray-600">
                      <div className="flex items-center gap-1.5">
                        <Eye size={14} className="text-gray-400" />
                        {blog.views}
                      </div>
                    </td>
                    <td className="p-4 sm:p-5 text-right">
                      <div className="flex justify-end gap-1.5">
                        <Link 
                          href={`/admin/blog/${blog.id}`}
                          className="p-2 text-gray-400 hover:text-[#ff9900] hover:bg-orange-50 rounded-xl transition-all"
                          title="Edit Details"
                        >
                          <Edit size={18} />
                        </Link>
                        <button 
                          onClick={() => setBlogToDelete(blog.id)}
                          className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-xl transition-all"
                          title="Delete Post"
                        >
                          <Trash2 size={18} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Pagination Controls */}
      {filteredBlogs.length > itemsPerPage && (
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
          <p className="text-sm text-gray-500 font-medium">
            Showing <span className="text-gray-900 font-bold">{startIndex + 1}</span> to <span className="text-gray-900 font-bold">{Math.min(startIndex + itemsPerPage, filteredBlogs.length)}</span> of <span className="text-gray-900 font-bold">{filteredBlogs.length}</span> articles
          </p>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="px-4 py-2 text-sm font-bold text-gray-600 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
            >
              Previous
            </button>
            <div className="flex items-center gap-1 overflow-x-auto max-w-[200px] sm:max-w-none px-2">
              {Array.from({ length: Math.min(totalPages, 7) }).map((_, i) => {
                let pageNum;
                if (totalPages <= 7) {
                  pageNum = i + 1;
                } else if (currentPage <= 4) {
                  pageNum = i + 1;
                } else if (currentPage >= totalPages - 3) {
                  pageNum = totalPages - 6 + i;
                } else {
                  pageNum = currentPage - 3 + i;
                }

                return (
                  <button
                    key={pageNum}
                    onClick={() => setCurrentPage(pageNum)}
                    className={`w-10 h-10 flex items-center justify-center rounded-lg text-sm font-bold transition-all ${
                      currentPage === pageNum
                        ? 'bg-[#ff9900] text-white shadow-lg shadow-orange-100'
                        : 'text-gray-600 hover:bg-orange-50 hover:text-[#ff9900]'
                    }`}
                  >
                    {pageNum}
                  </button>
                );
              })}
            </div>
            <button
              onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="px-4 py-2 text-sm font-bold text-gray-600 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
            >
              Next
            </button>
          </div>
        </div>
      )}

      {/* Confirmation Modal */}
      <ConfirmModal
        isOpen={blogToDelete !== null}
        title="Delete Blog Post?"
        message="Are you sure you want to delete this blog post? This action will remove the article from the public website and cannot be undone."
        onConfirm={() => blogToDelete !== null && handleDelete(blogToDelete)}
        onCancel={() => !actionLoading && setBlogToDelete(null)}
        confirmText={actionLoading ? 'Deleting...' : 'Yes, Delete Post'}
      />
    </div>
  );
}
