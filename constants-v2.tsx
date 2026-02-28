
import React from 'react';
import { Service, TeamMember, BlogPost } from './types';

export const FOUNDER_BIO = {
  name: 'Dr. Xavier Thorne',
  role: 'Chief of Robotic Surgery',
  credentials: 'MDS, PhD (Biomimetic Architecture)',
  philosophy: 'We do not just fix teeth; we architect the structural future of your facial harmony.',
  fullBio: 'A pioneer in AI-guided implantology, Dr. Xavier Thorne has spent two decades merging robotic precision with biological dental care. He lead the team that developed the first haptic-feedback surgical suite in the region.',
  image: '/images/gallery/image-065.png',
  specialties: ['Robotic Implantology', 'Digital Smile Architecture', 'Full Mouth Reconstruction']
};

export const CLINIC_TECH = [
  { name: 'AI Intraoral Analysis', desc: 'Real-time neural mapping of your dental structure with 0.01mm precision.' },
  { name: 'Surgical Haptics', desc: 'Robotic-assisted surgery for absolute placement accuracy and zero trauma.' },
  { name: 'Biomimetic Printing', desc: '3D printed restorations that match your natural enamel strength and translucency.' }
];

export const PATIENT_JOURNEY = [
  { step: '01', title: 'Neural Scan', desc: 'Complete digital twin generation of your oral cavity.' },
  { step: '02', title: 'AI Simulation', desc: 'Visualizing your terminal results through advanced predictive rendering.' },
  { step: '03', title: 'Precision Build', desc: 'Executing your transformation with robotic-assisted clinical tools.' }
];

export const SERVICES_DATA: Service[] = [
  {
    id: 'robotic-implants',
    title: 'Robotic Implants',
    shortDesc: 'The apex of tooth replacement technology.',
    description: 'Experience the world\'s most advanced implant system. Using real-time robotic guidance, we place implants with a level of precision that human hands alone cannot achieve, resulting in faster healing and 99.9% clinical success rates.',
    image: '/images/services/service3.png',
    benefits: ['Robotic-guided precision', 'Single-visit restoration', 'Neural-integrated stability'],
    process: ['Neural Mapping', 'Robotic Placement', 'Digital Integration', 'Final Tuning']
  },
  {
    id: 'ai-smile-design',
    title: 'AI Smile Design',
    shortDesc: 'Predictive facial architecture for a perfect smile.',
    description: 'We use generative AI to simulate thousands of smile variations based on your facial geometry. You approve the final rendered result before we ever touch a single tooth.',
    image: '/images/services/service2.png',
    benefits: ['Zero-risk predictability', 'Biomimetic aesthetics', 'High-speed delivery'],
    process: ['Facial Scanning', 'AI Rendering', 'Mock-up Validation', 'Final Execution']
  },
  {
    id: 'preventive-lab',
    title: 'Preventive Lab',
    shortDesc: 'Elite maintenance for structural longevity.',
    description: 'Our preventive protocols go beyond cleaning. We use ultrasonic precision tools to maintain the structural integrity of your natural teeth and existing restorations.',
    image: '/images/services/service1.png',
    benefits: ['Deep DNA-level cleaning', 'Enamel fortification', 'Structural monitoring'],
    process: ['Bio-Scan', 'Ultrated Cleaning', 'Surface Bonding', 'Longevity Report']
  },
  {
    id: 'restorative-eng',
    title: 'Restorative Eng.',
    shortDesc: 'Engineered durability for complex dental trauma.',
    description: 'When natural structures fail, we engineer bio-equivalent replacements. Our 3D printed ceramics are designed to outperform natural enamel in both strength and beauty.',
    image: '/images/services/service4.png',
    benefits: ['Indestructible aesthetics', 'Perfect bite alignment', 'Rapid restoration'],
    process: ['Structural Audit', 'CAD Design', '3D Fabrication', 'Clinical Install']
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'future-of-dentistry',
    title: 'The Singularity: Where Robotics Meets Biology.',
    date: 'February 2026',
    excerpt: 'How AI and robotics are ending the era of painful, unpredictable dental surgery.',
    content: `
      <p>The manual era of dentistry is over. At OmniDental AI, we are witnessing the convergence of synthetic intelligence and biological care.</p>
      <h3>Robotic Precision</h3>
      <p>Precision is not just a luxury; it is the foundation of longevity. Our robotic systems ensure that every implant is placed within a micron of its ideal position.</p>
      <img src="/images/blog/blog1.png" alt="Robotic Surgery" style="border-radius: 2rem; margin: 3rem 0; width: 100%;" />
      <h3>The AI Revolution</h3>
      <p>By simulating years of post-operative wear in seconds, our AI identifies potential risks before they ever happen.</p>
    `,
    image: '/images/blog/blog1.png',
    author: 'Dr. Xavier Thorne'
  },
  {
    id: '3d-printing-bio',
    title: '3D Printing Bio-Identical Enamel Structures.',
    date: 'January 2026',
    excerpt: 'Breaking down the science of 3D printing ceramic teeth with zero sensitivity.',
    content: `
      <p>Conventional lab work is slow and prone to error. Our on-site 3D printing lab generates perfect crowns in minutes, not days.</p>
      <img src="/images/blog/blog2.png" alt="3D Printing" style="border-radius: 2rem; margin: 3rem 0; width: 100%;" />
    `,
    image: '/images/blog/blog2.png',
    author: 'Dr. Xavier Thorne'
  }
];

export const TEAM_DATA: TeamMember[] = [
  {
    id: 'dr-xavier-thorne',
    name: 'Dr. Xavier Thorne',
    role: 'Chief Architect & Founder',
    bio: 'Pioneer of the "Precision Biological" movement, Dr. Thorne leads the research into haptic surgical systems.',
    image: '/images/gallery/image-065.png',
    specialties: ['Robotic Surgery', 'System Integration']
  }
];
