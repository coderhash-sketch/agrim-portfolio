
import React from 'react';
import { EXPERIENCES } from '../constants';

const Experience: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-20">
        <h2 className="text-4xl md:text-6xl font-black mb-4 tracking-tighter">Career <span className="text-rainbow-gradient">Path</span></h2>
        <p className="text-slate-500 font-medium">A timeline of professional growth and technical leadership.</p>
      </div>

      <div className="space-y-16 relative before:absolute before:left-0 md:before:left-1/2 before:top-0 before:bottom-0 before:w-[2px] before:bg-gradient-to-b before:from-fuchsia-500/20 before:via-cyan-500/20 before:to-transparent">
        {EXPERIENCES.map((exp, index) => (
          <div key={exp.company} className={`relative flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
            {/* Neon Timeline Dot */}
            <div className={`absolute left-0 md:left-1/2 top-0 md:top-10 w-6 h-6 rounded-full border-4 border-[#020617] z-10 -translate-x-1/2 shadow-xl ${
              index % 3 === 0 ? 'bg-fuchsia-500 neonic-shadow-pink' : 
              index % 3 === 1 ? 'bg-cyan-500 neonic-shadow-cyan' : 'bg-lime-500 neonic-shadow-green'
            }`}></div>
            
            <div className="w-full md:w-1/2 pl-10 md:px-16 py-4">
              <div className="glass-panel p-8 rounded-3xl border border-white/5 hover:border-white/20 transition-all group duration-500">
                <span className={`text-sm font-black block mb-3 uppercase tracking-widest ${
                   index % 3 === 0 ? 'text-fuchsia-400' : 
                   index % 3 === 1 ? 'text-cyan-400' : 'text-lime-400'
                }`}>{exp.period}</span>
                <h3 className="text-2xl font-black text-white group-hover:text-rainbow-gradient transition-all duration-300">{exp.role}</h3>
                <p className="text-slate-400 font-bold mb-6 italic">{exp.company}</p>
                <ul className="space-y-3 mb-8">
                  {exp.description.map((item, i) => (
                    <li key={i} className="text-sm text-slate-500 leading-relaxed flex gap-3">
                      <span className="text-cyan-500 font-black mt-1">▹</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((s) => (
                    <span key={s} className="text-[9px] font-black uppercase tracking-tighter px-3 py-1 bg-slate-900 border border-white/5 text-slate-400 rounded-md">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;