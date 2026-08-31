import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Timeline } from './components/Timeline';
import { Projects } from './components/Projects';
import { TechStack } from './components/TechStack';
import { GitHubMatrix } from './components/GitHubMatrix';
import { Contact } from './components/Contact';
import { BIO_DATA } from './data/portfolioData';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#0c070a] text-slate-100 font-sans antialiased selection:bg-rose-500/30 selection:text-rose-300 overflow-x-hidden relative ember-grid">
      
      {/* Ambient Glowing Orbs */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute w-[500px] h-[500px] bg-rose-600/15 blur-[140px] top-[-10%] left-[-10%] animate-pulse-warm"></div>
        <div className="absolute w-[550px] h-[550px] bg-amber-500/12 blur-[150px] top-[35%] right-[-15%] animate-pulse-warm" style={{ animationDelay: '2s' }}></div>
        <div className="absolute w-96 h-96 bg-pink-500/12 blur-[130px] bottom-[-10%] left-[20%] animate-pulse-warm" style={{ animationDelay: '3.5s' }}></div>
      </div>

      <Navbar />

      {/* Main Container */}
      <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-14 flex flex-col gap-12">
        
        {/* 1. Hero Section (Free standing cutout, typewriter effect, hobbies) */}
        <Hero />

        {/* 2. Structured Academic & Career Timeline */}
        <Timeline />

        {/* 3. Flagship Projects with accurate tech stacks */}
        <Projects />

        {/* 4. Grounded Technical Skills */}
        <div id="skills">
          <TechStack />
        </div>

        {/* 5. Live Synchronized GitHub Contribution Matrix (Placed at the end before contact) */}
        <GitHubMatrix />

        {/* 6. Contact & Direct Connect Hub */}
        <Contact />

        {/* Clean Footer (No antigravity branding) */}
        <footer className="text-center pt-4 pb-8 border-t border-rose-500/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-rose-500 shadow-[0_0_8px_#f43f5e]"></span>
            <span>{BIO_DATA.name} — Personal Portfolio</span>
          </div>
          <div className="flex items-center gap-4 text-slate-400">
            <span className="hover:text-rose-400 transition-colors">Python • React • Tkinter • Node.js</span>
            <span>|</span>
            <span className="text-slate-500">Lovely Professional University</span>
          </div>
        </footer>
      </main>

    </div>
  );
};

export default App;
