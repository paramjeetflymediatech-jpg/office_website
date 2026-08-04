'use client';

import React, { useState, useEffect } from 'react';
import { getContactQueries, updateQueryStatus, deleteQuery } from '@/app/actions/contact';
import { Trash2, Eye, X, RefreshCw, GraduationCap, ChevronLeft, ChevronRight } from 'lucide-react';

export default function SummerTrainingAdminPage() {
  const [queries, setQueries] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [selectedQuery, setSelectedQuery] = useState<any>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  useEffect(() => {
    loadQueries();
    const onFocus = () => loadQueries();
    window.addEventListener('focus', onFocus);
    return () => window.removeEventListener('focus', onFocus);
  }, []);

  async function loadQueries(isManual = false) {
    if (isManual) setRefreshing(true);
    else setLoading(true);
    const data = await getContactQueries();
    // Filter out only summer training applications
    const filtered = data.filter((q: any) => q.subject && q.subject.includes('Summer Training Application'));
    setQueries(filtered);
    setLoading(false);
    setRefreshing(false);
  }

  const totalPages = Math.ceil(queries.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedQueries = queries.slice(startIndex, startIndex + itemsPerPage);

  useEffect(() => {
    if (currentPage > totalPages && totalPages > 0) {
      setCurrentPage(totalPages);
    }
  }, [queries.length, totalPages, currentPage]);

  const handleStatusChange = async (id: number, status: string) => {
    const result = await updateQueryStatus(id, status);
    if (result.success) loadQueries(true);
  };

  const handleDelete = async (id: number) => {
    if (confirm('Delete this application?')) {
      const result = await deleteQuery(id);
      if (result.success) loadQueries(true);
    }
  };

  if (loading) return <div className="p-8 text-center text-gray-500">Loading applications...</div>;

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
            <GraduationCap className="text-[#ff9900]" size={32} />
            Summer Training Applications
          </h1>
          <p className="text-gray-500 mt-1">
            {queries.length} {queries.length === 1 ? 'candidate has' : 'candidates have'} applied for Summer Training.
          </p>
        </div>
        <button
          onClick={() => loadQueries(true)}
          disabled={refreshing}
          className="flex items-center gap-2 px-4 py-2 bg-[#ff9900] text-white rounded-lg font-bold text-sm hover:bg-black transition-all disabled:opacity-60"
        >
          <RefreshCw size={16} className={refreshing ? 'animate-spin' : ''} />
          {refreshing ? 'Refreshing...' : 'Refresh'}
        </button>
      </div>

      <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
        {/* Desktop Table View */}
        <div className="hidden md:block overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-100">
                <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase tracking-wider">Date</th>
                <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase tracking-wider">Candidate</th>
                <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase tracking-wider">Course</th>
                <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase tracking-wider">Status</th>
                <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase tracking-wider text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {paginatedQueries.map((query) => (
                <tr key={query.id} className={`hover:bg-gray-50/50 transition-colors ${query.status === 'NEW' ? 'bg-orange-50/20' : ''}`}>
                  <td className="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">
                    {new Date(query.createdAt).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm font-bold text-gray-900">{query.name}</div>
                    <div className="text-xs text-gray-500">{query.email}</div>
                    <div className="text-xs text-gray-400 mt-0.5">{query.phone}</div>
                  </td>
                  <td className="px-6 py-4 text-sm font-bold text-[#ff9900]">
                    {query.subject ? query.subject.replace('Summer Training Application - ', '') : 'N/A'}
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
          {paginatedQueries.map((query) => (
            <div key={query.id} className={`p-4 space-y-3 ${query.status === 'NEW' ? 'bg-orange-50/20' : ''}`}>
              <div className="flex justify-between items-start">
                <div>
                  <div className="font-bold text-gray-900">{query.name}</div>
                  <div className="text-xs text-gray-500">{query.email}</div>
                  <div className="text-xs font-bold text-[#ff9900] mt-1">
                    {query.subject ? query.subject.replace('Summer Training Application - ', '') : 'N/A'}
                  </div>
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
            No applications found.
          </div>
        )}
      </div>

      {/* Pagination Controls */}
      {queries.length > 0 && (
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
          <div className="flex items-center gap-4 text-sm text-gray-500 font-medium">
            <p>
              Showing <span className="text-gray-900 font-bold">{startIndex + 1}</span> to{' '}
              <span className="text-gray-900 font-bold">{Math.min(startIndex + itemsPerPage, queries.length)}</span> of{' '}
              <span className="text-gray-900 font-bold">{queries.length}</span> applications
            </p>
            <div className="flex items-center gap-1.5 text-xs">
              <span className="text-gray-400 font-normal">Per page:</span>
              <select
                value={itemsPerPage}
                onChange={(e) => {
                  setItemsPerPage(Number(e.target.value));
                  setCurrentPage(1);
                }}
                className="bg-gray-50 border border-gray-200 rounded-lg px-2 py-1 text-xs font-bold text-gray-700 outline-none focus:border-[#ff9900]"
              >
                <option value={5}>5</option>
                <option value={10}>10</option>
                <option value={20}>20</option>
                <option value={50}>50</option>
              </select>
            </div>
          </div>

          {totalPages > 1 && (
            <div className="flex items-center gap-2">
              <button
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className="p-2 rounded-lg border border-gray-200 text-gray-600 hover:text-[#ff9900] hover:border-[#ff9900] disabled:opacity-40 disabled:cursor-not-allowed transition-all bg-white hover:bg-gray-50"
              >
                <ChevronLeft size={18} />
              </button>

              <div className="flex items-center gap-1">
                {Array.from({ length: Math.min(totalPages, 7) }).map((_, i) => {
                  let pageNum: number;
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
                      className={`w-9 h-9 flex items-center justify-center rounded-lg text-xs font-bold transition-all ${
                        currentPage === pageNum
                          ? 'bg-[#ff9900] text-white shadow-md shadow-orange-100'
                          : 'text-gray-600 hover:bg-orange-50 hover:text-[#ff9900]'
                      }`}
                    >
                      {pageNum}
                    </button>
                  );
                })}
              </div>

              <button
                onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages}
                className="p-2 rounded-lg border border-gray-200 text-gray-600 hover:text-[#ff9900] hover:border-[#ff9900] disabled:opacity-40 disabled:cursor-not-allowed transition-all bg-white hover:bg-gray-50"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          )}
        </div>
      )}

      {/* Query Detail Modal */}
      {selectedQuery && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[100] p-4">
          <div className="bg-white rounded-2xl w-full max-w-lg overflow-hidden shadow-2xl">
            <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-gray-50">
              <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                <GraduationCap className="text-[#ff9900]" />
                Application Details
              </h2>
              <button onClick={() => setSelectedQuery(null)} className="text-gray-400 hover:text-gray-600 bg-white p-1 rounded-full shadow-sm">
                <X size={20} />
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
                <label className="text-xs font-bold text-gray-400 uppercase">Course Applied</label>
                <div className="text-lg font-bold text-[#ff9900]">
                  {selectedQuery.subject ? selectedQuery.subject.replace('Summer Training Application - ', '') : 'N/A'}
                </div>
              </div>

              <div>
                <label className="text-xs font-bold text-gray-400 uppercase">Application Data</label>
                <div className="mt-2 p-4 bg-gray-50 rounded-lg text-gray-700 whitespace-pre-wrap font-mono text-sm shadow-inner border border-gray-100">
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

