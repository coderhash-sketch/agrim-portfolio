
import React from 'react';
import { SKILLS } from '../constants';

const Skills: React.FC = () => {
  const neonColors = [
    'from-fuchsia-600 to-purple-600',
    'from-cyan-600 to-blue-600',
    'from-lime-600 to-green-600'
  ];

  return (
    <div className="max-w-6xl mx-auto">
      <div className="mb-20 text-center">
        <h2 className="text-4xl md:text-6xl font-black mb-4 tracking-tighter">Core <span className="text-rainbow-gradient">Capabilities</span></h2>
        <p className="text-slate-500 font-medium">High-proficiency engineering across specialized domains.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {SKILLS.map((category, idx) => (
          <div key={category.name} className="glass-panel p-10 rounded-3xl border border-white/5 hover:border-white/10 transition-all group">
            <h3 className={`text-2xl font-black mb-10 uppercase tracking-tighter text-transparent bg-clip-text bg-gradient-to-r ${neonColors[idx % neonColors.length]}`}>
              {category.name}
            </h3>
            <div className="space-y-8">
              {category.skills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-sm font-bold text-slate-300 uppercase tracking-wider">{skill.name}</span>
                    <span className="text-xs text-slate-500 font-black">{skill.level}%</span>
                  </div>
                  <div className="h-2 w-full bg-slate-900 rounded-full overflow-hidden border border-white/5">
                    <div 
                      className={`h-full bg-gradient-to-r ${neonColors[idx % neonColors.length]} rounded-full transition-all duration-1000 group-hover:neonic-shadow-cyan`}
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-20 flex flex-wrap justify-center gap-10 opacity-30 grayscale hover:grayscale-0 transition-all duration-700">
        <span className="text-3xl font-black tracking-tighter hover:text-fuchsia-500">TYPESCRIPT</span>
        <span className="text-3xl font-black tracking-tighter hover:text-cyan-500">PYTHON</span>
        <span className="text-3xl font-black tracking-tighter hover:text-lime-500">NEXT.JS</span>
        <span className="text-3xl font-black tracking-tighter hover:text-purple-500">GEMINI AI</span>
        <span className="text-3xl font-black tracking-tighter hover:text-blue-500">TAILWIND</span>
      </div>
    </div>
  );
};

export default Skills;