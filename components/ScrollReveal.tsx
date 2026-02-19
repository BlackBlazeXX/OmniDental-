import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface ScrollRevealProps {
    children: React.ReactNode;
    width?: 'fit-content' | '100%';
    delay?: number;
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({ children, width = 'fit-content', delay = 0.25 }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-10% 0px -10% 0px" });

    return (
        <div ref={ref} style={{ position: 'relative', width, overflow: 'hidden' }}>
            <motion.div
                variants={{
                    hidden: { opacity: 0, y: 75 },
                    visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                transition={{ duration: 0.8, delay, ease: [0.17, 0.55, 0.55, 1] }}
            >
                {children}
            </motion.div>
        </div>
    );
};
