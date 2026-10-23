import { DynamicUptorpLogo } from "@/components/PageComponents/sharedcomponents/DynamicUptorpLogo";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/contexthandlers/ThemeProvider";
import { Moon, Sun } from "@animateicons/react/lucide";
import { Link } from "react-router";

export const AuthMobileHeader = ({ welcome = true }) => {
  const { theme, setTheme } = useTheme();

  return (
    <>
      <article className="lg:hidden absolute top-0 left-0 p-2">
        <Button onClick={() => setTheme(theme == "dark" ? "light" : "dark")} className="text-primary" size="icon-lg" variant="ghost">
          {theme == "dark" ? <Sun /> : <Moon />}
        </Button>
      </article>

      <div className="flex lg:hidden flex-row items-center p-1 space-x-3">
        <DynamicUptorpLogo className="size-6 md:size-10 mr-2" theme={theme} />
        <Link to={"/"}>
          <h1 className="text-xl font-bold">Uptorps</h1>
        </Link>
      </div>

      {welcome && <p className="text-sm md:text-xl lg:hidden">Welcome To Our Authentication Page</p>}
    </>
  );
};
