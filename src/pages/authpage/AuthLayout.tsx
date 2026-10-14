import { DynamicUptorpLogo } from "@/components/PageComponents/sharedcomponents/DynamicUptorpLogo";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/contexthandlers/ThemeProvider";
import { Moon, Sun } from "@animateicons/react/lucide";
import { Copyright } from "lucide-react";
import { Outlet } from "react-router";

export const AuthLayout = () => {
  const { theme, setTheme } = useTheme();

  return (
    <>
      <div className="grid lg:grid-cols-2 w-dvw h-dvh text-primary-foreground">
        <section
          className={`relative hidden lg:flex flex-col justify-center items-center space-y-4 bg-green-600 ${theme == "dark" ? "bg-[url('@/assets/noisepatterndark.svg')]" : "bg-[url('@/assets/noisepatternlight.svg')]"}`}
        >
          <article className="absolute top-0 left-0">
            <Button onClick={() => setTheme(theme == "dark" ? "light" : "dark")} className="text-primary" size="icon-lg" variant="ghost">
              {theme == "dark" ? <Sun /> : <Moon />}
            </Button>
          </article>

          <div className="flex flex-row items-center p-1 space-x-3">
            <DynamicUptorpLogo className="size-15" theme={theme} />
            <h1 className="text-xl md:text-2xl lg:text-3xl font-bold">Uptorps</h1>
          </div>

          <p className="text-xl">Welcome To Our Authentication Page</p>

          <div className="absolute bottom-0 flex justify-center items-center py-8 text-primary-foreground">
            <Copyright className="mr-2 size-4 md:size-6" />
            <span className="text-sm">2026 UPTORPS. All rights reserved.</span>
          </div>
        </section>

        <Outlet />
      </div>
    </>
  );
};
