import type { ReactNode } from 'react';

export interface ContainerProps {
  children: ReactNode;
  className?: string;
}

/** 页面内容容器，统一最大宽度与水平留白 */
export function Container({ children, className }: ContainerProps) {
  return (
    <div
      className={`mx-auto w-full max-w-content px-6 md:px-12 ${className ?? ''}`}
    >
      {children}
    </div>
  );
}
