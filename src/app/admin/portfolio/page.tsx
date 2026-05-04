'use client';

import React, { useState, useEffect } from 'react';
import { getPortfolioItems, uploadPortfolio, deletePortfolioItem, deleteAllPortfolioItems, updatePortfolioItem } from '@/app/actions/portfolio';
import { Upload, Trash2, X, Plus, Image as ImageIcon, Maximize2, ChevronLeft, ChevronRight, Edit2 } from 'lucide-react';
import { useNotification } from '@/components/NotificationContext';
import ConfirmModal from '@/components/ConfirmModal';
import Image from 'next/image';

export default function PortfolioPage() {
  const { showNotification } = useNotification();
  const [items, setItems] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [isUploading, setIsUploading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState<{file: File, preview: string}[]>([]);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  
  // Confirm Modal State
  const [itemToDelete, setItemToDelete] = useState<number | null>(null);
  const [isDeletingAll, setIsDeletingAll] = useState(false);

  // Pagination State
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 20;

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

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
      const newFiles = Array.from(files).map(file => ({
        file,
        preview: URL.createObjectURL(file)
      }));
      setSelectedFiles(prev => [...prev, ...newFiles]);
    }
    // Reset input so same file can be picked again
    e.target.value = '';
  };

  const removeFile = (index: number) => {
    setSelectedFiles(prev => {
      const newFiles = [...prev];
      URL.revokeObjectURL(newFiles[index].preview);
      newFiles.splice(index, 1);
      return newFiles;
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (selectedFiles.length === 0) {
      showNotification('error', 'Please select at least one image');
      return;
    }

    setIsUploading(true);
    const formData = new FormData(e.currentTarget);
    
    // Remove the original images field and add our managed files
    formData.delete('images');
    selectedFiles.forEach(item => {
      formData.append('images', item.file);
    });

    const result = await uploadPortfolio(formData);
    
    if (result.success) {
      showNotification('success', `Successfully uploaded ${result.count} images!`);
      setIsModalOpen(false);
      selectedFiles.forEach(f => URL.revokeObjectURL(f.preview));
      setSelectedFiles([]);
      loadItems();
    } else {
      showNotification('error', result.error || 'Failed to upload images');
    }
    setIsUploading(false);
  };

  const handleDelete = async (id: number) => {
    setIsUploading(true);
    const result = await deletePortfolioItem(id);
    if (result.success) {
      showNotification('success', 'Image deleted successfully');
      // If we delete the last item on a page, go back one page
      if (currentItems.length === 1 && currentPage > 1) {
        setCurrentPage(prev => prev - 1);
      }
      await loadItems();
    } else {
      showNotification('error', result.error || 'Failed to delete image');
    }
    setItemToDelete(null);
    setIsUploading(false);
  };

  const handleDeleteAll = async () => {
    setIsUploading(true);
    const result = await deleteAllPortfolioItems();
    if (result.success) {
      showNotification('success', 'All images deleted successfully');
      setCurrentPage(1);
      await loadItems();
    } else {
      showNotification('error', result.error || 'Failed to delete all images');
    }
    setIsDeletingAll(false);
    setIsUploading(false);
  };

  // Edit State & Logic
  const [itemToEdit, setItemToEdit] = useState<any>(null);
  const [editData, setEditData] = useState({ title: '', category: '' });

  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!itemToEdit) return;
    
    setIsUploading(true);
    const result = await updatePortfolioItem(itemToEdit.id, editData);
    if (result.success) {
      showNotification('success', 'Image updated successfully');
      await loadItems();
      setItemToEdit(null);
    } else {
      showNotification('error', result.error || 'Failed to update image');
    }
    setIsUploading(false);
  };

  const startEdit = (item: any) => {
    setItemToEdit(item);
    setEditData({ title: item.title, category: item.category || '' });
  };

  // Pagination Logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(items.length / itemsPerPage);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#ff9900]"></div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Portfolio</h1>
          <p className="text-gray-500 mt-1">Manage and upload work images.</p>
        </div>
        <div className="flex gap-3 w-full sm:w-auto">
          {items.length > 0 && (
            <button 
              onClick={() => setIsDeletingAll(true)}
              className="flex items-center justify-center gap-2 border-2 border-red-100 text-red-500 px-6 py-2.5 rounded-lg font-bold hover:bg-red-50 transition-all flex-1 sm:flex-none"
            >
              <Trash2 size={20} />
              Delete All
            </button>
          )}
          <button 
            onClick={() => setIsModalOpen(true)}
            className="flex items-center justify-center gap-2 bg-[#ff9900] text-white px-6 py-2.5 rounded-lg font-bold hover:bg-black transition-all flex-1 sm:flex-none shadow-lg shadow-orange-100"
          >
            <Plus size={20} />
            Upload Images
          </button>
        </div>
      </div>

      {/* Portfolio Stats Bar */}
      {items.length > 0 && (
        <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-orange-50 rounded-lg flex items-center justify-center text-[#ff9900]">
              <ImageIcon size={20} />
            </div>
            <div>
              <p className="text-xs font-medium text-gray-400 uppercase tracking-wider">Inventory Status</p>
              <p className="text-sm font-bold text-gray-900">
                Showing <span className="text-[#ff9900]">{Math.min(indexOfFirstItem + 1, items.length)} – {Math.min(indexOfLastItem, items.length)}</span> of <span className="text-[#ff9900]">{items.length}</span> Total Assets
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2 text-xs font-bold text-gray-500 bg-gray-50 px-3 py-1.5 rounded-full border border-gray-100">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            System Synced
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
        {currentItems.map((item) => (
          <div 
            key={item.id} 
            className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col"
          >
            {/* Image Section */}
            <div 
              className="relative aspect-square cursor-pointer overflow-hidden bg-gray-50"
              onClick={() => setSelectedImage(item.imageUrl)}
            >
              <Image 
                src={item.imageUrl} 
                alt={item.title} 
                fill 
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                className="object-contain p-2 group-hover:scale-105 transition-transform duration-500"
                priority={items.indexOf(item) < 4}
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
              <div className="flex items-center gap-1 flex-shrink-0">
                <button 
                  onClick={(e) => { e.stopPropagation(); startEdit(item); }}
                  className="p-2.5 text-gray-400 hover:text-[#ff9900] hover:bg-orange-50 rounded-xl transition-all"
                  title="Edit Details"
                >
                  <Edit2 size={18} />
                </button>
                <button 
                  onClick={(e) => { e.stopPropagation(); setItemToDelete(item.id); }}
                  className="p-2.5 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-xl transition-all"
                  title="Delete Image"
                >
                  <Trash2 size={18} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-2 mt-8">
          <button
            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="p-2.5 rounded-xl border border-gray-200 text-gray-400 hover:text-[#ff9900] hover:border-[#ff9900] disabled:opacity-30 disabled:cursor-not-allowed transition-all hover:bg-white bg-gray-50"
          >
            <ChevronLeft size={20} />
          </button>
          
          <div className="flex items-center gap-1.5">
            {(() => {
              const pages = [];
              const delta = 2; // Number of pages to show before and after current
              const left = currentPage - delta;
              const right = currentPage + delta + 1;
              const range = [];
              const rangeWithDots = [];
              let l;

              for (let i = 1; i <= totalPages; i++) {
                if (i === 1 || i === totalPages || (i >= left && i < right)) {
                  range.push(i);
                }
              }

              for (let i of range) {
                if (l) {
                  if (i - l === 2) {
                    rangeWithDots.push(l + 1);
                  } else if (i - l !== 1) {
                    rangeWithDots.push('...');
                  }
                }
                rangeWithDots.push(i);
                l = i;
              }

              return rangeWithDots.map((page, i) => (
                <button
                  key={i}
                  onClick={() => typeof page === 'number' && setCurrentPage(page)}
                  disabled={typeof page !== 'number'}
                  className={`w-10 h-10 rounded-xl font-bold transition-all ${
                    page === currentPage
                      ? 'bg-[#ff9900] text-white shadow-lg shadow-orange-100 scale-110'
                      : typeof page === 'number'
                      ? 'text-gray-400 hover:text-black hover:bg-white bg-gray-50 border border-transparent hover:border-gray-200'
                      : 'text-gray-300 cursor-default'
                  }`}
                >
                  {page}
                </button>
              ));
            })()}
          </div>

          <button
            onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
            className="p-2.5 rounded-xl border border-gray-200 text-gray-400 hover:text-[#ff9900] hover:border-[#ff9900] disabled:opacity-30 disabled:cursor-not-allowed transition-all hover:bg-white bg-gray-50"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      )}

      {/* Upload Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[100] p-4">
          <div className="bg-white rounded-2xl w-full max-w-2xl overflow-hidden shadow-2xl animate-in zoom-in-95 duration-300">
            <div className="p-4 sm:p-6 border-b border-gray-100 flex justify-between items-center bg-gray-50">
              <h2 className="text-lg sm:text-xl font-bold text-gray-900">Upload Portfolio Images</h2>
              <button onClick={() => { setIsModalOpen(false); setSelectedFiles([]); }} className="text-gray-400 hover:text-gray-600 transition-colors">
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
                    placeholder="e.g. Web Development (Use 'General' for root folder)"
                  />
                </div>
              </div>

              <div className="space-y-4">
                <label className="block text-sm font-bold text-gray-700">Select Images</label>
                <div className="border-2 border-dashed border-gray-200 rounded-xl p-8 text-center hover:border-[#ff9900] transition-colors relative bg-gray-50/50">
                  <input 
                    type="file" 
                    name="images" 
                    multiple 
                    accept="image/*"
                    onChange={handleFileChange}
                    className="absolute inset-0 opacity-0 cursor-pointer"
                  />
                  <div className="flex flex-col items-center gap-2">
                    <div className="w-12 h-12 bg-orange-100 text-[#ff9900] rounded-full flex items-center justify-center">
                      <Plus size={24} />
                    </div>
                    <p className="text-gray-600 font-medium">Click or drag images here</p>
                    <p className="text-xs text-gray-400">PNG, JPG or WEBP up to 50MB</p>
                  </div>
                </div>

                {selectedFiles.length > 0 && (
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-4">
                    {selectedFiles.map((item, i) => (
                      <div key={i} className="group relative aspect-square rounded-xl overflow-hidden border border-gray-100 shadow-sm">
                        <img src={item.preview} alt="Preview" className="w-full h-full object-cover" />
                        <button 
                          type="button"
                          onClick={() => removeFile(i)}
                          className="absolute top-2 right-2 bg-red-500 text-white p-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity shadow-lg"
                        >
                          <X size={14} />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className="flex justify-end gap-3 pt-4 border-t border-gray-100">
                <button 
                  type="button"
                  onClick={() => { setIsModalOpen(false); setSelectedFiles([]); }}
                  className="px-6 py-2.5 border border-gray-200 rounded-xl font-bold text-gray-600 hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button 
                  type="submit"
                  disabled={isUploading || selectedFiles.length === 0}
                  className="flex items-center gap-2 bg-[#ff9900] text-white px-8 py-2.5 rounded-xl font-bold hover:bg-black transition-all disabled:opacity-50 shadow-lg shadow-orange-100"
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

      {/* Edit Modal */}
      {itemToEdit && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[100] p-4 backdrop-blur-sm">
          <div className="bg-white rounded-3xl w-full max-w-md overflow-hidden shadow-2xl animate-in zoom-in duration-300">
            <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-gray-50">
              <h3 className="text-xl font-bold text-gray-900">Edit Details</h3>
              <button onClick={() => setItemToEdit(null)} className="text-gray-400 hover:text-black transition-colors"><X size={24} /></button>
            </div>
            
            <form onSubmit={handleUpdate} className="p-6 space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700">Project Title</label>
                <input 
                  type="text" 
                  value={editData.title}
                  onChange={(e) => setEditData({...editData, title: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#ff9900] outline-none transition-all"
                  placeholder="Enter project name"
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700">Category</label>
                <input 
                  type="text" 
                  value={editData.category}
                  onChange={(e) => setEditData({...editData, category: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#ff9900] outline-none transition-all"
                  placeholder="e.g. Web Design, Logo, SEO"
                />
              </div>

              <div className="pt-4 flex gap-3">
                <button 
                  type="button"
                  onClick={() => setItemToEdit(null)}
                  className="flex-1 px-6 py-3 rounded-xl border border-gray-200 font-bold hover:bg-gray-50 transition-all"
                >
                  Cancel
                </button>
                <button 
                  type="submit"
                  disabled={isUploading}
                  className="flex-1 bg-[#ff9900] text-white px-6 py-3 rounded-xl font-bold hover:bg-black transition-all disabled:opacity-50"
                >
                  {isUploading ? 'Updating...' : 'Save Changes'}
                </button>
              </div>
            </form>
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

      <ConfirmModal
        isOpen={isDeletingAll}
        title="Delete ALL Images?"
        message="Are you sure you want to delete your entire portfolio? This will remove all images from the database and the server. This action is permanent!"
        onConfirm={handleDeleteAll}
        onCancel={() => !isUploading && setIsDeletingAll(false)}
        confirmText={isUploading ? 'Deleting All...' : 'Yes, Delete Everything'}
      />
    </div>
  );
}
