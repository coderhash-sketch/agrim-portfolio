import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Blog from './components/Blog';
import Contact from './components/Contact';
import AIChatbot from './components/AIChatbot';
import Education from './components/Education';
import Achievements from './components/Achievements';
import ResumeView from './components/ResumeView';
import { PERSONAL_INFO } from './constants';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.2) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { 
        rootMargin: '-100px 0px -40% 0px',
        threshold: [0.2] 
      }
    );

    document.querySelectorAll('section[id]').forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="relative min-h-screen bg-[#020617] selection:bg-fuchsia-500/30 overflow-x-hidden">
      {/* Background Texture & Glows */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {/* Micro-dot Grid Layer */}
        <div className="absolute inset-0 opacity-[0.15]" 
             style={{ 
               backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255, 255, 255, 0.15) 1px, transparent 0)`, 
               backgroundSize: '40px 40px' 
             }}>
        </div>
        
        {/* Subtle Central Whitish Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_0%,transparent_70%)]"></div>

        {/* Decorative Auroras */}
        <div className="absolute top-0 left-0 w-[60vw] h-[60vh] bg-fuchsia-600/5 blur-[120px] rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-[60vw] h-[60vh] bg-cyan-600/5 blur-[120px] rounded-full translate-x-1/2 translate-y-1/2"></div>
      </div>

      <main className="relative z-10 print:hidden">
        <section id="hero" className="scroll-mt-0">
          <Hero />
        </section>

        <section id="projects" className="py-24 px-6 md:px-12 bg-slate-950/20 scroll-mt-24">
          <Projects />
        </section>

        <section id="skills" className="py-24 px-6 md:px-12 scroll-mt-24">
          <Skills />
        </section>

        <section id="experience" className="py-24 px-6 md:px-12 bg-slate-950/20 scroll-mt-24">
          <Experience />
        </section>

        <section id="education" className="py-24 px-6 md:px-12 scroll-mt-24">
          <Education />
        </section>

        <section id="resume-section" className="py-24 px-6 md:px-12 bg-slate-950/20 scroll-mt-24">
          <div className="max-w-4xl mx-auto">
            <div className="glass-panel p-12 rounded-3xl border border-white/5 text-center relative overflow-hidden group hover:border-fuchsia-500/30 transition-all duration-700">
              <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-500/5 via-transparent to-cyan-500/5 pointer-events-none"></div>
              
              <div className="relative z-10 flex flex-col items-center">
                <div className="w-20 h-20 bg-fuchsia-500/10 rounded-2xl flex items-center justify-center mb-8 border border-fuchsia-500/20 group-hover:neonic-shadow-pink transition-all">
                  <svg className="w-10 h-10 text-fuchsia-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
                </div>
                
                <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white uppercase tracking-tighter">Official Resume</h2>
                <p className="text-slate-400 text-lg mb-10 max-w-xl font-medium">
                  Open the ATS-optimized technical document for review and high-fidelity viewing.
                </p>
                
                <div className="flex flex-wrap gap-4 justify-center">
                  <button 
                    type="button"
                    onClick={() => setIsPreviewOpen(true)}
                    className="relative z-[100] w-full md:w-auto px-12 py-5 bg-rainbow-gradient text-slate-950 font-black rounded-2xl transition-all flex items-center justify-center gap-4 shadow-[0_10px_40px_rgba(255,0,255,0.3)] hover:scale-105 active:scale-95 cursor-pointer pointer-events-auto"
                  >
                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>
                    <span>PREVIEW RESUME</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="achievements" className="py-24 px-6 md:px-12 scroll-mt-24">
          <Achievements />
        </section>

        <section id="blog" className="py-24 px-6 md:px-12 bg-slate-950/20 scroll-mt-24">
          <Blog />
        </section>

        <section id="contact" className="py-24 px-6 md:px-12 scroll-mt-24 mb-24">
          <Contact />
        </section>
      </main>

      {/* Professional Resume Modal */}
      {isPreviewOpen && (
        <div className="fixed inset-0 z-[11000] flex items-center justify-center p-4 print:p-0">
          <div 
            className="absolute inset-0 bg-slate-950/95 backdrop-blur-xl print:hidden"
            onClick={() => setIsPreviewOpen(false)}
          ></div>
          <div className="relative w-full max-w-5xl h-[90vh] print:h-auto overflow-y-auto bg-white rounded-3xl shadow-2xl animate-in zoom-in duration-300 print:rounded-none print:shadow-none print:static">
            <div className="sticky top-0 right-0 p-4 flex justify-between items-center bg-slate-100 border-b border-slate-200 print:hidden">
               <span className="text-slate-500 font-black text-xs uppercase tracking-widest pl-4">ATS Professional Document View</span>
               <div className="flex gap-4">
                <button 
                  onClick={() => setIsPreviewOpen(false)}
                  className="text-slate-400 hover:text-slate-900 transition-colors p-2"
                >
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                </button>
               </div>
            </div>
            <div className="p-2 md:p-8 bg-white">
              <ResumeView />
            </div>
          </div>
        </div>
      )}

      {/* Separate Print-Only Hidden Section (Backup for direct calls) */}
      <div className="hidden print:block">
        <ResumeView />
      </div>

      <footer className="py-12 text-center text-slate-600 text-sm border-t border-white/5 print:hidden relative z-10 bg-[#020617]/80">
        <p>&copy; {new Date().getFullYear()} {PERSONAL_INFO.name}. <span className="text-rainbow-gradient font-bold">Neonic Engineering Mastery.</span></p>
      </footer>

      <Navbar activeSection={activeSection} />
      <AIChatbot />

      <style>{`
        @media print {
          html, body { 
            background: white !important; 
            color: black !important;
            margin: 0 !important; 
            padding: 0 !important;
            width: 100%;
          }
          #root > main, 
          #root > nav, 
          #root > footer, 
          #root > .chatbot-container, 
          #chatbot-root, 
          .fixed:not(.print\\:block) { 
            display: none !important; 
          }
          .print\\:hidden, .print\\:hidden * { 
            display: none !important; 
          }
          .print\\:block {
            display: block !important;
          }
          #root { background: white !important; }
          @page {
            size: A4;
            margin: 0.5cm;
          }
        }
      `}</style>
    </div>
  );
};

export default App;