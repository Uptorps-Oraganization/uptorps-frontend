import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { InputGroup, InputGroupAddon, InputGroupInput } from "@/components/ui/input-group";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { rowsPerPageOption } from "@/lib/data";
import { ChevronFirstIcon, ChevronLastIcon, ChevronLeftIcon, ChevronRightIcon, SearchIcon } from "@animateicons/react/lucide";
import { useState } from "react";
import { AccountTransactionTable } from "./AccountTransactionTable";

export const AccountTransactionDisplayCard = () => {
  const [tabValue, setTabValue] = useState("all");

  return (
    <>
      <Card>
        <CardHeader>
          <section className="flex flex-row justify-between items-center gap-4 h-10">
            <InputGroup className="h-full">
              <InputGroupAddon align="inline-start">
                <SearchIcon className="size-4 cursor-auto" />
              </InputGroupAddon>

              <InputGroupInput type="text" className="text-[14px]!" placeholder="Search Transaction By Type or Reference Code........" />
            </InputGroup>
          </section>
        </CardHeader>

        <CardContent>
          <section className="pt-3">
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

              <TabsContent value={tabValue} className="pt-4">
                <AccountTransactionTable />
              </TabsContent>
            </Tabs>
          </section>
        </CardContent>

        <CardFooter>
          <section className="w-full flex flex-row justify-between items-center">
            <span>Showing 1 to 5 of 8 entries</span>

            <div className="flex flex-row space-x-4">
              <section className="flex flex-row justify-center items-center space-x-3">
                <p>Rows per page</p>

                <article className="flex flex-row space-x-1">
                  <Select items={rowsPerPageOption} defaultValue={rowsPerPageOption[0]} onValueChange={(value) => console.log(value)}>
                    <SelectTrigger className="w-fit min-w-2/12 h-full!">
                      <SelectValue className="text-[13px]! font-semibold" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Accounts</SelectLabel>
                        {rowsPerPageOption.map((item) => (
                          <SelectItem key={item.value} value={item.value}>
                            {item.label}
                          </SelectItem>
                        ))}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </article>
              </section>

              <section className="flex flex-row justify-center items-center space-x-3">
                <p>Page 1 of 1</p>

                <article className="flex flex-row space-x-1">
                  <Button size="icon" variant="ghost" className="border border-primary">
                    <ChevronFirstIcon />
                  </Button>
                  <Button size="icon" variant="ghost" className="border border-primary">
                    <ChevronLeftIcon />
                  </Button>
                  <Button size="icon" variant="ghost" className="border border-primary">
                    <ChevronRightIcon />
                  </Button>
                  <Button size="icon" variant="ghost" className="border border-primary">
                    <ChevronLastIcon />
                  </Button>
                </article>
              </section>
            </div>
          </section>
        </CardFooter>
      </Card>
    </>
  );
};
