import { redirect } from 'next/navigation';

import { ChatHeader } from '@/entities/chat';
import { ROUTES } from '@/shared/config';
import { CHATS_MOCKED } from '@/shared/mocks';
import { ResponsiveSwitch } from '@/shared/ui';
import { ChatList } from '@/widgets/chat';
import { DialogContainer } from '@/widgets/dialog';

export const generateStaticParams = async () => {
  return Object.keys(CHATS_MOCKED).map((id) => ({
    id
  }));
};

type TProps = {
  params: Promise<{ id: string }>;
};

export default async function ChatDetail({ params }: TProps) {
  const { id } = await params;

  if (!CHATS_MOCKED[id]) {
    redirect(ROUTES.CHAT);
  }

  const desktopView = (
    <>
      <aside className="h-full w-80 border-r border-gray-200">
        <div className="flex h-full flex-col">
          <ChatHeader />
          <ChatList activeChatId={id} />
        </div>
      </aside>

      <section className="flex max-w-2xl min-w-0 flex-1 flex-col">
        <DialogContainer id={id} />
      </section>
    </>
  );

  const mobileView = (
    <section className="flex max-w-2xl min-w-0 flex-1 flex-col">
      <DialogContainer id={id} />
    </section>
  );

  return <ResponsiveSwitch desktop={desktopView} mobile={mobileView} />;
}
