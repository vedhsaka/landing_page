"use client";
import React, { useRef, useState, useEffect } from "react";
import { Spotlight } from "../components/ui/Spotlight";
import { DotPattern } from "../components/magicui/dot-pattern";
import ShimmerButton from "../components/magicui/shimmer-button";
import { AnimatedBeam } from "../components/magicui/animated-beam";
import { PlaceholdersAndVanishInput } from "../components/ui/placeholder-and-vanish";
import { cn } from "../libs/utils";
import Image from 'next/image';



import Icon1 from './claude_app_icon.png';
import Icon2 from './icon-2.png';
import Icon3 from './icon-3.jpeg';
import OutputIcon1 from './github.png';
import OutputIcon2 from './gitlab-icon.webp';
import OutputIcon3 from './jenkins.png';

export default function HomeContent() {
  const [showForm, setShowForm] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (isSubmitted) {
      const timer = setTimeout(() => {
        setIsSubmitted(false);
      }, 5000); // 5 seconds

      // Cleanup the timer on component unmount
      return () => clearTimeout(timer);
    }
  }, [isSubmitted]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;

    const formData = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: 'POST',
        body: formData
      });

      if (response.ok) {
        setIsSubmitted(true); // Set the submission status to true
      } else {
        console.error('Form submission error:', response.statusText);
      }
    } catch (error) {
      console.error('Form submission error:', error);
    }
  };

  const placeholders = [
    "Enter your email to join the waitlist",
    "Stay updated on Flame's progress",
    "Be the first to know when we launch"
  ];

  const containerRef = useRef<HTMLDivElement>(null);
  const inputRefs = [useRef<HTMLDivElement>(null), useRef<HTMLDivElement>(null), useRef<HTMLDivElement>(null)];
  const flameRef = useRef<HTMLDivElement>(null);
  const outputRefs = [useRef<HTMLDivElement>(null), useRef<HTMLDivElement>(null), useRef<HTMLDivElement>(null)];
  const inputIcons = [Icon1, Icon2, Icon3];
  const outputIcons = [OutputIcon1, OutputIcon2, OutputIcon3];

  return (
    <div ref={containerRef} className="relative w-full min-h-screen overflow-hidden bg-black">
      <Spotlight className="absolute inset-0 w-full h-full opacity-0" fill="white" />
      <DotPattern
        width={20} height={20} cx={1} cy={1} cr={1}
        className={cn("absolute inset-0 h-full w-full",
          "[mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)]")}
      />
      <main className="relative z-10 flex flex-col items-center justify-start pt-20 min-h-screen">
        <div className="text-center mb-12">
          <h1 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 md:text-7xl">
            Flame
          </h1>
          <h2 className="mt-4 text-xl font-semibold text-neutral-200 md:text-2xl">
            Automate your voice API testing
          </h2>
        </div>
        <div className="mt-12 w-full max-w-md">
          {!showForm ? (
            <ShimmerButton 
              className="shadow-2xl w-1/2 mx-auto" 
              shimmerSize="0.08em"
              onClick={() => setShowForm(true)}
            >
              <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
                Join the Waitlist
              </span>
            </ShimmerButton>
          ) : isSubmitted ? (
            <div className="text-center text-black dark:text-white bg-transparent p-4 rounded-md">
              Thank you, we will get back to you.
            </div>
          ) : (
            <PlaceholdersAndVanishInput
              placeholders={placeholders}
              onChange={() => {}}
              onSubmit={handleSubmit}
              formAction="https://getlaunchlist.com/s/aOgdIk"
            />
          )}
          </div>


        <div className="flex justify-between items-center w-full max-w-4xl px-4" style={{ marginTop: "300px" }}>
          <div className="flex flex-col space-y-8">
              {inputRefs.map((ref, index) => (
                <div key={`input-${index}`} ref={ref} className="w-32 h-12 rounded flex items-center justify-center text-white">
                  
                  <Image 
                    src={inputIcons[index]} 
                    alt={`Input ${index + 1}`} 
                    width={44} 
                    height={44} 
                    className="mr-2"
                  />
                </div>
              ))}

      
           
            </div>
          <div 
            ref={flameRef} 
            className="relative w-200 h-100 bg-white flex items-center justify-center text-black text-2xl font-bold border-4 border-shiny shadow-xl"
            style={{ zIndex: "300" }}
            >
            Flame
          </div>


          <div className="flex flex-col space-y-8">
            {outputRefs.map((ref, index) => (
              <div key={`output-${index}`} ref={ref} className="w-32 h-12 rounded flex items-center justify-center text-white">

<Image 
                src={outputIcons[index]} 
                alt={`Output ${index + 1}`} 
                width={44} 
                height={44} 
                className="mr-2"
              />
                Output {index + 1}
              </div>
            ))}
          </div>
        </div>
        
      

        {inputRefs.map((fromRef, index) => (
        <AnimatedBeam
          key={`input-beam-${index}`}
          containerRef={containerRef}
          fromRef={fromRef}
          toRef={flameRef}
          curvature={10}
          duration={2 + index}
          delay={0.2 * index}
          gradientStartColor={`hsl(${index * 40}, 100%, 50%)`}
          gradientStopColor={`hsl(${index * 40 + 20}, 100%, 50%)`}
          Icon={inputIcons[index]}  // Add this line to include the icon
        />
      ))}

        {outputRefs.map((toRef, index) => (
          <AnimatedBeam
            key={`output-beam-${index}`}
            containerRef={containerRef}
            fromRef={flameRef}
            toRef={toRef}
            curvature={10}
            duration={5 + index}
            delay={0.8 * index}
            gradientStartColor={`hsl(${index * 40 + 180}, 100%, 50%)`}
            gradientStopColor="#1A237E"
            Icon={outputIcons[index]}  // Add this line to include the icon
          />
        ))}

        
      </main>
    </div>
  );
}
