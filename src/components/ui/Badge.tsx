import { cn } from '@/lib/utils';

type BadgeVariant = 'new' | 'sale' | 'soldOut';

interface BadgeProps {
  variant: BadgeVariant;
  className?: string;
  children?: React.ReactNode;
}

const variantStyles: Record<BadgeVariant, string> = {
  new: 'bg-copper text-white',
  sale: 'bg-terracotta text-white',
  soldOut: 'bg-charcoal text-white',
};

const defaultLabels: Record<BadgeVariant, string> = {
  new: 'NEW',
  sale: 'SALE',
  soldOut: 'SOLD OUT',
};

export function Badge({ variant, className, children }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-block px-2.5 py-1 font-sans text-[10px] font-medium uppercase tracking-widest leading-none',
        variantStyles[variant],
        className,
      )}
    >
      {children ?? defaultLabels[variant]}
    </span>
  );
}
