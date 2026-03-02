'use client';

import { forwardRef } from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'icon';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonBaseProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  className?: string;
  children: React.ReactNode;
  disabled?: boolean;
}

interface ButtonAsButton extends ButtonBaseProps {
  href?: never;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  type?: 'button' | 'submit' | 'reset';
}

interface ButtonAsLink extends ButtonBaseProps {
  href: string;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
  type?: never;
}

type ButtonProps = ButtonAsButton | ButtonAsLink;

const variantStyles: Record<ButtonVariant, string> = {
  primary: cn(
    'bg-copper text-white',
    'hover:bg-copper-dark',
    'active:bg-copper-dark/90',
    'disabled:bg-copper/40 disabled:cursor-not-allowed',
  ),
  secondary: cn(
    'bg-transparent border border-copper text-copper',
    'hover:bg-copper hover:text-white',
    'active:bg-copper-dark active:border-copper-dark active:text-white',
    'disabled:border-copper/40 disabled:text-copper/40 disabled:cursor-not-allowed disabled:hover:bg-transparent disabled:hover:text-copper/40',
  ),
  ghost: cn(
    'bg-transparent text-near-black',
    'hover:underline hover:underline-offset-4 hover:decoration-copper',
    'active:text-copper-dark',
    'disabled:text-near-black/30 disabled:cursor-not-allowed disabled:hover:no-underline',
  ),
  icon: cn(
    'bg-transparent text-near-black rounded-full',
    'hover:text-copper',
    'active:text-copper-dark',
    'disabled:text-near-black/30 disabled:cursor-not-allowed',
  ),
};

const sizeStyles: Record<ButtonVariant, Record<ButtonSize, string>> = {
  primary: {
    sm: 'px-5 py-2 text-xs tracking-wide',
    md: 'px-8 py-3 text-sm tracking-wide',
    lg: 'px-10 py-4 text-sm tracking-wide',
  },
  secondary: {
    sm: 'px-5 py-2 text-xs tracking-wide',
    md: 'px-8 py-3 text-sm tracking-wide',
    lg: 'px-10 py-4 text-sm tracking-wide',
  },
  ghost: {
    sm: 'px-1 py-1 text-xs tracking-wide',
    md: 'px-1 py-1.5 text-sm tracking-wide',
    lg: 'px-1 py-2 text-sm tracking-wide',
  },
  icon: {
    sm: 'p-1.5',
    md: 'p-2',
    lg: 'p-3',
  },
};

const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      fullWidth = false,
      className,
      children,
      disabled = false,
      href,
      onClick,
      type = 'button',
      ...rest
    },
    ref,
  ) => {
    const classes = cn(
      'inline-flex items-center justify-center font-sans font-medium transition-colors duration-200 ease-in-out',
      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-copper focus-visible:ring-offset-2 focus-visible:ring-offset-cream',
      variantStyles[variant],
      sizeStyles[variant][size],
      fullWidth && 'w-full',
      className,
    );

    if (href && !disabled) {
      return (
        <Link
          href={href}
          ref={ref as React.Ref<HTMLAnchorElement>}
          className={classes}
          onClick={onClick as React.MouseEventHandler<HTMLAnchorElement>}
        >
          {children}
        </Link>
      );
    }

    return (
      <button
        ref={ref as React.Ref<HTMLButtonElement>}
        type={type}
        disabled={disabled}
        className={classes}
        onClick={onClick as React.MouseEventHandler<HTMLButtonElement>}
        {...rest}
      >
        {children}
      </button>
    );
  },
);

Button.displayName = 'Button';

export { Button };
export type { ButtonProps };
