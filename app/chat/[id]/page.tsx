import { ChatDetailPage } from '@/pages/ChatDetail';
import { CHATS_MOCKED } from '@/shared/mocks';

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

  return <ChatDetailPage id={id} />;
}
