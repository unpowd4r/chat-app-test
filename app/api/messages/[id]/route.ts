import { NextRequest } from 'next/server';
import z from 'zod';

import { chats } from '@/app/store';
import { TMessage } from '@/shared/mocks';

type TParams = {
  params: Promise<{ id: string }>;
};

const messageSchema = z.object({
  text: z.string().min(1, 'Message cannot be empty').max(4096, 'Message too long'),
  senderId: z.string().min(1, 'Sender ID is required')
});

export async function POST(request: NextRequest, { params }: TParams) {
  try {
    const { id } = await params;
    const body = await request.json();

    const validationResult = messageSchema.safeParse(body);

    if (!validationResult.success) {
      return Response.json(
        {
          error: 'Validation failed',
          details: validationResult.error.message
        },
        { status: 400 }
      );
    }

    const { text, senderId } = validationResult.data;

    const chat = chats[id];
    if (!chat) {
      return Response.json({ error: 'Conversation not found' }, { status: 404 });
    }

    const newMessage: TMessage = {
      id: Date.now().toString(),
      text,
      createdAt: Date.now(),
      isMine: senderId === 'me'
    };

    chat.messages.push(newMessage);

    return Response.json(newMessage, { status: 201 });
  } catch (error) {
    console.error('Error sending message:', error);
    return Response.json({ error: 'Internal server error' }, { status: 500 });
  }
}
