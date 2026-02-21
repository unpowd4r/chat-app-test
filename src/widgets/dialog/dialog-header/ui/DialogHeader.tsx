'use client';

import { UserAvatar, UserName } from '@/entities/user';
import { BackToChatsButton } from '@/features/back-to-chats';
import { MEDIA_QUERIES } from '@/shared/config';
import { cn, useMediaQuery } from '@/shared/lib/utils';

type TProps = {
  name: string;
  avatarSrc: string;
};

export const DialogHeader = ({ name, avatarSrc }: TProps) => {
  const isTablet = useMediaQuery(MEDIA_QUERIES.TABLET);

  return (
    <header
      className={cn(
        `flex h-20 items-center gap-3 rounded-tr-2xl border-b border-gray-200 bg-gray-50 px-6 py-4`,
        isTablet && 'rounded-tl-2xl'
      )}
    >
      {isTablet && <BackToChatsButton />}
      <UserAvatar src={avatarSrc} name={name} priority />
      <UserName name={name} />
    </header>
  );
};
