import { TableCell, TableRow } from "@/components/ui/table";
import { format } from "date-fns";

type QuizzesResultDisplayTableRowType = {
  title: string;
  score: number;
  total_questions: number;
  time_taken: string;
  date_completed: string;
  remarks: string;
};

export const QuizzesResultDisplayTableRow = (props: QuizzesResultDisplayTableRowType) => {
  const formattedDate = format(props.date_completed, "do MMMM, yyyy 'at' h:mm a");

  return (
    <>
      <TableRow>
        <TableCell className="table_cell_centered">{props.title}</TableCell>
        <TableCell className="table_cell_centered">{props.score}%</TableCell>
        <TableCell className="table_cell_centered">{props.total_questions}</TableCell>
        <TableCell className="table_cell_centered">{props.time_taken}</TableCell>
        <TableCell className="table_cell_centered">{formattedDate}</TableCell>
        <TableCell className="table_cell_centered">{props.remarks}</TableCell>
      </TableRow>
    </>
  );
};
