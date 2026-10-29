import { Button } from "@/components/ui/button";
import { Card, CardAction, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useQuestionPageStore } from "@/statemanagers/adminpagestate/QuestionPageStore";
import { SquarePenIcon, Trash2Icon } from "@animateicons/react/lucide";
import { CirclePlusIcon } from "lucide-react";
import { QuizQuestionAnswerCard } from "./QuizQuestionAnswerCard";

export const QuizQuestionCard = () => {
  const { setQuestionEditOpen, setQuestionDeleteOpen, setAnswerCreationDialogOpen } = useQuestionPageStore();

  return (
    <>
      <Card>
        <CardHeader>
          <CardAction className="text-nowrap! text-xs border border-green-400 p-1">
            <span className="font-semibold">Multiple Choice</span>
          </CardAction>

          <CardTitle className="flex flex-row justify-between items-center pt-2">
            <span className="font-semibold">Question</span>
          </CardTitle>

          <CardDescription>
            <span className="text-sm">Neither the teacher nor the students _______ able to solve the complex riddle during yesterday's class.</span>
          </CardDescription>

          <section className="flex flex-row pt-2 space-x-2">
            <Button onClick={setAnswerCreationDialogOpen} className="text-amber-500" variant="outline">
              <CirclePlusIcon />
              Add Answer
            </Button>

            <Button onClick={setQuestionEditOpen} className="text-green-500" variant="outline">
              <SquarePenIcon />
              Edit Question
            </Button>

            <Button onClick={setQuestionDeleteOpen} className="text-destructive" variant="outline">
              <Trash2Icon /> Delete Question
            </Button>
          </section>
        </CardHeader>

        <CardFooter>
          <div className="flex flex-col">
            <section className="flex flex-row justify-between items-center pb-2">
              <span className="font-semibold">Answers</span>
            </section>

            <section className="w-full space-y-2">
              <QuizQuestionAnswerCard />
              <QuizQuestionAnswerCard />
              <QuizQuestionAnswerCard />
              <QuizQuestionAnswerCard />
            </section>
          </div>
        </CardFooter>
      </Card>
    </>
  );
};
