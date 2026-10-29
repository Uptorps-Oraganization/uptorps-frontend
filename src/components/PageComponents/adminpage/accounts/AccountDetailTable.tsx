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
            profileImgUrl={
              "https://api.dicebear.com/10.x/micah/svg?backgroundColor=e3d2b4&baseColor=d8b48c,c19a70,a37e58&hairColor=5a3d28,6b4f35,7d6047&shirtColor=8a6a48,9c7c58&eyebrowsColor=3f2d1e&eyesColor=3f2d1e&mouthColor=3f2d1e&facialHairColor=3f2d1e&eyeShadowColor=f0e2cc&glassesColor=3f2d1e&earringColor=8a6a48&mouthVariant=frown,nervous,pucker,sad,smile,smirk&seed=4t9tlzqh"
            }
            userType={"admin"}
            activeStatus={"active"}
            dateJoined={"2018-11-29"}
            lastDateActive={"2018-11-29"}
          />

          <AccountUserDetailRow
            profileImgUrl={
              "https://api.dicebear.com/10.x/avataaars/svg?backgroundColor=e6ecef&skinColor=9ec9e8&hairColor=1d3d52&facialHairColor=1d3d52&clothesColor=37718e&hatColor=1d3d52&accessoriesColor=1d3d52&eyesVariant=closed,default,eyeRoll,happy,side,squint,surprised,wink,winkWacky,xDizzy&mouthVariant=default,disbelief,eating,grimace,sad,serious,twinkle&topVariant=bigHair,bob,bun,curly,curvy,dreads,dreads01,dreads02,frizzle,fro,hat,hijab,longButNotTooLong,miaWallace,shaggy,shaggyMullet,shavedSides,shortCurly,shortFlat,shortRound,shortWaved,sides,straight01,straight02,straightAndStrand,theCaesar,theCaesarAndSidePart,turban,winterHat02,winterHat03,winterHat04,winterHat1&seed=ahqioptu"
            }
            userType={"learner"}
            activeStatus={"active"}
            dateJoined={"2018-11-29"}
            lastDateActive={"2018-11-29"}
          />

          <AccountUserDetailRow
            profileImgUrl={"https://api.dicebear.com/10.x/avataaars/svg?backgroundColor=b6e3f4,c0aede,d1d4f9,ffd5dc,ffdfbf,d9f2d9&seed=esu5r619"}
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
