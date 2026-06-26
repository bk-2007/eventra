import Link from 'next/link';
import { 
  ArrowRight, 
  Code, 
  Music, 
  Sparkles, 
  Cpu, 
  Award, 
  Users, 
  QrCode, 
  ShieldCheck, 
  Search, 
  Trophy 
} from 'lucide-react';

export default function Home() {
  const categories = [
    {
      title: 'Technical Events',
      description: 'Hackathons, coding challenges, robotics tournaments, and web development face-offs.',
      icon: Code,
      color: 'from-blue-500/10 to-indigo-500/10 hover:border-indigo-500/50',
      iconColor: 'text-indigo-400',
      badges: ['Hackathons', 'Coding', 'Robotics']
    },
    {
      title: 'Non-Technical Events',
      description: 'Cultural festivals, debate tournaments, esports arenas, and photography exhibitions.',
      icon: Music,
      color: 'from-pink-500/10 to-rose-500/10 hover:border-rose-500/50',
      iconColor: 'text-rose-400',
      badges: ['Music', 'Debates', 'Gaming']
    }
  ];

  const features = [
    {
      title: 'Team Formation',
      description: 'Create teams, send secure invite links, and register for team events seamlessly.',
      icon: Users,
    },
    {
      title: 'Verified Certificates',
      description: 'Auto-generated PDF certificates complete with a digital QR code for instant resume verification.',
      icon: Award,
    },
    {
      title: 'QR Code Check-ins',
      description: 'Skip the paper lines. Dynamic QR codes scanned by organizers check you in in less than a second.',
      icon: QrCode,
    }
  ];

  return (
    <div className="relative isolate overflow-hidden min-h-screen bg-zinc-950">
      {/* Background Radial Glow */}
      <div 
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        aria-hidden="true"
      >
        <div 
          className="relative left-[calc(50%-11rem)] aspect-1155/678 w-[36rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-brand-violet to-brand-pink opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style={{
            clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)'
          }}
        />
      </div>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 pt-24 pb-20 sm:pt-32 lg:px-8 text-center">
        <div className="flex justify-center mb-6">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-brand-violet/30 bg-brand-violet/10 text-xs font-semibold text-brand-violet leading-5 animate-pulse">
            <Sparkles className="h-3.5 w-3.5" />
            Empowering Campus Life
          </span>
        </div>

        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-6xl max-w-4xl mx-auto leading-tight">
          Unleash Your Potential at{' '}
          <span className="bg-gradient-to-r from-brand-violet via-pink-500 to-brand-pink bg-clip-text text-transparent glow-text">
            College Events
          </span>
        </h1>

        <p className="mt-6 text-lg leading-8 text-zinc-400 max-w-2xl mx-auto">
          Eventra is the ultimate campus platform to discover technical hackathons, cultural festivals, manage team registrations, and earn verified digital credentials.
        </p>

        {/* Call to Actions */}
        <div className="mt-10 flex items-center justify-center gap-6">
          <Link
            href="/events"
            className="flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-brand-violet to-brand-pink text-base font-semibold text-white shadow-xl shadow-brand-violet/20 hover:opacity-95 transform hover:-translate-y-0.5 transition-all duration-200"
          >
            Explore Events
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/events/create"
            className="px-6 py-3.5 rounded-2xl border border-zinc-800 bg-zinc-900/40 text-base font-semibold text-zinc-300 hover:text-white hover:bg-zinc-850 hover:border-zinc-700 transition-all duration-200"
          >
            Organize Event
          </Link>
        </div>
      </section>

      {/* Category Selection Grid */}
      <section className="max-w-7xl mx-auto px-6 py-12 lg:px-8 border-t border-zinc-900">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">Choose Your Domain</h2>
          <p className="mt-4 text-zinc-400">Explore events filtered by technical expertise or cultural participation.</p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {categories.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <div 
                key={idx} 
                className={`glass-panel glass-panel-hover p-8 rounded-3xl border border-white/5 flex flex-col justify-between bg-gradient-to-br ${cat.color}`}
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className={`p-4 rounded-2xl bg-zinc-950/60 ${cat.iconColor}`}>
                      <Icon className="h-8 w-8" />
                    </div>
                    <div className="flex gap-2">
                      {cat.badges.map((badge, bIdx) => (
                        <span key={bIdx} className="px-2.5 py-1 rounded-lg bg-zinc-950/40 text-xs font-medium text-zinc-400">
                          {badge}
                        </span>
                      ))}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">{cat.title}</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed mb-6">{cat.description}</p>
                </div>
                <Link 
                  href={`/events?category=${cat.title.toLowerCase().includes('technical') ? 'TECHNICAL' : 'NON_TECHNICAL'}`}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-brand-violet transition-colors group/link"
                >
                  Browse {cat.title}
                  <ArrowRight className="h-4 w-4 transform group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            );
          })}
        </div>
      </section>

      {/* Feature Highlights */}
      <section className="max-w-7xl mx-auto px-6 py-20 lg:px-8 border-t border-zinc-900">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
          {features.map((feat, idx) => {
            const Icon = feat.icon;
            return (
              <div key={idx} className="flex gap-4">
                <div className="flex-none p-3 rounded-2xl bg-zinc-900 border border-zinc-800 text-brand-violet">
                  <Icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">{feat.title}</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">{feat.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Trust / Callout Banner */}
      <section className="max-w-7xl mx-auto px-6 pb-24 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-white/5 bg-zinc-900/30 p-8 sm:px-12 sm:py-16 md:flex md:items-center md:justify-between">
          {/* Decorative background grid */}
          <div className="absolute inset-0 -z-10 opacity-5 bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:24px_24px]" />
          
          <div className="max-w-xl">
            <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">Ready to compete and showcase?</h2>
            <p className="mt-4 text-sm text-zinc-400 leading-relaxed">
              Log in to register for dynamic events, collaborate with peers, generate your unique team invites, and build your digital credentials portfolio.
            </p>
          </div>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 md:mt-0 md:flex-none">
            <Link
              href="/login"
              className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-white text-sm font-semibold text-zinc-950 hover:bg-zinc-100 transition-colors"
            >
              Get Started
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
