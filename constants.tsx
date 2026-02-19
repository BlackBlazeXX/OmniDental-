
import React from 'react';
import { Service, TeamMember, BlogPost } from './types';

export const FOUNDER_BIO = {
  name: 'Dr. Olivia Martinez',
  role: 'Founder & Clinical Director',
  credentials: 'BDS, MDS (Aesthetic Dentistry)',
  philosophy: 'I believe that a smile is not just about aesthetics—it is a reflection of overall well-being and confidence.',
  fullBio: 'With over 15 years of clinical excellence, Dr. Olivia Martinez has redefined the dental experience in Chennai. Her approach combines the surgical precision of modern medicine with the artistic touch required for high-end cosmetic transformations.',
  image: '/images/gallery/image-065.png',
  specialties: ['Cosmetic Smile Design', 'Advanced Implantology', 'Full Mouth Rehabilitation']
};

export const CLINIC_TECH = [
  { name: '3D Intraoral Scanning', desc: 'No more messy impressions. Digital precision for a perfect fit.' },
  { name: 'Computer-Guided Surgery', desc: 'Pinpoint accuracy for implant placement and restorative care.' },
  { name: 'Laser Dentistry', desc: 'Minimally invasive treatments for faster healing and zero discomfort.' }
];

export const PATIENT_JOURNEY = [
  { step: '01', title: 'Discovery', desc: 'Comprehensive digital analysis of your unique facial architecture.' },
  { step: '02', title: 'Curated Plan', desc: 'A bespoke roadmap designed around your aesthetic goals.' },
  { step: '03', title: 'Transformation', desc: 'Expert treatment delivered in our state-of-the-art clinical suites.' }
];

