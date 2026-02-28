
import React, { useState, useRef, useCallback, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Star, ArrowRight, Award, Shield, Sparkles, Clock, User } from 'lucide-react';
import { motion } from 'framer-motion';
import { SERVICES_DATA, FOUNDER_BIO, CLINIC_TECH, PATIENT_JOURNEY, BLOG_POSTS } from '../constants';
import { ScrollReveal } from '../components/ScrollReveal';
import { SEO } from '../components/SEO';
import { TestimonialCard } from '../components/TestimonialCard';
import { testimonials } from './Testimonials';

const BeforeAfterSection: React.FC = () => {
  const [sliderPos, setSliderPos] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const updateSlider = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const pos = Math.min(Math.max(((clientX - rect.left) / rect.width) * 100, 5), 95);
    setSliderPos(pos);
  }, []);

  const onPointerDown = (e: React.PointerEvent) => {
    isDragging.current = true;
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
    updateSlider(e.clientX);
  };
  const onPointerMove = (e: React.PointerEvent) => {
    if (isDragging.current) updateSlider(e.clientX);
  };
  const onPointerUp = () => { isDragging.current = false; };

  return (
    <section className="py-24 lg:py-32 bg-[#020617] border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

          {/* LEFT — Content Panel */}
          <div className="flex flex-col gap-8">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary inline-block" />
              <span className="text-sm font-black text-white/40 uppercase tracking-widest">Why us?</span>
            </div>
            <div className="w-full h-px bg-white/10" />
            <div>
              <h2 className="text-4xl lg:text-5xl font-serif text-white leading-tight">
                Before &amp; After Gallery
              </h2>
              <p className="text-white/40 mt-4 font-light text-base leading-relaxed max-w-sm">
                Check out our Before &amp; After Gallery, highlighting amazing smile transformations that boost confidence and dental care.
              </p>
            </div>
            <div className="flex flex-col gap-6">
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 rounded-2xl border border-white/10 bg-white/5 flex items-center justify-center shrink-0 text-2xl shadow-sm">🩺</div>
                <div>
                  <h4 className="font-bold text-white text-lg mb-1">Free Consultation</h4>
                  <p className="text-white/40 text-sm leading-relaxed font-light">
                    At OmniDental AI, we've got your back! Our awesome team uses the latest techniques to get to know what you want and need.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 rounded-2xl border border-white/10 bg-white/5 flex items-center justify-center shrink-0 text-2xl shadow-sm">😊</div>
                <div>
                  <h4 className="font-bold text-white text-lg mb-1">Smiles Made Simple!</h4>
                  <p className="text-white/40 text-sm leading-relaxed font-light">
                    Anxious about your dentist visit? Relax! Our friendly dentists make every appointment stress-free.
                  </p>
                </div>
              </div>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center bg-primary text-slate-950 font-bold px-8 py-4 rounded-full text-[10px] uppercase tracking-widest hover:bg-primary/80 transition-all w-fit shadow-xl shadow-primary/20 hover:-translate-y-0.5"
            >
              Initialize Session
            </Link>
          </div>

          {/* RIGHT — Before/After Slider */}
          <div
            ref={containerRef}
            className="relative w-full aspect-[4/3] rounded-[2rem] overflow-hidden shadow-2xl cursor-ew-resize select-none"
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={onPointerUp}
          >
            <img src="/images/hero/afterimage.png" alt="After treatment" className="absolute inset-0 w-full h-full object-cover pointer-events-none" draggable={false} />
            <img src="/images/hero/beforeimage.png" alt="Before treatment" className="absolute inset-0 w-full h-full object-cover pointer-events-none" style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }} draggable={false} />
            <div className="absolute top-0 bottom-0 w-[3px] bg-white shadow-[0_0_20px_rgba(0,0,0,0.4)] pointer-events-none z-10" style={{ left: `${sliderPos}%`, transform: 'translateX(-50%)' }}>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-xl flex items-center justify-center z-20">
                <div className="flex gap-1">
                  <div className="w-0 h-0 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent border-r-[8px] border-r-primary" />
                  <div className="w-0 h-0 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent border-l-[8px] border-l-primary" />
                </div>
              </div>
            </div>
            <div className="absolute top-5 left-5 bg-black/60 backdrop-blur-sm text-white text-[10px] font-black uppercase tracking-widest px-4 py-2 rounded-full pointer-events-none">Before</div>
            <div className="absolute top-5 right-5 bg-primary/90 backdrop-blur-sm text-white text-[10px] font-black uppercase tracking-widest px-4 py-2 rounded-full pointer-events-none">After</div>
          </div>

        </div>
      </div>
    </section>
  );
};

