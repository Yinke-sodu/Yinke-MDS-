'use client';

import { useCallback, useEffect, useRef, useState } from 'react';

export interface CopyToClipboardResult {
  copiedValue: string | null;
  copy: (value: string) => void;
}

/** 在 Clipboard API 不可用时，用临时 textarea 完成复制 */
function fallbackCopy(value: string): boolean {
  const textarea = document.createElement('textarea');
  textarea.value = value;
  textarea.setAttribute('readonly', '');
  textarea.style.position = 'fixed';
  textarea.style.opacity = '0';
  document.body.appendChild(textarea);
  textarea.select();

  let copied = false;
  try {
    copied = document.execCommand('copy');
  } catch {
    copied = false;
  }

  document.body.removeChild(textarea);
  return copied;
}

/**
 * 复制文本到剪贴板，并在指定时间后自动重置复制状态。
 */
export function useCopyToClipboard(resetDelay = 1600): CopyToClipboardResult {
  const [copiedValue, setCopiedValue] = useState<string | null>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const clearTimer = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  }, []);

  const copy = useCallback(
    (value: string) => {
      setCopiedValue(value);
      clearTimer();
      timeoutRef.current = setTimeout(() => setCopiedValue(null), resetDelay);

      if (navigator.clipboard?.writeText) {
        navigator.clipboard.writeText(value).catch(() => {
          fallbackCopy(value);
        });
      } else {
        fallbackCopy(value);
      }
    },
    [clearTimer, resetDelay],
  );

  useEffect(() => clearTimer, [clearTimer]);

  return { copiedValue, copy };
}
