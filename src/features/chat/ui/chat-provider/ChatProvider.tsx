'use client';

import { createContext, type ReactNode } from 'react';

import { useChat } from '../../model';

import { TChat } from '@/shared/mocks';

type TChatContextType = {
  getChat: (id: string) => TChat | undefined;
  getAllChats: () => TChat[];
  sendMessage: (chatId: string, text: string) => void;
};

export const ChatContext = createContext<TChatContextType | null>(null);

export const ChatProvider = ({
  children,
  initialChats
}: {
  children: ReactNode;
  initialChats: Record<string, TChat>;
}) => {
  const { getChat, sendMessage, getAllChats } = useChat(initialChats);

  return (
    <ChatContext.Provider value={{ getChat, sendMessage, getAllChats }}>
      {children}
    </ChatContext.Provider>
  );
};
