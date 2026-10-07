import { AdminSideBar } from "@/components/PageComponents/AdminPage/AdminSideBar";
import { Separator } from "@/components/ui/separator";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { adminMenuOptions } from "@/lib/data";
import { Outlet, useLocation } from "react-router";

export const AdminActionLayout = () => {
  const currentLocation = useLocation();

  return (
    <SidebarProvider>
      <AdminSideBar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger />
            <Separator orientation="vertical" className="mr-2 data-[orientation=vertical]:h-8" />

            {adminMenuOptions.map((option) =>
              option.subOptions
                ? option.subOptions.map(
                    (subOption) =>
                      currentLocation.pathname === subOption.link && (
                        <h1 key={subOption.name} className="text-base font-bold">
                          {subOption.name}
                        </h1>
                      ),
                  )
                : currentLocation.pathname === option.link && (
                    <h1 key={option.name} className="text-base font-bold">
                      {option.name}
                    </h1>
                  ),
            )}
          </div>
        </header>

        <main>
          <Outlet />
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
};
