
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { SERVICES_DATA } from '../constants';
import { SEO } from '../components/SEO';

const Services: React.FC = () => {
  return (
    <div className="bg-[#020617] pt-32 pb-16 lg:pt-20">
      <SEO
        title="Clinical Stack | OmniDental AI"
        description="Explore our robotic surgical systems and AI-guided dental architecture. Precision dentistry for the next generation."
      />
      <section className="py-12 lg:py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-end mb-16 lg:mb-24">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl lg:text-6xl font-serif mb-6 text-white">Structural <br className="hidden lg:block" />Integrity</h1>
              <p className="text-xl text-white/60 max-w-lg mx-auto lg:mx-0 font-light leading-relaxed">From molecular analysis to robotic surgery, we maintain the future of your facial architecture.</p>
            </div>
            <div className="text-6xl lg:text-9xl font-serif text-white/5 text-center lg:text-right hidden sm:block select-none leading-none">TECH</div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
            {SERVICES_DATA.map((service, i) => (
              <Link to={`/services/${service.id}`} key={service.id} className="group glass rounded-[2rem] overflow-hidden border border-white/5 hover:shadow-2xl transition-all duration-500 flex flex-col h-full">
                <div className="aspect-[16/10] overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
                  <img
                    src={service.image}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    alt={service.title}
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="p-8 lg:p-10 flex-grow flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-black text-primary tracking-[0.3em] uppercase mb-4 block">Module 0{i + 1}</span>
                    <h3 className="text-2xl lg:text-3xl font-serif mb-4 group-hover:text-primary transition-colors text-white">{service.title}</h3>
                    <p className="text-white/40 text-sm leading-relaxed mb-8 font-light line-clamp-3">{service.shortDesc}</p>
                  </div>
                  <div className="pt-6 border-t border-white/5 flex justify-between items-center group-hover:border-primary/20 transition-colors">
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white/60 group-hover:text-primary transition-colors">Access Data</span>
                    <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-primary group-hover:text-slate-950 group-hover:border-primary transition-all">
                      <ArrowRight size={16} />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
