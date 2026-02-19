
import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Twitter, Linkedin, Facebook } from 'lucide-react';
import { BLOG_POSTS, FOUNDER_BIO } from '../constants';

const BlogDetail: React.FC = () => {
  const { id } = useParams();
  const post = BLOG_POSTS.find(p => p.id === id);

  if (!post) return <Navigate to="/blog" />;

  return (
    <div className="bg-white selection:bg-highlight">
      {/* Top Nav Header */}
      <div className="fixed top-0 left-0 w-full z-[60] py-6 px-6 pointer-events-none">
        <div className="container mx-auto flex justify-between">
          <Link to="/blog" className="pointer-events-auto bg-white/80 backdrop-blur-md px-6 py-3 rounded-full border border-black/5 flex items-center gap-3 text-[10px] font-black uppercase tracking-widest hover:bg-white transition-all">
             <ArrowLeft size={14} /> Back to Journal
          </Link>
        </div>
      </div>

      <header className="pt-40 pb-16 lg:pb-32">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="flex items-center gap-4 mb-8 text-[10px] font-black uppercase tracking-widest text-textPrimary/30">
            <span>{post.date}</span>
            <span className="w-1.5 h-1.5 bg-accent rounded-full" />
            <span>Journal</span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-8xl font-serif text-textPrimary leading-[1.1] mb-12">
            {post.title}
          </h1>
          <div className="aspect-[21/9] rounded-[3rem] overflow-hidden shadow-2xl mb-16 lg:mb-24">
            <img src={post.image} className="w-full h-full object-cover" alt={post.title} />
          </div>
        </div>
      </header>

      <article className="pb-24 lg:pb-32">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            {/* Rich Content Render */}
            <div 
              className="prose prose-lg md:prose-xl lg:prose-2xl prose-primary prose-headings:font-serif prose-headings:text-textPrimary prose-p:text-textPrimary/60 prose-p:leading-relaxed prose-p:font-light prose-p:mb-12 prose-img:rounded-[3rem] prose-img:shadow-2xl prose-img:my-20"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* Author Footer */}
            <div className="mt-24 pt-16 border-t border-black/5 flex flex-col md:flex-row items-center gap-10">
              <div className="w-32 h-32 rounded-3xl overflow-hidden shrink-0">
                <img src={FOUNDER_BIO.image} className="w-full h-full object-cover" alt={post.author} />
              </div>
              <div className="text-center md:text-left">
                <span className="text-[10px] font-black text-accent tracking-[0.4em] uppercase mb-2 block">Written by</span>
                <h4 className="text-3xl font-serif mb-4 text-textPrimary">{post.author}</h4>
                <p className="text-lg text-textPrimary/50 font-light leading-relaxed mb-6 italic">"{FOUNDER_BIO.philosophy}"</p>
                <div className="flex gap-6 justify-center md:justify-start text-textPrimary/20">
                  <Twitter size={18} className="hover:text-primary transition-colors cursor-pointer" />
                  <Linkedin size={18} className="hover:text-primary transition-colors cursor-pointer" />
                  <Facebook size={18} className="hover:text-primary transition-colors cursor-pointer" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* Suggested Articles */}
      <section className="py-24 bg-[#F9FBFC] border-t border-black/5">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-end mb-12 lg:mb-16">
            <h2 className="text-4xl lg:text-5xl font-serif text-textPrimary">Recent <span className="italic">Posts</span></h2>
            <Link to="/blog" className="text-xs font-black uppercase tracking-widest text-primary border-b border-primary/20 pb-2">View Journal</Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {BLOG_POSTS.filter(p => p.id !== id).slice(0, 3).map(other => (
              <Link key={other.id} to={`/blog/${other.id}`} className="group bg-white p-6 rounded-[2rem] border border-black/5 hover:border-primary/10 transition-all shadow-sm">
                <div className="aspect-[16/10] rounded-2xl overflow-hidden mb-6">
                  <img src={other.image} className="w-full h-full object-cover transition-transform group-hover:scale-105 duration-700" alt={other.title} />
                </div>
                <h4 className="text-xl font-serif text-textPrimary mb-4 group-hover:text-primary transition-colors leading-tight">{other.title}</h4>
                <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-primary">Read Post <ArrowRight size={14} /></div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogDetail;
