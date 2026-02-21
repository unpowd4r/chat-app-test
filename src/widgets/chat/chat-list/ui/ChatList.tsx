'use client';

import { ChatPreview } from '@/features/chat-preview';
import { useChatContext } from '@/features/chat-provider';
import { sortChatsByTime } from '@/shared/lib/utils';
import { TChat } from '@/shared/mocks';

type TProps = {
  activeChatId?: string;
  chats?: TChat[];
};

export const ChatList = ({ activeChatId, chats }: TProps) => {
  const { getAllChats } = useChatContext();

  const effectiveChats = chats ?? getAllChats();
  const sortedChats = effectiveChats ? sortChatsByTime(effectiveChats) : [];

  if (sortedChats.length === 0) {
    return (
      <div className="flex h-full items-center justify-center">
        <p className="text-gray-400">Чатов нет</p>
      </div>
    );
  }

  return (
    <div className="flex h-full flex-col overflow-y-auto">
      {sortedChats.map((chat) => {
        const lastMessage = chat.messages[chat.messages.length - 1];

        return (
          <div key={chat.id} className="border-b border-gray-200">
            <ChatPreview
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
