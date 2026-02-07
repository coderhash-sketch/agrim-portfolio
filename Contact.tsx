
import React, { useState } from 'react';
import { PERSONAL_INFO } from '../constants';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    try {
      // Note: Formspree will send a verification email to agrimgrg06@gmail.com after the first test submission.
      const response = await fetch("https://formspree.io/f/agrimgrg06@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(formState)
      });

      if (response.ok) {
        setStatus('success');
        setFormState({ name: '', email: '', message: '' });
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        throw new Error("Transmission failed");
      }
    } catch (error) {
      console.error("Transmission Error:", error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <div className="max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
        <div>
          <h2 className="text-4xl md:text-7xl font-black mb-10 tracking-tighter uppercase">Initiate <span className="text-rainbow-gradient">Contact</span></h2>
          <p className="text-slate-400 text-lg mb-12 leading-relaxed font-medium">
            Ready to collaborate on high-performance systems or discuss technical strategy? My communication channels are active.
          </p>
          
          <div className="space-y-8">
            <div className="flex items-center gap-6 group">
              <div className="w-14 h-14 rounded-2xl bg-slate-900 border border-white/5 flex items-center justify-center text-fuchsia-400 group-hover:bg-fuchsia-500 group-hover:text-[#020617] group-hover:neonic-shadow-pink transition-all duration-300">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-[0.2em] text-slate-500 font-black mb-1">Direct Email</p>
                <a href={`mailto:${PERSONAL_INFO.email}`} className="text-slate-200 text-xl font-black hover:text-fuchsia-400 transition-colors tracking-tighter">{PERSONAL_INFO.email}</a>
              </div>
            </div>

            <div className="flex items-center gap-6 group">
              <div className="w-14 h-14 rounded-2xl bg-slate-900 border border-white/5 flex items-center justify-center text-cyan-400 group-hover:bg-cyan-500 group-hover:text-[#020617] group-hover:neonic-shadow-cyan transition-all duration-300">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-[0.2em] text-slate-500 font-black mb-1">Mobile Interface</p>
                <a href={`tel:${PERSONAL_INFO.phone.replace(/\s+/g, '')}`} className="text-slate-200 text-xl font-black hover:text-cyan-400 transition-colors tracking-tighter">{PERSONAL_INFO.phone}</a>
              </div>
            </div>
            
            <div className="flex items-center gap-6 group">
              <div className="w-14 h-14 rounded-2xl bg-slate-900 border border-white/5 flex items-center justify-center text-lime-400 group-hover:bg-lime-500 group-hover:text-[#020617] group-hover:neonic-shadow-green transition-all duration-300">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-[0.2em] text-slate-500 font-black mb-1">Base Location</p>
                <p className="text-slate-200 text-xl font-black tracking-tighter uppercase">{PERSONAL_INFO.location}</p>
              </div>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="glass-panel p-10 rounded-3xl space-y-8 border border-white/5 relative group overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-1 bg-rainbow-gradient opacity-20 group-hover:opacity-100 transition-opacity"></div>
          
          {/* Honeypot field for spam protection */}
          <input type="text" name="_gotcha" style={{ display: 'none' }} />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <label className="block text-xs font-black text-slate-500 mb-3 uppercase tracking-[0.2em]">Full Name</label>
              <input 
                type="text" 
                name="name"
                required
                value={formState.name}
                onChange={(e) => setFormState({...formState, name: e.target.value})}
                className="w-full bg-[#0a0f1d] border border-white/5 rounded-xl px-5 py-4 text-slate-200 focus:outline-none focus:border-fuchsia-500 transition-all font-bold placeholder:text-slate-700"
                placeholder="AGRIM GARG"
              />
            </div>
            <div>
              <label className="block text-xs font-black text-slate-500 mb-3 uppercase tracking-[0.2em]">Email Address</label>
              <input 
                type="email" 
                name="email"
                required
                value={formState.email}
                onChange={(e) => setFormState({...formState, email: e.target.value})}
                className="w-full bg-[#0a0f1d] border border-white/5 rounded-xl px-5 py-4 text-slate-200 focus:outline-none focus:border-cyan-500 transition-all font-bold placeholder:text-slate-700"
                placeholder="RECRUITER@TECH.COM"
              />
            </div>
          </div>
          <div>
            <label className="block text-xs font-black text-slate-500 mb-3 uppercase tracking-[0.2em]">Message Body</label>
            <textarea 
              name="message"
              rows={5}
              required
              value={formState.message}
              onChange={(e) => setFormState({...formState, message: e.target.value})}
              className="w-full bg-[#0a0f1d] border border-white/5 rounded-xl px-5 py-4 text-slate-200 focus:outline-none focus:border-lime-500 transition-all resize-none font-bold placeholder:text-slate-700"
              placeholder="TRANSMIT YOUR INQUIRY..."
            ></textarea>
          </div>
          
          <button 
            type="submit" 
            disabled={status !== 'idle'}
            className={`w-full py-5 rounded-2xl font-black transition-all transform hover:scale-[1.02] active:scale-95 text-lg uppercase tracking-widest ${
              status === 'success' ? 'bg-green-500 text-white neonic-shadow-green' : 
              status === 'error' ? 'bg-red-500 text-white neonic-shadow-red' : 'bg-rainbow-gradient text-[#020617] neonic-shadow-pink'
            }`}
          >
            {status === 'idle' && 'TRANSMIT MESSAGE'}
            {status === 'sending' && 'TRANSMITTING DATA...'}
            {status === 'success' && 'SUCCESSFULLY TRANSMITTED'}
            {status === 'error' && 'TRANSMISSION FAILED - RETRY?'}
          </button>

          <p className="text-center text-[10px] text-slate-600 font-black uppercase tracking-widest mt-4">
            Encrypted tunnel established via Formspree API
          </p>
        </form>
      </div>
    </div>
  );
};

export default Contact;
