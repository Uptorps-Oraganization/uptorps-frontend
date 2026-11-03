import { Table, TableBody, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { PayoutApprovalTableRow } from "./PayoutApprovalTableRow";

export const PayoutApprovalDetailTable = () => {
  return (
    <>
      <Table className="border-2">
        <TableHeader>
          <TableRow>
            <TableHead className="table_head_style">USER</TableHead>
            <TableHead className="table_head_style">ROLE</TableHead>
            <TableHead className="table_head_style">AMOUNT (GH₵)</TableHead>
            <TableHead className="table_head_style">METHOD</TableHead>
            <TableHead className="table_head_style">DATE APPROVED</TableHead>
            <TableHead className="table_head_style">STATUS</TableHead>
            <TableHead className="table_head_style">ACTION</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          <PayoutApprovalTableRow
            profileImgUrl={
              "https://api.dicebear.com/10.x/micah/svg?backgroundColor=e3d2b4&baseColor=d8b48c,c19a70,a37e58&hairColor=5a3d28,6b4f35,7d6047&shirtColor=8a6a48,9c7c58&eyebrowsColor=3f2d1e&eyesColor=3f2d1e&mouthColor=3f2d1e&facialHairColor=3f2d1e&eyeShadowColor=f0e2cc&glassesColor=3f2d1e&earringColor=8a6a48&mouthVariant=frown,nervous,pucker,sad,smile,smirk&seed=4t9tlzqh"
            }
            username={"Kweku Boateng"}
            email={"kwekuaboagye@gmail.com"}
            userType={"learner"}
            amount={300}
            method={"mobile_money"}
            date_approved={"2026-11-23"}
            payout_status={"success"}
          />

          <PayoutApprovalTableRow
            profileImgUrl={
              "https://api.dicebear.com/10.x/lorelei/svg?backgroundColor=e8f3f0&skinColor=cfe4de&hairColor=0f3d38&outlineColor=0f3d38&eyebrowsColor=0f3d38&eyesColor=0f3d38&noseColor=0f3d38&mouthColor=0f3d38&frecklesColor=0f3d38&glassesColor=0f3d38&earringsColor=0f3d38&hairAccessoriesColor=0f3d38&flip=horizontal&seed=9fshn2vk"
            }
            username={"Eric Ashun"}
            email={"ericashun@gmail.com"}
            userType={"tutor"}
            amount={100}
            method={"bank_transfer"}
            date_approved={"2026-11-23"}
            payout_status={"failure"}
          />
        </TableBody>
      </Table>
    </>
  );
};
