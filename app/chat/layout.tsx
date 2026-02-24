import { ReactNode } from 'react';

import { ChatProvider } from '@/features/chat';
import { api } from '@/shared/api';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

const getAllMessages = async () => {
  return api.getMessages();
};

const getAllPreviewChats = async () => {
  return api.getConversations();
};

export default async function ChatRootLayout({ children }: { children: ReactNode }) {
  const [allMessages, allPreviewChats] = await Promise.all([
    getAllMessages(),
    getAllPreviewChats()
  ]);

  return (
    <main className="flex h-[80vh] w-full max-w-5xl min-w-112.5 items-center justify-center p-4">
      <div className="flex h-full w-full rounded-2xl bg-white shadow-lg">
        <ChatProvider allPreviewChats={allPreviewChats} initialMessages={allMessages}>
          {children}
        </ChatProvider>
      </div>
    </main>
  );
}
