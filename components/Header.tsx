import { cn } from "../libs/utils";
import Link from "next/link";
import React from "react";

export const Header = ({
  title,
  description,
  className,
  buttons,
  h = "h2",
}: {
  title?: React.ReactNode;
  description?: React.ReactNode;
  buttons?: { href: string; text: string }[];
  h?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  className?: string;
}) => {
  const TitleTag: React.ElementType = h;
  return (
    <div
      className={cn(
        "mx-auto max-w-4xl text-center mb-12 text-balance",
        className
      )}
    >
      {title && (
        <TitleTag className="mt-2 text-4xl font-bold tracking-tight sm:text-4xl text-balance font-mono">
          {title}
        </TitleTag>
      )}
      {description && (
        <p className="mt-6 text-2xl leading-8 font-medium tracking-wide text-white">
          {description}
        </p>
      )}
      {buttons && (
        <div className="mt-6 flex flex-row gap-2 justify-center flex-wrap">
        
        </div>
      )}
    </div>
  );
};