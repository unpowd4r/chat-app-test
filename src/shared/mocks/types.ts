export type TMessage = {
  id: string;
  text: string;
  createdAt: number;
  isMine: boolean;
};

export type TChat = {
  id: string;
  name: string;
  avatar: string;
  messages: TMessage[];
};

export type TChatPreview = Omit<TChat, 'messages'> & {
  lastMessage: TMessage | null;
};

export type TChatMessages = Pick<TChat, 'id' | 'messages'>;
