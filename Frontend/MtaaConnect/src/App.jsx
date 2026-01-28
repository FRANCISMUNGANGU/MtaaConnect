import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import LandingPage from "./Pages/landingpage";
import Signup from "./Pages/signup";
import Signin from "./Pages/signin";
import Dashboard from "./Pages/dashboard";
import Profile from "./Pages/profile";
import EventDetails from "./Pages/eventpage";
import Channels from "./Pages/channels";
import ChannelsDetails from "./Pages/channelsdetail";
import Ads from "./Pages/ads";
import AdsDetails from "./Pages/adsdetails";
import Services from "./Pages/services";
import ServiceDetails from "./Pages/servicesdetails";
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
          <Route path="/channels/:id" element={<ChannelsDetails />} />
          <Route path="/ads" element={<Ads />} />
          <Route path="/ads/:id" element={<AdsDetails />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:id" element={<ServiceDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
