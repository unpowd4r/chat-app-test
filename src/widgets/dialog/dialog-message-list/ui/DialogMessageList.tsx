import { Message, type TMessage } from '@/entities/message';

type TProps = {
  messages: TMessage[];
};

export const DialogMessageList = ({ messages }: TProps) => {
  return (
    <div className="flex min-h-0 flex-1 flex-col-reverse gap-4 overflow-y-auto px-6 py-8">
      <div className="flex flex-col gap-3">
        {messages.map((msg) => (
          <Message key={msg.id} {...msg} />
        ))}
      </div>
    </div>
  );
};
