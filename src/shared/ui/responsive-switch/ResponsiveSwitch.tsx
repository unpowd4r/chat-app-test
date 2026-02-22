'use client';

import { type ReactNode } from 'react';

import { MEDIA_QUERIES } from '@/shared/config';
import { useMediaQuery } from '@/shared/lib/hooks';

type TProps = {
  desktop: ReactNode;
  mobile: ReactNode;
};

export const ResponsiveSwitch = ({ desktop, mobile }: TProps) => {
  const isMobile = useMediaQuery(MEDIA_QUERIES.TABLET);

  return isMobile ? mobile : desktop;
};
