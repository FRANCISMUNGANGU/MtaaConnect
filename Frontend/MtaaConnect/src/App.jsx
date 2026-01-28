import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import LandingPage from "./Pages/landingpage";
import Signup from "./Pages/signup";
import Signin from "./Pages/signin";
import Dashboard from "./Pages/dashboard";
import Profile from "./Pages/profile";
import EventDetails from "./Pages/eventpage";
import Channels from "./Pages/channels";
import Ads from "./Pages/ads";
import Services from "./Pages/services";
import MainLayout from "./Layout/MainLayout";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Marketing / public page without app layout */}
        <Route path="/" element={<LandingPage />} />

        {/* Auth pages without main layout */}
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />

        {/* App pages with shared layout */}
        <Route element={<MainLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/event" element={<EventDetails />} />
          <Route path="/events" element={<EventDetails />} />
          <Route path="/channels" element={<Channels />} />
          <Route path="/ads" element={<Ads />} />
          <Route path="/services" element={<Services />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
