import { Badge } from "@/components/ui/badge";
import { TableCell, TableRow } from "@/components/ui/table";
import { formatAmountToTwoDecimalPlaces } from "@/lib/utils";
import type { PayoutTableRowType } from "@/typesnschemas/types/DataTypes";
import { UserProfileImg } from "../../../sharedcomponents/UserProfileImg";
import { PayoutActionMenu } from "./PayoutActionMenu";

export const PayoutTableRow = (props: PayoutTableRowType) => {
  return (
    <>
      <TableRow>
        <TableCell className="table_cell_centered">
          <section className="flex flex-row items-center pl-2 space-x-2">
            <UserProfileImg size="size-10" borderStyle="border-4" headerImgUrl={props.profileImgUrl} altText={"UserImg"} />
            <article className="w-fit flex flex-col text-start">
              <span className="font-semibold text-sm">{props.username}</span>
              <span>{props.email}</span>
            </article>
          </section>
        </TableCell>
        <TableCell className="table_cell_centered">
          {props.userType == "admin" && <Badge className="text-amber-600 bg-amber-600/10 text-sm p-4">Admin</Badge>}
          {props.userType == "tutor" && <Badge className="text-teal-600 bg-teal-600/10 text-sm p-4">Tutor</Badge>}
          {props.userType == "learner" && <Badge className="text-purple-600 bg-purple-600/10 text-sm p-4">Learner</Badge>}
        </TableCell>
        <TableCell className="table_cell_centered">{formatAmountToTwoDecimalPlaces(props.amount)}</TableCell>
        <TableCell className="table_cell_centered">
          {props.method == "mobile_money" && <span className="badge_in_table text-teal-500 bg-slate-500/10">MOBILE MONEY</span>}
          {props.method == "bank_transfer" && <span className="badge_in_table text-lime-500 bg-slate-500/10">BANK TRANSFER</span>}
        </TableCell>
        <TableCell className="table_cell_centered">{props.date_created}</TableCell>
        <TableCell className="table_cell_centered">
          <PayoutActionMenu />
        </TableCell>
      </TableRow>
    </>
  );
};
