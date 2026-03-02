import { forwardRef } from 'react';
import { cn } from '@/lib/utils';

interface InputProps {
  label?: string;
  error?: string;
  type?: string;
  placeholder?: string;
  value?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  name?: string;
  required?: boolean;
  className?: string;
  id?: string;
  disabled?: boolean;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      error,
      type = 'text',
      placeholder,
      value,
      onChange,
      name,
      required = false,
      className,
      id,
      disabled = false,
    },
    ref,
  ) => {
    const inputId = id || name;

    return (
      <div className={cn('w-full', className)}>
        {label && (
          <label
            htmlFor={inputId}
            className={cn(
              'block font-sans text-xs font-medium uppercase tracking-wide text-charcoal mb-2',
              required && "after:content-['*'] after:ml-0.5 after:text-terracotta",
            )}
          >
            {label}
          </label>
        )}
        <input
          ref={ref}
          id={inputId}
          type={type}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          required={required}
          disabled={disabled}
          className={cn(
            'w-full bg-cream font-sans text-sm text-near-black placeholder:text-charcoal/40',
            'border-0 border-b border-near-black/20 px-0 py-2.5',
            'transition-colors duration-200',
            'focus:border-copper focus:outline-none focus:ring-0',
            'disabled:text-near-black/30 disabled:border-near-black/10 disabled:cursor-not-allowed',
            error && 'border-terracotta focus:border-terracotta',
          )}
          aria-invalid={error ? 'true' : undefined}
          aria-describedby={error ? `${inputId}-error` : undefined}
        />
        {error && (
          <p
            id={`${inputId}-error`}
            role="alert"
            className="mt-1.5 font-sans text-xs text-terracotta"
          >
            {error}
          </p>
        )}
      </div>
    );
  },
);

Input.displayName = 'Input';

export { Input };
export type { InputProps };
