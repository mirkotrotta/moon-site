'use client';

import Link from 'next/link';
import { cn, designTokens } from '@/lib/designTokens';

type LogoProps = {
  href?: string;
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
  className?: string;
};

export default function Logo({
  href = '/',
  size = 'md',
  showText = true,
  className,
}: LogoProps) {
  const sizeClasses = {
    sm: {
      icon: 'w-6 h-6 text-xs',
      text: 'text-lg',
    },
    md: {
      icon: 'w-8 h-8 text-sm',
      text: 'text-xl',
    },
    lg: {
      icon: 'w-10 h-10 text-base',
      text: 'text-2xl',
    },
  };

  const content = (
    <div className={cn('flex items-center space-x-2', className)}>
      <div className={cn(
        sizeClasses[size].icon,
        designTokens.colors.gradient.logo,
        designTokens.borderRadius.md,
        'flex items-center justify-center text-white font-bold',
        designTokens.transitions.default,
        'group-hover:shadow-lg'
      )}>
        🌙
      </div>
      {showText && (
        <span className={cn(
          sizeClasses[size].text,
          'font-bold tracking-tight',
          designTokens.colors.gradient.logoText
        )}>
          Moon Site
        </span>
      )}
    </div>
  );

  return (
    <Link href={href} className="group">
      {content}
    </Link>
  );
} 