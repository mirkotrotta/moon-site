'use client';

import { ReactNode } from 'react';
import clsx from 'clsx';

interface CardProps {
  children: ReactNode;
  variant?: 'default' | 'outlined' | 'elevated';
  padding?: 'sm' | 'md' | 'lg';
  className?: string;
}

interface CardHeaderProps {
  children: ReactNode;
  className?: string;
}

interface CardContentProps {
  children: ReactNode;
  className?: string;
}

interface CardFooterProps {
  children: ReactNode;
  className?: string;
}

export function Card({ 
  children, 
  variant = 'default', 
  padding = 'md',
  className 
}: CardProps) {
  const baseStyles = 'rounded-lg transition-all duration-200';
  
  const variantStyles = {
    default: 'bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700',
    outlined: 'bg-transparent border-2 border-gray-300 dark:border-gray-600',
    elevated: 'bg-white dark:bg-gray-800 shadow-lg border border-gray-100 dark:border-gray-700',
  };

  const paddingStyles = {
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
  };

  const classes = clsx(
    baseStyles,
    variantStyles[variant],
    paddingStyles[padding],
    className
  );

  return (
    <div className={classes}>
      {children}
    </div>
  );
}

export function CardHeader({ children, className }: CardHeaderProps) {
  return (
    <div className={clsx('mb-4', className)}>
      {children}
    </div>
  );
}

export function CardContent({ children, className }: CardContentProps) {
  return (
    <div className={clsx('text-gray-600 dark:text-gray-300', className)}>
      {children}
    </div>
  );
}

export function CardFooter({ children, className }: CardFooterProps) {
  return (
    <div className={clsx('mt-4 pt-4 border-t border-gray-200 dark:border-gray-700', className)}>
      {children}
    </div>
  );
} 