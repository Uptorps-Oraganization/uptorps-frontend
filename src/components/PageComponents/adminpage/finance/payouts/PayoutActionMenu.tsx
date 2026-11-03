import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { usePayoutStore } from "@/statemanagers/adminpagestate/PayoutStore";
import { useIconHover } from "@animateicons/react";
import { CancelSquareIcon, CheckmarkSquare01Icon } from "@animateicons/react/huge";
import { EllipsisIcon, EyeIcon } from "@animateicons/react/lucide";

const triggerConfig = [
  { icon: "eye", trigger: "hover" },
  { icon: "approve", trigger: "hover" },
  { icon: "reject", trigger: "hover" },
] as const;

export const PayoutActionMenu = () => {
  const { setShowPayoutDetailsDialog, setShowApprovePayoutDialog, setShowRejectPayoutDialog } = usePayoutStore();

  const {
    icon: { eye, approve, reject },
    trigger,
  } = useIconHover({ trigger: triggerConfig });

  return (
    <>
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
            <DropdownMenuLabel>Payout Action</DropdownMenuLabel>

            <DropdownMenuItem onClick={setShowPayoutDetailsDialog} {...trigger}>
              <EyeIcon className="size-4!" {...eye} /> View Request Details
            </DropdownMenuItem>

            <DropdownMenuItem className="text-green-500" onClick={setShowApprovePayoutDialog} {...trigger}>
              <CheckmarkSquare01Icon className="size-4!" {...approve} /> Approve Payout
            </DropdownMenuItem>

            <DropdownMenuItem variant="destructive" onClick={setShowRejectPayoutDialog} {...trigger}>
              <CancelSquareIcon {...reject} /> Reject Payout
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};
