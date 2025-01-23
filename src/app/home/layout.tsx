import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col md:flex-row">
      <div className="flex-1 overflow-x-hidden h-screen bg-background-1">{children}</div>
    </div>
  );
}
