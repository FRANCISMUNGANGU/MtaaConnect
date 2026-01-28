import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import LandingPage from "./Pages/landingpage";
import Signup from "./Pages/signup";
import Signin from "./Pages/signin";
import Dashboard from "./Pages/dashboard";
import Profile from "./Pages/profile";
import EventDetails from "./Pages/eventpage";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/event" element={<EventDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
