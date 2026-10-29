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
import { useIconHover } from "@animateicons/react";
import { EllipsisIcon, EyeIcon, SendIcon, Trash2Icon } from "@animateicons/react/lucide";

const triggerConfig = [
  { icon: "viewProfile", trigger: "hover" },
  { icon: "editAccount", trigger: "hover" },
  { icon: "sendEmail", trigger: "hover" },
  { icon: "suspendAccount", trigger: "hover" },
  { icon: "deleteAccount", trigger: "hover" },
] as const;

export const AccountActionMenu = () => {
  const {
    icon: { viewProfile, editAccount, sendEmail, suspendAccount, deleteAccount },
    trigger,
  } = useIconHover({ trigger: triggerConfig });

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

          <DropdownMenuItem {...trigger}>
            <EyeIcon className="size-4!" {...viewProfile} /> View Profile
          </DropdownMenuItem>

          <DropdownMenuItem {...trigger}>
            <SquarePenIcon className="size-4!" {...editAccount} /> Edit Account
          </DropdownMenuItem>

          <DropdownMenuItem {...trigger}>
            <SendIcon className="size-4!" {...sendEmail} /> Send Email
          </DropdownMenuItem>
        </DropdownMenuGroup>

        <DropdownMenuSeparator />

        <DropdownMenuItem className="text-amber-300" {...trigger}>
          <BanIcon {...suspendAccount} /> Suspend User
        </DropdownMenuItem>

        <DropdownMenuItem variant="destructive" {...trigger}>
          <Trash2Icon {...deleteAccount} /> Delete User
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
