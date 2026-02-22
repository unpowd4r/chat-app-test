'use client';

import { useState } from 'react';

import { TChat, TMessage } from '@/shared/mocks';

export const useChat = (initialChats: Record<string, TChat>) => {
  const [chats, setChats] = useState(initialChats);

  const sendMessage = (chatId: string, text: string) => {
    const newMessage: TMessage = {
      id: Date.now().toString(),
      text,
      createdAt: Date.now(),
      isMine: true
    };

    setChats((prev) => ({
      ...prev,
      [chatId]: {
        ...prev[chatId],
        messages: [...prev[chatId].messages, newMessage]
      }
    }));
  };

  const getChat = (id: string) => chats[id];
  const getAllChats = () => Object.values(chats);

  return { getChat, getAllChats, sendMessage };
};
