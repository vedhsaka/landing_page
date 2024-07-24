'use client';
import React, { useState, useEffect } from "react";
import { Spotlight } from "../components/ui/spot-light";
import { DotPattern } from "../components/magicui/dot-pattern";
import ShimmerButton from "../components/magicui/shimmer-button";
import { PlaceholdersAndVanishInput } from "../components/ui/placeholder-and-vanish";
import { cn } from "../libs/utils";
import Integrations from "./integrations";
import FeaturesSection from "./features";


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
    "Stay updated on NotHotDog's progress",
    "Be the first to know when we launch"
  ];

  return (
    <div className="bg-black">
      <div className="relative w-full  overflow-hidden bg-black">
        <Spotlight
          className="absolute inset-0 w-full h-full-0 opacity-0"
          fill="white"
        />
        <DotPattern
          width={20}
          height={20}
          cx={1}
          cy={1}
          cr={1}
          className={cn(
            "absolute inset-0 h-full w-full",
            "[mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)]"
          )}
        />
        <main className="relative z-10 flex h-screen flex-col items-center justify-center">
          <div className="text-center">
          <h1 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-orange-400 to-orange-700 bg-opacity-50 md:text-7xl">
            NotHotDog
          </h1>
            <h2 className="mt-4 text-xl font-semibold text-neutral-200 md:text-2xl">
              Automate Testing Of Your Voice Agents
            </h2>
            <p className="mt-6 text-neutral-200 opacity-0 transition-opacity duration-300"
              style={{ width: '60%', margin: '1.5rem auto' }}>
              Simplify testing your Voice AI Agents and Voice AI applications using NotHotDog. Effortlessly test and monitor voice APIs, WebSocket APIs, and conversational AI systems. Say goodbye to manual tasks and hello to automated, reusable voice test cases that accelerate feature deployment and enhance quality.
            </p>
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
              <div className="text-center text-white dark:text-white bg-transparent p-4 rounded-md">
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
        </main>
      </div>
      <Integrations />
  
      <FeaturesSection />
          
          
    {/* Footer */}
    <footer className="bg-black text-white text-center p-4 border-t border-gray-600 mt-4">
      <p>&copy; NotHotDog 2024</p>
      <p>
        <a href="/blog" className="text-white underline">
          Visit our Blog
        </a>
      </p>
    </footer>

    </div>
  );
}
