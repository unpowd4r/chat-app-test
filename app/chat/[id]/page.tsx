import { redirect } from 'next/navigation';

import { ChatDetailPage } from '@/pages/ChatDetail';
import { ROUTES } from '@/shared/config';
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

  if (!CHATS_MOCKED[id]) {
    redirect(ROUTES.CHAT);
  }

  return <ChatDetailPage id={id} />;
}
