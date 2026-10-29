/* eslint-disable @typescript-eslint/no-explicit-any */
import { SidebarMenuSubButton, useSidebar } from "@/components/ui/sidebar";
import { useIconHover } from "@animateicons/react";

import { Link, useLocation } from "react-router";

export const SidebarSubMenuButtonWithIcon = (props: { name: string; link: string; icon: any }) => {
  const currentLocation = useLocation();
  const cleanPath = currentLocation.pathname.replace(/\/$/, "");

  const { state, setOpenMobile } = useSidebar();
  const { ref, triggerProps } = useIconHover({ trigger: "hover" });

  return (
    <SidebarMenuSubButton
      onClick={() => setOpenMobile(false)}
      isActive={cleanPath === props.link}
      render={<Link to={props.link} />}
      className={`${cleanPath === props.link ? "font-semibold" : "text-primary-foreground!"} h-8 [&_svg]:size-4 hover:text-primary!`}
      {...triggerProps}
    >
      <props.icon ref={ref} className={`${state === "collapsed" ? "size-full" : "size-fit"}`} />
      <span className={`${cleanPath === props.link ? "text-sm" : "text-[12px]"} text-pretty`}>{props.name}</span>
    </SidebarMenuSubButton>
  );
};
