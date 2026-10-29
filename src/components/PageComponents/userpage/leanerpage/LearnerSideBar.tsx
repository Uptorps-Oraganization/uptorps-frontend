import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar";
import { useTheme } from "@/contexthandlers/ThemeProvider";
import { userMenuOptions } from "@/lib/data";
import { useLearnerStore } from "@/statemanagers/userpagestate/LearnerStore";
import { Moon, Settings, Sun, UserLock } from "@animateicons/react/lucide";
import { useNavigate } from "react-router";
import { SidebarAccountHeader } from "../../sharedcomponents/SidebarAccountHeader";
import { SidebarLogOutButton } from "../../sharedcomponents/sidebarunits/SidebarLogOutButton";
import { SidebarMenuButtonWithIcon } from "../../sharedcomponents/sidebarunits/SidebarMenuButtonWithIcon";

export const LearnerSideBar = () => {
  const { theme, setTheme } = useTheme();
  const { logOutLoadingState, setlogOutLoadingState } = useLearnerStore();
  const navigate = useNavigate();

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
              <SidebarMenuButtonWithIcon name={option.name} link={option.link} icon={option.icon} />
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>

      <SidebarFooter className="text-primary-foreground!">
        <SidebarMenu>
          <SidebarMenuItem className="pointer-events-none">
            <SidebarMenuButton tooltip={"Free Account"}>
              <UserLock />
              <span className="text-pretty">Free Account</span>
            </SidebarMenuButton>
          </SidebarMenuItem>

          <SidebarMenuItem>
            <SidebarMenuButtonWithIcon name={"Account Settings"} link={"/userpage/learneractionpage/settings"} icon={Settings} />
          </SidebarMenuItem>

          <SidebarMenuItem>
            <SidebarLogOutButton loading={logOutLoadingState} clickAction={logOutLearner} />
          </SidebarMenuItem>

          <SidebarMenuItem>
            <SidebarMenuButton className="w-fit!" onClick={() => setTheme(theme == "dark" ? "light" : "dark")}>
              {theme == "dark" ? <Sun /> : <Moon />}
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
};
