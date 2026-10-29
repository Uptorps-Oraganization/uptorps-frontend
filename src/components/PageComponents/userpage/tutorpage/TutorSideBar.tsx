import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar";
import { useTheme } from "@/contexthandlers/ThemeProvider";
import { tutorMenuOptions } from "@/lib/data";
import { useTutorStore } from "@/statemanagers/userpagestate/TutorStore";
import { Moon, Settings, Sun } from "@animateicons/react/lucide";
import { UserLock } from "lucide-react";
import { useNavigate } from "react-router";
import { SidebarAccountHeader } from "../../sharedcomponents/SidebarAccountHeader";
import { SidebarLogOutButton } from "../../sharedcomponents/sidebarunits/SidebarLogOutButton";
import { SidebarMenuButtonWithIcon } from "../../sharedcomponents/sidebarunits/SidebarMenuButtonWithIcon";

export const TutorSideBar = () => {
  const { theme, setTheme } = useTheme();
  const { logOutLoadingState, setlogOutLoadingState } = useTutorStore();
  const navigate = useNavigate();

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
            <SidebarMenuButtonWithIcon name={"Account Settings"} link={"/userpage/tutoractionpage/settings"} icon={Settings} />
          </SidebarMenuItem>

          <SidebarMenuItem>
            <SidebarLogOutButton loading={logOutLoadingState} clickAction={logOutTutor} />
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
