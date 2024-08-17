import { cn } from "@/lib/utils";

export function Textarea({
  className = "",
  ...props
}) {
  return (
    <textarea
      className={cn(
        "block w-full rounded-lg border-gray-300 shadow-sm focus:border-primary focus:ring-primary",
        className
      )}
      {...props}
    />
  );
}
