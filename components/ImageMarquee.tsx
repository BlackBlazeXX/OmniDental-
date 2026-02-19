
import React from 'react';

const ALL_IMAGES = [
    'image-022.png', 'image-023.jpg', 'image-025.jpg', 'image-026.jpg', 'image-027.jpg',
    'image-028.png', 'image-029.jpg', 'image-030.jpg', 'image-032.jpg', 'image-036.jpg',
    'image-037.jpg', 'image-040.png', 'image-041.png', 'image-042.png', 'image-044.png',
    'image-046.jpg', 'image-047.png', 'image-048.jpg', 'image-049.jpg', 'image-050.png',
    'image-051.png', 'image-053.png', 'image-054.png', 'image-055.png', 'image-057.jpg',
    'image-061.png', 'image-074.jpg', 'image-075.jpg', 'image-076.jpg', 'image-077.jpg',
    'image-078.jpg', 'image-079.png', 'image-081.png',
];

// Split into two rows
const ROW1 = ALL_IMAGES.slice(0, 17);
const ROW2 = ALL_IMAGES.slice(17);

// Random-ish rotations and sizes for organic feel (deterministic by index)
const TRANSFORMS = [
    'rotate(-8deg) scale(0.85)',
    'rotate(5deg) scale(1.05)',
    'rotate(-3deg) scale(0.9)',
    'rotate(10deg) scale(0.8)',
    'rotate(-6deg) scale(1.0)',
    'rotate(4deg) scale(0.95)',
    'rotate(-12deg) scale(0.85)',
    'rotate(7deg) scale(1.1)',
    'rotate(-2deg) scale(0.9)',
    'rotate(9deg) scale(0.8)',
    'rotate(-5deg) scale(1.0)',
    'rotate(3deg) scale(0.95)',
    'rotate(-9deg) scale(0.85)',
    'rotate(6deg) scale(1.05)',
    'rotate(-4deg) scale(0.9)',
    'rotate(11deg) scale(0.8)',
    'rotate(-7deg) scale(1.0)',
];

const MarqueeRow: React.FC<{
    images: string[];
    direction: 'left' | 'right';
    speed: number;
}> = ({ images, direction, speed }) => {
    const doubled = [...images, ...images, ...images];
    const animName = direction === 'left' ? 'marqueeLeft' : 'marqueeRight';

    return (
        <div className="overflow-hidden w-full">
            <style>{`
        @keyframes marqueeLeft {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
        @keyframes marqueeRight {
          0%   { transform: translateX(-33.333%); }
          100% { transform: translateX(0); }
        }
      `}</style>
            <div
                style={{
                    display: 'flex',
                    gap: '16px',
                    width: 'max-content',
                    animation: `${animName} ${speed}s linear infinite`,
                    alignItems: 'center',
                }}
            >
                {doubled.map((img, i) => (
                    <div
                        key={i}
                        className="shrink-0 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl"
                        style={{
                            width: i % 3 === 0 ? '110px' : i % 3 === 1 ? '90px' : '100px',
                            height: i % 3 === 0 ? '110px' : i % 3 === 1 ? '90px' : '100px',
                            transform: TRANSFORMS[i % TRANSFORMS.length],
                            transition: 'transform 0.4s ease, box-shadow 0.4s ease',
                        }}
                        onMouseEnter={e => {
                            (e.currentTarget as HTMLDivElement).style.transform = 'rotate(0deg) scale(1.15)';
                            (e.currentTarget as HTMLDivElement).style.zIndex = '10';
                        }}
                        onMouseLeave={e => {
                            (e.currentTarget as HTMLDivElement).style.transform = TRANSFORMS[i % TRANSFORMS.length];
                            (e.currentTarget as HTMLDivElement).style.zIndex = '1';
                        }}
                    >
                        <img
                            src={`/images/moving_images/${img}`}
                            alt={`Smile ${i + 1}`}
                            className="w-full h-full object-cover"
                            loading="lazy"
                            decoding="async"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export const ImageMarquee: React.FC = () => {
    return (
        <section className="relative py-0 bg-white overflow-hidden">
            <style>{`
        .marquee-section { position: relative; }
        .marquee-section::before,
        .marquee-section::after {
          content: '';
          position: absolute;
          top: 0; bottom: 0;
          width: 180px;
          z-index: 20;
          pointer-events: none;
        }
        .marquee-section::before { left: 0; background: linear-gradient(to right, white 60%, transparent); }
        .marquee-section::after  { right: 0; background: linear-gradient(to left, white 60%, transparent); }
      `}</style>

            {/* Top row — scrolls left */}
            <div className="marquee-section pt-12 pb-4">
                <MarqueeRow images={ROW1} direction="left" speed={40} />
            </div>

            {/* Center heading */}
            <div className="text-center py-10 px-6 relative z-10">
                <p className="text-[9px] font-black uppercase tracking-[0.4em] text-textPrimary/30 mb-3">Our Happy Patients</p>
                <h2 className="text-2xl lg:text-4xl font-serif text-textPrimary leading-snug">
                    Discover the Beautiful Smiles<br />
                    <span className="italic">We've Created Over the Years</span>
                </h2>
            </div>

            {/* Bottom row — scrolls right */}
            <div className="marquee-section pt-4 pb-12">
                <MarqueeRow images={ROW2} direction="right" speed={35} />
            </div>
        </section>
    );
};
