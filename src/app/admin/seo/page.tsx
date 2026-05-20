'use client';

import React, { useState, useEffect } from 'react';
import { updateSEOConfig, getSEOConfig, syncDatabase } from '@/app/actions/seo';
import { getPageSEOs, updatePageSEO, deletePageSEO } from '@/app/actions/pageSeo';
import { Save, AlertCircle, CheckCircle2, Globe, Plus, Trash2, Edit2, Layout, Settings, Database, RefreshCw, X } from 'lucide-react';
import { useNotification } from '@/components/NotificationContext';
import ConfirmModal from '@/components/ConfirmModal';

export default function SEOPage() {
  const { showNotification } = useNotification();
  const [activeTab, setActiveTab] = useState<'global' | 'pages'>('pages');
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [syncing, setSyncing] = useState(false);
  const [isEditingGlobal, setIsEditingGlobal] = useState(false);
  const [selectedRegion, setSelectedRegion] = useState<string>('global');

  // Page SEO state
  const [pageSeos, setPageSeos] = useState<any[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingSeo, setEditingSeo] = useState<any>(null);
  const [itemToDelete, setItemToDelete] = useState<number | null>(null);
  const [isSyncConfirmOpen, setIsSyncConfirmOpen] = useState(false);

  // Pagination & Search state
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [totalCount, setTotalCount] = useState(0);
  const limit = 10;

  const [config, setConfig] = useState({
    businessName: '',
    businessDescription: '',
    logoUrl: '',
    phone: '',
    email: '',
    streetAddress: '',
    city: '',
    state: '',
    postalCode: '',
    countryCode: '',
    latitude: '',
    longitude: '',
    socialLinks: '',
    googleAnalyticsId: '',
    googleTagManagerId: '',
    globalSchema: '',
    headerScripts: '',
    footerScripts: ''
  });

  useEffect(() => {
    loadData();
  }, []);

  async function loadRegionConfig(regionName: string) {
    setLoading(true);
    const data = await getSEOConfig(regionName);
    if (data) {
      setConfig({
        businessName: data.businessName || '',
        businessDescription: data.businessDescription || '',
        logoUrl: data.logoUrl || '',
        phone: data.phone || '',
        email: data.email || '',
        streetAddress: data.streetAddress || '',
        city: data.city || '',
        state: data.state || '',
        postalCode: data.postalCode || '',
        countryCode: data.countryCode || '',
        latitude: data.latitude || '',
        longitude: data.longitude || '',
        socialLinks: data.socialLinks || '',
        googleAnalyticsId: data.googleAnalyticsId || '',
        googleTagManagerId: data.googleTagManagerId || '',
        globalSchema: data.globalSchema || '',
        headerScripts: data.headerScripts || '',
        footerScripts: data.footerScripts || ''
      });
    } else {
      setConfig({
        businessName: '',
        businessDescription: '',
        logoUrl: '',
        phone: '',
        email: '',
        streetAddress: '',
        city: '',
        state: '',
        postalCode: '',
        countryCode: '',
        latitude: '',
        longitude: '',
        socialLinks: '',
        googleAnalyticsId: '',
        googleTagManagerId: '',
        globalSchema: '',
        headerScripts: '',
        footerScripts: ''
      });
    }
    setLoading(false);
  }

  async function loadData() {
    setLoading(true);
    const [data, seoResult] = await Promise.all([
      getSEOConfig(selectedRegion),
      getPageSEOs(currentPage, limit, searchTerm)
    ]);

    if (data) {
      setConfig({
        businessName: data.businessName || '',
        businessDescription: data.businessDescription || '',
        logoUrl: data.logoUrl || '',
        phone: data.phone || '',
        email: data.email || '',
        streetAddress: data.streetAddress || '',
        city: data.city || '',
        state: data.state || '',
        postalCode: data.postalCode || '',
        countryCode: data.countryCode || '',
        latitude: data.latitude || '',
        longitude: data.longitude || '',
        socialLinks: data.socialLinks || '',
        googleAnalyticsId: data.googleAnalyticsId || '',
        googleTagManagerId: data.googleTagManagerId || '',
        globalSchema: data.globalSchema || '',
        headerScripts: data.headerScripts || '',
        footerScripts: data.footerScripts || ''
      });
    }

    if (seoResult.success) {
      setPageSeos(seoResult.data);
      setTotalPages(seoResult.totalPages);
      setTotalCount(seoResult.totalCount);
    }
    setLoading(false);
  }

  const handleRegionChange = async (regionName: string) => {
    setSelectedRegion(regionName);
    await loadRegionConfig(regionName);
  };

  // Reload pages when pagination or search changes
  useEffect(() => {
    if (!loading) {
      const reloadPages = async () => {
        const seoResult = await getPageSEOs(currentPage, limit, searchTerm);
        if (seoResult.success) {
          setPageSeos(seoResult.data);
          setTotalPages(seoResult.totalPages);
          setTotalCount(seoResult.totalCount);
        }
      };
      reloadPages();
    }
  }, [currentPage, searchTerm]);

  const handleSync = async () => {
    setSyncing(true);
    setIsSyncConfirmOpen(false);
    const result = await syncDatabase();
    if (result.success) {
      showNotification('success', 'Database synchronized successfully!');
      loadData();
    } else {
      showNotification('error', result.error || 'Sync failed');
    }
    setSyncing(false);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSaving(true);
    const formData = new FormData(e.currentTarget);
    formData.append('region', selectedRegion);
    const result = await updateSEOConfig(formData);

    if (result.success) {
      showNotification('success', `Global SEO configuration for ${selectedRegion} updated!`);
      setIsEditingGlobal(false);
      loadRegionConfig(selectedRegion);
    } else {
      showNotification('error', result.error || 'Failed to update configuration');
    }
    setSaving(false);
  };

  const handlePageSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSaving(true);
    const formData = new FormData(e.currentTarget);
    const result = await updatePageSEO(formData);
    if (result.success) {
      setIsModalOpen(false);
      loadData();
      showNotification('success', 'Page SEO settings saved!');
    } else {
      showNotification('error', result.error || 'Failed to update page SEO');
    }
    setSaving(false);
  };

  const handlePageDelete = async (id: number) => {
    const result = await deletePageSEO(id);
    if (result.success) {
      showNotification('success', 'Page SEO entry removed successfully');
      loadData();
    } else {
      showNotification('error', 'Failed to delete entry');
    }
    setItemToDelete(null);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setConfig(prev => ({ ...prev, [name]: value }));
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
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">SEO Management</h1>
          <p className="text-gray-500 mt-1">Configure global schema and individual page optimization.</p>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={() => setIsSyncConfirmOpen(true)}
            disabled={syncing}
            className="flex items-center gap-2 bg-gray-100 text-gray-600 px-4 py-2.5 rounded-lg font-bold hover:bg-gray-200 transition-all border border-gray-200 disabled:opacity-50"
            title="Fix missing tables or sync issues"
          >
            {syncing ? <RefreshCw size={18} className="animate-spin" /> : <Database size={18} />}
            {syncing ? 'Syncing...' : 'Repair Database'}
          </button>
          {activeTab === 'pages' && (
            <button
              onClick={() => { setEditingSeo(null); setIsModalOpen(true); }}
              className="flex items-center gap-2 bg-[#ff9900] text-white px-6 py-2.5 rounded-lg font-bold hover:bg-black transition-all"
            >
              <Plus size={20} />
              Add Page SEO
            </button>
          )}
          {activeTab === 'global' && !isEditingGlobal && (
            <button
              onClick={() => setIsEditingGlobal(true)}
              className="flex items-center gap-2 bg-[#ff9900] text-white px-6 py-2.5 rounded-lg font-bold hover:bg-black transition-all"
            >
              <Edit2 size={18} />
              Edit Global SEO
            </button>
          )}
        </div>
      </div>

      {/* Tab Switcher */}
      <div className="flex gap-2 p-1 bg-gray-100 rounded-xl w-fit">
        <button
          onClick={() => setActiveTab('pages')}
          className={`flex items-center gap-2 px-6 py-2.5 rounded-lg font-bold transition-all ${activeTab === 'pages' ? 'bg-white text-[#ff9900] shadow-sm' : 'text-gray-500 hover:text-gray-700'
            }`}
        >
          <Layout size={18} />
          Page-wise SEO
        </button>
        <button
          onClick={() => setActiveTab('global')}
          className={`flex items-center gap-2 px-6 py-2.5 rounded-lg font-bold transition-all ${activeTab === 'global' ? 'bg-white text-[#ff9900] shadow-sm' : 'text-gray-500 hover:text-gray-700'
            }`}
        >
          <Settings size={18} />
          Global SEO
        </button>
      </div>

      {activeTab === 'global' ? (
        <div className="space-y-6">
          {/* Target SEO Region Panel */}
          <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3.5">
              <div className="p-3.5 bg-orange-50 text-[#ff9900] rounded-2xl flex items-center justify-center">
                <Globe size={24} />
              </div>
              <div>
                <h2 className="text-lg font-bold text-gray-900 leading-snug">Target SEO Region</h2>
                <p className="text-xs text-gray-500 mt-0.5">Configure global metadata, schemas, and tracking specific to a region.</p>
              </div>
            </div>
            <div className="w-full sm:w-72">
              <select
                value={selectedRegion}
                onChange={(e) => handleRegionChange(e.target.value)}
                disabled={isEditingGlobal || saving}
                className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl font-bold text-gray-800 focus:ring-2 focus:ring-[#ff9900] outline-none disabled:opacity-50 transition-all cursor-pointer"
              >
                <option value="global">Global / India (Default)</option>
                <option value="canada">Canada (/canada)</option>
                <option value="australia">Australia (/australia)</option>
              </select>
            </div>
          </div>

          {!isEditingGlobal ? (
            /* ── READ-ONLY SUMMARY CARD ── */
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5">

            {/* Business Info */}
            <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 space-y-4">
              <div className="flex items-center gap-2 mb-1">
                <div className="w-7 h-7 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center font-bold text-sm">1</div>
                <h3 className="font-bold text-gray-800">Business Schema</h3>
              </div>
              {([
                ['Business Name', config.businessName],
                ['Phone', config.phone],
                ['Email', config.email],
                ['City', config.city],
                ['State', config.state],
                ['Country', config.countryCode],
                ['Postal Code', config.postalCode],
              ] as [string, string][]).map(([label, val]) => (
                <div key={label} className="flex flex-col">
                  <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">{label}</span>
                  <span className="text-sm text-gray-800 font-medium mt-0.5 break-all">{val || <span className="text-gray-300 italic">Not set</span>}</span>
                </div>
              ))}
              {config.streetAddress && (
                <div className="flex flex-col">
                  <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Address</span>
                  <span className="text-sm text-gray-800 font-medium mt-0.5">{config.streetAddress}</span>
                </div>
              )}
            </div>

            {/* Tracking & Scripts */}
            <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 space-y-4">
              <div className="flex items-center gap-2 mb-1">
                <div className="w-7 h-7 bg-green-50 text-green-600 rounded-lg flex items-center justify-center font-bold text-sm">2</div>
                <h3 className="font-bold text-gray-800">Tracking &amp; Analytics</h3>
              </div>
              {([
                ['GA4 ID', config.googleAnalyticsId],
                ['GTM ID', config.googleTagManagerId],
              ] as [string, string][]).map(([label, val]) => (
                <div key={label} className="flex flex-col">
                  <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">{label}</span>
                  <span className="text-sm font-mono text-gray-800 mt-0.5">{val || <span className="text-gray-300 italic">Not set</span>}</span>
                </div>
              ))}
              <div className="flex flex-col">
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Header Scripts</span>
                <span className={`text-xs mt-0.5 px-2 py-0.5 rounded font-bold w-fit ${config.headerScripts ? 'bg-green-50 text-green-700' : 'bg-gray-50 text-gray-400'}`}>
                  {config.headerScripts ? 'Configured' : 'Empty'}
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Footer Scripts</span>
                <span className={`text-xs mt-0.5 px-2 py-0.5 rounded font-bold w-fit ${config.footerScripts ? 'bg-green-50 text-green-700' : 'bg-gray-50 text-gray-400'}`}>
                  {config.footerScripts ? 'Configured' : 'Empty'}
                </span>
              </div>
            </div>

            {/* Schema & Social */}
            <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 space-y-4">
              <div className="flex items-center gap-2 mb-1">
                <div className="w-7 h-7 bg-orange-50 text-[#ff9900] rounded-lg flex items-center justify-center font-bold text-sm">3</div>
                <h3 className="font-bold text-gray-800">Schema &amp; Social</h3>
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Global Schema</span>
                <span className={`text-xs mt-0.5 px-2 py-0.5 rounded font-bold w-fit ${config.globalSchema ? 'bg-orange-50 text-orange-700' : 'bg-gray-50 text-gray-400'}`}>
                  {config.globalSchema ? 'Configured' : 'Empty'}
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Social Profiles</span>
                {config.socialLinks
                  ? config.socialLinks.split('\n').filter(Boolean).map((link, i) => (
                    <a key={i} href={link} target="_blank" rel="noopener noreferrer"
                      className="text-xs text-blue-500 hover:underline truncate mt-0.5">{link}</a>
                  ))
                  : <span className="text-gray-300 italic text-sm">Not set</span>}
              </div>
              {config.latitude && (
                <div className="flex flex-col">
                  <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Geo Coordinates</span>
                  <span className="text-sm font-mono text-gray-800 mt-0.5">{config.latitude}, {config.longitude}</span>
                </div>
              )}
            </div>

          </div>
        ) : (
          /* ── EDIT FORM ── */
          <div className="flex flex-col xl:flex-row gap-8">
            {/* Form Section */}
            <form onSubmit={handleSubmit} className="flex-1 space-y-6">
              {/* Structured Schema Section */}
              <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm space-y-6">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center font-bold">1</div>
                  <h2 className="text-xl font-bold text-gray-900">Business Schema Details</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-1">
                    <label className="text-sm font-bold text-gray-700">Business Name</label>
                    <input
                      name="businessName"
                      value={config.businessName}
                      onChange={handleChange}
                      className="w-full p-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#ff9900] outline-none"
                      placeholder="e.g. Flymedia Technology"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-sm font-bold text-gray-700">Logo URL</label>
                    <input
                      name="logoUrl"
                      value={config.logoUrl}
                      onChange={handleChange}
                      className="w-full p-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#ff9900] outline-none"
                      placeholder="https://example.com/logo.png"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-sm font-bold text-gray-700">Phone Number</label>
                    <input
                      name="phone"
                      value={config.phone}
                      onChange={handleChange}
                      className="w-full p-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#ff9900] outline-none"
                      placeholder="+91 98884 84310"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-sm font-bold text-gray-700">Email Address</label>
                    <input
                      name="email"
                      value={config.email}
                      onChange={handleChange}
                      className="w-full p-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#ff9900] outline-none"
                      placeholder="info@flymediatech.com"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-sm font-bold text-gray-700">Business Description</label>
                  <textarea
                    name="businessDescription"
                    rows={3}
                    value={config.businessDescription}
                    onChange={handleChange}
                    className="w-full p-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#ff9900] outline-none"
                    placeholder="Briefly describe your business for SEO..."
                  />
                </div>

                <div className="space-y-4">
                  <div className="space-y-1">
                    <label className="text-sm font-bold text-gray-700">Street Address</label>
                    <input
                      name="streetAddress"
                      value={config.streetAddress}
                      onChange={handleChange}
                      className="w-full p-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#ff9900] outline-none"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-sm font-bold text-gray-700">City</label>
                      <input
                        name="city"
                        value={config.city}
                        onChange={handleChange}
                        className="w-full p-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#ff9900] outline-none"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-sm font-bold text-gray-700">State</label>
                      <input
                        name="state"
                        value={config.state}
                        onChange={handleChange}
                        className="w-full p-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#ff9900] outline-none"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-sm font-bold text-gray-700">Postal Code</label>
                      <input
                        name="postalCode"
                        value={config.postalCode}
                        onChange={handleChange}
                        className="w-full p-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#ff9900] outline-none"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-sm font-bold text-gray-700">Country Code</label>
                      <input
                        name="countryCode"
                        value={config.countryCode}
                        onChange={handleChange}
                        className="w-full p-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#ff9900] outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-sm font-bold text-gray-700">Latitude</label>
                      <input
                        name="latitude"
                        value={config.latitude}
                        onChange={handleChange}
                        className="w-full p-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#ff9900] outline-none"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-sm font-bold text-gray-700">Longitude</label>
                      <input
                        name="longitude"
                        value={config.longitude}
                        onChange={handleChange}
                        className="w-full p-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#ff9900] outline-none"
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-sm font-bold text-gray-700">
                    Social Profile URLs <span className="text-[10px] text-[#ff9900] font-normal ml-2">(Press Enter to add new)</span>
                  </label>
                  <textarea
                    name="socialLinks"
                    rows={4}
                    value={config.socialLinks}
                    onChange={handleChange}
                    className="w-full p-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#ff9900] outline-none"
                    placeholder="https://facebook.com/flymediatech&#10;https://instagram.com/flymedia_technology"
                  />
                </div>
              </div>

              {/* Google Tracking Section */}
              <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm space-y-6">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 bg-green-50 text-green-600 rounded-lg flex items-center justify-center font-bold">2</div>
                  <h2 className="text-xl font-bold text-gray-900">Google Tracking & Analytics</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-1">
                    <label className="text-sm font-bold text-gray-700">Google Analytics ID (GA4)</label>
                    <input
                      name="googleAnalyticsId"
                      value={config.googleAnalyticsId}
                      onChange={handleChange}
                      className="w-full p-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#ff9900] outline-none"
                      placeholder="e.g. G-XXXXXXX"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-sm font-bold text-gray-700">Google Tag Manager ID</label>
                    <input
                      name="googleTagManagerId"
                      value={config.googleTagManagerId}
                      onChange={handleChange}
                      className="w-full p-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#ff9900] outline-none"
                      placeholder="e.g. GTM-XXXXXXX"
                    />
                  </div>
                </div>
              </div>

              {/* Custom Schema & Scripts */}
              <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm space-y-6">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 bg-orange-50 text-[#ff9900] rounded-lg flex items-center justify-center font-bold">3</div>
                  <h2 className="text-xl font-bold text-gray-900">Custom Schema & Scripts</h2>
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-bold text-gray-700">
                    Custom Global Schema (JSON-LD Fallback)
                  </label>
                  <textarea
                    name="globalSchema"
                    rows={8}
                    value={config.globalSchema}
                    onChange={handleChange}
                    className="w-full p-4 bg-gray-50 border border-gray-200 rounded-lg font-mono text-sm focus:ring-2 focus:ring-[#ff9900] outline-none"
                  />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="block text-sm font-bold text-gray-700">Header Scripts</label>
                    <textarea
                      name="headerScripts"
                      rows={6}
                      value={config.headerScripts}
                      onChange={handleChange}
                      className="w-full p-4 bg-gray-50 border border-gray-200 rounded-lg font-mono text-sm focus:ring-2 focus:ring-[#ff9900] outline-none"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="block text-sm font-bold text-gray-700">Footer Scripts</label>
                    <textarea
                      name="footerScripts"
                      rows={6}
                      value={config.footerScripts}
                      onChange={handleChange}
                      className="w-full p-4 bg-gray-50 border border-gray-200 rounded-lg font-mono text-sm focus:ring-2 focus:ring-[#ff9900] outline-none"
                    />
                  </div>
                </div>
              </div>

              <div className="flex justify-end gap-3 sticky bottom-4 z-10">
                <button
                  type="button"
                  onClick={() => setIsEditingGlobal(false)}
                  className="flex items-center gap-2 bg-white border border-gray-200 text-gray-600 px-8 py-4 rounded-2xl font-bold hover:bg-gray-50 transition-all"
                >
                  <X size={20} />
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={saving}
                  className="flex items-center gap-2 bg-[#ff9900] text-white px-10 py-4 rounded-2xl font-bold hover:bg-black transition-all shadow-xl shadow-orange-200 active:scale-95 disabled:opacity-50"
                >
                  {saving ? (
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <Save size={22} />
                  )}
                  Save Configuration
                </button>
              </div>
            </form>

            {/* Schema Preview Sidebar */}
            <aside className="w-full xl:w-96 xl:sticky xl:top-8 h-fit self-start">
              <div className="bg-gray-900 p-6 rounded-2xl shadow-xl border border-gray-800">
                <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                  <div className="w-2 h-6 bg-[#ff9900] rounded-full" />
                  JSON-LD Schema Preview
                </h3>

                <div className="relative group">
                  <div className="absolute -top-3 right-4 px-2 py-1 bg-gray-800 text-gray-400 text-[10px] font-bold rounded border border-gray-700">
                    APPLICATION/LD+JSON
                  </div>
                  <pre className="text-[11px] font-mono text-blue-300 overflow-x-auto p-4 bg-black/50 rounded-xl border border-gray-800 max-h-[70vh] custom-scrollbar">
                    {JSON.stringify({
                      "@context": "https://schema.org",
                      "@type": "Organization",
                      "name": config.businessName || "Pending...",
                      "description": config.businessDescription || "Pending...",
                      "url": "https://yourdomain.com",
                      "logo": config.logoUrl || "Pending...",
                      "contactPoint": {
                        "@type": "ContactPoint",
                        "telephone": config.phone || "Pending...",
                        "contactType": "customer service",
                        "email": config.email || "Pending..."
                      },
                      "address": {
                        "@type": "PostalAddress",
                        "streetAddress": config.streetAddress || "Pending...",
                        "addressLocality": config.city || "Pending...",
                        "addressRegion": config.state || "Pending...",
                        "postalCode": config.postalCode || "Pending...",
                        "addressCountry": config.countryCode || "Pending..."
                      },
                      "geo": {
                        "@type": "GeoCoordinates",
                        "latitude": config.latitude || "0.00",
                        "longitude": config.longitude || "0.00"
                      },
                      "sameAs": config.socialLinks
                        ? config.socialLinks.split('\n').filter(Boolean)
                        : ["https://facebook.com/your-brand", "https://instagram.com/your-brand"]
                    }, null, 2)}
                  </pre>
                </div>

                <div className="mt-6 p-4 bg-orange-900/20 border border-orange-900/30 rounded-xl">
                  <p className="text-xs text-orange-200 leading-relaxed">
                    <strong className="text-[#ff9900]">Note:</strong> This is a live representation of the structured data that will be injected into your website header.
                  </p>
                </div>
              </div>
            </aside>
          </div>
          )}
        </div>
      ) : (
        /* Page-wise SEO Section */
        <div className="space-y-6">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-2">
            <div className="relative w-full md:w-96">
              <input
                type="text"
                placeholder="Search by URL or Title..."
                value={searchTerm}
                onChange={(e) => { setSearchTerm(e.target.value); setCurrentPage(1); }}
                className="w-full pl-10 pr-4 py-2.5 bg-white border border-gray-200 rounded-xl focus:border-[#ff9900] outline-none transition-all"
              />
              <Globe className="absolute left-3 top-3 text-gray-400" size={18} />
            </div>
            <div className="text-sm text-gray-500 font-bold">
              Total: {totalCount} entries
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4">
            {pageSeos.length === 0 ? (
              <div className="bg-white p-12 text-center rounded-xl border border-dashed border-gray-200">
                <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-4 text-gray-300">
                  <Layout size={32} />
                </div>
                <h3 className="text-lg font-bold text-gray-900">No Page SEO Configured</h3>
                <p className="text-gray-500 max-w-sm mx-auto mt-2">Start optimizing individual pages by adding their URLs and custom metadata.</p>
                <button
                  onClick={() => { setEditingSeo(null); setIsModalOpen(true); }}
                  className="mt-6 text-[#ff9900] font-bold hover:underline"
                >
                  Add your first page
                </button>
              </div>
            ) : (
              pageSeos.map((seo) => (
                <div key={seo.id} className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                  <div className="space-y-1 flex-1">
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] bg-blue-50 text-blue-600 px-2 py-0.5 rounded font-bold">URL</span>
                      <code className="text-sm font-mono font-bold text-gray-900">{seo.pageUrl}</code>
                    </div>
                    <h3 className="text-lg font-bold text-gray-800">{seo.title}</h3>
                    <p className="text-sm text-gray-500 line-clamp-1">{seo.description}</p>
                  </div>
                  <div className="flex gap-2 w-full md:w-auto justify-end border-t md:border-t-0 pt-4 md:pt-0">
                    <button
                      onClick={() => { setEditingSeo(seo); setIsModalOpen(true); }}
                      className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                    >
                      <Edit2 size={18} />
                    </button>
                    <button
                      onClick={() => setItemToDelete(seo.id)}
                      className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Pagination UI */}
          {totalPages > 1 && (
            <div className="flex items-center justify-center gap-2 mt-8">
              <button
                onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                disabled={currentPage === 1}
                className="px-4 py-2 bg-white border border-gray-200 rounded-lg font-bold text-gray-600 disabled:opacity-50 hover:bg-gray-50 transition-all"
              >
                Previous
              </button>

              <div className="flex items-center gap-1">
                {[...Array(totalPages)].map((_, i) => {
                  const pg = i + 1;
                  // Only show current, first, last, and neighbors
                  if (pg === 1 || pg === totalPages || (pg >= currentPage - 1 && pg <= currentPage + 1)) {
                    return (
                      <button
                        key={pg}
                        onClick={() => setCurrentPage(pg)}
                        className={`w-10 h-10 rounded-lg font-bold transition-all ${currentPage === pg
                            ? 'bg-[#ff9900] text-white shadow-md shadow-orange-100'
                            : 'bg-white border border-gray-200 text-gray-600 hover:bg-gray-50'
                          }`}
                      >
                        {pg}
                      </button>
                    );
                  } else if (pg === currentPage - 2 || pg === currentPage + 2) {
                    return <span key={pg} className="px-1 text-gray-400">...</span>;
                  }
                  return null;
                })}
              </div>

              <button
                onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                disabled={currentPage === totalPages}
                className="px-4 py-2 bg-white border border-gray-200 rounded-lg font-bold text-gray-600 disabled:opacity-50 hover:bg-gray-50 transition-all"
              >
                Next
              </button>
            </div>
          )}
        </div>
      )}

      {/* Page SEO Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[100] p-4">
          <div className="bg-white rounded-2xl w-full max-w-2xl overflow-hidden shadow-2xl animate-in zoom-in-95 duration-300">
            <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-gray-50">
              <h2 className="text-xl font-bold text-gray-900">
                {editingSeo ? 'Edit Page SEO' : 'Add New Page SEO'}
              </h2>
              <button onClick={() => setIsModalOpen(false)} className="text-gray-400 hover:text-gray-600 transition-colors">
                <X size={24} />
              </button>
            </div>
            <form onSubmit={handlePageSubmit} className="p-6 space-y-6 max-h-[80vh] overflow-y-auto">
              {editingSeo && <input type="hidden" name="id" value={editingSeo.id} />}

              <div className="space-y-4">
                <div className="space-y-1">
                  <label className="text-sm font-bold text-gray-700">Page URL Path</label>
                  <input
                    name="pageUrl"
                    defaultValue={editingSeo?.pageUrl || '/'}
                    required
                    className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#ff9900] outline-none"
                    placeholder="e.g. /services/web-design"
                  />
                  <p className="text-[10px] text-gray-400">Use "/" for homepage. Always start with a slash.</p>
                </div>

                <div className="space-y-1">
                  <label className="text-sm font-bold text-gray-700">SEO Title</label>
                  <input
                    name="title"
                    defaultValue={editingSeo?.title || ''}
                    required
                    className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#ff9900] outline-none"
                    placeholder="Focus keywords in first 60 chars..."
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-sm font-bold text-gray-700">Meta Description</label>
                  <textarea
                    name="description"
                    defaultValue={editingSeo?.description || ''}
                    rows={3}
                    className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#ff9900] outline-none"
                    placeholder="Short summary for search results (max 160 chars)..."
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-sm font-bold text-gray-700">Keywords (Comma separated)</label>
                  <input
                    name="keywords"
                    defaultValue={editingSeo?.keywords || ''}
                    className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#ff9900] outline-none"
                    placeholder="web design, agency, digital marketing"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-sm font-bold text-gray-700">Canonical URL</label>
                  <input
                    name="canonicalUrl"
                    defaultValue={editingSeo?.canonicalUrl || ''}
                    className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#ff9900] outline-none"
                    placeholder="https://flymediatech.com/your-page"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-sm font-bold text-gray-700">Meta Robots</label>
                    <select
                      name="metaRobots"
                      defaultValue={editingSeo?.metaRobots || 'index, follow'}
                      className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#ff9900] outline-none"
                    >
                      <option value="index, follow">Index, Follow</option>
                      <option value="noindex, follow">Noindex, Follow</option>
                      <option value="index, nofollow">Index, Nofollow</option>
                      <option value="noindex, nofollow">Noindex, Nofollow</option>
                    </select>
                  </div>
                  <div className="space-y-1">
                    <label className="text-sm font-bold text-gray-700">Twitter Card</label>
                    <select
                      name="twitterCard"
                      defaultValue={editingSeo?.twitterCard || 'summary_large_image'}
                      className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#ff9900] outline-none"
                    >
                      <option value="summary">Summary</option>
                      <option value="summary_large_image">Summary Large Image</option>
                      <option value="app">App</option>
                      <option value="player">Player</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-sm font-bold text-gray-700">Custom Page Schema (Optional JSON-LD)</label>
                  <textarea
                    name="customSchema"
                    defaultValue={editingSeo?.customSchema || ''}
                    rows={4}
                    className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl font-mono text-xs focus:ring-2 focus:ring-[#ff9900] outline-none"
                    placeholder='{ "@type": "Product", ... }'
                  />
                </div>

                <div className="relative flex py-4 items-center">
                  <div className="flex-grow border-t border-gray-100"></div>
                  <span className="flex-shrink mx-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest">Social Media (Open Graph)</span>
                  <div className="flex-grow border-t border-gray-100"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-sm font-bold text-gray-700">OG Title</label>
                    <input
                      name="ogTitle"
                      defaultValue={editingSeo?.ogTitle || ''}
                      className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#ff9900] outline-none"
                      placeholder="Title for social shares"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-sm font-bold text-gray-700">OG Image URL</label>
                    <input
                      name="ogImage"
                      defaultValue={editingSeo?.ogImage || ''}
                      className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#ff9900] outline-none"
                      placeholder="https://.../og-image.jpg"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-sm font-bold text-gray-700">OG Description</label>
                  <textarea
                    name="ogDescription"
                    defaultValue={editingSeo?.ogDescription || ''}
                    rows={2}
                    className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#ff9900] outline-none"
                    placeholder="Brief summary for social sharing..."
                  />
                </div>
              </div>

              <div className="flex justify-end gap-3 pt-4 border-t border-gray-100">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-6 py-2.5 border border-gray-200 rounded-xl font-bold text-gray-600 hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={saving}
                  className="bg-[#ff9900] text-white px-8 py-2.5 rounded-xl font-bold hover:bg-black transition-all disabled:opacity-50"
                >
                  {saving ? 'Saving...' : 'Save Settings'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      <ConfirmModal
        isOpen={itemToDelete !== null}
        title="Delete Page SEO?"
        message="Are you sure you want to remove the SEO optimization for this page? This cannot be undone."
        onConfirm={() => itemToDelete && handlePageDelete(itemToDelete)}
        onCancel={() => setItemToDelete(null)}
        confirmText="Delete SEO"
      />

      {/* Sync Database Confirmation */}
      <ConfirmModal
        isOpen={isSyncConfirmOpen}
        title="Synchronize Database?"
        message="This will repair your MySQL tables and synchronize them with your latest code models. It is safe to run and will not delete your data."
        onConfirm={handleSync}
        onCancel={() => setIsSyncConfirmOpen(false)}
        confirmText="Start Sync"
        type="warning"
      />
    </div>
  );
}