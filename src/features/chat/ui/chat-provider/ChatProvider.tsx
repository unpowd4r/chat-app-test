'use client';

import { createContext, type ReactNode } from 'react';

import { useChat } from '../../model';

import { TChatMessages, TChatPreview, TMessage } from '@/shared/mocks';

type TChatContextType = {
  chatCardsPreview: TChatPreview[];
  sendMessage: (chatId: string, text: string) => Promise<void>;
  getChatMessages: (chatId: string) => TMessage[];
};

export const ChatContext = createContext<TChatContextType | null>(null);

export const ChatProvider = ({
  children,
  allPreviewChats,
  initialMessages
}: {
  children: ReactNode;
  allPreviewChats: TChatPreview[];
  initialMessages: TChatMessages[];
}) => {
  const { chatCardsPreview, sendMessage, getChatMessages } = useChat(
    allPreviewChats,
    initialMessages
  );

  return (
    <ChatContext.Provider value={{ chatCardsPreview, sendMessage, getChatMessages }}>
      {children}
    </ChatContext.Provider>
  );
};
