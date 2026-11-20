import { TableCell, TableRow } from "@/components/ui/table";
import { formatAmountToTwoDecimalPlaces } from "@/lib/utils";
import { format } from "date-fns";

type PayoutRequestTableRowType = {
  date_created: string;
  amount: number;
  method: "mobile_money" | "bank_transfer";
};

export const PayoutRequestTableRow = (props: PayoutRequestTableRowType) => {
  const formattedDate = format(props.date_created, "do MMMM, yyyy 'at' h:mm a");

  return (
    <>
      <TableRow>
        <TableCell className="table_cell_centered">{formattedDate}</TableCell>
        <TableCell className="table_cell_centered">{formatAmountToTwoDecimalPlaces(props.amount)}</TableCell>
        <TableCell className="table_cell_centered">
          {props.method == "mobile_money" && <span className="badge_in_table text-teal-500 bg-slate-500/10">MOBILE MONEY</span>}
          {props.method == "bank_transfer" && <span className="badge_in_table text-lime-500 bg-slate-500/10">BANK TRANSFER</span>}
        </TableCell>
      </TableRow>
    </>
  );
};
