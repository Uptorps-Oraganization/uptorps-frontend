/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Field, FieldGroup } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Spinner } from "@/components/ui/spinner";
import { useQuizPageStore } from "@/statemanagers/adminpagestate/QuizPageStore";
import { quizCreationSchema, type QuizCreationType } from "@/typesnschemas/schemas/QuizSchema";
import { XIcon } from "@animateicons/react/lucide";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { QuizConfigSelection, QuizCostSelection, QuizTimingSelection } from "../quizdisplayparts/QuizConfigSelection";

export const QuizEditDialog = () => {
  const { quizEditDialogOpen, setQuizEditDialogOpen } = useQuizPageStore();
  const [submitLoading, setSubmitLoading] = useState(false);

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<QuizCreationType>({
    resolver: zodResolver(quizCreationSchema),
    defaultValues: {
      title: "Lucky Quiz",
      description: "A lucky quiz",
      difficulty: "nursery",
      level: "level_1",
      programme: "arts",
      course: "dance",
      timing: 10,
      cost_type: false,
    },
  });

  const handleQuizEditSubmit: SubmitHandler<QuizCreationType> = (data) => {
    setSubmitLoading(true);
    setTimeout(() => {
      console.log(data);
      setSubmitLoading(false);

      // Show Toast For SuccessFul Quiz Edit();
    }, 1000);
  };

  const onSubmitError = (errors: any) => {
    console.log("Form Validation Errors on Submit:", errors);
  };

  return (
    <>
      <Dialog open={quizEditDialogOpen}>
        <form id="quiz-edit-form" onSubmit={handleSubmit(handleQuizEditSubmit, onSubmitError)}>
          <DialogContent className="max-w-110!" showCloseButton={false}>
            <Button onClick={setQuizEditDialogOpen} className="absolute top-1 right-1" variant="ghost">
              <XIcon />
            </Button>

            <DialogHeader className="text-green-400!">
              <DialogTitle>Edit Quiz</DialogTitle>
              <DialogDescription>Change quiz configurations</DialogDescription>
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
              <Button type="submit" form="quiz-edit-form" className="px-6 h-10 min-w-50">
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
