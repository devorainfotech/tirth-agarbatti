import React from 'react';

const tones = {
  maroon: '#6B1A2A',
  gold: '#E6BE4A',
} as const;

interface HighlightedWordProps {
  children: React.ReactNode;
  className?: string;
  tone?: keyof typeof tones;
}

export function HighlightedWord({
  children,
  className = '',
  tone = 'gold',
}: HighlightedWordProps) {
  const color = tones[tone];

  return (
    <span
      className={`relative inline-block whitespace-nowrap ${className}`}
      style={{ paddingBottom: '0.28em' }}
    >
      <em style={{ color, fontStyle: 'italic', position: 'relative', zIndex: 1 }}>{children}</em>
      <svg
        viewBox="0 0 300 34"
        preserveAspectRatio="none"
        aria-hidden="true"
        focusable="false"
        className="pointer-events-none absolute select-none"
        style={{ left: '-1%', width: '104%', height: '0.34em', bottom: 0, color }}
      >
        <path
          d="M10 15C48 13 92 11 150 12.5C208 14 252 11 282 8.5C290 7.6 294 9.4 291 12C260 15.5 210 17.5 150 16.5C92 15.5 48 17 14 19.5C6 18 5 15.5 10 15Z"
          fill="currentColor"
        />
        <path
          d="M22 22.5C58 20.5 100 22 155 23.5C198 24.6 228 22.5 242 23.2C238 26.2 196 27.2 150 26.4C100 25.5 56 26.2 20 25.6C14 25.2 16 23 22 22.5Z"
          fill="currentColor"
        />
      </svg>
    </span>
  );
}
