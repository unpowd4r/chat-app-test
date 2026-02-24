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

export type TChatPreview = {
  id: string;
  name: string;
  avatar: string;
  lastMessage: TMessage | null;
};

export type TChatMessages = {
  id: string;
  messages: TMessage[];
};
