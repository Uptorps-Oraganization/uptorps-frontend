import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Spinner } from "@/components/ui/spinner";
import { XIcon } from "@animateicons/react/lucide";
import { useState } from "react";

export const ConfigItemDeleteDialog = (props: any) => {
  const [submitLoading, setSubmitLoading] = useState(false);

  const type = props.type[0].toUpperCase() + props.type.slice(1);

  const handleConfigDeletion = () => {
    setSubmitLoading(true);
    setTimeout(() => {
      console.log(props.name, "Deleted Successfully");
      setSubmitLoading(false);

      // Show Toast For SuccessFul Quiz Deletion();
    }, 1000);
  };

  return (
    <>
      <Dialog open>
        <DialogContent className="max-w-90!" showCloseButton={false}>
          <Button onClick={() => props.setConfigItemDeleteDialogOpen(false)} className="absolute top-1 right-1" variant="ghost">
            <XIcon />
          </Button>

          <DialogHeader className="text-destructive!">
            <DialogTitle>Delete {type}</DialogTitle>
            <DialogDescription>Do you really want to delete {props.name}?</DialogDescription>
          </DialogHeader>

          <DialogFooter>
            <Button onClick={() => props.setConfigItemDeleteDialogOpen(false)} variant="outline">
              Cancel
            </Button>

            <Button onClick={handleConfigDeletion}>
              {submitLoading && <Spinner />}
              Confirm Deletion
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};
