import { Button } from "@/components/ui/button";
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem, useSidebar } from "@/components/ui/sidebar";
import { Spinner } from "@/components/ui/spinner";
import { useTheme } from "@/contexthandlers/ThemeProvider";
import { userMenuOptions } from "@/lib/data";
import { useLearnerStore } from "@/statemanagers/userpagestate/LearnerStore";
import { LogOut, Moon, Settings, Sun, UserLock } from "@animateicons/react/lucide";
import { Link, useLocation, useNavigate } from "react-router";
import { SidebarAccountHeader } from "../../sharedcomponents/SidebarAccountHeader";

export const LearnerSideBar = () => {
  const currentLocation = useLocation();
  const navigate = useNavigate();

  const { theme, setTheme } = useTheme();
  const { state, setOpenMobile } = useSidebar();

  const { logOutLoadingState, setlogOutLoadingState } = useLearnerStore();

  const logOutLearner = () => {
    setlogOutLoadingState();

    setTimeout(() => {
      navigate("/auth/signin", { replace: true });
      setlogOutLoadingState();
    }, 2000);
  };

  return (
    <Sidebar collapsible="icon" className="text-primary-foreground!">
      <SidebarHeader className="p-2 mt-2">
        <SidebarAccountHeader
          theme={theme}
          headerImgUrl={
            "https://api.dicebear.com/10.x/lorelei/svg?backgroundColor=d6bd97&skinColor=e9d3b0&hairColor=4a3526&outlineColor=4a3526&eyebrowsColor=4a3526&eyesColor=4a3526&noseColor=4a3526&mouthColor=4a3526&frecklesColor=4a3526&glassesColor=4a3526&earringsColor=4a3526&hairAccessoriesColor=4a3526&seed=62tesywc"
          }
          accountName={"Jessica Annum Doe"}
          accountRole={"Learner"}
        />
      </SidebarHeader>

      <SidebarContent className="p-2 pt-1 text-primary-foreground!">
        <SidebarMenu>
          {userMenuOptions.map((option) => (
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
            <SidebarMenuButton tooltip={"Account Settings"} onClick={() => setOpenMobile(false)} render={<Link to="/userpage/learneractionpage/settings" />}>
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
            <SidebarMenuButton tooltip={"Log Out"} className="font-bold" onClick={() => logOutLearner()}>
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
