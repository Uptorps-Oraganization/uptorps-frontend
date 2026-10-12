import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { CircleUserRoundIcon } from "@/components/ui/circle-user-round-icon";
import { DynamicUptorpLogo } from "@/components/ui/DynamicUptorpLogo";
import { Separator } from "@/components/ui/separator";
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem, useSidebar } from "@/components/ui/sidebar";
import { Spinner } from "@/components/ui/spinner";
import { useTheme } from "@/contexthandlers/ThemeProvider";
import { userMenuOptions } from "@/lib/data";
import { useLearnerStore } from "@/statemanagers/userpagestate/LearnerStore";
import { LogOut, Moon, Settings, Sun, UserLock } from "@animateicons/react/lucide";
import { LineDotLeftHorizontal } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router";

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
    <Sidebar collapsible="icon" variant="floating" className="text-primary-foreground!">
      <SidebarHeader className="p-2 mt-2">
        <SidebarMenu>
          <SidebarMenuItem>
            <section className="flex flex-row items-center p-1 space-x-2 side_element_collapse">
              <DynamicUptorpLogo className="size-8" theme={theme} />
              <h1 className="text-xl text-primary-foreground font-bold truncate group-data-[collapsible=icon]:hidden">Uptorps</h1>
            </section>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarContent className="pt-4 p-2 text-primary-foreground!">
        <SidebarMenu>
          <div className="py-4 truncate group-data-[collapsible=icon]:hidden">
            <section className="flex flex-col h-fit justify-center items-center pointer-events-none">
              <Avatar className="size-15 rounded-sm grayscale">
                <AvatarImage
                  className="border-4"
                  src={
                    "https://api.dicebear.com/10.x/lorelei/svg?backgroundColor=d6bd97&skinColor=e9d3b0&hairColor=4a3526&outlineColor=4a3526&eyebrowsColor=4a3526&eyesColor=4a3526&noseColor=4a3526&mouthColor=4a3526&frecklesColor=4a3526&glassesColor=4a3526&earringsColor=4a3526&hairAccessoriesColor=4a3526&seed=62tesywc"
                  }
                  alt={"user image"}
                />
                <AvatarFallback className="rounded-lg">UI</AvatarFallback>
              </Avatar>

              <section className="flex flex-col w-[95%] my-3 space-y-2">
                <span className="flex flex-row justify-center items-center font-bold w-full text-[13px] text-center text-pretty pointer-events-auto">
                  <CircleUserRoundIcon className="mr-1 size-3" />
                  Jessica Annum Doe
                </span>
                <span className="flex flex-row justify-center items-center w-full text-[13px] text-center text-pretty pointer-events-auto">
                  <LineDotLeftHorizontal className="mr-0.5 size-4" />
                  Learner
                </span>
              </section>

              <Separator className="bg-primary" />
            </section>
          </div>

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
