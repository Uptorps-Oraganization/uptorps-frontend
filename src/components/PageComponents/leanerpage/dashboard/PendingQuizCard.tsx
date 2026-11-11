import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useLearnerQuizStore } from "@/statemanagers/learnerpagestore/LearnerQuizStore";
import { useIconHover } from "@animateicons/react";
import { ArrowRight02Icon, CancelCircleIcon } from "@animateicons/react/huge";
import { BlocksIcon, TimerIcon } from "@animateicons/react/lucide";

const iconTriggerConfig = [
  { icon: "cont", trigger: "hover" },
  { icon: "forfeit", trigger: "hover" },
] as const;

export const PendingQuizCard = () => {
  const {
    icon: { cont, forfeit },
    trigger,
  } = useIconHover({ trigger: iconTriggerConfig });

  const { setContinueQuizDialogShow, setForfeitQuizDialogShow } = useLearnerQuizStore();

  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle className="text-sm font-semibold">Lucky Quiz</CardTitle>

          <CardDescription className="w-fit flex flex-row items-center gap-1">
            <TimerIcon size={16} color="var(--color-green-500)" />
            <span>Remaining Time:</span>
            <span className=" text-amber-500 text-xs p-1 bg-amber-500/10">2 minutes</span>
          </CardDescription>

          <CardDescription className="w-fit flex flex-row items-center gap-1">
            <BlocksIcon size={16} color="var(--color-green-500)" />
            <span>Answered Question:</span>
            <span className="text-amber-500 text-xs p-1 bg-amber-500/10 font-semibold">6</span>
            <span>out of</span>
            <span className="text-green-500 text-xs p-1 bg-green-500/10 font-semibold">10</span>
          </CardDescription>
        </CardHeader>

        <CardFooter className="p-2 gap-2">
          <Button onClick={setContinueQuizDialogShow} className="text-green-500 bg-green-500/10" variant="ghost" {...trigger}>
            <ArrowRight02Icon {...cont} />
            Continue Attempt
          </Button>

          <Button onClick={setForfeitQuizDialogShow} className="text-destructive bg-destructive/10" variant="ghost" {...trigger}>
            <CancelCircleIcon {...forfeit} />
            Forfeit Quiz
          </Button>
        </CardFooter>
      </Card>
    </>
  );
};
