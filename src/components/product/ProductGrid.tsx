import { cn } from '@/lib/utils';

interface ProductGridProps {
  children: React.ReactNode;
  columns?: 2 | 3 | 4;
  className?: string;
}

const columnClasses: Record<2 | 3 | 4, string> = {
  2: 'grid grid-cols-2 gap-4 lg:gap-8',
  3: 'grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8',
  4: 'grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8',
};

export function ProductGrid({ children, columns = 4, className }: ProductGridProps) {
  return (
    <div className={cn(columnClasses[columns], className)}>
      {children}
    </div>
  );
}
