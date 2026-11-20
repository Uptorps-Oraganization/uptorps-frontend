import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Spinner } from "@/components/ui/spinner";
import type { QuizNCourseDialogType } from "@/typesnschemas/types/DataTypes";
import { XIcon } from "@animateicons/react/lucide";
import { useState } from "react";

export const CourseContinueDialog = (props: QuizNCourseDialogType) => {
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
          <Button onClick={() => props.closeDialog(false)} className="absolute top-1 right-1" variant="ghost">
            <XIcon />
          </Button>

          <DialogHeader className="text-green-500!">
            <DialogTitle>Confirm Course Continuation</DialogTitle>
            <DialogDescription>Are you sure you want to continue {props.title}?</DialogDescription>
          </DialogHeader>

          <DialogFooter>
            <Button onClick={() => props.closeDialog(false)} variant="outline">
              Cancel
            </Button>

            <Button onClick={() => handleCourseContinuation()}>
              {submitLoading && <Spinner />}
              Continue Course
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};
