import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PayoutApprovalDisplayCard } from "./payoutapproval/PayoutApprovalDisplayCard";
import { PayoutPendingDisplayCard } from "./payoutpending/PayoutPendingDisplayCard";

export const PayoutManagementDisplay = () => {
  return (
    <>
      <Tabs defaultValue="pending" className="w-full pt-2">
        <TabsList className="space-x-3">
          <TabsTrigger className="account_tab_trigger" value="pending">
            PENDING
          </TabsTrigger>
          <TabsTrigger className="account_tab_trigger" value="approved">
            APPROVED
          </TabsTrigger>
        </TabsList>

        <TabsContent value="pending" className="pt-2">
          <PayoutPendingDisplayCard />
        </TabsContent>

        <TabsContent value="approved" className="pt-2">
          <PayoutApprovalDisplayCard />
        </TabsContent>
      </Tabs>
    </>
  );
};
