import React from 'react';

// --- Sub-Components for Cleanliness ---

const SidebarLink = ({ icon, label, active = false }) => (
  <a
    href="#"
    className={`flex items-center gap-3 px-4 py-3 rounded-full transition-all ${
      active 
        ? "bg-[#0d59f2] text-white shadow-md shadow-blue-500/20" 
        : "text-slate-600 dark:text-[#9ca6ba] hover:bg-slate-100 dark:hover:bg-[#282e39]"
    }`}
  >
    <span className="material-symbols-outlined">{icon}</span>
    <span className={`text-sm ${active ? "font-bold" : "font-medium"}`}>{label}</span>
  </a>
);

const MarketplaceCard = ({ title, description, price, unit, icon, iconColor }) => (
  <div className="bg-white dark:bg-[#1c222d] p-4 rounded-lg border border-slate-200 dark:border-slate-800 shadow-sm hover:border-[#0d59f2]/50 transition-all">
    <div className="flex justify-between items-start mb-3">
      <div className={`size-12 rounded-lg ${iconColor} flex items-center justify-center`}>
        <span className="material-symbols-outlined text-3xl">{icon}</span>
      </div>
      <div className="flex items-center gap-1 bg-[#0d59f2]/10 px-2 py-1 rounded-full">
        <span className="material-symbols-outlined text-[#0d59f2] text-xs font-bold">verified</span>
        <span className="text-[10px] text-[#0d59f2] font-bold">Verified Student</span>
      </div>
    </div>
    <h5 className="font-bold text-base">{title}</h5>
    <p className="text-xs text-slate-500 dark:text-[#9ca6ba] mt-1">{description}</p>
    <div className="flex items-center justify-between mt-4 pt-4 border-t border-slate-100 dark:border-slate-800">
      <span className="text-sm font-bold text-[#0d59f2]">KSH {price} <small className="text-slate-400 font-normal">/{unit}</small></span>
      <button className="text-xs font-bold text-white bg-slate-900 dark:bg-[#282e39] px-3 py-1.5 rounded-full">Book Now</button>
    </div>
  </div>
);

// --- Main Dashboard Component ---

