import Link from 'next/link';
import { cn } from '@/lib/utils';
import { ChevronRightIcon } from '@/components/icons';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  className?: string;
}

export default function Breadcrumb({ items, className }: BreadcrumbProps) {
  const allItems: BreadcrumbItem[] = [{ label: 'Home', href: '/' }, ...items];

  return (
    <nav aria-label="Breadcrumb" className={cn('py-4', className)}>
      <ol className="flex items-center flex-wrap gap-1">
        {allItems.map((item, index) => {
          const isLast = index === allItems.length - 1;

          return (
            <li key={`${item.label}-${index}`} className="flex items-center gap-1">
              {index > 0 && (
                <ChevronRightIcon
                  className="h-3 w-3 text-charcoal/40 flex-shrink-0"
                  strokeWidth={2}
                />
              )}
              {isLast || !item.href ? (
                <span
                  className={cn(
                    'font-sans text-xs tracking-wide uppercase',
                    isLast ? 'text-near-black' : 'text-charcoal'
                  )}
                  aria-current={isLast ? 'page' : undefined}
                >
                  {item.label}
                </span>
              ) : (
                <Link
                  href={item.href}
                  className="font-sans text-xs tracking-wide uppercase text-charcoal hover:text-copper transition-colors duration-200"
                >
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
