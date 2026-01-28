import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import api from '../api/axios';

const EventDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const response = await api.get(`/events/${id}/`);
        setEvent(response.data);
      } catch (error) {
        console.error("Error fetching event:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchEvent();
  }, [id]);

  if (loading) return <div className="min-h-screen bg-background-dark flex items-center justify-center text-white">Loading event...</div>;
  if (!event) return <div className="min-h-screen bg-background-dark flex items-center justify-center text-white">Event not found.</div>;

  return (
    <div className="dark bg-background-dark min-h-screen font-display text-white transition-colors duration-300">
      <style>
        {`
          .glass-overlay {
            background: rgba(18, 21, 28, 0.4);
            backdrop-filter: blur(20px);
            border: 1px solid rgba(255, 255, 255, 0.1);
          }
          .glass-card {
            background: rgba(255, 255, 255, 0.03);
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255, 255, 255, 0.08);
          }
        `}
      </style>

      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center px-4 py-4">
        <nav className="max-w-[1200px] w-full flex items-center justify-between bg-white/5 backdrop-blur-md border border-white/10 px-6 md:px-8 py-3 rounded-full">
          <div className="flex items-center gap-3">
            <div className="cursor-pointer flex items-center gap-3" onClick={() => navigate("/")}>
              <div className="size-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="material-symbols-outlined text-white text-xl">hub</span>
              </div>
              <h2 className="text-white text-lg md:text-xl font-extrabold tracking-tight whitespace-nowrap">MtaaConnect</h2>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-6 lg:gap-10">
            {['Events', 'Services', 'Hostels', 'Clubs'].map((link) => (
              <a key={link} className="text-white/80 hover:text-primary text-sm font-semibold transition-colors" href="#">{link}</a>
            ))}
          </div>
          <div className="flex items-center gap-4">
            <button 
              onClick={() => navigate("/signup")}
              className="px-4 md:px-6 py-2.5 bg-primary hover:bg-primary/90 rounded-full text-white text-xs md:text-sm font-bold transition-all shadow-lg shadow-primary/20 whitespace-nowrap"
            >
              Join Community
            </button>
          </div>
        </nav>
      </header>

      <main className="pt-24 pb-20">
        <section className="relative max-w-[1300px] mx-auto px-4 mt-6">
          <div className="relative h-[350px] md:h-[480px] w-full rounded-[20px] overflow-hidden shadow-2xl">
            <div 
              className="absolute inset-0 bg-center bg-cover" 
              style={{ backgroundImage: `url(${event.image_url || "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2070&auto=format&fit=crop"})` }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-transparent to-transparent"></div>
            
            <div className="absolute bottom-4 left-4 right-4 md:bottom-8 md:left-8 md:right-8 glass-overlay p-6 md:p-8 rounded-[20px]">
              <div className="flex flex-col gap-4">
                <div className="inline-flex w-fit items-center gap-2 px-3 py-1 rounded-full bg-accent-orange/20 border border-accent-orange/30 text-accent-orange text-[10px] font-black uppercase tracking-widest">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-orange opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-orange"></span>
                  </span>
                  {event.category || 'Event'}
                </div>
                <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-white leading-tight">{event.title}</h1>
                <div className="flex flex-wrap gap-4 md:gap-6 text-[#9ca6ba]">
                  <IconText icon="calendar_month" text={event.date} />
                  <IconText icon="location_on" text={event.location} />
                  <IconText icon="schedule" text={event.time || "TBA"} />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-[1200px] mx-auto px-6 mt-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 space-y-12">
              <ContentSection title="About the Event">
                <div className="text-[#9ca6ba] leading-relaxed space-y-4 text-base md:text-lg">
                  <p>{event.description}</p>
                </div>
              </ContentSection>
            </div>

            <div className="lg:col-span-1">
              <div className="sticky top-28 space-y-6">
                <div className="bg-card-dark border border-white/10 rounded-[20px] p-6 md:p-8 shadow-2xl relative overflow-hidden group">
                  <div className="mb-8">
                    <span className="text-[#9ca6ba] text-sm block mb-1">Registration Price</span>
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl font-black text-white">
                        {event.price > 0 ? `Ksh ${event.price}` : 'Free'}
                      </span>
                    </div>
                  </div>
                  <button className="w-full py-4 bg-primary hover:bg-primary/90 rounded-[15px] text-white font-black text-lg transition-all shadow-xl shadow-primary/20 mb-4 flex items-center justify-center gap-2">
                    Register Now
                    <span className="material-symbols-outlined">trending_flat</span>
                  </button>
                </div>

                <div className="bg-card-dark border border-white/10 rounded-[20px] p-6">
                  <h4 className="text-white font-bold mb-4 flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary text-sm">verified_user</span>
                    Organizer
                  </h4>
                  <div className="flex items-center gap-4">
                    <div className="size-12 rounded-full bg-primary/20 flex items-center justify-center border border-primary/30">
                      <span className="material-symbols-outlined text-primary">school</span>
                    </div>
                    <div>
                      <h5 className="text-white font-bold">{event.organizer_name || 'JKUAT Society'}</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#0a0d14] border-t border-white/5 pt-16 pb-8">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 md:col-span-1">
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
            <FooterLinkSection title="Platform" links={['Find Hostels', 'Campus Map', 'Student Forum']} />
            <FooterLinkSection title="Community" links={['Clubs & Societies', 'Events Calendar', 'Mentorship']} />
            <FooterLinkSection title="Support" links={['Help Center', 'Terms of Service', 'Privacy Policy']} />
          </div>
        </div>
      </footer>
    </div>
  );
};

const IconText = ({ icon, text }) => (
  <div className="flex items-center gap-2">
    <span className="material-symbols-outlined text-primary text-sm md:text-base">{icon}</span>
    <span className="font-medium text-xs md:text-sm">{text}</span>
  </div>
);

const ContentSection = ({ title, children }) => (
  <div>
    <h2 className="text-2xl font-extrabold text-white mb-6 flex items-center gap-2">
      <span className="w-2 h-8 bg-primary rounded-full"></span>
      {title}
    </h2>
    {children}
  </div>
);

const FooterLinkSection = ({ title, links }) => (
  <div>
    <h4 className="text-white font-bold mb-6">{title}</h4>
    <ul className="space-y-4 text-sm text-[#9ca6ba]">
      {links.map(link => (
        <li key={link}><a className="hover:text-primary transition-colors" href="#">{link}</a></li>
      ))}
    </ul>
  </div>
);

export default EventDetails;