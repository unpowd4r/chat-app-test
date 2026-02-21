'use client';

import { useCallback, useState } from 'react';

import { DialogHeader } from '../../dialog-header/ui/DialogHeader';
import { DialogMessageList } from '../../dialog-message-list/ui/DialogMessageList';

import { useChatContext } from '@/features/chat-provider';
import { DialogSendMessageForm } from '@/features/send-message';
import { TChat } from '@/shared/mocks/types';

type Props = {
  id: string;
  initialChat: TChat;
};

export const DialogContainer = ({ id, initialChat }: Props) => {
  const { getChat, sendMessage } = useChatContext();

  const [message, setMessage] = useState('');

  const chat = getChat(id) || initialChat;

  const handleSend = () => {
    if (!message.trim()) return;

    sendMessage(id, message);
    setMessage('');
  };

  if (!chat) return null;

  return (
    <>
      <DialogHeader name={chat.name} avatarSrc={chat.avatar} />
      <DialogMessageList messages={chat.messages} />
      <DialogSendMessageForm
        value={message}
        onChange={setMessage}
        onSend={handleSend}
        placeholder="Введите сообщение..."
      />
    </>
  );
};
