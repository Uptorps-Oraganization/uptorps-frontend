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
import { EllipsisIcon, EyeIcon, Settings, Trash2Icon } from "@animateicons/react/lucide";
import { useNavigate } from "react-router";

const trig = [
  { icon: "view", trigger: "hover" },
  { icon: "configure", trigger: "hover" },
  { icon: "trashIco", trigger: "hover" },
] as const;

export const AccountActionMenu = () => {
  const navigate = useNavigate();
  const {
    icon: { view, configure, trashIco },
    trigger,
  } = useIconHover({ trigger: trig });
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
      <DropdownMenuContent className="w-fit p-1">
        <DropdownMenuGroup>
          <DropdownMenuLabel>Account Action</DropdownMenuLabel>

          <DropdownMenuItem onClick={() => navigate("/adminpage/accountmanagement/activity/ebd55528-7467-4cc7-815b-7de54c9cf1ff")} {...trigger}>
            <EyeIcon className="size-4!" {...view} /> View Account Activity
          </DropdownMenuItem>

          <DropdownMenuItem className="text-amber-300" {...trigger}>
            <Settings className="size-4!" {...configure} /> Configure Account
          </DropdownMenuItem>
        </DropdownMenuGroup>

        <DropdownMenuSeparator />

        <DropdownMenuItem variant="destructive" {...trigger}>
          <Trash2Icon {...trashIco} /> Delete User
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
