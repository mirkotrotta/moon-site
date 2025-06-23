'use client';

import { ArrowRight } from '@carbon/icons-react';
import Link from 'next/link';
import { ComponentProps, ReactNode } from 'react';
import { getButtonClasses, cn } from '@/lib/designTokens';

type ButtonProps = {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'link' | 'tertiary'; // Keep tertiary for backward compatibility
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  href?: string;
  onClick?: () => void;
  showArrow?: boolean;
  icon?: ReactNode;
} & ComponentProps<'button'>;

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  className,
  href,
  onClick,
  showArrow = false,
  icon,
  ...props
}: ButtonProps) {
  // Map old tertiary to new outline for backward compatibility
  const mappedVariant = variant === 'tertiary' ? 'outline' : variant;
  
  const classes = cn(
    getButtonClasses(mappedVariant as 'primary' | 'secondary' | 'outline' | 'ghost' | 'link', size),
    className
  );

  const content = (
    <>
      {icon && <span className="mr-2">{icon}</span>}
      {children}
      {showArrow && <ArrowRight size={16} className="ml-2" />}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {content}
      </Link>
    );
  }

  return (
    <button className={classes} onClick={onClick} {...props}>
      {content}
    </button>
  );
}
