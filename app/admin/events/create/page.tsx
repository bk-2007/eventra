'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ArrowLeft, Calendar, FileText, MapPin, Trophy, Users, Image as ImageIcon, Sparkles } from 'lucide-react';

export default function CreateEvent() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    category: 'TECHNICAL',
    description: '',
    bannerUrl: '',
    eventDate: '',
    venue: '',
    registrationDeadline: '',
    maxParticipants: '',
    minTeamSize: '1',
    maxTeamSize: '1',
    prizePool: '',
    isTeamRegistration: false
  });

  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    // Basic Validation
    if (!formData.title || !formData.description || !formData.eventDate || !formData.venue || !formData.registrationDeadline || !formData.prizePool) {
      setError('Please fill out all required fields.');
      setLoading(false);
      return;
    }

    try {
      // Mock save to DB (we will hook this up to prisma API endpoint in Phase 3/5)
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setSuccess(true);
      setTimeout(() => {
        router.push('/admin/dashboard');
      }, 1500);
    } catch (err) {
      setError('Failed to create the event. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 py-12 px-6 lg:px-8">
      <div className="max-w-3xl mx-auto space-y-8">
        
        {/* Back Link */}
        <Link 
          href="/admin/dashboard" 
          className="inline-flex items-center gap-2 text-sm font-medium text-zinc-400 hover:text-white transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Dashboard
        </Link>

        {/* Page Header */}
        <div className="border-b border-zinc-900 pb-6">
          <h1 className="text-3xl font-extrabold text-white tracking-tight flex items-center gap-3">
            <Sparkles className="h-8 w-8 text-brand-violet" />
            Create New Event
          </h1>
          <p className="mt-2 text-sm text-zinc-400">
            Fill in the details to publish a new technical or non-technical college event.
          </p>
        </div>

        {/* Feedback Messages */}
        {error && (
          <div className="p-4 rounded-xl bg-rose-500/10 border border-rose-500/20 text-sm font-medium text-rose-400">
            {error}
          </div>
        )}
        {success && (
          <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-sm font-medium text-emerald-400">
            Event created successfully! Redirecting to Dashboard...
          </div>
        )}

        {/* Event Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          
          {/* Title & Category */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2">
              <label htmlFor="title" className="block text-sm font-semibold text-zinc-300 mb-2">
                Event Title *
              </label>
              <input
                type="text"
                id="title"
                required
                placeholder="e.g. Hackathon 2026"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-zinc-800 bg-zinc-900 text-white placeholder-zinc-500 focus:outline-none focus:border-brand-violet focus:ring-1 focus:ring-brand-violet transition-colors"
              />
            </div>
            <div>
              <label htmlFor="category" className="block text-sm font-semibold text-zinc-300 mb-2">
                Category *
              </label>
              <select
                id="category"
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-zinc-800 bg-zinc-900 text-white focus:outline-none focus:border-brand-violet focus:ring-1 focus:ring-brand-violet transition-colors"
              >
                <option value="TECHNICAL">Technical</option>
                <option value="NON_TECHNICAL">Non-Technical</option>
              </select>
            </div>
          </div>

          {/* Description */}
          <div>
            <label htmlFor="description" className="block text-sm font-semibold text-zinc-300 mb-2">
              Description & Rules *
            </label>
            <textarea
              id="description"
              required
              rows={5}
              placeholder="Outline event details, round specifications, timeline, rules, and point tables..."
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              className="w-full px-4 py-3 rounded-xl border border-zinc-800 bg-zinc-900 text-white placeholder-zinc-500 focus:outline-none focus:border-brand-violet focus:ring-1 focus:ring-brand-violet transition-colors"
            />
          </div>

          {/* Banner Image link */}
          <div>
            <label htmlFor="bannerUrl" className="block text-sm font-semibold text-zinc-300 mb-2">
              Banner Image URL
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-zinc-500">
                <ImageIcon className="h-5 w-5" />
              </span>
              <input
                type="url"
                id="bannerUrl"
                placeholder="https://example.com/banner.png"
                value={formData.bannerUrl}
                onChange={(e) => setFormData({ ...formData, bannerUrl: e.target.value })}
                className="w-full pl-11 pr-4 py-3 rounded-xl border border-zinc-800 bg-zinc-900 text-white placeholder-zinc-500 focus:outline-none focus:border-brand-violet focus:ring-1 focus:ring-brand-violet transition-colors"
              />
            </div>
          </div>

          {/* Location & Time details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="eventDate" className="block text-sm font-semibold text-zinc-300 mb-2">
                Event Date & Time *
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-zinc-500">
                  <Calendar className="h-5 w-5" />
                </span>
                <input
                  type="datetime-local"
                  id="eventDate"
                  required
                  value={formData.eventDate}
                  onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
                  className="w-full pl-11 pr-4 py-3 rounded-xl border border-zinc-800 bg-zinc-900 text-white focus:outline-none focus:border-brand-violet focus:ring-1 focus:ring-brand-violet transition-colors"
                />
              </div>
            </div>
            <div>
              <label htmlFor="venue" className="block text-sm font-semibold text-zinc-300 mb-2">
                Venue / Hall *
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-zinc-500">
                  <MapPin className="h-5 w-5" />
                </span>
                <input
                  type="text"
                  id="venue"
                  required
                  placeholder="e.g. Lab 3, Auditorium Block"
                  value={formData.venue}
                  onChange={(e) => setFormData({ ...formData, venue: e.target.value })}
                  className="w-full pl-11 pr-4 py-3 rounded-xl border border-zinc-800 bg-zinc-900 text-white placeholder-zinc-500 focus:outline-none focus:border-brand-violet focus:ring-1 focus:ring-brand-violet transition-colors"
                />
              </div>
            </div>
          </div>

          {/* Registration Details */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label htmlFor="registrationDeadline" className="block text-sm font-semibold text-zinc-300 mb-2">
                Registration Deadline *
              </label>
              <input
                type="datetime-local"
                id="registrationDeadline"
                required
                value={formData.registrationDeadline}
                onChange={(e) => setFormData({ ...formData, registrationDeadline: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-zinc-800 bg-zinc-900 text-white focus:outline-none focus:border-brand-violet focus:ring-1 focus:ring-brand-violet transition-colors"
              />
            </div>
            <div>
              <label htmlFor="maxParticipants" className="block text-sm font-semibold text-zinc-300 mb-2">
                Maximum Limit
              </label>
              <input
                type="number"
                id="maxParticipants"
                placeholder="Unlimited if empty"
                value={formData.maxParticipants}
                onChange={(e) => setFormData({ ...formData, maxParticipants: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-zinc-800 bg-zinc-900 text-white placeholder-zinc-500 focus:outline-none focus:border-brand-violet focus:ring-1 focus:ring-brand-violet transition-colors"
              />
            </div>
            <div>
              <label htmlFor="prizePool" className="block text-sm font-semibold text-zinc-300 mb-2">
                Prize Pool *
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-zinc-500">
                  <Trophy className="h-5 w-5" />
                </span>
                <input
                  type="text"
                  id="prizePool"
                  required
                  placeholder="e.g. $5,000 / Merit Certificate"
                  value={formData.prizePool}
                  onChange={(e) => setFormData({ ...formData, prizePool: e.target.value })}
                  className="w-full pl-11 pr-4 py-3 rounded-xl border border-zinc-800 bg-zinc-900 text-white placeholder-zinc-500 focus:outline-none focus:border-brand-violet focus:ring-1 focus:ring-brand-violet transition-colors"
                />
              </div>
            </div>
          </div>

          {/* Team Registration Toggle */}
          <div className="glass-panel p-5 rounded-2xl border border-white/5 space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Users className="h-5 w-5 text-brand-pink" />
                <div>
                  <h4 className="text-sm font-bold text-white">Enable Team Registration</h4>
                  <p className="text-xs text-zinc-400">Allow team leaders to invite members using referral codes.</p>
                </div>
              </div>
              <input
                type="checkbox"
                checked={formData.isTeamRegistration}
                onChange={(e) => setFormData({ ...formData, isTeamRegistration: e.target.checked })}
                className="h-5 w-5 accent-brand-violet rounded bg-zinc-900 border-zinc-850"
              />
            </div>

            {formData.isTeamRegistration && (
              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-zinc-900 animate-in slide-in-from-top-2 duration-200">
                <div>
                  <label htmlFor="minTeamSize" className="block text-xs font-semibold text-zinc-400 mb-1">
                    Minimum Team Size
                  </label>
                  <input
                    type="number"
                    id="minTeamSize"
                    min="1"
                    value={formData.minTeamSize}
                    onChange={(e) => setFormData({ ...formData, minTeamSize: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg border border-zinc-800 bg-zinc-900 text-white focus:outline-none focus:border-brand-violet"
                  />
                </div>
                <div>
                  <label htmlFor="maxTeamSize" className="block text-xs font-semibold text-zinc-400 mb-1">
                    Maximum Team Size
                  </label>
                  <input
                    type="number"
                    id="maxTeamSize"
                    min="1"
                    value={formData.maxTeamSize}
                    onChange={(e) => setFormData({ ...formData, maxTeamSize: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg border border-zinc-800 bg-zinc-900 text-white focus:outline-none focus:border-brand-violet"
                  />
                </div>
              </div>
            )}
          </div>

          {/* Form Actions */}
          <div className="flex items-center justify-end gap-4 border-t border-zinc-900 pt-6">
            <Link
              href="/admin/dashboard"
              className="px-5 py-3 rounded-xl border border-zinc-800 bg-zinc-900/50 hover:bg-zinc-850 hover:border-zinc-700 text-sm font-semibold text-zinc-400 hover:text-white transition-colors"
            >
              Cancel
            </Link>
            <button
              type="submit"
              disabled={loading}
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-brand-violet to-brand-pink hover:opacity-95 text-sm font-semibold text-white shadow-xl shadow-brand-violet/10 disabled:opacity-50 transition-opacity"
            >
              {loading ? 'Publishing Event...' : 'Publish Event'}
            </button>
          </div>

        </form>

      </div>
    </div>
  );
}
