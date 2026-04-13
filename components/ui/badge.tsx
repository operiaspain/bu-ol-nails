import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: "border-[#C9A0DC]/30 bg-[#C9A0DC]/10 text-[#9B72B0]",
        open: "border-[#7DBB8E]/30 bg-[#7DBB8E]/10 text-[#4a8a5e]",
        closed: "border-gray-300/50 bg-gray-100 text-gray-500",
        accent: "border-[#F4C2C2]/30 bg-[#F4C2C2]/20 text-[#c07080]",
        outline: "border-[#C9A0DC] text-[#9B72B0] bg-transparent",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

export function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { badgeVariants };
export default Badge;
