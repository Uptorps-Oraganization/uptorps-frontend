import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Spinner } from "@/components/ui/spinner";
import { useLearnerDashboardStore } from "@/statemanagers/learnerpagestore/DashboardStore";
import { XIcon } from "@animateicons/react/lucide";
import { useState } from "react";

export const CourseForfeitDialog = () => {
  const { setForfeitCourseDialogShow } = useLearnerDashboardStore();

  const [submitLoading, setSubmitLoading] = useState(false);

  const handleCourseForfeiture = () => {
    setSubmitLoading(true);
    setTimeout(() => {
      console.log("Course Forfeited Successfully");
      setSubmitLoading(false);

      // Show Toast For SuccessFul Course Deletion();
    }, 1000);
  };

  return (
    <>
      <Dialog open>
        <DialogContent className="max-w-110!" showCloseButton={false}>
          <Button onClick={setForfeitCourseDialogShow} className="absolute top-1 right-1" variant="ghost">
            <XIcon />
          </Button>

          <DialogHeader className="text-destructive!">
            <DialogTitle>Confirm Course Forfeiture</DialogTitle>
            <DialogDescription>Do you really want to forfeit this course?</DialogDescription>
          </DialogHeader>

          <DialogFooter>
            <Button onClick={setForfeitCourseDialogShow} variant="outline">
              Cancel
            </Button>

            <Button onClick={handleCourseForfeiture}>
              {submitLoading && <Spinner />}
              Forfeit
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};
