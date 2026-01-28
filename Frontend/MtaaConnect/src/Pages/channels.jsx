import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// --- Sub-components ---

const NavLink = ({ label, active = false }) => (
  <a 
    href="#" 
    className={`${active ? 'text-[#0066FF] font-bold tracking-wide' : 'text-slate-400 font-semibold hover:text-white'} text-sm transition-colors`}
  >
    {label}
  </a>
);

const ChannelCard = ({ icon, title, desc, members, tag, tagColor, onClick }) => (
  <div
    onClick={onClick}
    className="cursor-pointer bg-[rgba(23,27,34,0.6)] backdrop-blur-xl border border-[rgba(255,255,255,0.08)] shadow-2xl rounded-[20px] p-6 flex flex-col gap-5 group hover:border-[#0066FF]/40 hover:shadow-[0_0_30px_rgba(0,102,255,0.15)] hover:-translate-y-1 transition-all duration-300"
  >
    <div className="flex items-start justify-between">
      <div className="h-14 w-14 rounded-[20px] bg-gradient-to-br from-[#0066FF] to-[#0044CC] flex items-center justify-center text-white shadow-lg shadow-[#0066FF]/20">
        <span className="material-symbols-outlined text-[32px]">{icon}</span>
      </div>
      {tag && (
        <span className={`${tagColor || 'bg-[#0066FF]/20 text-[#0066FF] border-[#0066FF]/30'} text-[10px] font-extrabold px-3 py-1.5 rounded-lg uppercase tracking-widest border`}>
          {tag}
        </span>
      )}
    </div>
    <div>
      <h3 className="text-white text-xl font-bold mb-2 group-hover:text-[#0066FF] transition-colors">{title}</h3>
      <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
    </div>
    <div className="flex items-center justify-between mt-auto pt-5 border-t border-white/5">
      <div className="flex items-center gap-2">
        <span className="material-symbols-outlined text-[#0066FF] text-[20px] font-bold">groups</span>
        <span className="text-white text-sm font-bold">{members}</span>
      </div>
      <button className="bg-gradient-to-br from-[#0066FF] to-[#0044CC] text-white font-bold py-2.5 px-7 rounded-full text-sm shadow-md shadow-[#0066FF]/40 hover:scale-105 transition-all">
        Join
      </button>
    </div>
  </div>
);

// --- Main Page Component ---

const Channels = () => {
  const [search, setSearch] = useState('');
  const navigate = useNavigate();
  
  const channels = [
    { icon: 'terminal', title: 'Juja Techies', desc: 'Where JKUAT developers build the future. Coding sessions, hackathons, and coffee chats.', members: '1,248', tag: 'Active Now' },
    { icon: 'apartment', title: 'Hostel Life', desc: 'Surviving and thriving in JKUAT residential areas. Safety tips and student housing updates.', members: '2.5k' },
    { icon: 'videogame_asset', title: 'Juja Gamers', desc: 'FIFA tournaments, CoD mobile lobbies, and e-sports discussions for all JKUAT students.', members: '1.1k', tag: 'Tourney Soon', tagColor: 'bg-amber-500/10 text-amber-500 border-amber-500/20' },
    { icon: 'shopping_cart', title: 'JKUAT Marketplace', desc: 'Buy, sell, or trade student essentials. Books, tech, and dorm furniture in Juja.', members: '4.8k' },
    { icon: 'brush', title: 'Creative Hub', desc: 'A sanctuary for poets, photographers, and digital artists. Monthly talent showcases.', members: '962', tag: 'Popular' },
    { icon: 'fitness_center', title: 'Juja Fitness', desc: 'Workout partners, gym schedules, and healthy meal tips around the university.', members: '1.5k' },
  ];

  return (
    <div className="bg-[#0B0E14] font-['Plus_Jakarta_Sans'] text-white min-h-screen relative overflow-x-hidden">
      {/* Background Glows */}
      <div className="fixed top-0 -left-1/4 w-[800px] h-[800px] bg-[radial-gradient(circle_at_center,rgba(0,102,255,0.12)_0%,rgba(11,14,20,0)_70%)] pointer-events-none z-0 opacity-50"></div>
      <div className="fixed bottom-0 -right-1/4 w-[800px] h-[800px] bg-[radial-gradient(circle_at_center,rgba(0,102,255,0.12)_0%,rgba(11,14,20,0)_70%)] pointer-events-none z-0 opacity-50"></div>

      <div className="relative z-10 max-w-[1200px] mx-auto px-4 md:px-20 lg:px-10">


        <section className="py-12 text-center max-w-3xl mx-auto">
          <h1 className="text-white tracking-tight text-5xl font-extrabold leading-[1.1] mb-4">
            Explore <span className="text-[#0066FF]">JKUAT</span> Communities
          </h1>
          <p className="text-slate-400 text-lg font-medium">
            The ultimate hub for varsity life. Deep charcoal aesthetic for focused night-time building and connecting.
          </p>
        </section>

        <div className="py-4">
          <div className="relative max-w-2xl mx-auto">
            <span className="absolute inset-y-0 left-0 pl-6 flex items-center material-symbols-outlined text-[#0066FF]">search</span>
            <input 
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="block w-full h-16 pl-14 pr-32 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full text-white text-lg focus:ring-2 focus:ring-[#0066FF]/40 outline-none transition-all placeholder:text-slate-500" 
              placeholder="Search for Juja techies, Hall 7..."
            />
            <button className="absolute right-2.5 top-2.5 h-11 px-8 rounded-full bg-gradient-to-br from-[#0066FF] to-[#0044CC] text-white font-bold text-sm shadow-lg shadow-[#0066FF]/40 hover:brightness-110">
              Search
            </button>
          </div>
        </div>

        {/* Filter Tags */}
        <div className="flex gap-3 py-8 overflow-x-auto no-scrollbar">
          {['All Channels', 'Hall 7', 'Coding', 'Gaming', 'Gate C'].map((cat, i) => (
            <button key={cat} className={`flex h-11 shrink-0 items-center justify-center px-6 rounded-full text-sm font-bold transition-all border ${i === 0 ? 'bg-gradient-to-br from-[#0066FF] to-[#0044CC] border-transparent text-white shadow-lg' : 'bg-white/5 border-white/10 text-slate-300 hover:border-[#0066FF]/50'}`}>
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {channels.map((ch, idx) => (
            <ChannelCard
              key={idx}
              {...ch}
              onClick={() => navigate(`/channels/${idx + 1}`)}
            />
          ))}
        </div>

        <div className="flex flex-col items-center gap-6 py-20">
          <button className="flex items-center gap-3 px-10 py-4 rounded-full bg-white/5 border border-white/10 text-white font-bold hover:bg-white/10 hover:border-[#0066FF]/40 transition-all shadow-xl">
            <span>Load More Channels</span>
            <span className="material-symbols-outlined">expand_more</span>
          </button>
          <p className="text-slate-500 text-xs font-semibold tracking-widest uppercase">MtaaConnect © 2026 • JKUAT Chapter</p>
        </div>
      </div>
    </div>
  );
};

export default Channels;