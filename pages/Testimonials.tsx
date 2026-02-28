import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Star, ArrowRight } from 'lucide-react';
import { SEO } from '../components/SEO';

// Dental clinic testimonials data
type Testimonial = {
    name: string;
    role: string;
    image: string;
    treatment: string;
    quote: string;
};

const testimonials: Testimonial[] = [
    {
        quote: "The structural integrity of my implants is absolute. Dr. Thorne's robotic system achieved a level of precision I didn't think possible. The future is here.",
        name: 'Priya Ramesh',
        role: 'Software Engineer',
        treatment: 'Smile Design',
        image: 'https://randomuser.me/api/portraits/women/44.jpg',
    },
    {
        quote: "The implants look and feel completely natural. I forgot I even have them. Best decision I've made for my health in years.",
        name: 'Karthik Subramaniam',
        role: 'Business Owner',
        treatment: 'Dental Implants',
        image: 'https://randomuser.me/api/portraits/men/45.jpg',
    },
    {
        quote: "The AI Smile Design protocol was incredible — seeing the simulation before the procedure gave me absolute confidence. The results are mathematically perfect.",
        name: 'Ananya Krishnan',
        role: 'Fashion Designer',
        treatment: 'Smile Whitening',
        image: 'https://randomuser.me/api/portraits/women/46.jpg',
    },
    {
        quote: "I was skeptical about invisible aligners but the results after 6 months are jaw-dropping. My confidence is through the roof.",
        name: 'Rohan Mehta',
        role: 'Marketing Executive',
        treatment: 'Clear Aligners',
        image: 'https://randomuser.me/api/portraits/men/47.jpg',
    },
    {
        quote: "After a complex surgical failure elsewhere, OmniDental's robotic repair saved my oral architecture. Truly world-class expertise.",
        name: 'Deepa Nair',
        role: 'School Principal',
        treatment: 'Root Canal Therapy',
        image: 'https://randomuser.me/api/portraits/women/48.jpg',
    },
    {
        quote: "Full mouth rehabilitation in under 3 visits — the 3D scanning technology is mind-blowing. My family all comes here now.",
        name: 'Sanjay Chandrasekhar',
        role: 'Retired Colonel',
        treatment: 'Full Mouth Rehab',
        image: 'https://randomuser.me/api/portraits/men/49.jpg',
    },
    {
        quote: "The digital smile preview before treatment was amazing. I knew exactly what I'd look like. Zero surprises, all results.",
        name: 'Meera Iyer',
        role: 'TV Anchor',
        treatment: 'Cosmetic Dentistry',
        image: 'https://randomuser.me/api/portraits/women/50.jpg',
    },
    {
        quote: "Painless laser gum treatment — I was expecting the worst but it was over in minutes. Recovery was incredibly fast.",
        name: 'Vijay Sundaram',
        role: 'Architect',
        treatment: 'Laser Dentistry',
        image: 'https://randomuser.me/api/portraits/men/51.jpg',
    },
    {
        quote: "The neural scan was painless and the data visualization of my future smile was breathtaking. You aren't just a patient, you are a priority.",
        name: 'Lakshmi Balaji',
        role: 'Data Analyst',
        treatment: 'Neural Mapping',
        image: 'https://randomuser.me/api/portraits/women/52.jpg',
    },
];

// Full Testimonials Page
const Testimonials: React.FC = () => {
    return (
        <div className="bg-[#020617] pt-32 pb-24 min-h-screen">
            <SEO
                title="Surgical Outcomes | OmniDental AI"
                description="Read real data from real OmniDental patients. Robotic surgical outcomes and AI-guided architectural repairs."
            />

            {/* Hero */}
            <section className="container mx-auto px-6 mb-20 text-center">
                <motion.span
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-[10px] font-black text-primary tracking-[0.45em] uppercase mb-5 block"
                >
                    Verified Outcomes — Clinical Data
                </motion.span>
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="text-5xl lg:text-7xl font-serif leading-tight mb-6 text-white"
                >
                    Precision Results, <br />
                    <span className="italic text-primary">Absolute Truth.</span>
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-white/40 max-w-xl mx-auto text-lg font-light leading-relaxed"
                >
                    Every outcome here is backed by data. Browse the transmissions of patients who upgraded their biological architecture with OmniDental.
                </motion.p>

                {/* Google Rating Badge */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="inline-flex items-center gap-3 mt-10 glass border border-white/10 rounded-full px-6 py-3 shadow-2xl"
                >
                    <div className="flex gap-0.5">
                        {[1, 2, 3, 4, 5].map(i => <Star key={i} size={16} className="fill-primary text-primary" />)}
                    </div>
                    <span className="text-sm font-bold text-white">4.9/5.0</span>
                    <span className="text-xs text-white/40 font-medium">99.9% Success Rate</span>
                </motion.div>
            </section>

            {/* Testimonials Grid */}
            <section className="container mx-auto px-6 max-w-6xl">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    {testimonials.map(({ name, role, treatment, quote, image }, index) => (
                        <motion.div
                            key={index}
                            initial={{ filter: 'blur(4px)', translateY: -8, opacity: 0 }}
                            whileInView={{ filter: 'blur(0px)', translateY: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.08 * index, duration: 0.7 }}
                            className="relative grid grid-cols-[auto_1fr] gap-x-3 overflow-hidden border border-dashed border-white/10 p-5 glass hover:bg-white/5 transition-colors duration-300"
                        >
                            {/* Subtle grid overlay */}
                            <div className="pointer-events-none absolute inset-0 opacity-10 [background-image:linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:24px_24px]" />

                            <img
                                alt={name}
                                src={image}
                                loading="lazy"
                                className="size-10 rounded-full object-cover self-start mt-0.5 grayscale"
                            />
                            <div>
                                <p className="text-sm font-semibold text-white">{name}</p>
                                <span className="text-[11px] text-white/40 font-light tracking-tight block">
                                    {role} {'·'} <span className="text-primary font-medium">{treatment}</span>
                                </span>
                                <blockquote className="mt-3">
                                    <p className="text-sm font-light tracking-wide text-white/60 leading-relaxed">
                                        {'“'}{quote}{'”'}
                                    </p>
                                </blockquote>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* CTA */}
            <motion.section
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="container mx-auto px-6 text-center mt-24"
            >
                <h2 className="text-3xl lg:text-5xl font-serif mb-6 leading-tight text-white">
                    Ready to architect <span className="italic text-primary">your future?</span>
                </h2>
                <p className="text-white/40 mb-10 max-w-md mx-auto">
                    Join hundreds of patients who have upgraded their biological assets at OmniDental.
                </p>
                <Link
                    to="/contact"
                    className="inline-flex items-center gap-3 bg-primary text-slate-950 px-10 py-5 rounded-full font-black text-[11px] uppercase tracking-[0.25em] hover:bg-primary/90 transition-all shadow-xl shadow-primary/20 hover:-translate-y-0.5 group"
                >
                    Initialize Consultation
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Link>
            </motion.section>
        </div>
    );
};

export default Testimonials;

// Export data for Home page marquee teaser
export { testimonials };
export type { Testimonial };
