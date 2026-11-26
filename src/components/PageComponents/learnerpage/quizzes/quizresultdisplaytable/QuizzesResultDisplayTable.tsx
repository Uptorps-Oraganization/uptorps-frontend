import { Table, TableBody, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { QuizzesResultDisplayTableRow } from "./QuizzesResultDisplayTableRow";

export const QuizzesResultDisplayTable = () => {
  return (
    <>
      <Table className="border-2">
        <TableHeader>
          <TableRow>
            <TableHead className="table_head_style">QUIZ TITLE</TableHead>
            <TableHead className="table_head_style">SCORE</TableHead>
            <TableHead className="table_head_style">TOTAL QUESTIONS</TableHead>
            <TableHead className="table_head_style">TIME TAKEN</TableHead>
            <TableHead className="table_head_style">DATE COMPLETED</TableHead>
            <TableHead className="table_head_style">REMARKS</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          <QuizzesResultDisplayTableRow
            title={"Lucky Quiz 1"}
            score={85}
            total_questions={20}
            time_taken={"25 minutes"}
            date_completed={"2025-11-03"}
            remarks={"Excellent"}
          />
          <QuizzesResultDisplayTableRow
            title={"Lucky Quiz 2"}
            score={85}
            total_questions={18}
            time_taken={"25 minutes"}
            date_completed={"2025-11-03"}
            remarks={"Excellent"}
          />
        </TableBody>
      </Table>
    </>
  );
};
