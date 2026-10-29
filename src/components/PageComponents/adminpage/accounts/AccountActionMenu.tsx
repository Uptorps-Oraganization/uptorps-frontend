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
<<<<<<< HEAD
import { ActivityIcon, EllipsisIcon, SendIcon, Settings } from "@animateicons/react/lucide";
import { useNavigate } from "react-router";

const triggerConfig = [
  { icon: "viewProfile", trigger: "hover" },
  { icon: "sendEmail", trigger: "hover" },
  { icon: "configureAccount", trigger: "hover" },
=======
import { EllipsisIcon, EyeIcon, Settings, Trash2Icon } from "@animateicons/react/lucide";
import { useNavigate } from "react-router";

const trig = [
  { icon: "view", trigger: "hover" },
  { icon: "configure", trigger: "hover" },
  { icon: "trashIco", trigger: "hover" },
>>>>>>> b588e0e (Quiz and Questions Page Layout and Dialogs Done)
] as const;

export const AccountActionMenu = () => {
  const navigate = useNavigate();
  const {
<<<<<<< HEAD
    icon: { viewProfile, configureAccount, sendEmail },
=======
    icon: { view, configure, trashIco },
>>>>>>> b588e0e (Quiz and Questions Page Layout and Dialogs Done)
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
      <DropdownMenuContent className="w-fit p-1">
        <DropdownMenuGroup>
          <DropdownMenuLabel>Account Action</DropdownMenuLabel>

          <DropdownMenuItem onClick={() => navigate("/adminpage/accountmanagement/activity/ebd55528-7467-4cc7-815b-7de54c9cf1ff")} {...trigger}>
<<<<<<< HEAD
            <ActivityIcon className="size-4!" {...viewProfile} /> View Account Activity
          </DropdownMenuItem>

          <DropdownMenuItem {...trigger}>
            <SendIcon className="size-4!" {...sendEmail} /> Send Email
=======
            <EyeIcon className="size-4!" {...view} /> View Account Activity
          </DropdownMenuItem>

          <DropdownMenuItem className="text-amber-300" {...trigger}>
            <Settings className="size-4!" {...configure} /> Configure Account
>>>>>>> b588e0e (Quiz and Questions Page Layout and Dialogs Done)
          </DropdownMenuItem>
        </DropdownMenuGroup>

        <DropdownMenuSeparator />

<<<<<<< HEAD
        <DropdownMenuItem className="text-amber-300" {...trigger}>
          <Settings className="size-4!" {...configureAccount} /> Configure Account
=======
        <DropdownMenuItem variant="destructive" {...trigger}>
          <Trash2Icon {...trashIco} /> Delete User
>>>>>>> b588e0e (Quiz and Questions Page Layout and Dialogs Done)
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
