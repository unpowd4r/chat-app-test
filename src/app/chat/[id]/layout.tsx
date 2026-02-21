import { ReactNode } from 'react';

export default function ChatLayout({ children }: { children: ReactNode }) {
  return <div className="flex min-h-1/1 w-full rounded-2xl bg-white shadow-lg">{children}</div>;
}
