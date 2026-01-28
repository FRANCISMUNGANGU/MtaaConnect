import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// --- Sub-components ---

const NavItem = ({ label, active = false }) => (
  <a 
    href="#" 
    className={`text-sm transition-colors ${active ? 'text-[#0066FF] font-bold' : 'text-[#94A3B8] hover:text-white font-semibold'}`}
  >
    {label}
  </a>
);

const CategoryBtn = ({ icon, label, active = false }) => (
  <button className={`flex items-center gap-2 px-6 py-3 rounded-2xl text-sm transition-all shrink-0 ${
    active 
    ? 'bg-[#0066FF] text-white font-bold shadow-lg shadow-[#0066FF]/20' 
    : 'bg-white/5 backdrop-blur-md text-white border border-white/10 font-semibold hover:bg-white/10'
  }`}>
    <span className="material-symbols-outlined text-[18px]">{icon}</span>
    {label}
  </button>
);

const AdCard = ({ price, category, time, title, location, image, onView }) => (
  <div className="group flex flex-col backdrop-blur-2xl bg-[rgba(15,18,25,0.7)] border border-white/10 rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-[#0066FF]/20 transition-all duration-500">
    <div className="relative w-full aspect-[4/3] overflow-hidden">
      <div 
        className="absolute inset-0 bg-center bg-cover transition-transform duration-700 group-hover:scale-110" 
        style={{ backgroundImage: `url(${image})` }}
      />
      <div className="absolute top-4 left-4 bg-[#0066FF] backdrop-blur-md text-white font-black px-4 py-2 rounded-2xl text-sm shadow-xl border border-white/20">
        {price}
      </div>
      <button className="absolute top-4 right-4 size-10 bg-black/40 backdrop-blur-xl rounded-2xl flex items-center justify-center text-white hover:bg-[#0066FF] transition-all border border-white/10">
        <span className="material-symbols-outlined text-[20px]">favorite</span>
      </button>
    </div>
    
    <div className="p-6 flex flex-col flex-1">
      <div className="flex items-center justify-between mb-4">
        <span className="text-[10px] font-bold uppercase tracking-[0.1em] text-[#0066FF] px-3 py-1 bg-[#0066FF]/15 rounded-2xl border border-[#0066FF]/20">
          {category}
        </span>
        <span className="text-[#94A3B8] text-[11px] font-bold flex items-center gap-1.5 uppercase tracking-wide">
          <span className="material-symbols-outlined text-[14px] text-[#0066FF]">schedule</span> {time}
        </span>
      </div>
      <h3 className="text-white font-bold text-lg mb-2 line-clamp-1 group-hover:text-[#0066FF] transition-colors">{title}</h3>
      <p className="text-[#94A3B8] text-sm mb-6 line-clamp-1 flex items-center gap-1.5 font-medium">
        <span className="material-symbols-outlined text-[16px] text-[#0066FF]">location_on</span> {location}
      </p>
      <div className="mt-auto">
        <button
          onClick={onView}
          className="w-full py-3.5 bg-white/5 text-white rounded-2xl text-sm font-bold border border-white/10 hover:bg-[#0066FF] hover:text-white hover:border-[#0066FF] transition-all active:scale-95"
        >
          View Details
        </button>
      </div>
    </div>
  </div>
);

// --- Main Page Component ---

