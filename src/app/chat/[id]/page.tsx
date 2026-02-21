import { ChatCloseHandler } from '@/features/chat-close';
import { CHATS_MOCKED } from '@/shared/mocks';
import { ResponsiveSwitch } from '@/shared/ui';
import { ChatContainer, MobileChatContainer } from '@/widgets/chat';

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
  const chat = CHATS_MOCKED[id];

  const desktopView = <ChatContainer id={id} initialChat={chat} />;
  const mobileView = <MobileChatContainer id={id} initialChat={chat} />;

  return (
    <ChatCloseHandler>
      <ResponsiveSwitch desktop={desktopView} mobile={mobileView} />
    </ChatCloseHandler>
  );
}
