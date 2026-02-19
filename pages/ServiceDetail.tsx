
import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, CheckCircle2, ChevronRight } from 'lucide-react';
import { SERVICES_DATA } from '../constants';

const ServiceDetail: React.FC = () => {
  const { id } = useParams();
  const service = SERVICES_DATA.find(s => s.id === id);

  if (!service) return <Navigate to="/services" />;

  return (
    <div className="bg-white">
      <div className="relative h-[50vh] lg:h-[60vh] bg-primary overflow-hidden">
        <img src={service.image} className="w-full h-full object-cover opacity-60" alt={service.title} decoding="async" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/90" />
        <div className="absolute inset-0 flex items-center pt-24 lg:pt-32">
          <div className="container mx-auto px-6">
            <Link to="/services" className="inline-flex items-center gap-2 text-primary font-bold mb-6 lg:mb-8 hover:-translate-x-2 transition-transform text-sm lg:text-base">
              <ArrowLeft size={18} /> Back to services
            </Link>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-textPrimary max-w-2xl leading-tight">{service.title}</h1>
          </div>
        </div>
      </div>

      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
            <div className="lg:col-span-7">
              <div className="prose prose-lg lg:prose-xl max-w-none text-textPrimary/70 leading-relaxed mb-16">
                <p className="text-xl lg:text-2xl text-textPrimary mb-8 font-light italic leading-relaxed">"{service.shortDesc}"</p>
                <div className="font-light space-y-6">
                  {service.description.split('\n').map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mb-16 lg:mb-24">
                <div className="bg-highlight/20 p-8 lg:p-10 rounded-[2rem]">
                  <h3 className="text-xl lg:text-2xl font-serif mb-8 text-textPrimary">Key Benefits</h3>
                  <ul className="space-y-4">
                    {service.benefits.map((b, i) => (
                      <li key={i} className="flex items-center gap-3 text-textPrimary/70 text-sm lg:text-base font-light">
                        <CheckCircle2 className="text-accent shrink-0" size={20} /> {b}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-primary/5 p-8 lg:p-10 rounded-[2rem]">
                  <h3 className="text-xl lg:text-2xl font-serif mb-8 text-textPrimary">Our Process</h3>
                  <div className="space-y-6">
                    {service.process.map((step, i) => (
                      <div key={i} className="flex gap-4">
                        <span className="text-[10px] font-black text-primary opacity-30 mt-1 uppercase tracking-tighter">0{i+1}</span>
                        <p className="text-textPrimary font-medium text-sm lg:text-base">{step}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="sticky top-32 bg-white border border-black/5 p-8 lg:p-12 rounded-[2.5rem] shadow-sm">
                <h3 className="text-2xl lg:text-3xl font-serif mb-6 text-textPrimary">Ready to book?</h3>
                <p className="text-textPrimary/50 mb-10 text-sm lg:text-base font-light leading-relaxed">Select a time that works for you and we'll confirm your visit instantly.</p>
                <Link to="/contact" className="block text-center bg-primary text-white py-5 rounded-full font-bold shadow-xl shadow-primary/20 hover:scale-[1.02] active:scale-95 transition-all mb-4 text-xs lg:text-sm uppercase tracking-widest">
                  Request Appointment
                </Link>
                <p className="text-center text-[10px] font-medium text-textPrimary/30 italic uppercase tracking-wider">No credit card required for booking.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetail;
