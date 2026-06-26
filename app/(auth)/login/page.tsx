'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Calendar, User, Shield, KeyRound, Sparkles, Mail } from 'lucide-react';

export default function Login() {
  const router = useRouter();
  const [role, setRole] = useState<'STUDENT' | 'ADMIN'>('STUDENT');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Mock Login delay
    await new Promise((resolve) => setTimeout(resolve, 1200));
    
    // Redirect based on selected user role
    if (role === 'ADMIN') {
      router.push('/admin/dashboard');
    } else {
      router.push('/student/dashboard');
    }
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
          <h2 className="text-3xl font-extrabold text-white tracking-tight">Welcome Back</h2>
          <p className="mt-2 text-xs text-zinc-400">
            Select your role and log in to manage your campus event activities.
          </p>
        </div>

        {/* Role Selector Tabs */}
        <div className="flex p-1 rounded-xl bg-zinc-900 border border-zinc-800/80">
          <button
            onClick={() => setRole('STUDENT')}
            className={`flex-grow flex items-center justify-center gap-2 py-2.5 text-xs font-semibold rounded-lg transition-colors ${
              role === 'STUDENT' ? 'bg-brand-violet text-white' : 'text-zinc-400 hover:text-zinc-200'
            }`}
          >
            <User className="h-3.5 w-3.5" />
            Student Portal
          </button>
          <button
            onClick={() => setRole('ADMIN')}
            className={`flex-grow flex items-center justify-center gap-2 py-2.5 text-xs font-semibold rounded-lg transition-colors ${
              role === 'ADMIN' ? 'bg-brand-violet text-white' : 'text-zinc-400 hover:text-zinc-200'
            }`}
          >
            <Shield className="h-3.5 w-3.5" />
            Admin Portal
          </button>
        </div>

        {/* Credentials Form */}
        <form onSubmit={handleLogin} className="space-y-6">
          <div className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-xs font-semibold text-zinc-300 mb-2">
                College Email Address
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-zinc-500">
                  <Mail className="h-4 w-4" />
                </span>
                <input
                  type="email"
                  id="email"
                  required
                  placeholder="name@college.edu"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 text-sm rounded-xl border border-zinc-800 bg-zinc-900 text-white placeholder-zinc-650 focus:outline-none focus:border-brand-violet focus:ring-1 focus:ring-brand-violet"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <label htmlFor="password" className="block text-xs font-semibold text-zinc-300">
                  Password
                </label>
                <Link href="/forgot" className="text-[10px] text-brand-violet hover:underline">
                  Forgot Password?
                </Link>
              </div>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-zinc-500">
                  <KeyRound className="h-4 w-4" />
                </span>
                <input
                  type="password"
                  id="password"
                  required
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 text-sm rounded-xl border border-zinc-800 bg-zinc-900 text-white placeholder-zinc-650 focus:outline-none focus:border-brand-violet focus:ring-1 focus:ring-brand-violet"
                />
              </div>
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 rounded-xl bg-gradient-to-r from-brand-violet to-brand-pink text-sm font-semibold text-white shadow-xl shadow-brand-violet/15 hover:opacity-95 transition-opacity disabled:opacity-50"
          >
            {loading ? 'Authenticating...' : 'Sign In'}
          </button>
        </form>

        {/* Bottom Link */}
        <p className="text-center text-xs text-zinc-400">
          Don't have an account?{' '}
          <Link href="/signup" className="text-brand-pink font-semibold hover:underline">
            Register Account
          </Link>
        </p>

      </div>
    </div>
  );
}
