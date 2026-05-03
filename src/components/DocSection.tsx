import { ReactNode } from 'react';

interface DocSectionProps {
  id: string;
  title: string;
  children: ReactNode;
  className?: string;
}

export default function DocSection({ id, title, children, className = '' }: DocSectionProps) {
  return (
    <section id={id} className={`scroll-mt-32 mb-16 ${className}`}>
      <h2 className="text-2xl font-semibold text-white mb-4">{title}</h2>
      {children}
    </section>
  );
}
