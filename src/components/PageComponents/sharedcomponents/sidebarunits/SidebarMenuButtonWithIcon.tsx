/* eslint-disable @typescript-eslint/no-explicit-any */
import { SidebarMenuButton, useSidebar } from "@/components/ui/sidebar";
import { useIconHover } from "@animateicons/react";

import { Link, useLocation } from "react-router";

export const SidebarMenuButtonWithIcon = (props: { name: string; link: string; icon: any }) => {
  const currentLocation = useLocation();
  const cleanPath = currentLocation.pathname.replace(/\/$/, "");

  const { state, setOpenMobile } = useSidebar();
  const { ref, triggerProps } = useIconHover({ trigger: "hover" });

  return (
    <SidebarMenuButton
      tooltip={props.name}
      onClick={() => setOpenMobile(false)}
      isActive={cleanPath === props.link}
      render={<Link to={props.link} />}
      className={`${cleanPath === props.link && "font-bold"} h-10 [&_svg]:size-5 my-0.5`}
      {...triggerProps}
    >
      <props.icon ref={ref} className={`${state === "collapsed" && "size-full"}`} />
      <span className={`${cleanPath === props.link ? "text-[15px] font-semibold" : "text-[13px]"} text-pretty`}>{props.name}</span>
    </SidebarMenuButton>
  );
};
