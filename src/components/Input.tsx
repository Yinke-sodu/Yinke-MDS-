import type { InputHTMLAttributes } from 'react';

export interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'id'> {
  id: string;
  label: string;
  hint?: string;
}

/** 带标签与提示的文本输入框 */
export function Input({ id, label, hint, className, ...rest }: InputProps) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="text-14 font-medium text-fg">
        {label}
      </label>
      <input
        id={id}
        className={`rounded-sm border border-border bg-surface px-3 py-3 text-15 text-fg placeholder:text-fg-subtle ${className ?? ''}`}
        {...rest}
      />
      {hint ? <p className="text-12 text-fg-muted">{hint}</p> : null}
    </div>
  );
}
