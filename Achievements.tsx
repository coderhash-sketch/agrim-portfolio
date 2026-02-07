
import React from 'react';
import { ACHIEVEMENTS, CERTIFICATIONS } from '../constants';

const Achievements: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
        <div>
          <h2 className="text-4xl md:text-5xl font-black mb-10 tracking-tighter uppercase">Notable <span className="text-rainbow-gradient">Achievements</span></h2>
          <div className="space-y-6">
            {ACHIEVEMENTS.map((item, i) => (
              <div key={i} className="flex gap-6 items-start p-6 bg-[#0a0f1d] rounded-2xl border border-white/5 hover:border-cyan-500/30 transition-all group">
                <div className="mt-1 w-10 h-10 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 flex-shrink-0 group-hover:scale-110 group-hover:bg-cyan-500 group-hover:text-[#020617] transition-all">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                </div>
                <p className="text-slate-300 font-bold leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-4xl md:text-5xl font-black mb-10 tracking-tighter uppercase">Professional <span className="text-rainbow-gradient">Certifications</span></h2>
          <div className="grid grid-cols-1 gap-4">
            {CERTIFICATIONS.map((cert, i) => (
              <div key={i} className="flex gap-4 items-center group p-4 glass-panel rounded-xl border-l-4 border-l-fuchsia-500 hover:border-l-cyan-500 transition-all">
                <div className="w-2 h-2 rounded-full bg-slate-700 group-hover:bg-cyan-500 group-hover:neonic-shadow-cyan transition-colors"></div>
                <p className="text-slate-400 text-sm font-bold group-hover:text-white transition-colors uppercase tracking-tight">{cert}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achievements;