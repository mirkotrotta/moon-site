'use client';

import { ReactNode } from 'react';
import { getBadgeClasses, cn } from '@/lib/designTokens';

type BadgeProps = {
  children?: ReactNode;
  variant?: 'primary' | 'secondary' | 'success' | 'neutral';
  className?: string;
  dot?: boolean;
  animate?: boolean;
};

export default function Badge({
  children,
  variant = 'neutral',
  className,
  dot = false,
  animate = false,
}: BadgeProps) {
  const classes = cn(
    getBadgeClasses(variant),
    animate && 'animate-pulse',
    className
  );

  if (dot) {
    return (
      <span className={cn(
        'w-2 h-2 rounded-full',
        variant === 'primary' ? 'bg-blue-500' :
        variant === 'secondary' ? 'bg-purple-500' :
        variant === 'success' ? 'bg-green-500' :
        'bg-gray-500',
        animate && 'animate-pulse',
        className
      )} />
    );
  }

  return (
    <span className={classes}>
      {children}
    </span>
  );
} 