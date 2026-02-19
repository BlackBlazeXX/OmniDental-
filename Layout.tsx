
import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Instagram, Linkedin, Twitter, Facebook, ArrowUp } from 'lucide-react';
import { MagneticButton } from './components/MagneticButton';
import { PageTransition } from './components/PageTransition';
import { ImageMarquee } from './components/ImageMarquee';

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
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${isScrolled || isMobileMenuOpen ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2 group shrink-0 relative z-50" onClick={(e) => handleNavClick(e, '/', 'hero')}>
            <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-white font-serif text-xl group-hover:bg-accent transition-all duration-300 shadow-lg shadow-primary/10">OC</div>
            <span className="text-2xl font-serif font-bold tracking-tight text-textPrimary">OralCare</span>
          </Link>

          <div className="hidden md:flex items-center gap-6 lg:gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={(e) => handleNavClick(e, link.path, link.section)}
                className={`text-xs font-black uppercase tracking-widest transition-all hover:text-accent whitespace-nowrap ${location.pathname === link.path ? 'text-primary' : 'text-textPrimary/40'}`}
              >
                {link.name}
              </Link>
            ))}
            <Link to="/contact">
              <MagneticButton className="bg-primary hover:bg-primary/90 text-white px-6 lg:px-8 py-3.5 rounded-full text-[10px] font-black tracking-[0.2em] uppercase transition-all shadow-xl shadow-primary/20 hover:-translate-y-0.5 shrink-0 block">
                Book Appointment
              </MagneticButton>
            </Link>
          </div>

          <button
            className="md:hidden text-textPrimary p-2 relative z-50 bg-white/50 backdrop-blur-sm rounded-lg"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <div className={`fixed inset-0 bg-white z-40 transition-transform duration-500 md:hidden h-screen w-screen ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="flex flex-col items-center justify-start w-full h-full gap-8 px-6 pt-32 pb-16 overflow-y-auto overflow-x-hidden">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={(e) => {
                  handleNavClick(e, link.path, link.section);
                  setIsMobileMenuOpen(false);
                }}
                className={`text-2xl font-black uppercase tracking-[0.3em] transition-all py-2 ${location.pathname === link.path ? 'text-primary' : 'text-textPrimary/40'}`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="bg-primary text-white w-full max-w-xs py-5 mt-4 rounded-full text-xs font-black tracking-[0.3em] uppercase shadow-xl shadow-primary/20 text-center"
            >
              Book Appointment
            </Link>

            {/* Social signals in menu */}
            <div className="mt-12 flex gap-8 text-textPrimary/30">
              <Instagram size={20} />
              <Linkedin size={20} />
              <Twitter size={20} />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0A100F] text-white pt-24 pb-12 overflow-hidden relative">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          <div className="col-span-1 md:col-span-2 lg:col-span-2">
            <h2 className="text-4xl lg:text-6xl font-serif mb-8 max-w-md leading-tight">Elite dental care, curated for you.</h2>
            <div className="flex flex-col gap-5 text-white/40">
              <a href="tel:+919840012345" className="flex items-center gap-3 hover:text-accent transition-colors w-fit text-lg font-bold"><span className="w-1.5 h-1.5 bg-accent rounded-full" /> +91 98400 12345</a>
              <a href="mailto:hello@oralcare.com" className="flex items-center gap-3 hover:text-accent transition-colors w-fit"><span className="w-1.5 h-1.5 bg-accent rounded-full" /> hello@oralcare.com</a>
              <p className="text-[10px] mt-4 font-black tracking-[0.3em] uppercase text-accent">Chennai • Perungudi • Velachery</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 md:col-span-2 lg:col-span-2">
            <div>
              <h4 className="font-black text-[10px] uppercase tracking-[0.3em] mb-8 text-white/30">Practice</h4>
              <ul className="space-y-4 text-white/50 text-xs font-medium">
                <li><Link to="/" className="hover:text-accent transition-colors">Home</Link></li>
                <li><Link to="/about" className="hover:text-accent transition-colors">The Clinic</Link></li>
                <li><Link to="/founder" className="hover:text-accent transition-colors">The Founder</Link></li>
                <li><Link to="/blog" className="hover:text-accent transition-colors">Clinical Journal</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-black text-[10px] uppercase tracking-[0.3em] mb-8 text-white/30">Connect</h4>
              <div className="flex flex-wrap gap-4">
                <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-accent hover:text-black transition-all" aria-label="Instagram"><Instagram size={16} /></a>
                <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-accent hover:text-black transition-all" aria-label="LinkedIn"><Linkedin size={16} /></a>
                <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-accent hover:text-black transition-all" aria-label="Twitter"><Twitter size={16} /></a>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-white/5 pt-12 flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
          <p className="text-white/20 text-[9px] uppercase tracking-[0.4em]">© 2025 OralCare Clinic. Master Dentistry.</p>
          <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="flex items-center gap-2 text-[9px] font-black uppercase tracking-widest text-white/40 hover:text-accent transition-all group">
            Back to top <ArrowUp size={12} className="group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
      <div className="absolute -bottom-16 -right-16 text-[15rem] lg:text-[25rem] font-serif font-bold text-white/[0.01] select-none pointer-events-none">OC</div>
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
