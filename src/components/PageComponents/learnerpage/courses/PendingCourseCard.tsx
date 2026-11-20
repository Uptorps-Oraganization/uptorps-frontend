import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useIconHover } from "@animateicons/react";
import { ArrowRight02Icon, CancelCircleIcon } from "@animateicons/react/huge";
import { LayersIcon, SquareUserRoundIcon } from "@animateicons/react/lucide";
import { BadgeCheckIcon } from "lucide-react";
import { useState } from "react";
import { CourseContinueDialog } from "./dialogs/CourseContinueDialog";
import { CourseForfeitDialog } from "./dialogs/CourseForfeitDialog";

const iconTriggerConfig = [
  { icon: "cont", trigger: "hover" },
  { icon: "forfeit", trigger: "hover" },
] as const;

type PendingCourseCardType = {
  title: string;
};

export const PendingCourseCard = (props: PendingCourseCardType) => {
  const {
    icon: { cont, forfeit },
    trigger,
  } = useIconHover({ trigger: iconTriggerConfig });

  const [continueCourseDialogShow, setContinueCourseDialogShow] = useState(false);
  const [forfeitCourseDialogShow, setForfeitCourseDialogShow] = useState(false);

  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle className="text-sm font-semibold">{props.title}</CardTitle>

          <CardDescription className="w-fit flex flex-row items-center gap-1">
            <SquareUserRoundIcon size={16} color="var(--color-green-500)" />
            <span>Tutor:</span>
            <div className="flex flex-row items-center gap-1">
              <span className="text-xs font-semibold">John Doe</span>
              <BadgeCheckIcon size={14} color="var(--color-green-500)" />
            </div>
          </CardDescription>

          <CardDescription className="w-fit flex flex-row items-center gap-1">
            <LayersIcon size={16} color="var(--color-green-500)" />
            <span>Lesssons Completed:</span>
            <span className="text-amber-500 text-xs p-1 bg-amber-500/10 font-semibold">2</span>
            <span>out of</span>
            <span className="text-green-500 text-xs p-1 bg-green-500/10 font-semibold">12</span>
          </CardDescription>
        </CardHeader>

        <CardFooter className="p-2 gap-2">
          <Button onClick={() => setContinueCourseDialogShow(true)} className="text-green-500 bg-green-500/10" variant="ghost" {...trigger}>
            <ArrowRight02Icon {...cont} />
            Continue Learning
          </Button>

          <Button onClick={() => setForfeitCourseDialogShow(true)} className="text-destructive bg-destructive/10" variant="ghost" {...trigger}>
            <CancelCircleIcon {...forfeit} />
            Forfeit Course
          </Button>
        </CardFooter>
      </Card>

      {continueCourseDialogShow && <CourseContinueDialog title={props.title} closeDialog={setContinueCourseDialogShow} />}
      {forfeitCourseDialogShow && <CourseForfeitDialog title={props.title} closeDialog={setForfeitCourseDialogShow} />}
    </>
  );
};
