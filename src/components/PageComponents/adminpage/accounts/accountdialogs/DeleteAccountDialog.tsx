import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Spinner } from "@/components/ui/spinner";
import { useAccountStore } from "@/statemanagers/adminpagestate/AccountStore";
import { XIcon } from "@animateicons/react/lucide";

import { useState } from "react";

export const DeleteAccountDialog = () => {
  const { setDeleteAccoutOpen } = useAccountStore();

  const [submitLoading, setSubmitLoading] = useState(false);

  const handleAccountDeletion = () => {
    setSubmitLoading(true);
    setTimeout(() => {
      console.log("Account Deleted Successfully");
      setSubmitLoading(false);

      // Show Toast For SuccessFul Quiz Deletion();
    }, 1000);
  };

  return (
    <>
      <Dialog open>
        <DialogContent className="max-w-110!" showCloseButton={false}>
          <Button onClick={setDeleteAccoutOpen} className="absolute top-1 right-1" variant="ghost">
            <XIcon />
          </Button>

          <DialogHeader className="text-green-400!">
            <DialogTitle>Confirm Account Deletion</DialogTitle>
            <DialogDescription>Are you sure you want to delete this account?</DialogDescription>
          </DialogHeader>

          <div>
            <p className="text-destructive text-pretty">Please note that this action also deletes all activities of this user permanently.</p>
          </div>

          <DialogFooter>
            <Button onClick={setDeleteAccoutOpen} variant="outline">
              Cancel
            </Button>

            <Button onClick={() => handleAccountDeletion()}>
              {submitLoading && <Spinner />}
              Confirm Account Deletion
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};
