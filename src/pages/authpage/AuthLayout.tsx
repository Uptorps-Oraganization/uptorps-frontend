import { Button } from "@/components/ui/button";
import { Toaster } from "@/components/ui/sonner";
import { useTheme } from "@/contexthandlers/ThemeProvider";
import { Moon, Sun } from "@animateicons/react/lucide";
import { Copyright } from "lucide-react";
import { Outlet } from "react-router";

export const AuthLayout = () => {
  const { theme, setTheme } = useTheme();

  return (
    <>
      <div className="grid grid-cols-2 w-dvw h-dvh text-primary-foreground">
        <section
          className={`relative flex flex-col justify-center items-center space-y-4 bg-green-600 ${theme == "dark" ? "bg-[url('@/assets/noisepatterndark.svg')]" : "bg-[url('@/assets/noisepatternlight.svg')]"}`}
        >
          <article className="absolute top-0 left-0">
            <Button onClick={() => setTheme(theme == "dark" ? "light" : "dark")} className="text-primary" size="icon-lg" variant="ghost">
              {theme == "dark" ? <Sun /> : <Moon />}
            </Button>
          </article>

          <div className="flex flex-row items-center p-1 space-x-3">
            <img className="w-15 h-15" src="/uptorpsbook.svg" alt="Uptorps Book" />
            <h1 className="text-3xl font-bold">Uptorps</h1>
          </div>

          <p className="text-xl">Welcome To Our Authentication Page</p>

          <div className="absolute bottom-0 flex justify-center items-center py-8">
            <Copyright className="mx-4" />
            <span className="text-[14px]">2026 UPTORPS. All rights reserved.</span>
          </div>
        </section>

        <Outlet />
      </div>

      <Toaster position="bottom-right" />
    </>
  );
};
