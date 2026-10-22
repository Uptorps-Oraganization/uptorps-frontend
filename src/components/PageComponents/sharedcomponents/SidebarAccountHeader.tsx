import { Separator } from "@/components/ui/separator";
import { SidebarMenu, SidebarMenuItem } from "@/components/ui/sidebar";
import type { SidebarAccountHeaderType } from "@/typesnschemas/types/DataTypes";
import { CircleUserRoundIcon, LineDotLeftHorizontal } from "lucide-react";
import { DynamicUptorpLogo } from "./DynamicUptorpLogo";
import { UserProfileImg } from "./UserProfileImg";

export const SidebarAccountHeader = (props: SidebarAccountHeaderType) => {
  return (
    <>
      <SidebarMenu>
        <SidebarMenuItem>
          <section className="flex flex-row items-center p-0 space-x-2 side_element_collapse">
            <DynamicUptorpLogo className="size-6" theme={props.theme} />
            <h1 className="text-[16px] text-primary-foreground font-bold truncate group-data-[collapsible=icon]:hidden">Uptorps</h1>
          </section>
        </SidebarMenuItem>

        <div className="flex flex-col h-fit justify-center items-center pointer-events-none pt-2 truncate group-data-[collapsible=icon]:hidden">
          <UserProfileImg size="size-15" borderStyle="border-4" headerImgUrl={props.headerImgUrl}  altText={"UserImg"}/>

          <section className="flex flex-col w-[95%] my-3 space-y-2">
            <span className="flex flex-row justify-center items-center font-bold w-full text-[13px] text-center text-pretty pointer-events-auto">
              <CircleUserRoundIcon className="mr-1 size-3" />
              {props.accountName}
            </span>

            <span className="flex flex-row justify-center items-center w-full text-[13px] text-center text-pretty pointer-events-auto">
              <LineDotLeftHorizontal className="mr-0.5 size-4" />
              {props.accountRole}
            </span>
          </section>

          <Separator className="bg-primary" />
        </div>
      </SidebarMenu>
    </>
  );
};
