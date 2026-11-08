import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { InputGroup, InputGroupAddon, InputGroupInput } from "@/components/ui/input-group";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { accountQueryChoiceOptions } from "@/lib/data";
import { FilterIcon, SearchIcon } from "@animateicons/react/lucide";
import { useState } from "react";
import { DisplayTableFooter } from "../../sharedcomponents/tableunits/DisplayTableFooter";
import { AccountDetailTable } from "./AccountDetailTable";

export const AccountDisplayCard = () => {
  const [tabValue, setTabValue] = useState("all");

  return (
    <>
      <Card>
        <CardHeader>
          <section className="flex flex-row justify-between items-center gap-4 h-8">
            <InputGroup className="h-full">
              <InputGroupAddon align="inline-start">
                <SearchIcon className="size-4 cursor-auto" />
              </InputGroupAddon>

              <InputGroupInput type="text" className="text-[14px]!" placeholder="Search Account By Name or Email........." />
            </InputGroup>

            <Select items={accountQueryChoiceOptions} defaultValue={accountQueryChoiceOptions[0]} onValueChange={(value) => console.log(value)}>
              <SelectTrigger className="w-fit min-w-2/12 h-full!">
                <FilterIcon />
                <SelectValue className="text-[13px]! font-semibold" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Accounts</SelectLabel>
                  {accountQueryChoiceOptions.map((item) => (
                    <SelectItem key={item.value} value={item.value}>
                      {item.label}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </section>
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
                <TabsTrigger className="account_tab_trigger" value="premium">
                  PREMIUM
                </TabsTrigger>
                <TabsTrigger className="account_tab_trigger" value="active">
                  ACTIVE
                </TabsTrigger>
                <TabsTrigger className="account_tab_trigger" value="inactive">
                  INACTIVE
                </TabsTrigger>
                <TabsTrigger className="account_tab_trigger" value="suspended">
                  SUSPENDED
                </TabsTrigger>
              </TabsList>

              <TabsContent value={tabValue} className="pt-1">
                <AccountDetailTable />
              </TabsContent>
            </Tabs>
          </section>
        </CardContent>

        <DisplayTableFooter />
      </Card>
    </>
  );
};
