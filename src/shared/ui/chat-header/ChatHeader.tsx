'use client';

import { MEDIA_QUERIES } from '@/shared/config';
import { cn, useMediaQuery } from '@/shared/lib/utils';

export const ChatHeader = () => {
  const isTablet = useMediaQuery(MEDIA_QUERIES.TABLET);

  return (
    <div
      className={cn(
        'flex h-20 items-center gap-3 rounded-tl-2xl border-b border-gray-200 bg-gray-50 px-6 py-4',
        isTablet && 'rounded-tr-2xl'
      )}
    >
      <h2 className="text-lg font-bold text-gray-500">Чаты</h2>
    </div>
  );
};
