import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useIconHover } from "@animateicons/react";
import { EyeIcon, HistoryIcon } from "@animateicons/react/lucide";
import { useNavigate } from "react-router";
import { RecentActivityItem } from "./RecentActivityItem";

export const RecentActivityCard = () => {
  const navigate = useNavigate();
  const { ref: eyeRef, triggerProps } = useIconHover({ trigger: "hover" });

  return (
    <>
      <Card>
        <CardHeader className="border-b">
          <CardTitle className="w-fit flex flex-row items-center gap-1">
            <HistoryIcon size={16} color="var(--color-green-500)" />
            Recent Activity
          </CardTitle>
          <CardDescription>Your most recent activitiy performed</CardDescription>
        </CardHeader>

        <CardContent className="flex flex-col gap-4">
          <RecentActivityItem />
        </CardContent>

        <CardFooter className="justify-center">
          <Button
            onClick={() => navigate("/userpage/learneractionpage/referrals")}
            className="text-green-500 bg-green-500/10"
            variant="ghost"
            {...triggerProps}
          >
            <EyeIcon ref={eyeRef} />
            View Full Referral Tree
          </Button>
        </CardFooter>
      </Card>
    </>
  );
};
