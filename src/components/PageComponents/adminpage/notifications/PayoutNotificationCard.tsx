import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Spinner } from "@/components/ui/spinner";
import { displayShortDate } from "@/lib/utils";
import { HandCoinsIcon } from "lucide-react";
import { useState } from "react";

export const PayoutNotificationCard = (props: { status: "read" | "unread" }) => {
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
              <HandCoinsIcon className="size-4" />
              Payout Request
            </span>
          </CardHeader>

          <CardContent className="flex flex-col p-1!">
            <span>
              <b>Request By:</b> Enock Ashock
            </span>

            <span>Requesting a payout of GHC 320.00</span>

            <i className="pt-1 text-[10px] text-green-500/90">{displayShortDate(new Date("2026-11-20T09:15:00Z"))}</i>
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
