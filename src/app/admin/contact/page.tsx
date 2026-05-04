'use client';

import React, { useState, useEffect } from 'react';
import { getContactQueries, updateQueryStatus, deleteQuery } from '@/app/actions/contact';
import { Mail, Trash2, Eye, X, CheckCircle } from 'lucide-react';

export default function ContactAdminPage() {
  const [queries, setQueries] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedQuery, setSelectedQuery] = useState<any>(null);

  useEffect(() => {
    loadQueries();
  }, []);

  async function loadQueries() {
    const data = await getContactQueries();
    setQueries(data);
    setLoading(false);
  }

  const handleStatusChange = async (id: number, status: string) => {
    const result = await updateQueryStatus(id, status);
    if (result.success) loadQueries();
  };

  const handleDelete = async (id: number) => {
    if (confirm('Delete this query?')) {
      const result = await deleteQuery(id);
      if (result.success) loadQueries();
    }
  };

  if (loading) return <div className="p-8 text-center">Loading...</div>;

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Contact Queries</h1>
        <p className="text-gray-500 mt-1">Manage inquiries from your website visitors.</p>
      </div>

      <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
        {/* Desktop Table View */}
        <div className="hidden md:block overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-100">
                <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase tracking-wider">Date</th>
                <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase tracking-wider">Contact</th>
                <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase tracking-wider">Message Snippet</th>
                <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase tracking-wider">Status</th>
                <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase tracking-wider text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {queries.map((query) => (
                <tr key={query.id} className={`hover:bg-gray-50/50 transition-colors ${query.status === 'NEW' ? 'bg-orange-50/20' : ''}`}>
                  <td className="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">
                    {new Date(query.createdAt).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm font-bold text-gray-900">{query.name}</div>
                    <div className="text-xs text-gray-500">{query.email}</div>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600 max-w-xs truncate">
                    {query.message}
                  </td>
                  <td className="px-6 py-4">
                    <select 
                      value={query.status}
                      onChange={(e) => handleStatusChange(query.id, e.target.value)}
                      className={`text-xs font-bold px-2 py-1 rounded-full border-none outline-none cursor-pointer ${
                        query.status === 'NEW' ? 'bg-orange-100 text-orange-700' : 
                        query.status === 'READ' ? 'bg-blue-100 text-blue-700' : 'bg-green-100 text-green-700'
                      }`}
                    >
                      <option value="NEW">NEW</option>
                      <option value="READ">READ</option>
                      <option value="REPLIED">REPLIED</option>
                    </select>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex justify-end gap-2">
                      <button 
                        onClick={() => setSelectedQuery(query)}
                        className="p-2 text-gray-400 hover:text-[#ff9900] transition-colors"
                      >
                        <Eye size={18} />
                      </button>
                      <button 
                        onClick={() => handleDelete(query.id)}
                        className="p-2 text-gray-400 hover:text-red-500 transition-colors"
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

        {/* Mobile Card View */}
        <div className="md:hidden divide-y divide-gray-100">
          {queries.map((query) => (
            <div key={query.id} className={`p-4 space-y-3 ${query.status === 'NEW' ? 'bg-orange-50/20' : ''}`}>
              <div className="flex justify-between items-start">
                <div>
                  <div className="font-bold text-gray-900">{query.name}</div>
                  <div className="text-xs text-gray-500">{query.email}</div>
                  <div className="text-[10px] text-gray-400 mt-1">
                    {new Date(query.createdAt).toLocaleString()}
                  </div>
                </div>
                <select 
                  value={query.status}
                  onChange={(e) => handleStatusChange(query.id, e.target.value)}
                  className={`text-[10px] font-bold px-2 py-1 rounded-full border-none outline-none cursor-pointer ${
                    query.status === 'NEW' ? 'bg-orange-100 text-orange-700' : 
                    query.status === 'READ' ? 'bg-blue-100 text-blue-700' : 'bg-green-100 text-green-700'
                  }`}
                >
                  <option value="NEW">NEW</option>
                  <option value="READ">READ</option>
                  <option value="REPLIED">REPLIED</option>
                </select>
              </div>
              <p className="text-sm text-gray-600 line-clamp-2 italic">
                "{query.message}"
              </p>
              <div className="flex justify-end gap-3 pt-2">
                <button 
                  onClick={() => setSelectedQuery(query)}
                  className="flex items-center gap-1 text-sm font-bold text-blue-600 px-3 py-1 bg-blue-50 rounded-lg"
                >
                  <Eye size={16} /> View
                </button>
                <button 
                  onClick={() => handleDelete(query.id)}
                  className="flex items-center gap-1 text-sm font-bold text-red-600 px-3 py-1 bg-red-50 rounded-lg"
                >
                  <Trash2 size={16} /> Delete
                </button>
              </div>
            </div>
          ))}
        </div>

        {queries.length === 0 && (
          <div className="text-center py-20 text-gray-500">
            No queries found.
          </div>
        )}
      </div>

      {/* Query Detail Modal */}
      {selectedQuery && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[100] p-4">
          <div className="bg-white rounded-2xl w-full max-w-lg overflow-hidden shadow-2xl">
            <div className="p-6 border-b border-gray-100 flex justify-between items-center">
              <h2 className="text-xl font-bold text-gray-900">Query Details</h2>
              <button onClick={() => setSelectedQuery(null)} className="text-gray-400 hover:text-gray-600">
                <X size={24} />
              </button>
            </div>
            <div className="p-6 space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="text-xs font-bold text-gray-400 uppercase">From</label>
                  <div className="text-lg font-bold text-gray-900">{selectedQuery.name}</div>
                </div>
                <div>
                  <label className="text-xs font-bold text-gray-400 uppercase">Date</label>
                  <div className="text-gray-700">{new Date(selectedQuery.createdAt).toLocaleString()}</div>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="text-xs font-bold text-gray-400 uppercase">Email</label>
                  <div className="text-gray-700">{selectedQuery.email}</div>
                </div>
                <div>
                  <label className="text-xs font-bold text-gray-400 uppercase">Phone</label>
                  <div className="text-gray-700">{selectedQuery.phone || 'N/A'}</div>
                </div>
              </div>

              <div>
                <label className="text-xs font-bold text-gray-400 uppercase">Message</label>
                <div className="mt-2 p-4 bg-gray-50 rounded-lg text-gray-700 whitespace-pre-wrap">
                  {selectedQuery.message}
                </div>
              </div>

              <div className="flex justify-end pt-4">
                <button 
                  onClick={() => setSelectedQuery(null)}
                  className="bg-[#ff9900] text-white px-8 py-2.5 rounded-lg font-bold hover:bg-black transition-all"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
