import { ArrowUpRight } from 'lucide-react';

interface PillButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: 'light' | 'dark';
  className?: string;
}

export function PillButton({ children, href, onClick, variant = 'light', className = '' }: PillButtonProps) {
  const baseClasses = 'inline-flex items-center gap-2 px-6 py-3 rounded-pill font-body text-sm font-medium transition-all duration-300 group';
  const variantClasses = variant === 'light'
    ? 'bg-monolog-text text-monolog-dark hover:bg-white'
    : 'bg-transparent text-monolog-text border border-monolog-text/20 hover:border-monolog-text/40';

  const inner = (
    <>
      <span>{children}</span>
      <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
    </>
  );

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={`${baseClasses} ${variantClasses} ${className}`}>
        {inner}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={`${baseClasses} ${variantClasses} ${className}`}>
      {inner}
    </button>
  );
}
