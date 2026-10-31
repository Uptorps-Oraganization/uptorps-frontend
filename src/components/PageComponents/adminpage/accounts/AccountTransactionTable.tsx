import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

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
          <TableRow>
            <TableCell className="table_cell_centered">REFERRAL_BONUS</TableCell>
            <TableCell className="table_cell_centered">CREDIT</TableCell>
            <TableCell className="table_cell_centered">20.00</TableCell>
            <TableCell className="table_cell_centered">
              <Badge className="badge_in_table text-green-500 bg-green-500/10">COMPLETED</Badge>
            </TableCell>
            <TableCell className="table_cell_centered">REF-1001</TableCell>
            <TableCell className="table_cell_centered">2026-11-23</TableCell>
          </TableRow>

          <TableRow>
            <TableCell className="table_cell_centered">REFERRAL_BONUS</TableCell>
            <TableCell className="table_cell_centered">CREDIT</TableCell>
            <TableCell className="table_cell_centered">20.00</TableCell>
            <TableCell className="table_cell_centered">
              <Badge className="text-[10px] font-bold text-amber-500 bg-amber-500/10 rounded-full p-1 px-2">PENDING</Badge>
            </TableCell>
            <TableCell className="table_cell_centered">REF-1001</TableCell>
            <TableCell className="table_cell_centered">2026-11-23</TableCell>
          </TableRow>

          <TableRow>
            <TableCell className="table_cell_centered">REFERRAL_BONUS</TableCell>
            <TableCell className="table_cell_centered">CREDIT</TableCell>
            <TableCell className="table_cell_centered">20.00</TableCell>
            <TableCell className="table_cell_centered">
              <span className="text-[10px] font-bold text-destructive bg-destructive/10 rounded-full p-1 px-2">FAILED</span>
            </TableCell>
            <TableCell className="table_cell_centered">REF-1001</TableCell>
            <TableCell className="table_cell_centered">2026-11-23</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </>
  );
};
