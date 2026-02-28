
import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Search } from 'lucide-react';

const NotFound: React.FC = () => {
  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-[#020617] selection:bg-primary/20">
      <div className="text-center px-6">
        <h1 className="text-[12rem] font-serif font-bold text-primary/10 leading-none mb-8 select-none">404</h1>
        <div className="relative -mt-32">
          <h2 className="text-4xl font-serif mb-6 text-white">Transmission Interrupted...</h2>
          <p className="text-white/40 max-w-sm mx-auto mb-12 font-light">The data packet you are requesting has been purged or moved. Let's redirect you to the main hub.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/" className="bg-primary text-slate-950 px-8 py-4 rounded-full font-bold flex items-center gap-2 hover:scale-105 transition-all text-xs uppercase tracking-widest shadow-xl shadow-primary/20">
              <Home size={18} /> Main Hub
            </Link>
            <Link to="/services" className="bg-white/5 border border-white/10 text-white px-8 py-4 rounded-full font-bold flex items-center gap-2 hover:scale-105 transition-all text-xs uppercase tracking-widest">
              <Search size={18} /> Clinical Tech
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
