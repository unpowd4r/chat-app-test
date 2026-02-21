import { ReactNode } from 'react';

export default function ChatRootLayout({ children }: { children: ReactNode }) {
  return (
    <main className="flex h-[80vh] w-full max-w-5xl min-w-112.5 items-center justify-center p-4">
      <div className="flex min-h-1/1 w-full rounded-2xl bg-white shadow-lg">{children}</div>
    </main>
  );
}
