import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { auth } from '../services/auth';

const SignUpPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    first_name: "",
    middle_name: "",
    last_name: "",
    phone_number: "",
    gender: "M",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await auth.signup(formData);
      alert("Account created successfully!");
      navigate("/signin");
    } catch (error) {
      const serverErrors = error.response?.data;
      if (serverErrors) {
        const errorMsg = Object.entries(serverErrors)
          .map(([field, msgs]) => `${field}: ${Array.isArray(msgs) ? msgs.join(' ') : msgs}`)
          .join('\n');
        alert("Signup Error:\n" + errorMsg);
      } else {
        alert("Signup failed. Please check your connection.");
      }
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
        .form-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .form-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 10px;
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
                Start Your <br/> <span className="text-white/80">Journey Here.</span>
              </h1>
              <p className="text-blue-100 text-lg leading-relaxed font-medium">
                Create your account and unlock the full potential of the JKUAT student ecosystem.
              </p>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/2 bg-background-light dark:bg-background-dark flex flex-col justify-center items-center px-6 py-8 md:px-16 overflow-hidden">
          <div className="w-full max-w-[500px] h-full flex flex-col">
            <div className="mb-6 text-center md:text-left shrink-0">
              <h2 className="text-slate-900 dark:text-white text-3xl font-extrabold mb-1">Create Account.</h2>
              <p className="text-slate-500 dark:text-slate-400 font-medium text-sm">
                Already have an account? <a className="text-primary hover:underline font-bold cursor-pointer" onClick={() => navigate("/signin")}>Jump back in</a>
              </p>
            </div>

            <form className="space-y-4 overflow-y-auto pr-2 form-scrollbar" onSubmit={handleSubmit}>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="flex flex-col gap-1">
                  <label className="text-slate-700 dark:text-slate-300 text-xs font-bold ml-4">First Name</label>
                  <input name="first_name" value={formData.first_name} onChange={handleChange} className="glass-input h-12 px-5 rounded-full text-slate-900 dark:text-white text-sm" placeholder="Jane" type="text" required />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-slate-700 dark:text-slate-300 text-xs font-bold ml-4">Middle Name</label>
                  <input name="middle_name" value={formData.middle_name} onChange={handleChange} className="glass-input h-12 px-5 rounded-full text-slate-900 dark:text-white text-sm" placeholder="Optional" type="text" />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-slate-700 dark:text-slate-300 text-xs font-bold ml-4">Last Name</label>
                  <input name="last_name" value={formData.last_name} onChange={handleChange} className="glass-input h-12 px-5 rounded-full text-slate-900 dark:text-white text-sm" placeholder="Doe" type="text" required />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="flex flex-col gap-1">
                  <label className="text-slate-700 dark:text-slate-300 text-xs font-bold ml-4">Username</label>
                  <input name="username" value={formData.username} onChange={handleChange} className="glass-input h-12 px-5 rounded-full text-slate-900 dark:text-white text-sm" placeholder="janedoe" type="text" required />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-slate-700 dark:text-slate-300 text-xs font-bold ml-4">Phone Number</label>
                  <input name="phone_number" value={formData.phone_number} onChange={handleChange} className="glass-input h-12 px-5 rounded-full text-slate-900 dark:text-white text-sm" placeholder="0712345678" type="tel" required />
                </div>
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-slate-700 dark:text-slate-300 text-xs font-bold ml-4">Email Address</label>
                <input name="email" value={formData.email} onChange={handleChange} className="glass-input h-12 px-6 rounded-full text-slate-900 dark:text-white text-sm" placeholder="janedoe@gmail.com" type="email" required />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="flex flex-col gap-1 sm:col-span-1">
                  <label className="text-slate-700 dark:text-slate-300 text-xs font-bold ml-4">Gender</label>
                  <select name="gender" value={formData.gender} onChange={handleChange} className="glass-input h-12 px-5 rounded-full text-slate-900 dark:text-white text-sm appearance-none cursor-pointer">
                    <option value="M" className="bg-[#0b0f1a]">Male</option>
                    <option value="F" className="bg-[#0b0f1a]">Female</option>
                    <option value="O" className="bg-[#0b0f1a]">Other</option>
                  </select>
                </div>
                <div className="flex flex-col gap-1 sm:col-span-2">
                  <label className="text-slate-700 dark:text-slate-300 text-xs font-bold ml-4">Password</label>
                  <div className="relative group">
                    <input 
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      className="glass-input w-full h-12 px-6 rounded-full text-slate-900 dark:text-white text-sm" 
                      placeholder="••••••••" 
                      type={showPassword ? "text" : "password"}
                      required
                    />
                    <button 
                      className="absolute right-5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-primary transition-colors" 
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      <span className="material-symbols-outlined text-sm">
                        {showPassword ? "visibility_off" : "visibility"}
                      </span>
                    </button>
                  </div>
                </div>
              </div>

              <div className="pt-2 shrink-0">
                <button 
                  className="w-full bg-primary hover:bg-blue-600 text-white h-12 rounded-full font-extrabold text-md shadow-lg shadow-primary/30 transition-all active:scale-[0.98]" 
                  type="submit"
                >
                  Create Account
                </button>
              </div>
            </form>

            <p className="mt-4 text-center text-slate-400 text-[10px] font-medium px-4 shrink-0">
              By creating an account, you agree to MtaaConnect's 
              <a className="text-slate-600 dark:text-slate-300 underline mx-1" href="#">Terms</a> and 
              <a className="text-slate-600 dark:text-slate-300 underline mx-1" href="#">Privacy Policy</a>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;