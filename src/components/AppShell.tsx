"use client";

import { useState } from "react";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Preloader } from "@/components/Preloader";

type AppShellProps = {
  children: React.ReactNode;
};

export function AppShell({ children }: AppShellProps) {
  const [showPreloader, setShowPreloader] = useState(true);

  const handlePreloaderDone = () => {
    setShowPreloader(false);
  };

  return (
    <div className="site-frame">
      <div className="site-content">
        {showPreloader && <Preloader onDone={handlePreloaderDone} />}
        <div className="animate-fade-in">
          <Navbar />
          {children}
          <Footer />
        </div>
      </div>
    </div>
  );
}

