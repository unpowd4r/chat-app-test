'use client';

import { type ReactNode } from 'react';

import { useKeyboardNavigation } from './config';

export const ChatCloseProvider = ({ children }: { children: ReactNode }) => {
  useKeyboardNavigation();

  return <>{children}</>;
};
