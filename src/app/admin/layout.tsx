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
  BookOpen
} from 'lucide-react';

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
    <div className="flex min-h-screen bg-gray-50 font-sans">
      {/* Mobile Header */}
      <div className="lg:hidden fixed top-0 left-0 right-0 h-16 bg-white border-b border-gray-200 flex items-center justify-between px-4 z-[60]">
        <Link href="/admin" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-[#ff9900] rounded-lg flex items-center justify-center">
            <Settings className="text-white w-5 h-5" />
          </div>
          <span className="text-lg font-bold text-gray-900">Admin</span>
        </Link>
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Sidebar Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-black/50 z-[55] transition-opacity"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={`
        fixed inset-y-0 left-0 z-[56] w-64 bg-white border-r border-gray-200 flex flex-col transition-transform duration-300 ease-in-out
        ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        <div className="p-6 border-b border-gray-100 hidden lg:block">
          <Link href="/admin" className="flex items-center gap-3">
            <div className="w-8 h-8 bg-[#ff9900] rounded-lg flex items-center justify-center">
              <Settings className="text-white w-5 h-5" />
            </div>
            <span className="text-xl font-bold text-gray-900 tracking-tight">AdminPanel</span>
          </Link>
        </div>

        <nav className="flex-1 p-4 space-y-1 mt-16 lg:mt-0">
          <NavLink href="/admin" icon={<LayoutDashboard size={20} />} label="Dashboard" active={pathname === '/admin'} onClick={() => setIsMobileMenuOpen(false)} />
          <div className="pt-4 pb-2 px-3 text-xs font-semibold text-gray-400 uppercase tracking-wider">
            Management
          </div>
          <NavLink href="/admin/seo" icon={<Globe size={20} />} label="SEO Data" active={pathname === '/admin/seo'} onClick={() => setIsMobileMenuOpen(false)} />
          <NavLink href="/admin/blog" icon={<BookOpen size={20} />} label="Blogs" active={pathname.startsWith('/admin/blog')} onClick={() => setIsMobileMenuOpen(false)} />
          <NavLink href="/admin/contact" icon={<Mail size={20} />} label="Contact Queries" active={pathname === '/admin/contact'} onClick={() => setIsMobileMenuOpen(false)} />
          <NavLink href="/admin/portfolio" icon={<ImageIcon size={20} />} label="Portfolio" active={pathname === '/admin/portfolio'} onClick={() => setIsMobileMenuOpen(false)} />
          <NavLink href="/admin/career" icon={<Briefcase size={20} />} label="Career" active={pathname === '/admin/career'} onClick={() => setIsMobileMenuOpen(false)} />
        </nav>

        <div className="p-4 border-t border-gray-100">
          <Link 
            href="/" 
            className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-gray-600 hover:text-[#ff9900] transition-colors"
          >
            <Globe size={18} />
            View Website
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 w-full lg:ml-64 p-3 sm:p-6 md:p-8 pt-20 lg:pt-8 transition-all duration-300 overflow-x-hidden">
        <div className="max-w-6xl mx-auto w-full">
          {children}
        </div>
      </main>
    </div>
  );
}

function NavLink({ href, icon, label, active, onClick }: { href: string; icon: React.ReactNode; label: string; active?: boolean; onClick?: () => void }) {
  return (
    <Link 
      href={href}
      onClick={onClick}
      className={`flex items-center gap-3 px-3 py-2.5 text-sm font-medium rounded-xl transition-all ${
        active 
        ? 'bg-orange-50 text-[#ff9900]' 
        : 'text-gray-600 hover:bg-gray-50 hover:text-[#ff9900]'
      }`}
    >
      <span className={active ? 'text-[#ff9900]' : 'text-gray-400'}>{icon}</span>
      {label}
    </Link>
  );
}
