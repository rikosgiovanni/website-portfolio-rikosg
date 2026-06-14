export function GlobeIcon({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`globe-rotate ${className}`}
    >
      <circle cx="24" cy="24" r="22" stroke="currentColor" strokeWidth="0.8" />
      <ellipse cx="24" cy="24" rx="10" ry="22" stroke="currentColor" strokeWidth="0.8" />
      <ellipse cx="24" cy="24" rx="22" ry="10" stroke="currentColor" strokeWidth="0.8" />
      <line x1="2" y1="24" x2="46" y2="24" stroke="currentColor" strokeWidth="0.8" />
      <path d="M4 14 Q24 18 44 14" stroke="currentColor" strokeWidth="0.8" fill="none" />
      <path d="M4 34 Q24 30 44 34" stroke="currentColor" strokeWidth="0.8" fill="none" />
    </svg>
  );
}
