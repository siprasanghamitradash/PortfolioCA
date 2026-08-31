import React from 'react';
import { Sparkles, Code2, Wrench, BookOpen, Layers } from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

export const TechStack: React.FC = () => {
  const getIcon = (idx: number) => {
    switch (idx) {
      case 0: return <Code2 className="w-5 h-5 text-amber-400" />;
      case 1: return <Layers className="w-5 h-5 text-rose-400" />;
      case 2: return <Wrench className="w-5 h-5 text-emerald-400" />;
      case 3: return <BookOpen className="w-5 h-5 text-pink-400" />;
      default: return <Code2 className="w-5 h-5 text-amber-400" />;
    }
  };

  return (
    <section aria-label="Technical Skills" className="space-y-8 pt-6">
      
      <div className="text-center space-y-2 max-w-2xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-rose-500/20 text-xs font-mono uppercase tracking-widest text-rose-300">
          <Sparkles className="w-3.5 h-3.5 text-rose-400" />
          <span>Technical Toolkit</span>
        </div>
        <h2 className="text-3xl font-extrabold text-white tracking-tight">
          Skills & Technologies
        </h2>
        <p className="text-slate-400 text-sm font-light">
          Grounded competencies in programming, full-stack frameworks, desktop tools, and computer science fundamentals.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {SKILL_CATEGORIES.map((cat, idx) => (
          <div key={cat.name} className="glass-card-warm p-6 rounded-3xl border-rose-500/20 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2.5 mb-4">
                <div className="p-2.5 rounded-xl bg-white/5 border border-white/10">
                  {getIcon(idx)}
                </div>
                <h3 className="font-bold text-sm text-white">{cat.name}</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2.5 py-1 rounded-lg bg-white/5 text-xs font-mono text-slate-200 border border-white/5 hover:border-rose-400/40 hover:text-white transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
};
