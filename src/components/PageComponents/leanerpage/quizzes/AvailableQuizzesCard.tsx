import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useLearnerQuizStore } from "@/statemanagers/learnerpagestore/LearnerQuizStore";
import { useIconHover } from "@animateicons/react";
import { ArrowUpRightIcon, BlocksIcon, TimerIcon } from "@animateicons/react/lucide";
import { Dot } from "lucide-react";

export const AvailableQuizzesCard = () => {
  const { ref: attemptRef, triggerProps } = useIconHover({ trigger: "hover" });

  const { setAttemptQuizDialogShow } = useLearnerQuizStore();

  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle className="text-sm font-semibold">Lucky Quiz</CardTitle>

          <CardDescription className="w-fit flex flex-row items-center gap-1">
            <Dot size={16} />
            <span>A quiz for lucky people</span>
          </CardDescription>

          <CardDescription className="w-fit flex flex-row items-center gap-1">
            <TimerIcon size={16} className="text-green-500" />
            <span>Timing:</span>
            <span className="text-green-500 bg-green-500/10 text-xs p-1">20 minutes</span>
          </CardDescription>

          <CardDescription className="w-fit flex flex-row items-center gap-1">
            <BlocksIcon size={16} className="text-green-500" />
            <span>Total Questions:</span>
            <span className="text-green-500 bg-green-500/10 text-xs p-1">20 Questions</span>
          </CardDescription>
        </CardHeader>

        <CardFooter className="p-2">
          <Button onClick={setAttemptQuizDialogShow} className="text-green-500 bg-green-500/10" variant="ghost" {...triggerProps}>
            <ArrowUpRightIcon ref={attemptRef} />
            Attempt Quiz
          </Button>
        </CardFooter>
      </Card>
    </>
  );
};
