import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight02Icon, CancelCircleIcon } from "@animateicons/react/huge";
import { LayersIcon, SquareUserRoundIcon } from "@animateicons/react/lucide";
import { BadgeCheckIcon } from "lucide-react";

export const PendingCourseCard = () => {
  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle className="text-sm font-semibold">Lucky Course</CardTitle>

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

        <CardFooter className="p-1.5 gap-2">
          <Button className="text-green-500 bg-green-500/10" variant="ghost">
            <ArrowRight02Icon />
            Continue Learning
          </Button>

          <Button className="text-destructive bg-destructive/10" variant="ghost">
            <CancelCircleIcon />
            Forfeit Course
          </Button>
        </CardFooter>
      </Card>
    </>
  );
};
