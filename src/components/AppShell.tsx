"use client";

import { useEffect, useState } from "react";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Preloader } from "@/components/Preloader";

type AppShellProps = {
  children: React.ReactNode;
};

const PRELOADER_STORAGE_KEY = "canvas_preloader_shown_v1";

export function AppShell({ children }: AppShellProps) {
  const [showPreloader, setShowPreloader] = useState(false);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      const hasSeen = window.localStorage.getItem(PRELOADER_STORAGE_KEY);
      setShowPreloader(!hasSeen);
    } catch {
      setShowPreloader(true);
    } finally {
      setHydrated(true);
    }
  }, []);

  const handlePreloaderDone = () => {
    setShowPreloader(false);
    try {
      window.localStorage.setItem(PRELOADER_STORAGE_KEY, "1");
    } catch {
      // ignore
    }
  };

  return (
    <div className="site-frame">
      <div className="site-content">
        {!hydrated ? null : showPreloader ? (
          <Preloader onDone={handlePreloaderDone} />
        ) : (
          <div className="animate-fade-in">
            <Navbar />
            {children}
            <Footer />
          </div>
        )}
      </div>
    </div>
  );
}

