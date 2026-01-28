import React, { useState } from 'react';

// Reusable Icon Component
const Icon = ({ name, className = "", fill = false }) => (
  <span className={`material-symbols-outlined ${fill ? 'fill-1' : ''} ${className}`}>
    {name}
  </span>
);

const AdsDetails = () => {
  const [isSaved, setIsSaved] = useState(false);

  return (
    <div className="bg-[#0B0E14] text-slate-100 min-h-screen font-['Plus_Jakarta_Sans']">
      
      {/* Navigation Header */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0B0E14]/80 backdrop-blur-md">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2 text-[#1f9ef9]">
              <div className="size-8">
                <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 4H17.3334V17.3334H30.6666V30.6666H44V44H4V4Z" fill="currentColor" />
                </svg>
              </div>
              <h2 className="text-xl font-bold tracking-tight text-white">MtaaConnect</h2>
            </div>
            <div className="flex items-center gap-4">
              <button className="text-slate-400 hover:text-white transition-colors">
                <Icon name="search" />
              </button>
              <div className="h-8 w-8 rounded-full border border-[#1f9ef9]/20 bg-slate-700" />
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
        {/* Title and Price Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 bg-[#1f9ef9]/10 text-[#1f9ef9] text-[10px] font-bold uppercase tracking-wider rounded-full border border-[#1f9ef9]/20">
                Housing
              </span>
              <span className="text-slate-500 text-sm flex items-center gap-1">
                <Icon name="schedule" className="text-sm" /> 2h ago
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-tight">
              Hall 7 Roommate Wanted
            </h1>
          </div>
          <div className="flex flex-col md:items-end">
            <div className="text-[#1f9ef9] text-3xl font-black">Ksh 5,500</div>
            <div className="text-slate-400 text-sm">per month</div>
          </div>
        </div>

        {/* Hero Image Section */}
        <div className="relative group mb-10">
          <div className="aspect-[16/9] w-full rounded-[20px] overflow-hidden border border-white/10 bg-[#1f9ef910] backdrop-blur-xl shadow-2xl">
            <div 
              className="w-full h-full bg-cover bg-center" 
              style={{ backgroundImage: `url('https://images.unsplash.com/photo-1555854816-802f188095e4?auto=format&fit=crop&q=80')` }} 
            />
          </div>
          <div className="absolute bottom-4 right-4 flex gap-2">
            <button 
              onClick={() => setIsSaved(!isSaved)}
              className="bg-black/50 hover:bg-black/70 backdrop-blur-md text-white p-2 rounded-lg transition-all"
            >
              <Icon name="favorite" fill={isSaved} className={isSaved ? "text-red-500" : ""} />
            </button>
            <button className="bg-black/50 hover:bg-black/70 backdrop-blur-md text-white p-2 rounded-lg transition-all">
              <Icon name="fullscreen" />
            </button>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="md:col-span-2 space-y-8">
            <section className="space-y-4">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <Icon name="description" className="text-[#1f9ef9]" /> Description
              </h3>
              <p className="text-slate-400 leading-relaxed text-lg">
                Looking for a chill and organized roommate to share a spacious room in Hall 7, JKUAT. 
                The room is well-lit and comes with basic furniture. Ideal for a student who values 
                a quiet study environment and clean living spaces.
              </p>
              <div className="pt-4 flex flex-wrap gap-2">
                {['Verified Room', 'Utilities Included', 'High-speed Wi-Fi'].map((tag) => (
                  <span key={tag} className="bg-white/5 border border-white/10 px-4 py-2 rounded-[20px] text-sm font-medium">
                    {tag}
                  </span>
                ))}
              </div>
            </section>
          </div>

          <div className="space-y-6">
            {/* Info Cards */}
            <div className="bg-[#1f9ef90a] backdrop-blur-md rounded-[20px] p-6 border border-white/10">
              <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4">Location</h3>
              <div className="flex items-start gap-3">
                <Icon name="location_on" className="text-[#1f9ef9]" />
                <div>
                  <div className="font-bold text-white">JKUAT Main Campus</div>
                  <div className="text-slate-400 text-sm">Hall 7, Juja</div>
                </div>
              </div>
            </div>

            <div className="bg-[#1f9ef90a] backdrop-blur-md rounded-[20px] p-6 border border-white/10">
              <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4">Posted By</h3>
              <div className="flex items-center gap-3">
                <div className="size-10 rounded-full bg-slate-600 border border-[#1f9ef9]/50" />
                <div>
                  <div className="font-bold text-white">Alex K.</div>
                  <div className="text-[#1f9ef9] text-[10px] flex items-center gap-1">
                    <Icon name="verified" fill className="text-[12px]" /> Verified Student
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Floating Action Button - Fixed Bottom */}
      <div className="fixed bottom-0 left-0 right-0 p-4 md:p-6 bg-gradient-to-t from-[#0B0E14] via-[#0B0E14]/90 to-transparent z-40">
        <div className="max-w-4xl mx-auto">
          <button className="w-full bg-[#1f9ef9] hover:bg-[#1f9ef9]/90 text-white font-extrabold py-4 rounded-[20px] flex items-center justify-center gap-3 transition-all shadow-[0_10px_40px_-10px_rgba(31,158,249,0.5)] transform hover:-translate-y-1">
            <Icon name="message" />
            Contact Seller
          </button>
        </div>
      </div>

      <footer className="mt-20 border-t border-white/10 py-12 pb-32 bg-black/20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 text-[#1f9ef9]/50 mb-6">
            <div className="size-5">
              <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 4H17.3334V17.3334H30.6666V30.6666H44V44H4V4Z" fill="currentColor" />
              </svg>
            </div>
            <h2 className="text-base font-bold tracking-tight text-white/50">MtaaConnect</h2>
          </div>
          <p className="text-slate-600 text-[10px]">© 2024 MtaaConnect Hub. Built for JKUAT students.</p>
        </div>
      </footer>
    </div>
  );
};

export default AdsDetails;