const Ads = () => {
  const [activeGate, setActiveGate] = useState('Juja Gate A');
  const navigate = useNavigate();

  const gates = ["Juja Gate A", "Juja Gate C", "Oasis", "Juja South", "Highpoint"];
  
  const ads = [
    { price: "KSh 250", category: "Meals", time: "2 mins ago", title: "Kibandaski Special - Chicken & Chips", location: "Juja Gate A", image: "https://picsum.photos/400/300?random=1" },
    { price: "KSh 8,000/mo", category: "Hostels", time: "1 hour ago", title: "Studio Room near Gate C", location: "Oasis", image: "https://picsum.photos/400/300?random=2" },
    { price: "KSh 35,000", category: "Electronics", time: "5 hours ago", title: "HP EliteBook 840 G5", location: "Juja Gate C", image: "https://picsum.photos/400/300?random=3" },
    { price: "Starts KSh 500", category: "Services", time: "1 day ago", title: "Graphic Design Services", location: "Remote • Juja", image: "https://picsum.photos/400/300?random=4" },
  ];

  return (
    <div className="bg-[#05070A] text-white min-h-screen font-['Plus_Jakarta_Sans'] selection:bg-[#0066FF]/30 overflow-x-hidden relative">
      {/* Background Blobs */}
      <div className="fixed top-[-15%] right-[-10%] w-[600px] h-[600px] bg-[#0066FF]/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="fixed bottom-[-15%] left-[-10%] w-[600px] h-[600px] bg-[#0066FF]/10 rounded-full blur-[140px] pointer-events-none" />



      {/* Main Content */}
      <main className="flex-1 px-4 lg:px-20 py-12 max-w-[1200px] mx-auto w-full relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white">Marketplace Ads</h2>
            <p className="text-[#94A3B8] text-lg max-w-xl font-medium">Find the best deals, student meals, and room openings around the JKUAT community.</p>
          </div>
          <button className="flex items-center justify-center gap-3 bg-[#0066FF] hover:bg-[#0066FF]/90 text-white font-bold py-4.5 px-10 rounded-2xl transition-all shadow-xl shadow-[#0066FF]/40 active:scale-95 text-lg">
            <span className="material-symbols-outlined font-bold">add_circle</span>
            <span>Post Ad</span>
          </button>
        </div>

        {/* Filters */}
        <div className="space-y-8 mb-12">
          <div className="flex border-b border-white/5 overflow-x-auto scrollbar-hide">
            {gates.map(gate => (
              <button 
                key={gate}
                onClick={() => setActiveGate(gate)}
                className={`px-8 py-4 border-b-2 transition-colors text-sm whitespace-nowrap font-bold ${activeGate === gate ? 'border-[#0066FF] text-[#0066FF]' : 'border-transparent text-[#94A3B8] hover:text-white'}`}
              >
                {gate}
              </button>
            ))}
          </div>

          <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
            <CategoryBtn icon="grid_view" label="All Ads" active />
            <CategoryBtn icon="restaurant" label="Student Meals" />
            <CategoryBtn icon="apartment" label="Hostels" />
            <CategoryBtn icon="devices" label="Electronics" />
            <CategoryBtn icon="menu_book" label="Books" />
          </div>
        </div>

        {/* Ad Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {ads.map((ad, idx) => (
            <AdCard
              key={idx}
              {...ad}
              onView={() => navigate(`/ads/${idx + 1}`)}
            />
          ))}
        </div>

        {/* Load More */}
        <div className="mt-20 flex flex-col items-center gap-6">
          <button className="px-12 py-4 bg-white/5 backdrop-blur-md text-white border border-white/10 font-bold rounded-2xl hover:bg-[#0066FF] transition-all active:scale-95">
            Load More Ads
          </button>
          <p className="text-[#94A3B8] text-sm font-bold tracking-wide uppercase">Showing 4 of 124 available student deals</p>
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-auto border-t border-white/5 bg-[#05070A]/80 backdrop-blur-xl py-16 px-4 lg:px-20">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-16">
          <div className="space-y-6">
            <div className="flex items-center gap-2 text-[#0066FF]">
              <div className="size-8 bg-[#0066FF] rounded-xl flex items-center justify-center text-white">
                <span className="material-symbols-outlined text-[20px] font-bold">hub</span>
              </div>
              <h1 className="text-white text-xl font-extrabold">MtaaConnect</h1>
            </div>
            <p className="text-[#94A3B8] text-sm font-semibold">The premier community marketplace for JKUAT students.</p>
          </div>
          {/* ... Add other footer columns similarly ... */}
        </div>
      </footer>
    </div>
  );
};

export default Ads;