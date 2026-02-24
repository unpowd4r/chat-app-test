import { TChat, TChatMessages, TChatPreview } from '../mocks';

const API_BASE = 'http://localhost:3000/api';

export const fetchAPI = async <T>(endpoint: string, options?: RequestInit): Promise<T> => {
  const res = await fetch(`${API_BASE}${endpoint}`, {
    headers: {
      'Content-Type': 'application/json'
    },
    ...options
  });

  if (!res.ok) {
    throw new Error(`API Error: ${res.status} ${res.statusText}`);
  }

  return res.json();
};

export const api = {
  getMessages: () => fetchAPI<TChatMessages[]>('/messages'),
  getConversations: () => fetchAPI<TChatPreview[]>('/conversations'),
  getConversation: (id: string) => fetchAPI<TChat>(`/conversations/${id}`),
  sendMessage: (chatId: string, text: string, senderId: string) =>
    fetchAPI(`/messages/${chatId}`, {
      method: 'POST',
      body: JSON.stringify({ text, senderId })
    })
};
