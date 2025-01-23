import { type ReactNode } from "react";
import { tv } from "tailwind-variants";

import { poppinsFont } from "@/ui/fonts";

export const documentBody = tv({
  base: [poppinsFont.className, "bg-surface", "text-neutral-12"],
});

interface Properties {
  children: ReactNode;
}

export function DocumentBody({ children }: Properties) {

  return (
    <body className={documentBody()}>
      {children}
      <div id="portal" className="position-fixed top-0 left-0 z-[999]" />
    </body>
  );
}
