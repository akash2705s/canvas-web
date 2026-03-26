"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";

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

export function RequestDemoModal({ open, onClose }: RequestDemoModalProps) {
  const [form, setForm] = useState<FormState>({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
  });
  const [showForm, setShowForm] = useState(false);
  const [activeField, setActiveField] = useState<keyof FormState | null>(null);
  const [unlocked, setUnlocked] = useState(false);
  const [submitAck, setSubmitAck] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const submitTimerRef = useRef<number | null>(null);

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
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  useEffect(() => {
    if (!open) {
      setShowForm(false);
      setUnlocked(false);
      setSubmitAck(false);
      setIsSubmitting(false);
      if (submitTimerRef.current) {
        window.clearTimeout(submitTimerRef.current);
        submitTimerRef.current = null;
      }
      return;
    }
    setShowForm(false);
    setUnlocked(false);
    setSubmitAck(false);
    setIsSubmitting(false);
    if (submitTimerRef.current) {
      window.clearTimeout(submitTimerRef.current);
      submitTimerRef.current = null;
    }
    const id = window.setTimeout(() => setShowForm(true), 1200);
    return () => window.clearTimeout(id);
  }, [open]);

  useEffect(() => {
    if (!unlocked) return;
    const id = window.setTimeout(() => {
      onClose();
      setForm({ firstName: "", lastName: "", email: "", company: "" });
      setUnlocked(false);
      setSubmitAck(false);
      setIsSubmitting(false);
    }, 2200);
    return () => window.clearTimeout(id);
  }, [unlocked, onClose]);

  const canSubmit = useMemo(() => {
    return (
      form.firstName.trim().length > 0 &&
      form.lastName.trim().length > 0 &&
      form.email.trim().length > 0 &&
      form.email.includes("@")
    );
  }, [form]);

  const firstNameHint = form.firstName.trim()
    ? `Nice to meet you, ${form.firstName.trim()}.`
    : "Tell us your first name so we can personalize the walkthrough.";
  const lastNameHint = form.lastName.trim()
    ? `Thanks, ${form.lastName.trim()} looks perfect.`
    : "Add your last name so we can prep your personalized brief.";
  const emailHint = form.email.trim()
    ? "We will use this to tailor your live walkthrough in real time."
    : "Drop your work email and we will tune the narrative to your stack.";
  const completionScore = [
    form.firstName.trim().length > 0,
    form.lastName.trim().length > 0,
    form.email.trim().length > 0 && form.email.includes("@"),
    form.company.trim().length > 0,
  ].filter(Boolean).length;
  const completionPct = `${(completionScore / 4) * 100}%`;

  const activeHint = (() => {
    if (activeField === "firstName") return firstNameHint;
    if (activeField === "lastName") return lastNameHint;
    if (activeField === "email") return emailHint;
    if (activeField === "company")
      return form.company.trim()
        ? "Perfect — we will tailor examples to your org context."
        : "Company helps us pick the right examples (optional).";
    if (form.email.trim()) return emailHint;
    if (form.firstName.trim()) return firstNameHint;
    return "Start typing — the TV overlay adapts instantly.";
  })();

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
            className="relative w-full max-w-[560px]"
            initial={{ y: 14, scale: 0.98, opacity: 0 }}
            animate={{ y: 0, scale: 1, opacity: 1 }}
            exit={{ y: 10, scale: 0.985, opacity: 0 }}
            transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="relative overflow-hidden rounded-[30px] border border-slate-700/70 bg-[radial-gradient(circle_at_10%_-10%,#020617,#020617_60%)] p-3 shadow-[0_40px_160px_rgba(15,23,42,0.95)] ring-1 ring-slate-900/60">
              <div className="pointer-events-none absolute -inset-24 -z-10 bg-[radial-gradient(circle_at_10%_0%,rgba(56,189,248,0.24),transparent_55%),radial-gradient(circle_at_90%_0%,rgba(244,114,182,0.24),transparent_62%),radial-gradient(circle_at_50%_110%,rgba(249,115,22,0.24),transparent_70%)] blur-[66px]" />

              <div className="flex items-center justify-between gap-3 rounded-2xl bg-slate-950/90 px-4 py-2.5">
                <div className="flex flex-1 justify-start gap-1.5">
                  <span className="h-[7px] w-[34px] rounded-full bg-slate-700" />
                  <span className="h-[7px] w-[7px] rounded-full bg-emerald-400/90" />
                </div>
                <div className="flex items-center gap-1.5">
                  <button
                    type="button"
                    onClick={onClose}
                    data-cursor="default"
                    className="inline-flex h-[26px] w-[26px] items-center justify-center rounded-full bg-rose-500/90 hover:bg-rose-500/100"
                  >
                    <svg
                      width="13"
                      height="13"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                      role="presentation"
                      focusable="false"
                      className="text-white"
                    >
                      <path d="M18 6L6 18" />
                      <path d="M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>

              <div className="relative mt-3 overflow-hidden rounded-[24px] border border-slate-800/80 bg-slate-950">
                <div className="relative min-h-[248px] w-full p-2 sm:p-2.5">
                  {!showForm && !unlocked ? (
                    <div
                      className="pointer-events-none absolute inset-0 z-10 opacity-[0.18] mix-blend-screen"
                      style={{
                        backgroundImage:
                          "url(https://media.giphy.com/media/oEI9uBYSzLpBK/giphy.gif)",
                        backgroundSize: "cover",
                      }}
                    />
                  ) : null}
                  <AnimatePresence mode="wait">
                    {unlocked ? (
                      <motion.div
                        key="unlocked-screen"
                        initial={{ opacity: 0, scale: 0.96, filter: "blur(8px)" }}
                        animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                        exit={{ opacity: 0, scale: 1.02, filter: "blur(8px)" }}
                        transition={{ duration: 0.42, ease: [0.16, 1, 0.3, 1] }}
                        className="relative flex min-h-[232px] flex-col items-center justify-center overflow-hidden rounded-[20px] border border-slate-700/70 bg-[radial-gradient(circle_at_50%_10%,rgba(79,70,229,0.22),transparent_55%),linear-gradient(180deg,#070A14_0%,#0B1220_100%)]"
                      >
                        <div className="pointer-events-none absolute inset-0 opacity-55 [background-image:repeating-linear-gradient(0deg,transparent_0,transparent_2px,rgba(255,255,255,0.06)_2px,rgba(255,255,255,0.06)_4px)]" />
                        <div className="relative z-10 text-center">
                          <p className="text-[12px] uppercase tracking-[0.22em] text-slate-300">
                            Demo unlocked
                          </p>
                          <p className="mt-3 text-[24px] font-semibold text-white [font-family:var(--font-display)]">
                            Ready for your walkthrough
                          </p>
                          <p className="mt-2 text-[12px] text-slate-400">
                            We’ll tailor the demo flow to {form.firstName.trim() ? form.firstName.trim() : "you"}.
                          </p>
                        </div>
                      </motion.div>
                    ) : !showForm ? (
                      <motion.div
                        key="boot-screen"
                        initial={{ opacity: 0.35, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 1.04, filter: "blur(8px)" }}
                        transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                        className="relative flex min-h-[232px] items-center justify-center overflow-hidden rounded-[20px] border border-slate-700/70 bg-[radial-gradient(circle_at_20%_10%,rgba(14,116,144,0.22),transparent_45%),radial-gradient(circle_at_90%_0%,rgba(124,58,237,0.22),transparent_42%),linear-gradient(135deg,#020617,#111827_55%,#020617)]"
                      >
                        <div className="pointer-events-none absolute inset-0 opacity-45 mix-blend-screen [background-image:repeating-linear-gradient(0deg,transparent_0,transparent_2px,rgba(255,255,255,0.06)_2px,rgba(255,255,255,0.06)_4px)]" />
                        <div className="text-center">

                          <p className="mt-3 text-[18px] font-semibold text-white [font-family:var(--font-display)]">
                            Demo unlocked
                          </p>
                          <p className="mt-2 text-[12px] text-slate-400">
                            Preparing a tailored walkthrough…
                          </p>
                          <div className="mx-auto mt-4 h-[3px] w-28 overflow-hidden rounded-full bg-slate-700/80">
                            <motion.div
                              className="h-full w-full origin-left bg-gradient-to-r from-emerald-400 via-sky-400 to-violet-400"
                              initial={{ scaleX: 0 }}
                              animate={{ scaleX: 1 }}
                              transition={{ duration: 1.05, ease: "easeOut" }}
                            />
                          </div>
                        </div>
                      </motion.div>
                    ) : (
                      <motion.div
                        key="request-form"
                        initial={{ opacity: 0, scale: 0.94, filter: "blur(10px)" }}
                        animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden rounded-[22px] bg-white shadow-[0_24px_70px_rgba(15,23,42,0.5)]"
                      >
                        <div className="relative px-4 pb-3 pt-3 sm:px-5 sm:pb-4 sm:pt-4">
                          <div className="pointer-events-none absolute inset-x-0 top-0 h-[2px] bg-[linear-gradient(90deg,#4F46E5_0%,#06B6D4_45%,#22C55E_70%,#F59E0B_100%)]" />
                          <div className="pointer-events-none absolute inset-0 opacity-[0.12] [background-image:radial-gradient(circle_at_20%_10%,rgba(79,70,229,0.55),transparent_35%),radial-gradient(circle_at_80%_20%,rgba(14,165,233,0.5),transparent_40%),radial-gradient(circle_at_50%_110%,rgba(34,197,94,0.45),transparent_42%)]" />

                          <div className="relative flex items-start justify-between gap-3">
                            <div className="min-w-0">
                              <div className="inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-slate-500">
                                <span className="inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500 shadow-[0_0_0_4px_rgba(16,185,129,0.12)]" />
                              </div>
                              <h2 className="mt-1 text-[19px] font-extrabold leading-[1.05] tracking-tight text-slate-900 sm:text-[21px] [font-family:var(--font-display)]">
                                Have Questions?
                                <span className="ml-2 text-[#4F46E5]">Schedule a demo</span>
                              </h2>
                            </div>

                            <div className="flex shrink-0 flex-col items-end gap-1">
                              <span className="rounded-full border border-slate-200 bg-white/70 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-600 backdrop-blur">
                                {completionScore}/4
                              </span>
                              <div className="flex items-center gap-1.5">
                                {[0, 1, 2, 3].map((i) => (
                                  <span
                                    key={i}
                                    className={[
                                      "h-[6px] w-[6px] rounded-full transition-colors",
                                      i < completionScore ? "bg-[#4F46E5]" : "bg-slate-200",
                                    ].join(" ")}
                                  />
                                ))}
                              </div>
                            </div>
                          </div>

                          <div className="mt-2.5 h-1.5 w-full overflow-hidden rounded-full bg-slate-100">
                            <motion.div
                              className="h-full rounded-full bg-[linear-gradient(90deg,#4F46E5_0%,#06B6D4_40%,#22C55E_75%)]"
                              initial={{ width: 0 }}
                              animate={{ width: completionPct }}
                              transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
                            />
                          </div>

                          <AnimatePresence mode="wait">
                            <motion.div
                              key={`${activeField ?? "none"}-${completionScore}-${form.firstName}-${form.lastName}-${form.email}-${form.company}`}
                              initial={{ y: 10, opacity: 0, filter: "blur(6px)" }}
                              animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                              exit={{ y: -8, opacity: 0, filter: "blur(6px)" }}
                              transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
                              className="mt-2.5 flex items-start gap-2 rounded-[14px] border border-slate-200/90 bg-white/70 px-3 py-2 backdrop-blur"
                            >
                              <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-slate-900 text-[10px] font-bold text-white">
                                i
                              </span>
                              <p className="text-[12px] leading-relaxed text-slate-700">{activeHint}</p>
                            </motion.div>
                          </AnimatePresence>

                          <div className="mt-3.5 h-px w-full bg-slate-100" />

                          <form
                            className="mt-3.5"
                            onSubmit={(e) => {
                              e.preventDefault();
                              if (!canSubmit || isSubmitting) return;

                              setIsSubmitting(true);
                              setSubmitAck(true);

                              if (submitTimerRef.current) {
                                window.clearTimeout(submitTimerRef.current);
                              }

                              submitTimerRef.current = window.setTimeout(() => {
                                setUnlocked(true);
                                setShowForm(false);
                                setActiveField(null);
                              }, 850);
                            }}
                          >
                            <div className="grid gap-2.5 sm:grid-cols-2">
                              <label className="block">
                                <span className="text-[13px] font-semibold text-slate-700">
                                  First Name<span className="text-[#4F46E5]">*</span>
                                </span>
                                <input
                                  value={form.firstName}
                                  onChange={(e) => setForm((s) => ({ ...s, firstName: e.target.value }))}
                                  onFocus={() => setActiveField("firstName")}
                                  onBlur={() => setActiveField(null)}
                                  className="mt-1.5 h-[34px] w-full rounded-[11px] bg-[#F6F7FF] px-3 text-[12px] text-slate-900 outline-none ring-1 ring-slate-100 focus:ring-2 focus:ring-[#4F46E5]/30"
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
                                  onFocus={() => setActiveField("lastName")}
                                  onBlur={() => setActiveField(null)}
                                  className="mt-1.5 h-[34px] w-full rounded-[11px] bg-[#F6F7FF] px-3 text-[12px] text-slate-900 outline-none ring-1 ring-slate-100 focus:ring-2 focus:ring-[#4F46E5]/30"
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
                                  onFocus={() => setActiveField("email")}
                                  onBlur={() => setActiveField(null)}
                                  className="mt-1.5 h-[34px] w-full rounded-[11px] bg-[#F6F7FF] px-3 text-[12px] text-slate-900 outline-none ring-1 ring-slate-100 focus:ring-2 focus:ring-[#4F46E5]/30"
                                  placeholder=""
                                  autoComplete="email"
                                />
                              </label>

                              <label className="block">
                                <span className="text-[13px] font-semibold text-slate-700">Company Name</span>
                                <input
                                  value={form.company}
                                  onChange={(e) => setForm((s) => ({ ...s, company: e.target.value }))}
                                  onFocus={() => setActiveField("company")}
                                  onBlur={() => setActiveField(null)}
                                  className="mt-1.5 h-[34px] w-full rounded-[11px] bg-[#F6F7FF] px-3 text-[12px] text-slate-900 outline-none ring-1 ring-slate-100 focus:ring-2 focus:ring-[#4F46E5]/30"
                                  placeholder=""
                                  autoComplete="organization"
                                />
                              </label>
                            </div>

                            <div className="mt-3 flex justify-center">
                              <button
                                type="submit"
                                disabled={!canSubmit || isSubmitting}
                                className={[
                                  "group inline-flex items-center gap-2 rounded-full bg-[linear-gradient(90deg,#F97316_0%,#EAB308_20%,#22C55E_40%,#06B6D4_60%,#3B82F6_80%,#8B5CF6_100%)] p-[3px] text-sm font-semibold shadow-sm transition",
                                  canSubmit && !isSubmitting ? "hover:shadow-md" : "cursor-not-allowed opacity-60",
                                ].join(" ")}
                              >
                                <span className="relative flex items-center gap-1.5 overflow-hidden rounded-full bg-white px-5 py-1.5 text-slate-900">
                                  <span className="pointer-events-none absolute inset-0 origin-right scale-x-0 bg-slate-900 transition-transform duration-300 ease-out group-hover:scale-x-100" />
                                  <AnimatePresence mode="wait" initial={false}>
                                    {submitAck ? (
                                      <motion.span
                                        key="demo-unlocked"
                                        className="relative z-10 text-[12px] font-semibold text-slate-900"
                                        initial={{ opacity: 0, y: 6 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -6 }}
                                        transition={{ duration: 0.18 }}
                                      >
                                        Demo unlocked
                                      </motion.span>
                                    ) : (
                                      <motion.span
                                        key="request-demo"
                                        className="relative z-10 text-[12px] transition-colors duration-200 group-hover:text-white"
                                        initial={{ opacity: 0, y: 6 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -6 }}
                                        transition={{ duration: 0.18 }}
                                      >
                                        Request Demo
                                      </motion.span>
                                    )}
                                  </AnimatePresence>

                                  <AnimatePresence mode="wait" initial={false}>
                                    {submitAck ? (
                                      <motion.span
                                        key="icon-check"
                                        className="relative z-10 flex h-[24px] w-[24px] items-center justify-center rounded-[8px] bg-[linear-gradient(90deg,#22C55E_0%,#06B6D4_55%,#3B82F6_100%)] text-white"
                                        initial={{ opacity: 0, scale: 0.92 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.92 }}
                                        transition={{ duration: 0.18 }}
                                      >
                                        <svg
                                          width="12"
                                          height="12"
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
                                          <path d="M20 6L9 17l-5-5" />
                                        </svg>
                                      </motion.span>
                                    ) : (
                                      <motion.span
                                        key="icon-arrow"
                                        className="relative z-10 flex h-[24px] w-[24px] items-center justify-center rounded-[8px] bg-[linear-gradient(90deg,#F97316_0%,#EAB308_20%,#22C55E_40%,#06B6D4_60%,#3B82F6_80%,#8B5CF6_100%)] text-white"
                                        initial={{ opacity: 0, scale: 0.92 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.92 }}
                                        transition={{ duration: 0.18 }}
                                      >
                                        <svg
                                          width="10"
                                          height="10"
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
                                      </motion.span>
                                    )}
                                  </AnimatePresence>
                                </span>
                              </button>
                            </div>
                          </form>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

