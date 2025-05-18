import { cn } from "lib/utils/cn";
import React from "react";

export const CardContent = ({ className, children }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("p-4", className)}>{children}</div>
);