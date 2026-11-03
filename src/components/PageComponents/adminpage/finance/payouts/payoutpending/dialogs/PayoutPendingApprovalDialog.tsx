import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Spinner } from "@/components/ui/spinner";
import { usePayoutPendingStore } from "@/statemanagers/adminpagestate/PayoutStore";
import { XIcon } from "@animateicons/react/lucide";
import { useState } from "react";

export const PayoutPendingApprovalDialog = () => {
  const { setShowApprovePayoutDialog } = usePayoutPendingStore();

  const [submitLoading, setSubmitLoading] = useState(false);

  const handlePayoutApproval = () => {
    setSubmitLoading(true);
    setTimeout(() => {
      console.log("Payout Approved Successfully");
      setSubmitLoading(false);

      setShowApprovePayoutDialog();
      // Show Toast For SuccessFul Quiz Deletion();
    }, 1000);
  };

  return (
    <>
      <Dialog open>
        <DialogContent className="max-w-110!" showCloseButton={false}>
          <Button onClick={setShowApprovePayoutDialog} className="absolute top-1 right-1" variant="ghost">
            <XIcon />
          </Button>

          <DialogHeader className="text-green-500!">
            <DialogTitle>Payout Approval</DialogTitle>
            <DialogDescription>Do you really want to approve this payout?</DialogDescription>
          </DialogHeader>

          <DialogFooter>
            <Button onClick={setShowApprovePayoutDialog} variant="outline">
              Cancel
            </Button>

            <Button onClick={handlePayoutApproval}>
              {submitLoading && <Spinner />}
              Confirm Payout Approval
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};
