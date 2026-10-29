import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Spinner } from "@/components/ui/spinner";
import { useQuizPageStore } from "@/statemanagers/adminpagestate/QuizPageStore";
import { XIcon } from "@animateicons/react/lucide";
import { useState } from "react";

export const QuizDeletionDialog = () => {
  const { setQuizDeletionDialogOpen } = useQuizPageStore();

  const [submitLoading, setSubmitLoading] = useState(false);

  const handleQuizDeletion = () => {
    setSubmitLoading(true);
    setTimeout(() => {
      console.log("Quiz Deleted Successfully");
      setSubmitLoading(false);

      // Show Toast For SuccessFul Quiz Deletion();
    }, 1000);
  };

  return (
    <>
      <Dialog open>
        <DialogContent className="max-w-110!" showCloseButton={false}>
          <Button onClick={setQuizDeletionDialogOpen} className="absolute top-1 right-1" variant="ghost">
            <XIcon />
          </Button>

          <DialogHeader className="text-green-400!">
            <DialogTitle>Confirm Quiz Deletion</DialogTitle>
            <DialogDescription>Do you really want to delete this quiz?</DialogDescription>
          </DialogHeader>

          <div>
            <p className="text-destructive text-pretty">Please note that this action also deletes all questions and answers related to this quiz</p>
          </div>

          <DialogFooter>
            <Button onClick={setQuizDeletionDialogOpen} variant="outline">
              Cancel
            </Button>

            <Button onClick={() => handleQuizDeletion()}>
              {submitLoading && <Spinner />}
              Confirm Quiz Deletion
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};
