import Link from 'next/link';

import { UserAvatar, UserName } from '@/entities/user';
import { ROUTES } from '@/shared/config';
import { cn, formatLastMessageTime } from '@/shared/lib/utils';

type TProps = {
  id: string;
  name: string;
  message: string;
  createdAt: number;
  avatarSrc: string;
  isActive?: boolean;
};

export const ChatCard = ({ id, name, message, createdAt, avatarSrc, isActive }: TProps) => {
  return (
    <Link href={`${ROUTES.CHAT}/${id}`}>
      <div
        className={cn(
          'flex h-20 cursor-pointer items-center gap-4 p-4 transition-colors duration-200',
          isActive ? 'bg-blue-100' : 'hover:bg-gray-100'
        )}
      >
        <UserAvatar src={avatarSrc} name={name} priority />
        <div className="flex w-full min-w-0 gap-1">
          <div className="min-w-0 flex-1">
            <UserName name={name} />
            <p className="truncate text-lg text-gray-500">{message}</p>
          </div>
          <div className="shrink-0 text-right">
            <p className="text-primary whitespace-nowrap text-gray-500">
              {formatLastMessageTime(createdAt)}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};
