type TMessage = {
  id: string;
  text: string;
  createdAt: number;
};

export type TChat = {
  id: string;
  name: string;
  avatar: string;
  messages: TMessage[];
};
