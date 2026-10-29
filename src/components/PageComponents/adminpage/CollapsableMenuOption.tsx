import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { SidebarGroup, SidebarGroupContent, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarMenuSub, useSidebar } from "@/components/ui/sidebar";
import type { IconProps } from "@/typesnschemas/types/DataTypes";
import { useIconHover } from "@animateicons/react";
import { ChevronDown } from "lucide-react";

export const CollapsableMenuOption = ({ menuName, menuIcon, children }: { menuName: string; menuIcon: React.ComponentType<IconProps>; children: React.ReactNode }) => {
  const { state } = useSidebar();

  const { ref, triggerProps } = useIconHover({ trigger: "hover" });

  const FieldIcon = menuIcon;

  return (
    <Collapsible defaultOpen className="group/collapsible">
      <SidebarMenu>
        <SidebarMenuItem>
          <SidebarMenuButton tooltip={menuName} className={"h-10 [&_svg]:size-5 my-0.5"} render={<CollapsibleTrigger />} {...triggerProps}>
            <FieldIcon ref={ref} className={`${state === "collapsed" ? "size-full" : "size-fit"}`} />
            <span className={`text-[13px] text-pretty`}>{menuName}</span>
            <ChevronDown className="ml-auto transition-transform group-data-open/collapsible:rotate-180" />
          </SidebarMenuButton>
        </SidebarMenuItem>
      </SidebarMenu>

      <SidebarGroup className="p-0">
        <SidebarGroupContent>
          <CollapsibleContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuSub>{children}</SidebarMenuSub>
              </SidebarMenuItem>
            </SidebarMenu>
          </CollapsibleContent>
        </SidebarGroupContent>
      </SidebarGroup>
    </Collapsible>
  );
};
