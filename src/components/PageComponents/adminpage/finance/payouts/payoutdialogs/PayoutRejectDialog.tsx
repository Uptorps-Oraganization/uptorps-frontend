import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Spinner } from "@/components/ui/spinner";
import { usePayoutStore } from "@/statemanagers/adminpagestate/PayoutStore";
import { XIcon } from "@animateicons/react/lucide";
import { useState } from "react";

export const PayoutRejectDialog = () => {
  const { setShowRejectPayoutDialog } = usePayoutStore();

  const [submitLoading, setSubmitLoading] = useState(false);

  const handlePayoutRejection = () => {
    setSubmitLoading(true);
    setTimeout(() => {
      console.log("Payout Rejected Successfully");
      setSubmitLoading(false);

      // Show Toast For SuccessFul Quiz Deletion();
    }, 1000);
  };

  return (
    <>
      <Dialog open>
        <DialogContent className="max-w-110!" showCloseButton={false}>
          <Button onClick={setShowRejectPayoutDialog} className="absolute top-1 right-1" variant="ghost">
            <XIcon />
          </Button>

          <DialogHeader className="text-destructive!">
            <DialogTitle>Payout Rejection</DialogTitle>
            <DialogDescription>Do you really want to reject this payout?</DialogDescription>
          </DialogHeader>

          <DialogFooter>
            <Button onClick={setShowRejectPayoutDialog} variant="outline">
              Cancel
            </Button>

            <Button onClick={handlePayoutRejection}>
              {submitLoading && <Spinner />}
              Confirm Rejection
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};
