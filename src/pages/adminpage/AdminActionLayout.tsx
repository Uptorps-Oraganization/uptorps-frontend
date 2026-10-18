import { AdminSideBar } from "@/components/PageComponents/adminpage/AdminSideBar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { adminMenuOptions } from "@/lib/data";
import { BellIcon } from "@animateicons/react/lucide";

import { Outlet, useLocation } from "react-router";

export const AdminActionLayout = () => {
  const currentLocation = useLocation();

  return (
    <SidebarProvider>
      <AdminSideBar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
          <div className="w-full justify-between flex items-center pt-6">
            <section className="flex items-center gap-2 px-4">
              <SidebarTrigger />
              <Separator orientation="vertical" className="mr-2 data-[orientation=vertical]:h-8" />

              <article id="pageHeaderSection">
                {adminMenuOptions.map((option) =>
                  option.subOptions
                    ? option.subOptions.map(
                        (subOption) =>
                          currentLocation.pathname === subOption.link && (
                            <h1 key={subOption.name} className="text-sm font-bold">
                              {subOption.name}
                            </h1>
                          ),
                      )
                    : currentLocation.pathname === option.link && (
                        <h1 key={option.name} className="text-sm font-bold">
                          {option.name}
                        </h1>
                      ),
                )}

                {currentLocation.pathname == "/adminpage/settings" && <h1 className="text-base font-bold">Account Settings</h1>}
              </article>
            </section>

            <section className="flex flex-row items-center pr-3 space-x-2">
              <div className="flex flex-row items-center rounded-full border-4 p-0.5  space-x-2">
                <p className="text-xs font-semibold px-2">Mr. Adi Ato John</p>

                <span className="bg-green-500/10 text-[11px] text-green-500 rounded-full px-2">Admin & Manager</span>

                <Avatar className="size-8">
                  <AvatarImage
                    className="border-4"
                    src={
                      "https://api.dicebear.com/10.x/micah/svg?backgroundColor=e3d2b4&baseColor=d8b48c,c19a70,a37e58&hairColor=5a3d28,6b4f35,7d6047&shirtColor=8a6a48,9c7c58&eyebrowsColor=3f2d1e&eyesColor=3f2d1e&mouthColor=3f2d1e&facialHairColor=3f2d1e&eyeShadowColor=f0e2cc&glassesColor=3f2d1e&earringColor=8a6a48&mouthVariant=frown,nervous,pucker,sad,smile,smirk&seed=4t9tlzqh"
                    }
                    alt={"user image"}
                  />
                  <AvatarFallback>UI</AvatarFallback>
                </Avatar>
              </div>

              <Button size="icon" variant="ghost" className="relative">
                <BellIcon />

                <Badge variant="secondary" className="absolute -top-1 -right-1 h-4 w-4 flex items-center justify-center rounded-full text-[10px] text-green-500 font-semibold">
                  3
                </Badge>
              </Button>
            </section>
          </div>
        </header>

        <main>
          <Outlet />
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
};
