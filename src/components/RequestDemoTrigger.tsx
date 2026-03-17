"use client";

import { useRequestDemo } from "@/components/RequestDemoProvider";

type RequestDemoTriggerProps = {
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
};

export function RequestDemoTrigger({ className, children, onClick }: RequestDemoTriggerProps) {
  const { open } = useRequestDemo();
  return (
    <button
      type="button"
      className={className}
      onClick={() => {
        onClick?.();
        open();
      }}
    >
      {children}
    </button>
  );
}

