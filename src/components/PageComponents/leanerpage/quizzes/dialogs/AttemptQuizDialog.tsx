import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Field, FieldGroup } from "@/components/ui/field";
import { Spinner } from "@/components/ui/spinner";
import type { QuizNCourseDialogType } from "@/typesnschemas/types/DataTypes";
import { XIcon } from "@animateicons/react/lucide";
import { useState } from "react";

type AttemptQuizDialogType = QuizNCourseDialogType & { description: string; timing: number; numbOfQuestions: number };

export const AttemptQuizDialog = (props: AttemptQuizDialogType) => {
  const [submitLoading, setSubmitLoading] = useState(false);

  const handleQuizAttempt = () => {
    setSubmitLoading(true);
    setTimeout(() => {
      console.log("Quiz started successfully")
      setSubmitLoading(false);
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
            <DialogTitle>Details for Quiz Attempt</DialogTitle>
            <DialogDescription>Full details of the quiz attempt</DialogDescription>
          </DialogHeader>

          <FieldGroup className="gap-3!">
            <Field>
              <span className="text-xs font-bold">Quiz Title</span>
              <span className="text-sm">{props.title}</span>
            </Field>

            <Field>
              <span className="text-xs font-bold">Quiz Description</span>
              <span className="text-sm">{props.description}</span>
            </Field>

            <div className="grid grid-cols-2 gap-y-2">
              <Field>
                <span className="text-xs font-bold">Quiz Difficulty</span>
                <span className="text-sm">Basic</span>
              </Field>

              <Field>
                <span className="text-xs font-bold">Quiz Level</span>
                <span className="text-sm">Level 2</span>
              </Field>

              <Field>
                <span className="text-xs font-bold">Quiz Programme</span>
                <span className="text-sm">Mathematics</span>
              </Field>

              <Field>
                <span className="text-xs font-bold">Quiz Course</span>
                <span className="text-sm">Algebra</span>
              </Field>

              <Field>
                <span className="text-xs font-bold">Quiz Timing</span>
                <span className="text-sm">{props.timing} minutes</span>
              </Field>

              <Field>
                <span className="text-xs font-bold">Quiz Questions</span>
                <span className="text-sm">{props.numbOfQuestions} questions</span>
              </Field>
            </div>
          </FieldGroup>

          <DialogFooter className="justify-center!">
            <Button onClick={() => handleQuizAttempt()} className="px-6 h-10 min-w-50">
              {submitLoading && <Spinner />}
              Start Quiz Attempt
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};
