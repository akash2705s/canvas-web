"use client";

import { createContext, useCallback, useContext, useMemo, useState } from "react";
import { RequestDemoModal } from "@/components/RequestDemoModal";

type RequestDemoContextValue = {
  open: () => void;
  close: () => void;
};

const RequestDemoContext = createContext<RequestDemoContextValue | null>(null);

export function useRequestDemo() {
  const ctx = useContext(RequestDemoContext);
  if (!ctx) {
    throw new Error("useRequestDemo must be used within RequestDemoProvider");
  }
  return ctx;
}

export function RequestDemoProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);

  const value = useMemo(() => ({ open, close }), [open, close]);

  return (
    <RequestDemoContext.Provider value={value}>
      {children}
      <RequestDemoModal open={isOpen} onClose={close} />
    </RequestDemoContext.Provider>
  );
}

