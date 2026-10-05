import React from "react";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  size?: "narrow" | "normal" | "wide";
}

export default function Container({
  children,
  className = "",
  size = "normal",
}: ContainerProps) {
  const maxWidth =
    size === "narrow"
      ? "max-w-4xl"
      : size === "wide"
      ? "max-w-7xl"
      : "max-w-6xl";

  return (
    <div className={`${maxWidth} mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>
      {children}
    </div>
  );
}
