import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useIconHover } from "@animateicons/react";
import { ArrowUpRightIcon, BlocksIcon, TimerIcon } from "@animateicons/react/lucide";
import { useState } from "react";
import { AttemptQuizDialog } from "./dialogs/AttemptQuizDialog";

type AvailableQuizzesCardType = {
  title: string;
  description: string;
  timing: number;
  numbOfQuestions: number;
};

export const AvailableQuizzesCard = (props: AvailableQuizzesCardType) => {
  const { ref: attemptRef, triggerProps } = useIconHover({ trigger: "hover" });

  const [attemptQuizDialogShow, setAttemptQuizDialogShow] = useState(false);

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
            <span>Timing:</span>
            <span className="text-green-500 bg-green-500/10 text-xs p-1">{props.timing} minutes</span>
          </CardDescription>

          <CardDescription className="w-fit flex flex-row items-center gap-1">
            <BlocksIcon size={16} className="text-green-500" />
            <span>Total Questions:</span>
            <span className="text-green-500 bg-green-500/10 text-xs p-1">{props.numbOfQuestions} questions</span>
          </CardDescription>
        </CardHeader>

        <CardFooter className="p-2">
          <Button onClick={() => setAttemptQuizDialogShow(true)} className="text-green-500 bg-green-500/10" variant="ghost" {...triggerProps}>
            <ArrowUpRightIcon ref={attemptRef} />
            Attempt Quiz
          </Button>
        </CardFooter>
      </Card>

      {attemptQuizDialogShow && (
        <AttemptQuizDialog
          title={props.title}
          closeDialog={setAttemptQuizDialogShow}
          description={props.description}
          timing={props.timing}
          numbOfQuestions={props.numbOfQuestions}
        />
      )}
    </>
  );
};
