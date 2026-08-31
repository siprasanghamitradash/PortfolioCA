import React, { useState, useEffect } from "react";
import { FolderGit2, Star, ExternalLink, Activity } from "lucide-react";
import { BIO_DATA } from "../data/portfolioData";

interface GitHubUser {
  login: string;
  avatar_url: string;
  public_repos: number;
  followers: number;
  html_url: string;
  bio: string | null;
}

interface GitHubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
}

export const GitHubMatrix: React.FC = () => {
  const username = BIO_DATA.githubUsername;
  const [userProfile, setUserProfile] = useState<GitHubUser | null>(null);
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState(false);
  const [chartKey, setChartKey] = useState(Date.now());

  // Fetch actual GitHub data
  useEffect(() => {
    let isMounted = true;
    setLoading(true);

    Promise.all([
      fetch(`https://api.github.com/users/${username}`)
        .then((res) => (res.ok ? res.json() : null))
        .catch(() => null),
      fetch(
        `https://api.github.com/users/${username}/repos?sort=updated&per_page=6`,
      )
        .then((res) => (res.ok ? res.json() : []))
        .catch(() => []),
    ]).then(([userData, repoData]) => {
      if (isMounted) {
        setUserProfile(userData);
        setRepos(Array.isArray(repoData) ? repoData : []);
        setLoading(false);
        setChartKey(Date.now());
      }
    });

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <section
      id="github"
      aria-label="GitHub Activity"
      className="space-y-6 pt-6"
    >
      {/* Section Header */}
      <div className="border-b border-rose-500/20 pb-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-mono uppercase tracking-widest text-emerald-400 mb-2">
            <Activity className="w-3.5 h-3.5" />
            <span>GitHub Activity</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            GitHub Activity & Repositories
          </h2>
          <p className="text-slate-400 text-sm font-light">
            Directly connected to real GitHub commit history and active
            repositories.
          </p>
        </div>
      </div>

      {/* Main Heatmap & Profile Card */}
      <div className="glass-card-warm p-6 sm:p-8 rounded-3xl border-rose-500/20 space-y-6 relative overflow-hidden">
        {/* User Summary Info */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/5 pb-4">
          <div className="flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-2xl bg-[#140a10] border border-rose-500/30 flex items-center justify-center overflow-hidden">
              {userProfile?.avatar_url ? (
                <img
                  src={userProfile.avatar_url}
                  alt={username}
                  className="w-full h-full object-cover"
                />
              ) : (
                <svg
                  className="w-6 h-6 fill-current text-emerald-400"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  />
                </svg>
              )}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-base font-bold text-white">@{username}</h3>
                <span className="px-2 py-0.5 rounded-md bg-emerald-500/10 text-emerald-400 text-[10px] font-mono border border-emerald-500/20">
                  Live Sync
                </span>
              </div>
              <p className="text-xs font-mono text-slate-400 mt-0.5">
                {userProfile?.bio || "Full-Stack Developer & AI Builder"}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 text-xs font-mono">
            <div className="px-3 py-1.5 rounded-xl bg-white/5 border border-white/10 text-slate-300">
              <span className="text-emerald-400 font-bold">
                {userProfile?.public_repos ?? "—"}
              </span>{" "}
              public repos
            </div>
            <a
              href={`https://github.com/${username}`}
              target="_blank"
              rel="noreferrer"
              className="px-3 py-1.5 rounded-xl bg-white/5 border border-rose-500/30 text-rose-300 hover:text-white hover:border-rose-400 transition-colors flex items-center gap-1.5"
            >
              <span>Open GitHub</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Real Dynamic GitHub Contribution Chart */}
        <div className="space-y-2">
          <span className="text-xs font-mono text-slate-400 block">
            Actual GitHub Contribution Heatmap:
          </span>

          <div className="overflow-x-auto pb-2 custom-scrollbar p-4 rounded-2xl bg-black/40 border border-white/5 flex justify-center items-center min-h-[140px]">
            <img
              key={chartKey}
              src={`https://ghchart.rshah.org/006d32/${username}`}
              alt={`${username}'s real GitHub contribution chart`}
              className="min-w-[650px] w-full max-w-4xl object-contain filter drop-shadow-[0_0_10px_rgba(38,166,65,0.25)]"
              onError={(e) => {
                (e.target as HTMLElement).style.display = "none";
              }}
            />
          </div>
        </div>

        {/* Live Public Repositories */}
        {repos.length > 0 && (
          <div className="space-y-3 pt-2">
            <span className="text-xs font-mono text-slate-400 block">
              Recent Public Repositories:
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
              {repos.map((repo) => (
                <a
                  key={repo.id}
                  href={repo.html_url}
                  target="_blank"
                  rel="noreferrer"
                  className="p-4 rounded-2xl bg-black/40 border border-white/5 hover:border-rose-500/40 transition-all flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-1.5">
                      <span className="flex items-center gap-1">
                        <FolderGit2 className="w-3.5 h-3.5 text-rose-400" />
                        <span className="truncate max-w-[140px]">
                          {repo.name}
                        </span>
                      </span>
                      <span className="flex items-center gap-1 text-amber-300">
                        <Star className="w-3 h-3" />
                        <span>{repo.stargazers_count}</span>
                      </span>
                    </div>
                    <p className="text-xs text-slate-300 line-clamp-2 font-light">
                      {repo.description || "No description provided."}
                    </p>
                  </div>

                  <div className="flex items-center justify-between mt-3 pt-2 border-t border-white/5 text-[10px] font-mono text-slate-400">
                    <span className="text-amber-400">
                      {repo.language || "Code"}
                    </span>
                    <span className="text-rose-300 group-hover:text-white transition-colors flex items-center gap-1">
                      <span>View</span>
                      <ExternalLink className="w-3 h-3" />
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
