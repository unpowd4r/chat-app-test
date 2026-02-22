import { type ReactNode } from 'react';

import { ChatCloseProvider } from '@/app/providers';

export default function ChatLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-1/1 w-full min-w-0 rounded-2xl bg-white shadow-lg">
      <ChatCloseProvider>{children}</ChatCloseProvider>
    </div>
  );
}
