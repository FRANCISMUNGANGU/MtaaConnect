import React from 'react';
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();
  return (
    /* Forced dark theme with strict background color */
    <div className="dark bg-background-dark font-display text-white transition-colors duration-300 min-h-screen">
      <style dangerouslySetInnerHTML={{ __html: `
        .glass-search {
          background: rgba(40, 46, 57, 0.6);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
      `}} />

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center px-4 py-4">
        <nav className="max-w-[1200px] w-full flex items-center justify-between bg-white/5 backdrop-blur-md border border-white/10 px-6 py-3 rounded-full">
          <div className="flex items-center gap-2">
            <div className="size-8 bg-primary rounded-lg flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-white text-xl">hub</span>
            </div>
            <h2 className="text-white text-lg font-extrabold tracking-tight hidden sm:block">MtaaConnect</h2>
          </div>
          
          <div className="hidden lg:flex items-center gap-8">
            {['Events', 'Services', 'Channels', 'Ads'].map((item) => (
              <a key={item} className="text-white/80 hover:text-primary text-sm font-semibold transition-colors" href="#">{item}</a>
            ))}
          </div>

          <button className="px-5 py-2 bg-primary hover:bg-primary/90 rounded-full text-white text-xs md:text-sm font-bold shadow-lg shadow-primary/20 whitespace-nowrap"
           onClick={() => navigate("/signin")}>
            Join Community
          </button>
        </nav>
      </header>

      <main className="pt-32 pb-20">
        {/* Hero Section */}
        <section className="relative px-6 flex flex-col items-center justify-center text-center">
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-full max-w-[800px] h-[400px] bg-primary/20 blur-[120px] rounded-full pointer-events-none"></div>
          
          <div className="relative z-10 max-w-4xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent-orange/10 border border-accent-orange/20 text-accent-orange text-[10px] md:text-xs font-bold uppercase tracking-widest mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-orange opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-orange"></span>
              </span>
              Live at JKUAT
            </div>
            <h1 className="text-4xl md:text-7xl font-black leading-tight mb-6">
              Your Campus, <span className="text-primary italic">Digitized.</span>
            </h1>
            <p className="text-sm md:text-lg text-[#9ca6ba] max-w-2xl mx-auto">
              The modern hub for the JKUAT community. Find the best hostels, join exclusive clubs, and never miss a campus event again.
            </p>
          </div>

          {/* Search Bar */}
          <div className="relative z-10 w-full max-w-3xl px-2">
            <div className="glass-search flex items-center p-1.5 rounded-full shadow-2xl">
              <div className="pl-4 text-[#9ca6ba]">
                <span className="material-symbols-outlined">search</span>
              </div>
              <input 
                className="flex-1 bg-transparent border-none text-white placeholder:text-[#9ca6ba] text-sm md:text-base focus:ring-0 px-3" 
                placeholder="Search clubs, hostels..." 
                type="text"
              />
              <button className="bg-primary hover:bg-primary/90 text-white font-bold px-4 md:px-8 h-10 md:h-12 rounded-full transition-all text-sm">
                Search
              </button>
            </div>
          </div>
        </section>

        {/* Trending Events */}
        <section className="mt-24 max-w-[1200px] mx-auto px-6">
          <div className="flex items-end justify-between mb-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-extrabold text-white">Trending Events</h2>
              <p className="text-[#9ca6ba] text-sm mt-1">What's happening around campus</p>
            </div>
            <a className="text-primary text-sm font-bold flex items-center gap-2" href="#">
              View all 
            </a>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <EventCard category="Tech" color="bg-primary" title="JKUAT Tech Fest" date="Oct 24" loc="Main Hall" />
            <EventCard category="Sports" color="bg-accent-orange" title="Sports Meet" date="Oct 28" loc="Stadium" />
            <EventCard category="Social" color="bg-purple-600" title="Culture Night" date="Nov 02" loc="Student Center" />
            <EventCard category="Labs" color="bg-green-600" title="AI Workshop" date="Nov 05" loc="Engineering" />
          </div>
        </section>

        {/* Services */}
        <section className="mt-24 max-w-[1200px] mx-auto px-6">
          <div className="flex items-end justify-between mb-8">
            <h2 className="text-2xl md:text-3xl font-extrabold text-white">Top-rated Services</h2>
            <button className="px-4 py-2 bg-white/5 rounded-full text-xs font-semibold border border-white/5">All Services</button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <ServiceCard icon="print" name="Elite Printing" rate="4.9" desc="High-quality printing and binding services next to Gate A." tags={["Fast", "Discount"]} />
            <ServiceCard icon="electric_car" name="Juja Rides" rate="4.7" desc="Reliable and safe student transport within Juja." tags={["24/7"]} />
            <ServiceCard icon="fastfood" name="Campus Bites" rate="4.8" desc="Homemade style meals delivered directly to your hostel room." tags={["Free Delivery"]} />
            <ServiceCard icon="home_repair_service" name="Tech Fixers" rate="4.6" desc="Laptop repairs and software installation at affordable prices." tags={["Hardware"]} />
          </div>
        </section>
      </main>

      {/* Restored Footer */}
      <footer className="bg-[#0a0d14] border-t border-white/5 pt-16 pb-8">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1">
              <div className="flex items-center gap-3 mb-6">
                <div className="size-8 bg-primary rounded-lg flex items-center justify-center">
                  <span className="material-symbols-outlined text-white text-xl">hub</span>
                </div>
                <h2 className="text-white text-xl font-extrabold tracking-tight">MtaaConnect</h2>
              </div>
              <p className="text-[#9ca6ba] text-sm leading-relaxed">
                Connecting JKUAT students to everything on campus in one modern, tech-forward hub.
              </p>
            </div>
            
            <FooterColumn title="Platform" links={["Find Hostels", "Campus Map", "Student Forum"]} />
            <FooterColumn title="Community" links={["Clubs & Societies", "Events Calendar", "Mentorship"]} />
            <FooterColumn title="Support" links={["Help Center", "Terms of Service", "Privacy Policy"]} />
          </div>

          <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-[#9ca6ba] text-xs">© 2024 MtaaConnect. Designed for JKUAT Students.</p>
            <div className="flex items-center gap-6">
              {['public', 'alternate_email', 'share'].map((icon) => (
                <a key={icon} className="text-[#9ca6ba] hover:text-white transition-colors" href="#">
                  <span className="material-symbols-outlined">{icon}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

/* Components with Word Wrap Fixes */
const EventCard = ({ category, color, title, date, loc }) => (
  <div className="bg-[#1a1f29] rounded-xl overflow-hidden border border-white/5 hover:border-primary/40 transition-all flex flex-col h-full w-full">
    <div className="relative h-44 bg-[#252a35] w-full">
      <div className={`absolute top-3 left-3 z-10 ${color} px-2 py-1 rounded text-[10px] font-black uppercase tracking-wider`}>
        {category}
      </div>
    </div>
    <div className="p-5 flex flex-col flex-grow">
      <div className="text-accent-orange text-xs font-bold mb-2">{date}, 2024</div>
      <h3 className="text-lg font-bold text-white mb-2 leading-tight break-words">{title}</h3>
      <p className="text-[#9ca6ba] text-sm mt-auto flex items-center gap-1">
        <span className="material-symbols-outlined text-sm">location_on</span> {loc}
      </p>
    </div>
  </div>
);

const ServiceCard = ({ icon, name, rate, desc, tags }) => (
  <div className="bg-[#1a1f29] p-6 rounded-2xl border border-white/5 hover:border-primary/40 transition-all flex flex-col h-full w-full">
    <div className="size-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-5 shrink-0">
      <span className="material-symbols-outlined text-2xl">{icon}</span>
    </div>
    <div className="flex items-start justify-between mb-3 gap-2">
      <h3 className="font-bold text-white text-lg break-words leading-tight">{name}</h3>
      <div className="flex items-center text-accent-orange text-sm font-bold shrink-0">
        <span className="material-symbols-outlined text-sm mr-1">star</span> {rate}
      </div>
    </div>
    <p className="text-[#9ca6ba] text-sm leading-relaxed break-words mb-4">{desc}</p>
    <div className="flex flex-wrap gap-2 mt-auto">
      {tags.map(tag => (
        <span key={tag} className="px-2 py-1 bg-white/5 rounded-full text-[10px] text-white/60 whitespace-nowrap">
          {tag}
        </span>
      ))}
    </div>
  </div>
);

const FooterColumn = ({ title, links }) => (
  <div>
    <h4 className="text-white font-bold mb-6">{title}</h4>
    <ul className="space-y-4 text-sm text-[#9ca6ba]">
      {links.map((link) => (
        <li key={link}><a className="hover:text-primary transition-colors" href="#">{link}</a></li>
      ))}
    </ul>
  </div>
);

export default LandingPage;