'use client';

import { createContext, useContext } from 'react';

import { useChat } from './useChat';

import { TChat } from '@/shared/mocks';

type ChatContextType = {
  getChat: (id: string) => TChat | undefined;
  getAllChats: () => TChat[];
  sendMessage: (chatId: string, text: string) => void;
};

const ChatContext = createContext<ChatContextType | null>(null);

export const ChatProvider = ({
  children,
  initialChats
}: {
  children: React.ReactNode;
  initialChats: Record<string, TChat>;
}) => {
  const { getChat, sendMessage, getAllChats } = useChat(initialChats);

  return (
    <ChatContext.Provider value={{ getChat, sendMessage, getAllChats }}>
      {children}
    </ChatContext.Provider>
  );
};

export const useChatContext = () => {
  const context = useContext(ChatContext);
  if (!context) throw new Error('useChatContext must be used within ChatProvider');

  return context;
};
