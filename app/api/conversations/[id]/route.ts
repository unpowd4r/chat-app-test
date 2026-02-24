import { NextRequest } from 'next/server';

import { chats } from '@/app/store';

type TParams = {
  params: Promise<{ id: string }>;
};

export async function GET(request: NextRequest, { params }: TParams) {
  try {
    const { id } = await params;

    const chat = chats[id];

    if (!chat) {
      return Response.json({ error: 'Conversation not found' }, { status: 404 });
    }

    const chatPreview = {
      id: chat.id,
      name: chat.name,
      avatar: chat.avatar
    };

    return Response.json(chatPreview, { status: 200 });
  } catch (error) {
    console.error('Error fetching conversation:', error);
    return Response.json({ error: 'Internal server error' }, { status: 500 });
  }
}
