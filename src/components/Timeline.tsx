import React, { useState } from "react";
import {
  Award,
  GraduationCap,
  Code2,
  Calendar,
  CheckCircle2,
  Compass,
  ChevronDown,
} from "lucide-react";
import { MILESTONES, type Milestone } from "../data/portfolioData";

export const Timeline: React.FC = () => {
  const [activeTab, setActiveTab] = useState<
    "all" | "education" | "projects" | "awards"
  >("all");
  const [isExpanded, setIsExpanded] = useState(false);

  const filtered =
    activeTab === "all"
      ? MILESTONES
      : MILESTONES.filter((m) => {
          if (activeTab === "education") return m.type === "education";
          if (activeTab === "projects") return m.type === "project";
          if (activeTab === "awards") return m.type === "award";
          return true;
        });

  const getIcon = (type: Milestone["type"]) => {
    switch (type) {
      case "education":
        return <GraduationCap className="w-4 h-4 text-blue-400" />;
      case "award":
        return <Award className="w-4 h-4 text-amber-400" />;
      case "project":
        return <Code2 className="w-4 h-4 text-rose-400" />;
    }
  };

  const getBorderColor = (type: Milestone["type"]) => {
    switch (type) {
      case "education":
        return "border-blue-500/30 group-hover:border-blue-400/60";
      case "award":
        return "border-amber-500/30 group-hover:border-amber-400/60";
      case "project":
        return "border-rose-500/30 group-hover:border-rose-400/60";
    }
  };

  return (
    <section
      id="timeline"
      aria-label="Interactive Journey"
      className="space-y-8 pt-6"
    >
      {/* Header with Expand Button */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-rose-500/20 pb-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/20 text-xs font-mono uppercase tracking-widest text-amber-400 mb-2">
            <Compass className="w-3.5 h-3.5" />
            <span>Structured Career Path</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Academic & Engineering Journey
          </h2>
          <p className="text-slate-400 text-sm font-light">
            A clear timeline of education, international honors, and flagship
            software builds.
          </p>
        </div>

        {/* Expand/Collapse Button */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="self-start md:self-center px-4 py-2 rounded-xl bg-gradient-to-r from-rose-600 to-amber-500 text-white font-mono text-xs font-semibold hover:shadow-[0_0_15px_rgba(244,63,94,0.4)] flex items-center gap-2 transition-all"
        >
          <span>{isExpanded ? "Collapse" : "Expand"}</span>
          <ChevronDown
            className={`w-4 h-4 transition-transform ${isExpanded ? "rotate-180" : ""}`}
          />
        </button>
      </div>

      {/* Timeline Content - Collapsible */}
      {isExpanded && (
        <>
          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-2 pb-4">
            {(["all", "education", "awards", "projects"] as const).map(
              (tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-mono capitalize transition-all ${
                    activeTab === tab
                      ? "bg-gradient-to-r from-rose-600 to-amber-500 text-white font-bold shadow-[0_0_15px_rgba(244,63,94,0.4)]"
                      : "glass-card-warm text-slate-300 hover:text-white hover:border-rose-400/40"
                  }`}
                >
                  {tab === "all" ? "All Milestones" : tab}
                </button>
              ),
            )}
          </div>

          {/* Clean, Intuitive Vertical Connected Journey */}
          <div className="relative max-w-4xl mx-auto pl-4 sm:pl-8 space-y-6">
            {/* Continuous Spine Line */}
            <div className="absolute left-4 sm:left-8 top-3 bottom-3 w-0.5 bg-gradient-to-b from-rose-500 via-amber-500 to-rose-600"></div>

            {filtered.map((item) => (
              <div
                key={item.id}
                className="relative flex items-start gap-4 sm:gap-6 group"
              >
                {/* Spine Node Icon */}
                <div className="relative z-10 w-9 h-9 rounded-full bg-[#140a10] border-2 border-rose-500/70 group-hover:border-amber-400 group-hover:scale-110 flex items-center justify-center transition-all shadow-[0_0_12px_rgba(244,63,94,0.3)] shrink-0">
                  {getIcon(item.type)}
                </div>

                {/* Content Card */}
                <div
                  className={`w-full glass-card-warm p-5 sm:p-6 rounded-2xl border transition-all duration-300 ${getBorderColor(item.type)} group-hover:-translate-y-1`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/5 pb-3 mb-3">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-mono font-semibold text-amber-400 flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5" />
                          <span>{item.year}</span>
                        </span>
                        <span className="text-slate-500">•</span>
                        <span className="text-xs font-mono uppercase text-slate-400 capitalize">
                          {item.type}
                        </span>
                      </div>
                      <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-rose-400 transition-colors mt-0.5">
                        {item.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-300 font-medium">
                        {item.organization}
                      </p>
                    </div>

                    <div className="self-start sm:self-center">
                      <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono font-bold text-amber-300 shadow-sm">
                        {item.badge}
                      </span>
                    </div>
                  </div>

                  {/* Bullet Points */}
                  <ul className="space-y-1.5 text-xs text-slate-300 font-light mb-3">
                    {item.description.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-rose-400 shrink-0 mt-0.5" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-white/5 text-slate-400 border border-white/5"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </section>
  );
};
