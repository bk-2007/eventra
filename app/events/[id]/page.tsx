'use client';

import { useState, use } from 'react';
import Link from 'next/link';
import { 
  ArrowLeft, 
  Calendar, 
  MapPin, 
  Trophy, 
  Users, 
  Clock, 
  CheckCircle, 
  Share2, 
  AlertCircle,
  Plus,
  ArrowRight,
  Clipboard
} from 'lucide-react';

interface PageProps {
  params: Promise<{ id: string }>;
}

export default function EventDetail({ params }: PageProps) {
  const { id } = use(params);

  // Mock database search based on ID
  const eventDetails = {
    '1': {
      id: '1',
      title: 'Mega Hackathon 2026',
      category: 'TECHNICAL',
      description: 'Build innovative real-world software applications in 36 hours. Pitch your projects directly to global venture capital panels, showcase your programming stack, and compete for a huge prize pool.',
      rules: [
        'Teams must consist of 2 to 4 members.',
        'All code must be written during the hackathon hours. Pre-existing templates must be declared.',
        'Decisions of the judging panel will be final and binding.',
        'Bring your own laptops and charging adapters.'
      ],
      bannerUrl: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80',
      eventDate: 'July 15, 2026 • 09:00 AM',
      registrationDeadline: 'July 10, 2026 • 11:59 PM',
      venue: 'Main Seminar Hall, CSE Department',
      prizePool: '$5,000',
      isTeam: true,
      minSize: 2,
      maxSize: 4
    },
    '2': {
      id: '2',
      title: 'Inter-College Debate Arena',
      category: 'NON_TECHNICAL',
      description: 'An open microphone debate competition addressing global geopolitical and technology integration arguments. Sharpen your arguments, captivate the crowd, and take home the coveted top trophy.',
      rules: [
        'Individual registration only.',
        'Topics will be provided 15 minutes before the round.',
        'A maximum of 5 minutes speaking time per speaker.',
        'Standard parliamentary debating rules apply.'
      ],
      bannerUrl: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1200&q=80',
      eventDate: 'August 02, 2026 • 11:00 AM',
      registrationDeadline: 'July 30, 2026 • 11:59 PM',
      venue: 'Auditorium Block A',
      prizePool: '$1,500',
      isTeam: false,
      minSize: 1,
      maxSize: 1
    }
  }[id] || {
    id: 'unknown',
    title: 'Featured Campus Event',
    category: 'TECHNICAL',
    description: 'Join this premium event to test your limits, network with peer colleges, and earn verified credentials.',
    rules: ['Standard code of conduct is required.', 'Register before the deadline.'],
    bannerUrl: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80',
    eventDate: 'Coming Soon',
    registrationDeadline: 'To be announced',
    venue: 'Campus Seminar Block',
    prizePool: 'Merit Certificates',
    isTeam: false,
    minSize: 1,
    maxSize: 1
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [registerMode, setRegisterMode] = useState<'individual' | 'create_team' | 'join_team'>(
    eventDetails.isTeam ? 'create_team' : 'individual'
  );
  
  const [teamName, setTeamName] = useState('');
  const [inviteCodeInput, setInviteCodeInput] = useState('');
  const [studentDetails, setStudentDetails] = useState({
    name: 'Alex Rivera',
    email: 'alex.rivera@college.edu',
    college: 'State Technical University',
    phone: '+1 234 567 890'
  });

  const [registerSuccess, setRegisterSuccess] = useState(false);
  const [createdInviteCode, setCreatedInviteCode] = useState('');

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (registerMode === 'create_team') {
      // Generate a mock invite code
      const code = 'TEAM-' + Math.random().toString(36).substring(2, 8).toUpperCase();
      setCreatedInviteCode(code);
    }
    
    setRegisterSuccess(true);
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 pb-20">
      
      {/* Event Header Banner */}
      <div 
        className="h-80 lg:h-96 w-full bg-cover bg-center relative"
        style={{ backgroundImage: `url(${eventDetails.bannerUrl})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent" />
        <div className="absolute top-6 left-6 z-10">
          <Link 
            href="/events" 
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-zinc-900/80 backdrop-blur border border-zinc-800 text-sm font-semibold text-zinc-300 hover:text-white transition-all"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Catalog
          </Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 mt-12 grid grid-cols-1 lg:grid-cols-3 gap-12">
        
        {/* Main Event Content */}
        <div className="lg:col-span-2 space-y-8">
          <div>
            <span className={`px-3 py-1 rounded-lg text-xs font-bold tracking-wider uppercase border border-white/5 ${
              eventDetails.category === 'TECHNICAL' ? 'bg-indigo-500/10 text-indigo-400' : 'bg-rose-500/10 text-rose-400'
            }`}>
              {eventDetails.category.replace('_', ' ')}
            </span>
            <h1 className="text-3xl font-extrabold text-white sm:text-4xl mt-4 leading-tight">
              {eventDetails.title}
            </h1>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-bold text-white">Event Description</h2>
            <p className="text-zinc-400 text-sm leading-relaxed">{eventDetails.description}</p>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-bold text-white">Rules & Guidelines</h2>
            <ul className="list-disc pl-5 space-y-2.5 text-zinc-400 text-sm leading-relaxed">
              {eventDetails.rules.map((rule, idx) => (
                <li key={idx}>{rule}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Sidebar Info & Action Column */}
        <div className="space-y-6">
          <div className="glass-panel p-6 rounded-3xl border border-white/5 space-y-6">
            <h3 className="text-lg font-bold text-white border-b border-zinc-900 pb-3">Event Specifications</h3>
            
            <div className="space-y-4 text-sm text-zinc-300">
              <div className="flex gap-3">
                <Calendar className="h-5 w-5 text-brand-violet shrink-0" />
                <div>
                  <strong className="block text-xs text-zinc-500 uppercase">Date & Time</strong>
                  {eventDetails.eventDate}
                </div>
              </div>
              <div className="flex gap-3">
                <MapPin className="h-5 w-5 text-brand-pink shrink-0" />
                <div>
                  <strong className="block text-xs text-zinc-500 uppercase">Venue</strong>
                  {eventDetails.venue}
                </div>
              </div>
              <div className="flex gap-3">
                <Trophy className="h-5 w-5 text-amber-400 shrink-0" />
                <div>
                  <strong className="block text-xs text-zinc-500 uppercase">Prize Pool</strong>
                  {eventDetails.prizePool}
                </div>
              </div>
              <div className="flex gap-3">
                <Users className="h-5 w-5 text-indigo-400 shrink-0" />
                <div>
                  <strong className="block text-xs text-zinc-500 uppercase">Format</strong>
                  {eventDetails.isTeam ? `Team (${eventDetails.minSize}-${eventDetails.maxSize} members)` : 'Individual'}
                </div>
              </div>
              <div className="flex gap-3">
                <Clock className="h-5 w-5 text-emerald-400 shrink-0" />
                <div>
                  <strong className="block text-xs text-zinc-500 uppercase">Registration Closes</strong>
                  {eventDetails.registrationDeadline}
                </div>
              </div>
            </div>

            <button
              onClick={() => setIsModalOpen(true)}
              className="w-full py-4 rounded-2xl bg-gradient-to-r from-brand-violet to-brand-pink text-sm font-semibold text-white shadow-xl shadow-brand-violet/20 hover:opacity-95 transform hover:-translate-y-0.5 transition-all duration-200"
            >
              Register Now
            </button>
          </div>
        </div>

      </div>

      {/* Registration Dialog Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-300">
          <div className="glass-panel w-full max-w-lg rounded-3xl border border-white/10 p-6 md:p-8 space-y-6 relative overflow-y-auto max-h-[90vh]">
            
            {/* Success screen */}
            {registerSuccess ? (
              <div className="text-center space-y-6 py-6">
                <div className="inline-flex p-4 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  <CheckCircle className="h-12 w-12" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-white">Registration Successful!</h3>
                  <p className="text-zinc-400 text-sm">
                    {registerMode === 'create_team' 
                      ? 'Your team has been created. Share the invite code below with your teammates.' 
                      : 'You are successfully registered. Confirmation details have been logged in your dashboard.'}
                  </p>
                </div>

                {registerMode === 'create_team' && createdInviteCode && (
                  <div className="p-4 rounded-2xl border border-zinc-800 bg-zinc-900/50 flex items-center justify-between gap-4">
                    <div className="text-left">
                      <span className="text-[10px] text-zinc-500 block uppercase font-bold">Invite Code</span>
                      <code className="text-lg font-mono font-bold text-brand-pink">{createdInviteCode}</code>
                    </div>
                    <button
                      onClick={() => navigator.clipboard.writeText(createdInviteCode)}
                      className="p-2 rounded-xl border border-zinc-700 bg-zinc-850 hover:bg-zinc-800 text-zinc-300 transition-colors"
                      title="Copy to Clipboard"
                    >
                      <Clipboard className="h-4 w-4" />
                    </button>
                  </div>
                )}

                <div className="pt-6 border-t border-zinc-900 flex justify-end">
                  <button
                    onClick={() => {
                      setIsModalOpen(false);
                      setRegisterSuccess(false);
                    }}
                    className="px-6 py-2.5 rounded-xl bg-zinc-900 hover:bg-zinc-850 border border-zinc-800 text-sm font-semibold text-zinc-200 transition-colors"
                  >
                    Close
                  </button>
                </div>
              </div>
            ) : (
              // Form screen
              <>
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-bold text-white">Registration Form</h3>
                    <p className="text-xs text-zinc-400 mt-1">{eventDetails.title}</p>
                  </div>
                  <button 
                    onClick={() => setIsModalOpen(false)}
                    className="text-zinc-400 hover:text-white text-sm"
                  >
                    Cancel
                  </button>
                </div>

                {/* Team Selector tabs if it is team event */}
                {eventDetails.isTeam && (
                  <div className="flex p-1 rounded-xl bg-zinc-900 border border-zinc-800/80">
                    <button
                      onClick={() => setRegisterMode('create_team')}
                      className={`flex-1 py-2 text-xs font-semibold rounded-lg transition-colors ${
                        registerMode === 'create_team' ? 'bg-brand-violet text-white' : 'text-zinc-400 hover:text-zinc-200'
                      }`}
                    >
                      Create Team
                    </button>
                    <button
                      onClick={() => setRegisterMode('join_team')}
                      className={`flex-1 py-2 text-xs font-semibold rounded-lg transition-colors ${
                        registerMode === 'join_team' ? 'bg-brand-violet text-white' : 'text-zinc-400 hover:text-zinc-200'
                      }`}
                    >
                      Join Team
                    </button>
                  </div>
                )}

                <form onSubmit={handleRegister} className="space-y-4">
                  {registerMode === 'create_team' && (
                    <div>
                      <label htmlFor="teamName" className="block text-xs font-semibold text-zinc-400 mb-1.5">
                        Team Name *
                      </label>
                      <input
                        type="text"
                        id="teamName"
                        required
                        placeholder="e.g. CyberKnights"
                        value={teamName}
                        onChange={(e) => setTeamName(e.target.value)}
                        className="w-full px-3 py-2 text-sm rounded-xl border border-zinc-800 bg-zinc-900 text-white placeholder-zinc-600 focus:outline-none focus:border-brand-violet"
                      />
                    </div>
                  )}

                  {registerMode === 'join_team' && (
                    <div>
                      <label htmlFor="inviteCode" className="block text-xs font-semibold text-zinc-400 mb-1.5">
                        Invite Code *
                      </label>
                      <input
                        type="text"
                        id="inviteCode"
                        required
                        placeholder="e.g. TEAM-DF23X4"
                        value={inviteCodeInput}
                        onChange={(e) => setInviteCodeInput(e.target.value)}
                        className="w-full px-3 py-2 text-sm rounded-xl border border-zinc-800 bg-zinc-900 text-white placeholder-zinc-600 focus:outline-none focus:border-brand-violet"
                      />
                    </div>
                  )}

                  {/* Student Details Info */}
                  <div className="border-t border-zinc-900 pt-4 space-y-4">
                    <h4 className="text-xs font-bold text-zinc-400 uppercase tracking-wider">Registrant Details</h4>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <span className="block text-[10px] text-zinc-500 uppercase">Full Name</span>
                        <span className="text-sm font-semibold text-white">{studentDetails.name}</span>
                      </div>
                      <div>
                        <span className="block text-[10px] text-zinc-500 uppercase">College</span>
                        <span className="text-sm font-semibold text-white">{studentDetails.college}</span>
                      </div>
                      <div>
                        <span className="block text-[10px] text-zinc-500 uppercase">Email</span>
                        <span className="text-sm font-semibold text-white break-all">{studentDetails.email}</span>
                      </div>
                      <div>
                        <span className="block text-[10px] text-zinc-500 uppercase">Phone</span>
                        <span className="text-sm font-semibold text-white">{studentDetails.phone}</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-6 border-t border-zinc-900 flex justify-end gap-3">
                    <button
                      type="button"
                      onClick={() => setIsModalOpen(false)}
                      className="px-5 py-2.5 rounded-xl border border-zinc-800 bg-zinc-900/50 hover:bg-zinc-850 hover:border-zinc-700 text-sm font-semibold text-zinc-400 hover:text-white transition-colors"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-brand-violet to-brand-pink text-sm font-semibold text-white hover:opacity-95 shadow-lg shadow-brand-violet/10 transition-colors"
                    >
                      {registerMode === 'create_team' ? 'Create Team & Register' : registerMode === 'join_team' ? 'Join Team & Register' : 'Submit Registration'}
                    </button>
                  </div>
                </form>
              </>
            )}

          </div>
        </div>
      )}

    </div>
  );
}
