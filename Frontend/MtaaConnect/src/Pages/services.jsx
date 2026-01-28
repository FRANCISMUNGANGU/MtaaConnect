import React, { useState } from 'react';

// --- Shared Components ---

const SidebarLink = ({ icon, label, active = false }) => (
  <a
    href="#"
    className={`flex items-center gap-3 px-4 py-3 rounded-[20px] transition-all font-semibold ${
      active
        ? 'bg-[#0066FF] text-white font-bold shadow-lg shadow-[#0066FF]/20'
        : 'text-[#94A3B8] hover:bg-white/5 hover:text-white'
    }`}
  >
    <span className="material-symbols-outlined">{icon}</span>
    <span>{label}</span>
  </a>
);

const ServiceCard = ({ image, rating, category, title, desc, icon }) => (
  <div className="bg-[#0F1219]/70 backdrop-blur-xl border border-white/10 rounded-[20px] overflow-hidden group hover:shadow-2xl hover:shadow-[#0066FF]/20 transition-all duration-500">
    <div className="h-44 bg-gray-800 relative overflow-hidden">
      <img
        alt={title}
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-80 group-hover:opacity-100"
        src={image}
      />
      <div className="absolute top-4 right-4 bg-[#05070A]/80 backdrop-blur px-3 py-1.5 rounded-full flex items-center gap-1 shadow-md border border-white/10">
        <span className="material-symbols-outlined text-[16px] text-yellow-500 filled-icon">star</span>
        <span className="text-xs font-extrabold text-white">{rating}</span>
      </div>
    </div>
    <div className="p-6">
      <div className="flex items-center gap-2 mb-2">
        <span className="px-3 py-1 rounded-full bg-[#0066FF]/15 text-[#0066FF] text-[10px] font-black uppercase tracking-wider border border-[#0066FF]/20">
          Verified
        </span>
        <span className="text-xs text-[#94A3B8] font-bold">• {category}</span>
      </div>
      <h3 className="text-lg font-extrabold mb-1 text-white group-hover:text-[#0066FF] transition-colors">{title}</h3>
      <p className="text-sm text-[#94A3B8] mb-6 line-clamp-2 font-medium">{desc}</p>
      <button className="w-full h-12 bg-[#0066FF] text-white text-sm font-bold rounded-[20px] hover:bg-[#0055DD] transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#0066FF]/20 active:scale-95">
        <span className="material-symbols-outlined text-xl">{icon}</span>
        Request Service
      </button>
    </div>
  </div>
);

// --- Main Page ---

