import React from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";

function MainLayout() {
  const navigate = useNavigate();

  const navLinkClasses = ({ isActive }) =>
    `px-3 py-1.5 rounded-full text-xs font-semibold transition-colors ${
      isActive
        ? "bg-primary text-white"
        : "text-white/70 hover:text-white hover:bg-white/10"
    }`;

  return (
    <div className="dark bg-background-dark text-white min-h-screen">
      {/* Top Nav */}
      <header className="sticky top-0 z-40 border-b border-white/5 bg-[#050712]/80 backdrop-blur-md">
        <div className="w-full px-4 py-3 flex items-center justify-between gap-4">
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-2"
          >
            <div className="size-8 bg-primary rounded-lg flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-white text-xl">
                hub
              </span>
            </div>
            <span className="hidden sm:block text-sm font-extrabold tracking-tight">
              MtaaConnect
            </span>
          </button>

          <nav className="flex items-center gap-2 sm:gap-3">
            <NavLink to="/dashboard" className={navLinkClasses}>
              Dashboard
            </NavLink>
            <NavLink to="/channels" className={navLinkClasses}>
              Channels
            </NavLink>
            <NavLink to="/events" className={navLinkClasses}>
              Events
            </NavLink>
            <NavLink to="/ads" className={navLinkClasses}>
              Ads
            </NavLink>
            <NavLink to="/services" className={navLinkClasses}>
              Services
            </NavLink>
            <NavLink to="/profile" className={navLinkClasses}>
              Profile
            </NavLink>
          </nav>
        </div>
      </header>

      {/* Page content (full-bleed; each page controls its own container) */}
      <main className="w-full">
        <Outlet />
      </main>
    </div>
  );
}

export default MainLayout;

