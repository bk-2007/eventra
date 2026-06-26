'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Calendar, User, Mail, KeyRound, Building, Phone, ArrowRight } from 'lucide-react';

export default function Signup() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    college: '',
    password: '',
    confirmPassword: ''
  });

  const [error, setError] = useState('');

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    setLoading(true);
    // Mock registration delay
    await new Promise((resolve) => setTimeout(resolve, 1500));
    router.push('/student/dashboard');
    setLoading(false);
  };

  return (
    <div className="relative isolate min-h-screen bg-zinc-950 flex items-center justify-center py-12 px-6 lg:px-8">
      {/* Background decoration grid */}
      <div className="absolute inset-0 -z-10 opacity-5 bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:24px_24px]" />
      
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 w-[30rem] h-[30rem] bg-brand-violet/10 rounded-full blur-3xl" />

      <div className="glass-panel w-full max-w-md rounded-3xl border border-white/5 p-8 space-y-8 bg-zinc-900/10">
        
        {/* Brand Logo & Header */}
        <div className="text-center">
          <div className="inline-flex p-3 rounded-2xl bg-gradient-to-tr from-brand-violet to-brand-pink text-white shadow-lg shadow-brand-violet/20 mb-4 animate-bounce">
            <Calendar className="h-6 w-6" />
          </div>
          <h2 className="text-3xl font-extrabold text-white tracking-tight">Create Account</h2>
          <p className="mt-2 text-xs text-zinc-400">
            Sign up now to register for events and earn digital certificates.
          </p>
        </div>

        {/* Error Notification */}
        {error && (
          <div className="p-3.5 rounded-xl bg-rose-500/10 border border-rose-500/20 text-xs font-semibold text-rose-400">
            {error}
          </div>
        )}

        {/* Credentials Form */}
        <form onSubmit={handleSignup} className="space-y-4">
          
          {/* Full Name */}
          <div>
            <label htmlFor="name" className="block text-xs font-semibold text-zinc-300 mb-1.5">
              Full Name
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-zinc-500">
                <User className="h-4 w-4" />
              </span>
              <input
                type="text"
                id="name"
                required
                placeholder="Sarah Connor"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full pl-10 pr-4 py-2.5 text-sm rounded-xl border border-zinc-800 bg-zinc-900 text-white placeholder-zinc-650 focus:outline-none focus:border-brand-violet focus:ring-1 focus:ring-brand-violet"
              />
            </div>
          </div>

          {/* College Name */}
          <div>
            <label htmlFor="college" className="block text-xs font-semibold text-zinc-300 mb-1.5">
              College / University
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-zinc-500">
                <Building className="h-4 w-4" />
              </span>
              <input
                type="text"
                id="college"
                required
                placeholder="State Engineering College"
                value={formData.college}
                onChange={(e) => setFormData({ ...formData, college: e.target.value })}
                className="w-full pl-10 pr-4 py-2.5 text-sm rounded-xl border border-zinc-800 bg-zinc-900 text-white placeholder-zinc-650 focus:outline-none focus:border-brand-violet focus:ring-1 focus:ring-brand-violet"
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-xs font-semibold text-zinc-300 mb-1.5">
              College Email
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-zinc-500">
                <Mail className="h-4 w-4" />
              </span>
              <input
                type="email"
                id="email"
                required
                placeholder="sarah@college.edu"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full pl-10 pr-4 py-2.5 text-sm rounded-xl border border-zinc-800 bg-zinc-900 text-white placeholder-zinc-650 focus:outline-none focus:border-brand-violet focus:ring-1 focus:ring-brand-violet"
              />
            </div>
          </div>

          {/* Phone */}
          <div>
            <label htmlFor="phone" className="block text-xs font-semibold text-zinc-300 mb-1.5">
              Phone Number
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-zinc-500">
                <Phone className="h-4 w-4" />
              </span>
              <input
                type="tel"
                id="phone"
                required
                placeholder="+1 234 567 890"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full pl-10 pr-4 py-2.5 text-sm rounded-xl border border-zinc-800 bg-zinc-900 text-white placeholder-zinc-650 focus:outline-none focus:border-brand-violet focus:ring-1 focus:ring-brand-violet"
              />
            </div>
          </div>

          {/* Password */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="pass" className="block text-xs font-semibold text-zinc-300 mb-1.5">
                Password
              </label>
              <input
                type="password"
                id="pass"
                required
                placeholder="••••••••"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                className="w-full px-3 py-2.5 text-sm rounded-xl border border-zinc-800 bg-zinc-900 text-white placeholder-zinc-650 focus:outline-none focus:border-brand-violet focus:ring-1 focus:ring-brand-violet"
              />
            </div>
            <div>
              <label htmlFor="conf" className="block text-xs font-semibold text-zinc-300 mb-1.5">
                Confirm
              </label>
              <input
                type="password"
                id="conf"
                required
                placeholder="••••••••"
                value={formData.confirmPassword}
                onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                className="w-full px-3 py-2.5 text-sm rounded-xl border border-zinc-800 bg-zinc-900 text-white placeholder-zinc-650 focus:outline-none focus:border-brand-violet focus:ring-1 focus:ring-brand-violet"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full mt-2 py-3 rounded-xl bg-gradient-to-r from-brand-violet to-brand-pink text-sm font-semibold text-white shadow-xl shadow-brand-violet/15 hover:opacity-95 transition-opacity disabled:opacity-50"
          >
            {loading ? 'Registering...' : 'Register'}
          </button>
        </form>

        {/* Bottom Link */}
        <p className="text-center text-xs text-zinc-400">
          Already have an account?{' '}
          <Link href="/login" className="text-brand-pink font-semibold hover:underline">
            Login
          </Link>
        </p>

      </div>
    </div>
  );
}
