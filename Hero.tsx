
import React from 'react';
import { PERSONAL_INFO } from '../constants';

const Hero: React.FC = () => {
  const initials = PERSONAL_INFO.name.split(' ').map(n => n[0]).join('');
  const profilePic = (PERSONAL_INFO as any).profilePicture;
  const hasProfilePicture = !!profilePic;

  return (
    <div className="min-h-screen flex flex-col justify-center items-center text-center px-6 pt-20 relative overflow-hidden">
      <div className="relative inline-block mb-10 group">
        {/* Animated Rotating Rainbow Ring */}
        <div className="absolute inset-0 bg-rainbow-gradient rounded-full blur-2xl opacity-40 group-hover:opacity-70 transition-opacity animate-spin-slow"></div>
        <div className="absolute -inset-1 bg-rainbow-gradient rounded-full animate-spin-slow"></div>
        
        {/* Profile Image Container */}
        <div className="relative w-32 h-32 md:w-44 md:h-44 rounded-full border-4 border-[#020617] shadow-2xl overflow-hidden bg-[#0a0f1d] flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
          {hasProfilePicture ? (
            <img 
              src={profilePic} 
              alt={PERSONAL_INFO.name}
              className="w-full h-full object-cover scale-[3.4] translate-y-[5%]" // High zoom + offset to perfectly frame the face
              style={{ objectPosition: 'center 10%' }} // Targets the head area of your vertical photo
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
                const parent = target.parentElement;
                if (parent && !parent.querySelector('.initials-fallback')) {
                  const span = document.createElement('span');
                  span.className = "initials-fallback text-rainbow-gradient text-4xl md:text-5xl font-black";
                  span.innerText = initials;
                  parent.appendChild(span);
                }
              }}
            />
          ) : (
            <span className="text-rainbow-gradient text-4xl md:text-5xl font-black text-white">
              {initials}
            </span>
          )}
        </div>
      </div>
      
      <h1 className="text-4xl md:text-8xl font-black mb-6 tracking-tighter">
        Hi, I'm <span className="text-rainbow-gradient">{PERSONAL_INFO.name}</span>
      </h1>
      
      <p className="max-w-3xl text-lg md:text-2xl text-slate-400 mb-12 leading-relaxed font-medium">
        {PERSONAL_INFO.impactStatement}
      </p>
      
      <div className="flex flex-wrap gap-6 justify-center relative z-[100]">
        <button 
          type="button"
          onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
          className="px-10 py-4 bg-rainbow-gradient text-slate-950 font-black rounded-xl transition-all transform hover:scale-110 hover:rotate-1 active:scale-95 shadow-[0_0_30px_rgba(0,255,255,0.3)] cursor-pointer"
        >
          EXPLORE WORK
        </button>
        <button 
          type="button"
          onClick={() => document.getElementById('resume-section')?.scrollIntoView({ behavior: 'smooth' })}
          className="px-10 py-4 bg-transparent hover:bg-white/5 text-white font-black rounded-xl transition-all transform hover:scale-110 flex items-center gap-3 cursor-pointer border-2 border-white/20 hover:border-fuchsia-500 shadow-xl"
        >
          <svg className="w-6 h-6 text-fuchsia-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
          VIEW RESUME
        </button>
      </div>

      <div className="mt-20 flex flex-wrap justify-center gap-x-8 gap-y-6 text-slate-500 relative z-[100] max-w-4xl mx-auto px-4">
        <a 
          href={PERSONAL_INFO.socials.github} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="flex items-center gap-2 hover:text-fuchsia-400 hover:scale-110 transition-all font-bold group"
        >
          <svg className="w-6 h-6 group-hover:neonic-shadow-pink rounded-full" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
          </svg>
          <span className="hidden sm:inline">GitHub</span>
        </a>
        <a 
          href={PERSONAL_INFO.socials.linkedin} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="flex items-center gap-2 hover:text-cyan-400 hover:scale-110 transition-all font-bold group"
        >
          <svg className="w-6 h-6 group-hover:neonic-shadow-cyan rounded-sm" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
          </svg>
          <span className="hidden sm:inline">LinkedIn</span>
        </a>
        <a 
          href={PERSONAL_INFO.socials.instagram} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="flex items-center gap-2 hover:text-lime-400 hover:scale-110 transition-all font-bold group"
        >
          <svg className="w-6 h-6 group-hover:neonic-shadow-green rounded-lg" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
          </svg>
          <span className="hidden sm:inline">Instagram</span>
        </a>
        <a 
          href={PERSONAL_INFO.socials.leetcode} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="flex items-center gap-2 hover:text-orange-400 hover:scale-110 transition-all font-bold group"
        >
          <svg className="w-6 h-6 group-hover:drop-shadow-[0_0_8px_rgba(251,146,60,0.8)] transition-all" fill="currentColor" viewBox="0 0 24 24">
            <path d="M13.483 0a1.374 1.374 0 0 0-.961.41L7.116 5.819l-3.832 3.831a1.376 1.376 0 1 0 1.947 1.946l3.833-3.832 4.404-4.403a1.371 1.371 0 0 0-.985-2.361zM4.322 8.358a1.375 1.375 0 0 0-.96.411L.411 11.72a1.376 1.376 0 0 0 0 1.947l2.951 2.951a1.376 1.376 0 0 0 1.947 0l2.951-2.951a1.376 1.376 0 0 0 0-1.947L4.322 8.358zM15.803 10.8a1.376 1.376 0 0 0-1.376 1.376v2.29l-3.21 3.209a1.376 1.376 0 1 0 1.947 1.947l3.209-3.21v-4.16a1.376 1.376 0 0 0-1.376-1.376z"/>
          </svg>
          <span className="hidden sm:inline">LeetCode</span>
        </a>
        <a 
          href={(PERSONAL_INFO.socials as any).codechef} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="flex items-center gap-2 hover:text-amber-600 hover:scale-110 transition-all font-bold group"
        >
          <svg className="w-6 h-6 group-hover:drop-shadow-[0_0_8px_rgba(180,83,9,0.8)] transition-all" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0L2 10l2 2l8-8l8 8l2-2L12 0zM4 12v10h16V12h-2v8H6v-8H4z M12 6a3 3 0 100 6 3 3 0 000-6z"/>
          </svg>
          <span className="hidden sm:inline">CodeChef</span>
        </a>
      </div>

      <style>{`
        .animate-spin-slow { animation: spin 8s linear infinite; }
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
      `}</style>
    </div>
  );
};

export default Hero;
