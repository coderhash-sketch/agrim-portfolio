
import React from 'react';
import { EDUCATION } from '../constants';

const Education: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-12">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">Education</h2>
        <p className="text-slate-500">Academic journey and performance.</p>
      </div>

      <div className="grid gap-6">
        {EDUCATION.map((edu, index) => (
          <div key={index} className="glass-panel p-6 rounded-2xl flex flex-col md:flex-row md:items-center justify-between group hover:border-teal-500/30 transition-all">
            <div>
              <h3 className="text-xl font-bold group-hover:text-teal-400 transition-colors">{edu.institution}</h3>
              <p className="text-slate-400">{edu.degree}</p>
            </div>
            <div className="mt-4 md:mt-0 md:text-right">
              <span className="text-teal-500 font-bold block">{edu.grade}</span>
              <span className="text-slate-600 text-sm">{edu.period}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
