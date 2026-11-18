import { SidebarMenuButton } from "@/components/ui/sidebar";
import { Spinner } from "@/components/ui/spinner";
import { useIconHover } from "@animateicons/react";
import { LogOut } from "@animateicons/react/lucide";
import { useState } from "react";
import { useNavigate } from "react-router";

export const SidebarLogOutButton = () => {
  const { ref, triggerProps } = useIconHover({ trigger: "hover" });

  const navigate = useNavigate();
  const [logOutLoadingState, setlogOutLoadingState] = useState(false);

  const logOutAdmin = () => {
    setlogOutLoadingState(true);

    setTimeout(() => {
      navigate("/auth/signin", { replace: true });
      setlogOutLoadingState(false);
    }, 2000);
  };

  return (
    <>
      <SidebarMenuButton tooltip={"Log Out"} className="font-bold" onClick={logOutAdmin} {...triggerProps}>
        {logOutLoadingState ? <Spinner /> : <LogOut ref={ref} />}
        <span>Log Out</span>
      </SidebarMenuButton>
    </>
  );
};
