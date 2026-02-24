'use client';

import { useLayoutEffect, useRef, useState } from 'react';

import { DialogHeader, DialogMessageList } from '../../ui';

import { useChatContext } from '@/features/chat';
import { SendMessageForm } from '@/features/dialog';
import { TChat } from '@/shared/mocks';

type TProps = {
  id: string;
  currentChat: TChat;
};

export const DialogContainer = ({ id, currentChat }: TProps) => {
  const { sendMessage, getChatMessages } = useChatContext();

  const bottomRef = useRef<HTMLDivElement>(null);
  const [message, setMessage] = useState<string>('');

  const messages = getChatMessages(id);

  useLayoutEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'instant' });
  }, [id, messages]);

  const handleSend = () => {
    if (!message.trim()) return;

    sendMessage(id, message);
    setMessage('');
  };

  if (!messages) return null;

  return (
    <>
      <DialogHeader name={currentChat.name} avatarSrc={currentChat.avatar} />
      <DialogMessageList messages={messages} bottomRef={bottomRef} />
      <SendMessageForm
        value={message}
        onChange={setMessage}
        onSend={handleSend}
        placeholder="Введите сообщение..."
      />
    </>
  );
};