const Home: React.FC = () => {
  useEffect(() => {
    // GSAP Reveal Animations
    const gsap = (window as any).gsap;
    const ScrollTrigger = (window as any).ScrollTrigger;

    if (gsap && ScrollTrigger) {
      gsap.registerPlugin(ScrollTrigger);

      // Hero Timeline
      const tl = gsap.timeline({ defaults: { ease: 'power4.out', duration: 1.2 } });
      tl.fromTo('.hero-title', { y: 60, opacity: 0 }, { y: 0, opacity: 1, delay: 0.3 })
        .fromTo('.hero-desc', { y: 30, opacity: 0 }, { y: 0, opacity: 1 }, '-=0.9')
        .fromTo('.hero-cta', { y: 20, opacity: 0 }, { y: 0, opacity: 1, stagger: 0.15 }, '-=0.9')
        .fromTo('.hero-trust', { opacity: 0 }, { opacity: 1 }, '-=0.7');

      // Services Stagger
      gsap.from('.service-card', {
        scrollTrigger: {
          trigger: '#services-section',
          start: 'top 80%',
        },
        y: 60,
        opacity: 0,
        stagger: 0.15,
        duration: 1,
        ease: 'power3.out'
      });
    }
  }, []);

  return (
    <div className="bg-[#020617] overflow-hidden">
      <SEO
        title="OmniDental AI Dental Clinic Chennai | World-Class Cosmetic Dentistry"
        description="Experience 15+ years of cosmetic dentistry excellence in Chennai. Dental implants, smile design, whitening & general dentistry by Dr. Olivia Martinez. Book your appointment today."
      />
      {/* Hero Section */}
      <section id="hero" className="relative min-h-[95vh] flex items-center pt-32 pb-16 lg:pt-24 overflow-hidden">
        <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-7 z-10 text-center lg:text-left">
            <h1 className="hero-title text-5xl md:text-7xl lg:text-[90px] font-serif leading-[1.1] lg:leading-[0.95] mb-8 lg:mb-12 text-white drop-shadow-2xl">
              The Future of <br className="hidden md:block" /><span className="text-primary italic">Structural</span> Dentistry.
            </h1>
            <p className="hero-desc text-xl lg:text-2xl text-white/80 max-w-xl mx-auto lg:mx-0 mb-10 lg:mb-14 leading-relaxed font-light">
              AI-Guided Precision. Robotic Surgical Systems. Curating the next generation of dental architecture.
            </p>
            <div className="hero-cta flex flex-col sm:flex-row justify-center lg:justify-start gap-4 lg:gap-6 mb-8">
              <Link to="/contact" className="bg-primary text-slate-950 px-10 lg:px-12 py-5 lg:py-6 rounded-full font-black text-[10px] uppercase tracking-[0.2em] shadow-2xl shadow-primary/40 hover:-translate-y-1 transition-all duration-300">
                Start Architecture
              </Link>
              <Link to="/services" className="border border-white/20 bg-white/5 backdrop-blur-sm px-10 lg:px-12 py-5 lg:py-6 rounded-full font-black text-[10px] uppercase tracking-[0.2em] hover:bg-white/10 transition-all flex items-center justify-center gap-3 text-white">
                Tech Stack <ChevronRight size={18} className="text-primary" />
              </Link>
            </div>

            {/* Trust Bar */}
            <div className="hero-trust flex flex-col lg:flex-row items-center gap-4">
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((_, i) => (
                  <Star key={i} size={16} className="text-primary fill-primary" />
                ))}
              </div>
              <p className="text-sm font-bold text-white/80">
                <span className="font-bold text-white">Neural Accuracy</span> Rated 99.9%
              </p>
              <span className="hidden lg:block w-1 h-1 bg-white/30 rounded-full" />
              <p className="text-[10px] uppercase tracking-widest text-white/40 font-black">Powered by advanced AI</p>
            </div>
          </div>

          <div className="lg:col-span-5 relative mt-8 lg:mt-0">
            <ScrollReveal width="100%">
              <div className="relative rounded-[3rem] lg:rounded-[5rem] overflow-hidden shadow-[0_30px_60px_-10px_rgba(118,84,106,0.3)] lg:shadow-[0_60px_120px_-20px_rgba(118,84,106,0.3)] animate-soft-zoom group">
                <img
                  src="/images/hero/image-043.png"
                  alt="Bespoke Dental Care"
                  className="w-full aspect-[4/5] object-cover transition-transform duration-[3s] group-hover:scale-105"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent" />
              </div>
            </ScrollReveal>
            {/* Meet Dr. Siva Card */}
            <div className="absolute -bottom-8 -left-4 lg:-bottom-12 lg:-left-12 glass p-4 lg:p-6 rounded-[2rem] lg:rounded-[3rem] shadow-2xl z-20 hidden md:block border-white/40 max-w-xs">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-2xl overflow-hidden shadow-lg shadow-primary/20 border-2 border-white">
                  <img src={FOUNDER_BIO.image} alt="Dr. Olivia Martinez" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="font-bold text-sm lg:text-base text-primary tracking-tight mb-1">{FOUNDER_BIO.name}</h4>
                  <p className="text-[9px] font-black text-white/30 uppercase tracking-[0.2em]">{FOUNDER_BIO.credentials}</p>
                  <p className="text-[9px] text-white/50 mt-1">Chief Architect</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services-section" className="py-24 lg:py-32 bg-[#020617] border-t border-white/5">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mb-16 lg:mb-24">
            <p className="text-primary font-black tracking-[0.4em] uppercase text-[10px] mb-6 lg:mb-8">Our Services</p>
            <h2 className="text-4xl lg:text-7xl font-serif text-white mb-8">Complete Smile <br className="hidden md:block" /><span className="italic">Care.</span></h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 lg:gap-16">
            {SERVICES_DATA.map((service, i) => (
              <Link to={`/services/${service.id}`} key={service.id} className="group glass p-8 lg:p-12 rounded-[2.5rem] lg:rounded-[3rem] border border-white/5 hover:border-primary/30 transition-all shadow-2xl">
                <ScrollReveal width="100%" delay={0.1 * i}>
                  <div className="aspect-[21/9] rounded-2xl overflow-hidden mb-8 grayscale group-hover:grayscale-0 transition-all duration-700">
                    <img src={service.image} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt={service.title} />
                  </div>
                </ScrollReveal>
                <h4 className="text-xl lg:text-2xl font-serif mb-4 text-white group-hover:text-primary transition-colors">{service.title}</h4>
                <p className="text-sm text-white/40 leading-relaxed font-light mb-8">{service.shortDesc}</p>
                <div className="flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-widest group-hover:gap-4 transition-all">
                  Access Data <ArrowRight size={16} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Insights (Blog Section) */}
      <section id="blog-section" className="py-24 lg:py-32 bg-slate-950">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-xl">
              <p className="text-primary font-black tracking-[0.4em] uppercase text-[10px] mb-6">Structural Journal</p>
              <h2 className="text-4xl lg:text-6xl font-serif text-white">Latest <span className="italic text-primary">Insights.</span></h2>
            </div>
            <Link to="/blog" className="text-xs font-black uppercase tracking-[0.2em] text-primary hover:text-white transition-colors border-b-2 border-primary/10 pb-2">
              All Research
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
            {BLOG_POSTS.slice(0, 3).map((post, i) => (
              <Link key={post.id} to={`/blog/${post.id}`} className="group flex flex-col">
                <div className="relative aspect-[16/9] rounded-[2rem] overflow-hidden mb-6 shadow-2xl border border-white/5">
                  <img
                    src={post.image}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105 group-hover:blur-[3px] group-hover:brightness-50 grayscale hover:grayscale-0"
                    alt={post.title}
                  />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <span className="text-lg font-black uppercase tracking-[0.3em] text-white">View Case</span>
                  </div>
                </div>
                <div className="flex items-center gap-3 mb-3 text-[10px] font-black uppercase tracking-widest text-white/30">
                  <span className="flex items-center gap-1.5"><Clock size={12} /> {post.date}</span>
                </div>
                <h3 className="text-xl lg:text-2xl font-serif mb-3 group-hover:text-primary transition-colors text-white leading-tight">
                  {post.title}
                </h3>
                <p className="text-sm text-white/40 leading-relaxed font-light line-clamp-2">
                  {post.excerpt}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Before & After Smile Gallery */}
      <BeforeAfterSection />

      {/* Founder Spotlight */}
      <section id="founder-section" className="py-24 lg:py-32 bg-primary/5 border-y border-white/5">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div className="relative max-w-lg mx-auto lg:max-w-none">
              <div className="aspect-[4/5] rounded-[3rem] lg:rounded-[4rem] overflow-hidden shadow-2xl border border-white/10">
                <img
                  src={FOUNDER_BIO.image}
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-[2s]"
                  alt="Founder"
                  loading="lazy"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 lg:-bottom-10 lg:-right-10 glass p-6 lg:p-10 rounded-[2rem] lg:rounded-[3rem] shadow-xl border-white/10">
                <p className="font-serif font-black uppercase tracking-tighter text-3xl lg:text-5xl text-primary">Xavier Thorne</p>
                <p className="text-[9px] font-black uppercase tracking-[0.4em] text-white/30 mt-3 lg:mt-4">Certified Precision Architect</p>
              </div>
            </div>
            <div className="text-center lg:text-left">
              <span className="text-primary font-black tracking-[0.4em] uppercase text-[10px] mb-6 block">Structural Manifesto</span>
              <h2 className="text-4xl lg:text-6xl font-serif mb-8 lg:mb-10 leading-tight text-white">Precision is not <br className="hidden lg:block" /><span className="italic text-primary">Optional.</span></h2>
              <p className="text-xl lg:text-2xl font-serif text-white/60 italic leading-relaxed mb-10 lg:mb-12">
                "{FOUNDER_BIO.philosophy}"
              </p>
              <Link to="/founder" className="inline-flex items-center gap-4 text-xs font-bold uppercase tracking-[0.3em] text-primary border-b border-white/10 pb-2 hover:border-primary transition-all group">
                Handoff Specs <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Testimonials Marquee Teaser ── */}
      <section className="py-24 lg:py-32 overflow-hidden">
        <div className="container mx-auto px-6 mb-12 text-center">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-[10px] font-black text-accent tracking-[0.45em] uppercase mb-4 block"
          >
            Patient Stories
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl lg:text-5xl font-serif mb-4 leading-tight text-white"
          >
            Trusted by <span className="italic text-primary">Hundreds</span> of Smiles
          </motion.h2>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex items-center justify-center gap-2"
          >
            {[1, 2, 3, 4, 5].map(i => <Star key={i} size={14} className="fill-primary text-primary" />)}
            <span className="text-xs font-bold text-white ml-1">4.9</span>
            <span className="text-xs text-white/40">· 200+ Google Reviews</span>
          </motion.div>
        </div>

        {/* Marquee strip */}
        <div className="relative overflow-hidden group">
          <div className="flex gap-4" style={{ width: 'max-content' }}>
            <div className="flex gap-4 animate-marquee shrink-0">
              {[...Array(3)].map((_, si) =>
                testimonials.map((t, i) => (
                  <TestimonialCard
                    key={`${si}-${i}`}
                    author={{ name: t.name, handle: t.treatment, avatar: t.image }}
                    text={`"${t.quote}"`}
                  />
                ))
              )}
            </div>
          </div>
          {/* Fade edges */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#020617] to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#020617] to-transparent" />
        </div>

        <div className="text-center mt-12">
          <Link
            to="/testimonials"
            className="inline-flex items-center gap-3 text-xs font-black uppercase tracking-[0.25em] text-primary border-b border-primary/20 pb-2 hover:border-primary transition-all group"
          >
            Read All Stories <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

      {/* Concierge CTA Section */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-6">
          <div className="bg-[#020617] rounded-[3rem] lg:rounded-[5rem] p-10 md:p-16 lg:p-32 text-center relative overflow-hidden group shadow-2xl border border-white/5">
            <div className="relative z-10 max-w-4xl mx-auto">
              <Sparkles className="text-primary mx-auto mb-8 lg:mb-10 opacity-80" size={40} />
              <h2 className="text-4xl lg:text-8xl font-serif text-white mb-8 lg:mb-12 leading-[1.1] lg:leading-[0.9]">Upgrade Your <br className="lg:hidden" /><span className="text-primary italic">Biological Specs.</span></h2>
              <p className="text-white/40 text-lg lg:text-xl mb-12 lg:mb-16 font-light tracking-wide">Enter the future of dental care. We are not just surgeons; we are architects.</p>
              <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 lg:gap-8">
                <Link to="/contact" className="bg-primary text-slate-950 px-10 lg:px-14 py-5 lg:py-7 rounded-full font-bold text-[11px] uppercase tracking-[0.3em] hover:scale-105 transition-all shadow-xl shadow-primary/20">
                  Book Neural Scan
                </Link>
                <a href="tel:+919999912345" className="px-10 lg:px-14 py-5 lg:py-7 rounded-full border border-white/10 text-white font-bold text-[11px] uppercase tracking-[0.3em] hover:bg-white/5 transition-colors">
                  Speak to an Expert
                </a>
              </div>
            </div>
            <div className="absolute top-0 right-0 w-[300px] lg:w-[500px] h-[300px] lg:h-[500px] bg-primary/5 rounded-full blur-[100px] lg:blur-[150px] -translate-y-1/2 translate-x-1/2" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
