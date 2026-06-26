'use client';

import { useState } from 'react';
import Link from 'next/link';
import { 
  BarChart3, 
  Users, 
  Calendar, 
  Award, 
  PlusCircle, 
  FileCheck2, 
  UserCheck, 
  TrendingUp, 
  ArrowRight,
  TrendingDown
} from 'lucide-react';

export default function AdminDashboard() {
  const [recentActivities] = useState([
    { id: '1', type: 'registration', text: 'Sarah Connor registered for Mega Hackathon 2026', time: '10 mins ago' },
    { id: '2', type: 'event', text: 'Admin created a new event: Inter-College Debate Arena', time: '1 hour ago' },
    { id: '3', type: 'certificate', text: 'Certificate generated for Alex Rivera (Mega Hackathon 2026)', time: '4 hours ago' }
  ]);

  const stats = [
    { title: 'Total Events', value: '12', change: '+2 new this week', icon: Calendar, color: 'text-indigo-400', bg: 'bg-indigo-500/10' },
    { title: 'Total Students', value: '382', change: '+18% growth', icon: Users, color: 'text-brand-pink', bg: 'bg-brand-pink/10' },
    { title: 'Attendance Marked', value: '89%', change: '+5% increase', icon: UserCheck, color: 'text-emerald-400', bg: 'bg-emerald-500/10' },
    { title: 'Pending Certificates', value: '24', change: 'Action required', icon: Award, color: 'text-amber-400', bg: 'bg-amber-500/10' }
  ];

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 py-12 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-10">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 border-b border-zinc-900 pb-8">
          <div>
            <h1 className="text-3xl font-extrabold text-white tracking-tight sm:text-4xl">
              Admin Portal
            </h1>
            <p className="mt-2 text-sm text-zinc-400">
              Create events, track registrations, verify attendance, and generate verified student certificates.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <Link 
              href="/admin/events/create" 
              className="flex items-center gap-2 px-5 py-3 rounded-2xl bg-gradient-to-r from-brand-violet to-brand-pink hover:opacity-95 text-sm font-semibold text-white shadow-xl shadow-brand-violet/10 transition-all duration-200"
            >
              <PlusCircle className="h-4 w-4" />
              Create Event
            </Link>
          </div>
        </div>

        {/* Dashboard Grid Analytics */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div key={idx} className="glass-panel p-6 rounded-3xl border border-white/5 flex flex-col justify-between">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <span className="text-zinc-500 text-xs font-semibold uppercase tracking-wider">{stat.title}</span>
                    <h3 className="text-3xl font-extrabold text-white mt-1">{stat.value}</h3>
                  </div>
                  <div className={`p-3 rounded-2xl ${stat.bg} ${stat.color}`}>
                    <Icon className="h-6 w-6" />
                  </div>
                </div>
                <span className="text-xs text-zinc-400 font-medium">
                  {stat.change}
                </span>
              </div>
            );
          })}
        </div>

        {/* Action Blocks & Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Quick Actions Shortcuts */}
          <div className="lg:col-span-1 space-y-6">
            <h2 className="text-xl font-bold text-white">Quick Actions</h2>
            <div className="grid grid-cols-1 gap-4">
              <Link 
                href="/admin/events"
                className="flex items-center justify-between p-5 rounded-2xl border border-zinc-800 bg-zinc-900/50 hover:bg-zinc-850 hover:border-zinc-700 text-left transition-all group"
              >
                <div>
                  <h4 className="font-bold text-white group-hover:text-brand-violet transition-colors">Manage Events</h4>
                  <p className="text-xs text-zinc-400 mt-1">Publish, edit or delete college events.</p>
                </div>
                <ArrowRight className="h-5 w-5 text-zinc-500 group-hover:text-white transition-colors" />
              </Link>
              <Link 
                href="/admin/participants"
                className="flex items-center justify-between p-5 rounded-2xl border border-zinc-800 bg-zinc-900/50 hover:bg-zinc-850 hover:border-zinc-700 text-left transition-all group"
              >
                <div>
                  <h4 className="font-bold text-white group-hover:text-brand-violet transition-colors">Attendance Sheet</h4>
                  <p className="text-xs text-zinc-400 mt-1">Mark participant attendance for certificate eligibility.</p>
                </div>
                <ArrowRight className="h-5 w-5 text-zinc-500 group-hover:text-white transition-colors" />
              </Link>
              <Link 
                href="/admin/certificates"
                className="flex items-center justify-between p-5 rounded-2xl border border-zinc-800 bg-zinc-900/50 hover:bg-zinc-850 hover:border-zinc-700 text-left transition-all group"
              >
                <div>
                  <h4 className="font-bold text-white group-hover:text-brand-violet transition-colors">Certificate Generator</h4>
                  <p className="text-xs text-zinc-400 mt-1">Design, sign, and issue student certificates.</p>
                </div>
                <ArrowRight className="h-5 w-5 text-zinc-500 group-hover:text-white transition-colors" />
              </Link>
            </div>
          </div>

          {/* Activity Logs */}
          <div className="lg:col-span-2 space-y-6">
            <h2 className="text-xl font-bold text-white">Recent Activities</h2>
            <div className="glass-panel p-6 rounded-3xl border border-white/5 space-y-4">
              {recentActivities.map((act) => (
                <div key={act.id} className="flex justify-between items-center py-3 border-b border-zinc-900/60 last:border-0 last:pb-0">
                  <div className="flex items-center gap-3">
                    <span className={`h-2.5 w-2.5 rounded-full ${
                      act.type === 'registration' ? 'bg-indigo-400' : act.type === 'event' ? 'bg-brand-pink' : 'bg-emerald-400'
                    }`} />
                    <p className="text-sm font-medium text-zinc-200">{act.text}</p>
                  </div>
                  <span className="text-xs text-zinc-500">{act.time}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
