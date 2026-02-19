
import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Search } from 'lucide-react';

const NotFound: React.FC = () => {
  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-mesh">
      <div className="text-center px-6">
        <h1 className="text-[12rem] font-serif font-bold text-primary/10 leading-none mb-8 select-none">404</h1>
        <div className="relative -mt-32">
          <h2 className="text-4xl font-serif mb-6">Something went missing...</h2>
          <p className="text-textPrimary/40 max-w-sm mx-auto mb-12">The page you are looking for has been moved or doesn't exist. Let's get you back on track.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/" className="bg-primary text-white px-8 py-4 rounded-full font-bold flex items-center gap-2 hover:scale-105 transition-all">
              <Home size={18} /> Go Home
            </Link>
            <Link to="/services" className="bg-highlight text-primary px-8 py-4 rounded-full font-bold flex items-center gap-2 hover:scale-105 transition-all">
              <Search size={18} /> Our Services
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
