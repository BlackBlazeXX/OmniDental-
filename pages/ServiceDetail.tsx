
import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, CheckCircle2, ChevronRight } from 'lucide-react';
import { SERVICES_DATA } from '../constants';

const ServiceDetail: React.FC = () => {
  const { id } = useParams();
  const service = SERVICES_DATA.find(s => s.id === id);

  if (!service) return <Navigate to="/services" />;

  return (
    <div className="bg-[#020617]">
      <div className="relative h-[50vh] lg:h-[60vh] bg-slate-900 overflow-hidden">
        <img src={service.image} className="w-full h-full object-cover opacity-40 grayscale" alt={service.title} decoding="async" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#020617]" />
        <div className="absolute inset-0 flex items-center pt-24 lg:pt-32">
          <div className="container mx-auto px-6">
            <Link to="/services" className="inline-flex items-center gap-2 text-primary font-bold mb-6 lg:mb-8 hover:-translate-x-2 transition-transform text-sm lg:text-base uppercase tracking-widest">
              <ArrowLeft size={18} /> Back to Stack
            </Link>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-white max-w-2xl leading-tight">{service.title}</h1>
          </div>
        </div>
      </div>

      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
            <div className="lg:col-span-7">
              <div className="prose prose-lg lg:prose-xl prose-invert max-w-none text-white/60 leading-relaxed mb-16">
                <p className="text-xl lg:text-2xl text-white mb-8 font-light italic leading-relaxed">"{service.shortDesc}"</p>
                <div className="font-light space-y-6 text-white/40">
                  {service.description.split('\n').map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mb-16 lg:mb-24">
                <div className="glass p-8 lg:p-10 rounded-[2rem] border border-white/5">
                  <h3 className="text-xl lg:text-2xl font-serif mb-8 text-white">System Benefits</h3>
                  <ul className="space-y-4">
                    {service.benefits.map((b, i) => (
                      <li key={i} className="flex items-center gap-3 text-white/50 text-sm lg:text-base font-light">
                        <CheckCircle2 className="text-primary shrink-0" size={20} /> {b}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="glass p-8 lg:p-10 rounded-[2rem] border border-white/5">
                  <h3 className="text-xl lg:text-2xl font-serif mb-8 text-white">Lab Protocol</h3>
                  <div className="space-y-6">
                    {service.process.map((step, i) => (
                      <div key={i} className="flex gap-4">
                        <span className="text-[10px] font-black text-primary opacity-30 mt-1 uppercase tracking-tighter">0{i + 1}</span>
                        <p className="text-white/60 font-medium text-sm lg:text-base">{step}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="sticky top-32 glass border border-white/5 p-8 lg:p-12 rounded-[2.5rem] shadow-2xl">
                <h3 className="text-2xl lg:text-3xl font-serif mb-6 text-white">Initialize Protocol</h3>
                <p className="text-white/40 mb-10 text-sm lg:text-base font-light leading-relaxed">Schedule a structural audit with the robotic surgical team. Verification is instant.</p>
                <Link to="/contact" className="block text-center bg-primary text-slate-950 py-5 rounded-full font-bold shadow-xl shadow-primary/20 hover:scale-[1.02] active:scale-95 transition-all mb-4 text-xs lg:text-sm uppercase tracking-[0.2em]">
                  Initialize Session
                </Link>
                <p className="text-center text-[10px] font-medium text-white/20 italic uppercase tracking-wider">Secure Transmission Guaranteed.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetail;
