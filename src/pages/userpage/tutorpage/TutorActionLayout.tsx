import { TutorSideBar } from "@/components/PageComponents/userpage/TutorSideBar";
import { Separator } from "@/components/ui/separator";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { tutorMenuOptions } from "@/lib/data";
import { Outlet, useLocation } from "react-router";

export const TutorActionLayout = () => {
  const currentLocation = useLocation();

  return (
    <SidebarProvider>
      <TutorSideBar />
      <SidebarInset>
        <header className="sticky top-0 bg-background flex h-fit z-50 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-fit">
          <div className="w-full justify-between flex items-center py-6 group-has-data-[collapsible=icon]/sidebar-wrapper:pt-4">
            <SidebarTrigger />
            <Separator orientation="vertical" className="mr-2 data-[orientation=vertical]:h-8" />

            {tutorMenuOptions.map(
              (option) =>
                currentLocation.pathname === option.link && (
                  <h1 key={option.name} className="text-base font-bold">
                    {option.name}
                  </h1>
                ),
            )}

            {currentLocation.pathname == "/userpage/tutoractionpage/settings" && <h1 className="text-base font-bold">Account Settings</h1>}
          </div>
        </header>

        <main>
          <Outlet />
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
};
