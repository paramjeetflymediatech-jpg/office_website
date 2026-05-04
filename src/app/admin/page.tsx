import React from 'react';
import { 
  Users, 
  Mail, 
  Image as ImageIcon, 
  Briefcase 
} from 'lucide-react';

export default function AdminDashboard() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-500 mt-1">Welcome back, here's what's happening today.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard 
          icon={<Mail className="text-blue-600" />} 
          label="New Queries" 
          value="12" 
          change="+4.5%" 
          color="bg-blue-50"
        />
        <StatCard 
          icon={<ImageIcon className="text-purple-600" />} 
          label="Portfolio Items" 
          value="48" 
          change="+2" 
          color="bg-purple-50"
        />
        <StatCard 
          icon={<Briefcase className="text-orange-600" />} 
          label="Open Positions" 
          value="5" 
          change="0" 
          color="bg-orange-50"
        />
        <StatCard 
          icon={<Users className="text-green-600" />} 
          label="Total Visits" 
          value="2.4k" 
          change="+12%" 
          color="bg-green-50"
        />
      </div>

      <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Quick Actions</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <button className="flex items-center gap-3 p-4 border border-gray-100 rounded-lg hover:bg-gray-50 transition-colors text-left">
            <div className="w-10 h-10 bg-orange-50 rounded-full flex items-center justify-center text-orange-600">
              <Mail size={20} />
            </div>
            <div>
              <div className="font-semibold">Check Messages</div>
              <div className="text-xs text-gray-500">View recent contact queries</div>
            </div>
          </button>
          <button className="flex items-center gap-3 p-4 border border-gray-100 rounded-lg hover:bg-gray-50 transition-colors text-left">
            <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center text-blue-600">
              <ImageIcon size={20} />
            </div>
            <div>
              <div className="font-semibold">Upload Portfolio</div>
              <div className="text-xs text-gray-500">Add new work to your site</div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

function StatCard({ icon, label, value, change, color }: any) {
  return (
    <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <div className={`w-12 h-12 ${color} rounded-lg flex items-center justify-center`}>
          {icon}
        </div>
        <span className="text-xs font-bold text-green-600 bg-green-50 px-2 py-1 rounded">
          {change}
        </span>
      </div>
      <div className="text-sm font-medium text-gray-500">{label}</div>
      <div className="text-2xl font-bold text-gray-900 mt-1">{value}</div>
    </div>
  );
}
