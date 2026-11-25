import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useIconHover } from "@animateicons/react";
import { ArrowRight02Icon, CancelCircleIcon } from "@animateicons/react/huge";
import { BlocksIcon, TimerIcon } from "@animateicons/react/lucide";
import { useState } from "react";
import { QuizContinueDialog } from "./dialogs/QuizContinueDialog";
import { QuizForfeitDialog } from "./dialogs/QuizForfeitDialog";

const iconTriggerConfig = [
  { icon: "cont", trigger: "hover" },
  { icon: "forfeit", trigger: "hover" },
] as const;

type PendingQuizCardType = {
  title: string;
  description: string;
  timing: number;
  numbOfQuestions: number;
  remainingTime: number;
  numbOfAnsweredQuestions: number;
};

export const PendingQuizCard = (props: PendingQuizCardType) => {
  const {
    icon: { cont, forfeit },
    trigger,
  } = useIconHover({ trigger: iconTriggerConfig });

  const [continueQuizDialogShow, setContinueQuizDialogShow] = useState(false);
  const [forfeitQuizDialogShow, setForfeitQuizDialogShow] = useState(false);

  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle className="text-sm font-semibold">{props.title}</CardTitle>

          <CardDescription className="w-fit flex flex-row items-start">
            <span>{props.description}</span>
          </CardDescription>

          <CardDescription className="w-fit flex flex-row items-center gap-1">
            <TimerIcon size={16} className="text-green-500" />
            <span>Remaining Time:</span>
            <span className="qc_amber_numb_display">{props.remainingTime}</span>
            <span>out of</span>
            <span className="qc_green_numb_display">{props.timing}</span>
            <span>minutes</span>
          </CardDescription>

          <CardDescription className="w-fit flex flex-row items-center gap-1">
            <BlocksIcon size={16} className="text-green-500" />
            <span>Answered Questions:</span>
            <span className="qc_amber_numb_display">{props.numbOfAnsweredQuestions}</span>
            <span>out of</span>
            <span className="qc_green_numb_display">{props.numbOfQuestions}</span>
            <span>questions</span>
          </CardDescription>
        </CardHeader>

        <CardFooter className="p-2 gap-2">
          <Button onClick={() => setContinueQuizDialogShow(true)} className="text-green-500 bg-green-500/10" variant="ghost" {...trigger}>
            <ArrowRight02Icon {...cont} />
            Continue Attempt
          </Button>

          <Button onClick={() => setForfeitQuizDialogShow(true)} className="text-destructive bg-destructive/10" variant="ghost" {...trigger}>
            <CancelCircleIcon {...forfeit} />
            Forfeit Quiz
          </Button>
        </CardFooter>
      </Card>

      {continueQuizDialogShow && <QuizContinueDialog title={props.title} closeDialog={setContinueQuizDialogShow} />}
      {forfeitQuizDialogShow && <QuizForfeitDialog title={props.title} closeDialog={setForfeitQuizDialogShow} />}
    </>
  );
};
