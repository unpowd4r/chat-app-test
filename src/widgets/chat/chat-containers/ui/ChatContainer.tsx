'use client';

import { DialogContainer } from '../../../dialog';
import { ChatList } from '../../chat-list/ui/ChatList';

import { useChatContext } from '@/features/chat-provider';
import { TChat } from '@/shared/mocks';
import { ChatHeader } from '@/shared/ui';

type Props = {
  id: string;
  initialChat: TChat;
};

export const ChatContainer = ({ id, initialChat }: Props) => {
  const { getAllChats } = useChatContext();

  const chats = getAllChats();

  return (
    <>
      <aside className="h-full w-80 border-r border-gray-200">
        <div className="flex h-full flex-col">
          <ChatHeader />
          <ChatList activeChatId={id} chats={chats} />
        </div>
      </aside>

      <section className="flex flex-1 flex-col">
        <DialogContainer id={id} initialChat={initialChat} />
      </section>
    </>
  );
};
