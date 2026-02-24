import { TChatPreview } from '@/shared/mocks';

export const formatMessageTime = (timestamp: number): string => {
  const now = Date.now();
  const diff = now - timestamp;
  const oneDayMs = 24 * 60 * 60 * 1000;

  // Сегодня
  if (diff < oneDayMs && new Date(timestamp).getDate() === new Date(now).getDate()) {
    const date = new Date(timestamp);
    return `${date.getHours().toString().padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}`;
  }

  // Вчера
  if (diff < 2 * oneDayMs) {
    return 'Вчера';
  }

  // Другая дата
  const date = new Date(timestamp);
  return `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`;
};

export const formatLastMessageTime = (timestamp: number): string => {
  const now = Date.now();
  const diff = now - timestamp;
  const oneDayMs = 24 * 60 * 60 * 1000;

  if (diff < oneDayMs) {
    const date = new Date(timestamp);
    return `${date.getHours().toString().padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}`;
  }

  if (diff < 2 * oneDayMs) {
    return 'Вчера';
  }

  const date = new Date(timestamp);
  return `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`;
};

export const getTimeValue = (timestamp: number): number => {
  return timestamp;
};

export const sortChatsByTime = (chats: TChatPreview[]): TChatPreview[] => {
  return [...chats].sort((a, b) => {
    const timeA = a.lastMessage?.createdAt || 0;
    const timeB = b.lastMessage?.createdAt || 0;

    return timeB - timeA;
  });
};
