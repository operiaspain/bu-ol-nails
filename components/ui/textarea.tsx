import * as React from "react";
import { cn } from "@/lib/utils";

export type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement>;

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          "flex min-h-[120px] w-full rounded-xl border border-[#C9A0DC]/30 bg-white px-4 py-3 text-sm text-[#2D2D2D] placeholder:text-gray-400",
          "transition-colors duration-200 resize-none",
          "focus:border-[#C9A0DC] focus:outline-none focus:ring-2 focus:ring-[#C9A0DC]/20",
          "disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Textarea.displayName = "Textarea";

export default Textarea;
