
import React, { useState, useRef, useEffect } from 'react';
import { getAIResponse } from '../geminiService';
import { PERSONAL_INFO } from '../constants';

interface Message {
  text: string;
  sender: 'user' | 'ai';
}

const AIChatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const firstName = PERSONAL_INFO.name.split(' ')[0];
  const initials = PERSONAL_INFO.name.split(' ').map(n => n[0]).join('');

  const [messages, setMessages] = useState<Message[]>([
    { text: `Hi! I'm ${firstName}'s AI assistant. Ask me anything about their engineering journey!`, sender: 'ai' }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMsg = input.trim();
    setMessages(prev => [...prev, { text: userMsg, sender: 'user' }]);
    setInput('');
    setIsTyping(true);

    const aiResponse = await getAIResponse(userMsg);
    
    setIsTyping(false);
    setMessages(prev => [...prev, { text: aiResponse, sender: 'ai' }]);
  };

  return (
    <div className="fixed bottom-8 right-8 z-[10000]">
      {isOpen ? (
        <div className="glass-panel w-[350px] md:w-[400px] h-[550px] rounded-3xl flex flex-col shadow-[0_30px_100px_rgba(0,0,0,0.8)] overflow-hidden animate-in fade-in slide-in-from-bottom-8 duration-500 border border-white/10">
          <div className="p-6 bg-[#0a0f1d] border-b border-white/5 flex justify-between items-center relative overflow-hidden">
             {/* Rainbow Header Glow */}
             <div className="absolute top-0 left-0 right-0 h-1 bg-rainbow-gradient"></div>
            
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-rainbow-gradient flex items-center justify-center text-[#020617] font-black text-sm shadow-lg">{initials}</div>
              <div>
                <h4 className="text-sm font-black text-white leading-none tracking-tight uppercase">{firstName} BOT</h4>
                <div className="flex items-center gap-1.5 mt-1">
                  <span className="w-2 h-2 bg-lime-500 rounded-full animate-pulse neonic-shadow-green"></span>
                  <span className="text-[10px] text-slate-400 font-black uppercase tracking-widest">Active Reasoning</span>
                </div>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-slate-500 hover:text-white transition-all hover:scale-125">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
            </button>
          </div>

          <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-6 bg-slate-950/20">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-4 rounded-2xl text-[13px] font-medium leading-relaxed ${
                  msg.sender === 'user' 
                    ? 'bg-rainbow-gradient text-slate-950 rounded-br-none shadow-lg' 
                    : 'bg-slate-900 text-slate-200 rounded-bl-none border border-white/5'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-slate-900 p-4 rounded-2xl rounded-bl-none border border-white/5 flex gap-1.5">
                  <span className="w-1.5 h-1.5 bg-fuchsia-500 rounded-full animate-bounce"></span>
                  <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full animate-bounce [animation-delay:0.2s]"></span>
                  <span className="w-1.5 h-1.5 bg-lime-500 rounded-full animate-bounce [animation-delay:0.4s]"></span>
                </div>
              </div>
            )}
          </div>

          <div className="p-6 border-t border-white/5 bg-[#0a0f1d]">
            <div className="flex gap-3">
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask about project architecture..."
                className="flex-1 bg-slate-950 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-cyan-500 transition-all font-medium"
              />
              <button 
                onClick={handleSend}
                className="bg-rainbow-gradient hover:scale-110 text-slate-950 p-3 rounded-xl transition-all shadow-xl active:scale-90"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </button>
            </div>
          </div>
        </div>
      ) : (
        <button 
          onClick={() => setIsOpen(true)}
          className="w-20 h-20 bg-rainbow-gradient hover:scale-110 rounded-3xl flex items-center justify-center shadow-[0_0_50px_rgba(255,0,255,0.4)] transition-all transform group border-4 border-[#020617]"
        >
          <div className="absolute -top-14 right-0 bg-[#0a0f1d] text-white text-[10px] font-black tracking-widest px-4 py-2 rounded-xl whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all border border-white/10 uppercase translate-y-2 group-hover:translate-y-0">
            Talk to AI assistant
          </div>
          <svg className="w-10 h-10 text-slate-950" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path></svg>
        </button>
      )}
    </div>
  );
};

export default AIChatbot;