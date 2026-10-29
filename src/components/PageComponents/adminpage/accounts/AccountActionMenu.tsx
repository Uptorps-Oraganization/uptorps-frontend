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
import { ActivityIcon } from "@animateicons/react/huge";
import { BanIcon, EllipsisIcon, Trash2Icon } from "@animateicons/react/lucide";
import { useNavigate } from "react-router";

const trig = [
  { icon: "activity", trigger: "hover" },
  { icon: "configure", trigger: "hover" },
  { icon: "trashIco", trigger: "hover" },
] as const;

export const AccountActionMenu = () => {
  const navigate = useNavigate();
  const {
    icon: { activity, configure, trashIco },
    trigger,
  } = useIconHover({ trigger: trig });

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        render={
          <Button size="icon" variant="outline">
            <EllipsisIcon />
          </Button>
        }
      />
      <DropdownMenuContent className="w-fit">
        <DropdownMenuGroup>
          <DropdownMenuLabel>Account Action</DropdownMenuLabel>

          <DropdownMenuItem onClick={() => navigate("/adminpage/accountmanagement/activity/ebd55528-7467-4cc7-815b-7de54c9cf1ff")} {...trigger}>
            <ActivityIcon className="size-4!" {...activity} /> Account Activity
          </DropdownMenuItem>
        </DropdownMenuGroup>

        <DropdownMenuSeparator />

        <DropdownMenuItem className="text-amber-300" {...trigger}>
          <BanIcon className="size-4!" {...configure} /> Suspend Account
        </DropdownMenuItem>

        <DropdownMenuItem variant="destructive" {...trigger}>
          <Trash2Icon {...trashIco} /> Delete User
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
