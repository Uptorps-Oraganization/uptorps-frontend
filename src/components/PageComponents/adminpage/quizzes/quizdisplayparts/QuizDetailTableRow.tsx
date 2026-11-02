import { TableCell, TableRow } from "@/components/ui/table";
import type { QuizDetailTableRowType } from "@/typesnschemas/types/DataTypes";
import { QuizActionMenu } from "./QuizActionMenu";

export const QuizDetailTableRow = (props: QuizDetailTableRowType) => {
  return (
    <>
      <TableRow>
        <TableCell className="table_cell_centered">{props.title}</TableCell>
        <TableCell className="table_cell_centered">{props.description}</TableCell>
        <TableCell className="table_cell_centered">
          {!props.is_paid && <span className="badge_in_table text-teal-500 bg-teal-500/10">FREE</span>}
          {props.is_paid && <span className="badge_in_table text-green-500 bg-green-500/10">PAID</span>}
        </TableCell>
        <TableCell className="table_cell_centered">{props.date_created}</TableCell>
        <TableCell className="table_cell_centered">
          <QuizActionMenu />
        </TableCell>
      </TableRow>
    </>
  );
};
