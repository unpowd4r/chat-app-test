'use client';

import { useCallback, useState } from 'react';

import { api } from '@/shared/api';
import { TChatMessages, TChatPreview, TMessage } from '@/shared/mocks';

export const useChat = (allPreviewChats: TChatPreview[], initialMessages: TChatMessages[]) => {
  const [chatCardsPreview, setChatCardsPreview] = useState<TChatPreview[]>(allPreviewChats);
  const [allMessages, setAllMessages] = useState<TChatMessages[]>(initialMessages);

  const sendMessage = useCallback(
    async (chatId: string, text: string) => {
      const optimisticUpdateMessage: TMessage = {
        id: Date.now().toString(),
        text,
        createdAt: Date.now(),
        isMine: true
      };

      const previousMessages = allMessages;
      const previousPreview = chatCardsPreview;

      setAllMessages((prev) =>
        prev.map((chat) =>
          chat.id === chatId
            ? { ...chat, messages: [...chat.messages, optimisticUpdateMessage] }
            : chat
        )
      );

      setChatCardsPreview((prev) =>
        prev.map((chat) =>
          chat.id === chatId ? { ...chat, lastMessage: optimisticUpdateMessage } : chat
        )
      );

      try {
        await api.sendMessage(chatId, text, 'me');
      } catch (error) {
        setAllMessages(previousMessages);
        setChatCardsPreview(previousPreview);

        console.error('Error sending message:', error);
      }
    },
    [allMessages, chatCardsPreview]
  );

  const getChatMessages = useCallback(
    (chatId: string) => {
      return allMessages.find((chat) => chat.id === chatId)?.messages || [];
    },
    [allMessages]
  );

  return { chatCardsPreview, sendMessage, getChatMessages };
};
