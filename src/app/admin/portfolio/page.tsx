'use client';

import React, { useState, useEffect } from 'react';
import { getPortfolioItems, uploadPortfolio, deletePortfolioItem } from '@/app/actions/portfolio';
import { Upload, Trash2, X, Plus, Image as ImageIcon, Maximize2 } from 'lucide-react';
import { useNotification } from '@/components/NotificationContext';
import ConfirmModal from '@/components/ConfirmModal';
import Image from 'next/image';

export default function PortfolioPage() {
  const { showNotification } = useNotification();
  const [items, setItems] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [isUploading, setIsUploading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [previews, setPreviews] = useState<string[]>([]);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  
  // Confirm Modal State
  const [itemToDelete, setItemToDelete] = useState<number | null>(null);

  useEffect(() => {
    loadItems();
  }, []);

  async function loadItems() {
    const data = await getPortfolioItems();
    setItems(data);
    setLoading(false);
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      const newPreviews = Array.from(files).map(file => URL.createObjectURL(file));
      setPreviews(prev => [...prev, ...newPreviews]);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsUploading(true);
    const formData = new FormData(e.currentTarget);
    const result = await uploadPortfolio(formData);
    
    if (result.success) {
      showNotification('success', `Successfully uploaded ${result.count} images!`);
      setIsModalOpen(false);
      setPreviews([]);
      loadItems();
    } else {
      showNotification('error', result.error || 'Failed to upload images');
    }
    setIsUploading(false);
  };

  const handleDelete = async (id: number) => {
    setIsUploading(true); // Reusing isUploading as a general loading state for simplicity
    const result = await deletePortfolioItem(id);
    if (result.success) {
      showNotification('success', 'Image deleted successfully');
      await loadItems();
    } else {
      showNotification('error', result.error || 'Failed to delete image');
    }
    setItemToDelete(null);
    setIsUploading(false);
  };

  if (loading) return <div className="p-8 text-center">Loading...</div>;

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Portfolio</h1>
          <p className="text-gray-500 mt-1">Manage and upload work images.</p>
        </div>
        <button 
          onClick={() => setIsModalOpen(true)}
          className="flex items-center gap-2 bg-[#ff9900] text-white px-6 py-2.5 rounded-lg font-bold hover:bg-black transition-all"
        >
          <Upload size={20} />
          Upload Images
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
        {items.map((item) => (
          <div 
            key={item.id} 
            className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col"
          >
            {/* Image Section */}
            <div 
              className="relative aspect-square cursor-pointer overflow-hidden"
              onClick={() => setSelectedImage(item.imageUrl)}
            >
              <Image 
                src={item.imageUrl} 
                alt={item.title} 
                fill 
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity bg-white/90 backdrop-blur-md p-2 rounded-lg shadow-sm">
                <Maximize2 size={16} className="text-[#ff9900]" />
              </div>
            </div>

            {/* Content Section */}
            <div className="p-4 flex items-center justify-between gap-4 bg-white border-t border-gray-50">
              <div className="flex-1 min-w-0">
                <h3 className="text-sm font-bold text-gray-900 truncate">{item.title}</h3>
                <p className="text-[10px] text-gray-400 font-medium uppercase tracking-wider mt-0.5">{item.category}</p>
              </div>
              <button 
                onClick={(e) => { e.stopPropagation(); setItemToDelete(item.id); }}
                className="p-2.5 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-xl transition-all flex-shrink-0"
                title="Delete Image"
              >
                <Trash2 size={18} />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Upload Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[100] p-4">
          <div className="bg-white rounded-2xl w-full max-w-2xl overflow-hidden shadow-2xl">
            <div className="p-4 sm:p-6 border-b border-gray-100 flex justify-between items-center">
              <h2 className="text-lg sm:text-xl font-bold text-gray-900">Upload Portfolio Images</h2>
              <button onClick={() => { setIsModalOpen(false); setPreviews([]); }} className="text-gray-400 hover:text-gray-600">
                <X size={24} />
              </button>
            </div>
            <form onSubmit={handleSubmit} className="p-4 sm:p-6 space-y-6 max-h-[80vh] overflow-y-auto">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-sm font-bold text-gray-700">Project Title (Optional)</label>
                  <input 
                    name="title" 
                    className="w-full p-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#ff9900] outline-none"
                    placeholder="e.g. Modern Web Design"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-sm font-bold text-gray-700">Category</label>
                  <input 
                    name="category" 
                    className="w-full p-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#ff9900] outline-none"
                    placeholder="e.g. Web Development"
                  />
                </div>
              </div>

              <div className="space-y-4">
                <label className="block text-sm font-bold text-gray-700">Select Images (Bulk support)</label>
                <div className="border-2 border-dashed border-gray-200 rounded-xl p-8 text-center hover:border-[#ff9900] transition-colors relative">
                  <input 
                    type="file" 
                    name="images" 
                    multiple 
                    accept="image/*"
                    onChange={handleFileChange}
                    className="absolute inset-0 opacity-0 cursor-pointer"
                  />
                  <div className="flex flex-col items-center gap-2">
                    <div className="w-12 h-12 bg-orange-50 rounded-full flex items-center justify-center text-[#ff9900]">
                      <Plus size={24} />
                    </div>
                    <p className="text-gray-600 font-medium">Click or drag images here</p>
                    <p className="text-xs text-gray-400">PNG, JPG or WEBP up to 5MB</p>
                  </div>
                </div>

                {previews.length > 0 && (
                  <div className="grid grid-cols-4 gap-4 mt-4">
                    {previews.map((src, i) => (
                      <div key={i} className="relative aspect-square rounded-lg overflow-hidden border border-gray-100 shadow-sm">
                        <img src={src} alt="Preview" className="w-full h-full object-cover" />
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className="flex justify-end gap-3 pt-4">
                <button 
                  type="button"
                  onClick={() => { setIsModalOpen(false); setPreviews([]); }}
                  className="px-6 py-2.5 border border-gray-200 rounded-lg font-bold text-gray-600 hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button 
                  type="submit"
                  disabled={isUploading}
                  className="flex items-center gap-2 bg-[#ff9900] text-white px-8 py-2.5 rounded-lg font-bold hover:bg-black transition-all disabled:opacity-50"
                >
                  {isUploading ? (
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <Upload size={20} />
                  )}
                  {isUploading ? 'Uploading...' : 'Start Upload'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Lightbox Preview */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[200] bg-black/95 flex items-center justify-center p-4 cursor-zoom-out"
          onClick={() => setSelectedImage(null)}
        >
          <button className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors">
            <X size={32} />
          </button>
          <div className="relative w-full max-w-5xl h-full max-h-[90vh]">
            <Image
              src={selectedImage}
              alt="Preview"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      )}
      {/* Beautiful Delete Confirmation */}
      <ConfirmModal
        isOpen={itemToDelete !== null}
        title="Delete Image?"
        message="Are you sure you want to delete this portfolio item? This action cannot be undone."
        onConfirm={() => itemToDelete !== null && handleDelete(itemToDelete)}
        onCancel={() => !isUploading && setItemToDelete(null)}
        confirmText={isUploading ? 'Deleting...' : 'Delete Now'}
      />
    </div>
  );
}
