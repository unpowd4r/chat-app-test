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
