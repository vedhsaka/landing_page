import React from "react";
import { Spotlight } from "../components/ui/Spotlight";
import { DotPattern } from "../components/magicui/dot-pattern";
import ShimmerButton from "../components/magicui/shimmer-button";
import { cn } from "../libs/utils";

export default function Home() {
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
        <div className="mt-12"> {/* Increased top margin */}
          <ShimmerButton className="shadow-2xl" shimmerSize="0.08em">
            <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
              Join the Waitlist
            </span>
          </ShimmerButton>
        </div>
      </main>
    </div>
  );
}