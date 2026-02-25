'use client';

import { useEffect, useRef } from 'react';

export const usePolling = (callback: () => void | Promise<void>, intervalMs: number) => {
  const savedCallback = useRef(callback);

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    const tick = async () => {
      try {
        await savedCallback.current();
      } catch (e) {
        console.error('Polling error:', e);
      }
    };

    tick();
    const id = setInterval(tick, intervalMs);
    return () => clearInterval(id);
  }, [intervalMs]);
};
