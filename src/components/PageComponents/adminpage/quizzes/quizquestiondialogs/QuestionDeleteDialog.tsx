import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Spinner } from "@/components/ui/spinner";
import { useQuestionPageStore } from "@/statemanagers/adminpagestate/QuestionPageStore";
import { XIcon } from "@animateicons/react/lucide";
import { useState } from "react";

export const QuestionDeleteDialog = () => {
  const { questionDeleteOpen, setQuestionDeleteOpen } = useQuestionPageStore();

  const [submitLoading, setSubmitLoading] = useState(false);

  const handleQuestionDeletion = () => {
    setSubmitLoading(true);
    setTimeout(() => {
      console.log("Question Deleted Successfully");
      setSubmitLoading(false);

      // Show Toast For SuccessFul Quiz Deletion();
    }, 1000);
  };

  return (
    <>
      <Dialog open={questionDeleteOpen}>
        <DialogContent className="max-w-110!" showCloseButton={false}>
          <Button onClick={setQuestionDeleteOpen} className="absolute top-1 right-1" variant="ghost">
            <XIcon />
          </Button>

          <DialogHeader className="text-green-400!">
            <DialogTitle>Confirm Question Deletion</DialogTitle>
            <DialogDescription>Do you really want to delete this question?</DialogDescription>
          </DialogHeader>

          <DialogFooter>
            <Button onClick={setQuestionDeleteOpen} variant="outline">
              Cancel
            </Button>

            <Button onClick={() => handleQuestionDeletion()}>
              {submitLoading && <Spinner />}
              Confirm Question Deletion
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};
