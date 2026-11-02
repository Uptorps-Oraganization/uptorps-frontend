import { Table, TableBody, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { AccountTransactionTableRow } from "./AccountTransactionTableRow";

export const AccountTransactionTable = () => {
  return (
    <>
      <Table className="border-2">
        <TableHeader>
          <TableRow>
            <TableHead className="table_head_style">TYPE</TableHead>
            <TableHead className="table_head_style">DIRECTION</TableHead>
            <TableHead className="table_head_style">AMOUNT</TableHead>
            <TableHead className="table_head_style">STATUS</TableHead>
            <TableHead className="table_head_style">REFERENCE CODE</TableHead>
            <TableHead className="table_head_style">DATE CREATED</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          <AccountTransactionTableRow
            type={"REFERRAL_BONUS"}
            direction={"CREDIT"}
            amount={"20.00"}
            status={"COMPLETED"}
            reference={"REF-1001"}
            date_created={"2026-11-23"}
          />

          <AccountTransactionTableRow
            type={"REFERRAL_BONUS"}
            direction={"CREDIT"}
            amount={"20.00"}
            status={"PENDING"}
            reference={"REF-1001"}
            date_created={"2026-11-23"}
          />

          <AccountTransactionTableRow
            type={"REFERRAL_BONUS"}
            direction={"CREDIT"}
            amount={"20.00"}
            status={"FAILED"}
            reference={"REF-1001"}
            date_created={"2026-11-23"}
          />
        </TableBody>
      </Table>
    </>
  );
};
