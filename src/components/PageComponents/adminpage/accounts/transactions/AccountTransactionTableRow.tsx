import { Badge } from "@/components/ui/badge";
import { TableCell, TableRow } from "@/components/ui/table";
import { format } from "date-fns";

type AccountTransactionTableRowType = {
  type: string;
  direction: string;
  amount: string;
  status: string;
  reference: string;
  date_created: string;
};

export const AccountTransactionTableRow = (props: AccountTransactionTableRowType) => {
  const formattedDate = format(props.date_created, "do MMMM, yyyy 'at' h:mm a");

  return (
    <>
      <TableRow>
        <TableCell className="table_cell_centered">{props.type}</TableCell>
        <TableCell className="table_cell_centered">{props.direction}</TableCell>
        <TableCell className="table_cell_centered">{props.amount}</TableCell>
        <TableCell className="table_cell_centered">
          {props.status == "COMPLETED" && <Badge className="badge_in_table text-green-500 bg-green-500/10">COMPLETED</Badge>}
          {props.status == "PENDING" && <Badge className="badge_in_table text-amber-500 bg-amber-500/10">PENDING</Badge>}
          {props.status == "FAILED" && <span className="badge_in_table text-destructive bg-destructive/10">FAILED</span>}
        </TableCell>
        <TableCell className="table_cell_centered">{props.reference}</TableCell>
        <TableCell className="table_cell_centered">{formattedDate}</TableCell>
      </TableRow>
    </>
  );
};
