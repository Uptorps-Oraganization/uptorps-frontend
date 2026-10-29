import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Field, FieldGroup } from "@/components/ui/field";
import { useQuizPageStore } from "@/statemanagers/adminpagestate/QuizPageStore";
import { XIcon } from "@animateicons/react/lucide";

export const QuizDetailDialog = () => {
  const { setQuizDetailDialogOpen } = useQuizPageStore();

  return (
    <>
      <Dialog open>
        <DialogContent className="max-w-110!" showCloseButton={false}>
          <Button onClick={setQuizDetailDialogOpen} className="absolute top-1 right-1" variant="ghost">
            <XIcon />
          </Button>

          <DialogHeader className="text-green-400!">
            <DialogTitle>Quiz Details</DialogTitle>
            <DialogDescription>Full details of the quiz configuration</DialogDescription>
          </DialogHeader>

          <FieldGroup className="gap-2!">
            <Field>
              <span className="text-xs font-bold">Quiz Title</span>
              <span className="text-sm">Lucky Quiz</span>
            </Field>

            <Field>
              <span className="text-xs font-bold">Quiz Description</span>
              <span className="text-sm">A lucky quiz</span>
            </Field>

            <Field>
              <span className="text-xs font-bold">Quiz Difficulty</span>
              <span className="text-sm">Basic</span>
            </Field>
          </FieldGroup>
        </DialogContent>
      </Dialog>
    </>
  );
};
