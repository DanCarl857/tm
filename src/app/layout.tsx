"use client";
import "@/ui/css/index.css";
import "./globals.css";

import { ReactNode } from "react";

import { DocumentBody } from "@/core/document/document-body";
import { DocumentHead } from "@/core/document/document-head";
import { DocumentProviders } from "@/core/document/document-providers";

interface Props {
  children: ReactNode;
}

export default function RootLayout({ children }: Props) {
  return (
    <html suppressHydrationWarning lang="en">
      <DocumentHead />
      <DocumentBody>
        <DocumentProviders>
          {children}
        </DocumentProviders>
      </DocumentBody>
    </html>
  );
}
