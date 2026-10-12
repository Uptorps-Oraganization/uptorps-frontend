import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { DynamicUptorpLogo } from "@/components/ui/DynamicUptorpLogo";
import { Separator } from "@/components/ui/separator";
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarMenuSubButton, SidebarMenuSubItem, useSidebar } from "@/components/ui/sidebar";
import { Spinner } from "@/components/ui/spinner";
import { useTheme } from "@/contexthandlers/ThemeProvider";
import { adminMenuOptions } from "@/lib/data";
import { useAdminStore } from "@/statemanagers/userpagestate/AdminStore";
import { LogOut, Moon, Settings, Sun } from "@animateicons/react/lucide";
import { CircleUserRoundIcon, LineDotLeftHorizontal } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router";
import { CollapsableMenuOption } from "./CollapsableMenuOption";

export const AdminSideBar = () => {
  const currentLocation = useLocation();
  const navigate = useNavigate();
  const { theme, setTheme } = useTheme();
  const { state } = useSidebar();

  const { logOutLoadingState, setlogOutLoadingState } = useAdminStore();

  const logOutAdmin = () => {
    setlogOutLoadingState();

    setTimeout(() => {
      navigate("/auth/signin", { replace: true });
      setlogOutLoadingState();
    }, 2000);
  };

  return (
    <Sidebar collapsible="icon" variant="sidebar" className="text-primary-foreground!">
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
                    "https://api.dicebear.com/10.x/micah/svg?backgroundColor=e3d2b4&baseColor=d8b48c,c19a70,a37e58&hairColor=5a3d28,6b4f35,7d6047&shirtColor=8a6a48,9c7c58&eyebrowsColor=3f2d1e&eyesColor=3f2d1e&mouthColor=3f2d1e&facialHairColor=3f2d1e&eyeShadowColor=f0e2cc&glassesColor=3f2d1e&earringColor=8a6a48&mouthVariant=frown,nervous,pucker,sad,smile,smirk&seed=4t9tlzqh"
                  }
                  alt={"user image"}
                />
                <AvatarFallback className="rounded-lg">UI</AvatarFallback>
              </Avatar>

              <section className="flex flex-col w-[95%] my-3 space-y-2">
                <span className="flex flex-row justify-center items-center font-bold w-full text-[13px] text-center text-pretty pointer-events-auto">
                  <CircleUserRoundIcon className="mr-1 size-3" />
                  Mr. Adi
                </span>
                <span className="flex flex-row justify-center items-center w-full text-[13px] text-center text-pretty pointer-events-auto">
                  <LineDotLeftHorizontal className="mr-0.5 size-4" />
                  Admin & Manager
                </span>
              </section>

              <Separator className="bg-primary" />
            </section>
          </div>

          {adminMenuOptions.map((option) => {
            if (option.subOptions) {
              return (
                <CollapsableMenuOption key={option.name} menuName={option.name} menuIcon={option.icon}>
                  {option.subOptions.map((subOption) => (
                    <SidebarMenuSubItem key={subOption.name} className="text-primary-foreground!">
                      <SidebarMenuSubButton
                        isActive={currentLocation.pathname === subOption.link}
                        render={<Link to={subOption.link} />}
                        className={`${currentLocation.pathname === subOption.link ? "font-bold text-primary" : "text-primary-foreground!"} h-8 [&_svg]:size-4`}
                      >
                        <subOption.icon className={`${state === "collapsed" ? "size-full" : "size-fit"}`} />
                        <span className={`${currentLocation.pathname === subOption.link ? "text-[15px]" : "text-[13px]"} text-pretty`}>{subOption.name}</span>
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
                    isActive={currentLocation.pathname === option.link}
                    render={<Link to={option.link} />}
                    className={`${currentLocation.pathname === option.link && "font-bold"} h-10 [&_svg]:size-5 my-0.5`}
                  >
                    <option.icon className={`${state === "collapsed" ? "size-full" : "size-fit"}`} />
                    <span className={`${currentLocation.pathname === option.link ? "text-[15px]" : "text-[13px]"} text-pretty`}>{option.name}</span>
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
            <SidebarMenuButton render={<Link to="/adminpage/settings" />}>
              <Settings />
              <span className="text-pretty">Account Settings</span>
            </SidebarMenuButton>
          </SidebarMenuItem>

          <SidebarMenuItem>
            <SidebarMenuButton className="font-bold" onClick={() => logOutAdmin()}>
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
