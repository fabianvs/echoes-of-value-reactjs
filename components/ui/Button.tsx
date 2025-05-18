import { cn } from "lib/utils/cn";
import React from "react";


export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "ghost";
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, variant = "default", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center rounded px-4 py-2 text-sm font-medium transition-colors",
          variant === "default"
            ? "bg-[#1c3f5e] hover:bg-[#1a3550] text-[#cceeff] shadow"
            : "bg-transparent hover:bg-[#222] text-[#99ccff]",
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
