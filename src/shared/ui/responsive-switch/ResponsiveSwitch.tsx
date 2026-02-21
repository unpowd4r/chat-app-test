'use client';

import { ReactNode } from 'react';

import { MEDIA_QUERIES } from '@/shared/config';
import { useMediaQuery } from '@/shared/lib/utils';

type Props = {
  desktop: ReactNode;
  mobile: ReactNode;
};

export const ResponsiveSwitch = ({ desktop, mobile }: Props) => {
  const isMobile = useMediaQuery(MEDIA_QUERIES.TABLET);

  return <>{isMobile ? mobile : desktop}</>;
};
