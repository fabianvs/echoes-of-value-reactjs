import { cn } from "lib/utils/cn";
import React from "react";

export const Card = ({ className, children }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("rounded-md border border-[#2e3b4e] bg-[#1a1a1a] shadow-sm", className)}>
    {children}
  </div>
);