'use client';

import { useLayoutEffect, useRef, useState } from 'react';

import { DialogHeader, DialogMessageList } from '../../ui';

import { useChatContext } from '@/features/chat';
import { SendMessageForm } from '@/features/dialog';

type TProps = {
  id: string;
};

export const DialogContainer = ({ id }: TProps) => {
  const { getChat, sendMessage } = useChatContext();
  const bottomRef = useRef<HTMLDivElement>(null);

  const [message, setMessage] = useState('');

  const chat = getChat(id);

  useLayoutEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'instant' });
  }, [id, sendMessage]);

  const handleSend = () => {
    if (!message.trim()) return;

    sendMessage(id, message);
    setMessage('');
  };

  if (!chat) return null;

  return (
    <>
      <DialogHeader name={chat.name} avatarSrc={chat.avatar} />
      <DialogMessageList messages={chat.messages} bottomRef={bottomRef} />
      <SendMessageForm
        value={message}
        onChange={setMessage}
        onSend={handleSend}
        placeholder="Введите сообщение..."
      />
    </>
  );
};
