import React, { forwardRef } from "react";
import { Spotlight } from "../components/ui/Spotlight";
import { DotPattern } from "../components/magicui/dot-pattern"
import { cn } from "../libs/utils"
// import { AnimatedBeamDemo } from "../components/magicui/animatedbeam";
// import { AnimatedShinyText } from "../components/magicui/animated-shiny-text"
import ShimmerButton, { ShimmerButtonProps } from "../components/magicui/shimmer-button";
import { AnimatedBeam } from "../components/magicui/animated-beam";

export function AnimatedBeamDemo() {
  const containerRef = useRef<HTMLDivElement>(null);
  const div1Ref = useRef<HTMLDivElement>(null);
  const div2Ref = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={containerRef}
      className="relative flex h-full w-full justify-between"
    >
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div1Ref}
        toRef={div2Ref}
      />
      <div
        ref={div1Ref}
        className="z-10 h-10 w-10 rounded-full bg-white shadow-xl"
      />
      <div
        ref={div2Ref}
        className="z-10 h-10 w-10 rounded-full bg-white shadow-xl"
      />
    </div>
  );
}



function SpotlightPreview() {
  return (
    <div className="h-[40rem] w-full rounded-md flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <div className=" p-4 max-w-7xl mx-auto relative z-10 w-full pt-20 md:pt-0">
        <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
          Flame <br /> Automate your voice API testing
        </h1>
      </div>
    </div>
  );
}


export function ShimmerButtonDemo() {
  return (
    <div className="z-10 flex min-h-[16rem] items-center justify-center">
      <ShimmerButton className="shadow-2xl" shimmerSize="0.08em">
        <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
          Join the Waitlist
        </span>
      </ShimmerButton>
    </div>
  );
}


const DotPatternDemo = () => {
  return (
    <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-lg border bg-background p-20 md:shadow-xl">
      <p className="z-10 whitespace-pre-wrap text-center text-5xl font-medium tracking-tighter text-black dark:text-white">
        Dot Pattern
      </p>
      <DotPattern
        width={20}
        height={20}
        cx={1}
        cy={1}
        cr={1}
        className={cn(
          "[mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)] ",
        )}
      />
    </div>
  );
};

export default function Home() {
  return (
    <div className="relative w-full min-h-screen">
            

      <main className="z-10 flex min-h-screen flex-col items-center justify-between">
      <DotPattern/>
      <SpotlightPreview />
       <ShimmerButtonDemo/>
       <AnimatedBeam/>
      {/* <AnimatedBeam containerRef={undefined} fromRef={undefined} toRef={undefined}></AnimatedBeam> */}

        {/* <AnimatedBeamDemo></AnimatedBeamDemo> */}
        {/* <AnimatedShinyText></AnimatedShinyText> */}
      </main>
    </div>
  );
}