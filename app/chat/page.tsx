import { ChatHeader } from '@/entities/chat';
import { ResponsiveSwitch } from '@/shared/ui';
import { ChatList } from '@/widgets/chat';

export default async function Chat() {
  const sidebarContent = (
    <div className="flex h-full flex-col">
      <ChatHeader />
      <ChatList />
    </div>
  );

  const desktopView = (
    <>
      <aside className="h-full w-80 border-r border-gray-200">{sidebarContent}</aside>
      <section className="flex flex-1 items-center justify-center">
        <p className="text-gray-400">Выберите чат</p>
      </section>
    </>
  );

  const mobileView = (
    <aside className="h-full w-full border-r border-gray-200">{sidebarContent}</aside>
  );

  return <ResponsiveSwitch desktop={desktopView} mobile={mobileView} />;
}
