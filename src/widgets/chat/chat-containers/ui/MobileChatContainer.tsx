'use client';

import { DialogContainer } from '../../../dialog';

import { TChat } from '@/shared/mocks/types';

type Props = {
  id: string;
  initialChat: TChat;
};

export const MobileChatContainer = ({ id, initialChat }: Props) => {
  return (
    <section className="flex flex-1 flex-col">
      <DialogContainer id={id} initialChat={initialChat} />
    </section>
  );
};
