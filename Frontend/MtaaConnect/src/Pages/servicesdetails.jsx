import React from 'react';

// Reusable Icon Component
const Icon = ({ name, className = "", fill = false }) => (
  <span className={`material-symbols-outlined ${fill ? 'fill-1' : ''} ${className}`}>
    {name}
  </span>
);

const ServiceDetails = () => {
  const pricingData = [
    { zone: "Hall 1 - Hall 6", desc: "Hostels and student blocks", price: "50.00" },
    { zone: "Gate A / Main Campus", desc: "Administration and Science Park", price: "70.00" },
    { zone: "Gate C / Juja South", desc: "Residential areas near Gate C", price: "100.00" },
    { zone: "Oasis / Gachororo", desc: "Extended Juja outskirts", price: "150.00" },
    { zone: "Highpoint / Stage", desc: "Juja Town and Main Highway", price: "120.00" },
  ];

  const reviews = [
    { name: "Kendi Mwiti", major: "Applied Computer Science", time: "2h ago", rating: 5, text: "Legit fastest delivery in Juja. My lunch arrived while it was still steaming hot. 10/10 would recommend!", border: true },
    { name: "Brian Omondi", major: "Mechanical Engineering", time: "5h ago", rating: 4, text: "Delivery to Oasis was a bit expensive but they delivered straight to my door. Saving my grades with these snacks." },
    { name: "Sarah Wangari", major: "Economics", time: "Yesterday", rating: 5, text: "Reliable and polite riders. I use them every time I'm at the library and need something from Gate C." },
  ];

  return (
    <div className="bg-background-light dark:bg-background-dark text-white min-h-screen flex flex-col font-['Plus_Jakarta_Sans']">
      
      {/* Header */}
      <header className="sticky top-0 z-50 bg-[#28323966] backdrop-blur-xl border-b border-white/10 px-6 lg:px-40 py-3">
        <div className="max-w-[1200px] mx-auto flex items-center justify-between">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-3">
              <div className="bg-primary p-1.5 rounded-lg">
                <svg className="size-6 text-white" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 4H17.3334V17.3334H30.6666V30.6666H44V44H4V4Z" fill="currentColor" />
                </svg>
              </div>
              <h2 className="text-xl font-extrabold tracking-tight">MtaaConnect</h2>
            </div>
            <nav className="hidden md:flex items-center gap-6">
              {['Home', 'Services', 'Community', 'Marketplace'].map((item) => (
                <a key={item} href="#" className={`text-sm font-medium transition-colors ${item === 'Services' ? 'text-white border-b-2 border-primary pb-1' : 'text-white/70 hover:text-primary'}`}>
                  {item}
                </a>
              ))}
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative hidden sm:block">
              <Icon name="search" className="absolute left-3 top-1/2 -translate-y-1/2 text-white/40 text-sm" />
              <input className="bg-white/5 border border-white/10 rounded-full pl-10 pr-4 py-2 text-sm focus:ring-1 focus:ring-primary outline-none w-64" placeholder="Search services..." />
            </div>
            <button className="p-2 rounded-full hover:bg-white/10 transition-colors">
              <Icon name="notifications" className="text-white/70" />
            </button>
            <div className="size-10 rounded-full border border-primary/50 overflow-hidden bg-slate-700" />
          </div>
        </div>
      </header>

      <main className="flex-grow max-w-[1200px] mx-auto w-full px-6 lg:px-40 py-8">
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-2 mb-8 text-sm font-medium">
          <a className="text-white/40 hover:text-white" href="#">Home</a>
          <Icon name="chevron_right" className="text-white/20 text-xs" />
          <a className="text-white/40 hover:text-white" href="#">Services</a>
          <Icon name="chevron_right" className="text-white/20 text-xs" />
          <span className="text-primary">Flash Delivery JKUAT</span>
        </nav>

        {/* Profile Header */}
        <section className="bg-[#28323966] backdrop-blur-md border border-white/10 rounded-xl p-8 mb-8 relative">
          <div className="absolute top-0 right-0 p-4">
            <div className="flex items-center gap-2 bg-primary/20 text-primary border border-primary/30 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider">
              <Icon name="verified" className="text-sm" /> Verified Student Service
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-8 items-start md:items-center">
            <div className="size-32 rounded-full border-4 border-primary/20 overflow-hidden shrink-0 bg-primary/10 flex items-center justify-center">
              <Icon name="bolt" className="text-5xl text-primary" />
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <h1 className="text-3xl font-bold">Flash Delivery JKUAT</h1>
                <span className="flex items-center gap-1 bg-green-500/20 text-green-400 text-[10px] px-2 py-0.5 rounded-full font-bold">
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span> ACTIVE NOW
                </span>
              </div>
              <p className="text-white/60 max-w-xl text-sm leading-relaxed">
                Fastest delivery service within JKUAT and its environs. Run by students, for students. We deliver food, documents, and groceries in record time.
              </p>
              <div className="flex items-center gap-6 pt-2">
                <div>
                  <span className="text-white/40 text-[10px] uppercase font-bold tracking-widest block">Avg. Rating</span>
                  <div className="flex items-center gap-1">
                    <span className="text-xl font-bold">4.8</span>
                    <div className="flex text-primary">
                      {[1,2,3,4].map(i => <Icon key={i} name="star" className="text-sm" fill />)}
                      <Icon name="star_half" className="text-sm" />
                    </div>
                  </div>
                </div>
                <div className="border-l border-white/10 pl-6">
                  <span className="text-white/40 text-[10px] uppercase font-bold tracking-widest block">Orders Done</span>
                  <span className="text-xl font-bold">1,240+</span>
                </div>
              </div>
            </div>
            <div className="ml-auto flex gap-3 w-full md:w-auto">
              <button className="flex-1 md:flex-none bg-white/5 border border-white/10 hover:bg-white/10 px-6 py-2.5 rounded-full font-bold text-sm transition-all flex items-center justify-center gap-2">
                <Icon name="share" className="text-sm" /> Share
              </button>
              <button className="flex-1 md:flex-none bg-white/5 border border-white/10 hover:bg-white/10 px-6 py-2.5 rounded-full font-bold text-sm transition-all flex items-center justify-center gap-2">
                <Icon name="chat" className="text-sm" /> Inquiry
              </button>
            </div>
          </div>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column: Pricing */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-xl font-bold flex items-center gap-2 px-2">
              <Icon name="distance" className="text-primary" /> Delivery Price List
            </h3>
            <div className="bg-[#101b2299] backdrop-blur-xl border border-white/5 rounded-xl overflow-hidden">
              <table className="w-full text-left">
                <thead className="border-b border-white/5 bg-white/5">
                  <tr>
                    <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-white/40">Zone / Destination</th>
                    <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-white/40 text-right">Price (KES)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {pricingData.map((item, i) => (
                    <tr key={i} className="hover:bg-primary/5 transition-colors group">
                      <td className="px-6 py-4">
                        <div className="font-semibold group-hover:text-primary transition-colors">{item.zone}</div>
                        <div className="text-xs text-white/40">{item.desc}</div>
                      </td>
                      <td className="px-6 py-4 text-right font-bold text-primary">{item.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Right Column: Reviews */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center justify-between px-2">
              <h3 className="text-xl font-bold flex items-center gap-2">
                <Icon name="chat_bubble" className="text-primary" /> User Reviews
              </h3>
              <button className="text-primary text-sm font-bold hover:underline">See all</button>
            </div>
            <div className="space-y-4 max-h-[500px] overflow-y-auto pr-2 custom-scrollbar">
              {reviews.map((rev, i) => (
                <div key={i} className={`bg-[#101b2299] p-5 rounded-xl border border-white/5 ${rev.border ? 'border-l-4 border-l-primary' : ''}`}>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className="size-10 rounded-full bg-white/5 border border-white/10" />
                      <div>
                        <p className="text-sm font-bold">{rev.name}</p>
                        <p className="text-[10px] text-white/40">{rev.major} • {rev.time}</p>
                      </div>
                    </div>
                    <div className="flex text-primary">
                      {[...Array(5)].map((_, i) => (
                        <Icon key={i} name="star" className="text-[14px]" fill={i < rev.rating} />
                      ))}
                    </div>
                  </div>
                  <p className="text-sm text-white/70 leading-relaxed italic">"{rev.text}"</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      {/* Floating Action Button */}
      <div className="fixed bottom-8 right-8 z-[60]">
        <button className="bg-primary hover:bg-primary/90 text-white shadow-2xl shadow-primary/40 px-8 py-4 rounded-full font-extrabold text-lg flex items-center gap-3 transition-all hover:-translate-y-1 active:scale-95">
          <Icon name="rocket_launch" /> Request Now
        </button>
      </div>

      <footer className="mt-20 py-10 border-t border-white/5 text-center">
        <p className="text-white/20 text-[10px] font-bold uppercase tracking-[0.2em]">© 2024 MtaaConnect Hub • JKUAT Edition</p>
      </footer>
    </div>
  );
};

export default ServiceDetails;