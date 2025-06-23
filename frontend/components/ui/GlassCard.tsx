'use client';

import { ReactNode } from 'react';
import { cn, designTokens } from '@/lib/designTokens';

type GlassCardProps = {
  children: ReactNode;
  className?: string;
  blur?: 'sm' | 'md' | 'lg';
  padding?: 'sm' | 'md' | 'lg' | 'xl';
  rounded?: 'sm' | 'md' | 'lg' | 'xl';
};

export default function GlassCard({
  children,
  className,
  blur = 'sm',
  padding = 'lg',
  rounded = 'lg',
}: GlassCardProps) {
  const blurClasses = {
    sm: 'backdrop-blur-sm',
    md: 'backdrop-blur-md',
    lg: 'backdrop-blur-lg',
  };

  const classes = cn(
    // Base glass morphism styles
    'bg-white/95 dark:bg-gray-900/95',
    'border border-gray-200/50 dark:border-gray-700/50',
    blurClasses[blur],
    designTokens.borderRadius[rounded],
    designTokens.spacing[padding],
    designTokens.transitions.default,
    // Hover effects
    'hover:bg-white/98 dark:hover:bg-gray-900/98',
    'hover:shadow-lg',
    className
  );

  return (
    <div className={classes}>
      {children}
    </div>
  );
} 