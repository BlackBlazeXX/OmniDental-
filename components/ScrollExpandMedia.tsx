import {
    useEffect,
    useRef,
    useState,
    ReactNode,
} from 'react';
import { motion } from 'framer-motion';

interface ScrollExpandMediaProps {
    mediaType?: 'video' | 'image';
    mediaSrc: string;
    posterSrc?: string;
    bgImageSrc: string;
    title?: string;
    date?: string;
    scrollToExpand?: string;
    textBlend?: boolean;
    children?: ReactNode;
}

const ScrollExpandMedia = ({
    mediaSrc,
    posterSrc,
    bgImageSrc,
    title,
    date,
    scrollToExpand,
    textBlend,
    children,
}: ScrollExpandMediaProps) => {
    const [scrollProgress, setScrollProgress] = useState<number>(0);
    const [showContent, setShowContent] = useState<boolean>(false);
    const [mediaFullyExpanded, setMediaFullyExpanded] = useState<boolean>(false);
    const [touchStartY, setTouchStartY] = useState<number>(0);
    const [isMobileState, setIsMobileState] = useState<boolean>(false);

    const sectionRef = useRef<HTMLDivElement | null>(null);

    // Scroll event listeners
    useEffect(() => {
        const handleWheel = (e: WheelEvent) => {
            if (mediaFullyExpanded && e.deltaY < 0 && window.scrollY <= 5) {
                setMediaFullyExpanded(false);
                e.preventDefault();
            } else if (!mediaFullyExpanded) {
                e.preventDefault();
                const newProgress = Math.min(Math.max(scrollProgress + e.deltaY * 0.0009, 0), 1);
                setScrollProgress(newProgress);
                if (newProgress >= 1) { setMediaFullyExpanded(true); setShowContent(true); }
                else if (newProgress < 0.75) { setShowContent(false); }
            }
        };

        const handleTouchStart = (e: TouchEvent) => setTouchStartY(e.touches[0].clientY);

        const handleTouchMove = (e: TouchEvent) => {
            if (!touchStartY) return;
            const touchY = e.touches[0].clientY;
            const deltaY = touchStartY - touchY;

            if (mediaFullyExpanded && deltaY < -20 && window.scrollY <= 5) {
                setMediaFullyExpanded(false);
                e.preventDefault();
            } else if (!mediaFullyExpanded) {
                e.preventDefault();
                const newProgress = Math.min(Math.max(scrollProgress + deltaY * (deltaY < 0 ? 0.008 : 0.005), 0), 1);
                setScrollProgress(newProgress);
                if (newProgress >= 1) { setMediaFullyExpanded(true); setShowContent(true); }
                else if (newProgress < 0.75) { setShowContent(false); }
                setTouchStartY(touchY);
            }
        };

        const handleTouchEnd = () => setTouchStartY(0);
        const handleScroll = () => { if (!mediaFullyExpanded) window.scrollTo(0, 0); };

        window.addEventListener('wheel', handleWheel, { passive: false });
        window.addEventListener('scroll', handleScroll);
        window.addEventListener('touchstart', handleTouchStart, { passive: false });
        window.addEventListener('touchmove', handleTouchMove, { passive: false });
        window.addEventListener('touchend', handleTouchEnd);

        return () => {
            window.removeEventListener('wheel', handleWheel);
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('touchstart', handleTouchStart);
            window.removeEventListener('touchmove', handleTouchMove);
            window.removeEventListener('touchend', handleTouchEnd);
        };
    }, [scrollProgress, mediaFullyExpanded, touchStartY]);

    // Mobile detection
    useEffect(() => {
        const check = () => setIsMobileState(window.innerWidth < 768);
        check();
        window.addEventListener('resize', check);
        return () => window.removeEventListener('resize', check);
    }, []);

    const mediaWidth = 300 + scrollProgress * (isMobileState ? 650 : 1250);
    const mediaHeight = 400 + scrollProgress * (isMobileState ? 200 : 400);
    const textTranslateX = scrollProgress * (isMobileState ? 180 : 150);
    const firstWord = title ? title.split(' ')[0] : '';
    const restOfTitle = title ? title.split(' ').slice(1).join(' ') : '';

    return (
        <div ref={sectionRef} className="transition-colors duration-700 ease-in-out overflow-x-hidden">
            <section className="relative flex flex-col items-center justify-start min-h-[100dvh]">
                <div className="relative w-full flex flex-col items-center min-h-[100dvh]">

                    {/* Fading background */}
                    <motion.div
                        className="absolute inset-0 z-0 h-full"
                        animate={{ opacity: 1 - scrollProgress }}
                        transition={{ duration: 0.1 }}
                    >
                        <img src={bgImageSrc} alt="Background" className="w-screen h-screen object-cover object-center" />
                        <div className="absolute inset-0 bg-black/40" />
                    </motion.div>

                    <div className="container mx-auto flex flex-col items-center justify-start relative z-10">
                        <div className="flex flex-col items-center justify-center w-full h-[100dvh] relative">

                            {/* Expanding Video Card */}
                            <div
                                className="absolute z-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-2xl overflow-hidden"
                                style={{
                                    width: `${mediaWidth}px`,
                                    height: `${mediaHeight}px`,
                                    maxWidth: '95vw',
                                    maxHeight: '85vh',
                                    boxShadow: '0px 0px 60px rgba(0,0,0,0.4)',
                                }}
                            >
                                <video
                                    src={mediaSrc}
                                    poster={posterSrc}
                                    autoPlay
                                    muted
                                    loop
                                    playsInline
                                    preload="auto"
                                    className="w-full h-full object-cover"
                                    disablePictureInPicture
                                />
                                <motion.div
                                    className="absolute inset-0 bg-black/40"
                                    animate={{ opacity: 0.6 - scrollProgress * 0.4 }}
                                    transition={{ duration: 0.2 }}
                                />
                            </div>

                            {/* Scroll hint & date */}
                            {!mediaFullyExpanded && (
                                <div className="flex flex-col items-center text-center relative z-10 pointer-events-none" style={{ marginTop: `calc(${mediaHeight / 2}px + 24px)` }}>
                                    {date && (
                                        <p className="text-xl text-white/70 font-serif italic" style={{ transform: `translateX(-${textTranslateX}vw)` }}>
                                            {date}
                                        </p>
                                    )}
                                    {scrollToExpand && (
                                        <p className="text-white/50 text-xs font-bold tracking-[0.3em] uppercase mt-2" style={{ transform: `translateX(${textTranslateX}vw)` }}>
                                            {scrollToExpand}
                                        </p>
                                    )}
                                </div>
                            )}

                            {/* Split title */}
                            <div className={`flex items-center justify-center text-center gap-6 w-full relative z-10 flex-col ${textBlend ? 'mix-blend-difference' : 'mix-blend-normal'}`}>
                                <motion.h2
                                    className="text-5xl md:text-6xl lg:text-8xl font-serif text-white"
                                    style={{ transform: `translateX(-${textTranslateX}vw)` }}
                                >
                                    {firstWord}
                                </motion.h2>
                                <motion.h2
                                    className="text-5xl md:text-6xl lg:text-8xl font-serif text-white"
                                    style={{ transform: `translateX(${textTranslateX}vw)` }}
                                >
                                    {restOfTitle}
                                </motion.h2>
                            </div>
                        </div>

                        {/* Revealed content after full expansion */}
                        <motion.section
                            className="flex flex-col w-full px-8 py-10 md:px-16 lg:py-20"
                            animate={{ opacity: showContent ? 1 : 0 }}
                            transition={{ duration: 0.7 }}
                        >
                            {children}
                        </motion.section>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ScrollExpandMedia;
