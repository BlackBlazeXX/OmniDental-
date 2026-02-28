
import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Instagram, Linkedin, Twitter, Facebook, ArrowUp } from 'lucide-react';
import { MagneticButton } from './components/MagneticButton';
import { PageTransition } from './components/PageTransition';
import { ImageMarquee } from './components/ImageMarquee';
import { motion } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Handle scroll effects for the desktop navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalScroll) * 100;
      setScrollProgress(progress);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Body Scroll Lock when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      // Prevent touchmove events on the body to be extra safe on iOS
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
    } else {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
    }
    return () => {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
    };
  }, [isMobileMenuOpen]);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const handleNavClick = (e: React.MouseEvent, path: string, sectionId?: string) => {
    if (location.pathname === '/' && sectionId) {
      e.preventDefault();
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
      setIsMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { name: 'Home', path: '/', section: 'hero' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services', section: 'services-section' },
    { name: 'Meet Dr. Siva', path: '/founder' },
    { name: 'Testimonials', path: '/testimonials' },
    { name: 'Success Stories', path: '/blog', section: 'blog-section' },
  ];

  return (
    <>
      <div className="fixed top-0 left-0 w-full h-[3px] z-[60] bg-highlight/30">
        <div
          className="h-full bg-accent transition-all duration-150"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${isScrolled || isMobileMenuOpen ? 'glass border-b border-white/5 py-4' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2 group shrink-0 relative z-50" onClick={(e) => handleNavClick(e, '/', 'hero')}>
            <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-slate-950 font-serif text-xl group-hover:bg-accent transition-all duration-300 shadow-lg shadow-primary/20">OD</div>
            <span className="text-2xl font-serif font-bold tracking-tight text-white">OmniDental<span className="text-primary italic">AI</span></span>
          </Link>

          {/* Desktop nav — tubelight pill style (lg+ only) */}
          <div className="hidden lg:flex items-center gap-0.5 glass border border-white/10 py-1 px-1 rounded-full shadow-2xl">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={(e) => handleNavClick(e, link.path, link.section)}
                  className={`relative cursor-pointer text-[9px] font-black uppercase tracking-wider px-3.5 py-2 rounded-full transition-colors whitespace-nowrap ${isActive ? 'text-primary' : 'text-white/40 hover:text-primary'
                    }`}
                >
                  <span>{link.name}</span>
                  {isActive && (
                    <motion.div
                      layoutId="lamp"
                      className="absolute inset-0 w-full bg-primary/8 rounded-full -z-10"
                      initial={false}
                      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    >
                      {/* Tubelight glow from top */}
                      <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-accent rounded-t-full">
                        <div className="absolute w-12 h-6 bg-accent/30 rounded-full blur-md -top-2 -left-2" />
                        <div className="absolute w-8 h-6 bg-accent/25 rounded-full blur-md -top-1" />
                        <div className="absolute w-4 h-4 bg-accent/20 rounded-full blur-sm top-0 left-2" />
                      </div>
                    </motion.div>
                  )}
                </Link>
              );
            })}
          </div>

          <Link to="/contact">
            <MagneticButton className="hidden lg:block bg-primary hover:bg-primary/90 text-white px-5 py-3.5 rounded-full text-[9px] font-black tracking-[0.2em] uppercase transition-all shadow-xl shadow-primary/20 hover:-translate-y-0.5 shrink-0">
              Book Appointment
            </MagneticButton>
          </Link>

          <button
            className="lg:hidden text-textPrimary p-2 relative z-50 bg-white/50 backdrop-blur-sm rounded-lg"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu Overlay — Premium Dark Panel */}
        <div
          className={`lg:hidden transition-transform duration-500 ease-in-out ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            zIndex: 45,
            background: '#020617',
            overflowY: 'auto',
          }}
        >

          {/* Subtle radial glow top-right */}
          <div className="absolute top-0 right-0 w-72 h-72 rounded-full pointer-events-none"
            style={{ background: 'radial-gradient(circle, rgba(118,84,106,0.18) 0%, transparent 70%)' }} />

          <div className="flex flex-col min-h-full px-8 pt-28 pb-10">

            {/* Nav links — numbered */}
            <nav className="flex flex-col gap-0 mb-8">
              {navLinks.map((link, idx) => {
                const isActive = location.pathname === link.path;
                const shortNames: Record<string, string> = {
                  'Success Stories': 'Blog',
                  'Meet Dr. Siva': 'Dr. Siva',
                };
                const displayName = shortNames[link.name] || link.name;
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={(e) => {
                      handleNavClick(e, link.path, link.section);
                      setIsMobileMenuOpen(false);
                    }}
                    className="group flex items-center gap-5 py-4 border-b border-white/5 last:border-0"
                  >
                    <span className="text-[10px] font-black tracking-widest tabular-nums"
                      style={{ color: isActive ? '#10C9DE' : 'rgba(255,255,255,0.2)' }}>
                      0{idx + 1}
                    </span>
                    <span
                      className="text-xl font-black uppercase tracking-[0.12em] transition-colors"
                      style={{ color: isActive ? '#ffffff' : 'rgba(255,255,255,0.45)' }}
                    >
                      {displayName}
                    </span>
                    {isActive && (
                      <span className="ml-auto w-1.5 h-1.5 rounded-full shrink-0"
                        style={{ background: '#10C9DE' }} />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Book Appointment CTA */}
            <Link
              to="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full py-5 rounded-full text-xs font-black tracking-[0.25em] uppercase text-center mt-8 transition-all active:scale-95 shadow-lg shadow-primary/20"
              style={{ background: '#00D1FF', color: '#020617' }}
            >
              Book Appointment
            </Link>

            {/* Contact strip */}
            <div className="mt-6 flex flex-col gap-2">
              <a href="tel:+919999912345"
                className="text-xs font-light tracking-widest hover:text-primary transition-colors text-white/40">
                +91 99999 12345
              </a>
              <a href="mailto:hello@omnidental.ai"
                className="text-xs font-light tracking-widest hover:text-primary transition-colors text-white/40">
                hello@omnidental.ai
              </a>
            </div>

            {/* Social icons */}
            <div className="mt-6 flex gap-5" style={{ color: 'rgba(255,255,255,0.2)' }}>
              <Instagram size={16} />
              <Linkedin size={16} />
              <Twitter size={16} />
            </div>
          </div>
        </div>
      </nav>

      {/* ── WhatsApp Floating Button ── */}
      <a
        href="https://wa.me/919840012345?text=Hi%2C%20I%20would%20like%20to%20book%20a%20dental%20appointment%20at%20OmniDental AI."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-6 right-6 z-[100] flex items-center justify-center w-14 h-14 rounded-full shadow-2xl transition-transform hover:scale-110 active:scale-95 group"
        style={{ background: '#25D366' }}
      >
        {/* Pulse ring */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-40" />
        {/* WhatsApp SVG icon */}
        <svg viewBox="0 0 32 32" className="w-7 h-7 fill-white relative z-10" xmlns="http://www.w3.org/2000/svg">
          <path d="M16.002 2.667C8.638 2.667 2.667 8.638 2.667 16c0 2.354.637 4.622 1.748 6.587L2.667 29.333l6.896-1.708A13.29 13.29 0 0 0 16.002 29.333c7.364 0 13.331-5.97 13.331-13.333 0-7.362-5.967-13.333-13.331-13.333Zm0 24.267a11.032 11.032 0 0 1-5.627-1.54l-.403-.24-4.092 1.013 1.047-3.98-.263-.41a11.004 11.004 0 0 1-1.728-5.777C4.936 9.9 9.9 4.936 16.002 4.936c6.1 0 11.064 4.964 11.064 11.064 0 6.1-4.964 11.064-11.064 11.064Zm6.07-8.278c-.334-.167-1.974-.974-2.28-1.085-.307-.111-.53-.167-.754.167-.223.334-.863 1.085-1.058 1.308-.195.222-.39.25-.724.083-.334-.167-1.41-.52-2.686-1.658-.993-.887-1.663-1.982-1.857-2.316-.195-.334-.021-.515.146-.682.15-.15.334-.39.501-.585.167-.195.222-.334.334-.557.111-.222.056-.418-.028-.585-.084-.167-.754-1.818-1.033-2.489-.272-.653-.548-.565-.754-.575l-.642-.011c-.223 0-.585.083-.891.418-.307.334-1.172 1.144-1.172 2.794 0 1.65 1.2 3.245 1.367 3.468.167.222 2.362 3.607 5.722 5.057.8.345 1.424.551 1.911.705.803.255 1.534.219 2.112.133.644-.096 1.974-.807 2.252-1.587.278-.78.278-1.449.195-1.587-.083-.139-.306-.222-.64-.39Z" />
        </svg>
      </a>
    </>
  );
};

// ── Animated container for footer scroll reveal ──
type ViewAnimationProps = {
  delay?: number;
  className?: string;
  children: React.ReactNode;
};

function AnimatedContainer({ className, delay = 0.1, children }: ViewAnimationProps) {
  return (
    <motion.div
      initial={{ filter: 'blur(4px)', translateY: -10, opacity: 0 }}
      whileInView={{ filter: 'blur(0px)', translateY: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.8 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

const Footer: React.FC = () => {
  return (
    <footer className="relative w-full bg-[#020617] text-white overflow-hidden rounded-t-[2.5rem] lg:rounded-t-[4rem] border-t border-white/5 bg-[radial-gradient(35%_128px_at_50%_0%,rgba(0,209,255,0.06),transparent)] pt-20 pb-12">

      {/* Glow line at top edge */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-px w-1/3 bg-accent/40 rounded-full blur" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">

          {/* Brand col */}
          <AnimatedContainer delay={0.1} className="col-span-1 md:col-span-2 lg:col-span-2">
            <h2 className="text-4xl lg:text-6xl font-serif mb-8 max-w-md leading-tight">Elite dental care, <span className="text-primary italic">redefined.</span></h2>
            <div className="flex flex-col gap-5 text-white/40">
              <a href="tel:+919999912345" className="flex items-center gap-3 hover:text-accent transition-colors w-fit text-lg font-bold"><span className="w-1.5 h-1.5 bg-accent rounded-full" /> +91 99999 12345</a>
              <a href="mailto:hello@omnidental.ai" className="flex items-center gap-3 hover:text-accent transition-colors w-fit"><span className="w-1.5 h-1.5 bg-accent rounded-full" /> hello@omnidental.ai</a>
              <p className="text-[10px] mt-4 font-black tracking-[0.3em] uppercase text-accent">Future City • Tech Hub • Global</p>
            </div>
          </AnimatedContainer>

          {/* Links grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 md:col-span-2 lg:col-span-2">
            <AnimatedContainer delay={0.2}>
              <h4 className="font-black text-[10px] uppercase tracking-[0.3em] mb-8 text-white/30">Practice</h4>
              <ul className="space-y-4 text-white/50 text-xs font-medium">
                <li><Link to="/contact" className="hover:text-accent transition-colors">Contact</Link></li>
                <li><Link to="/privacy" className="hover:text-accent transition-colors">Privacy Policy</Link></li>
                <li><Link to="/" className="hover:text-accent transition-colors">Home</Link></li>
                <li><Link to="/about" className="hover:text-accent transition-colors">The Clinic</Link></li>
                <li><Link to="/founder" className="hover:text-accent transition-colors">The Founder</Link></li>
                <li><Link to="/testimonials" className="hover:text-accent transition-colors">Testimonials</Link></li>
                <li><Link to="/blog" className="hover:text-accent transition-colors">Clinical Journal</Link></li>
              </ul>
            </AnimatedContainer>

            <AnimatedContainer delay={0.3}>
              <h4 className="font-black text-[10px] uppercase tracking-[0.3em] mb-8 text-white/30">Connect</h4>
              <div className="flex flex-wrap gap-4">
                <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-accent hover:text-black transition-all" aria-label="Instagram"><Instagram size={16} /></a>
                <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-accent hover:text-black transition-all" aria-label="LinkedIn"><Linkedin size={16} /></a>
                <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-accent hover:text-black transition-all" aria-label="Twitter"><Twitter size={16} /></a>
              </div>
            </AnimatedContainer>
          </div>
        </div>

        <AnimatedContainer delay={0.4}>
          <div className="border-t border-white/5 pt-12 flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
            <p className="text-white/20 text-[9px] uppercase tracking-[0.4em]">© {new Date().getFullYear()} OmniDental AI. Precision Architecture.</p>
            <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="flex items-center gap-2 text-[9px] font-black uppercase tracking-widest text-white/40 hover:text-accent transition-all group">
              Back to top <ArrowUp size={12} className="group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>
        </AnimatedContainer>
      </div>

      {/* Watermark */}
      <div className="absolute -bottom-16 -right-16 text-[15rem] lg:text-[25rem] font-serif font-bold text-white/[0.02] select-none pointer-events-none tracking-tighter">OD</div>
    </footer>
  );
};

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <PageTransition>{children}</PageTransition>
      </main>
      {!location.pathname.startsWith('/blog') && <ImageMarquee />}
      <Footer />
    </div>
  );
};
