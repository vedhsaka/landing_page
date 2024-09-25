'use client';
import React, { useState, useEffect } from "react";
import { Spotlight } from "../components/ui/spot-light";
import { DotPattern } from "../components/magicui/dot-pattern";
import ShimmerButton from "../components/magicui/shimmer-button";
import { PlaceholdersAndVanishInput } from "../components/ui/placeholder-and-vanish";
import { cn } from "../libs/utils";
import Integrations from "./integrations";
import FeaturesSection from "./features";
import Link from 'next/link';


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
        <div className="absolute top-0 left-0 right-0 h-16 bg-black z-40 flex justify-center items-center border-b border-gray-800">
          <div className="text-orange-500 text-xl font-bold">
            NotHotDog
          </div>
        </div>
        {/* <div className="absolute top-4 left-4 z-50">
          NotHotDog
        </div> */}
       {/* <div className="absolute top-4 right-4 z-50">
          <a href="https://www.producthunt.com/posts/nothotdog-alpha?embed=true&utm_source=badge-featured&utm_medium=badge&utm_souce=badge-nothotdog&#0045;alpha" target="_blank" rel="noopener noreferrer">
            <img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=474682&theme=light" 
                 alt="NotHotDog&#0032;&#0040;Alpha&#0041; - Test&#0032;your&#0032;LLM&#0032;powered&#0032;APIs&#0032;&#0038;&#0032;AI&#0032;agents | Product Hunt" 
                 style={{width: '250px', height: '54px'}} 
                 width="250" 
                 height="54" />
          </a>
        </div> */}
        <main className="relative z-10 flex h-screen flex-col items-center justify-center pt-16">
          <div className="text-center">
          <h2 className="mt-4 text-xl font-semibold text-neutral-200 md:text-2xl" style={{ lineHeight: '150px' }}>
              AI-First API Testing Tool
            </h2>
          <h1 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-orange-400 to-orange-700 bg-opacity-50 md:text-7xl">
            Test APIs. Fast
          </h1>
            
            <p className="mt-6 text-neutral-100 opacity-1 transition-opacity duration-300"
              style={{ width: '100%', margin: '1.5rem auto', color: 'silver', lineHeight: 1.5, fontSize: '122%' }}>
                Generate test cases, Document & Test APIs with Powerful AI.
            </p>
          </div>
          <div className="mt-12 w-full max-w-xl flex justify-center space-x-4">
          {!showForm ? (
            <>
              <ShimmerButton 
                className="shadow-2xl" 
                shimmerSize="0.08em"
                onClick={() => setShowForm(true)}
              >
                <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
                  Join the Waitlist
                </span>
              </ShimmerButton>
              <Link href="https://calendly.com/nehasuresh/1-1-discussion?">
                <ShimmerButton 
                  className="shadow-2xl" 
                  shimmerSize="0.08em"
                >
                  <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
                    Beta Onboarding
                  </span>
                </ShimmerButton>
              </Link>
            </>
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
      {/* <Integrations />
      <FeaturesSection /> */}
          
          
    {/* Footer
    <footer className="bg-black text-white text-center p-4 border-t border-gray-600 mt-4">
      <p>&copy; NotHotDog 2024</p>
    </footer> */}

    </div>
  );
}
