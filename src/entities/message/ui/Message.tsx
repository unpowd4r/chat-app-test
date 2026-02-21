import { cn, formatMessageTime } from '@/shared/lib/utils';

type TProps = {
  text: string;
  createdAt: number;
  isMine: boolean;
};

export const Message = ({ text, createdAt, isMine }: TProps) => {
  return (
    <div
      className={cn(
        'flex w-fit max-w-[80%] flex-col rounded-xl px-4 py-2',
        isMine ? 'ml-auto bg-blue-600 text-white' : 'bg-gray-100 text-gray-700'
      )}
    >
      <p className="text-md break-words whitespace-pre-wrap">{text}</p>
      <div className="mt-1 flex justify-end">
        <span className={cn('text-xs', isMine ? 'text-blue-200' : 'text-gray-400')}>
          {formatMessageTime(createdAt)}
        </span>
      </div>
    </div>
  );
};
