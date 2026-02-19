import React, { useState } from 'react';
import { X, ZoomIn } from 'lucide-react';
import { SERVICES_DATA } from '../constants';
import { SEO } from '../components/SEO';
import ScrollExpandMedia from '../components/ScrollExpandMedia';

const aboutImages = [
  { src: '/images/about/aboutsection1.png', alt: 'Our Clinic', label: 'State-of-the-Art Clinic', span: 'sm:col-span-2 sm:row-span-2' },
  { src: '/images/about/aboutsection2.png', alt: 'Treatment', label: 'Expert Care', span: '' },
  { src: '/images/about/aboutsection3.png', alt: 'Patient Smile', label: 'Happy Patients', span: '' },
  { src: '/images/about/aboutsection4.png', alt: 'Our Team', label: 'Our Team', span: 'sm:col-span-2' },
];

const About: React.FC = () => {
  const [lightbox, setLightbox] = useState<string | null>(null);

  return (
    <div className="bg-mesh pt-32 pb-16 lg:pt-20">
      <SEO
        title="About Us | OralCare Dental Clinic Chennai"
        description="Learn about OralCare dental clinic in Chennai — our mission, our team, and our commitment to providing world-class dental care with a personal touch."
      />
      {/* Lightbox Modal */}
      {lightbox && (
        <div
          className="fixed inset-0 z-[999] bg-black/90 flex items-center justify-center p-4 lg:p-12 backdrop-blur-sm"
          onClick={() => setLightbox(null)}
          style={{ animation: 'fadeIn 0.25s ease' }}
        >
          <button
            className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors bg-white/10 rounded-full p-3 hover:bg-white/20"
            onClick={() => setLightbox(null)}
          >
            <X size={24} />
          </button>
          <img
            src={lightbox}
            alt="Full view"
            className="max-w-full max-h-[90vh] rounded-[2rem] object-contain shadow-2xl"
            onClick={e => e.stopPropagation()}
            style={{ animation: 'zoomIn 0.3s ease' }}
          />
        </div>
      )}

      <style>{`
        @keyframes fadeIn { from { opacity: 0 } to { opacity: 1 } }
        @keyframes zoomIn { from { transform: scale(0.92); opacity: 0 } to { transform: scale(1); opacity: 1 } }
      `}</style>

      <section className="py-12 lg:py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-16 lg:mb-24">
            <h1 className="text-4xl lg:text-6xl font-serif mb-6 lg:mb-8 text-textPrimary">About Us</h1>
            <p className="text-xl lg:text-2xl text-textPrimary/60 leading-relaxed font-light">
              We are committed to improving oral health with trusted dental services, modern technology, and a caring team.
            </p>
          </div>

          {/* Image Grid with Hover Animations */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 auto-rows-[220px] lg:auto-rows-[280px] gap-4 mb-20 lg:mb-32">
            {aboutImages.map((img, i) => (
              <div
                key={i}
                className={`group relative rounded-[2rem] overflow-hidden cursor-pointer shadow-md hover:shadow-2xl transition-shadow duration-500 ${img.span}`}
                onClick={() => setLightbox(img.src)}
              >
                {/* Image with zoom on hover */}
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  loading="lazy"
                  decoding="async"
                />

                {/* Dark overlay — fades in on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Label — slides up on hover */}
                <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out">
                  <p className="text-white font-bold text-sm uppercase tracking-widest">{img.label}</p>
                </div>

                {/* Zoom icon — appears on hover */}
                <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 scale-75 group-hover:scale-100 transition-all duration-300">
                  <ZoomIn size={18} className="text-white" />
                </div>

                {/* Subtle border glow on hover */}
                <div className="absolute inset-0 rounded-[2rem] ring-0 group-hover:ring-2 group-hover:ring-white/30 transition-all duration-500 pointer-events-none" />
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div className="text-center lg:text-left">
              <h2 className="text-3xl lg:text-4xl font-serif mb-6 lg:mb-8 text-textPrimary">At OralCare we think everyone should have a radiant smile.</h2>
              <div className="space-y-6 text-textPrimary/70 text-lg leading-relaxed font-light">
                <p>Our expert team provides tailored care in a cozy environment, utilizing cutting-edge technology to achieve the best outcomes.</p>
                <p>We believe in transparency and patient education. Every procedure is explained in detail, and every choice is yours to make. Our goal is to create a chill dental vibe where everyone feels comfortable.</p>
              </div>
            </div>
            <div className="bg-white p-8 lg:p-12 rounded-[2.5rem] lg:rounded-[3rem] shadow-sm border border-black/5">
              <div className="flex flex-col sm:flex-row gap-6 items-center mb-8 text-center sm:text-left">
                <div className="flex -space-x-4">
                  {[1, 2, 3].map(i => (
                    <div key={i} className="w-12 h-12 rounded-full border-2 border-white bg-primary/10 flex items-center justify-center text-primary font-bold text-sm overflow-hidden">
                      <img src={`/images/about/aboutsection${i}.png`} className="w-full h-full object-cover" alt="Patient" />
                    </div>
                  ))}
                  <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center text-xs font-bold border-2 border-white">+80</div>
                </div>
                <p className="text-sm font-bold text-textPrimary">Loved by many clients, rated 4.9</p>
              </div>
              <blockquote className="text-xl lg:text-2xl font-serif italic mb-6 text-textPrimary">
                "With years of experience and caring service, we focus on delivering quality dental care that prioritizes your comfort."
              </blockquote>
              <p className="text-primary font-bold tracking-widest uppercase text-xs">Team OralCare</p>
            </div>
          </div>
        </div>
      </section>

      {/* Scroll Expand Video Section */}
      <ScrollExpandMedia
        mediaType="video"
        mediaSrc="/images/about/ClinicVedio.mp4"
        bgImageSrc="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=1920&auto=format&fit=crop"
        title="Our Clinic"
        date="Est. 2009 · Chennai"
        scrollToExpand="Scroll to explore"
        textBlend
      >
        {/* Content shown after video fully expands */}
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-[10px] font-black text-accent tracking-[0.4em] uppercase mb-4 block">World-Class Facility</span>
          <h2 className="text-3xl lg:text-5xl font-serif mb-8 text-textPrimary leading-tight">
            A Space Designed for <span className="italic text-primary">Your Comfort</span>
          </h2>
          <p className="text-lg lg:text-xl text-textPrimary/60 leading-relaxed font-light mb-6">
            Our clinic combines state-of-the-art dental technology with a warm, welcoming environment — because great dental care starts with feeling at ease.
          </p>
          <p className="text-lg lg:text-xl text-textPrimary/60 leading-relaxed font-light">
            Every treatment room is equipped with the latest tools, and every detail is designed with your experience in mind.
          </p>
        </div>
      </ScrollExpandMedia>

    </div>
  );
};

export default About;
