import { Table, TableBody, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { QuizDetailTableRow } from "./QuizDetailTableRow";

export const QuizDetailTable = () => {
  return (
    <>
      <Table className="border-2">
        <TableHeader>
          <TableRow>
            <TableHead className="table_head_style">TITLE</TableHead>
            <TableHead className="table_head_style">DESCRIPTION</TableHead>
            <TableHead className="table_head_style">COST TYPE</TableHead>
            <TableHead className="table_head_style">DATE CREATED</TableHead>
            <TableHead className="table_head_style">ACTION</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          <QuizDetailTableRow title={"Lucky Quiz 1"} description={"A quiz for lucky people 1"} is_paid={false} date_created={"2026-10-11"} />

          <QuizDetailTableRow title={"Lucky Quiz 2"} description={"A quiz for lucky people 2"} is_paid={true} date_created={"2026-10-11"} />
        </TableBody>
      </Table>
    </>
  );
};
