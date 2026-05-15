'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  LayoutDashboard, 
  Mail, 
  Image as ImageIcon, 
  Briefcase, 
  Settings,
  Globe,
  Menu,
  X,
  BookOpen,
  ArrowUpRight,
  Sparkles,
  LogOut
} from 'lucide-react';
import { adminLogout } from '@/app/actions/auth';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const isLoginPage = pathname === '/admin/login';

  if (isLoginPage) {
    return <>{children}</>;
  }

  return (
    <div className="flex min-h-screen bg-[#F8F9FA] font-sans">
      {/* Mobile Header (Pristine Light Luxury) */}
      <div className="lg:hidden fixed top-0 left-0 right-0 h-16 bg-white border-b border-gray-200 flex items-center justify-between px-4 z-[60] shadow-sm">
        <Link href="/admin" className="flex items-center gap-3">
          <div className="p-1 bg-gray-50 rounded-xl border border-gray-100 shadow-sm">
            <img src="/logo.png" alt="Fly Media Logo" className="w-7 h-7 object-contain" />
          </div>
          <span className="text-lg font-black text-gray-900 tracking-tight">Flymedia Admin</span>
        </Link>
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="p-2 text-gray-600 hover:text-[#ff9900] hover:bg-orange-50 rounded-xl transition-all outline-none"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Sidebar Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-black/50 backdrop-blur-xs z-[55] transition-opacity animate-in fade-in duration-300"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Sidebar (Pristine White Luxury & Soft Shadows) */}
      <aside className={`
        fixed inset-y-0 left-0 z-[56] w-72 bg-white border-r border-gray-200/80 flex flex-col transition-transform duration-300 ease-in-out shadow-xl lg:shadow-none
        ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        {/* Brand Header */}
        <div className="p-6 border-b border-gray-100 flex items-center justify-between bg-white">
          <Link href="/admin" className="flex items-center gap-3.5 group">
            <div className="p-2 bg-white rounded-2xl border border-gray-100 shadow-sm group-hover:border-[#ff9900]/50 group-hover:scale-105 transition-all">
              <img src="/logo.png" alt="Fly Media Logo" className="w-8 h-8 object-contain" />
            </div>
            <div>
              <div className="text-xl font-black text-gray-900 tracking-tight">Flymedia Admin</div>
              <div className="text-[10px] font-black text-[#ff9900] tracking-widest uppercase flex items-center gap-1 mt-0.5">
                <Sparkles size={10} /> Active Portal
              </div>
            </div>
          </Link>
        </div>

        {/* Navigation Navigation */}
        <nav className="flex-1 px-4 py-6 space-y-1.5 overflow-y-auto custom-scrollbar mt-16 lg:mt-0 bg-white">
          <NavLink href="/admin" icon={<LayoutDashboard size={20} />} label="Dashboard" active={pathname === '/admin'} onClick={() => setIsMobileMenuOpen(false)} />
          
          <div className="pt-6 pb-2 px-4 text-[11px] font-black text-gray-400 uppercase tracking-wider flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-[#ff9900] animate-pulse" />
            System Modules
          </div>

          <NavLink href="/admin/seo" icon={<Globe size={20} />} label="SEO Data" active={pathname === '/admin/seo'} onClick={() => setIsMobileMenuOpen(false)} badge="Dynamic" />
          <NavLink href="/admin/blog" icon={<BookOpen size={20} />} label="Blogs" active={pathname.startsWith('/admin/blog')} onClick={() => setIsMobileMenuOpen(false)} />
          <NavLink href="/admin/contact" icon={<Mail size={20} />} label="Contact Queries" active={pathname === '/admin/contact'} onClick={() => setIsMobileMenuOpen(false)} />
          <NavLink href="/admin/portfolio" icon={<ImageIcon size={20} />} label="Portfolio" active={pathname === '/admin/portfolio'} onClick={() => setIsMobileMenuOpen(false)} />
          <NavLink href="/admin/career" icon={<Briefcase size={20} />} label="Career" active={pathname === '/admin/career'} onClick={() => setIsMobileMenuOpen(false)} />

          <div className="pt-6 pb-2 px-4 text-[11px] font-black text-gray-400 uppercase tracking-wider flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
            Session
          </div>
          
          <form action={adminLogout}>
            <button 
              type="submit"
              className="w-full flex items-center justify-between px-4 py-3 text-sm font-bold rounded-2xl transition-all group relative overflow-hidden text-red-600 hover:text-red-700 hover:bg-red-50/60 border border-transparent"
            >
              <div className="flex items-center gap-3.5 z-10">
                <span className="transition-transform duration-300 group-hover:scale-110 text-red-400 group-hover:text-red-600">
                  <LogOut size={20} />
                </span>
                <span className="tracking-tight">Logout</span>
              </div>
            </button>
          </form>
        </nav>

        {/* Bottom Website Link Card */}
        <div className="p-4 border-t border-gray-100 bg-gray-50/50">
          <Link 
            href="/" 
            target="_blank"
            className="flex items-center justify-between p-3.5 rounded-2xl bg-white border border-gray-200 text-sm font-bold text-gray-700 hover:text-[#ff9900] hover:bg-orange-50/50 hover:border-orange-200 transition-all group shadow-xs hover:shadow-md hover:shadow-orange-500/5 active:scale-95"
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-xl bg-orange-50 text-[#ff9900] flex items-center justify-center font-bold border border-orange-100 group-hover:bg-[#ff9900] group-hover:text-white transition-colors">
                <Globe size={18} />
              </div>
              <div>
                <div className="text-sm font-black text-gray-900 tracking-tight group-hover:text-[#ff9900] transition-colors">View Live Site</div>
                <div className="text-[10px] text-gray-400 font-bold leading-none mt-0.5">flymediatech.com</div>
              </div>
            </div>
            <ArrowUpRight size={18} className="text-gray-400 group-hover:text-[#ff9900] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
          </Link>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 w-full lg:ml-72 p-4 sm:p-6 md:p-10 pt-24 lg:pt-10 transition-all duration-300 overflow-x-hidden">
        <div className="max-w-6xl mx-auto w-full animate-in fade-in-50 duration-500">
          {children}
        </div>
      </main>
    </div>
  );
}

function NavLink({ href, icon, label, active, onClick, badge }: { href: string; icon: React.ReactNode; label: string; active?: boolean; onClick?: () => void; badge?: string }) {
  return (
    <Link 
      href={href}
      onClick={onClick}
      className={`flex items-center justify-between px-4 py-3 text-sm font-bold rounded-2xl transition-all group relative overflow-hidden ${
        active 
        ? 'bg-[#ff9900] text-white shadow-lg shadow-orange-500/20 font-black tracking-tight' 
        : 'text-gray-600 hover:text-[#ff9900] hover:bg-orange-50/60 border border-transparent'
      }`}
    >
      <div className="flex items-center gap-3.5 z-10">
        <span className={`transition-transform duration-300 group-hover:scale-110 ${active ? 'text-white' : 'text-gray-400 group-hover:text-[#ff9900]'}`}>
          {icon}
        </span>
        <span className="tracking-tight">{label}</span>
      </div>

      {badge && (
        <span className={`z-10 text-[10px] font-black px-2 py-0.5 rounded-full uppercase tracking-wider ${
          active 
          ? 'bg-white/20 text-white border border-white/30' 
          : 'bg-orange-50 text-[#ff9900] border border-orange-200/80'
        }`}>
          {badge}
        </span>
      )}

      {/* Active Indicator Bar */}
      {active && (
        <div className="absolute right-0 top-0 bottom-0 w-1 bg-white shadow-sm rounded-l-full" />
      )}
    </Link>
  );
}
