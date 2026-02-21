'use client';

import { useKeyboardNavigation } from '../model/useKeyboardNavigation';

export const ChatCloseHandler = ({ children }: { children: React.ReactNode }) => {
  useKeyboardNavigation();

  return <>{children}</>;
};
