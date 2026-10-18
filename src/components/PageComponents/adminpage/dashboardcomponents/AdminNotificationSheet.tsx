/* eslint-disable @typescript-eslint/no-explicit-any */
import { Sheet, SheetContent, SheetFooter, SheetHeader } from "@/components/ui/sheet";

export const AdminNotificationSheet = ({ isSheetOpen, setIsSheetOpen }: any) => {
  return (
    <>
      <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
        <SheetContent>
          <SheetHeader></SheetHeader>
          <div>
            <p>Notifications Here</p>
          </div>
          <SheetFooter></SheetFooter>
        </SheetContent>
      </Sheet>
    </>
  );
};
