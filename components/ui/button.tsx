"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-sm text-sm font-medium tracking-widest uppercase ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A97A] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-[#C9A97A] text-[#1A1410] hover:bg-transparent hover:text-[#C9A97A] border border-[#C9A97A] shadow-md btn-glow",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-[#C9A97A] bg-transparent text-[#C9A97A] hover:bg-[#C9A97A] hover:text-[#1A1410]",
        secondary:
          "bg-[#F5EFE8] text-[#1A1410] hover:bg-[#E8DDD0] border border-[#E8DDD0]",
        ghost: "hover:bg-[#C9A97A]/10 hover:text-[#C9A97A]",
        link: "text-[#C9A97A] underline-offset-4 hover:underline p-0 h-auto normal-case tracking-normal",
        dark: "bg-[#1A1410] text-[#FDFAF6] hover:bg-[#3D2E1E] border border-[#3D2E1E] shadow-md",
        "outline-dark": "border border-[rgba(253,250,246,0.5)] bg-transparent text-[#FDFAF6] hover:bg-[rgba(253,250,246,0.1)] hover:border-[#FDFAF6]",
      },
      size: {
        default: "h-11 px-8 py-2.5 text-xs",
        sm:      "h-9 px-5 text-xs",
        lg:      "h-12 px-10 text-xs",
        xl:      "h-14 px-12 text-sm",
        icon:    "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export { buttonVariants };
export default Button;
