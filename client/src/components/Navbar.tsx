import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import { navItems, profile } from "../data/portfolio";
import { useScrollSpy } from "../hooks/useScrollSpy";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const sectionIds = useMemo(() => navItems.map((item) => item.id), []);
  const activeId = useScrollSpy(sectionIds);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavigate = (id: string) => {
    setOpen(false);
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all ${
        scrolled ? "glass-nav py-2" : "py-3"
      }`}
    >
      <nav className="container-x flex items-center justify-between">
        <button
          type="button"
          onClick={() => handleNavigate("home")}
          className="focus-ring flex items-center gap-2 rounded-lg text-base font-bold"
        >
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-brand-500 to-accent-500 font-display text-sm text-white">
            {profile.name
              .split(" ")
              .map((part) => part[0])
              .join("")}
          </span>
          <span className="font-display tracking-tight">
            {profile.name}
            <span className="text-brand-500">.</span>
          </span>
        </button>

        <div className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => handleNavigate(item.id)}
              className={`focus-ring relative rounded-full px-3.5 py-2 text-sm font-medium transition ${
                activeId === item.id
                  ? "text-brand-600 dark:text-brand-300"
                  : "text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
              }`}
            >
              {activeId === item.id && (
                <motion.span
                  layoutId="nav-pill"
                  className="absolute inset-0 -z-10 rounded-full bg-brand-500/10"
                  transition={{ type: "spring", stiffness: 400, damping: 32 }}
                />
              )}
              {item.label}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => handleNavigate("contact")}
            className="focus-ring hidden rounded-full bg-brand-600 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-brand-600/25 transition hover:bg-brand-500 sm:inline-flex"
          >
            Hire Me
          </button>
          <button
            type="button"
            onClick={() => setOpen((prev) => !prev)}
            aria-label="Toggle navigation menu"
            aria-expanded={open}
            className="focus-ring grid h-10 w-10 place-items-center rounded-full border border-slate-200 bg-white/70 text-slate-700 md:hidden dark:border-white/10 dark:bg-white/5 dark:text-slate-200"
          >
            {open ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="glass-nav overflow-hidden md:hidden"
          >
            <div className="container-x flex flex-col gap-1 py-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => handleNavigate(item.id)}
                  className={`focus-ring rounded-xl px-4 py-3 text-left text-sm font-medium transition ${
                    activeId === item.id
                      ? "bg-brand-500/10 text-brand-600 dark:text-brand-300"
                      : "text-slate-600 dark:text-slate-300"
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <button
                type="button"
                onClick={() => handleNavigate("contact")}
                className="focus-ring mt-2 rounded-xl bg-brand-600 px-4 py-3 text-center text-sm font-semibold text-white"
              >
                Hire Me
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
