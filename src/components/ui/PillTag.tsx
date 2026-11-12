import type { ReactNode } from "react";

interface PillTagProps {
  children: ReactNode;
  tone?: "sky" | "peach";
  orientation?: "horizontal" | "vertical";
  className?: string;
}

export function PillTag({
  children,
  tone = "sky",
  orientation = "horizontal",
  className = "",
}: PillTagProps) {
  const toneClass = tone === "sky" ? "bg-sky-strip" : "bg-peach-pill";
  const orientationClass =
    orientation === "vertical"
      ? "[writing-mode:vertical-rl] rotate-180 py-4 px-2"
      : "px-4 py-1.5";

  return (
    <span
      className={`inline-flex items-center justify-center rounded-full text-[12px] font-medium tracking-[0.01em] text-foreground select-none ${toneClass} ${orientationClass} ${className}`}
    >
      {children}
    </span>
  );
}
