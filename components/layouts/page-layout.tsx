import type { ReactNode } from 'react';
import './globals.css';

interface PageLayoutProps {
  children: ReactNode;
  className?: string;
}

export function PageLayout({ children, className = '' }: PageLayoutProps) {
  return (
    <main className="py-6">
      <div className={`container mx-auto px-4 ${className}`}>{children}</div>
    </main>
  );
}
