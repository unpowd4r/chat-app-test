'use client';

import { ChatCard, useChatContext } from '@/features/chat';
import { sortChatsByTime } from '@/shared/lib/utils';
import { EmptyState } from '@/shared/ui';

type TProps = {
  activeChatId?: string;
};

export const ChatList = ({ activeChatId }: TProps) => {
  const { chatCardsPreview } = useChatContext();

  const sortedChats = chatCardsPreview ? sortChatsByTime(chatCardsPreview) : [];

  if (sortedChats.length === 0) {
    return <EmptyState message="Чатов нет" />;
  }

  return (
    <div className="min-h-0 flex-1 overflow-y-auto">
      {sortedChats.map((chat) => {
        return (
          <div key={chat.id} className="border-b border-gray-200">
            <ChatCard
              id={chat.id}
              name={chat.name}
              message={chat.lastMessage?.text || 'Нет сообщений'}
              createdAt={chat.lastMessage?.createdAt}
              avatarSrc={chat.avatar}
              isActive={chat.id === activeChatId}
            />
          </div>
        );
      })}
    </div>
  );
};
