import { cn } from '@/lib/utils';

export function Avatar({ className = '', ...props }) {
  return (
    <div className={cn('inline-flex items-center justify-center rounded-full bg-gray-200', className)} {...props} />
  );
}

export function AvatarImage({ src, alt, ...props }) {
  return <img src={src} alt={alt} className="rounded-full" {...props} />;
}

export function AvatarFallback({ children, ...props }) {
  return <div {...props}>{children}</div>;
}
