import { QuizConfigSelection, QuizTimingSelection } from "@/components/PageComponents/adminpage/quizzes/quizdisplayparts/QuizConfigSelection";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { FieldGroup } from "@/components/ui/field";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Spinner } from "@/components/ui/spinner";
import { useLearnerQuizStore } from "@/statemanagers/learnerpagestore/LearnerQuizStore";
import { type RandomQuizType, randomQuizSchema } from "@/typesnschemas/schemas/QuizSchema";
import { XIcon } from "@animateicons/react/lucide";

import { zodResolver } from "@hookform/resolvers/zod";

import { useState } from "react";
import { type SubmitHandler, useForm } from "react-hook-form";

export const RandomQuizDialog = () => {
  const { setRandomQuizDialogShow } = useLearnerQuizStore();
  const [submitLoading, setSubmitLoading] = useState(false);

  const { control, handleSubmit } = useForm<RandomQuizType>({
    resolver: zodResolver(randomQuizSchema),
    defaultValues: {
      difficulty: "",
      level: "",
      programme: "",
      course: "",
      timing: 10,
    },
  });

  const handleRandomQuiz: SubmitHandler<RandomQuizType> = (data) => {
    setSubmitLoading(true);
    setTimeout(() => {
      console.log(data);
      setSubmitLoading(false);

      // Show Toast For SuccessFul Quiz Creation();
    }, 1000);
  };

  return (
    <>
      <Dialog open>
        <form id="quiz-creation-form" onSubmit={handleSubmit(handleRandomQuiz)}>
          <DialogContent className="max-w-110!" showCloseButton={false}>
            <Button onClick={setRandomQuizDialogShow} className="absolute top-1 right-1" variant="ghost">
              <XIcon />
            </Button>

            <DialogHeader className="text-green-500!">
              <DialogTitle>Randomized Quiz</DialogTitle>
              <DialogDescription>Generate a random quiz based on your preference</DialogDescription>
            </DialogHeader>

            <ScrollArea className="max-h-[80vh]">
              <FieldGroup className="gap-2!">
                <QuizConfigSelection
                  label="Quiz Difficulty"
                  name={"difficulty"}
                  control={control}
                  placeholder={"Select a difficulty"}
                  configType="difficulty"
                />

                <QuizConfigSelection label="Quiz Level" name={"level"} control={control} placeholder={"Select a level"} configType="level" />

                <QuizConfigSelection
                  label="Quiz Programme"
                  name={"programme"}
                  control={control}
                  placeholder={"Select a programme"}
                  configType="programme"
                />

                <QuizConfigSelection label="Quiz Course" name={"course"} control={control} placeholder={"Select a course"} configType="course" />

                <QuizTimingSelection label="Quiz Timing" name={"timing"} control={control} placeholder={"Select quiz timing"} />
              </FieldGroup>
            </ScrollArea>

            <DialogFooter className="justify-center!">
              <Button type="submit" form="quiz-creation-form" className="px-6 h-10 min-w-50">
                {submitLoading && <Spinner />}
                Start Randomized Quiz
              </Button>
            </DialogFooter>
          </DialogContent>
        </form>
      </Dialog>
    </>
  );
};
