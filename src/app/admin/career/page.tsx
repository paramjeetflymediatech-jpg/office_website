'use client';

import React, { useState, useEffect } from 'react';
import { getCareers, upsertCareer, deleteCareer } from '@/app/actions/career';
import { Plus, Trash2, Edit2, X, Save } from 'lucide-react';

export default function CareerPage() {
  const [careers, setCareers] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingCareer, setEditingCareer] = useState<any>(null);

  useEffect(() => {
    loadCareers();
  }, []);

  async function loadCareers() {
    const data = await getCareers();
    setCareers(data);
    setLoading(false);
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const result = await upsertCareer(formData);
    
    if (result.success) {
      setIsModalOpen(false);
      setEditingCareer(null);
      loadCareers();
    }
  };

  const handleDelete = async (id: number) => {
    if (confirm('Are you sure you want to delete this job requirement?')) {
      const result = await deleteCareer(id);
      if (result.success) loadCareers();
    }
  };

  if (loading) return <div className="p-8 text-center">Loading...</div>;

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Career Management</h1>
          <p className="text-gray-500 mt-1">Manage job openings and requirements.</p>
        </div>
        <button 
          onClick={() => { setEditingCareer(null); setIsModalOpen(true); }}
          className="flex items-center gap-2 bg-[#ff9900] text-white px-6 py-2.5 rounded-lg font-bold hover:bg-black transition-all"
        >
          <Plus size={20} />
          Add New Job
        </button>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {careers.map((career) => (
          <div key={career.id} className="bg-white p-4 sm:p-6 rounded-xl border border-gray-100 shadow-sm flex flex-col sm:flex-row justify-between items-start gap-4">
            <div className="space-y-2 w-full">
              <div className="flex flex-wrap items-center gap-3">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900">{career.title}</h3>
                <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                  career.status === 'OPEN' ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'
                }`}>
                  {career.status}
                </span>
              </div>
              <p className="text-sm sm:text-base text-gray-600 line-clamp-2">{career.description}</p>
              <div className="text-xs text-gray-400">
                Created on {new Date(career.createdAt).toLocaleDateString()}
              </div>
            </div>
            <div className="flex gap-2 w-full sm:w-auto justify-end border-t sm:border-t-0 pt-3 sm:pt-0">
              <button 
                onClick={() => { setEditingCareer(career); setIsModalOpen(true); }}
                className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
              >
                <Edit2 size={18} />
              </button>
              <button 
                onClick={() => handleDelete(career.id)}
                className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
              >
                <Trash2 size={18} />
              </button>
            </div>
          </div>
        ))}
        {careers.length === 0 && (
          <div className="text-center py-12 bg-gray-50 rounded-xl border border-dashed border-gray-200 text-gray-500">
            No job openings found. Click "Add New Job" to create one.
          </div>
        )}
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[100] p-4">
          <div className="bg-white rounded-2xl w-full max-w-2xl overflow-hidden shadow-2xl">
            <div className="p-6 border-b border-gray-100 flex justify-between items-center">
              <h2 className="text-xl font-bold text-gray-900">
                {editingCareer ? 'Edit Job' : 'Add New Job'}
              </h2>
              <button onClick={() => setIsModalOpen(false)} className="text-gray-400 hover:text-gray-600">
                <X size={24} />
              </button>
            </div>
            <form onSubmit={handleSubmit} className="p-6 space-y-4 max-h-[80vh] overflow-y-auto">
              {editingCareer && <input type="hidden" name="id" value={editingCareer.id} />}
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-sm font-bold text-gray-700">Job Title</label>
                  <input 
                    name="title" 
                    required 
                    defaultValue={editingCareer?.title}
                    className="w-full p-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#ff9900] outline-none"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-sm font-bold text-gray-700">Status</label>
                  <select 
                    name="status" 
                    defaultValue={editingCareer?.status || 'OPEN'}
                    className="w-full p-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#ff9900] outline-none"
                  >
                    <option value="OPEN">Open</option>
                    <option value="CLOSED">Closed</option>
                  </select>
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-sm font-bold text-gray-700">Description</label>
                <textarea 
                  name="description" 
                  rows={3} 
                  required
                  defaultValue={editingCareer?.description}
                  className="w-full p-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#ff9900] outline-none"
                />
              </div>

              <div className="space-y-1">
                <label className="text-sm font-bold text-gray-700">Requirements (One per line)</label>
                <textarea 
                  name="requirements" 
                  rows={6} 
                  required
                  defaultValue={editingCareer?.requirements}
                  className="w-full p-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#ff9900] outline-none"
                  placeholder="Bachelor's degree in CS&#10;3+ years experience&#10;Proficient in React"
                />
              </div>

              <div className="flex justify-end gap-3 pt-4">
                <button 
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-6 py-2.5 border border-gray-200 rounded-lg font-bold text-gray-600 hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button 
                  type="submit"
                  className="flex items-center gap-2 bg-[#ff9900] text-white px-8 py-2.5 rounded-lg font-bold hover:bg-black transition-all"
                >
                  <Save size={20} />
                  Save Job
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
