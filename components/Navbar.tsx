'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Calendar, Menu, X, PlusCircle, LayoutDashboard, User } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Browse Events', href: '/events' },
    { name: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
  ];

  const isActive = (path: string) => pathname === path;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/5 bg-zinc-950/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo Section */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="p-2 rounded-xl bg-gradient-to-tr from-brand-violet to-brand-pink text-white shadow-lg shadow-brand-violet/20 group-hover:scale-105 transition-transform duration-300">
                <Calendar className="h-5 w-5" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-white via-zinc-100 to-zinc-400 bg-clip-text text-transparent">
                Eventra
              </span>
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors duration-200 hover:text-white ${
                  isActive(link.href) ? 'text-white' : 'text-zinc-400'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              href="/events/create"
              className="flex items-center gap-2 px-4 py-2 rounded-xl border border-zinc-800 bg-zinc-900/50 text-sm font-medium text-zinc-300 hover:text-white hover:bg-zinc-850 hover:border-zinc-700 transition-all duration-200"
            >
              <PlusCircle className="h-4 w-4 text-brand-violet" />
              Create Event
            </Link>

            <Link
              href="/login"
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-brand-violet to-brand-pink hover:opacity-90 text-sm font-semibold text-white shadow-md shadow-brand-violet/10 transition-all duration-200"
            >
              <User className="h-4 w-4" />
              Log In
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-900 focus:outline-none transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {isOpen && (
        <div className="md:hidden border-b border-white/5 bg-zinc-950 px-4 pt-2 pb-6 space-y-4 animate-in fade-in slide-in-from-top-5 duration-200">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`flex items-center gap-3 px-3 py-2 rounded-xl text-base font-medium transition-colors ${
                  isActive(link.href)
                    ? 'bg-zinc-900 text-white'
                    : 'text-zinc-400 hover:text-white hover:bg-zinc-900/50'
                }`}
              >
                {link.icon && <link.icon className="h-4 w-4" />}
                {link.name}
              </Link>
            ))}
          </div>

          <div className="border-t border-zinc-900 pt-4 flex flex-col gap-3">
            <Link
              href="/events/create"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center gap-2 w-full px-4 py-2.5 rounded-xl border border-zinc-800 bg-zinc-900/50 text-sm font-medium text-zinc-300 hover:text-white hover:bg-zinc-850 hover:border-zinc-700 transition-colors"
            >
              <PlusCircle className="h-4 w-4 text-brand-violet" />
              Create Event
            </Link>

            <Link
              href="/login"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center gap-2 w-full px-4 py-2.5 rounded-xl bg-gradient-to-r from-brand-violet to-brand-pink text-sm font-semibold text-white transition-opacity hover:opacity-90"
            >
              <User className="h-4 w-4" />
              Log In
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
