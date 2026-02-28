
import React from 'react';
import { Link } from 'react-router-dom';
import { BLOG_POSTS } from '../constants';
import { ArrowRight } from 'lucide-react';
import { SEO } from '../components/SEO';

const Blog: React.FC = () => {
  return (
    <div className="bg-[#020617] pt-40 pb-24">
      <SEO
        title="Structural Insights | OmniDental AI"
        description="Access the latest research data on robotic surgical systems and biological smile architecture."
      />
      {/* Header Section from Reference */}
      <section className="container mx-auto px-6 mb-20 lg:mb-32">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8">
          <div className="max-w-xl">
            <h1 className="text-7xl lg:text-[120px] font-serif leading-[0.85] text-white tracking-tight">
              Clinical <br />
              <span className="block mt-4 lg:mt-8 italic text-primary">Data</span>
            </h1>
          </div>
          <div className="max-w-md lg:text-right">
            <p className="text-lg lg:text-xl text-white/40 font-light leading-relaxed">
              Synthesizing the future of dental care. Access our latest research on robotic precision and AI smile simulation.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Cards Grid (Stacked Layout as per Reference) */}
      <section className="container mx-auto px-6">
        <div className="flex flex-col gap-8 lg:gap-12">
          {BLOG_POSTS.map((post) => (
            <Link
              key={post.id}
              to={`/blog/${post.id}`}
              className="group flex flex-col md:flex-row glass rounded-[2rem] border border-white/5 hover:border-primary/20 hover:shadow-2xl transition-all duration-500 overflow-hidden"
            >
              {/* Image Side */}
              <div className="md:w-2/5 lg:w-[45%] relative overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
                <div className="aspect-[16/10] md:h-full">
                  <img
                    src={post.image}
                    className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105"
                    alt={post.title}
                  />
                </div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-slate-950/40 backdrop-blur-[2px]">
                  <span className="bg-primary text-slate-950 text-[10px] font-black uppercase tracking-[0.3em] px-6 py-3 rounded-full">Access Research</span>
                </div>
              </div>

              {/* Content Side */}
              <div className="p-8 lg:p-16 md:w-3/5 lg:w-[55%] flex flex-col justify-center">
                <p className="text-[10px] font-black uppercase tracking-[0.3em] text-white/30 mb-6 lg:mb-8">
                  {post.date}
                </p>
                <h2 className="text-2xl lg:text-4xl font-serif text-white mb-6 lg:mb-8 leading-tight group-hover:text-primary transition-colors">
                  {post.title}
                </h2>
                <p className="text-base lg:text-lg text-white/40 font-light leading-relaxed mb-8 lg:mb-10">
                  {post.excerpt}
                </p>

                <div className="flex items-center gap-3 w-fit relative">
                  <span className="text-xs font-black uppercase tracking-widest text-primary">Download Protocol</span>
                  <div className="absolute bottom-[-6px] left-0 w-full h-[1px] bg-primary group-hover:scale-x-110 transition-transform origin-left" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Blog;
