import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Sheet, SheetContent, SheetFooter, SheetHeader } from "@/components/ui/sheet";
import { Spinner } from "@/components/ui/spinner";
import { displayLongDate } from "@/lib/utils";
import type { NotificationSheetType } from "@/typesnschemas/types/DataTypes";
import { useEffect, useState } from "react";
import { PayoutNotificationCard } from "../adminpage/notifications/PayoutNotificationCard";
import { ReportNotificationCard } from "../adminpage/notifications/ReportNotificationCard";

export const NotificationSheet = ({ isSheetOpen, setIsSheetOpen }: NotificationSheetType) => {
  const [currentTime, setCurrentTime] = useState<string>("");
  const [markAllAsReadLoading, setMarkAllAsReadLoading] = useState(false);

  const handleMarkAllAsRead = () => {
    setMarkAllAsReadLoading(true);

    setTimeout(() => {
      console.log("All notes marked as read!");
      setMarkAllAsReadLoading(false);
    }, 2000);
  };

  useEffect(() => {
    setInterval(() => {
      const userCurrentTime = displayLongDate(new Date());

      setCurrentTime(userCurrentTime);
    }, 1000);
  });

  return (
    <>
      <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
        <SheetContent>
          <SheetHeader className="font-semibold text-green-500">Notifications</SheetHeader>

          <ScrollArea className="max-h-10/12">
            <Accordion className="flex flex-col p-2 gap-3">
              <AccordionItem value="unread">
                <section>
                  <div className="flex flex-row justify-between items-center">
                    <AccordionTrigger>
                      <p className="font-bold mr-3">Unread</p>
                    </AccordionTrigger>
                    <Button
                      onClick={() => handleMarkAllAsRead()}
                      className="flex flex-row items-center text-green-500 p-1"
                      variant="link"
                      disabled={markAllAsReadLoading ? true : false}
                    >
                      {markAllAsReadLoading && <Spinner className="size-3!" />}
                      Mark all as read
                    </Button>
                  </div>

                  <Separator />

                  <AccordionContent>
                    <PayoutNotificationCard status={"unread"} />
                    <ReportNotificationCard roletype={"Learner"} status={"unread"} />
                  </AccordionContent>
                </section>
              </AccordionItem>

              <AccordionItem value={"read"}>
                <section id="readNotes">
                  <div className="flex flex-row justify-between items-center">
                    <AccordionTrigger>
                      <p className="font-bold mr-3">Read</p>
                    </AccordionTrigger>
                  </div>

                  <Separator />

                  <AccordionContent>
                    <PayoutNotificationCard status={"read"} />
                    <ReportNotificationCard roletype={"Tutor"} status={"read"} />
                  </AccordionContent>
                </section>
              </AccordionItem>
            </Accordion>
          </ScrollArea>

          <SheetFooter className="flex flex-row font-semibold">
            <span>{currentTime}</span>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </>
  );
};
