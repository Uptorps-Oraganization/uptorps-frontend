import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Spinner } from "@/components/ui/spinner";
import { displayShortDate } from "@/lib/utils";
import { MessageSquareDotIcon } from "lucide-react";
import { useState } from "react";

export const ReportNotificationCard = (props: { roletype: "Learner" | "Tutor"; status: "read" | "unread" }) => {
  const [markAsReadLoading, setMarkAsReadLoading] = useState(false);

  const handleMarkAsRead = () => {
    setMarkAsReadLoading(true);

    setTimeout(() => {
      console.log("Note marked as read!");
      setMarkAsReadLoading(false);
    }, 2000);
  };

  return (
    <>
      <div className="p-1 pt-2">
        <Card className="p-2 gap-1!">
          <CardHeader className="p-1 pb-1! border-b">
            <span className="flex flex-row items-center gap-2 text-green-500 font-semibold">
              <MessageSquareDotIcon className="size-4" />
              {props.roletype === "Learner" && "Learner Report"}
              {props.roletype === "Tutor" && "Tutor Report"}
            </span>
          </CardHeader>

          <CardContent className="flex flex-col p-1!">
            <span>
              <b>Reported By:</b> Shirley Shun
            </span>

            <span>I would like to report on the quizzes that I can take in premium</span>

            <i className="pt-1 text-[10px] text-green-500/90">{displayShortDate(new Date("2026-09-20T10:13:00Z"))}</i>
          </CardContent>

          {props.status == "unread" && (
            <CardFooter className="p-1">
              <Button
                onClick={() => handleMarkAsRead()}
                className="flex flex-row items-center text-green-500 p-1"
                variant="link"
                disabled={markAsReadLoading ? true : false}
              >
                {markAsReadLoading && <Spinner className="size-3!" />}
                Mark as read
              </Button>
            </CardFooter>
          )}
        </Card>
      </div>
    </>
  );
};
