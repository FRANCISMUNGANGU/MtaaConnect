import React from 'react';

// Reusable Icon Component for Material Symbols
const Icon = ({ name, className = "" }) => (
  <span className={`material-symbols-outlined ${className}`}>{name}</span>
);

const ChannelsDetails = () => {
  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 min-h-screen font-['Plus_Jakarta_Sans']">
      
      {/* Top Navigation Bar */}
      <header className="sticky top-0 z-50 glass border-b border-white/5 px-6 py-3 flex items-center justify-between backdrop-blur-xl bg-background-dark/80">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-3">
            <div className="size-8 bg-primary rounded-lg flex items-center justify-center text-white">
              <Icon name="hub" className="text-lg" />
            </div>
            <h1 className="text-xl font-extrabold tracking-tight hidden md:block text-white">MtaaConnect</h1>
          </div>
          <div className="hidden lg:flex items-center bg-white/5 rounded-full px-4 py-1.5 border border-white/10 w-80 focus-within:border-primary/50 transition-colors">
            <Icon name="search" className="text-slate-400 text-xl" />
            <input 
              className="bg-transparent border-none focus:ring-0 text-sm w-full placeholder:text-slate-500 text-white" 
              placeholder="Search JKUAT communities..." 
              type="text"
            />
          </div>
        </div>

        <nav className="flex items-center gap-6">
          <div className="hidden md:flex items-center gap-6">
            <a className="text-sm font-semibold hover:text-primary transition-colors text-slate-300" href="#">Explore</a>
            <a className="text-sm font-semibold text-primary" href="#">Channels</a>
            <a className="text-sm font-semibold hover:text-primary transition-colors text-slate-300" href="#">Marketplace</a>
          </div>
          <div className="flex items-center gap-3 border-l border-white/10 pl-6">
            <button className="size-10 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 transition-colors">
              <Icon name="notifications" className="text-xl text-slate-300" />
            </button>
            <button className="size-10 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 transition-colors">
              <Icon name="chat_bubble" className="text-xl text-slate-300" />
            </button>
            <div 
              className="size-10 rounded-full bg-cover bg-center border border-primary/30" 
              style={{ backgroundImage: `url('https://api.dicebear.com/7.x/avataaars/svg?seed=Felix')` }}
            />
          </div>
        </nav>
      </header>

      <main className="max-w-[1280px] mx-auto pb-12">
        {/* Hero Header */}
        <div className="relative w-full h-[400px] overflow-hidden md:rounded-b-xl lg:rounded-xl lg:mt-6">
          <div 
            className="absolute inset-0 bg-cover bg-center" 
            style={{ backgroundImage: `url('https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80')` }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-background-dark/40 to-transparent flex flex-col justify-end p-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div className="flex gap-6 items-center">
                <div className="size-32 rounded-xl bg-primary/20 backdrop-blur-xl border border-white/20 p-1">
                  <div 
                    className="w-full h-full rounded-lg bg-cover bg-center shadow-2xl bg-blue-600"
                    style={{ backgroundImage: `url('https://api.dicebear.com/7.x/identicon/svg?seed=Juja')` }}
                  />
                </div>
                <div className="mb-2 text-white">
                  <h2 className="text-4xl font-extrabold">Juja Techies</h2>
                  <div className="flex items-center gap-3 mt-2">
                    <span className="bg-primary px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider">Official JKUAT Hub</span>
                    <span className="text-slate-300 text-sm font-medium flex items-center gap-1">
                      <Icon name="groups" className="text-sm" /> 1.2k Members
                    </span>
                    <span className="text-slate-300 text-sm font-medium flex items-center gap-1">
                      <Icon name="circle" className="text-sm text-green-400" /> 142 Online
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex gap-3 mb-2">
                <button className="bg-primary hover:bg-primary/90 text-white font-bold py-3 px-8 rounded-full shadow-lg shadow-primary/20 transition-all flex items-center gap-2">
                  <Icon name="person_add" /> Join Channel
                </button>
                <button className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white font-bold size-12 rounded-full transition-all flex items-center justify-center border border-white/10">
                  <Icon name="more_horiz" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Secondary Tabs */}
        <div className="px-6 mt-6 overflow-x-auto">
          <div className="flex border-b border-white/5 gap-8">
            {['Feed', 'Resources', 'Events', 'Members', 'Settings'].map((tab, idx) => (
              <a 
                key={tab} 
                href="#" 
                className={`pb-4 text-sm font-bold flex items-center gap-2 transition-colors ${idx === 0 ? 'border-b-2 border-primary text-white' : 'text-slate-500 hover:text-slate-300'}`}
              >
                <Icon name={idx === 0 ? 'rss_feed' : idx === 1 ? 'folder_open' : idx === 2 ? 'calendar_month' : idx === 3 ? 'groups' : 'settings'} className="text-lg" />
                {tab}
              </a>
            ))}
          </div>
        </div>

        {/* Main Content Area */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 px-6 mt-8">
          {/* Left Column: Feed */}
          <div className="lg:col-span-8 space-y-6">
            <Composer />
            <Post 
              author="Evans King" 
              role="Computer Science" 
              time="2 hours ago" 
              content="Does anyone have a good tutorial for deploying React apps on AWS? Trying to get my final year project up and running before the demo on Friday! 🚀 #jkuat #techies"
              likes={42}
              comments={18}
              verified
            />
          </div>

          {/* Right Column: Sidebar */}
          <div className="lg:col-span-4 space-y-6">
            <AboutCard />
            <OnlineMembers />
          </div>
        </div>
      </main>
    </div>
  );
};

