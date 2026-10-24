import { NotificationSheet } from "@/components/PageComponents/sharedcomponents/NotificationSheet";
import { PageAccountHeader } from "@/components/PageComponents/sharedcomponents/PageAccountHeader";
import { TutorSideBar } from "@/components/PageComponents/userpage/TutorSideBar";
import { Separator } from "@/components/ui/separator";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { tutorMenuOptions } from "@/lib/data";
import { useState } from "react";
import { Outlet, useLocation } from "react-router";

export const TutorActionLayout = () => {
  const currentLocation = useLocation();
  const [isNotificationSheetOpen, setIsNotificationSheetOpen] = useState<boolean>(false);

  return (
    <SidebarProvider className="select-none">
      <TutorSideBar />
      <SidebarInset>
        <header className="sticky top-0 bg-background flex h-fit z-50 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-fit">
          <div className="w-full justify-between flex items-center py-5 group-has-data-[collapsible=icon]/sidebar-wrapper:pt-4">
            <section className="flex items-center gap-2 px-4">
              <SidebarTrigger />
              <Separator orientation="vertical" className="mr-2 data-[orientation=vertical]:h-8" />

              <article id="pageHeaderSection">
                {tutorMenuOptions.map(
                  (option) =>
                    currentLocation.pathname === option.link && (
                      <h1 key={option.name} className="text-sm font-bold">
                        {option.name}
                      </h1>
                    ),
                )}

                {currentLocation.pathname == "/userpage/tutoractionpage/settings" && <h1 className="text-sm font-bold">Account Settings</h1>}
              </article>
            </section>

            <PageAccountHeader
              accountImgUrl={
                "https://api.dicebear.com/10.x/lorelei/svg?backgroundColor=e8f3f0&skinColor=cfe4de&hairColor=0f3d38&outlineColor=0f3d38&eyebrowsColor=0f3d38&eyesColor=0f3d38&noseColor=0f3d38&mouthColor=0f3d38&frecklesColor=0f3d38&glassesColor=0f3d38&earringsColor=0f3d38&hairAccessoriesColor=0f3d38&flip=horizontal&seed=9fshn2vk"
              }
              accountName={"Eric Ashun"}
              accountRole={"Tutor"}
              notificationToggle={setIsNotificationSheetOpen}
            />
          </div>
        </header>

        <Outlet />

        <NotificationSheet isSheetOpen={isNotificationSheetOpen} setIsSheetOpen={setIsNotificationSheetOpen} />
      </SidebarInset>
    </SidebarProvider>
  );
};
