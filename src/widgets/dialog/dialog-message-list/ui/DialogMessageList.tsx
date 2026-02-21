import { Message } from '@/entities/message';
import { TMessage } from '@/shared/mocks';

type TProps = {
  messages: TMessage[];
};

export const DialogMessageList = ({ messages }: TProps) => {
  if (messages.length === 0) {
    return (
      <div className="flex h-full items-center justify-center">
        <p className="text-gray-400">Нет сообщений</p>
      </div>
    );
  }

  return (
    <div className="flex min-h-0 flex-1 flex-col">
      <div className="flex max-w-2xl flex-1 flex-col-reverse gap-4 overflow-y-auto px-4 py-2">
        <div className="flex flex-col gap-3">
          {messages.map((msg) => (
            <Message key={msg.id} {...msg} />
          ))}
        </div>
      </div>
    </div>
  );
};