const Services = () => {
  const [activeCategory, setActiveCategory] = useState('All Services');

  const services = [
    { rating: "4.8", category: "Boda Boda", title: "John's Fast Boda", desc: "Reliable transportation within Juja and surrounding estates. Fast and safe.", icon: "electric_moped", image: "https://picsum.photos/400/300?random=11" },
    { rating: "4.9", category: "Laundry", title: "Mama Safi Laundry", desc: "Wash, dry, and iron services with free pickup for students at Oasis and Gachororo.", icon: "dry_cleaning", image: "https://picsum.photos/400/300?random=12" },
    { rating: "4.2", category: "Electronics", title: "QuickFix Electronics", desc: "Specialists in laptop repairs, screen replacements, and phone fixing.", icon: "build", image: "https://picsum.photos/400/300?random=13" },
    { rating: "4.5", category: "Water & Gas", title: "Juja Pure Water", desc: "20L water refills delivered straight to your hostel room. Pure and affordable.", icon: "water_drop", image: "https://picsum.photos/400/300?random=14" },
  ];

  return (
    <div className="min-h-screen bg-[#05070A] text-white font-['Plus_Jakarta_Sans'] selection:bg-[#0066FF]/30">
      {/* Background Blobs for that "previous one" look */}
      <div className="fixed top-[-10%] right-[-5%] w-[500px] h-[500px] bg-[#0066FF]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="fixed bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-[#0066FF]/5 rounded-full blur-[120px] pointer-events-none" />


      <main className="flex-1 max-w-[1440px] mx-auto w-full flex relative z-10">
        {/* Sidebar */}
        <aside className="w-72 hidden lg:flex flex-col border-r border-white/5 p-8 gap-8">
          <div>
            <h3 className="text-[11px] font-bold text-[#475569] uppercase tracking-[2px] mb-6">Explore</h3>
            <div className="flex flex-col gap-2">
              <SidebarLink icon="grid_view" label="All Services" active={activeCategory === 'All Services'} />
              <SidebarLink icon="motorcycle" label="Boda Boda" />
              <SidebarLink icon="local_laundry_service" label="Laundry" />
              <SidebarLink icon="home_repair_service" label="Repairs" />
              <SidebarLink icon="water_drop" label="Essentials" />
            </div>
          </div>
          <div>
            <h3 className="text-[11px] font-bold text-[#475569] uppercase tracking-[2px] mb-6">User Space</h3>
            <div className="flex flex-col gap-2">
              <SidebarLink icon="history" label="History" />
              <SidebarLink icon="favorite" label="Favorites" />
            </div>
          </div>
        </aside>

        {/* Content Area */}
        <section className="flex-1 flex flex-col min-w-0">
          <div className="px-8 pt-10">
            <div className="max-w-4xl">
              <h1 className="text-4xl font-extrabold tracking-tight mb-3 bg-gradient-to-r from-[#0066FF] to-[#60A5FA] bg-clip-text text-transparent">
                Service Directory
              </h1>
              <p className="text-[#94A3B8] mb-8 text-lg font-medium">
                Connecting JKUAT Main Campus with reliable student-focused services.
              </p>
              
              <div className="relative group mb-8">
                <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
                  <span className="material-symbols-outlined text-[#475569] group-focus-within:text-[#0066FF] transition-colors">search</span>
                </div>
                <input 
                  className="block w-full h-16 pl-14 pr-6 bg-white/5 border-none rounded-[20px] ring-1 ring-white/10 focus:ring-2 focus:ring-[#0066FF] text-base font-semibold placeholder-[#475569] text-white transition-all outline-none" 
                  placeholder="Search for boda, laundry, or laptop repair..." 
                  type="text"
                />
              </div>

              {/* Quick Filters */}
              <div className="flex gap-3 overflow-x-auto pb-4 no-scrollbar">
                {['Trending', 'Highly Rated', 'Verified Providers', 'Near Main Gate'].map((filter, i) => (
                  <div 
                    key={filter} 
                    className={`flex h-11 shrink-0 items-center justify-center px-6 rounded-full cursor-pointer transition-all font-bold text-sm ${
                      i === 0 ? 'bg-[#0066FF] text-white shadow-lg shadow-[#0066FF]/20' : 'bg-white/5 border border-white/10 text-[#94A3B8] hover:text-white hover:border-[#0066FF]'
                    }`}
                  >
                    {filter}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="px-8 py-6 flex items-center justify-between mt-4">
            <h2 className="text-lg font-extrabold text-white">24 Local Services</h2>
            <div className="flex items-center gap-2 text-sm text-[#94A3B8] font-bold bg-white/5 px-4 py-2 rounded-full border border-white/10">
              <span className="material-symbols-outlined text-sm text-[#0066FF]">location_on</span>
              <span>Juja, near JKUAT Gate A</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 px-8 pb-12">
            {services.map((service, idx) => (
              <ServiceCard key={idx} {...service} />
            ))}
          </div>
        </section>
      </main>

      <footer className="border-t border-white/5 bg-[#05070A]/80 backdrop-blur-md py-10 px-8">
        <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-3 text-[#475569]">
            <span className="material-symbols-outlined text-2xl text-[#0066FF]">hub</span>
            <span className="text-sm font-bold uppercase tracking-widest">© 2026 MtaaConnect</span>
          </div>
          <div className="flex gap-10 text-xs font-black text-[#475569] uppercase tracking-widest">
            <a className="hover:text-[#0066FF] transition-colors" href="#">Support</a>
            <a className="hover:text-[#0066FF] transition-colors" href="#">Safety Guide</a>
            <a className="hover:text-[#0066FF] transition-colors" href="#">Terms</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Services;