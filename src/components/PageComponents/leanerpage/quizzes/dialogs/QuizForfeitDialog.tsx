import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Spinner } from "@/components/ui/spinner";
import { useLearnerQuizStore } from "@/statemanagers/learnerpagestore/LearnerQuizStore";
import { XIcon } from "@animateicons/react/lucide";
import { useState } from "react";

export const QuizForfeitDialog = () => {
  const { setForfeitQuizDialogShow } = useLearnerQuizStore();

  const [submitLoading, setSubmitLoading] = useState(false);

  const handleQuizForfeiture = () => {
    setSubmitLoading(true);
    setTimeout(() => {
      console.log("Quiz Forfeited Successfully");
      setSubmitLoading(false);

      // Show Toast For SuccessFul Quiz Deletion();
    }, 1000);
  };

  return (
    <>
      <Dialog open>
        <DialogContent className="max-w-110!" showCloseButton={false}>
          <Button onClick={setForfeitQuizDialogShow} className="absolute top-1 right-1" variant="ghost">
            <XIcon />
          </Button>

          <DialogHeader className="text-destructive!">
            <DialogTitle>Confirm Quiz Forfeiture</DialogTitle>
            <DialogDescription>Do you really want to forfeit this quiz?</DialogDescription>
          </DialogHeader>

          <DialogFooter>
            <Button onClick={setForfeitQuizDialogShow} variant="outline">
              Cancel
            </Button>

            <Button onClick={handleQuizForfeiture}>
              {submitLoading && <Spinner />}
              Forfeit Quiz
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};