// Sub-components for cleaner code
const Composer = () => (
  <div className="bg-white/5 border border-white/10 p-5 rounded-xl backdrop-blur-md">
    <div className="flex gap-4">
      <div className="size-11 rounded-full bg-slate-700 shrink-0 border border-white/10" />
      <div className="flex-1">
        <textarea 
          className="w-full bg-white/5 border border-white/10 rounded-xl focus:ring-primary focus:border-primary p-4 text-slate-200 resize-none h-24 placeholder:text-slate-500" 
          placeholder="What's the latest in Juja Techies?"
        />
        <div className="flex items-center justify-between mt-4">
          <div className="flex gap-2">
            {['image', 'code', 'link'].map(icon => (
              <button key={icon} className="p-2 rounded-full hover:bg-white/5 text-slate-400 hover:text-primary transition-colors">
                <Icon name={icon} />
              </button>
            ))}
          </div>
          <button className="bg-primary px-6 py-2 rounded-full font-bold text-sm text-white">Post Update</button>
        </div>
      </div>
    </div>
  </div>
);

const Post = ({ author, role, time, content, likes, comments, verified }) => (
  <article className="bg-white/5 border border-white/10 p-6 rounded-xl hover:border-white/20 transition-all">
    <div className="flex justify-between items-start mb-4">
      <div className="flex gap-3">
        <div className="size-12 rounded-full bg-slate-600 border border-primary/20" />
        <div>
          <h4 className="font-bold text-white flex items-center gap-1">
            {author} {verified && <Icon name="verified" className="text-primary text-[16px]" />}
          </h4>
          <p className="text-xs text-slate-500">{time} • {role}</p>
        </div>
      </div>
      <button className="text-slate-500 hover:text-white"><Icon name="more_vert" /></button>
    </div>
    <p className="text-slate-300 leading-relaxed mb-4">{content}</p>
    <div className="flex items-center gap-6 pt-4 border-t border-white/5">
      <button className="flex items-center gap-2 text-sm font-semibold text-slate-400 hover:text-primary transition-colors">
        <Icon name="thumb_up" className="text-lg" /> {likes}
      </button>
      <button className="flex items-center gap-2 text-sm font-semibold text-slate-400 hover:text-primary transition-colors">
        <Icon name="chat_bubble" className="text-lg" /> {comments} Comments
      </button>
    </div>
  </article>
);

const AboutCard = () => (
  <div className="bg-white/5 border border-white/10 p-6 rounded-xl space-y-4">
    <h3 className="text-lg font-bold text-white">About Juja Techies</h3>
    <p className="text-sm text-slate-400 leading-relaxed">
      The premiere community for developers, engineers, and tech enthusiasts at JKUAT. 
      Share projects, find collaborators, and stay updated.
    </p>
    <div className="pt-4 border-t border-white/5 space-y-2">
      {['No spamming', 'Tech content only', 'Respect each other'].map(rule => (
        <div key={rule} className="text-sm text-slate-300 flex items-center gap-2">
          <Icon name="check_circle" className="text-primary text-lg" /> {rule}
        </div>
      ))}
    </div>
  </div>
);

const OnlineMembers = () => (
  <div className="bg-white/5 border border-white/10 p-6 rounded-xl">
    <div className="flex justify-between items-center mb-4">
      <h3 className="text-lg font-bold text-white">Online Members</h3>
      <span className="text-xs font-bold text-primary bg-primary/10 px-2 py-0.5 rounded">142</span>
    </div>
    <div className="grid grid-cols-6 gap-2">
      {[...Array(5)].map((_, i) => (
        <div key={i} className="relative">
          <div className="size-10 rounded-full bg-slate-700 border border-white/10" />
          <div className="absolute bottom-0 right-0 size-3 bg-green-500 border-2 border-background-dark rounded-full" />
        </div>
      ))}
      <div className="size-10 rounded-full bg-white/10 flex items-center justify-center text-[10px] font-bold text-slate-400">
        +137
      </div>
    </div>
  </div>
);

export default ChannelsDetails;