
import React, { useEffect } from 'react';

interface SEOProps {
    title: string;
    description: string;
}

export const SEO: React.FC<SEOProps> = ({ title, description }) => {
    useEffect(() => {
        document.title = title;

        const setMeta = (attr: string, key: string, value: string) => {
            let el = document.querySelector(`meta[${attr}="${key}"]`);
            if (!el) {
                el = document.createElement('meta');
                el.setAttribute(attr, key);
                document.head.appendChild(el);
            }
            el.setAttribute('content', value);
        };

        setMeta('name', 'description', description);
        setMeta('property', 'og:title', title);
        setMeta('property', 'og:description', description);
        setMeta('name', 'twitter:title', title);
        setMeta('name', 'twitter:description', description);
    }, [title, description]);

    return null;
};
