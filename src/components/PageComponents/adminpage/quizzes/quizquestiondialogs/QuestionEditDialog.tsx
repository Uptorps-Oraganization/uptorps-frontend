import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Field, FieldGroup } from "@/components/ui/field";
import { Label } from "@/components/ui/label";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Spinner } from "@/components/ui/spinner";
import { Textarea } from "@/components/ui/textarea";
import { useQuestionPageStore } from "@/statemanagers/adminpagestate/QuestionPageStore";
import { questionCreationSchema, type QuestionCreationType } from "@/typesnschemas/schemas/QuizSchema";
import { XIcon } from "@animateicons/react/lucide";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { QuestionTypeSelection } from "../quizdisplayparts/QuestionConfigSelection";

export const QuestionEditDialog = () => {
  const { setQuestionEditOpen } = useQuestionPageStore();

  const [submitLoading, setSubmitLoading] = useState(false);

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<QuestionCreationType>({
    resolver: zodResolver(questionCreationSchema),
    defaultValues: {
      question: "Neither the teacher nor the students _______ able to solve the complex riddle during yesterday's class.",
      question_type: "MC",
    },
  });

  const handleQuestionEdit: SubmitHandler<QuestionCreationType> = (data) => {
    setSubmitLoading(true);
    setTimeout(() => {
      console.log(data);
      setSubmitLoading(false);

      // Show Toast For SuccessFul Question Edit();
    }, 1000);
  };

  return (
    <>
      <Dialog open>
        <form id="question-edit-form" onSubmit={handleSubmit(handleQuestionEdit)}>
          <DialogContent className="max-w-110!" showCloseButton={false}>
            <Button onClick={setQuestionEditOpen} className="absolute top-1 right-1" variant="ghost">
              <XIcon />
            </Button>

            <DialogHeader className="text-green-400!">
              <DialogTitle>Edit Question</DialogTitle>
              <DialogDescription>Make changes to question</DialogDescription>
            </DialogHeader>

            <ScrollArea className="max-h-[80vh]">
              <FieldGroup className="gap-2!">
                <Field>
                  <Label htmlFor="question" className="after:content-['_*'] after:text-destructive after:font-bold">
                    Question
                  </Label>
                  <Textarea id="question" {...register("question")} placeholder="Type question here....." />
                  {errors && <p className="text-[12px] font-medium text-destructive">{errors.question?.message}</p>}
                </Field>

                <QuestionTypeSelection label={"Question Type"} name={"question_type"} control={control} />
              </FieldGroup>
            </ScrollArea>

            <DialogFooter className="justify-center!">
              <Button type="submit" form="question-edit-form" className="px-6 h-10 min-w-50">
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
