
import React from 'react';
import { useLocation } from 'react-router-dom';

export const PageTransition: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const location = useLocation();

    return (
        <>
            <style>{`
        @keyframes pageEnter {
          0%   { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0px); }
        }
        .page-enter {
          animation: pageEnter 0.45s cubic-bezier(0.22, 1, 0.36, 1) both;
        }
      `}</style>
            <div key={location.pathname} className="page-enter">
                {children}
            </div>
        </>
    );
};
