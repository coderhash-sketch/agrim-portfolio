
import React from 'react';
import { PERSONAL_INFO, EDUCATION, SKILLS, EXPERIENCES, PROJECTS, CERTIFICATIONS, ACHIEVEMENTS } from '../constants';

const ResumeView: React.FC = () => {
  return (
    <div id="resume-document" className="bg-white text-slate-900 p-8 md:p-12 shadow-none max-w-[900px] mx-auto font-serif leading-tight">
      {/* Name and Header */}
      <header className="text-center mb-8">
        <h1 className="text-5xl font-bold tracking-tight mb-2">{PERSONAL_INFO.name.toUpperCase()}</h1>
        <div className="flex flex-wrap justify-center gap-x-2 gap-y-1 text-[13px] font-medium text-slate-800">
          <span>{PERSONAL_INFO.phone}</span>
          <span>|</span>
          <a href={`mailto:${PERSONAL_INFO.email}`} className="underline">{PERSONAL_INFO.email}</a>
          <span>|</span>
          <a href={PERSONAL_INFO.socials.linkedin} className="underline" target="_blank">LinkedIn</a>
          <span>|</span>
          <a href={PERSONAL_INFO.socials.leetcode} className="underline" target="_blank">LeetCode</a>
        </div>
      </header>

      {/* Professional Summary */}
      <section className="mb-6">
        <h2 className="text-lg font-bold uppercase border-b border-slate-900 mb-2">Professional Summary</h2>
        <p className="text-[13px] leading-relaxed text-justify text-slate-800">
          Computer Science undergraduate with strong proficiency in data structures, algorithms, and object-oriented 
          programming, and hands-on experience building scalable, production-ready applications. Demonstrated ability to solve 
          complex problems through innovative projects, clean system design, and performance-focused implementations, 
          experienced in vibe coding. Experienced in leading technical initiatives and collaborating across teams, with a growth 
          mindset and a strong drive to build reliable, high-impact software at scale.
        </p>
      </section>

      {/* Education */}
      <section className="mb-6">
        <h2 className="text-lg font-bold uppercase border-b border-slate-900 mb-2">Education</h2>
        <div className="space-y-1.5">
          {EDUCATION.map((edu, i) => (
            <div key={i} className="flex justify-between items-baseline text-[13px]">
              <div className="flex-1">
                <span className="font-bold w-24 inline-block">{edu.period}</span>
                <span className="font-bold">{edu.degree} at {edu.institution}</span>
              </div>
              <div className="text-right font-bold">
                ({edu.grade})
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section className="mb-6">
        <h2 className="text-lg font-bold uppercase border-b border-slate-900 mb-2">Skills</h2>
        <div className="text-[13px] space-y-1 text-slate-800">
          <p><span className="font-bold">Programming Languages:</span> C, C++, Python, HTML, CSS, JavaScript, React</p>
          <p><span className="font-bold">Relevant Coursework:</span> Data Structures & Algorithms, OOPs, DBMS, Gen AI</p>
          <p><span className="font-bold">Tools & Platforms:</span> GitHub, Vercel, Canva, MS Office</p>
          <p><span className="font-bold">Core Competencies:</span> AI/ML, Problem Solving, Fast Calculations, Logical Thinking, Quantitative Aptitude, Power BI</p>
        </div>
      </section>

      {/* Experience */}
      <section className="mb-6">
        <h2 className="text-lg font-bold uppercase border-b border-slate-900 mb-2">Experience</h2>
        <div className="space-y-4">
          {EXPERIENCES.map((exp, i) => (
            <div key={i}>
              <div className="flex justify-between font-bold text-[13px]">
                <span>{exp.role}</span>
                <span>{exp.period}</span>
              </div>
              <div className="flex justify-between italic text-[13px] mb-1 font-medium">
                <span>{exp.company}</span>
                <span>{exp.skills[0]}</span>
              </div>
              <ul className="list-disc ml-5 text-[12px] space-y-1 text-slate-800">
                {exp.description.map((desc, j) => (
                  <li key={j} className="leading-tight">{desc}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section className="mb-6 page-break-before">
        <h2 className="text-lg font-bold uppercase border-b border-slate-900 mb-2">Projects</h2>
        <div className="space-y-5">
          {PROJECTS.map((proj, i) => (
            <div key={i}>
              <div className="flex justify-between text-[13px] font-bold">
                <span>{proj.title} <span className="font-normal italic">| ({proj.tagline})</span></span>
                {i === 0 && <span>Jan 2026</span>}
                {i === 1 && <span>Feb 2026</span>}
                {i === 2 && <span>2024 - Present</span>}
                {i === 3 && <span>Aug 2025</span>}
              </div>
              <ul className="list-disc ml-5 text-[12px] space-y-1 mt-1 text-slate-800">
                <li className="leading-tight">{proj.problem}</li>
                <li className="leading-tight">{proj.solution}</li>
                <li className="leading-tight">{proj.impact}</li>
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Certifications */}
      <section className="mb-6">
        <h2 className="text-lg font-bold uppercase border-b border-slate-900 mb-2">Certifications</h2>
        <ul className="list-disc ml-5 text-[12px] space-y-1 text-slate-800">
          {CERTIFICATIONS.map((cert, i) => (
            <li key={i} className="leading-tight">{cert}</li>
          ))}
        </ul>
      </section>

      {/* Achievements */}
      <section className="mb-6">
        <h2 className="text-lg font-bold uppercase border-b border-slate-900 mb-2">Achievements</h2>
        <ul className="list-none text-[12px] space-y-2 text-slate-800">
          {ACHIEVEMENTS.map((item, i) => {
             const parts = item.split(' - ');
             return (
               <li key={i} className="leading-tight">
                 <span className="font-bold">{parts[0]}</span>
                 {parts[1] && <span> - {parts[1]}</span>}
               </li>
             );
          })}
        </ul>
      </section>
      
      <style>{`
        @media screen {
          #resume-document {
             background-color: white !important;
             color: #0f172a !important;
          }
        }
        @media print {
          .page-break-before {
            page-break-before: always;
          }
          #resume-document {
            padding: 0 !important;
            margin: 0 !important;
            width: 100% !important;
          }
        }
      `}</style>
    </div>
  );
};

export default ResumeView;
