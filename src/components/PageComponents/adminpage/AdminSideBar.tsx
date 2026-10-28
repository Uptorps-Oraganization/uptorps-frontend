import { Button } from "@/components/ui/button";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  useSidebar,
} from "@/components/ui/sidebar";
import { Spinner } from "@/components/ui/spinner";
import { useTheme } from "@/contexthandlers/ThemeProvider";
import { adminMenuOptions } from "@/lib/data";
import { useAdminStore } from "@/statemanagers/adminpagestate/AdminStore";
import { LogOut, Moon, Settings, Sun } from "@animateicons/react/lucide";
import { Link, useLocation, useNavigate } from "react-router";
import { SidebarAccountHeader } from "../sharedcomponents/SidebarAccountHeader";
import { CollapsableMenuOption } from "./CollapsableMenuOption";

export const AdminSideBar = () => {
  const currentLocation = useLocation();
  const navigate = useNavigate();

  const { theme, setTheme } = useTheme();
  const { state, setOpenMobile } = useSidebar();

  const { logOutLoadingState, setlogOutLoadingState } = useAdminStore();

  const logOutAdmin = () => {
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
            "https://api.dicebear.com/10.x/micah/svg?backgroundColor=e3d2b4&baseColor=d8b48c,c19a70,a37e58&hairColor=5a3d28,6b4f35,7d6047&shirtColor=8a6a48,9c7c58&eyebrowsColor=3f2d1e&eyesColor=3f2d1e&mouthColor=3f2d1e&facialHairColor=3f2d1e&eyeShadowColor=f0e2cc&glassesColor=3f2d1e&earringColor=8a6a48&mouthVariant=frown,nervous,pucker,sad,smile,smirk&seed=4t9tlzqh"
          }
          accountName={"Kweku Boateng"}
          accountRole={"Admin & Manager"}
        />
      </SidebarHeader>

      <SidebarContent className="p-2 pt-0 text-primary-foreground!">
        <SidebarMenu>
          {adminMenuOptions.map((option) => {
            if (option.subOptions) {
              return (
                <CollapsableMenuOption key={option.name} menuName={option.name} menuIcon={option.icon}>
                  {option.subOptions.map((subOption) => (
                    <SidebarMenuSubItem key={subOption.name}>
                      <SidebarMenuSubButton
                        onClick={() => setOpenMobile(false)}
                        isActive={currentLocation.pathname === subOption.link}
                        render={<Link to={subOption.link} />}
                        className={`${currentLocation.pathname === subOption.link ? "font-semibold" : "text-primary-foreground!"} h-8 [&_svg]:size-4 hover:text-primary!`}
                      >
                        <subOption.icon className={`${state === "collapsed" ? "size-full" : "size-fit"}`} />
                        <span className={`${currentLocation.pathname === subOption.link ? "text-sm" : "text-[12px]"} text-pretty`}>{subOption.name}</span>
                      </SidebarMenuSubButton>
                    </SidebarMenuSubItem>
                  ))}
                </CollapsableMenuOption>
              );
            } else {
              return (
                <SidebarMenuItem key={option.name}>
                  <SidebarMenuButton
                    tooltip={option.name}
                    onClick={() => setOpenMobile(false)}
                    isActive={currentLocation.pathname === option.link}
                    render={<Link to={option.link} />}
                    className={`${currentLocation.pathname === option.link && "font-bold"} h-10 [&_svg]:size-5 my-0.5`}
                  >
                    <option.icon className={`${state === "collapsed" ? "size-full" : "size-fit"}`} />
                    <span className={`${currentLocation.pathname === option.link ? "text-[15px] font-semibold" : "text-[13px]"} text-pretty`}>{option.name}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              );
            }
          })}
        </SidebarMenu>
      </SidebarContent>

      <SidebarFooter className="text-primary-foreground!">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton tooltip={"Account Settings"} onClick={() => setOpenMobile(false)} render={<Link to="/adminpage/settings" />}>
              <Settings />
              <span className="text-pretty">Account Settings</span>
            </SidebarMenuButton>
          </SidebarMenuItem>

          <SidebarMenuItem>
            <SidebarMenuButton tooltip={"Log Out"} className="font-bold" onClick={() => logOutAdmin()}>
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
