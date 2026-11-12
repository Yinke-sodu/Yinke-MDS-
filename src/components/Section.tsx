import type { ReactNode } from 'react';
import { Container } from '@/components/Container';

export interface SectionProps {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  children: ReactNode;
  className?: string;
}

/** 页面区块容器，统一标题层级与区块间距 */
export function Section({
  id,
  eyebrow,
  title,
  description,
  children,
  className,
}: SectionProps) {
  return (
    <section
      id={id}
      className={`scroll-mt-14 border-t border-border py-12 ${className ?? ''}`}
    >
      <Container>
        <header className="max-w-2xl">
          <p className="font-mono text-12 uppercase tracking-wide text-primary">
            {eyebrow}
          </p>
          <h2 className="mt-2 text-28 font-semibold tracking-tight text-fg">
            {title}
          </h2>
          <p className="mt-2 text-15 text-fg-muted">{description}</p>
        </header>
        <div className="mt-8">{children}</div>
      </Container>
    </section>
  );
}
