type TMessage = {
  id: string;
  text: string;
  createdAt: number;
  isMine: boolean;
};

type TChat = {
  id: string;
  name: string;
  avatar: string;
  messages: TMessage[];
};

export const CHATS_MOCKED: Record<string, TChat> = {
  '1': {
    id: '1',
    name: 'Алиса',
    avatar: '/alice.jpg',
    messages: [
      { id: '1', text: 'Привет! 👋', createdAt: 1742740500000, isMine: false },
      { id: '2', text: 'Всё хорошо!', createdAt: 1742740620000, isMine: true },
      { id: '3', text: 'Отправь файл пожалуйста', createdAt: 1742740680000, isMine: false },
      { id: '4', text: 'Уже отправил 👍', createdAt: 1742740800000, isMine: true },
      { id: '5', text: 'Спасибо! 🔥', createdAt: 1742740860000, isMine: false }
    ]
  },
  '2': {
    id: '2',
    name: 'Боб',
    avatar: '/bob.jpg',
    messages: [
      { id: '1', text: 'Документ готов', createdAt: 1742654100000, isMine: false },
      { id: '2', text: 'Скинь ссылку', createdAt: 1742654220000, isMine: true },
      { id: '3', text: 'https://example.com/doc', createdAt: 1742654280000, isMine: false },
      { id: '4', text: 'Понял, спасибо', createdAt: 1742654400000, isMine: true }
    ]
  },
  '3': {
    id: '3',
    name: 'Мария',
    avatar: '/maria.jpg',
    messages: [
      { id: '1', text: 'Скинь контакты разработчика', createdAt: 1742567400000, isMine: false },
      { id: '2', text: '@fake_tg в tg', createdAt: 1742567460000, isMine: true },
      { id: '3', text: 'Спасибо!', createdAt: 1742567520000, isMine: false }
    ]
  },
  '4': {
    id: '4',
    name: 'Александр',
    avatar: '/alexandr.jpg',
    messages: []
  }
};
