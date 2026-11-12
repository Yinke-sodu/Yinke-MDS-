import type { ReactNode } from 'react';

export interface CardProps {
  children: ReactNode;
  className?: string;
}

/** 内容卡片，统一背景、描边与圆角 */
export function Card({ children, className }: CardProps) {
  return (
    <div
      className={`rounded-md border border-border bg-surface p-6 ${className ?? ''}`}
    >
      {children}
    </div>
  );
}
