
import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { SEO } from '../components/SEO';

const Contact: React.FC = () => {
  return (
    <div className="bg-[#020617] pt-32 pb-16 lg:pt-20">
      <SEO
        title="Access Hub | OmniDental AI"
        description="Connect with Dr. Xavier Thorne and the robotic clinical team. Schedule your structural audit or neural scan today."
      />
      <section className="py-12 lg:py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl md:text-6xl font-serif mb-8 text-white leading-tight">Architect your <br className="hidden md:block" /><span className="text-primary italic">perfect future.</span></h1>
              <p className="text-lg lg:text-xl text-white/60 mb-12 lg:mb-16 max-w-md mx-auto lg:mx-0 font-light leading-relaxed">Our clinical suites are equipped with the latest haptic systems. Secure your position in the future of dental care.</p>

              <div className="space-y-10 lg:space-y-12">
                <div className="flex flex-col sm:flex-row gap-6 items-center lg:items-start">
                  <div className="w-14 h-14 bg-primary text-slate-950 rounded-2xl flex items-center justify-center shrink-0 shadow-lg shadow-primary/20"><MapPin size={24} /></div>
                  <div className="w-full">
                    <h4 className="font-bold text-lg lg:text-xl mb-3 text-white tracking-tight">Access Hubs</h4>

                    {/* Perungudi Branch */}
                    <div className="mb-6">
                      <p className="text-[10px] font-black text-primary tracking-[0.3em] uppercase mb-1">Hub Alpha — Cyber City</p>
                      <p className="text-white/40 mb-3 text-sm font-light">Precision Tower, Level 42, Robotic District, Hub Alpha.</p>
                      <div className="w-full h-52 rounded-2xl overflow-hidden shadow-2xl border border-white/5 grayscale hover:grayscale-0 transition-all">
                        <iframe
                          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15551.48782987179!2d80.22253255!3d13.010237!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5267a0ee000001%3A0x72a44b15c92900e5!2sIIT%20Madras!5e0!3m2!1sen!2sin!4v1707567890123!5m2!1sen!2sin"
                          width="100%"
                          height="100%"
                          style={{ border: 0 }}
                          allowFullScreen
                          loading="lazy"
                          referrerPolicy="no-referrer-when-downgrade"
                          title="OmniDental Hub Alpha"
                        />
                      </div>
                    </div>

                    {/* Velachery Branch */}
                    <div>
                      <p className="text-[10px] font-black text-primary tracking-[0.3em] uppercase mb-1">Hub Beta — Skyline District</p>
                      <p className="text-white/40 mb-3 text-sm font-light">Skyline Plaza, Suite 9, High-Tech Corridor, Hub Beta.</p>
                      <div className="w-full h-52 rounded-2xl overflow-hidden shadow-2xl border border-white/5 grayscale hover:grayscale-0 transition-all">
                        <iframe
                          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.9999999999995!2d80.2173!3d12.9781!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525d5b5b5b5b5b%3A0x5b5b5b5b5b5b5b5b!2sVelachery%2C%20Chennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1707567890124!5m2!1sen!2sin"
                          width="100%"
                          height="100%"
                          style={{ border: 0 }}
                          allowFullScreen
                          loading="lazy"
                          referrerPolicy="no-referrer-when-downgrade"
                          title="OmniDental Hub Beta"
                        />
                      </div>
                    </div>
                  </div>

                </div>
                <div className="flex flex-col sm:flex-row gap-6 items-center lg:items-start">
                  <div className="w-14 h-14 bg-primary text-slate-950 rounded-2xl flex items-center justify-center shrink-0 shadow-lg shadow-primary/20"><Phone size={24} /></div>
                  <div>
                    <h4 className="font-bold text-lg lg:text-xl mb-3 text-white tracking-tight">Direct Data Link</h4>
                    <p className="text-white/40 mb-1 font-bold text-sm lg:text-base">+91 99999 12345</p>
                    <p className="text-white/40 text-sm lg:text-base font-light">hello@omnidental.ai</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass p-8 lg:p-12 rounded-[2.5rem] lg:rounded-[3rem] shadow-2xl border border-white/5">
              <h3 className="text-2xl lg:text-3xl font-serif mb-8 text-white">Initialize Session</h3>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40">Full Name</label>
                    <input type="text" className="w-full bg-white/5 border-white/10 border p-4 rounded-xl focus:ring-2 focus:ring-primary outline-none transition-all text-sm text-white" placeholder="Xavier Thorne" required />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40">Data Link (Phone)</label>
                    <input type="tel" className="w-full bg-white/5 border-white/10 border p-4 rounded-xl focus:ring-2 focus:ring-primary outline-none transition-all text-sm text-white" placeholder="+91" required />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40">Select Protocol</label>
                  <select className="w-full bg-white/5 border-white/10 border p-4 rounded-xl focus:ring-2 focus:ring-primary outline-none transition-all text-sm appearance-none cursor-pointer text-white">
                    <option className="bg-slate-950">Structural Audit</option>
                    <option className="bg-slate-950">AI Smile Design</option>
                    <option className="bg-slate-950">Robotic Implants</option>
                    <option className="bg-slate-950">Neural Mapping</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40">Transmission (Message)</label>
                  <textarea rows={4} className="w-full bg-white/5 border-white/10 border p-4 rounded-xl focus:ring-2 focus:ring-primary outline-none transition-all text-sm resize-none text-white" placeholder="Transmission details..."></textarea>
                </div>
                <button type="submit" className="w-full bg-primary text-slate-950 py-5 rounded-full font-bold shadow-xl shadow-primary/20 hover:bg-primary/90 active:scale-95 transition-all flex items-center justify-center gap-3 group text-xs uppercase tracking-[0.2em]">
                  Send Transfer <Send size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
