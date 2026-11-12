"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

const STORAGE_KEY = "denta-care-theme";

export function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setIsDark(document.documentElement.classList.contains("dark"));
  }, []);

  const toggleTheme = () => {
    const nextDark = !isDark;
    setIsDark(nextDark);
    document.documentElement.classList.toggle("dark", nextDark);
    try {
      localStorage.setItem(STORAGE_KEY, nextDark ? "dark" : "light");
    } catch {
      // Ignore storage restrictions
    }
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      title={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border-subtle bg-background text-foreground transition-colors hover:bg-surface cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-blue"
    >
      {mounted && isDark ? (
        <Sun className="h-4 w-4 text-amber-400" aria-hidden="true" />
      ) : (
        <Moon className="h-4 w-4 text-foreground/80" aria-hidden="true" />
      )}
    </button>
  );
}
