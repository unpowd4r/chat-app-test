import { ChatHeader } from '@/entities/chat';
import { ResponsiveSwitch } from '@/shared/ui';
import { ChatList } from '@/widgets/chat';
import { DialogContainer } from '@/widgets/dialog';

type TProps = {
  id: string;
};

export const ChatDetailPage = ({ id }: TProps) => {
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
};
