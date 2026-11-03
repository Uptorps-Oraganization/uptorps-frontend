import { DisplayTableFooter } from "@/components/PageComponents/sharedcomponents/tabelunits/DisplayTableFooter";
import { Card, CardContent, CardDescription, CardHeader } from "@/components/ui/card";
import { InputGroup, InputGroupAddon, InputGroupInput } from "@/components/ui/input-group";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { SearchIcon } from "@animateicons/react/lucide";
import { useState } from "react";
import { PayoutApprovalDetailTable } from "./PayoutApprovalDetailTable";

export const PayoutApprovalDisplayCard = () => {
  const [tabValue, setTabValue] = useState("all");

  return (
    <>
      <Card>
        <CardHeader className="border-b">
          <p className="text-sm font-semibold">APPROVED PAYOUTS</p>
        </CardHeader>

        <CardDescription className="px-4">
          <section className="w-6/12 flex flex-row justify-between items-center gap-4 h-8">
            <InputGroup className="h-full">
              <InputGroupAddon align="inline-start">
                <SearchIcon className="size-4 cursor-auto" />
              </InputGroupAddon>

              <InputGroupInput type="text" className="text-[14px]!" placeholder="Search payout requests by username, date or amount......." />
            </InputGroup>
          </section>
        </CardDescription>

        <CardContent>
          <section>
            <Tabs defaultValue="all" className="w-full" onValueChange={(value) => setTabValue(value)}>
              <TabsList className="space-x-3">
                <TabsTrigger className="account_tab_trigger" value="all">
                  ALL
                </TabsTrigger>
                <TabsTrigger className="account_tab_trigger" value="learner">
                  LEARNERS
                </TabsTrigger>
                <TabsTrigger className="account_tab_trigger" value="tutors">
                  TUTORS
                </TabsTrigger>
                <TabsTrigger className="account_tab_trigger" value="success">
                  SUCCESS
                </TabsTrigger>
                <TabsTrigger className="account_tab_trigger" value="failure">
                  FAILURE
                </TabsTrigger>
              </TabsList>

              <TabsContent value={tabValue} className="pt-1">
                <PayoutApprovalDetailTable />
              </TabsContent>
            </Tabs>
          </section>
        </CardContent>

        <DisplayTableFooter />
      </Card>
    </>
  );
};
