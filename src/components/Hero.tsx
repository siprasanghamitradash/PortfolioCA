import React, { useState, useEffect } from "react";
import { ArrowDown, MapPin, GraduationCap, Terminal, Mail } from "lucide-react";
import { BIO_DATA } from "../data/portfolioData";
import standingCutout from "../assets/profile_crop.jpg";

export const Hero: React.FC = () => {
  const [titleIndex, setTitleIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const fullText = BIO_DATA.titles[titleIndex];

    const handleTyping = () => {
      if (!isDeleting) {
        setCurrentText(fullText.substring(0, currentText.length + 1));
        if (currentText.length + 1 === fullText.length) {
          setTimeout(() => setIsDeleting(true), 1800);
        }
      } else {
        setCurrentText(fullText.substring(0, currentText.length - 1));
        if (currentText.length === 0) {
          setIsDeleting(false);
          setTitleIndex((prev) => (prev + 1) % BIO_DATA.titles.length);
        }
      }
    };

    const timer = setTimeout(handleTyping, isDeleting ? 45 : 100);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, titleIndex]);

  return (
    <section
      id="hero"
      aria-label="Hero Introduction"
      className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-4 items-center pt-2 md:pt-4"
    >
      {/* LEFT: Standing Portrait Cutout (NO FRAME, NO BOX) */}
      <div className="lg:col-span-5 flex justify-center items-center relative order-2 lg:order-1">
        <div className="relative w-full max-w-sm sm:max-w-md flex flex-col items-center">
          {/* Subtle Ambient Floor Glow & Back Aura */}
          <div className="absolute inset-0 bg-gradient-to-t from-rose-600/25 via-amber-500/15 to-transparent rounded-full blur-3xl opacity-75 pointer-events-none -bottom-10"></div>

          {/* Standing Cutout Image (Zero Box/Borders) */}
          <div className="relative z-10 w-64 sm:w-72 md:w-80 h-auto flex flex-col items-center group">
            <img
              src={standingCutout}
              alt={BIO_DATA.name}
              className="w-full h-auto object-contain rounded-2xl filter drop-shadow-[0_20px_35px_rgba(244,63,94,0.3)] transition-transform duration-500 hover:scale-[1.03]"
            />

            {/* Ground Reflection Shadow */}
            <div className="w-48 sm:w-56 h-4 bg-gradient-to-r from-transparent via-rose-500/40 to-transparent blur-md rounded-full mt-[-8px]"></div>

            {/* University Tag Badge directly under standing portrait */}
            <div className="mt-3 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 backdrop-blur-md border border-rose-500/30 shadow-lg text-xs font-mono">
              <GraduationCap className="w-3.5 h-3.5 text-amber-400" />
              <span className="text-slate-200">LPU • B.Tech CSE</span>
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT: Unconfined Bio & Interactive Typing Hero Info */}
      <div className="lg:col-span-7 flex flex-col space-y-3 text-left order-1 lg:order-2">
        {/* Status / Location Badge */}
        <div className="inline-flex items-center gap-2.5 self-start px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-rose-500/20 backdrop-blur-md">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
          <span className="text-xs font-mono text-slate-300 flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-rose-400" />
            <span>Punjab, India • Open for Roles & Collaboration</span>
          </span>
        </div>

        {/* Name */}
        <div className="space-y-1">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
            Hi, I'm <br />
            <span className="bg-gradient-to-r from-rose-400 via-pink-300 to-amber-400 bg-clip-text text-transparent filter drop-shadow-[0_4px_20px_rgba(225,29,72,0.35)]">
              {BIO_DATA.name}
            </span>
          </h1>

          {/* Animated Typewriter Role Effect */}
          <div className="h-9 sm:h-10 flex items-center pt-1">
            <span className="text-lg sm:text-2xl font-mono font-medium text-amber-400 tracking-wide flex items-center">
              <span>{currentText}</span>
              <span className="w-2 sm:w-2.5 h-5 sm:h-6 bg-rose-400 ml-1 inline-block animate-pulse"></span>
            </span>
          </div>
        </div>

        {/* Sincere Personal Statement */}
        <p className="text-base sm:text-lg text-slate-300/90 leading-relaxed font-light max-w-2xl text-justify sm:text-left">
          &ldquo;{BIO_DATA.personalStatement}&rdquo;
        </p>

        {/* Floating Tech Stack Pills */}
        <div className="space-y-2.5 pt-1">
          <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block">
            Core Toolkit
          </span>
          <div className="flex flex-wrap gap-2 sm:gap-2.5">
            {BIO_DATA.coreTech.map((tech) => (
              <div
                key={tech.name}
                className="glass-card-warm px-3.5 py-1.5 rounded-full flex items-center gap-2 hover:-translate-y-0.5 cursor-default border-rose-500/20"
              >
                <span
                  className="w-2 h-2 rounded-full"
                  style={{
                    backgroundColor: tech.color,
                    boxShadow: `0 0 8px ${tech.color}`,
                  }}
                ></span>
                <span className="text-xs font-medium text-slate-200">
                  {tech.name}
                </span>
                <span className="text-[9px] font-mono text-slate-400 px-1 py-0.2 rounded bg-white/5">
                  {tech.role}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="flex flex-wrap items-center gap-4 pt-1">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-rose-600 to-amber-500 text-white hover:shadow-[0_0_25px_rgba(244,63,94,0.5)] hover:scale-105 transition-all duration-300 font-mono text-xs uppercase tracking-wider font-semibold"
          >
            <Terminal className="w-4 h-4" />
            <span>Explore Projects</span>
          </a>

          <a
            href="#timeline"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/5 border border-rose-500/30 text-rose-300 hover:text-white hover:border-rose-400 hover:bg-white/10 transition-all duration-300 font-mono text-xs uppercase tracking-wider font-semibold"
          >
            <span>My Journey</span>
            <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
          </a>

          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 text-xs font-mono text-slate-400 hover:text-white transition-colors"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>Get in touch</span>
          </a>
        </div>
      </div>
    </section>
  );
};
