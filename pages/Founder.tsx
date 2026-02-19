
import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, ArrowRight, Quote } from 'lucide-react';
import { FOUNDER_BIO, TEAM_DATA } from '../constants';

const Founder: React.FC = () => {
  return (
    <div className="bg-white selection:bg-highlight overflow-hidden">
      {/* Hero Section */}
      <section className="pt-40 pb-16 lg:pb-24 border-b border-black/5">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center">
            <div className="lg:col-span-5 relative group order-2 lg:order-1 max-w-lg mx-auto lg:max-w-none">
              <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl relative z-10">
                <img
                  src={FOUNDER_BIO.image}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  alt={FOUNDER_BIO.name}
                  decoding="async"
                />
                <div className="absolute inset-0 bg-primary/10 mix-blend-multiply transition-opacity duration-700 opacity-0 group-hover:opacity-100" />
              </div>
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-accent/20 rounded-full blur-3xl" />
              <div className="absolute -top-10 -left-10 w-32 h-32 bg-primary/10 rounded-full blur-2xl" />
            </div>

            <div className="lg:col-span-7 order-1 lg:order-2 text-center lg:text-left">
              <span className="text-[10px] font-black text-accent tracking-[0.4em] uppercase mb-6 block">The Visionary</span>
              <h1 className="text-4xl md:text-6xl lg:text-8xl font-serif text-textPrimary leading-tight mb-8">
                {FOUNDER_BIO.name}
              </h1>
              <p className="text-lg lg:text-xl font-medium text-primary mb-10 tracking-widest uppercase">{FOUNDER_BIO.credentials}</p>

              <div className="max-w-xl mx-auto lg:mx-0">
                <p className="text-xl lg:text-2xl font-serif text-textPrimary/80 italic leading-relaxed mb-10 lg:mb-12">
                  "{FOUNDER_BIO.philosophy}"
                </p>

                <div className="flex flex-col sm:flex-row gap-8 items-center justify-center lg:justify-start border-t border-black/5 pt-10 lg:pt-12">
                  <div className="flex flex-col gap-2">
                    <p className="text-[10px] font-black uppercase tracking-widest text-textPrimary/40">Connect</p>
                    <div className="flex gap-4 text-primary justify-center lg:justify-start">
                      <Instagram className="hover:text-accent cursor-pointer transition-colors" size={20} />
                    </div>
                  </div>
                  <Link to="/contact" className="bg-primary text-white px-10 py-5 rounded-full font-bold text-xs uppercase tracking-widest hover:bg-primary/90 transition-all shadow-xl shadow-primary/10 active:scale-95">
                    Reserve a Consultation
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 lg:py-32 bg-highlight/20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 lg:mb-20">
              <Quote className="text-accent mx-auto mb-6 lg:mb-8 opacity-40" size={48} />
              <h2 className="text-3xl lg:text-5xl font-serif mb-10 lg:mb-12 text-textPrimary leading-tight">Redefining the standard of clinical empathy.</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 text-base lg:text-lg leading-relaxed text-textPrimary/70 font-light">
              <p>{FOUNDER_BIO.fullBio.split('. ').slice(0, 2).join('. ')}.</p>
              <p>{FOUNDER_BIO.fullBio.split('. ').slice(2).join('. ')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div className="text-center lg:text-left">
              <h3 className="text-3xl lg:text-4xl font-serif mb-6 lg:mb-8 text-textPrimary">Area of Expertise</h3>
              <p className="text-textPrimary/50 mb-10 lg:mb-12 text-base lg:text-lg font-light leading-relaxed">Dr. Sivaranjani leads our clinical team with a focus on advanced restorative techniques and complex aesthetic cases.</p>

              <div className="space-y-4 lg:space-y-6">
                {FOUNDER_BIO.specialties.map((spec, i) => (
                  <div key={i} className="flex items-center justify-between group cursor-default p-5 lg:p-6 border border-black/5 rounded-2xl hover:bg-primary hover:text-white transition-all duration-500">
                    <span className="text-lg lg:text-xl font-serif">{spec}</span>
                    <ArrowRight className="text-accent opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="aspect-[3/4] rounded-[2rem] lg:rounded-3xl overflow-hidden shadow-lg lg:mt-12">
                <img src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover" alt="Clinic" loading="lazy" />
              </div>
              <div className="aspect-[3/4] rounded-[2rem] lg:rounded-3xl overflow-hidden shadow-lg">
                <img src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=2080&auto=format&fit=crop" className="w-full h-full object-cover" alt="Surgery" loading="lazy" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specialists Section */}
      <section className="py-20 lg:py-32 border-t border-black/5">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-serif mb-4 text-textPrimary">The Supporting Specialists</h2>
            <p className="text-textPrimary/40 font-light">Under Dr. Sivaranjani's leadership, our team of experts ensures seamless care.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 max-w-5xl mx-auto">
            {TEAM_DATA.filter(m => m.id !== 'dr-sivaranjani').map(member => (
              <div key={member.id} className="text-center group">
                <div className="aspect-square rounded-[2rem] lg:rounded-[2.5rem] overflow-hidden mb-6 relative max-w-[280px] mx-auto">
                  <img src={member.image} className="w-full h-full object-cover grayscale transition-all group-hover:grayscale-0 duration-700" alt={member.name} loading="lazy" />
                </div>
                <h4 className="text-xl lg:text-2xl font-serif mb-1 text-textPrimary">{member.name}</h4>
                <p className="text-[10px] font-black text-accent uppercase tracking-[0.3em]">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Founder;