export default function MtaaDashboard() {
  return (
    <div className="flex h-screen overflow-hidden bg-white dark:bg-[#101622] font-['Plus_Jakarta_Sans'] text-slate-900 dark:text-white">
      
      {/* Sidebar Navigation */}
      <aside className="w-72 flex-shrink-0 border-r border-slate-200 dark:border-slate-800 bg-white dark:bg-[#111318] flex flex-col justify-between p-6">
        <div className="flex flex-col gap-8">
          <div className="flex items-center gap-3 px-2">
            <div className="size-10 bg-[#0d59f2] rounded-lg flex items-center justify-center text-white shadow-lg shadow-blue-500/20">
              <span className="material-symbols-outlined text-2xl font-bold">hub</span>
            </div>
            <div className="flex flex-col">
              <h1 className="text-lg font-extrabold leading-tight tracking-tight">MtaaConnect</h1>
              <p className="text-slate-500 dark:text-[#9ca6ba] text-xs font-semibold uppercase tracking-widest">JKUAT Hub</p>
            </div>
          </div>

          <nav className="flex flex-col gap-2">
            <SidebarLink icon="dashboard" label="Dashboard" active />
            <SidebarLink icon="storefront" label="Marketplace" />
            <SidebarLink icon="groups" label="Clubs & Societies" />
            <SidebarLink icon="campaign" label="Notice Board" />
            <SidebarLink icon="account_circle" label="Profile" />
          </nav>
        </div>

        <div className="flex flex-col gap-4">
          <div className="p-4 bg-[#0d59f2]/10 rounded-lg border border-[#0d59f2]/20">
            <p className="text-xs font-bold text-[#0d59f2] uppercase mb-1">Upcoming Event</p>
            <p className="text-sm font-bold leading-tight">JKUAT Tech Fest 2024</p>
            <p className="text-[10px] text-slate-500 mt-1 italic">Starts in 3 days</p>
          </div>
          <button className="w-full flex items-center justify-center gap-2 rounded-full h-12 bg-slate-900 dark:bg-[#282e39] text-white text-sm font-bold hover:scale-[1.02] transition-transform">
            <span className="material-symbols-outlined text-lg">swap_horiz</span>
            <span>Switch Account</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto custom-scrollbar">
        <header className="sticky top-0 z-10 flex items-center justify-between px-8 py-4 bg-white/80 dark:bg-[#101622]/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
          <div className="flex items-center gap-6">
            <h2 className="text-2xl font-extrabold tracking-tight">Jambo, Student! 👋</h2>
            <div className="relative w-72">
              <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">search</span>
              <input 
                className="w-full h-11 pl-12 pr-4 rounded-full border-none bg-slate-100 dark:bg-[#282e39] text-sm focus:ring-2 focus:ring-[#0d59f2]" 
                placeholder="Search marketplace..." 
                type="text"
              />
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button className="relative size-11 flex items-center justify-center rounded-full bg-white dark:bg-[#282e39] shadow-sm">
              <span className="material-symbols-outlined">notifications</span>
              <span className="absolute top-2 right-2 size-2 bg-red-500 rounded-full border-2 border-white dark:border-[#282e39]"></span>
            </button>
            <div className="size-11 rounded-full border-2 border-[#0d59f2] bg-slate-300 overflow-hidden">
               <img src="https://via.placeholder.com/150" alt="profile" className="w-full h-full object-cover" />
            </div>
          </div>
        </header>

        <div className="p-8 max-w-7xl mx-auto space-y-8">
          {/* Quick Actions */}
          <section>
            <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
              <span className="material-symbols-outlined text-[#0d59f2]">bolt</span> Quick Actions
            </h3>
            <div className="flex flex-wrap gap-3">
              {['Register Club', 'Book Gym', 'Exam Card', 'Library Seat'].map((action) => (
                <button key={action} className="px-6 py-3 rounded-full bg-white dark:bg-[#282e39] text-sm font-bold border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-[#323a48] transition-all">
                  {action}
                </button>
              ))}
            </div>
          </section>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              {/* Trending Events */}
              <section>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold">Trending Events</h3>
                  <button className="text-[#0d59f2] text-sm font-bold">View All</button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <EventPoster title="JKUAT Annual Tech Expo" category="Academic" date="Oct 12-14" />
                  <EventPoster title="Varsity Cultural Night" category="Entertainment" date="Oct 15" color="bg-pink-600" />
                </div>
              </section>

              {/* Marketplace */}
              <section>
                <h3 className="text-xl font-bold mb-4">Marketplace</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <MarketplaceCard 
                    title="Jay’s Power Gym" 
                    description="Professional training equipment & coaching." 
                    price="1,500" unit="mo" 
                    icon="fitness_center" iconColor="bg-indigo-500/20 text-indigo-500"
                  />
                  <MarketplaceCard 
                    title="Elite Campus Cuts" 
                    description="Fresh fades right at JKUAT Gate A." 
                    price="250" unit="session" 
                    icon="content_cut" iconColor="bg-orange-500/20 text-orange-500"
                  />
                </div>
              </section>
            </div>

            {/* Notice Board */}
            <aside className="bg-white dark:bg-[#1c222d] rounded-lg border border-slate-200 dark:border-slate-800 shadow-sm h-fit">
              <div className="p-5 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center">
                <h3 className="text-lg font-bold flex items-center gap-2">
                  <span className="material-symbols-outlined text-orange-500">campaign</span> Notice Board
                </h3>
                <span className="size-6 bg-red-500/10 text-red-500 text-[10px] font-bold rounded-full flex items-center justify-center">3</span>
              </div>
              <div className="p-4 space-y-4">
                <Notice type="Urgent" title="Semester Fee Deadline" time="2h ago" color="border-red-500" />
                <Notice type="Academic" title="Provisional Timetables Out" time="5h ago" color="border-[#0d59f2]" />
              </div>
            </aside>
          </div>
        </div>
      </main>
    </div>
  );
}

// Helper components for the Grid items
const EventPoster = ({ title, category, date, color = "bg-[#0d59f2]" }) => (
  <div className="group relative aspect-[4/3] rounded-lg overflow-hidden cursor-pointer shadow-xl bg-slate-800">
    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
    <div className="absolute bottom-4 left-4 right-4 text-white z-20">
      <div className="flex items-center gap-2 mb-1">
        <span className={`px-2 py-0.5 ${color} rounded text-[10px] font-bold uppercase`}>{category}</span>
        <span className="text-[10px] opacity-80 uppercase">{date}</span>
      </div>
      <h4 className="text-lg font-bold leading-tight">{title}</h4>
    </div>
  </div>
);

const Notice = ({ type, title, time, color }) => (
  <div className={`p-4 rounded-lg bg-slate-50 dark:bg-white/5 border-l-4 ${color} cursor-pointer hover:bg-slate-100 transition-colors`}>
    <div className="flex justify-between items-center mb-1">
      <span className="text-[10px] font-extrabold uppercase">{type}</span>
      <span className="text-[10px] text-slate-400">{time}</span>
    </div>
    <p className="text-sm font-bold">{title}</p>
  </div>
);