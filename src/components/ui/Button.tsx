import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { ButtonHTMLAttributes, ReactNode } from "react";

interface BaseProps {
  children: ReactNode;
  variant?: "primary" | "outline" | "ghost";
  size?: "md" | "lg";
  showArrow?: boolean;
  className?: string;
}

type ButtonAsButton = BaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

type ButtonAsLink = BaseProps & {
  href: string;
  ariaLabel?: string;
};

export type ButtonProps = ButtonAsButton | ButtonAsLink;

const variantClasses: Record<NonNullable<BaseProps["variant"]>, string> = {
  primary:
    "bg-primary text-white hover:bg-primary-hover hover:-translate-y-0.5 shadow-sm focus-visible:ring-2 focus-visible:ring-accent-blue focus-visible:ring-offset-2",
  outline:
    "border border-border-subtle bg-background text-foreground hover:border-accent-blue hover:bg-surface/40 focus-visible:ring-2 focus-visible:ring-accent-blue focus-visible:ring-offset-2",
  ghost:
    "bg-transparent text-foreground hover:bg-surface/60 focus-visible:ring-2 focus-visible:ring-accent-blue focus-visible:ring-offset-2",
};

const sizeClasses: Record<NonNullable<BaseProps["size"]>, string> = {
  md: "h-11 px-5 text-[12px] md:text-[13px]",
  lg: "h-12 px-6 text-[13px]",
};

export function Button(props: ButtonProps) {
  const {
    children,
    variant = "primary",
    size = "md",
    showArrow = true,
    className = "",
  } = props;

  const base =
    "inline-flex items-center justify-center gap-2 rounded-full font-semibold uppercase tracking-[0.06em] transition-all duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0 whitespace-nowrap";

  const combined = `${base} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  if ("href" in props && props.href !== undefined) {
    return (
      <Link href={props.href} aria-label={props.ariaLabel} className={combined}>
        <span>{children}</span>
        {showArrow && <ArrowUpRight className="h-4 w-4 shrink-0" strokeWidth={2} aria-hidden="true" />}
      </Link>
    );
  }

  const { ...buttonRest } = props;
  delete (buttonRest as Record<string, unknown>).variant;
  delete (buttonRest as Record<string, unknown>).size;
  delete (buttonRest as Record<string, unknown>).showArrow;
  delete (buttonRest as Record<string, unknown>).className;

  return (
    <button className={combined} {...buttonRest}>
      <span>{children}</span>
      {showArrow && <ArrowUpRight className="h-4 w-4 shrink-0" strokeWidth={2} aria-hidden="true" />}
    </button>
  );
}
