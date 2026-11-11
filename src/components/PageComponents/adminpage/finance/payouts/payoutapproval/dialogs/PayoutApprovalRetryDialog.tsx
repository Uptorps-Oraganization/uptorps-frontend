import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Spinner } from "@/components/ui/spinner";
import { usePayoutApprovalStore } from "@/statemanagers/adminpagestore/PayoutStore";
import { XIcon } from "@animateicons/react/lucide";
import { useState } from "react";

export const PayoutApprovalRetryDialog = () => {
  const { setShowApprovedPayoutRetryDialog } = usePayoutApprovalStore();

  const [submitLoading, setSubmitLoading] = useState(false);

  const handlePayoutApprovalRetry = () => {
    setSubmitLoading(true);
    setTimeout(() => {
      console.log("Payout Retry Successful Successfully");
      setSubmitLoading(false);

      // Show Toast For SuccessFul Quiz Deletion();
    }, 1000);
  };

  return (
    <>
      <Dialog open>
        <DialogContent className="max-w-110!" showCloseButton={false}>
          <Button onClick={setShowApprovedPayoutRetryDialog} className="absolute top-1 right-1" variant="ghost">
            <XIcon />
          </Button>

          <DialogHeader className="text-amber-500!">
            <DialogTitle>Payout Retry</DialogTitle>
            <DialogDescription>Do you really want to retry the payout approval?</DialogDescription>
          </DialogHeader>

          <DialogFooter>
            <Button onClick={setShowApprovedPayoutRetryDialog} variant="outline">
              Cancel
            </Button>

            <Button onClick={handlePayoutApprovalRetry}>
              {submitLoading && <Spinner />}
              Confirm Payout Retry
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};
