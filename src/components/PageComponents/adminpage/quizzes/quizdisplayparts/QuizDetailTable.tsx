import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { QuizActionMenu } from "./QuizActionMenu";

export const QuizDetailTable = () => {
  return (
    <>
      <Table className="border-2">
        <TableHeader>
          <TableRow>
            <TableHead className="table_head_style">Title</TableHead>
            <TableHead className="table_head_style">Description</TableHead>
            <TableHead className="table_head_style">Cost Type</TableHead>
            <TableHead className="table_head_style">Date Created</TableHead>
            <TableHead className="table_head_style">Action</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          <TableRow>
            <TableCell className="table_cell_centered">Lucky Quiz</TableCell>
            <TableCell className="table_cell_centered">A quiz for lucky people</TableCell>
            <TableCell className="table_cell_centered">
              <span className="text-[10px] font-bold text-teal-500 bg-teal-500/10 rounded-full p-1 px-2">Free</span>
            </TableCell>
            <TableCell className="table_cell_centered">2026-10-11</TableCell>
            <TableCell className="table_cell_centered">
              <QuizActionMenu />
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell className="table_cell_centered">Lucky Quiz</TableCell>
            <TableCell className="table_cell_centered">A quiz for lucky people</TableCell>
            <TableCell className="table_cell_centered">
              <span className="text-[10px] font-bold text-green-500 bg-green-500/10 rounded-full p-1 px-2">Premium</span>
            </TableCell>
            <TableCell className="table_cell_centered">2026-10-11</TableCell>
            <TableCell className="table_cell_centered">
              <QuizActionMenu />
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </>
  );
};
