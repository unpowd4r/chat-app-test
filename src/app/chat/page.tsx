import { ResponsiveSwitch } from '@/shared/ui';
import { ChatSidebar } from '@/widgets/chat';

export default function ChatPage() {
  const desktopView = (
    <>
      <aside className="h-full w-80 border-r border-gray-200">
        <ChatSidebar />
      </aside>

      <section className="flex flex-1 items-center justify-center">
        <p className="text-gray-400">Выберите чат</p>
      </section>
    </>
  );

  const mobileView = (
    <aside className="h-full w-full border-r border-gray-200">
      <ChatSidebar />
    </aside>
  );

  return <ResponsiveSwitch desktop={desktopView} mobile={mobileView} />;
}
