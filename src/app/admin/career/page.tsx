'use client';

import React, { useState, useEffect } from 'react';
import { getCareers, upsertCareer, deleteCareer, getApplications, deleteApplication } from '@/app/actions/career';
import { Plus, Trash2, Edit2, X, Save, FileText, Download, User, Briefcase, Mail, Phone, Calendar, ChevronLeft, ChevronRight } from 'lucide-react';
import { useNotification } from '@/components/NotificationContext';
import ConfirmModal from '@/components/ConfirmModal';

export default function CareerPage() {
  const { showNotification } = useNotification();
  const [activeTab, setActiveTab] = useState<'openings' | 'applications'>('openings');
  
  // Job Openings State
  const [careers, setCareers] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingCareer, setEditingCareer] = useState<any>(null);

  // Applications State
  const [applications, setApplications] = useState<any[]>([]);
  const [appToDelete, setAppToDelete] = useState<number | null>(null);
  const [careerToDelete, setCareerToDelete] = useState<number | null>(null);
  
  // Pagination State
  const [currentOpeningsPage, setCurrentOpeningsPage] = useState(1);
  const [currentAppsPage, setCurrentAppsPage] = useState(1);
  const itemsPerPage = 10;

  useEffect(() => {
    loadData();
  }, []);

  async function loadData() {
    setLoading(true);
    const openingsData = await getCareers();
    const appsData = await getApplications();
    setCareers(openingsData);
    setApplications(appsData);
    setLoading(false);
  }

  // Pagination Logic for Openings
  const indexOfLastOpening = currentOpeningsPage * itemsPerPage;
  const indexOfFirstOpening = indexOfLastOpening - itemsPerPage;
  const currentOpenings = careers.slice(indexOfFirstOpening, indexOfLastOpening);
  const totalOpeningsPages = Math.ceil(careers.length / itemsPerPage);

  // Pagination Logic for Applications
  const indexOfLastApp = currentAppsPage * itemsPerPage;
  const indexOfFirstApp = indexOfLastApp - itemsPerPage;
  const currentApps = applications.slice(indexOfFirstApp, indexOfLastApp);
  const totalAppsPages = Math.ceil(applications.length / itemsPerPage);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const result = await upsertCareer(formData);
    
    if (result.success) {
      showNotification('success', editingCareer ? 'Job post updated!' : 'Job post created!');
      setIsModalOpen(false);
      setEditingCareer(null);
      const data = await getCareers();
      setCareers(data);
    } else {
      showNotification('error', result.error || 'Failed to save job opening.');
    }
  };

  const handleDeleteCareer = async () => {
    if (careerToDelete === null) return;
    const result = await deleteCareer(careerToDelete);
    if (result.success) {
      showNotification('success', 'Job opening deleted successfully.');
      const data = await getCareers();
      setCareers(data);
    } else {
      showNotification('error', 'Failed to delete job opening.');
    }
    setCareerToDelete(null);
  };

  const handleDeleteApp = async () => {
    if (appToDelete === null) return;
    const result = await deleteApplication(appToDelete);
    if (result.success) {
      showNotification('success', 'Job application removed successfully.');
      const appsData = await getApplications();
      setApplications(appsData);
    } else {
      showNotification('error', result.error || 'Failed to delete application.');
    }
    setAppToDelete(null);
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
      {/* Title */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Career Management</h1>
          <p className="text-gray-500 mt-1">Manage public vacancies and view candidate applications.</p>
        </div>
        {activeTab === 'openings' && (
          <button 
            onClick={() => { setEditingCareer(null); setIsModalOpen(true); }}
            className="flex items-center gap-2 bg-[#ff9900] text-white px-6 py-2.5 rounded-lg font-bold hover:bg-black transition-all shadow-lg shadow-orange-150"
          >
            <Plus size={20} />
            Add New Job
          </button>
        )}
      </div>

      {/* Luxury Navigation Tabs */}
      <div className="flex border-b border-gray-200">
        <button
          onClick={() => setActiveTab('openings')}
          className={`px-6 py-3 font-bold text-sm transition-all border-b-2 -mb-[2px] ${
            activeTab === 'openings'
              ? 'border-[#ff9900] text-black'
              : 'border-transparent text-gray-400 hover:text-gray-600'
          }`}
        >
          Job Openings ({careers.length})
        </button>
        <button
          onClick={() => setActiveTab('applications')}
          className={`px-6 py-3 font-bold text-sm transition-all border-b-2 -mb-[2px] ${
            activeTab === 'applications'
              ? 'border-[#ff9900] text-black'
              : 'border-transparent text-gray-400 hover:text-gray-600'
          }`}
        >
          Candidate Applications ({applications.length})
        </button>
      </div>

      {/* Tab Contents: Job Openings */}
      {activeTab === 'openings' && (
        <div className="grid grid-cols-1 gap-4">
          {currentOpenings.map((career) => (
            <div 
              key={career.id} 
              className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col sm:flex-row justify-between items-start gap-4 hover:shadow-md transition-shadow duration-300"
            >
              <div className="space-y-2 w-full">
                <div className="flex flex-wrap items-center gap-3">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900">{career.title}</h3>
                  <span className={`px-2.5 py-1 rounded-full text-xs font-bold ${
                    career.status === 'OPEN' ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'
                  }`}>
                    {career.status}
                  </span>
                </div>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed max-w-4xl break-words">{career.description}</p>
                
                {career.requirements && (
                  <div className="pt-2">
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Key Requirements:</p>
                    <ul className="list-disc list-inside text-xs text-gray-500 space-y-0.5 break-words">
                      {career.requirements.split('\n').filter(Boolean).slice(0, 3).map((req: string, i: number) => (
                        <li key={i} className="break-all">{req}</li>
                      ))}
                    </ul>
                  </div>
                )}
                
                <div className="text-[11px] text-gray-400 font-medium flex items-center gap-1.5 pt-1">
                  <Calendar size={12} />
                  Created on {new Date(career.createdAt).toLocaleDateString()}
                </div>
              </div>
              <div className="flex gap-2 w-full sm:w-auto justify-end border-t sm:border-t-0 pt-3 sm:pt-0 flex-shrink-0">
                <button 
                  onClick={() => { setEditingCareer(career); setIsModalOpen(true); }}
                  className="p-2.5 text-[#ff9900] hover:bg-orange-50 rounded-xl transition-all"
                  title="Edit details"
                >
                  <Edit2 size={18} />
                </button>
                <button 
                  onClick={() => setCareerToDelete(career.id)}
                  className="p-2.5 text-red-500 hover:bg-red-50 rounded-xl transition-all"
                  title="Delete post"
                >
                  <Trash2 size={18} />
                </button>
              </div>
            </div>
          ))}

          {/* Openings Pagination */}
          {totalOpeningsPages > 1 && (
            <div className="flex justify-center items-center gap-2 mt-8">
              <button
                onClick={() => setCurrentOpeningsPage(prev => Math.max(prev - 1, 1))}
                disabled={currentOpeningsPage === 1}
                className="p-2.5 rounded-xl border border-gray-200 text-gray-400 hover:text-[#ff9900] disabled:opacity-30 disabled:cursor-not-allowed transition-all hover:bg-white bg-gray-50"
              >
                <ChevronLeft size={20} />
              </button>
              <div className="flex items-center gap-1.5">
                {Array.from({ length: totalOpeningsPages }).map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentOpeningsPage(i + 1)}
                    className={`w-10 h-10 rounded-xl font-bold transition-all ${
                      currentOpeningsPage === i + 1
                        ? 'bg-[#ff9900] text-white shadow-lg shadow-orange-100'
                        : 'text-gray-400 hover:text-black hover:bg-white bg-gray-50 border border-transparent'
                    }`}
                  >
                    {i + 1}
                  </button>
                ))}
              </div>
              <button
                onClick={() => setCurrentOpeningsPage(prev => Math.min(prev + 1, totalOpeningsPages))}
                disabled={currentOpeningsPage === totalOpeningsPages}
                className="p-2.5 rounded-xl border border-gray-200 text-gray-400 hover:text-[#ff9900] disabled:opacity-30 disabled:cursor-not-allowed transition-all hover:bg-white bg-gray-50"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          )}
          {careers.length === 0 && (
            <div className="text-center py-16 bg-white rounded-2xl border border-gray-100 text-gray-500 shadow-sm">
              <Briefcase className="w-12 h-12 text-gray-300 mx-auto mb-3" />
              <h3 className="font-bold text-gray-800 text-lg mb-1">No vacancies listed</h3>
              <p className="text-sm text-gray-500 mb-4">Click "Add New Job" to post an opening.</p>
            </div>
          )}
        </div>
      )}

      {/* Tab Contents: Candidate Applications */}
      {activeTab === 'applications' && (
        <div className="grid grid-cols-1 gap-6">
          {currentApps.map((app) => (
            <div 
              key={app.id} 
              className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden flex flex-col md:flex-row md:items-stretch"
            >
              {/* Profile Bar (Left column) */}
              <div className="p-6 md:p-8 bg-gray-50/50 border-b md:border-b-0 md:border-r border-gray-100 flex flex-col justify-center min-w-[240px] md:w-1/3">
                <div className="flex items-center gap-3.5 mb-4">
                  <div className="w-12 h-12 bg-orange-100 text-[#ff9900] rounded-xl flex items-center justify-center">
                    <User size={22} />
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-bold text-gray-900 leading-tight text-lg truncate">{app.name}</h3>
                    <p className="text-xs font-semibold text-[#ff9900] mt-0.5">{app.position}</p>
                  </div>
                </div>

                <div className="space-y-2.5 text-sm text-gray-500">
                  <div className="flex items-center gap-2 truncate">
                    <Mail size={15} className="text-gray-400" />
                    <a href={`mailto:${app.email}`} className="hover:text-[#ff9900] transition-colors font-medium">{app.email}</a>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone size={15} className="text-gray-400" />
                    <a href={`tel:${app.phone}`} className="hover:text-[#ff9900] transition-colors font-medium">{app.phone}</a>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-gray-400 font-medium">
                    <Calendar size={15} className="text-gray-400" />
                    Applied {new Date(app.createdAt).toLocaleDateString()}
                  </div>
                </div>
              </div>

              {/* Message & Document (Right Column) */}
              <div className="p-6 md:p-8 flex-1 flex flex-col justify-between gap-6">
                <div>
                  <h4 className="text-xs font-extrabold text-gray-400 uppercase tracking-wider mb-2">Message / Intro:</h4>
                  <p className="text-gray-600 text-sm leading-relaxed whitespace-pre-wrap italic break-words">
                    {app.message ? `"${app.message}"` : "Applicant left no custom message details."}
                  </p>
                </div>

                {/* Resume Download panel */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-gray-50">
                  <div className="flex items-center gap-2.5">
                    <FileText className="text-red-500" size={24} />
                    <div>
                      <p className="text-xs text-gray-400 font-semibold uppercase tracking-wider">Candidate Resume</p>
                      <p className="text-sm font-bold text-gray-700 truncate max-w-xs">{app.resumeUrl.split('/').pop()}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 w-full sm:w-auto">
                    <a 
                      href={app.resumeUrl} 
                      download
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 sm:flex-none flex items-center justify-center gap-2 bg-gray-900 text-white px-5 py-2.5 rounded-xl text-xs font-bold hover:bg-black transition-all shadow-sm"
                    >
                      <Download size={14} />
                      View / Download Resume
                    </a>
                    <button 
                      onClick={() => setAppToDelete(app.id)}
                      className="p-2.5 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-xl transition-all"
                      title="Remove applicant record"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Applications Pagination */}
          {totalAppsPages > 1 && (
            <div className="flex justify-center items-center gap-2 mt-8">
              <button
                onClick={() => setCurrentAppsPage(prev => Math.max(prev - 1, 1))}
                disabled={currentAppsPage === 1}
                className="p-2.5 rounded-xl border border-gray-200 text-gray-400 hover:text-[#ff9900] disabled:opacity-30 disabled:cursor-not-allowed transition-all hover:bg-white bg-gray-50"
              >
                <ChevronLeft size={20} />
              </button>
              <div className="flex items-center gap-1.5">
                {Array.from({ length: totalAppsPages }).map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentAppsPage(i + 1)}
                    className={`w-10 h-10 rounded-xl font-bold transition-all ${
                      currentAppsPage === i + 1
                        ? 'bg-[#ff9900] text-white shadow-lg shadow-orange-100'
                        : 'text-gray-400 hover:text-black hover:bg-white bg-gray-50 border border-transparent'
                    }`}
                  >
                    {i + 1}
                  </button>
                ))}
              </div>
              <button
                onClick={() => setCurrentAppsPage(prev => Math.min(prev + 1, totalAppsPages))}
                disabled={currentAppsPage === totalAppsPages}
                className="p-2.5 rounded-xl border border-gray-200 text-gray-400 hover:text-[#ff9900] disabled:opacity-30 disabled:cursor-not-allowed transition-all hover:bg-white bg-gray-50"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          )}

          {applications.length === 0 && (
            <div className="text-center py-16 bg-white rounded-2xl border border-gray-100 text-gray-500 shadow-sm">
              <User className="w-12 h-12 text-gray-300 mx-auto mb-3" />
              <h3 className="font-bold text-gray-800 text-lg mb-1">No candidate applications</h3>
              <p className="text-sm text-gray-500">Applications submitted from '/apply-for-job' will appear here.</p>
            </div>
          )}
        </div>
      )}

      {/* Add/Edit Vacancy Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[100] p-4">
          <div className="bg-white rounded-3xl w-full max-w-2xl overflow-hidden shadow-2xl animate-in zoom-in-95 duration-200">
            <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-gray-50">
              <h2 className="text-xl font-bold text-gray-900">
                {editingCareer ? 'Edit Job Opening' : 'Add New Job Opening'}
              </h2>
              <button onClick={() => setIsModalOpen(false)} className="text-gray-400 hover:text-gray-600">
                <X size={24} />
              </button>
            </div>
            <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-5 max-h-[80vh] overflow-y-auto">
              {editingCareer && <input type="hidden" name="id" value={editingCareer.id} />}
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Job Title *</label>
                  <input 
                    name="title" 
                    required 
                    defaultValue={editingCareer?.title}
                    className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl focus:border-[#ff9900] outline-none"
                    placeholder="e.g. SEO Executive"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Post Name</label>
                  <input 
                    name="post"
                    defaultValue={editingCareer?.post}
                    className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl focus:border-[#ff9900] outline-none"
                    placeholder="e.g. SEO (Search Engine Optimization)"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">No. of Vacancies</label>
                  <input 
                    name="vacancies"
                    defaultValue={editingCareer?.vacancies}
                    className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl focus:border-[#ff9900] outline-none"
                    placeholder="e.g. 2"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Experience Required</label>
                  <input 
                    name="experience"
                    defaultValue={editingCareer?.experience}
                    className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl focus:border-[#ff9900] outline-none"
                    placeholder="e.g. 0-3 years"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Status</label>
                  <select 
                    name="status" 
                    defaultValue={editingCareer?.status || 'OPEN'}
                    className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl focus:border-[#ff9900] outline-none"
                  >
                    <option value="OPEN">Open (Accepting Submissions)</option>
                    <option value="CLOSED">Closed (Archived)</option>
                  </select>
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Job Description (One point per line)</label>
                <textarea 
                  name="description" 
                  rows={5} 
                  required
                  defaultValue={editingCareer?.description}
                  className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl focus:border-[#ff9900] outline-none resize-y"
                  placeholder="Knowledge of SEO on-page & off page...&#10;Must be able to perform all off-page tasks...&#10;Good knowledge of meta tags, sitemap..."
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Required Skills (One per line)</label>
                <textarea 
                  name="requirements" 
                  rows={4} 
                  required
                  defaultValue={editingCareer?.requirements}
                  className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl focus:border-[#ff9900] outline-none resize-y"
                  placeholder="Excellent command of English&#10;Creative writing ability&#10;Good knowledge of MS-Word"
                />
              </div>

              <div className="flex justify-end gap-3 pt-4 border-t border-gray-100">
                <button 
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-6 py-2.5 border border-gray-200 rounded-xl font-bold text-gray-600 hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button 
                  type="submit"
                  className="flex items-center gap-2 bg-[#ff9900] text-white px-8 py-2.5 rounded-xl font-bold hover:bg-black transition-all"
                >
                  <Save size={18} />
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Confirmation Modals */}
      <ConfirmModal 
        isOpen={careerToDelete !== null}
        title="Delete Job opening?"
        message="Are you sure you want to delete this vacancy? Candidates will no longer be able to select it as an option when submitting resumes."
        onConfirm={handleDeleteCareer}
        onCancel={() => setCareerToDelete(null)}
        confirmText="Yes, Delete Job"
      />

      <ConfirmModal 
        isOpen={appToDelete !== null}
        title="Delete Application?"
        message="Are you sure you want to delete this candidate application? This will permanently remove their details and attached resume from the system."
        onConfirm={handleDeleteApp}
        onCancel={() => setAppToDelete(null)}
        confirmText="Yes, Remove Candidate"
      />
    </div>
  );
}
