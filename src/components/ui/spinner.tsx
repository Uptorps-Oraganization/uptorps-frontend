import { cn } from "cn";
import { LoaderIcon } from "lucide-react";

function Spinner({ className, ...props }: React.ComponentProps<"svg">) {
  return <LoaderIcon data-slot="spinner" role="status" aria-label="Loading" className={cn("mr-2 size-4 animate-spin", className)} {...props} />;
}

export { Spinner };
