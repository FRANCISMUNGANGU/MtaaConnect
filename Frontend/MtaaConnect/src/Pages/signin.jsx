import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { auth } from '../services/auth';

const AuthPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await auth.login(formData);
      alert("Jumped in successfully!");
      navigate("/dashboard");
    } catch (error) {
      const serverError = error.response?.data;
      alert("Login failed: " + (serverError?.detail || "Invalid username or password"));
    }
  };

  return (
    <div className="dark bg-background-dark font-display min-h-screen flex items-center justify-center p-0 md:p-6 overflow-x-hidden transition-colors duration-300">
      <style dangerouslySetInnerHTML={{ __html: `
        .glass-card {
          background: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
        .glass-input {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(4px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          transition: all 0.3s ease;
        }
        .glass-input:focus {
          background: rgba(255, 255, 255, 0.08);
          border-color: #0d59f2;
          outline: none;
          box-shadow: 0 0 0 2px rgba(13, 89, 242, 0.2);
        }
      `}} />

      <div className="flex flex-col md:flex-row w-full max-w-[1440px] h-full md:h-[90vh] bg-background-light dark:bg-[#0b0f1a] rounded-none md:rounded-xl overflow-hidden shadow-2xl border border-white/5">
        
        <div className="hidden md:flex w-1/2 relative bg-primary overflow-hidden flex-col justify-between p-12 shrink-0">
          <div className="absolute top-[-10%] left-[-10%] w-72 h-72 bg-blue-400/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-[-5%] right-[-5%] w-96 h-96 bg-black/20 rounded-full blur-3xl"></div>
          
          <div className="relative z-10">
            <div className="flex items-center gap-3 text-white mb-12">
              <div className="size-10 bg-white text-primary rounded-lg flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined font-bold">hub</span>
              </div>
              <h2 className="text-2xl font-extrabold tracking-tight">MtaaConnect</h2>
            </div>
            <div className="max-w-md">
              <h1 className="text-white text-5xl font-extrabold leading-tight mb-6">
                The Heart of <br/> <span className="text-white/80">JKUAT Students.</span>
              </h1>
              <p className="text-blue-100 text-lg leading-relaxed font-medium">
                Connect, collaborate, and grow with the Mtaa community. Join the hub for tech-savvy Gen Z students and innovative local brands.
              </p>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/2 bg-background-light dark:bg-background-dark flex flex-col justify-center items-center px-6 py-12 md:px-20 overflow-y-auto">
          <div className="w-full max-w-[420px]">
            <div className="mb-10 text-center md:text-left">
              <h2 className="text-slate-900 dark:text-white text-4xl font-extrabold mb-2">Jump back in.</h2>
              <p className="text-slate-500 dark:text-slate-400 font-medium">
                Don't have an account? <a className="text-primary hover:underline font-bold cursor-pointer" onClick={() => navigate("/signup")}>Sign up for free</a>
              </p>
            </div>

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="flex flex-col gap-2">
                <label className="text-slate-700 dark:text-slate-300 text-sm font-bold ml-4">Username</label>
                <input 
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  className="glass-input h-14 px-6 rounded-full text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 font-medium w-full" 
                  placeholder="janedoe" 
                  type="text"
                  required
                />
              </div>

              <div className="flex flex-col gap-2">
                <div className="flex justify-between items-center ml-4 pr-4">
                  <label className="text-slate-700 dark:text-slate-300 text-sm font-bold">Password</label>
                  <a className="text-primary text-xs font-bold hover:underline" href="#">Forgot?</a>
                </div>
                <div className="relative group">
                  <input 
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    className="glass-input w-full h-14 px-6 rounded-full text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 font-medium" 
                    placeholder="••••••••" 
                    type={showPassword ? "text" : "password"}
                    required
                  />
                  <button 
                    className="absolute right-5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-primary transition-colors" 
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    <span className="material-symbols-outlined">
                      {showPassword ? "visibility_off" : "visibility"}
                    </span>
                  </button>
                </div>
              </div>

              <div className="pt-4">
                <button 
                  className="w-full bg-primary hover:bg-blue-600 text-white h-14 rounded-full font-extrabold text-lg shadow-lg shadow-primary/30 transition-all active:scale-[0.98]" 
                  type="submit"
                >
                  Jump In
                </button>
              </div>
            </form>

            <p className="mt-8 text-center text-slate-400 text-xs font-medium px-4">
              By clicking "Jump In", you agree to MtaaConnect's 
              <a className="text-slate-600 dark:text-slate-300 underline mx-1" href="#">Terms of Service</a> and 
              <a className="text-slate-600 dark:text-slate-300 underline mx-1" href="#">Privacy Policy</a>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;