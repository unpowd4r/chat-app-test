'use client';
import { TextareaHTMLAttributes, useCallback, useEffect, useRef } from 'react';

import { cn } from '@/shared/lib/utils';

type TProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  maxHeight?: number;
  maxLength?: number;
};

export const Textarea = ({ className, maxHeight = 140, maxLength = 4096, ...props }: TProps) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const adjustHeight = useCallback(() => {
    const textarea = textareaRef.current;
    if (!textarea) return;

    textarea.style.height = 'auto';
    const newHeight = Math.min(textarea.scrollHeight, maxHeight);
    textarea.style.height = `${newHeight}px`;
  }, [maxHeight]);

  useEffect(() => {
    adjustHeight();
  }, [props.value, adjustHeight]);

  useEffect(() => {
    const textarea = textareaRef.current;
    if (!textarea) return;

    textarea.addEventListener('input', adjustHeight);
    return () => textarea.removeEventListener('input', adjustHeight);
  }, [adjustHeight]);

  return (
    <textarea
      ref={textareaRef}
      maxLength={maxLength}
      className={cn(
        'flex-1 resize-none rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm text-gray-500',
        'placeholder:text-gray-500 focus:ring-1 focus:ring-gray-100 focus:outline-none',
        'overflow-y-auto',
        className
      )}
      {...props}
    />
  );
};
