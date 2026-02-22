import { ButtonHTMLAttributes } from 'react';

import { cn } from '@/shared/lib/utils';

type TProps = ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({ className, children, ...props }: TProps) => {
  return (
    <button
      className={cn(
        'inline-flex cursor-pointer items-center justify-center rounded-lg bg-blue-500 px-4 py-2 text-white',
        'transition-colors duration-200 hover:bg-blue-600',
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};
