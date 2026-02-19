import React from 'react';

export interface TestimonialAuthor {
    name: string;
    handle: string;
    avatar: string;
}

export interface TestimonialCardProps {
    author: TestimonialAuthor;
    text: string;
    href?: string;
    className?: string;
}

export function TestimonialCard({ author, text, href, className = '' }: TestimonialCardProps) {
    const content = (
        <div
            className={`flex flex-col rounded-xl border border-black/8 bg-gradient-to-b from-black/[0.04] to-black/[0.01] p-4 sm:p-6 hover:from-black/[0.07] hover:to-black/[0.03] transition-colors duration-300 max-w-[320px] ${className}`}
        >
            <div className="flex items-center gap-3">
                <img
                    src={author.avatar}
                    alt={author.name}
                    className="h-12 w-12 rounded-full object-cover shrink-0"
                    loading="lazy"
                />
                <div className="flex flex-col items-start">
                    <h3 className="text-sm font-semibold leading-none text-textPrimary">{author.name}</h3>
                    <p className="text-xs text-textPrimary/50 mt-0.5">{author.handle}</p>
                </div>
            </div>
            <p className="mt-4 text-sm text-textPrimary/60 leading-relaxed font-light">{text}</p>
        </div>
    );

    if (href) {
        return <a href={href} target="_blank" rel="noopener noreferrer">{content}</a>;
    }
    return <>{content}</>;
}
