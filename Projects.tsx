import React from 'react';
import { PROJECTS } from '../constants';

const Projects: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="mb-20">
        <h2 className="text-4xl md:text-6xl font-black mb-4 tracking-tighter">Featured <span className="text-rainbow-gradient">Work</span></h2>
        <p className="text-slate-500 max-w-xl font-medium">Engineered systems with measurable impact and technical precision.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {PROJECTS.map((project, index) => (
          <div key={project.id} className="group relative flex flex-col glass-panel rounded-3xl overflow-hidden border border-white/5 hover:border-fuchsia-500/50 transition-all duration-700 hover:-translate-y-2">
            <div className="relative h-72 overflow-hidden">
              <img 
                src={project.imageUrl} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-60 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/40 to-transparent"></div>
              
              <div className="absolute bottom-6 left-8">
                 <span className="px-4 py-1.5 bg-rainbow-gradient text-slate-950 text-xs font-black rounded-full uppercase tracking-widest">
                  Featured
                </span>
              </div>
            </div>

            <div className="p-10 flex-1 flex flex-col">
              <h3 className="text-3xl font-black mb-2 group-hover:text-white transition-colors">{project.title}</h3>
              <p className="text-cyan-400 text-sm font-bold mb-6 tracking-wide uppercase">{project.tagline}</p>
              
              <div className="space-y-6 mb-8">
                <div>
                  <h4 className="text-[10px] uppercase tracking-[0.2em] text-slate-500 font-black mb-2">The Problem</h4>
                  <p className="text-slate-400 text-sm leading-relaxed">{project.problem}</p>
                </div>
                <div>
                  <h4 className="text-[10px] uppercase tracking-[0.2em] text-slate-500 font-black mb-2">Engineering Impact</h4>
                  <p className="text-lime-400/90 text-sm font-bold italic">“{project.impact}”</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-10">
                {project.techStack.map((tech) => (
                  <span key={tech} className="px-4 py-1.5 bg-slate-900/80 rounded-lg text-[10px] font-black text-slate-300 border border-white/5 uppercase tracking-wider">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-auto flex gap-6">
                {project.githubUrl && (
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-sm font-black flex items-center gap-2 text-slate-400 hover:text-white transition-all hover:scale-105">
                    CODEBASE <span className="text-fuchsia-500">→</span>
                  </a>
                )}
                {project.liveUrl && (
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-sm font-black flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-all hover:scale-105">
                    LIVE DEMO <span className="text-cyan-400">→</span>
                  </a>
                )}
              </div>
            </div>
            
            {/* Rainbow Bottom Bar */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-rainbow-gradient opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;