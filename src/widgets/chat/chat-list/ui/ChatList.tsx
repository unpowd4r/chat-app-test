import { TChat } from '@/entities/chat';
import { ChatPreview } from '@/features/chat-preview';
import { sortChatsByTime } from '@/shared/lib/utils';

type TProps = {
  activeChatId?: string;
  chats?: TChat[];
};

export const ChatList = ({ activeChatId, chats }: TProps) => {
  const sortedChats = chats ? sortChatsByTime(chats) : [];
  return (
    <>
      <div className="flex flex-col">
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
    </>
  );
};
