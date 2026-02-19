
import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { SEO } from '../components/SEO';

const Contact: React.FC = () => {
  return (
    <div className="bg-mesh pt-32 pb-16 lg:pt-20">
      <SEO
        title="Book an Appointment | OralCare Dental Clinic Chennai"
        description="Contact OralCare dental clinic in Chennai. Book your appointment online or visit us at Perungudi or Velachery. Call +91 98400 12345."
      />
      <section className="py-12 lg:py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl md:text-6xl font-serif mb-8 text-textPrimary leading-tight">Let's build your <br className="hidden md:block" /><span className="text-primary italic">perfect smile.</span></h1>
              <p className="text-lg lg:text-xl text-textPrimary/60 mb-12 lg:mb-16 max-w-md mx-auto lg:mx-0 font-light leading-relaxed">Our clinics are designed for your comfort. Reach out to schedule a consultation at our Perungudi or Velachery branches.</p>

              <div className="space-y-10 lg:space-y-12">
                <div className="flex flex-col sm:flex-row gap-6 items-center lg:items-start">
                  <div className="w-14 h-14 bg-primary text-white rounded-2xl flex items-center justify-center shrink-0 shadow-lg shadow-primary/10"><MapPin size={24} /></div>
                  <div className="w-full">
                    <h4 className="font-bold text-lg lg:text-xl mb-3 text-textPrimary tracking-tight">Our Locations</h4>
                    <p className="text-textPrimary/50 mb-3 leading-relaxed text-sm lg:text-base font-light">No 253, First Floor, Rajiv Gandhi Salai, Perungudi, Chennai.</p>
                    <p className="text-textPrimary/50 leading-relaxed text-sm lg:text-base font-light mb-4">No 3, 76 A, Second Floor, Radhamohan street, Velachery, Chennai.</p>
                    {/* Google Maps Placeholder */}
                    <div className="w-full h-48 bg-gray-200 rounded-xl overflow-hidden mt-4">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.882194936086!2d80.2407523750764!3d12.97939198733475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525d6d2e071727%3A0x6c90d024b3014389!2sPerungudi%2C%20Chennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1707567890123!5m2!1sen!2sin"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Clinic Location"
                      ></iframe>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-6 items-center lg:items-start">
                  <div className="w-14 h-14 bg-accent text-white rounded-2xl flex items-center justify-center shrink-0 shadow-lg shadow-accent/10"><Phone size={24} /></div>
                  <div>
                    <h4 className="font-bold text-lg lg:text-xl mb-3 text-textPrimary tracking-tight">Contact Details</h4>
                    <p className="text-textPrimary/50 mb-1 font-bold text-sm lg:text-base">+91 98400 12345</p>
                    <p className="text-textPrimary/50 text-sm lg:text-base font-light">luxe.dental@outlook.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 lg:p-12 rounded-[2.5rem] lg:rounded-[3rem] shadow-2xl shadow-primary/5 border border-black/5">
              <h3 className="text-2xl lg:text-3xl font-serif mb-8 text-textPrimary">Book Online</h3>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-textPrimary/40">Full Name</label>
                    <input type="text" className="w-full bg-highlight/20 border-0 p-4 rounded-xl focus:ring-2 focus:ring-primary outline-none transition-all text-sm" placeholder="Jane Smith" required />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-textPrimary/40">Phone Number</label>
                    <input type="tel" className="w-full bg-highlight/20 border-0 p-4 rounded-xl focus:ring-2 focus:ring-primary outline-none transition-all text-sm" placeholder="+91" required />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-textPrimary/40">Select Treatment</label>
                  <select className="w-full bg-highlight/20 border-0 p-4 rounded-xl focus:ring-2 focus:ring-primary outline-none transition-all text-sm appearance-none cursor-pointer">
                    <option>General Checkup</option>
                    <option>Cosmetic Dentistry</option>
                    <option>Dental Implants</option>
                    <option>Orthodontics</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-textPrimary/40">Message</label>
                  <textarea rows={4} className="w-full bg-highlight/20 border-0 p-4 rounded-xl focus:ring-2 focus:ring-primary outline-none transition-all text-sm resize-none" placeholder="How can we help?"></textarea>
                </div>
                <button type="submit" className="w-full bg-primary text-white py-5 rounded-full font-bold shadow-xl shadow-primary/20 hover:bg-primary/90 active:scale-95 transition-all flex items-center justify-center gap-3 group text-xs uppercase tracking-[0.2em]">
                  Send Request <Send size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
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
