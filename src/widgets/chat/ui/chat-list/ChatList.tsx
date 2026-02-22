'use client';

import { ChatCard } from '@/entities/chat';
import { useChatContext } from '@/features/chat';
import { sortChatsByTime } from '@/shared/lib/utils';

type TProps = {
  activeChatId?: string;
};

export const ChatList = ({ activeChatId }: TProps) => {
  const { getAllChats } = useChatContext();

  const effectiveChats = getAllChats();
  const sortedChats = effectiveChats ? sortChatsByTime(effectiveChats) : [];

  if (sortedChats.length === 0) {
    return (
      <div className="flex h-full items-center justify-center">
        <p className="text-gray-400">Чатов нет</p>
      </div>
    );
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
              createdAt={lastMessage?.createdAt || 0}
              avatarSrc={chat.avatar}
              isActive={chat.id === activeChatId}
            />
          </div>
        );
      })}
    </div>
  );
};
