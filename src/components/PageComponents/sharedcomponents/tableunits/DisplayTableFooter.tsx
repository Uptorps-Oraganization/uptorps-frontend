import { Button } from "@/components/ui/button";
import { CardFooter } from "@/components/ui/card";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { rowsPerPageOption } from "@/lib/data";
import { ChevronFirstIcon, ChevronLastIcon, ChevronLeftIcon, ChevronRightIcon } from "@animateicons/react/lucide";

export const DisplayTableFooter = () => {
  return (
    <>
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
    </>
  );
};
