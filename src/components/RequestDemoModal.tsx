"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";

type RequestDemoModalProps = {
  open: boolean;
  onClose: () => void;
};

type FormState = {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
};

function CloseIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      role="presentation"
      focusable="false"
    >
      <path d="M18 6L6 18" />
      <path d="M6 6l12 12" />
    </svg>
  );
}

export function RequestDemoModal({ open, onClose }: RequestDemoModalProps) {
  const [form, setForm] = useState<FormState>({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
  });

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, onClose]);

  useEffect(() => {
    if (!open) return;
    // prevent background scroll
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  const canSubmit = useMemo(() => {
    return (
      form.firstName.trim().length > 0 &&
      form.lastName.trim().length > 0 &&
      form.email.trim().length > 0 &&
      form.email.includes("@")
    );
  }, [form]);

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          className="fixed inset-0 z-[80] flex items-center justify-center bg-black/55 px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) onClose();
          }}
          aria-modal="true"
          role="dialog"
        >
          <motion.div
            className="relative w-full max-w-[650px] overflow-hidden rounded-[28px] bg-white shadow-[0_30px_110px_rgba(0,0,0,0.55)]"
            initial={{ y: 14, scale: 0.98, opacity: 0 }}
            animate={{ y: 0, scale: 1, opacity: 1 }}
            exit={{ y: 10, scale: 0.985, opacity: 0 }}
            transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
          >
            <button
              type="button"
              onClick={onClose}
              className="absolute right-5 top-5 inline-flex h-8 w-8 items-center justify-center rounded-full text-slate-400 hover:bg-slate-50 hover:text-slate-700"
              aria-label="Close"
            >
              <CloseIcon />
            </button>

            <div className="px-7 pb-6 pt-5 sm:px-8 sm:pb-7 sm:pt-6">
              <div className="text-left">
                <h2 className="text-[28px] font-extrabold leading-[1.1] tracking-tight text-slate-900 sm:text-[30px] [font-family:var(--font-display)]">
                  Have Questions?
                  <br />
                  <span className="text-[#4F46E5]">Schedule a demo</span>
                </h2>
              </div>

              <div className="mt-5 h-px w-full bg-slate-100" />

              <form
                className="mt-5"
                onSubmit={(e) => {
                  e.preventDefault();
                  if (!canSubmit) return;
                  // No backend wiring yet — just close for now.
                  onClose();
                  setForm({ firstName: "", lastName: "", email: "", company: "" });
                }}
              >
                <div className="grid gap-3.5 sm:grid-cols-2">
                  <label className="block">
                    <span className="text-[13px] font-semibold text-slate-700">
                      First Name<span className="text-[#4F46E5]">*</span>
                    </span>
                    <input
                      value={form.firstName}
                      onChange={(e) => setForm((s) => ({ ...s, firstName: e.target.value }))}
                      className="mt-2 h-[38px] w-full rounded-[13px] bg-[#F6F7FF] px-4 text-[13px] text-slate-900 outline-none ring-1 ring-slate-100 focus:ring-2 focus:ring-[#4F46E5]/30"
                      placeholder=""
                      autoComplete="given-name"
                    />
                  </label>

                  <label className="block">
                    <span className="text-[13px] font-semibold text-slate-700">
                      Last Name<span className="text-[#4F46E5]">*</span>
                    </span>
                    <input
                      value={form.lastName}
                      onChange={(e) => setForm((s) => ({ ...s, lastName: e.target.value }))}
                      className="mt-2 h-[38px] w-full rounded-[13px] bg-[#F6F7FF] px-4 text-[13px] text-slate-900 outline-none ring-1 ring-slate-100 focus:ring-2 focus:ring-[#4F46E5]/30"
                      placeholder=""
                      autoComplete="family-name"
                    />
                  </label>

                  <label className="block">
                    <span className="text-[13px] font-semibold text-slate-700">
                      Email<span className="text-[#4F46E5]">*</span>
                    </span>
                    <input
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm((s) => ({ ...s, email: e.target.value }))}
                      className="mt-2 h-[38px] w-full rounded-[13px] bg-[#F6F7FF] px-4 text-[13px] text-slate-900 outline-none ring-1 ring-slate-100 focus:ring-2 focus:ring-[#4F46E5]/30"
                      placeholder=""
                      autoComplete="email"
                    />
                  </label>

                  <label className="block">
                    <span className="text-[13px] font-semibold text-slate-700">Company Name</span>
                    <input
                      value={form.company}
                      onChange={(e) => setForm((s) => ({ ...s, company: e.target.value }))}
                      className="mt-2 h-[38px] w-full rounded-[13px] bg-[#F6F7FF] px-4 text-[13px] text-slate-900 outline-none ring-1 ring-slate-100 focus:ring-2 focus:ring-[#4F46E5]/30"
                      placeholder=""
                      autoComplete="organization"
                    />
                  </label>
                </div>

                <div className="mt-6 flex justify-center">
                  <button
                    type="submit"
                    disabled={!canSubmit}
                    className={[
                      "group inline-flex items-center gap-2 rounded-full bg-[linear-gradient(90deg,#F97316_0%,#EAB308_20%,#22C55E_40%,#06B6D4_60%,#3B82F6_80%,#8B5CF6_100%)] p-[3px] text-sm font-semibold shadow-sm transition",
                      canSubmit ? "hover:shadow-md" : "opacity-60 cursor-not-allowed",
                    ].join(" ")}
                  >
                    <span className="relative flex items-center gap-2 overflow-hidden rounded-full bg-white px-8 py-2.5 text-slate-900">
                      <span className="pointer-events-none absolute inset-0 origin-right scale-x-0 bg-slate-900 transition-transform duration-300 ease-out group-hover:scale-x-100" />
                      <span className="relative z-10 transition-colors duration-200 group-hover:text-white">Submit</span>
                      <span className="relative z-10 flex h-[32px] w-[32px] items-center justify-center rounded-[11px] bg-[linear-gradient(90deg,#F97316_0%,#EAB308_20%,#22C55E_40%,#06B6D4_60%,#3B82F6_80%,#8B5CF6_100%)] text-white">
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          aria-hidden="true"
                          role="presentation"
                          focusable="false"
                        >
                          <path d="M5 12h14" />
                          <path d="M12 5l7 7-7 7" />
                        </svg>
                      </span>
                    </span>
                  </button>
                </div>
              </form>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

