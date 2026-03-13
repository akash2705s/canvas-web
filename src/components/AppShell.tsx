"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

type AppShellProps = {
  children: React.ReactNode;
};

export function AppShell({ children }: AppShellProps) {
  return (
    <div className="site-frame">
      <div className="site-content">
        {/* Preloader temporarily disabled */}
        <div className="animate-fade-in">
          <Navbar />
          {children}
          <Footer />
        </div>
      </div>
    </div>
  );
}

