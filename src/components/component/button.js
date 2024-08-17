import { cn } from '@/lib/utils';

export function Button({
  children,
  size = 'base',
  variant = 'primary',
  type = 'button',
  className = '',
  ...props
}) {
  const baseStyles = 'rounded-lg font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2 transition-all';
  const sizeStyles = {
    icon: 'w-10 h-10',
    sm: 'px-3 py-1.5 text-sm',
    base: 'px-4 py-2 text-base',
    lg: 'px-5 py-3 text-lg',
  };
  const variantStyles = {
    primary: 'bg-primary text-white hover:bg-primary-dark focus:ring-primary-light',
    outline: 'bg-transparent text-primary border border-primary hover:bg-primary-light hover:text-white focus:ring-primary-light',
  };

  return (
    <button
      type={type}
      className={cn(
        baseStyles,
        sizeStyles[size],
        variantStyles[variant],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
