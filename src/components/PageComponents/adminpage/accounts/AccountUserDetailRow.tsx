import { Badge } from "@/components/ui/badge";
import { TableCell, TableRow } from "@/components/ui/table";
import type { UserDetailRowType } from "@/typesnschemas/types/DataTypes";
import { UserProfileImg } from "../../sharedcomponents/UserProfileImg";
import { AccountActionMenu } from "./AccountActionMenu";

export const AccountUserDetailRow = (props: UserDetailRowType) => {
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
        <TableCell className="table_cell_centered">
          {props.activeStatus == "active" ? (
            <Badge className="badge_in_table text-green-500 bg-green-500/10 rounded-full">ACTIVE</Badge>
          ) : (
            <Badge className="badge_in_table text-destructive bg-destructive/10 rounded-full">INACTIVE</Badge>
          )}
        </TableCell>
        <TableCell className="table_cell_centered">{props.dateJoined}</TableCell>
        <TableCell className="table_cell_centered">{props.lastDateActive}</TableCell>
        <TableCell className="table_cell_centered">
          <AccountActionMenu />
        </TableCell>
      </TableRow>
    </>
  );
};
