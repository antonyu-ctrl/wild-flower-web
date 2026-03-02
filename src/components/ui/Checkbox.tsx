'use client';

import { cn } from '@/lib/utils';
import { CheckIcon } from '@/components/icons';

interface CheckboxProps {
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  id: string;
  disabled?: boolean;
  className?: string;
}

export function Checkbox({
  label,
  checked,
  onChange,
  id,
  disabled = false,
  className,
}: CheckboxProps) {
  return (
    <label
      htmlFor={id}
      className={cn(
        'group inline-flex items-center gap-2.5 cursor-pointer select-none',
        disabled && 'cursor-not-allowed opacity-50',
        className,
      )}
    >
      <div className="relative flex items-center justify-center">
        <input
          type="checkbox"
          id={id}
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
          disabled={disabled}
          className="peer sr-only"
        />
        <div
          className={cn(
            'h-[18px] w-[18px] rounded-[3px] border transition-colors duration-200',
            'flex items-center justify-center',
            checked
              ? 'border-copper bg-copper'
              : 'border-near-black/25 bg-cream group-hover:border-copper/60',
            'peer-focus-visible:ring-2 peer-focus-visible:ring-copper peer-focus-visible:ring-offset-2 peer-focus-visible:ring-offset-cream',
          )}
        >
          {checked && <CheckIcon className="h-3 w-3 text-white" strokeWidth={3} />}
        </div>
      </div>
      <span className="font-sans text-sm text-near-black leading-none">{label}</span>
    </label>
  );
}
