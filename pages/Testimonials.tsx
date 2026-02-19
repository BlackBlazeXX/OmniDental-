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
        quote: "I came in with severe dental anxiety and left as a loyal patient. Dr. Siva's team made every step calm and painless. My smile has completely transformed!",
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
        quote: "The whitening treatment was incredible — 8 shades lighter in one session! The clinic is spotless and the staff are so welcoming.",
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
        quote: "After a root canal elsewhere went wrong, OralCare fixed everything. Truly world-class expertise and the kindest staff.",
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
        quote: "The entire team remembers your name and your history. You truly feel like a VIP guest, not just another patient number.",
        name: 'Lakshmi Balaji',
        role: 'Homemaker',
        treatment: 'General Dentistry',
        image: 'https://randomuser.me/api/portraits/women/52.jpg',
    },
];

// Full Testimonials Page
const Testimonials: React.FC = () => {
    return (
        <div className="bg-mesh pt-32 pb-24 min-h-screen">
            <SEO
                title="Patient Testimonials | OralCare Clinic"
                description="Read real stories from real OralCare patients. Smile design, implants, whitening — see why Chennai trusts us."
            />

            {/* Hero */}
            <section className="container mx-auto px-6 mb-20 text-center">
                <motion.span
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-[10px] font-black text-accent tracking-[0.45em] uppercase mb-5 block"
                >
                    Real Patients — Real Results
                </motion.span>
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="text-5xl lg:text-7xl font-serif leading-tight mb-6"
                >
                    Real Smiles, <br />
                    <span className="italic text-primary">Real Voices.</span>
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-textPrimary/50 max-w-xl mx-auto text-lg font-light leading-relaxed"
                >
                    Every smile here has a story. Browse the experiences of patients who trusted OralCare with their most important asset.
                </motion.p>

                {/* Google Rating Badge */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="inline-flex items-center gap-3 mt-10 bg-white border border-black/8 rounded-full px-6 py-3 shadow-sm"
                >
                    <div className="flex gap-0.5">
                        {[1, 2, 3, 4, 5].map(i => <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />)}
                    </div>
                    <span className="text-sm font-bold text-textPrimary">4.9</span>
                    <span className="text-xs text-textPrimary/40 font-medium">200+ Google Reviews</span>
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
                            className="relative grid grid-cols-[auto_1fr] gap-x-3 overflow-hidden border border-dashed border-black/20 p-5 bg-white/60 backdrop-blur-sm hover:bg-white/90 transition-colors duration-300"
                        >
                            {/* Subtle grid overlay */}
                            <div className="pointer-events-none absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(0,0,0,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.05)_1px,transparent_1px)] [background-size:24px_24px]" />

                            <img
                                alt={name}
                                src={image}
                                loading="lazy"
                                className="size-10 rounded-full object-cover self-start mt-0.5"
                            />
                            <div>
                                <p className="text-sm font-semibold text-textPrimary">{name}</p>
                                <span className="text-[11px] text-textPrimary/40 font-light tracking-tight block">
                                    {role} {'·'} <span className="text-accent font-medium">{treatment}</span>
                                </span>
                                <blockquote className="mt-3">
                                    <p className="text-sm font-light tracking-wide text-textPrimary/70 leading-relaxed">
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
                <h2 className="text-3xl lg:text-5xl font-serif mb-6 leading-tight">
                    Ready to write <span className="italic text-primary">your story?</span>
                </h2>
                <p className="text-textPrimary/50 mb-10 max-w-md mx-auto">
                    Join hundreds of patients who have transformed their smiles and their confidence at OralCare.
                </p>
                <Link
                    to="/contact"
                    className="inline-flex items-center gap-3 bg-primary text-white px-10 py-5 rounded-full font-black text-[11px] uppercase tracking-[0.25em] hover:bg-primary/90 transition-all shadow-xl shadow-primary/20 hover:-translate-y-0.5 group"
                >
                    Book Your Consultation
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
