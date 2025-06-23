'use client';

import { ReactNode } from 'react';
import clsx from 'clsx';

interface TagProps {
  children: ReactNode;
  variant?: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'error';
  size?: 'sm' | 'md' | 'lg';
  removable?: boolean;
  onRemove?: () => void;
  className?: string;
}

export default function Tag({ 
  children, 
  variant = 'default', 
  size = 'md',
  removable = false,
  onRemove,
  className 
}: TagProps) {
  const baseStyles = 'inline-flex items-center font-medium rounded-full transition-colors';
  
  const sizeStyles = {
    sm: 'text-xs px-2 py-1',
    md: 'text-sm px-3 py-1.5',
    lg: 'text-base px-4 py-2',
  };

  const variantStyles = {
    default: 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200',
    primary: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
    secondary: 'bg-gray-800 text-white dark:bg-gray-600',
    success: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
    warning: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200',
    error: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200',
  };

  const classes = clsx(
    baseStyles,
    sizeStyles[size],
    variantStyles[variant],
    className
  );

  return (
    <span className={classes}>
      {children}
      {removable && (
        <button
          onClick={onRemove}
          className="ml-1.5 text-current hover:text-gray-500 focus:outline-none"
          aria-label="Remove tag"
        >
          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </button>
      )}
    </span>
  );
} 