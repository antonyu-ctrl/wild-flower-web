'use client';

import { Button } from '@/components/ui/Button';
import { formatPrice } from '@/lib/utils';

interface AddToBagButtonProps {
  price: number;
  onClick: () => void;
  disabled?: boolean;
}

export function AddToBagButton({
  price,
  onClick,
  disabled = false,
}: AddToBagButtonProps) {
  return (
    <Button
      variant="primary"
      size="lg"
      fullWidth
      onClick={onClick}
      disabled={disabled}
    >
      ADD TO BAG &mdash; {formatPrice(price)}
    </Button>
  );
}
