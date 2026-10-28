import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Field, FieldGroup } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Spinner } from "@/components/ui/spinner";
import { quizCreationSchema, type QuizCreationType } from "@/typesnschemas/schemas/QuizCreationSchema";
import { XIcon } from "@animateicons/react/lucide";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { QuizConfigSelection, QuizCostSelection, QuizTimingSelection } from "./QuizConfigSelection";

type QuizCreationDialogState = {
  quizDialogOpen: boolean;
  setQuizDialogOpen: (quizDialogOpen: boolean) => void;
};

export const QuizCreationDialog = ({ quizDialogOpen, setQuizDialogOpen }: QuizCreationDialogState) => {
  const [submitLoading, setSubmitLoading] = useState(false);

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<QuizCreationType>({
    resolver: zodResolver(quizCreationSchema),
    defaultValues: {
      cost_type: false,
    },
  });

  const handleQuizCreationSubmit: SubmitHandler<QuizCreationType> = (data) => {
    setSubmitLoading(true);
    setTimeout(() => {
      console.log(data);
      setSubmitLoading(false);

      // Show Toast For SuccessFul Quiz Creation();
    }, 1000);
  };

  return (
    <>
      <Dialog open={quizDialogOpen}>
        <form id="dialog-form" onSubmit={handleSubmit(handleQuizCreationSubmit)}>
          <DialogContent className="max-w-110!" showCloseButton={false}>
            <Button onClick={() => setQuizDialogOpen(false)} className="absolute top-1 right-1" variant="ghost">
              <XIcon />
            </Button>

            <DialogHeader>
              <DialogTitle>Create A Quiz</DialogTitle>
              <DialogDescription>Setup a quiz that can be accessed by learners</DialogDescription>
            </DialogHeader>

            <ScrollArea className="max-h-[80vh]">
              <FieldGroup className="gap-2!">
                <Field>
                  <Label htmlFor="title" className="after:content-['_*'] after:text-destructive after:font-bold">
                    Quiz Title
                  </Label>
                  <Input id="title" {...register("title")} placeholder="Enter a quiz title" />
                  {errors && <p className="text-[12px] font-medium text-destructive">{errors.title?.message}</p>}
                </Field>

                <Field>
                  <Label htmlFor="description" className="after:content-['_*'] after:text-destructive after:font-bold">
                    Quiz Description
                  </Label>
                  <Input id="description" {...register("description")} placeholder="Describe the quiz" />
                  {errors && <p className="text-[12px] font-medium text-destructive">{errors.description?.message}</p>}
                </Field>

                <QuizCostSelection label=" Quiz Cost Type" name={"cost_type"} control={control} />

                <QuizConfigSelection label="Quiz Difficulty" name={"difficulty"} control={control} placeholder={"Select a difficulty"} configType="difficulty" />

                <QuizConfigSelection label="Quiz Level" name={"level"} control={control} placeholder={"Select a level"} configType="level" />

                <QuizConfigSelection label="Quiz Programme" name={"programme"} control={control} placeholder={"Select a programme"} configType="programme" />

                <QuizConfigSelection label="Quiz Course" name={"course"} control={control} placeholder={"Select a course"} configType="course" />

                <QuizTimingSelection label="Quiz Timing" name={"timing"} control={control} placeholder={"Select quiz timing"} />
              </FieldGroup>
            </ScrollArea>

            <DialogFooter className="justify-center!">
              <Button type="submit" form="dialog-form" className="px-6 h-10 min-w-50">
                {submitLoading && <Spinner />}
                Confirm Quiz Creation
              </Button>
            </DialogFooter>
          </DialogContent>
        </form>
      </Dialog>
    </>
  );
};
