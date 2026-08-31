import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';
import { BIO_DATA } from '../data/portfolioData';

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(BIO_DATA.email).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    });
  };

  return (
    <section id="contact" aria-label="Contact & Connect" className="pt-8">
      <div className="glass-card-warm p-8 sm:p-12 rounded-3xl border-rose-500/30 text-center relative overflow-hidden">
        
        {/* Ambient Backlight */}
        <div className="absolute -top-24 -left-24 w-72 h-72 bg-rose-600/20 blur-3xl pointer-events-none"></div>
        <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-amber-500/20 blur-3xl pointer-events-none"></div>

        <div className="max-w-2xl mx-auto space-y-6 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-rose-500/30 text-xs font-mono uppercase tracking-widest text-amber-400">
            <span>Ready for High-Impact Collaboration</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Let's Build Something Intelligent Together
          </h2>

          <p className="text-slate-300 text-sm sm:text-base font-light">
            Whether you are looking for an AI engineer, a full-stack architect, or a collaborative builder to solve complex technical challenges, I'd love to connect.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <button
              onClick={handleCopy}
              className="px-6 py-3 rounded-2xl bg-gradient-to-r from-rose-600 to-amber-500 text-white font-mono text-sm font-bold shadow-[0_0_25px_rgba(244,63,94,0.4)] hover:scale-105 transition-all flex items-center gap-2 cursor-pointer"
            >
              {copied ? <Check className="w-4 h-4 text-white" /> : <Copy className="w-4 h-4" />}
              <span>{copied ? 'Copied to Clipboard! ✓' : 'Copy Email Address'}</span>
            </button>

            <a
              href={BIO_DATA.github}
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3 rounded-2xl bg-white/5 border border-rose-500/30 text-white hover:bg-white/10 hover:border-rose-400 font-mono text-sm font-medium transition-all flex items-center gap-2"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
              <span>GitHub Profile</span>
            </a>

            <a
              href={BIO_DATA.linkedin}
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3 rounded-2xl bg-white/5 border border-rose-500/30 text-white hover:bg-white/10 hover:border-rose-400 font-mono text-sm font-medium transition-all flex items-center gap-2"
            >
              <svg className="w-4 h-4 fill-current text-blue-400" viewBox="0 0 24 24">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.3a1.59 1.59 0 1 0 0 3.18 1.59 1.59 0 0 0 0-3.18z" />
              </svg>
              <span>LinkedIn</span>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};
