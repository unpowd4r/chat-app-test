'use client';

import { useRouter } from 'next/navigation';

import { ROUTES } from '@/shared/config/routes';
import { Button } from '@/shared/ui';

export const BackToChatsButton = () => {
  const router = useRouter();

  return (
    <Button
      onClick={() => router.push(ROUTES.CHAT)}
      className="bg-transparent p-0 text-gray-700 hover:bg-transparent hover:text-gray-500"
    >
      <svg
        width="25"
        height="25"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M19 12H5M12 19l-7-7 7-7" />
      </svg>
    </Button>
  );
};
