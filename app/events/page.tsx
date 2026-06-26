'use client';

import { useState, Suspense } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { Search, Calendar, MapPin, Trophy, Users, Filter, Code, Music, Sparkles } from 'lucide-react';

function EventsCatalogContent() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get('category') || 'ALL';

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory);

  const mockEvents = [
    {
      id: '1',
      title: 'Mega Hackathon 2026',
      category: 'TECHNICAL',
      description: 'Build innovative real-world software applications in 36 hours. Pitch to global venture capitalists.',
      bannerUrl: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80',
      eventDate: 'July 15, 2026',
      venue: 'Main Seminar Hall',
      prizePool: '$5,000',
      maxTeamSize: 4
    },
    {
      id: '2',
      title: 'Inter-College Debate Arena',
      category: 'NON_TECHNICAL',
      description: 'Showcase your rhetorical skills on global geopolitical arguments and win the coveted Trophy.',
      bannerUrl: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=800&q=80',
      eventDate: 'August 02, 2026',
      venue: 'Auditorium Block A',
      prizePool: '$1,500',
      maxTeamSize: 1
    },
    {
      id: '3',
      title: 'RoboWars Championship',
      category: 'TECHNICAL',
      description: 'Clash of mechanical giants. Bring your custom-built robots and dominate the metal arena.',
      bannerUrl: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80',
      eventDate: 'September 10, 2026',
      venue: 'Mechanical Hangar',
      prizePool: '$8,000',
      maxTeamSize: 5
    },
    {
      id: '4',
      title: 'Choreo Night 2026',
      category: 'NON_TECHNICAL',
      description: 'The ultimate dance competition showcasing freestyle, hip-hop, classical fusion and group choreography.',
      bannerUrl: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=800&q=80',
      eventDate: 'October 05, 2026',
      venue: 'Open Air Theater',
      prizePool: '$3,500',
      maxTeamSize: 12
    }
  ];

  const filteredEvents = mockEvents.filter((evt) => {
    const matchesSearch = evt.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          evt.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'ALL' || evt.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 py-12 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Page Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 border-b border-zinc-900 pb-8">
          <div>
            <h1 className="text-3xl font-extrabold text-white tracking-tight sm:text-4xl">
              Discover Campus Events
            </h1>
            <p className="mt-2 text-sm text-zinc-400">
              Browse, search, and register for technical hackathons and non-technical cultural festivals.
            </p>
          </div>
        </div>

        {/* Filters and Search Bar */}
        <div className="flex flex-col md:flex-row items-center gap-4 justify-between bg-zinc-900/40 p-4 rounded-2xl border border-white/5">
          {/* Search Inputs */}
          <div className="relative w-full md:max-w-md">
            <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-zinc-500">
              <Search className="h-5 w-5" />
            </span>
            <input
              type="text"
              placeholder="Search event names, rules..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-zinc-800 bg-zinc-900 text-white placeholder-zinc-500 focus:outline-none focus:border-brand-violet focus:ring-1 focus:ring-brand-violet transition-colors text-sm"
            />
          </div>

          {/* Categories Tab Selector */}
          <div className="flex items-center gap-2 self-stretch md:self-auto overflow-x-auto">
            {['ALL', 'TECHNICAL', 'NON_TECHNICAL'].map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider border transition-all whitespace-nowrap ${
                  selectedCategory === cat
                    ? 'bg-brand-violet border-brand-violet text-white shadow-lg shadow-brand-violet/10'
                    : 'bg-zinc-900/50 border-zinc-800 text-zinc-400 hover:text-zinc-200 hover:border-zinc-700'
                }`}
              >
                {cat.replace('_', ' ')}
              </button>
            ))}
          </div>
        </div>

        {/* Event Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredEvents.map((evt) => (
            <div 
              key={evt.id} 
              className="glass-panel glass-panel-hover flex flex-col justify-between rounded-3xl border border-white/5 overflow-hidden bg-zinc-900/20"
            >
              {/* Event Image Banner */}
              <div 
                className="h-48 w-full bg-cover bg-center bg-zinc-900 relative"
                style={{ backgroundImage: `url(${evt.bannerUrl})` }}
              >
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-lg text-[10px] font-bold tracking-wider uppercase border border-white/10 ${
                    evt.category === 'TECHNICAL' 
                      ? 'bg-indigo-650 bg-indigo-500/80 text-white' 
                      : 'bg-rose-650 bg-rose-500/80 text-white'
                  }`}>
                    {evt.category.replace('_', ' ')}
                  </span>
                </div>
              </div>

              {/* Event Details */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-white tracking-tight">{evt.title}</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed line-clamp-3">{evt.description}</p>
                </div>

                <div className="pt-4 border-t border-zinc-900/60 grid grid-cols-2 gap-4 text-xs text-zinc-400">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="h-4 w-4 text-brand-violet" />
                    {evt.eventDate}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MapPin className="h-4 w-4 text-brand-pink" />
                    {evt.venue}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Trophy className="h-4 w-4 text-amber-400" />
                    Prize: {evt.prizePool}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Users className="h-4 w-4 text-indigo-400" />
                    Team: Max {evt.maxTeamSize}
                  </span>
                </div>

                <Link
                  href={`/events/${evt.id}`}
                  className="mt-6 flex items-center justify-center gap-2 w-full px-5 py-3 rounded-2xl bg-zinc-900 hover:bg-zinc-850 border border-zinc-800 text-sm font-semibold text-zinc-200 hover:text-white transition-all"
                >
                  View Details & Register
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredEvents.length === 0 && (
          <div className="text-center py-20 bg-zinc-900/20 rounded-3xl border border-dashed border-zinc-800">
            <Filter className="h-10 w-10 text-zinc-600 mx-auto mb-4" />
            <h3 className="text-lg font-bold text-white">No events found</h3>
            <p className="text-zinc-500 text-sm mt-1">Try expanding your search query or choosing a different category.</p>
          </div>
        )}

      </div>
    </div>
  );
}

export default function EventsCatalog() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-zinc-950 text-zinc-100 flex items-center justify-center">
        <div className="animate-pulse text-zinc-400">Loading catalog...</div>
      </div>
    }>
      <EventsCatalogContent />
    </Suspense>
  );
}
