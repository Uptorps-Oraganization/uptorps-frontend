/* eslint-disable @typescript-eslint/no-explicit-any */
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { PageAccountHeaderType } from "@/typesnschemas/types/DataTypes";
import { BellIcon } from "@animateicons/react/lucide";
import { UserProfileImg } from "./UserProfileImg";

export const PageAccountHeader = (props: PageAccountHeaderType) => {
  return (
    <>
      <section className="flex flex-row items-center pr-6 space-x-2">
        <div className="flex flex-row items-center rounded-full border-4 p-0.5 space-x-2">
          <p className="text-xs font-semibold px-2">{props.accountName}</p>

          <span className="bg-green-500/10 text-[11px] text-green-500 rounded-full px-2">{props.accountRole}</span>

          <UserProfileImg size="size-8" borderStyle="border-4" headerImgUrl={props.accountImgUrl} altText={"UserImg"} />
        </div>

        <Button onClick={() => props.notificationToggle(true)} size="icon" variant="ghost" className="relative">
          <BellIcon />

          <Badge variant="secondary" className="absolute -top-2 -right-1 max-h-5 max-w-5 flex items-center justify-center rounded-full text-[10px] text-green-500 font-semibold">
            8
          </Badge>
        </Button>
      </section>
    </>
  );
};
