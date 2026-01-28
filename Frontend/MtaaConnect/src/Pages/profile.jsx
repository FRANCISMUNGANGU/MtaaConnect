import React, { useEffect, useState } from "react";
import { auth } from "../services/auth";

export default function Profile() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const data = await auth.getUserProfile();
        setUser(data);
      } catch (error) {
        console.error("Failed to load profile", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProfile();
  }, []);

  if (loading) return <div className="p-10 text-white">Loading...</div>;
  if (!user) return <div className="p-10 text-white">Please log in to see your profile.</div>;

  return (
    <div className="p-10 bg-background-dark min-h-screen text-white">
      <h1 className="text-3xl font-bold mb-2">User Profile</h1>
      <p className="text-slate-400 mb-8">Manage your personal information and settings here.</p>
      
      <div className="max-w-md bg-white/5 border border-white/10 rounded-2xl p-6">
        <div className="space-y-4">
          <div>
            <label className="text-xs font-bold text-primary uppercase">Username</label>
            <p className="text-lg">{user.username}</p>
          </div>
          <div>
            <label className="text-xs font-bold text-primary uppercase">Full Name</label>
            <p className="text-lg">{user.first_name} {user.middle_name} {user.last_name}</p>
          </div>
          <div>
            <label className="text-xs font-bold text-primary uppercase">Email</label>
            <p className="text-lg">{user.email}</p>
          </div>
          <div>
            <label className="text-xs font-bold text-primary uppercase">Phone Number</label>
            <p className="text-lg">{user.phone_number}</p>
          </div>
        </div>

        <button 
          onClick={() => auth.logout()}
          className="mt-8 w-full py-3 bg-red-500/20 text-red-500 rounded-full font-bold hover:bg-red-500/30 transition-all"
        >
          Log Out
        </button>
      </div>
    </div>
  );
}