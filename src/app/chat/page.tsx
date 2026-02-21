import { MobileLayoutHandler } from '@/features/mobile-layout';
import { CHATS_MOCKED } from '@/shared/mocks';
import { ChatList } from '@/widgets/chat';
import { ChatHeader } from '@/widgets/chat/chat-header';

export default function ChatPage() {
  const desktopView = (
    <>
      <aside className="w-80 border-r border-gray-200">
        <ChatHeader />
        <ChatList activeChatId={undefined} chats={Object.values(CHATS_MOCKED)} />
      </aside>

      <section className="flex flex-1 items-center justify-center">
        <p className="text-gray-400">Выберите чат</p>
      </section>
    </>
  );

  const mobileView = (
    <aside className="w-full border-r border-gray-200">
      <ChatHeader />
      <ChatList activeChatId={undefined} chats={Object.values(CHATS_MOCKED)} />
    </aside>
  );

  return <MobileLayoutHandler desktop={desktopView} mobile={mobileView} />;
}
