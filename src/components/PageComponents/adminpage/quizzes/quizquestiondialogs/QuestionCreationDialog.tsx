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

export const QuestionCreationDialog = () => {
  const { setQuestionCreationDialogOpen } = useQuestionPageStore();

  const [submitLoading, setSubmitLoading] = useState(false);

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<QuestionCreationType>({
    resolver: zodResolver(questionCreationSchema),
    defaultValues: {
      question_type: "MC",
    },
  });

  const handleQuestionCreation: SubmitHandler<QuestionCreationType> = (data) => {
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
        <form id="question-creation-form" onSubmit={handleSubmit(handleQuestionCreation)}>
          <DialogContent className="max-w-110!" showCloseButton={false}>
            <Button onClick={setQuestionCreationDialogOpen} className="absolute top-1 right-1" variant="ghost">
              <XIcon />
            </Button>

            <DialogHeader className="text-green-400!">
              <DialogTitle>Add Question</DialogTitle>
              <DialogDescription>Create a new question</DialogDescription>
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
              <Button type="submit" form="question-creation-form" className="px-6 h-10 min-w-50">
                {submitLoading && <Spinner />}
                Create Question
              </Button>
            </DialogFooter>
          </DialogContent>
        </form>
      </Dialog>
    </>
  );
};
