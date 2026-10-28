import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Spinner } from "@/components/ui/spinner";
import { useQuestionPageStore } from "@/statemanagers/adminpagestate/QuestionPageStore";
import { XIcon } from "@animateicons/react/lucide";
import { useState } from "react";

export const AnswerDeleteDialog = () => {
  const { answerDeleteOpen, setAnswerDeleteOpen } = useQuestionPageStore();

  const [submitLoading, setSubmitLoading] = useState(false);

  const handleAnswerDeletion = () => {
    setSubmitLoading(true);
    setTimeout(() => {
      console.log("Answer Deleted Successfully");
      setSubmitLoading(false);

      // Show Toast For SuccessFul Quiz Deletion();
    }, 1000);
  };

  return (
    <>
      <Dialog open={answerDeleteOpen}>
        <DialogContent className="max-w-110!" showCloseButton={false}>
          <Button onClick={setAnswerDeleteOpen} className="absolute top-1 right-1" variant="ghost">
            <XIcon />
          </Button>

          <DialogHeader className="text-green-400!">
            <DialogTitle>Confirm Answer Deletion</DialogTitle>
            <DialogDescription>Do you really want to delete this answer?</DialogDescription>
          </DialogHeader>

          <DialogFooter>
            <Button onClick={setAnswerDeleteOpen} variant="outline">
              Cancel
            </Button>

            <Button onClick={() => handleAnswerDeletion()}>
              {submitLoading && <Spinner />}
              Confirm Answer Deletion
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};
