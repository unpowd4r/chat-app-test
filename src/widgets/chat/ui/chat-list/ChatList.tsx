'use client';

import { ChatCard, useChatContext } from '@/features/chat';
import { sortChatsByTime } from '@/shared/lib/utils';
import { EmptyState } from '@/shared/ui';

type TProps = {
  activeChatId?: string;
};

export const ChatList = ({ activeChatId }: TProps) => {
  const { getAllChats } = useChatContext();

  const effectiveChats = getAllChats();
  const sortedChats = effectiveChats ? sortChatsByTime(effectiveChats) : [];

  if (sortedChats.length === 0) {
    return <EmptyState message="Чатов нет" />;
  }

  return (
    <div className="min-h-0 flex-1 overflow-y-auto">
      {sortedChats.map((chat) => {
        const lastMessage = chat.messages[chat.messages.length - 1];

        return (
          <div key={chat.id} className="border-b border-gray-200">
            <ChatCard
              id={chat.id}
              name={chat.name}
              message={lastMessage?.text || 'Нет сообщений'}
              createdAt={lastMessage?.createdAt}
              avatarSrc={chat.avatar}
              isActive={chat.id === activeChatId}
            />
          </div>
        );
      })}
    </div>
  );
};
