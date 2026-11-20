import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Spinner } from "@/components/ui/spinner";
import type { QuizNCourseDialogType } from "@/typesnschemas/types/DataTypes";
import { XIcon } from "@animateicons/react/lucide";
import { useState } from "react";

export const QuizContinueDialog = (props: QuizNCourseDialogType) => {
  const [submitLoading, setSubmitLoading] = useState(false);

  const handleQuizContinuation = () => {
    setSubmitLoading(true);
    setTimeout(() => {
      console.log("Quiz Continuation Successfully");
      setSubmitLoading(false);

      // Show Toast For SuccessFul Quiz Deletion();
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
            <DialogTitle>Confirm Quiz Continuation</DialogTitle>
            <DialogDescription>Are you sure you want to continue {props.title}?</DialogDescription>
          </DialogHeader>

          <DialogFooter>
            <Button onClick={() => props.closeDialog(false)} variant="outline">
              Cancel
            </Button>

            <Button onClick={() => handleQuizContinuation()}>
              {submitLoading && <Spinner />}
              Continue Quiz
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};
