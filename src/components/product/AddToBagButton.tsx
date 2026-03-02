'use client';

import { Button } from '@/components/ui/Button';
import { formatPrice } from '@/lib/utils';
import { useLanguage } from '@/context/LanguageContext';

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
  const { t } = useLanguage();

  return (
    <Button
      variant="primary"
      size="lg"
      fullWidth
      onClick={onClick}
      disabled={disabled}
    >
      {t.product.addToBag} &mdash; {formatPrice(price)}
    </Button>
  );
}
