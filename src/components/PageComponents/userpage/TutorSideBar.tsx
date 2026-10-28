import { Button } from "@/components/ui/button";
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem, useSidebar } from "@/components/ui/sidebar";
import { Spinner } from "@/components/ui/spinner";
import { useTheme } from "@/contexthandlers/ThemeProvider";
import { tutorMenuOptions } from "@/lib/data";
import { useTutorStore } from "@/statemanagers/userpagestate/TutorStore";
import { LogOut, Moon, Settings, Sun } from "@animateicons/react/lucide";
import { UserLock } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router";
import { SidebarAccountHeader } from "../sharedcomponents/SidebarAccountHeader";

export const TutorSideBar = () => {
  const currentLocation = useLocation();
  const navigate = useNavigate();

  const { theme, setTheme } = useTheme();
  const { state, setOpenMobile } = useSidebar();

  const { logOutLoadingState, setlogOutLoadingState } = useTutorStore();

  const logOutTutor = () => {
    setlogOutLoadingState();

    setTimeout(() => {
      navigate("/auth/signin", { replace: true });
      setlogOutLoadingState();
    }, 2000);
  };

  return (
    <Sidebar collapsible="icon" className="text-primary-foreground!">
      <SidebarHeader className="p-2 mt-2 text-primary-foreground!">
        <SidebarAccountHeader
          theme={theme}
          headerImgUrl={
            "https://api.dicebear.com/10.x/lorelei/svg?backgroundColor=e8f3f0&skinColor=cfe4de&hairColor=0f3d38&outlineColor=0f3d38&eyebrowsColor=0f3d38&eyesColor=0f3d38&noseColor=0f3d38&mouthColor=0f3d38&frecklesColor=0f3d38&glassesColor=0f3d38&earringsColor=0f3d38&hairAccessoriesColor=0f3d38&flip=horizontal&seed=9fshn2vk"
          }
          accountName={"Eric Ashun"}
          accountRole={"Tutor"}
        />
      </SidebarHeader>

      <SidebarContent className="p-2 pt-1 text-primary-foreground!">
        <SidebarMenu>
          {tutorMenuOptions.map((option) => (
            <SidebarMenuItem key={option.name}>
              <SidebarMenuButton
                tooltip={option.name}
                onClick={() => setOpenMobile(false)}
                isActive={currentLocation.pathname === option.link}
                render={<Link to={option.link} />}
                className={`${currentLocation.pathname === option.link && "font-bold"} h-10 [&_svg]:size-5 my-0.5`}
              >
                <option.icon className={`${state === "collapsed" ? "size-full" : "size-fit"}`} />
                <span className={`${currentLocation.pathname === option.link ? "text-[15px]" : "text-[13px]"} text-pretty`}>{option.name}</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>

      <SidebarFooter className="text-primary-foreground!">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton tooltip={"Account Settings"} onClick={() => setOpenMobile(false)} render={<Link to="/userpage/tutoractionpage/settings" />}>
              <Settings />
              <span className="text-pretty">Account Settings</span>
            </SidebarMenuButton>
          </SidebarMenuItem>

          <SidebarMenuItem className="pointer-events-none">
            <SidebarMenuButton tooltip={"Free Account"}>
              <UserLock />
              <span className="text-pretty">Free Account</span>
            </SidebarMenuButton>
          </SidebarMenuItem>

          <SidebarMenuItem>
            <SidebarMenuButton tooltip={"Log Out"} className="font-bold" onClick={() => logOutTutor()}>
              {logOutLoadingState ? <Spinner /> : <LogOut />}
              <span className="text-pretty">Log Out</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>

        <Button onClick={() => setTheme(theme == "dark" ? "light" : "dark")} size="icon-sm" variant="ghost">
          {theme == "dark" ? <Sun /> : <Moon />}
        </Button>
      </SidebarFooter>
    </Sidebar>
  );
};
