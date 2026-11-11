import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { usePayoutApprovalStore } from "@/statemanagers/adminpagestore/PayoutStore";
import { useIconHover } from "@animateicons/react";
import { EllipsisIcon, EyeIcon, RotateCwIcon } from "@animateicons/react/lucide";

const triggerConfig = [
  { icon: "eye", trigger: "hover" },
  { icon: "retry", trigger: "hover" },
  { icon: "reject", trigger: "hover" },
] as const;

export const PayoutApprovalActionMenu = () => {
  const { setShowApprovedPayoutDetailsDialog, setShowApprovedPayoutRetryDialog } = usePayoutApprovalStore();

  const {
    icon: { eye, retry },
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
            <DropdownMenuLabel>Payout Approval Action</DropdownMenuLabel>

            <DropdownMenuItem onClick={setShowApprovedPayoutDetailsDialog} {...trigger}>
              <EyeIcon className="size-4!" {...eye} /> View Payout Details
            </DropdownMenuItem>

            <DropdownMenuItem className="text-green-500" onClick={setShowApprovedPayoutRetryDialog} {...trigger}>
              <RotateCwIcon className="size-4!" {...retry} /> Retry Approval
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};
