'use client';

import { useState } from 'react';
import Link from 'next/link';
import { 
  Calendar, 
  Award, 
  Bell, 
  Compass, 
  FileText, 
  User, 
  ArrowUpRight, 
  Download, 
  CheckCircle,
  Clock
} from 'lucide-react';

export default function StudentDashboard() {
  const [activeTab, setActiveTab] = useState<'overview' | 'registrations' | 'certificates'>('overview');

  const registeredEvents = [
    {
      id: '1',
      title: 'Mega Hackathon 2026',
      date: 'July 15, 2026',
      venue: 'Main Seminar Hall',
      category: 'TECHNICAL',
      status: 'CONFIRMED',
      attendance: 'MARKED',
      certificateAvailable: true
    },
    {
      id: '2',
      title: 'Inter-College Debate Arena',
      date: 'August 02, 2026',
      venue: 'Auditorium Block A',
      category: 'NON_TECHNICAL',
      status: 'CONFIRMED',
      attendance: 'PENDING',
      certificateAvailable: false
    }
  ];

  const certificates = [
    {
      id: 'cert-0912',
      title: 'Participation Certificate - Mega Hackathon 2026',
      event: 'Mega Hackathon 2026',
      type: 'PARTICIPATION',
      issuedDate: 'July 16, 2026',
      url: '#'
    }
  ];

  const notifications = [
    {
      id: '1',
      text: 'Registration confirmed for Mega Hackathon 2026!',
      time: '2 hours ago',
      read: false
    },
    {
      id: '2',
      text: 'A new event "Choreo Night 2026" was published.',
      time: '1 day ago',
      read: true
    }
  ];

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 py-12 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-10">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 border-b border-zinc-900 pb-8">
          <div>
            <h1 className="text-3xl font-extrabold text-white tracking-tight sm:text-4xl">
              Welcome back, <span className="bg-gradient-to-r from-brand-violet to-brand-pink bg-clip-text text-transparent">Alex!</span>
            </h1>
            <p className="mt-2 text-sm text-zinc-400">
              Manage your registrations, view notifications, and download earned certificates.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Link 
              href="/events" 
              className="flex items-center gap-2 px-5 py-3 rounded-2xl bg-zinc-900 border border-zinc-800 text-sm font-semibold text-zinc-300 hover:text-white hover:bg-zinc-850 hover:border-zinc-700 transition-all duration-200"
            >
              <Compass className="h-4 w-4" />
              Discover Events
            </Link>
          </div>
        </div>

        {/* Overview Stats Cards */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          <div className="glass-panel p-6 rounded-2xl border border-white/5 flex items-center justify-between">
            <div>
              <span className="text-zinc-500 text-xs font-semibold uppercase tracking-wider">Registered Events</span>
              <h3 className="text-3xl font-bold text-white mt-1">{registeredEvents.length}</h3>
            </div>
            <div className="p-3 rounded-xl bg-indigo-500/10 text-indigo-400">
              <Calendar className="h-6 w-6" />
            </div>
          </div>
          <div className="glass-panel p-6 rounded-2xl border border-white/5 flex items-center justify-between">
            <div>
              <span className="text-zinc-500 text-xs font-semibold uppercase tracking-wider">Certificates Issued</span>
              <h3 className="text-3xl font-bold text-white mt-1">{certificates.length}</h3>
            </div>
            <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-400">
              <Award className="h-6 w-6" />
            </div>
          </div>
          <div className="glass-panel p-6 rounded-2xl border border-white/5 flex items-center justify-between">
            <div>
              <span className="text-zinc-500 text-xs font-semibold uppercase tracking-wider">Unread Alerts</span>
              <h3 className="text-3xl font-bold text-white mt-1">
                {notifications.filter(n => !n.read).length}
              </h3>
            </div>
            <div className="p-3 rounded-xl bg-amber-500/10 text-amber-400">
              <Bell className="h-6 w-6" />
            </div>
          </div>
        </div>

        {/* Tabs Controls */}
        <div className="flex border-b border-zinc-900">
          {(['overview', 'registrations', 'certificates'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-3 text-sm font-semibold capitalize border-b-2 transition-all ${
                activeTab === tab 
                  ? 'border-brand-violet text-brand-violet font-bold'
                  : 'border-transparent text-zinc-455 text-zinc-400 hover:text-zinc-200'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Tab Contents */}
        <div className="space-y-8">
          {activeTab === 'overview' && (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Main Feed: Upcoming Registered Events */}
              <div className="lg:col-span-2 space-y-6">
                <h2 className="text-xl font-bold text-white flex items-center gap-2">
                  <Clock className="h-5 w-5 text-brand-violet" />
                  Your Active Registrations
                </h2>
                <div className="space-y-4">
                  {registeredEvents.map((evt) => (
                    <div key={evt.id} className="glass-panel p-6 rounded-2xl border border-white/5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <span className={`px-2 py-0.5 rounded text-[10px] font-semibold tracking-wider ${
                            evt.category === 'TECHNICAL' ? 'bg-indigo-500/10 text-indigo-400' : 'bg-rose-500/10 text-rose-400'
                          }`}>
                            {evt.category}
                          </span>
                        </div>
                        <h4 className="text-lg font-bold text-white">{evt.title}</h4>
                        <p className="text-zinc-400 text-xs mt-1">{evt.date} • {evt.venue}</p>
                      </div>
                      <div className="flex items-center gap-3 sm:self-center">
                        <span className="flex items-center gap-1 text-xs font-semibold text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-lg">
                          <CheckCircle className="h-3.5 w-3.5" />
                          Confirmed
                        </span>
                        <Link 
                          href={`/events/${evt.id}`}
                          className="p-2 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white hover:bg-zinc-850 hover:border-zinc-700 transition-colors"
                        >
                          <ArrowUpRight className="h-4 w-4" />
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Sidebar Alerts */}
              <div className="space-y-6">
                <h2 className="text-xl font-bold text-white flex items-center gap-2">
                  <Bell className="h-5 w-5 text-brand-pink" />
                  Recent Alerts
                </h2>
                <div className="glass-panel p-6 rounded-2xl border border-white/5 space-y-4">
                  {notifications.map((notif) => (
                    <div key={notif.id} className="flex items-start gap-3 pb-4 border-b border-zinc-900/60 last:border-0 last:pb-0">
                      <span className={`h-2 w-2 mt-1.5 rounded-full ${notif.read ? 'bg-zinc-700' : 'bg-brand-violet'}`} />
                      <div>
                        <p className={`text-sm ${notif.read ? 'text-zinc-400' : 'text-white font-medium'}`}>
                          {notif.text}
                        </p>
                        <span className="text-[10px] text-zinc-500 block mt-1">{notif.time}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'registrations' && (
            <div className="space-y-4">
              {registeredEvents.map((evt) => (
                <div key={evt.id} className="glass-panel p-6 rounded-2xl border border-white/5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div>
                    <h4 className="text-lg font-bold text-white">{evt.title}</h4>
                    <p className="text-zinc-400 text-xs mt-1">{evt.date} • {evt.venue}</p>
                    <div className="flex gap-4 mt-3">
                      <span className="text-xs text-zinc-400 flex items-center gap-1.5">
                        Attendance: <strong>{evt.attendance}</strong>
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    {evt.certificateAvailable ? (
                      <button 
                        onClick={() => setActiveTab('certificates')}
                        className="flex items-center gap-2 px-4 py-2 rounded-xl bg-brand-violet/20 hover:bg-brand-violet/30 border border-brand-violet/30 text-xs font-semibold text-brand-violet transition-colors"
                      >
                        <Award className="h-4 w-4" />
                        Certificate Available
                      </button>
                    ) : (
                      <span className="text-xs text-zinc-500 font-medium">No Certificate Yet</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'certificates' && (
            <div className="space-y-4">
              {certificates.map((cert) => (
                <div key={cert.id} className="glass-panel p-6 rounded-2xl border border-white/5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="p-3.5 rounded-2xl bg-brand-violet/10 text-brand-violet border border-brand-violet/20">
                      <Award className="h-7 w-7" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-white">{cert.title}</h4>
                      <p className="text-zinc-400 text-xs mt-1">Issued on {cert.issuedDate}</p>
                    </div>
                  </div>
                  <a
                    href={cert.url}
                    className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-500/20 hover:bg-emerald-500/30 border border-emerald-500/30 text-sm font-semibold text-emerald-400 transition-colors"
                  >
                    <Download className="h-4 w-4" />
                    Download PDF
                  </a>
                </div>
              ))}
              {certificates.length === 0 && (
                <div className="text-center py-12 text-zinc-500">
                  You haven't been issued any certificates yet. Complete registered events to receive them!
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
