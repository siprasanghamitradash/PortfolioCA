import React from 'react';
import { Sparkles, ArrowRight, Code2, Compass, GitCommit } from 'lucide-react';
import { BIO_DATA } from '../data/portfolioData';

export const Navbar: React.FC = () => {
  return (
    <header className="relative z-50 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-2">
      <nav className="glass-card-warm rounded-2xl px-5 py-3.5 flex items-center justify-between border-rose-500/20">
        <a href="#hero" className="flex items-center gap-3 group">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-rose-600 via-rose-500 to-amber-500 flex items-center justify-center font-mono font-bold text-white shadow-[0_0_15px_rgba(244,63,94,0.4)] group-hover:scale-105 transition-transform">
            SD
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-sm tracking-tight text-white group-hover:text-rose-400 transition-colors">
              {BIO_DATA.name}
            </span>
            <span className="text-[11px] font-mono text-slate-400">Full-Stack & AI Developer</span>
          </div>
        </a>

        <div className="hidden md:flex items-center gap-6 text-xs font-mono tracking-wider uppercase text-slate-300">
          <a href="#hero" className="hover:text-rose-400 transition-colors flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-rose-400" />
            <span>Overview</span>
          </a>
          <a href="#timeline" className="hover:text-amber-400 transition-colors flex items-center gap-1.5">
            <Compass className="w-3.5 h-3.5 text-amber-400" />
            <span>Journey</span>
          </a>
          <a href="#projects" className="hover:text-rose-400 transition-colors flex items-center gap-1.5">
            <Code2 className="w-3.5 h-3.5 text-rose-400" />
            <span>Projects</span>
          </a>
          <a href="#skills" className="hover:text-amber-400 transition-colors flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Skills</span>
          </a>
          <a href="#github" className="hover:text-emerald-400 transition-colors flex items-center gap-1.5">
            <GitCommit className="w-3.5 h-3.5 text-emerald-400" />
            <span>GitHub</span>
          </a>
        </div>

        <a 
          href="#contact" 
          className="px-4 py-2 rounded-xl bg-gradient-to-r from-rose-600 to-amber-500 text-white font-mono text-xs font-semibold hover:shadow-[0_0_20px_rgba(244,63,94,0.4)] hover:scale-105 transition-all flex items-center gap-1.5"
        >
          <span>Get In Touch</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </a>
      </nav>
    </header>
  );
};
