import { chats } from '@/app/store';

export async function GET() {
  try {
    if (!chats) {
      return Response.json({ error: 'Conversations not found' }, { status: 404 });
    }

    const chatsArray = Object.values(chats).map((chat) => ({
      id: chat.id,
      name: chat.name,
      avatar: chat.avatar,
      lastMessage: chat.messages[chat.messages.length - 1] || null
    }));

    return Response.json(chatsArray, { status: 200 });
  } catch (error) {
    console.error('Error get conversations:', error);
    return Response.json({ error: 'Internal server error' }, { status: 500 });
  }
}
