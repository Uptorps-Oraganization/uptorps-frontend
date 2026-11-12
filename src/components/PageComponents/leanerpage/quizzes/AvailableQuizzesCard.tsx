import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useLearnerQuizStore } from "@/statemanagers/learnerpagestore/LearnerQuizStore";
import { useIconHover } from "@animateicons/react";
import { ArrowUpRightIcon, BlocksIcon, EyeIcon, TimerIcon } from "@animateicons/react/lucide";
import { Dot } from "lucide-react";

const iconTriggerConfig = [
  { icon: "attempt", trigger: "hover" },
  { icon: "view", trigger: "hover" },
] as const;

export const AvailableQuizzesCard = () => {
  const {
    icon: { attempt, view },
    trigger,
  } = useIconHover({ trigger: iconTriggerConfig });

  const { setAttemptQuizDialogShow, setQuizDetailDialogShow } = useLearnerQuizStore();

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
            <span className="text-green-500 bg-green-500/10 text-xs p-1 font-semibold">20 minutes</span>
          </CardDescription>

          <CardDescription className="w-fit flex flex-row items-center gap-1">
            <BlocksIcon size={16} className="text-green-500" />
            <span>Total Questions:</span>
            <span className="text-green-500 bg-green-500/10 text-xs p-1 font-semibold">20 Questions</span>
          </CardDescription>
        </CardHeader>

        <CardFooter className="p-2 gap-2">
          <Button onClick={setAttemptQuizDialogShow} className="text-green-500 bg-green-500/10" variant="ghost" {...trigger}>
            <ArrowUpRightIcon {...attempt} />
            Attempt Quiz
          </Button>

          <Button onClick={setQuizDetailDialogShow} className="text-amber-500 bg-amber-500/10" variant="ghost" {...trigger}>
            <EyeIcon {...view} />
            View Quiz Details
          </Button>
        </CardFooter>
      </Card>
    </>
  );
};
