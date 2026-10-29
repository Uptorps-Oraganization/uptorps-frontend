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
import { useIconHover } from "@animateicons/react";
import { ActivityIcon, EllipsisIcon, SendIcon, Settings } from "@animateicons/react/lucide";
import { useNavigate } from "react-router";

const triggerConfig = [
  { icon: "viewProfile", trigger: "hover" },
  { icon: "sendEmail", trigger: "hover" },
  { icon: "configureAccount", trigger: "hover" },
] as const;

export const AccountActionMenu = () => {
  const navigate = useNavigate();
  const {
    icon: { viewProfile, configureAccount, sendEmail },
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

          <DropdownMenuItem onClick={() => navigate("/adminpage/accountmanagement/activity/ebd55528-7467-4cc7-815b-7de54c9cf1ff")} {...trigger}>
            <ActivityIcon className="size-4!" {...viewProfile} /> View Account Activity
          </DropdownMenuItem>

          <DropdownMenuItem {...trigger}>
            <SendIcon className="size-4!" {...sendEmail} /> Send Email
          </DropdownMenuItem>
        </DropdownMenuGroup>

        <DropdownMenuSeparator />

        <DropdownMenuItem className="text-amber-300" {...trigger}>
          <Settings className="size-4!" {...configureAccount} /> Configure Account
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
