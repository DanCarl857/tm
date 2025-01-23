"use client";

import { ThemeProvider } from "next-themes";
import { type ReactNode } from "react";

import { Toaster } from "@/ui/components/toaster";


interface Properties {
  children: ReactNode;
}

export function DocumentProviders({ children }: Properties) {
  return (
    <ThemeProvider attribute="class" forcedTheme="light" themes={["light"]}>
      {children}
      <Toaster />
    </ThemeProvider>
  );
}
