import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Spinner } from "@/components/ui/spinner";
import { useLearnerDashboardStore } from "@/statemanagers/learnerpagestore/DashboardStore";
import { XIcon } from "@animateicons/react/lucide";
import { useState } from "react";

export const CourseContinueDialog = () => {
  const { setContinueCourseDialogShow } = useLearnerDashboardStore();

  const [submitLoading, setSubmitLoading] = useState(false);

  const handleCourseContinuation = () => {
    setSubmitLoading(true);
    setTimeout(() => {
      console.log("Course Continuation Successfully");
      setSubmitLoading(false);

      // Show Toast For SuccessFul Course Deletion();
    }, 1000);
  };

  return (
    <>
      <Dialog open>
        <DialogContent className="max-w-110!" showCloseButton={false}>
          <Button onClick={setContinueCourseDialogShow} className="absolute top-1 right-1" variant="ghost">
            <XIcon />
          </Button>

          <DialogHeader className="text-green-500!">
            <DialogTitle>Confirm Course Continuation</DialogTitle>
            <DialogDescription>Are you sure you want to continue course?</DialogDescription>
          </DialogHeader>

          <DialogFooter>
            <Button onClick={setContinueCourseDialogShow} variant="outline">
              Cancel
            </Button>

            <Button onClick={() => handleCourseContinuation()}>
              {submitLoading && <Spinner />}
              Continue
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};
