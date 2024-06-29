'use client';
import React, { useState, useEffect } from "react";
import { Spotlight } from "../components/ui/Spotlight";
import { DotPattern } from "../components/magicui/dot-pattern";
import ShimmerButton from "../components/magicui/shimmer-button";
import { PlaceholdersAndVanishInput } from "../components/ui/placeholder-and-vanish";
import { cn } from "../libs/utils";

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
        console.log('Form submitted successfully');
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

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      <Spotlight
        className="absolute inset-0 w-full h-full opacity-0"
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
          <h1 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 md:text-7xl">
            Flame
          </h1>
          <h2 className="mt-4 text-xl font-semibold text-neutral-200 md:text-2xl">
            Automate your voice API testing
          </h2>
        </div>
        <div className="mt-12 w-full/2 max-w-md">
          {!showForm ? (
            <ShimmerButton 
              className="shadow-2xl w-full" 
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
      </main>
    </div>
  );
}
