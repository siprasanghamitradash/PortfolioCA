import React, { useState } from 'react';
import { ExternalLink, Code2 } from 'lucide-react';
import { PROJECTS, type Project } from '../data/portfolioData';

export const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const categories = ['All', 'AI / Machine Learning', 'Desktop App', 'Web Platform'];

  const filtered = selectedCategory === 'All'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === selectedCategory);

  return (
    <section id="projects" aria-label="Flagship Projects" className="space-y-8 pt-6">
      
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-rose-500/20 pb-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/20 text-xs font-mono uppercase tracking-widest text-rose-400 mb-2">
            <Code2 className="w-3.5 h-3.5" />
            <span>Featured Engineering Work</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Flagship Projects
          </h2>
          <p className="text-slate-400 text-sm font-light">
            Direct showcase of AI computer vision models, full CRUD desktop tools, and award-winning platforms.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 rounded-xl text-xs font-mono transition-all ${
                selectedCategory === cat
                  ? 'bg-gradient-to-r from-rose-600 to-amber-500 text-white font-bold shadow-[0_0_15px_rgba(244,63,94,0.4)]'
                  : 'glass-card-warm text-slate-300 hover:text-white hover:border-rose-400/40'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {filtered.map((project: Project) => (
          <div
            key={project.id}
            className="glass-card-warm p-6 rounded-3xl border-rose-500/20 flex flex-col justify-between group hover:-translate-y-1.5 hover:border-rose-500/50 transition-all duration-300 relative overflow-hidden"
          >
            <div>
              {/* Category & Badge */}
              <div className="flex items-center justify-between text-xs font-mono text-rose-300 mb-3">
                <span className="px-2.5 py-1 rounded-full bg-rose-500/10 border border-rose-500/20">
                  {project.category}
                </span>
                {project.badge && (
                  <span className="text-amber-300 text-[11px] font-bold">
                    {project.badge}
                  </span>
                )}
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold text-white group-hover:text-rose-400 transition-colors">
                {project.title}
              </h3>

              {/* Role */}
              {project.role && (
                <p className="text-xs font-mono text-amber-400/90 mt-1">
                  {project.role}
                </p>
              )}

              {/* Description */}
              <p className="text-xs text-slate-300 mt-2.5 leading-relaxed font-light">
                {project.description}
              </p>

              {/* Accurate Tech Stack Pills */}
              <div className="space-y-1.5 mt-5">
                <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">
                  Tech Stack:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="text-[11px] font-mono px-2.5 py-1 rounded-lg bg-white/5 text-amber-200 border border-white/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Footer / GitHub Link */}
            <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-mono text-rose-300 hover:text-white transition-colors"
              >
                <span>View on GitHub</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
};
