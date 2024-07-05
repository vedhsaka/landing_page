"use client";

import { cn } from "../libs/utils";
import { AnimatedBeam, AnimatedBeamProps } from "../components/magicui/animatedbeam";
import { useRef, useEffect } from "react";
import { HomeSection } from "../components/HomeSection";
import Image, { StaticImageData } from "next/image";
import { Header } from "../components/Header";
import React, { forwardRef, ReactNode } from 'react';

// Import your logo images
import ChatGPTIcon from "../components/img/chatgpt.png";
import GitHubIcon from "../components/img/github.png";
import GitLabIcon from "../components/img/gitlab.png";
import JenkinsIcon from "../components/img/jenkins.svg";
import DeepgramIcon from "../components/img/deepgram.png";
import FlameIcon from "../components/img/flame.png";
import ClaudeIcon from "../components/img/claude.png";

interface LogoProps {
  src?: string | StaticImageData;
  alt?: string;
  size?: number;
  children?: ReactNode;
}

const Logo = forwardRef<HTMLDivElement, LogoProps>(
  ({ src, alt, size = 30, children }, ref) => (
    <div ref={ref} className="flex h-12 w-14 items-center justify-center rounded-full border-2 bg-white dark:bg-slate-200">
      {src ? (
        <Image src={src} alt={alt || ''} width={size} height={size} />
      ) : (
        children
      )}
    </div>
  )
);

Logo.displayName = 'Logo';

export default function Integrations() {
  const containerRef = useRef<HTMLDivElement>(null);
  const flameRef = useRef<HTMLDivElement>(null);
  const apiRef = useRef<HTMLDivElement>(null);
  const logoRefs = {
    chatGPT: useRef<HTMLDivElement>(null),
    deepgram: useRef<HTMLDivElement>(null),
    claude: useRef<HTMLDivElement>(null),
    gitHub: useRef<HTMLDivElement>(null),
    gitLab: useRef<HTMLDivElement>(null),
    jenkins: useRef<HTMLDivElement>(null),
  };

  useEffect(() => {
    // Add a simple fade-in animation for the text
    const header = document.querySelector('.integration-header');
    if (header) {
      header.classList.add('animate-fade-in');
    }
  }, []);

  return (
    <HomeSection>
      {/* <Header
        title="Leverage the most widely used tools with seamless integrations to streamline your testing workflows."
        className="text-white" // Updated text color to white
      /> */}

      <Header
        title="Leverage the most widely used tools with seamless integrations to streamline your testing workflows."
        className="text-white text-3xl md:text-4xl lg:text-5xl font-bold tracking-wide leading-tight"
        style={{
            fontFamily: "'Inter', 'Helvetica', 'Arial', sans-serif",
            textShadow: '0 2px 4px rgba(0,0,0,0.1)'
        }}
      />



      <div
        className="relative flex w-full mx-auto max-w-3xl items-center justify-between overflow-hidden rounded bg-transparent py-4 px-2 md:p-12 h-[400px]" // Updated background to transparent
        ref={containerRef}
      >
        {/* Left side API logo */}
        <div className="absolute left-4 top-1/2 -translate-y-1/2 z-10">
          <Logo ref={apiRef}>
            <span className="text-sm font-bold text-black">API</span>
          </Logo>
        </div>

        {/* Center Flame logo */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
          <Logo src={FlameIcon} alt="Flame" size={60} ref={flameRef} />
        </div>

        {/* Right side logos */}
        <div className="flex flex-col flex-wrap h-full/4 items-end justify-between gap-4 z-10 absolute right-4 top-4 bottom-4">
          <Logo src={JenkinsIcon} alt="Jenkins" ref={logoRefs.jenkins} />
          <Logo src={GitHubIcon} alt="GitHub" ref={logoRefs.gitHub} />
          <Logo src={GitLabIcon} alt="GitLab" ref={logoRefs.gitLab} />
          <Logo src={ChatGPTIcon} alt="ChatGPT" ref={logoRefs.chatGPT} />
          <Logo src={DeepgramIcon} alt="Deepgram" ref={logoRefs.deepgram} />
          <Logo src={ClaudeIcon} alt="Claude" ref={logoRefs.claude} />
        </div>

        {/* Animated beams */}
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={apiRef}
          toRef={flameRef}
          duration={4}
          className="bg-transparent" 
        />
        {Object.values(logoRefs).map((ref, index) => (
          <AnimatedBeam
            key={index}
            containerRef={containerRef}
            fromRef={ref}
            toRef={flameRef}
            duration={4}
            className="bg-transparent"
          />
        ))}
      </div>
    </HomeSection>
  );
}