export const SERVICES_DATA: Service[] = [
  {
    id: 'general-dentistry',
    title: 'General Dentistry',
    shortDesc: 'Comprehensive care for your everyday oral health needs.',
    description: 'Our general dentistry services focus on preventive care and maintaining optimal oral health for patients of all ages.',
    image: '/images/services/service1.png',
    benefits: ['Cavity prevention', 'Gum health monitoring', 'Early detection of issues'],
    process: ['Initial Consultation', 'Comprehensive Exam', 'Professional Cleaning', 'Personalized Plan']
  },
  {
    id: 'cosmetic-dentistry',
    title: 'Cosmetic Dentistry',
    shortDesc: 'Transform your smile with advanced aesthetic treatments.',
    description: 'We combine artistry with clinical precision to give you the smile you\'ve always dreamed of.',
    image: '/images/services/service2.png',
    benefits: ['Enhanced confidence', 'Natural-looking results', 'Long-lasting whitening'],
    process: ['Smile Analysis', 'Digital Previews', 'Mock-up Session', 'Final Placement']
  },
  {
    id: 'dental-implants',
    title: 'Dental Implants',
    shortDesc: 'Permanent, natural-looking tooth replacement that lasts a lifetime.',
    description: 'Dental implants are the gold standard for replacing missing teeth. Using titanium posts fused with your jawbone, we create a permanent foundation for crowns that look, feel, and function exactly like natural teeth.\n\nOur computer-guided implant surgery ensures pinpoint accuracy, minimal discomfort, and faster healing — so you can return to your confident smile sooner than you think.',
    image: '/images/services/service3.png',
    benefits: ['Permanent solution — lasts a lifetime', 'Prevents jawbone loss', 'No slipping or adhesives needed', 'Looks and feels like natural teeth'],
    process: ['3D Bone Scan & Planning', 'Computer-Guided Implant Placement', 'Healing & Osseointegration', 'Custom Crown Fitting']
  },
  {
    id: 'teeth-whitening',
    title: 'Smile Design & Whitening',
    shortDesc: 'Achieve a radiant, celebrity-worthy smile in a single visit.',
    description: 'Our advanced smile design combines professional-grade whitening with digital smile previews — so you see your results before we even begin. Using the latest LED-activated whitening technology, we can lighten your teeth by up to 8 shades in just one session.\n\nFor a complete transformation, our smile design service maps your facial proportions to create a bespoke smile that complements your unique features.',
    image: '/images/services/service4.png',
    benefits: ['Up to 8 shades whiter in one visit', 'Zero sensitivity formula', 'Digital smile preview before treatment', 'Long-lasting results — up to 2 years'],
    process: ['Digital Smile Analysis', 'Shade Mapping & Goal Setting', 'LED Whitening Session', 'Aftercare & Maintenance Plan']
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'celebrating-15-years',
    title: 'Celebrating over 15 years of crafting healthy, confident smiles.',
    date: 'November 1, 2025',
    excerpt: 'Delivering beautiful smiles with expert care, advanced technology, and compassionate service.',
    content: `
      <p>Your smile is one of your most powerful assets. Whether you're greeting someone new or enjoying your favorite meal, strong and healthy teeth make all the difference.</p>
      <h3>The Evolution of Dental Care</h3>
      <p>Over the last 15 years, our clinic has stayed at the forefront of dental technology. We believe that clinical precision shouldn't come at the cost of comfort.</p>
      <img src="/images/blog/blog1.png" alt="Clinical Precision" style="border-radius: 2rem; margin: 3rem 0; width: 100%;" />
      <h3>A Holistic Approach</h3>
      <p>We don't just look at teeth; we look at the whole patient. Our treatments are designed to improve your quality of life, not just your appearance.</p>
    `,
    image: '/images/blog/blog1.png',
    author: 'Dr. Olivia Martinez'
  },
  {
    id: 'nourishing-foods',
    title: 'Nourishing Foods for Strong, Healthy Teeth and Lasting Oral Wellness.',
    date: 'November 1, 2025',
    excerpt: 'From crunchy apples to leafy greens, discover the best foods for stronger teeth and gums.',
    content: `
      <p>Your diet plays a massive role in the health of your teeth and gums. Here are the top foods we recommend for a vibrant smile.</p>
      <h3>Fiber-Rich Fruits and Vegetables</h3>
      <p>Foods with fiber help keep your teeth and gums clean. They also get saliva flowing, which is the best natural defense against cavities.</p>
      <img src="/images/blog/blog2.png" alt="Healthy Foods" style="border-radius: 2rem; margin: 3rem 0; width: 100%;" />
      <h3>Dairy Products</h3>
      <p>Calcium is the primary ingredient for preventing tooth decay, especially for growing children. Cheese and yogurt are excellent sources.</p>
    `,
    image: '/images/blog/blog2.png',
    author: 'Dr. Olivia Martinez'
  },
  {
    id: 'implants-vs-dentures',
    title: 'Dental Implants vs. Dentures. Which Is Right for You?',
    date: 'November 1, 2025',
    excerpt: 'A complete guide to understanding the differences, benefits, and costs of implants and dentures.',
    content: `
      <p>Choosing between dental implants and dentures is a big decision that impacts your lifestyle and long-term health.</p>
      <h3>Why Dental Implants?</h3>
      <p>Implants are a permanent solution that looks and feels like natural teeth. They also help prevent bone loss in the jaw.</p>
      <img src="/images/blog/blog3.png" alt="Smile Transformation" style="border-radius: 2rem; margin: 3rem 0; width: 100%;" />
      <h3>The Convenience of Dentures</h3>
      <p>Modern dentures are more comfortable and realistic than ever. They are an excellent option for non-invasive smile restoration.</p>
    `,
    image: '/images/blog/blog3.png',
    author: 'Dr. Olivia Martinez'
  },
];

export const TEAM_DATA: TeamMember[] = [
  {
    id: 'dr-olivia-martinez',
    name: 'Dr. Olivia Martinez',
    role: 'Founder & Principal Dentist',
    bio: 'With over 15 years of experience, Dr. Olivia Martinez specializes in cosmetic transformations.',
    image: '/images/gallery/image-065.png',
    specialties: ['Cosmetic Dentistry', 'Implantology']
  }
];
