import { ChatCloseHandler } from '@/features/chat-close';
import { MobileLayoutHandler } from '@/features/mobile-layout';
import { SendMessageForm } from '@/features/send-message';
import { CHATS_MOCKED } from '@/shared/mocks';
import { ChatList } from '@/widgets/chat';
import { ChatHeader } from '@/widgets/chat/chat-header';
import { DialogHeader, DialogMessageList } from '@/widgets/dialog';

type TProps = {
  params: Promise<{ id: string }>;
};

export default async function ChatDetail({ params }: TProps) {
  const { id } = await params;
  const chat = CHATS_MOCKED[id];

  const desktopView = (
    <>
      <aside className="w-80 border-r border-gray-200">
        <ChatHeader />
        <ChatList activeChatId={id} chats={Object.values(CHATS_MOCKED)} />
      </aside>

      <section className="flex flex-1 flex-col">
        {chat ? (
          <>
            <DialogHeader name={chat.name} avatarSrc={chat.avatar} />
            <DialogMessageList messages={chat.messages} />
            <SendMessageForm chatId={id} />
          </>
        ) : (
          <div className="flex h-full items-center justify-center text-gray-500">Выберите чат</div>
        )}
      </section>
    </>
  );

  const mobileView = (
    <section className="flex flex-1 flex-col">
      {chat ? (
        <>
          <DialogHeader name={chat.name} avatarSrc={chat.avatar} />
          <DialogMessageList messages={chat.messages} />
          <SendMessageForm chatId={id} />
        </>
      ) : (
        <div className="flex h-full items-center justify-center text-gray-500">Выберите чат</div>
      )}
    </section>
  );

  return (
    <ChatCloseHandler>
      <MobileLayoutHandler desktop={desktopView} mobile={mobileView} />
    </ChatCloseHandler>
  );
}
