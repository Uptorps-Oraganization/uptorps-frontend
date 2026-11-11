import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Spinner } from "@/components/ui/spinner";
import { useLearnerDashboardStore } from "@/statemanagers/learnerpagestore/DashboardStore";
import { XIcon } from "@animateicons/react/lucide";
import { useState } from "react";

export const QuizContinueDialog = () => {
  const { setContinueQuizDialogShow } = useLearnerDashboardStore();

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
          <Button onClick={setContinueQuizDialogShow} className="absolute top-1 right-1" variant="ghost">
            <XIcon />
          </Button>

          <DialogHeader className="text-green-500!">
            <DialogTitle>Confirm Quiz Continuation</DialogTitle>
            <DialogDescription>Are you sure you want to continue quiz?</DialogDescription>
          </DialogHeader>

          <DialogFooter>
            <Button onClick={setContinueQuizDialogShow} variant="outline">
              Cancel
            </Button>

            <Button onClick={() => handleQuizContinuation()}>
              {submitLoading && <Spinner />}
              Continue
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};
