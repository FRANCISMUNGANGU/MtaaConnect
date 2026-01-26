import React from 'react';

// --- Sub-Components ---

const NavLink = ({ label }) => (
  <a href="#" className="text-slate-600 dark:text-slate-300 text-sm font-semibold hover:text-primary transition-colors">
    {label}
  </a>
);

const ClubBadge = ({ icon, label, colorClass }) => (
  <span className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold border ${colorClass}`}>
    <span className="material-symbols-outlined text-sm">{icon}</span>
    {label}
  </span>
);

const ServiceCard = ({ title, price, description, imageUrl }) => (
  <div className="group bg-white dark:bg-slate-900/50 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 hover:border-primary/50 transition-all duration-300 shadow-lg hover:shadow-primary/5">
    <div 
      className="h-48 w-full bg-center bg-cover transition-transform duration-500 group-hover:scale-105" 
      style={{ backgroundImage: `url(${imageUrl})` }}
    />
    <div className="p-5">
      <div className="flex justify-between items-start mb-2">
        <h4 className="text-lg font-bold group-hover:text-primary transition-colors">{title}</h4>
        <span className="text-primary font-bold">Ksh {price}</span>
      </div>
      <p className="text-slate-500 dark:text-slate-400 text-sm mb-4 line-clamp-2">{description}</p>
      <div className="flex gap-2">
        <button className="flex-1 rounded-full bg-primary py-2.5 text-white text-sm font-bold hover:bg-blue-600 transition-colors">Book Now</button>
        <button className="px-3 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-primary transition-colors">
          <span className="material-symbols-outlined text-[20px]">favorite</span>
        </button>
      </div>
    </div>
  </div>
);

// --- Main Profile Component ---

export default function Profile() {
  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark text-slate-900 dark:text-white transition-colors duration-300 font-['Plus_Jakarta_Sans']">
      
      {/* Navigation Bar */}
      <header className="sticky top-0 z-50 flex items-center justify-between border-b border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-background-dark/80 backdrop-blur-md px-4 md:px-10 py-3">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-2 text-primary">
            <span className="material-symbols-outlined text-3xl font-bold">hub</span>
            <h2 className="text-slate-900 dark:text-white text-xl font-extrabold tracking-tight">MtaaConnect</h2>
          </div>
          <div className="hidden md:flex items-center bg-slate-100 dark:bg-slate-800 rounded-full px-4 py-2 w-64">
            <span className="material-symbols-outlined text-slate-400 text-xl">search</span>
            <input 
              className="bg-transparent border-none focus:ring-0 text-sm w-full ml-2" 
              placeholder="Search services..." 
            />
          </div>
        </div>
        <div className="flex items-center gap-8">
          <nav className="hidden lg:flex gap-9">
            {['Explore', 'Services', 'Clubs', 'Forum'].map(item => <NavLink key={item} label={item} />)}
          </nav>
          <div className="flex gap-3">
            <button className="size-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center"><span className="material-symbols-outlined">notifications</span></button>
            <div className="size-10 rounded-full border-2 border-primary bg-slate-300 overflow-hidden">
               <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCqCozUr7phM7dUfn0bJwek-wJ70t61bwnY2y1jAqOgsfq2KNMBlwK_xrE5NMo_zjz6rnYBklDFUZiPW6ssW6eE7oVekQGxP_1WZvupnj9wx8GTdfrtzjoRFnEsinTBw6Q86ZPz0pDObrVu1dHgnMhmJxe8EWRiDNJ2USoxlwYwSlyaG338xkHhd53LmT8lx75pA56U1NK3e6gmm5Id218WZZtY5nFA2Y46euAkkgqickNTE-4jaVTa6xshbePqHTkH46hjji42kAA" alt="Avatar" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 md:px-10 py-8">
        {/* Cover & Profile Header Area */}
        <div className="relative mb-24">
          <div 
            className="w-full h-80 rounded-xl bg-center bg-cover shadow-2xl relative"
            style={{ backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuCOW5Xai4ccSRe0SUWFD_nEU3MBCBg4vMTpqyA9KI5ZdAyhCnk8pDATb9wijfFzdBhmwsMdcKBgLDbyWAt4sxgCCrCeGBCA4CWjP5LAucz0quj-dA-wwn7ENX9UKnFGQEEQFAV85607R0V7XHXp_YpBp-R53pEJwNoGP7FIKqwDh5Ko-AJR8y5J-nxA_GNcLgCKry30OC2OzZSlcq-xyGnd_pG1l6DB8N8wOK3H5W7TzD3397CXZeJk4RaaCKi4axlZ24Ze6T7oQ7g')` }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-background-dark/80 to-transparent rounded-xl"></div>
          </div>

          {/* Profile Floating Card */}
          <div className="absolute -bottom-16 left-4 right-4 md:left-8 md:right-8 glass-effect rounded-xl p-6 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div 
                className="size-32 rounded-full border-4 border-background-dark shadow-2xl bg-cover"
                style={{ backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuALY2XEdEFjlTXNxJKPtU1L9G-be4UbVal3nSdtHmhrOiZ6BxvOWN4ZlzK5sQEBqjLxrMTJ1jNzobgOvriIhzFw6L4N0tEWAShK6oUGM699AEG4Rfjn7-tM4zMHi44pxwfxXo94a-CEy5xJnJ0utoyuKnWi_5YK6Hxek_ARSOeNFAo9rJVMkLAVOaotFaY4B3O0mimLM0tst5u94Z0uQ0AC1NQe6_0ysgZllT0aNaSZsaGoay62DG0YcnseaQmUbDSNTz-I7Go1LSc')` }}
              />
              <div className="text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start gap-2">
                  <h1 className="text-white text-3xl font-extrabold">Alex Kamau</h1>
                  <span className="material-symbols-outlined text-primary fill-1">verified</span>
                </div>
                <p className="text-slate-300 font-medium">BSc. Computer Science | JKUAT Student</p>
                <p className="text-slate-400 text-sm mt-1">Tech enthusiast and freelance photographer based in Juja.</p>
              </div>
            </div>
            <div className="flex gap-3">
              <button className="px-6 h-11 rounded-full bg-slate-800/80 text-white font-bold border border-white/10 hover:bg-slate-700 transition-all">Edit Profile</button>
              <button className="px-6 h-11 rounded-full bg-primary text-white font-bold shadow-lg shadow-primary/20 hover:bg-blue-600 transition-all">Share</button>
            </div>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Sidebar */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            <div className="bg-white dark:bg-slate-900/50 p-6 rounded-xl border border-slate-200 dark:border-slate-800">
              <h3 className="font-bold mb-4">Network Overview</h3>
              <div className="grid grid-cols-3 gap-3">
                {[ { v: '12', l: 'Services' }, { v: '5', l: 'Clubs' }, { v: '4.9', l: 'Rating' } ].map(stat => (
                  <div key={stat.l} className="p-4 rounded-lg bg-slate-50 dark:bg-slate-800/50 text-center border border-slate-200 dark:border-slate-800">
                    <p className="text-primary font-extrabold text-xl">{stat.v}</p>
                    <p className="text-slate-500 text-[10px] uppercase font-bold">{stat.l}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white dark:bg-slate-900/50 p-6 rounded-xl border border-slate-200 dark:border-slate-800">
              <h3 className="font-bold mb-4">Clubs & Societies</h3>
              <div className="flex flex-wrap gap-2">
                <ClubBadge icon="code" label="JKUSA Tech" colorClass="bg-blue-500/10 text-blue-400 border-blue-500/20" />
                <ClubBadge icon="camera" label="JKUAT Media" colorClass="bg-purple-500/10 text-purple-400 border-purple-500/20" />
                <ClubBadge icon="eco" label="Environment" colorClass="bg-green-500/10 text-green-400 border-green-500/20" />
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="lg:col-span-8">
            <div className="flex border-b border-slate-200 dark:border-slate-800 gap-10 mb-8">
              <button className="border-b-[3px] border-primary text-primary pb-3 font-bold">Service Gallery</button>
              <button className="text-slate-500 pb-3 font-bold hover:text-white transition-colors">Portfolio</button>
              <button className="text-slate-500 pb-3 font-bold hover:text-white transition-colors">Reviews</button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <ServiceCard 
                title="Event Photography" 
                price="2,500+" 
                description="Professional event and portrait photography for students."
                imageUrl="https://lh3.googleusercontent.com/aida-public/AB6AXuA4y0jbITwralu-FJ3O8GtyMP0DGiMTnkKyDXCtpf6eutAPPJt01bcJhH7aJOXZ4FDV15FfRGNGKKbZlf0T95-GskVZPKM741Q-tcH2IyCWqA7ttFRTCIo7WY1uDd5PiD4Mb59Cm3DH7nctrj_AfCLKN4Y6Fj9RIBPBj3z5txo6ytHDRHW1RQpqus5ccEclrLPR1aPyBCPPYW6HeABOZgQsN5F6pH0pLtSrmYRGOG-zP3fVj4nbtwgdqlyafTgsX7AaouKBwiBVLw4"
              />
              <ServiceCard 
                title="Web Development" 
                price="5,000+" 
                description="Custom landing pages and project debugging."
                imageUrl="https://lh3.googleusercontent.com/aida-public/AB6AXuADuY-MOa6vDfLLNZH0-n1PsBgz3WNZOfSw9mEVDFDiXJF79dhmRX8svjq3uKxm9-6TSC14eXLfw3jzzZh4KdO84SRhXqYJE2w_SAUiU8upk2fiYNkj3xXZMhcJgq5_U5JyLL-jfi2KG5uFgYKPRZV0ov3JcXPmtan34wrtrIzxlYpVXvs6TcLyD1WmFCgoWC6H_MZf8W3XthnnrZg_ZN1MC6y57pqUf3hp0Y4OfaYlXsfrv3XvApgsoD-pt-qHxsMRCopABhA95A0"
              />
              <button className="group flex flex-col items-center justify-center bg-slate-100/50 dark:bg-slate-800/30 rounded-xl border-2 border-dashed border-slate-300 dark:border-slate-700 hover:border-primary p-8 transition-all">
                <div className="size-14 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center mb-3 group-hover:bg-primary/20 group-hover:text-primary transition-colors">
                  <span className="material-symbols-outlined text-3xl">add</span>
                </div>
                <p className="font-bold text-slate-600 dark:text-slate-400 group-hover:text-primary">Add New Service</p>
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}