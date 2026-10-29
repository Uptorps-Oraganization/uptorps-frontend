import { Table, TableBody, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { AccountUserDetailRow } from "./AccountUserDetailRow";

export const AccountDetailTable = () => {
  return (
    <>
      <Table className="border-2">
        <TableHeader>
          <TableRow>
            <TableHead className="table_head_style">User</TableHead>
            <TableHead className="table_head_style">Role</TableHead>
            <TableHead className="table_head_style">Status</TableHead>
            <TableHead className="table_head_style">Date Joined</TableHead>
            <TableHead className="table_head_style">Last Active Date</TableHead>
            <TableHead className="table_head_style">Action</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          <AccountUserDetailRow
            username={"Kweku Boateng"}
            email={"kwekuaboagye@gmail.com"}
            profileImgUrl={
              "https://api.dicebear.com/10.x/micah/svg?backgroundColor=e3d2b4&baseColor=d8b48c,c19a70,a37e58&hairColor=5a3d28,6b4f35,7d6047&shirtColor=8a6a48,9c7c58&eyebrowsColor=3f2d1e&eyesColor=3f2d1e&mouthColor=3f2d1e&facialHairColor=3f2d1e&eyeShadowColor=f0e2cc&glassesColor=3f2d1e&earringColor=8a6a48&mouthVariant=frown,nervous,pucker,sad,smile,smirk&seed=4t9tlzqh"
            }
            userType={"admin"}
            activeStatus={"active"}
            dateJoined={"2018-11-29"}
            lastDateActive={"2018-11-29"}
          />

          <AccountUserDetailRow
            username={"Jessica Annum Doe"}
            email={"jessicannum@gmail.com"}
            profileImgUrl={
              "https://api.dicebear.com/10.x/lorelei/svg?backgroundColor=d6bd97&skinColor=e9d3b0&hairColor=4a3526&outlineColor=4a3526&eyebrowsColor=4a3526&eyesColor=4a3526&noseColor=4a3526&mouthColor=4a3526&frecklesColor=4a3526&glassesColor=4a3526&earringsColor=4a3526&hairAccessoriesColor=4a3526&seed=62tesywc"
            }
            userType={"learner"}
            activeStatus={"active"}
            dateJoined={"2018-11-29"}
            lastDateActive={"2018-11-29"}
          />

          <AccountUserDetailRow
            username={"Eric Ashun"}
            email={"ericashun@gmail.com"}
            profileImgUrl={
              "https://api.dicebear.com/10.x/lorelei/svg?backgroundColor=e8f3f0&skinColor=cfe4de&hairColor=0f3d38&outlineColor=0f3d38&eyebrowsColor=0f3d38&eyesColor=0f3d38&noseColor=0f3d38&mouthColor=0f3d38&frecklesColor=0f3d38&glassesColor=0f3d38&earringsColor=0f3d38&hairAccessoriesColor=0f3d38&flip=horizontal&seed=9fshn2vk"
            }
            userType={"tutor"}
            activeStatus={"inactive"}
            dateJoined={"2018-11-29"}
            lastDateActive={"2018-11-29"}
          />
        </TableBody>
      </Table>
    </>
  );
};
