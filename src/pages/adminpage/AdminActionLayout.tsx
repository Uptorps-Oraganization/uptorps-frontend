import { AdminSideBar } from "@/components/PageComponents/adminpage/AdminSideBar";
import { AdminNotificationSheet } from "@/components/PageComponents/adminpage/dashboardcomponents/AdminNotificationSheet";
import { PageAccountHeader } from "@/components/PageComponents/sharedcomponents/PageAccountHeader";
import { Separator } from "@/components/ui/separator";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { adminMenuOptions } from "@/lib/data";
import { useState } from "react";
import { Outlet, useLocation } from "react-router";

export const AdminActionLayout = () => {
  const currentLocation = useLocation();
  const [isNotificationSheetOpen, setIsNotificationSheetOpen] = useState<boolean>(false);

  return (
    <SidebarProvider>
      <AdminSideBar />
      <SidebarInset className="relative">
        <header className="sticky top-0 bg-background flex h-fit z-50 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-fit">
          <div className="w-full justify-between flex items-center py-5 group-has-data-[collapsible=icon]/sidebar-wrapper:pt-4">
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

            <PageAccountHeader
              accountImgUrl={
                "https://api.dicebear.com/10.x/micah/svg?backgroundColor=e3d2b4&baseColor=d8b48c,c19a70,a37e58&hairColor=5a3d28,6b4f35,7d6047&shirtColor=8a6a48,9c7c58&eyebrowsColor=3f2d1e&eyesColor=3f2d1e&mouthColor=3f2d1e&facialHairColor=3f2d1e&eyeShadowColor=f0e2cc&glassesColor=3f2d1e&earringColor=8a6a48&mouthVariant=frown,nervous,pucker,sad,smile,smirk&seed=4t9tlzqh"
              }
              accountName={"Mr. Adi"}
              accountRole={"Admin & Manager"}
              notificationToggle={setIsNotificationSheetOpen}
            />
          </div>
        </header>

        <main>
          <Outlet />
        </main>

        <AdminNotificationSheet isSheetOpen={isNotificationSheetOpen} setIsSheetOpen={setIsNotificationSheetOpen} />
      </SidebarInset>
    </SidebarProvider>
  );
};
