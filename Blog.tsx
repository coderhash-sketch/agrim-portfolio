
import React, { useState } from 'react';
import { BLOG_POSTS } from '../constants';

const Blog: React.FC = () => {
  const [selectedPost, setSelectedPost] = useState<typeof BLOG_POSTS[0] | null>(null);

  return (
    <div className="max-w-6xl mx-auto">
      <div className="mb-16">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">Writings</h2>
        <p className="text-slate-500">Sharing insights on engineering architecture, leadership, and AI.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {BLOG_POSTS.map((post) => (
          <article 
            key={post.id} 
            onClick={() => setSelectedPost(post)}
            className="group glass-panel p-8 rounded-2xl cursor-pointer hover:bg-slate-800/50 transition-all border border-slate-800 hover:border-teal-500/50"
          >
            <div className="flex justify-between items-start mb-6">
              <span className="px-3 py-1 bg-teal-500/10 text-teal-400 text-xs font-bold rounded-full border border-teal-500/20">
                {post.category}
              </span>
              <span className="text-xs text-slate-600 font-medium uppercase tracking-widest">{post.date}</span>
            </div>
            
            <h3 className="text-2xl font-bold mb-3 group-hover:text-teal-400 transition-colors leading-tight">
              {post.title}
            </h3>
            
            <p className="text-slate-400 text-sm mb-6 line-clamp-2">
              {post.excerpt}
            </p>
            
            <div className="flex justify-between items-center">
              <span className="text-xs text-slate-500">{post.readTime}</span>
              <span className="text-teal-400 text-sm font-bold group-hover:translate-x-2 transition-transform inline-block">
                Read Article →
              </span>
            </div>
          </article>
        ))}
      </div>

      {/* Article Modal */}
      {selectedPost && (
        <div className="fixed inset-0 z-[20000] flex items-center justify-center p-4 md:p-12">
          <div 
            className="absolute inset-0 bg-slate-950/90 backdrop-blur-xl"
            onClick={() => setSelectedPost(null)}
          ></div>
          <div className="relative glass-panel w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl p-8 md:p-16 border border-white/10 animate-in fade-in zoom-in duration-300">
            <button 
              onClick={() => setSelectedPost(null)}
              className="absolute top-8 right-8 text-slate-400 hover:text-white transition-colors"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
            </button>
            
            <div className="mb-8">
              <span className="text-teal-400 font-bold uppercase tracking-widest text-sm">{selectedPost.category}</span>
              <h2 className="text-3xl md:text-5xl font-black mt-4 mb-6">{selectedPost.title}</h2>
              <div className="flex gap-4 text-slate-500 text-sm border-b border-slate-800 pb-8">
                <span>{selectedPost.date}</span>
                <span>•</span>
                <span>{selectedPost.readTime}</span>
              </div>
            </div>
            
            <div className="prose prose-invert max-w-none text-slate-300 leading-relaxed text-lg space-y-6">
              {selectedPost.content.split('\n').map((para, i) => {
                if (para.trim().startsWith('##')) {
                  return <h3 key={i} className="text-2xl font-bold text-white pt-4">{para.replace('##', '').trim()}</h3>;
                }
                if (para.trim().startsWith('###')) {
                  return <h4 key={i} className="text-xl font-bold text-teal-400 pt-2">{para.replace('###', '').trim()}</h4>;
                }
                if (para.trim().startsWith('-')) {
                  return <li key={i} className="ml-6">{para.replace('-', '').trim()}</li>;
                }
                return para.trim() ? <p key={i}>{para.trim()}</p> : null;
              })}
            </div>

            <div className="mt-16 pt-8 border-t border-slate-800 flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center font-bold text-teal-400 border border-slate-700">AG</div>
                <div className="text-sm">
                  <p className="font-bold text-white">Agrim Garg</p>
                  <p className="text-slate-500">CS Undergraduate</p>
                </div>
              </div>
              <button 
                onClick={() => setSelectedPost(null)}
                className="text-teal-400 font-bold hover:underline"
              >
                Back to Blog
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Blog;
