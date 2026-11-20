import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { HistoryIcon } from "@animateicons/react/lucide";
import { RecentActivityItem } from "./RecentActivityItem";

export const RecentActivityCard = () => {
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
          <RecentActivityItem />
          <RecentActivityItem />
          <RecentActivityItem />
        </CardContent>
      </Card>
    </>
  );
};
