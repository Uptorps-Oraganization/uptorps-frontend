import { DisplayTableFooter } from "@/components/PageComponents/sharedcomponents/tabelunits/DisplayTableFooter";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { InputGroup, InputGroupAddon, InputGroupInput } from "@/components/ui/input-group";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { SearchIcon } from "@animateicons/react/lucide";
import { useState } from "react";
import { AccountTransactionTable } from "./AccountTransactionTable";

export const AccountTransactionDisplayCard = () => {
  const [tabValue, setTabValue] = useState("all");

  return (
    <>
      <Card>
        <CardHeader>
          <section className="w-6/12 flex flex-row justify-between items-center gap-4 h-8">
            <InputGroup className="h-full">
              <InputGroupAddon align="inline-start">
                <SearchIcon className="size-4 cursor-auto" />
              </InputGroupAddon>

              <InputGroupInput type="text" className="text-[14px]!" placeholder="Search Transaction By Type or Reference Code........" />
            </InputGroup>
          </section>
        </CardHeader>

        <CardContent>
          <section>
            <Tabs defaultValue="all" className="w-full" onValueChange={(value) => setTabValue(value)}>
              <TabsList className="space-x-3">
                <TabsTrigger className="account_tab_trigger" value="all">
                  ALL
                </TabsTrigger>
                <TabsTrigger className="account_tab_trigger" value="debit">
                  DEBIT
                </TabsTrigger>
                <TabsTrigger className="account_tab_trigger" value="credit">
                  CREDIT
                </TabsTrigger>
                <TabsTrigger className="account_tab_trigger" value="completed">
                  COMPLETED
                </TabsTrigger>
                <TabsTrigger className="account_tab_trigger" value="pending">
                  PENDING
                </TabsTrigger>
                <TabsTrigger className="account_tab_trigger" value="failed">
                  FAILED
                </TabsTrigger>
              </TabsList>

              <TabsContent value={tabValue} className="pt-1">
                <AccountTransactionTable />
              </TabsContent>
            </Tabs>
          </section>
        </CardContent>

        <DisplayTableFooter />
      </Card>
    </>
  );
};
