/* eslint-disable @typescript-eslint/no-empty-interface */
/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from "react";

import { cn } from "@/utils/css";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> { }

const TextArea = React.forwardRef<HTMLTextAreaElement, InputProps>(({ className, type, ...props }, ref) => {
  return (
    // @ts-expect-error ...
    <textarea
      className={cn(
        "flex w-full bg-background px-3 py-2 text-sm focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 z-[1000]",
        "min-h-10 border-b border-[#ccc] outline-none rounded-none hover:border-b focus:border-b  hover:outline-none focus:outline-none",
        className,
      )}
      ref={ref}
      {...props}
    />
  );
});
TextArea.displayName = "TextArea";


export { TextArea };
