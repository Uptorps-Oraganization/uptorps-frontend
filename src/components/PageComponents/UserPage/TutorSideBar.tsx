import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem, useSidebar } from "@/components/ui/sidebar";
import { useTheme } from "@/contexthandlers/ThemeProvider";
import { tutorMenuOptions } from "@/lib/data";
import { Moon, Settings, Sun } from "@animateicons/react/lucide";
import { CircleUserRoundIcon, LineDotLeftHorizontal, UserLock } from "lucide-react";
import { useLocation } from "react-router";

export const TutorSideBar = () => {
  const currentLocation = useLocation();
  const { theme, setTheme } = useTheme();
  const { state } = useSidebar();

  return (
    <Sidebar collapsible="icon" variant="sidebar">
      <SidebarHeader className="p-2 mt-2 text-primary-foreground!">
        <SidebarMenu>
          <SidebarMenuItem>
            <section className="flex flex-row items-center p-1 space-x-2 side_element_collapse">
              <img className="w-7.5 h-7.5" src="/uptorpsbook.svg" alt="Uptorps Book" />
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
                    "https://api.dicebear.com/10.x/lorelei/svg?backgroundColor=e8f3f0&skinColor=cfe4de&hairColor=0f3d38&outlineColor=0f3d38&eyebrowsColor=0f3d38&eyesColor=0f3d38&noseColor=0f3d38&mouthColor=0f3d38&frecklesColor=0f3d38&glassesColor=0f3d38&earringsColor=0f3d38&hairAccessoriesColor=0f3d38&flip=horizontal&seed=9fshn2vk"
                  }
                  alt={"user image"}
                />
                <AvatarFallback className="rounded-lg">UI</AvatarFallback>
              </Avatar>

              <section className="flex flex-col w-[95%] my-3 space-y-2">
                <span className="flex flex-row justify-center items-center font-bold w-full text-[13px] text-center text-pretty pointer-events-auto">
                  <CircleUserRoundIcon className="mr-1 size-3" />
                  Eric Ashun
                </span>
                <span className="flex flex-row justify-center items-center w-full text-[13px] text-center text-pretty pointer-events-auto">
                  <LineDotLeftHorizontal className="mr-0.5 size-4" />
                  Tutor
                </span>
              </section>

              <Separator className="bg-primary" />
            </section>
          </div>

          {tutorMenuOptions.map((option) => (
            <SidebarMenuItem key={option.name}>
              <SidebarMenuButton
                isActive={currentLocation.pathname === option.link}
                render={<a href={option.link} />}
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
            <SidebarMenuButton>
              <Settings />
              <span className="text-pretty">Account Settings</span>
            </SidebarMenuButton>
          </SidebarMenuItem>

          <SidebarMenuItem className="pointer-events-none">
            <SidebarMenuButton>
              <UserLock />
              <span className="text-pretty">Free Account</span>
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
