'use client';

import { MEDIA_QUERIES } from '@/shared/config/breakpoints';
import { useMediaQuery } from '@/shared/lib/hooks/useMediaQuery';
import { cn } from '@/shared/lib/utils/cn';
import { Button, Textarea } from '@/shared/ui';

type TProps = {
  chatId: string;
};

export const SendMessageForm = ({ chatId }: TProps) => {
  const isTablet = useMediaQuery(MEDIA_QUERIES.TABLET);
  console.log(chatId);

  return (
    <div
      className={cn(
        'rounded-br-2xl border-t border-gray-200 bg-gray-50 px-6 py-4',
        isTablet && 'rounded-bl-2xl'
      )}
    >
      <div className="flex items-end gap-3">
        <Textarea className="self-center" placeholder="Введите сообщение..." />
        <Button>Отправить</Button>
      </div>
    </div>
  );
};
