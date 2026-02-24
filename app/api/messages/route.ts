import { chats } from '@/app/store';

export async function GET() {
  try {
    if (!chats) {
      return Response.json({ error: 'Messages not found' }, { status: 404 });
    }

    const messagesArray = Object.values(chats).map((chat) => ({
      id: chat.id,
      messages: chat.messages
    }));

    return Response.json(messagesArray, { status: 200 });
  } catch (error) {
    console.error('Error get messages:', error);
    return Response.json({ error: 'Internal server error' }, { status: 500 });
  }
}
