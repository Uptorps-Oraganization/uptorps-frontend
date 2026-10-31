import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Spinner } from "@/components/ui/spinner";
import { useAccountStore } from "@/statemanagers/adminpagestate/AccountStore";
import { XIcon } from "@animateicons/react/lucide";
import { useState } from "react";

export const SuspendAccountDialog = () => {
  const { setSuspendAccountOpen } = useAccountStore();

  const [submitLoading, setSubmitLoading] = useState(false);

  const handleAccountSuspension = () => {
    setSubmitLoading(true);
    setTimeout(() => {
      console.log("Account Suspended Successfully");
      setSubmitLoading(false);

      // Show Toast For SuccessFul Quiz Deletion();
    }, 1000);
  };

  return (
    <>
      <Dialog open>
        <DialogContent className="max-w-110!" showCloseButton={false}>
          <Button onClick={setSuspendAccountOpen} className="absolute top-1 right-1" variant="ghost">
            <XIcon />
          </Button>

          <DialogHeader className="text-green-400!">
            <DialogTitle>Confirm Account Suspension</DialogTitle>
            <DialogDescription>Are you sure you want to suspend this account?</DialogDescription>
          </DialogHeader>

          <div>
            <p className="text-amber-500 text-pretty">Please note that this action suspends the account and owner does not get access until action is reversed.</p>
          </div>

          <DialogFooter>
            <Button onClick={setSuspendAccountOpen} variant="outline">
              Cancel
            </Button>

            <Button onClick={() => handleAccountSuspension()}>
              {submitLoading && <Spinner />}
              Confirm Account Suspension
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};
