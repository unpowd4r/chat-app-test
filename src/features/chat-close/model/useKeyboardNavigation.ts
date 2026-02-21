'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

import { ROUTES } from '@/shared/config';

export const useKeyboardNavigation = () => {
  const router = useRouter();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        router.push(ROUTES.CHAT);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [router]);
};
