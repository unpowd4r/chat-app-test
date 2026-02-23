import { RefObject } from 'react';

import { Message } from '@/entities/dialog';
import { type TMessage } from '@/shared/mocks';
import { EmptyState } from '@/shared/ui';

type TProps = {
  messages: TMessage[];
  bottomRef: RefObject<HTMLDivElement | null>;
};

export const DialogMessageList = ({ messages, bottomRef }: TProps) => {
  if (messages.length === 0) {
    return <EmptyState message="Нет сообщений" />;
  }

  return (
    <div className="flex h-full w-full flex-col overflow-hidden">
      <div className="flex-1 overflow-y-auto px-4 py-2">
        <div className="flex min-h-full flex-col justify-end gap-3">
          {messages.map((msg) => (
            <Message key={msg.id} {...msg} />
          ))}
          <div ref={bottomRef} />
        </div>
      </div>
    </div>
  );
};
