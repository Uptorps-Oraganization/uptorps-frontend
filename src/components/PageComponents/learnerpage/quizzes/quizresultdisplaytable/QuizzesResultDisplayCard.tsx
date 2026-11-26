import { Card, CardContent, CardDescription, CardHeader } from "@/components/ui/card";
import { InputGroup, InputGroupAddon, InputGroupInput } from "@/components/ui/input-group";
import { SearchIcon } from "lucide-react";
import { DisplayTableFooter } from "../../../sharedcomponents/tableunits/DisplayTableFooter";
import { QuizzesResultDisplayTable } from "./QuizzesResultDisplayTable";

export const QuizzesResultDisplayCard = () => {
  return (
    <>
      <Card>
        <CardHeader className="border-b">
          <p className="text-sm font-semibold">Details of your completed quizzes</p>
        </CardHeader>

        <CardDescription className="px-4">
          <section className="w-6/12 flex flex-row justify-between items-center gap-4 h-8">
            <InputGroup className="h-full">
              <InputGroupAddon align="inline-start">
                <SearchIcon className="size-4 cursor-auto" />
              </InputGroupAddon>

              <InputGroupInput type="text" className="text-[14px]!" placeholder="Search completed quizzes by date......." />
            </InputGroup>
          </section>
        </CardDescription>

        <CardContent>
          <QuizzesResultDisplayTable />
        </CardContent>

        <DisplayTableFooter />
      </Card>
    </>
  );
};
