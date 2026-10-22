import { BanIcon } from "@/components/ui/ban-icon";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { SquarePenIcon } from "@/components/ui/square-pen-icon";
import { EllipsisIcon, EyeIcon, SendIcon, Trash2Icon } from "@animateicons/react/lucide";

export const AccountActionMenu = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        render={
          <Button size="icon" variant="outline">
            <EllipsisIcon />
          </Button>
        }
      />
      <DropdownMenuContent className="w-fit p-1">
        <DropdownMenuGroup>
          <DropdownMenuLabel>Account Action</DropdownMenuLabel>
          <DropdownMenuItem>
            <EyeIcon className="size-4!" /> View Profile
          </DropdownMenuItem>
          <DropdownMenuItem>
            <SquarePenIcon className="size-4!" /> Edit Account
          </DropdownMenuItem>
          <DropdownMenuItem>
            <SendIcon className="size-4!" /> Send Email
          </DropdownMenuItem>
        </DropdownMenuGroup>

        <DropdownMenuSeparator />

        <DropdownMenuItem className="text-amber-300">
          <BanIcon /> Suspend Account
        </DropdownMenuItem>
        <DropdownMenuItem variant="destructive">
          <Trash2Icon /> Delete Account
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
