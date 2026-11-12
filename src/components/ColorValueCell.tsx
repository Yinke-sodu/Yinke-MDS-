'use client';

import type { ColorVariableValue } from '@/content/colors';
import { useCopyToClipboard } from '@/hooks/useCopyToClipboard';

export interface ColorValueCellProps {
  value: ColorVariableValue;
  copyActionLabel: string;
  copiedLabel: string;
}

/** 颜色值单元格：点击复制色值，并给出短暂反馈 */
export function ColorValueCell({
  value,
  copyActionLabel,
  copiedLabel,
}: ColorValueCellProps) {
  const { copy, copiedValue } = useCopyToClipboard();
  const isCopied = copiedValue === value.value;

  return (
    <button
      type="button"
      onClick={() => copy(value.value)}
      aria-label={`${copyActionLabel}${value.value}`}
      className="flex w-full cursor-pointer items-center gap-3 px-4 py-4 text-left transition-colors duration-fast hover:bg-primary-soft"
    >
      <span
        className="h-6 w-6 shrink-0 rounded-sm border border-border-subtle"
        style={{ backgroundColor: value.swatch }}
      />
      <span className={`text-14 ${isCopied ? 'text-primary' : 'text-fg'}`}>
        {isCopied ? copiedLabel : value.value}
      </span>
    </button>
  );
}
