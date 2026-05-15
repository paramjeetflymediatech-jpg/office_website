import React from 'react';
import Link from 'next/link';
import { 
  Users, 
  Mail, 
  Image as ImageIcon, 
  Briefcase,
  BookOpen,
  Globe,
  FileText,
  Plus
} from 'lucide-react';
import { ContactQuery, Portfolio, Career, Blog, Application } from '@/models';

export const dynamic = 'force-dynamic';

export default async function AdminDashboard() {
  let queriesCount = 0;
  let portfolioCount = 0;
  let jobsCount = 0;
  let blogsCount = 0;
  let appsCount = 0;

  try {
    [queriesCount, portfolioCount, jobsCount, blogsCount, appsCount] = await Promise.all([
      ContactQuery.count(),
      Portfolio.count(),
      Career.count(),
      Blog.count(),
      Application.count(),
    ]);
  } catch (error) {
    console.error("Failed to fetch dashboard stats:", error);
  }

  return (
    <div className="space-y-6 sm:space-y-8 animate-in fade-in-50 duration-500">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight">Admin Dashboard</h1>
          <p className="text-xs sm:text-sm text-gray-500 mt-1">Real-time database statistics and quick management links.</p>
        </div>
        <div className="flex flex-wrap items-center gap-2 sm:gap-3">
          <Link 
            href="/admin/blog/new" 
            className="flex items-center gap-2 bg-[#ff9900] text-white px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-bold hover:bg-black transition-all shadow-md shadow-orange-100"
          >
            <Plus size={16} />
            New Blog
          </Link>
          <Link 
            href="/admin/portfolio" 
            className="flex items-center gap-2 bg-gray-900 text-white px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-bold hover:bg-[#ff9900] transition-all shadow-md"
          >
            <Plus size={16} />
            Add Portfolio
          </Link>
        </div>
      </div>

      {/* Dynamic Statistics Grid - Optimized specifically for iPad Mini, iPad Air & Desktop */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-6">
        <StatCard 
          icon={<Mail className="text-blue-600" />} 
          label="Contact Queries" 
          value={queriesCount} 
          change="Live" 
          color="bg-blue-50"
        />
        <StatCard 
          icon={<ImageIcon className="text-purple-600" />} 
          label="Portfolio Items" 
          value={portfolioCount} 
          change="Live" 
          color="bg-purple-50"
        />
        <StatCard 
          icon={<Briefcase className="text-orange-600" />} 
          label="Open Job Roles" 
          value={jobsCount} 
          change="Live" 
          color="bg-orange-50"
        />
        <StatCard 
          icon={<FileText className="text-emerald-600" />} 
          label="Job Applications" 
          value={appsCount} 
          change="Live" 
          color="bg-emerald-50"
        />
        <StatCard 
          icon={<BookOpen className="text-pink-600" />} 
          label="Published Blogs" 
          value={blogsCount} 
          change="Live" 
          color="bg-pink-50"
        />
      </div>

      {/* Quick Management Links */}
      <div className="bg-white p-6 sm:p-8 rounded-2xl border border-gray-100 shadow-sm">
        <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
          <div className="w-2 h-6 bg-[#ff9900] rounded-full" />
          Quick Management Actions
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          <Link href="/admin/contact" className="group flex items-start gap-4 p-4 sm:p-5 border border-gray-100 rounded-2xl hover:border-blue-200 hover:bg-blue-50/50 transition-all text-left shadow-sm hover:shadow">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all shrink-0">
              <Mail size={20} />
            </div>
            <div>
              <div className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors text-sm sm:text-base">Check Messages</div>
              <div className="text-xs text-gray-500 mt-1 leading-relaxed">View client inquiries and lead submissions.</div>
            </div>
          </Link>

          <Link href="/admin/portfolio" className="group flex items-start gap-4 p-4 sm:p-5 border border-gray-100 rounded-2xl hover:border-purple-200 hover:bg-purple-50/50 transition-all text-left shadow-sm hover:shadow">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-purple-50 rounded-xl flex items-center justify-center text-purple-600 group-hover:bg-purple-600 group-hover:text-white transition-all shrink-0">
              <ImageIcon size={20} />
            </div>
            <div>
              <div className="font-bold text-gray-900 group-hover:text-purple-600 transition-colors text-sm sm:text-base">Portfolio Upload</div>
              <div className="text-xs text-gray-500 mt-1 leading-relaxed">Add case studies and client projects.</div>
            </div>
          </Link>

          <Link href="/admin/seo" className="group flex items-start gap-4 p-4 sm:p-5 border border-gray-100 rounded-2xl hover:border-orange-200 hover:bg-orange-50/50 transition-all text-left shadow-sm hover:shadow">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-orange-50 rounded-xl flex items-center justify-center text-[#ff9900] group-hover:bg-[#ff9900] group-hover:text-white transition-all shrink-0">
              <Globe size={20} />
            </div>
            <div>
              <div className="font-bold text-gray-900 group-hover:text-[#ff9900] transition-colors text-sm sm:text-base">SEO & Schema</div>
              <div className="text-xs text-gray-500 mt-1 leading-relaxed">Optimize route metadata and JSON-LD schema.</div>
            </div>
          </Link>

          <Link href="/admin/blog" className="group flex items-start gap-4 p-4 sm:p-5 border border-gray-100 rounded-2xl hover:border-pink-200 hover:bg-pink-50/50 transition-all text-left shadow-sm hover:shadow">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-pink-50 rounded-xl flex items-center justify-center text-pink-600 group-hover:bg-pink-600 group-hover:text-white transition-all shrink-0">
              <BookOpen size={20} />
            </div>
            <div>
              <div className="font-bold text-gray-900 group-hover:text-pink-600 transition-colors text-sm sm:text-base">Manage Blogs</div>
              <div className="text-xs text-gray-500 mt-1 leading-relaxed">Create and publish new industry insights.</div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

function StatCard({ icon, label, value, change, color }: any) {
  return (
    <div className="bg-white p-5 sm:p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all group">
      <div className="flex items-center justify-between mb-3 sm:mb-4">
        <div className={`w-10 h-10 sm:w-12 sm:h-12 ${color} rounded-xl flex items-center justify-center transition-transform group-hover:scale-110 duration-300`}>
          {icon}
        </div>
        <span className="text-[10px] sm:text-xs font-bold text-emerald-600 bg-emerald-50 border border-emerald-100 px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full">
          {change}
        </span>
      </div>
      <div className="text-xs sm:text-sm font-medium text-gray-500">{label}</div>
      <div className="text-2xl sm:text-3xl font-black text-gray-900 mt-1 tracking-tight">{value}</div>
    </div>
  );
}
