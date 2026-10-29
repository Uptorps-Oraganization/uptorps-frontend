import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarMenuSubItem } from "@/components/ui/sidebar";
import { useTheme } from "@/contexthandlers/ThemeProvider";
import { adminMenuOptions } from "@/lib/data";
import { useAdminStore } from "@/statemanagers/adminpagestate/AdminStore";
import { Moon, Settings, Sun } from "@animateicons/react/lucide";
import { useNavigate } from "react-router";
import { SidebarAccountHeader } from "../sharedcomponents/SidebarAccountHeader";
import { SidebarLogOutButton } from "../sharedcomponents/sidebarunits/SidebarLogOutButton";
import { SidebarMenuButtonWithIcon } from "../sharedcomponents/sidebarunits/SidebarMenuButtonWithIcon";
import { SidebarSubMenuButtonWithIcon } from "../sharedcomponents/sidebarunits/SidebarSubMenuButtonWithIcon";
import { CollapsableMenuOption } from "./CollapsableMenuOption";

export const AdminSideBar = () => {
  const { theme, setTheme } = useTheme();
  const { logOutLoadingState, setlogOutLoadingState } = useAdminStore();
  const navigate = useNavigate();

  const logOutAdmin = () => {
    setlogOutLoadingState();

    setTimeout(() => {
      navigate("/auth/signin", { replace: true });
      setlogOutLoadingState();
    }, 2000);
  };

  return (
    <Sidebar collapsible="icon">
      <SidebarHeader className="p-2 mt-2">
        <SidebarAccountHeader
          theme={theme}
          headerImgUrl={
            "https://api.dicebear.com/10.x/micah/svg?backgroundColor=e3d2b4&baseColor=d8b48c,c19a70,a37e58&hairColor=5a3d28,6b4f35,7d6047&shirtColor=8a6a48,9c7c58&eyebrowsColor=3f2d1e&eyesColor=3f2d1e&mouthColor=3f2d1e&facialHairColor=3f2d1e&eyeShadowColor=f0e2cc&glassesColor=3f2d1e&earringColor=8a6a48&mouthVariant=frown,nervous,pucker,sad,smile,smirk&seed=4t9tlzqh"
          }
          accountName={"Kweku Boateng"}
          accountRole={"Admin & Manager"}
        />
      </SidebarHeader>

      <SidebarContent className="p-2 pt-0">
        <SidebarMenu>
          {adminMenuOptions.map((option) => {
            if (option.subOptions) {
              return (
                <CollapsableMenuOption key={option.name} menuName={option.name} menuIcon={option.icon}>
                  {option.subOptions.map((subOption) => (
                    <SidebarMenuSubItem key={subOption.name}>
                      <SidebarSubMenuButtonWithIcon name={subOption.name} link={subOption.link} icon={subOption.icon} />
                    </SidebarMenuSubItem>
                  ))}
                </CollapsableMenuOption>
              );
            } else {
              return (
                <SidebarMenuItem key={option.name}>
                  <SidebarMenuButtonWithIcon name={option.name} link={option.link} icon={option.icon} />
                </SidebarMenuItem>
              );
            }
          })}
        </SidebarMenu>
      </SidebarContent>

      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButtonWithIcon name={"Account Settings"} link={"/adminpage/settings"} icon={Settings} />
          </SidebarMenuItem>

          <SidebarMenuItem>
            <SidebarLogOutButton loading={logOutLoadingState} clickAction={logOutAdmin} />
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
