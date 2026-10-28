import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Field, FieldGroup } from "@/components/ui/field";
import { Label } from "@/components/ui/label";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Spinner } from "@/components/ui/spinner";
import { Textarea } from "@/components/ui/textarea";
import { useQuestionPageStore } from "@/statemanagers/adminpagestate/QuestionPageStore";
import { answerCreationSchema, type AnswerCreationType } from "@/typesnschemas/schemas/QuizSchema";
import { XIcon } from "@animateicons/react/lucide";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { AnswerTypeSelection } from "../quizdisplayparts/QuestionConfigSelection";

export const AnswerEditDialog = () => {
  const { answerEditOpen, setAnswerEditOpen } = useQuestionPageStore();

  const [submitLoading, setSubmitLoading] = useState(false);

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<AnswerCreationType>({
    resolver: zodResolver(answerCreationSchema),
    defaultValues: {
      answer: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
      is_correct: false,
    },
  });

  const handleAnswerEdit: SubmitHandler<AnswerCreationType> = (data) => {
    setSubmitLoading(true);
    setTimeout(() => {
      console.log(data);
      setSubmitLoading(false);

      // Show Toast For SuccessFul Question Edit();
    }, 1000);
  };

  return (
    <>
      <Dialog open={answerEditOpen}>
        <form id="answer-edit-form" onSubmit={handleSubmit(handleAnswerEdit)}>
          <DialogContent className="max-w-110!" showCloseButton={false}>
            <Button onClick={setAnswerEditOpen} className="absolute top-1 right-1" variant="ghost">
              <XIcon />
            </Button>

            <DialogHeader className="text-green-400!">
              <DialogTitle>Edit Answer</DialogTitle>
              <DialogDescription>Make changes to answer</DialogDescription>
            </DialogHeader>

            <ScrollArea className="max-h-[80vh]">
              <FieldGroup className="gap-2!">
                <Field>
                  <Label htmlFor="answer" className="after:content-['_*'] after:text-destructive after:font-bold">
                    Answer
                  </Label>
                  <Textarea id="answer" {...register("answer")} placeholder="Type answer here....." />
                  {errors && <p className="text-[12px] font-medium text-destructive">{errors.answer?.message}</p>}
                </Field>

                <AnswerTypeSelection label={"Correct Answer?"} name={"is_correct"} control={control} />
              </FieldGroup>
            </ScrollArea>

            <DialogFooter className="justify-center!">
              <Button type="submit" form="answer-edit-form" className="px-6 h-10 min-w-50">
                {submitLoading && <Spinner />}
                Save Changes
              </Button>
            </DialogFooter>
          </DialogContent>
        </form>
      </Dialog>
    </>
  );
};
