'use client';

import { type KeyboardEvent } from 'react';

import { MEDIA_QUERIES } from '@/shared/config/breakpoints';
import { useMediaQuery } from '@/shared/lib/hooks';
import { cn } from '@/shared/lib/utils/cn';
import { Button, Textarea } from '@/shared/ui';

type TProps = {
  value: string;
  onChange: (value: string) => void;
  onSend: () => void;
  placeholder?: string;
};

export const SendMessageForm = ({ value, onChange, onSend, placeholder }: TProps) => {
  const isTablet = useMediaQuery(MEDIA_QUERIES.TABLET);
  const isSendDisabled = value.trim() === '';

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      onSend();
    }
  };

  return (
    <div
      className={cn(
        'max-w-full rounded-br-2xl border-t border-gray-200 bg-gray-50 px-6 py-4',
        isTablet && 'rounded-bl-2xl'
      )}
    >
      <div className="flex items-end gap-3">
        <Textarea
          value={value}
          rows={1}
          onChange={(e) => onChange(e.target.value)}
          onKeyDown={handleKeyDown}
          className="self-center"
          placeholder={placeholder}
        />
        <Button disabled={isSendDisabled} onClick={onSend}>
          Отправить
        </Button>
      </div>
    </div>
  );
};
