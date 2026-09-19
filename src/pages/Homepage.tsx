import Particles from "@/components/AnimatedComponents/Particles";
import { useTheme } from "@/components/ContextHandlers/ThemeProvider";
import { FeatureCard } from "@/components/PageComponents/FeatureCard";
import { Button } from "@/components/ui/button";
import { featuresData } from "@/lib/datalib";
import { ArrowRightIcon, BookOpen, Moon, Star, Sun, Zap } from "lucide-react";
import { useEffect } from "react";

const Homepage = () => {
  const { theme, setTheme } = useTheme();

  useEffect(() => {});

  return (
    <div className="flex flex-col w-full h-full">
      <header className="bg-green-600 flex flex-row p-2 justify-between">
        <section className="flex flex-row items-center p-1 space-x-2">
          <img className="w-7.5 h-7.5" src="/uptorpsbook.svg" alt="Uptorps Book" />
          <h1 className="font-sans text-xl font-bold">Uptorps</h1>
        </section>

        <section className="flex items-center space-x-1">
          <Button onClick={() => setTheme(theme == "dark" ? "light" : "dark")} className="" size="icon-lg" variant="ghost">
            {theme == "dark" ? <Sun /> : <Moon />}
          </Button>
          <Button className="w-25 text-[13px]" variant="default">
            Sign In
          </Button>
          <Button className="w-25 text-[13px]" variant="default">
            Sign Up
          </Button>
        </section>
      </header>

      <main>
        <div className="relative h-125">
          <Particles
            className="absolute top-0 left-0 right-0 bottom-0 h-full"
            particleColors={["#ffffff"]}
            particleCount={600}
            particleSpread={10}
            speed={0.3}
            particleBaseSize={100}
            moveParticlesOnHover
            alphaParticles
            disableRotation={false}
            pixelRatio={1}
          />

          <div className="pointer-events-none absolute top-0 left-0 right-0 grid grid-cols-2 pt-20 justify-items-center items-center">
            <section className="w-125">
              <article className="w-fit bg-secondary flex flex-row items-center p-1 px-4 space-x-1 border-2 border-green-500 rounded-4xl">
                <Star fill="bg-primary" size={12} />
                <span className="text-[13px]">A next generation learning platform</span>
              </article>

              <article>
                <span className="text-[60px] font-bold">Learn.</span>
                <span className="text-[60px] font-bold">Earn.</span>
                <span className="text-[60px] text-green-600 font-bold ">Grow.</span>
              </article>

              <h2 className="text-[14px]">UPTORPS integrates teaching, learning and earning into a unified platform. Start your journey to educational and financial inclusion today.</h2>

              <div className="mt-5 space-x-2 pointer-events-auto">
                <Button className="min-w-25 text-[13px]" variant="default">
                  Get Started For Free <ArrowRightIcon size={32} />
                </Button>
                <Button className="min-w-25 text-[13px]" variant="default">
                  Read Our Blog <BookOpen size={32} />
                </Button>
              </div>
            </section>

            <section>
              <img className="w-125 h-90" src="/src/assets/ulillustration.svg" alt="Uptorp Illustration" />
            </section>
          </div>
        </div>

        <div className="bg-primary flex flex-col justify-center items-center py-6">
          <article className="w-fit bg-green-500 flex flex-row items-center py-1 px-4 space-x-1 border-2 border-green-500">
            <Zap size={12} />
            <span className="text-[14px]">Platform Features</span>
          </article>

          <section className="flex flex-wrap justify-center gap-4 py-4">
            {featuresData.map((feature) => (
              <FeatureCard icon={feature.icon} title={feature.title} description={feature.description} />
            ))}
          </section>
        </div>
      </main>
    </div>
  );
};

export default Homepage;
