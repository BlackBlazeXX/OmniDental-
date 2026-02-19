
import React from 'react';
import { TEAM_DATA } from '../constants';
import { Linkedin, Twitter, Instagram } from 'lucide-react';

const Team: React.FC = () => {
  return (
    <div className="bg-mesh pt-20">
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mb-24">
            <h1 className="text-6xl font-serif mb-8">Our Medical <br /><span className="text-primary italic">Professionals.</span></h1>
            <p className="text-xl text-textPrimary/60">A team of dedicated experts working together to provide you with the safest and most advanced dental care available today.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
            {TEAM_DATA.map(member => (
              <div key={member.id} className="group grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                <div className="lg:col-span-5 aspect-[3/4] rounded-[2rem] overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
                  <img src={member.image} className="w-full h-full object-cover" alt={member.name} />
                </div>
                <div className="lg:col-span-7">
                  <span className="text-xs font-bold text-accent tracking-widest uppercase mb-4 block">{member.role}</span>
                  <h3 className="text-4xl font-serif mb-6">{member.name}</h3>
                  <p className="text-textPrimary/60 leading-relaxed mb-8">{member.bio}</p>
                  <div className="flex flex-wrap gap-2 mb-8">
                    {member.specialties.map((s, i) => (
                      <span key={i} className="px-4 py-2 bg-highlight/50 rounded-full text-xs font-bold text-primary">{s}</span>
                    ))}
                  </div>
                  <div className="flex gap-6 text-textPrimary/30">
                    <Linkedin className="hover:text-primary transition-colors cursor-pointer" size={20} />
                    <Twitter className="hover:text-primary transition-colors cursor-pointer" size={20} />
                    <Instagram className="hover:text-primary transition-colors cursor-pointer" size={20} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;
