import React from "react";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center" | "right";
  theme?: "light" | "dark";
  className?: string;
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  theme = "light",
  className = "",
}: SectionHeadingProps) {
  const alignment =
    align === "center"
      ? "text-center mx-auto"
      : align === "right"
      ? "text-right ml-auto"
      : "text-left";

  const isDark = theme === "dark";

  return (
    <div className={`max-w-3xl space-y-3 ${alignment} ${className}`}>
      {eyebrow && (
        <div className="flex items-center gap-2 justify-center inline-flex">
          <span className="h-[1px] w-6 bg-[#D9A52B]" />
          <span className="text-[11px] uppercase tracking-[0.25em] font-semibold text-[#D9A52B]">
            {eyebrow}
          </span>
          <span className="h-[1px] w-6 bg-[#D9A52B]" />
        </div>
      )}
      <h2
        className={`font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-tight ${
          isDark ? "text-[#FFFDF7]" : "text-[#17130F]"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`text-base sm:text-lg font-light leading-relaxed max-w-2xl ${
            alignment.includes("mx-auto") ? "mx-auto" : ""
          } ${isDark ? "text-[#FFFDF7]/70" : "text-[#7A6A57]"}`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
