import { SidebarMenuButton } from "@/components/ui/sidebar";
import { Spinner } from "@/components/ui/spinner";
import { useIconHover } from "@animateicons/react";
import { LogOut } from "@animateicons/react/lucide";

export const SidebarLogOutButton = ({ loading, clickAction }: { loading: boolean; clickAction: () => void }) => {
  const { ref, triggerProps } = useIconHover({ trigger: "hover" });

  return (
    <>
      <SidebarMenuButton tooltip={"Log Out"} className="font-bold" onClick={clickAction} {...triggerProps}>
        {loading ? <Spinner /> : <LogOut ref={ref} />}
        <span>Log Out</span>
      </SidebarMenuButton>
    </>
  );
};
