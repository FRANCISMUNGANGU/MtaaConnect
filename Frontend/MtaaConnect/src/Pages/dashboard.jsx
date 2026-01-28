import React from 'react';

const StudentDashboard = () => {
  return (
    <div className="dark bg-[#101622] text-white font-display min-h-screen">
      {/* Custom Styles for Scrollbars */}
      <style dangerouslySetInnerHTML={{ __html: `
        .custom-scrollbar::-webkit-scrollbar { width: 4px; height: 4px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #282e39; border-radius: 10px; }
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}} />

      {/* Main Content */}
      <main className="w-full overflow-y-auto custom-scrollbar">
        <header className="sticky top-0 z-10 bg-[#101622]/80 backdrop-blur-md border-b border-slate-800">
          <div className="max-w-[1100px] mx-auto flex items-center justify-between px-6 py-4">
            <h2 className="text-2xl font-extrabold tracking-tight">Jambo, Student!</h2>
          <div className="flex items-center gap-4">
            <HeaderAction icon="notifications" />
            <HeaderAction icon="settings" />
            <div className="size-10 rounded-full border-2 border-[#0d59f2] bg-slate-700 overflow-hidden">
               <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuAVEDYjPq_Q221ykljz8aXFIMMFtutasoVOeqd2os9S64RmkxPPJxWwA_j4VuoBcZoZk6Pthjqzay8dg4A8NPtRT5K9Qmfji6e_LPm9DqRmvocEHpiA8WxbeaZ5thZZuD0-XQLmy7LDhyHKp0v_1kr54KZcCbsRUbuBYmQQG3cDUMFqae6017VAL1ay8yLCtPz4J91JAUjtbTZuW9NrKvJMUMtTG5q8WG_-k5K2o_eVhjmbBv-5Ti8CWJlEh66MwZ81mwMjZboUnmA" alt="profile" />
            </div>
          </div>
          </div>
        </header>

        <div className="max-w-[1100px] mx-auto p-6 md:p-8 space-y-12">
          {/* Trending Events - Horizontal Layout */}
          <section>
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold tracking-tight">Trending Events</h3>
              <button className="text-[#0d59f2] text-sm font-bold hover:underline">View All</button>
            </div>
            <div className="flex overflow-x-auto hide-scrollbar gap-6 pb-4">
              <EventPoster 
                image="https://lh3.googleusercontent.com/aida-public/AB6AXuDP9MnXPLeJ523u7g9UzdgweyeukccEcEyf4lQA4Nhi9XLxZY6yRZlTDoSop8EWAKZ6dzjJvqdwgRxISQl3a1sJp7CKwy0IHjJyo0PAOQqAtvZDKtKQUfEO75B3Dr8TlYdBhtkC1CMblx7Z9n14ao5jCNvjXdcT-Hn99GrEqFwLzC3iMXnZahmy9-mrir4ZwCe4SsVmbfuRppp58eEJTtkXPLrEaypa4s3fSTkUEJXkXuOVhIrvwA2go4iuEBs_AZ4k7_1J6EPGftA" 
                tag="Academic" title="JKUAT Annual Tech Expo" loc="Assembly Hall • 09:00 AM" 
              />
              <EventPoster 
                image="https://lh3.googleusercontent.com/aida-public/AB6AXuCFBMdu1s5XyPNiOLApHTxCs4SDQutZBXUPz2jEIDWsRdU_kvCVneCmVvPgDz7YnP1Mn4ueuKFPhtFqlq16kpnKWFrAYgmyzuKk0BTJZirOHBuz0VwpSXUPtILZsEyzXZQi6deg6AX3Kq3qZC3nlFU3Erf-MqUDfWuQ22uVjnEDTk2Mwda0QNq4dvuPAzY8pif4fjMACZYknRuhlOiMKU6Qc4TG87OYusvpGOuzGJLOcrILrT2Ds8PLj9iMWOFZkHGuoQ68tYZMBOk" 
                tag="Entertainment" title="Varsity Cultural Night" loc="Main Stadium • 06:00 PM" 
              />
              <EventPoster 
                image="https://lh3.googleusercontent.com/aida-public/AB6AXuDqCcuFlmTYm2RtlT86kNMPgNJv3_6CG66QsJGKpiwVLZVed8gl2VzV3tYrH9vk2el00ke91_OKi-nJHSNpamvHapopbdbxDXaeqaMwaAtOWR0AobfCWdfm3YSIVI_WcJbsQgh51j1MZ1JjpKpZJO60iJbtjUj031rjmzlztADb8IPqE6kiDjmvlBBMid0wPtS4mtFteFT8hibXr48BR_EjEe9z05Mg4_E26v0Wt87njK6weJWVRRY8GnlzSskc_RmjR4TRtAr7am8" 
                tag="Innovation" title="AI Workshop" loc="ELB 201 • 02:00 PM" 
              />
            </div>
          </section>

          {/* Marketplace - Horizontal Layout */}
          <section>
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold tracking-tight">Marketplace</h3>
              <div className="flex gap-2">
                <button className="px-4 py-1.5 rounded-full bg-blue-600/10 text-[#0d59f2] text-xs font-bold border border-blue-600/20">All</button>
                <button className="px-4 py-1.5 rounded-full bg-[#282e39] text-xs font-bold border border-slate-700">Gyms</button>
              </div>
            </div>
            <div className="flex overflow-x-auto hide-scrollbar gap-6 pb-4">
              <MarketplaceCard 
                icon="fitness_center" 
                iconBg="bg-indigo-500/20" iconColor="text-indigo-400"
                title="Jay’s Power Gym" price="1,500"
              />
              <MarketplaceCard 
                icon="content_cut" 
                iconBg="bg-orange-500/20" iconColor="text-orange-400"
                title="Elite Campus Cuts" price="250"
              />
              <MarketplaceCard 
                icon="fastfood" 
                iconBg="bg-green-500/20" iconColor="text-green-400"
                title="Mama Jiku Meals" price="150"
              />
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

// --- Helpers ---

const SidebarLink = ({ icon, label, active = false }) => (
  <a className={`flex items-center gap-3 px-4 py-3 rounded-full transition-all ${active ? 'bg-[#0d59f2] text-white shadow-lg shadow-blue-600/20' : 'text-[#9ca6ba] hover:bg-[#282e39]'}`} href="#">
    <span className="material-symbols-outlined text-xl">{icon}</span>
    <span className={`text-sm ${active ? 'font-bold' : 'font-medium'}`}>{label}</span>
  </a>
);

const HeaderAction = ({ icon }) => (
  <button className="size-10 flex items-center justify-center rounded-full bg-[#282e39] text-[#9ca6ba] hover:text-white transition-colors">
    <span className="material-symbols-outlined">{icon}</span>
  </button>
);

const EventPoster = ({ image, tag, title, loc }) => (
  <div className="flex-shrink-0 w-[340px] group relative aspect-[16/10] rounded-2xl overflow-hidden cursor-pointer shadow-2xl">
    <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110" style={{ backgroundImage: `url('${image}')` }}></div>
    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>
    <div className="absolute bottom-5 left-5 right-5">
      <span className="px-2 py-1 bg-[#0d59f2] rounded text-[10px] font-bold uppercase tracking-wider mb-2 inline-block">
        {tag}
      </span>
      <h4 className="text-lg font-bold leading-tight text-white">{title}</h4>
      <p className="text-xs text-white/70 mt-1">{loc}</p>
    </div>
  </div>
);

const MarketplaceCard = ({ icon, iconBg, iconColor, title, price }) => (
  <div className="flex-shrink-0 w-[300px] bg-[#1c222d] p-6 rounded-2xl border border-slate-800 hover:border-blue-600/50 transition-all">
    <div className="flex justify-between items-start mb-6">
      <div className={`size-12 rounded-xl ${iconBg} flex items-center justify-center ${iconColor}`}>
        <span className="material-symbols-outlined text-3xl">{icon}</span>
      </div>
      <span className="text-[10px] text-[#0d59f2] font-bold bg-blue-600/10 px-2 py-1 rounded-full uppercase">Verified</span>
    </div>
    <h5 className="font-bold text-lg mb-1">{title}</h5>
    <p className="text-xs text-[#9ca6ba] mb-6">Student-friendly rates for the JKUAT community.</p>
    <div className="flex items-center justify-between pt-4 border-t border-slate-800">
      <span className="text-lg font-bold text-[#0d59f2]">KSH {price}</span>
      <button className="text-xs font-bold text-white bg-[#282e39] px-4 py-2 rounded-full hover:bg-[#323a48]">Book Now</button>
    </div>
  </div>
);

export default StudentDashboard;