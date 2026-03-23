"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

import { CanvasCursor } from "@/components/CanvasCursor";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Preloader } from "@/components/Preloader";
import { RequestDemoProvider } from "@/components/RequestDemoProvider";

type AppShellProps = {
  children: React.ReactNode;
};

const PRELOADER_STORAGE_KEY = "canvas_preloader_shown_v1";

export function AppShell({ children }: AppShellProps) {
  const [showPreloader, setShowPreloader] = useState(false);
  const [hydrated, setHydrated] = useState(false);
  const pathname = usePathname();

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

  useEffect(() => {
    void pathname;
    window.scrollTo(0, 0);
    // Reset animations by triggering a layout shift
    document.documentElement.style.scrollBehavior = "auto";
  }, [pathname]);

  const handlePreloaderDone = () => {
    setShowPreloader(false);
    try {
      window.localStorage.setItem(PRELOADER_STORAGE_KEY, "1");
    } catch {
      // ignore
    }
  };

  return (
    <>
      {!hydrated ? null : showPreloader ? (
        <>
          <CanvasCursor />
          <Preloader onDone={handlePreloaderDone} />
        </>
      ) : (
        <RequestDemoProvider>
          <CanvasCursor />
          <div key={pathname} className="animate-fade-in">
            {/* Full-bleed header (outside the framed layout) */}
            <Navbar />

            {/* Framed page content */}
            <div className="site-frame">
              <div className="site-content">
                {children}
                <Footer />
              </div>
            </div>
          </div>
        </RequestDemoProvider>
      )}
    </>
  );
}

