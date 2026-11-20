import { Table, TableBody, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { PayoutRequestTableRow } from "./PayoutRequestTableRow";

export const PayoutRequestDisplayTable = () => {
  return (
    <>
      <Table className="border-2">
        <TableHeader>
          <TableRow>
            <TableHead className="table_head_style">DATE REQUESTED</TableHead>
            <TableHead className="table_head_style">AMOUNT (GH₵)</TableHead>
            <TableHead className="table_head_style">METHOD</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          <PayoutRequestTableRow date_created={"2025-01-14T10:20:00Z"} amount={100} method={"mobile_money"} />
          <PayoutRequestTableRow date_created={"2025-01-14T10:20:00Z"} amount={50} method={"bank_transfer"} />
          <PayoutRequestTableRow date_created={"2025-01-14T10:20:00Z"} amount={200} method={"mobile_money"} />
        </TableBody>
      </Table>
    </>
  );
};
