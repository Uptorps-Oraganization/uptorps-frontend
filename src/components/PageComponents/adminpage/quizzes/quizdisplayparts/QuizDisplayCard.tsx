import { DisplayTableFooter } from "@/components/PageComponents/sharedcomponents/tabelunits/DisplayTableFooter";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";
import { QuizDetailTable } from "./QuizDetailTable";

export const QuizDisplayCard = () => {
  const [tabValue, setTabValue] = useState("all");

  return (
    <>
      <Card>
        <CardHeader className="border-b">
          <p className="text-sm font-semibold">Admin Created Quizzes</p>
        </CardHeader>

        <CardContent>
          <section>
            <Tabs defaultValue="all" className="w-full" onValueChange={(value) => setTabValue(value)}>
              <TabsList className="space-x-3">
                <TabsTrigger className="account_tab_trigger" value="all">
                  ALL
                </TabsTrigger>
                <TabsTrigger className="account_tab_trigger" value="free">
                  FREE
                </TabsTrigger>
                <TabsTrigger className="account_tab_trigger" value="paid">
                  PAID
                </TabsTrigger>
              </TabsList>

              <TabsContent value={tabValue} className="pt-1">
                <QuizDetailTable />
              </TabsContent>
            </Tabs>
          </section>
        </CardContent>

        <DisplayTableFooter />
      </Card>
    </>
  );
};
