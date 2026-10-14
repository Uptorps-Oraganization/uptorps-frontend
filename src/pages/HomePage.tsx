import Particles from "@/components/AnimatedComponents/Particles";
import { FeatureCard } from "@/components/PageComponents/homepage/FeatureCard";
import { TestimonialCard } from "@/components/PageComponents/homepage/TestimonialCard";
import { DynamicUptorpLogo } from "@/components/PageComponents/sharedcomponents/DynamicUptorpLogo";
import { Button } from "@/components/ui/button";
import { InputGroup, InputGroupAddon, InputGroupInput } from "@/components/ui/input-group";
import { Separator } from "@/components/ui/separator";
import { Spinner } from "@/components/ui/spinner";
import { useTheme } from "@/contexthandlers/ThemeProvider";
import { useReponsiveScreen } from "@/hooks/useReponsiveScreen";
import { uptorpillustration } from "@/lib/assets";
import { featuresData, testimonialsData } from "@/lib/data";
import { useHomeStore } from "@/statemanagers/HomeStore";
import { newsLetterSchema } from "@/typesnschemas/schemas/AuthSchemas";
import { Moon, SunIcon } from "@animateicons/react/lucide";
import {
  ArrowRightIcon,
  BookOpen,
  ChevronLeft,
  ChevronRight,
  Copyright,
  Globe,
  Handshake,
  HatGlasses,
  Info,
  LogIn,
  Mail,
  MailCheck,
  MapPin,
  NotebookPen,
  Phone,
  Rss,
  Star,
  UserPlus,
  UserRoundGroup,
  Zap,
} from "lucide-react";
import { useRef } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router";
import { toast } from "sonner";
import z from "zod";

const Homepage = () => {
  const { theme, setTheme } = useTheme();
  const { testimonialIndex, subscribeLoadingState, setTestimonialIndex, prevTestimonial, nextTestimonial, setSubscribeLoadingState } = useHomeStore();

  const { isMediumScreen, isLargeScreen } = useReponsiveScreen();

  const newsLetterInput = useRef<HTMLInputElement>(null);
  const newsLetterErrorShow = useRef<HTMLParagraphElement>(null);

  const handleNewsletterSub = () => {
    const result = newsLetterSchema.safeParse({ email: newsLetterInput.current?.value || "" });

    if (!result.success) {
      const errors = z.treeifyError(result.error);

      newsLetterErrorShow.current!.textContent = errors.properties?.email?.errors[0] || null;
    } else {
      newsLetterErrorShow.current!.textContent = "";
      setSubscribeLoadingState();
      setTimeout(() => {
        console.log({ email: newsLetterInput.current?.value || "" });
        setSubscribeLoadingState();
        showToastForSubscription();
      }, 1000);
    }
  };

  const showToastForSubscription = () => {
    return toast.success("You have successfully subcribed to our newsletter.", {
      className: "text-green-600!",
      duration: 2000,
    });
  };

  return (
    <>
      <Helmet>
        <title>Homepage | Uptorps</title>
      </Helmet>

      <div className="flex flex-col w-full h-full relative">
        <header className="sticky top-0 bg-green-500 flex flex-row p-2 py-4 justify-between z-10">
          <section className="flex flex-row items-center p-1 space-x-2">
            <DynamicUptorpLogo className="size-10" theme={theme} />
            <h1 className="text-sm md:text-[16px] lg:text-xl font-bold text-primary-foreground">Uptorps</h1>
          </section>

          <section className="flex items-center space-x-1">
            <Button onClick={() => setTheme(theme == "dark" ? "light" : "dark")} variant="ghost">
              {theme == "dark" ? <SunIcon /> : <Moon />}
            </Button>

            <Link to={"/auth/signin"}>
              <Button className="w-fit md:w-20 lg:w-25 text-[13px]" variant="secondary">
                {isMediumScreen ? "Sign In" : <LogIn />}
              </Button>
            </Link>

            <Link to={"/auth/signup"}>
              <Button className="w-fit md:w-20 lg:w-25 text-[13px]" variant="secondary">
                {isMediumScreen ? "Sign Up" : <UserPlus />}
              </Button>
            </Link>
          </section>
        </header>

        <main>
          <div className="relative h-100 lg:h-125">
            {isLargeScreen ? (
              <Particles
                className="absolute top-0 left-0 right-0 bottom-0"
                particleColors={["#ffffff"]}
                particleCount={1000}
                particleSpread={10}
                speed={0.2}
                particleBaseSize={80}
                moveParticlesOnHover
                alphaParticles
                disableRotation={false}
                pixelRatio={1}
              />
            ) : (
              <Particles
                className="absolute top-0 left-0 right-0 bottom-0"
                particleColors={["#ffffff"]}
                particleCount={800}
                particleSpread={10}
                speed={0.2}
                particleBaseSize={60}
                moveParticlesOnHover
                alphaParticles
                disableRotation={false}
                pixelRatio={1}
              />
            )}

            <div className="absolute top-0 left-0 right-0 grid md:grid-cols-2 pt-10 md:pt-15 lg:pt-18 justify-items-center items-center pointer-events-none">
              <section className="w-full md:w-85 lg:w-125 p-4 md:p-4 lg:p-0">
                <article className="w-fit bg-secondary flex flex-row items-center p-1 px-4 space-x-1 border-2 border-green-500 rounded-4xl">
                  <Star className="fill-primary" size={12} />
                  <span className="text-[12px] lg:text-sm">A next generation learning platform</span>
                </article>

                <article className="text-[35px] md:text-4xl lg:text-6xl font-bold mt-2">
                  <span>Learn.</span>
                  <span>Earn.</span>
                  <span className="text-green-500">Grow.</span>
                </article>

                <h2 className="text-sm">Uptorps integrates teaching, learning and earning into a unified platform. Start your journey to educational and financial inclusion today.</h2>

                <div className="flex flex-col justify-center md:justify-start items-center md:flex-row mt-5 space-x-0 md:space-x-2 space-y-2 md:space-y-0  pointer-events-auto">
                  <Link to={"/auth/signup"}>
                    <Button className="min-w-80 md:min-w-25 h-12 md:h-8  text-[13px]" variant="secondary">
                      Get Started For Free <ArrowRightIcon size={32} />
                    </Button>
                  </Link>

                  <Link to={"#"}>
                    <Button className="min-w-80 md:min-w-25 h-12 md:h-8 text-[13px]" variant="secondary">
                      Read Our Blog <BookOpen size={32} />
                    </Button>
                  </Link>
                </div>
              </section>

              <section>
                <img className="hidden md:inline md:w-80 md:h-60 lg:w-125 lg:h-90" src={uptorpillustration} alt="Uptorp Illustration" />
              </section>
            </div>
          </div>

          <div className="bg-primary flex flex-col justify-center items-center py-6">
            <article className="w-[80%] md:w-90 lg:w-fit bg-green-500 flex flex-row justify-center items-center text-primary-foreground py-1 px-4 space-x-1 border-2 border-green-500">
              <Zap size={12} />
              <span className="text-[14px]">Platform Features</span>
            </article>

            <section className="flex flex-wrap justify-center gap-4 py-4">
              {featuresData.map((feature, index) => (
                <FeatureCard key={index} icon={feature.icon} title={feature.title} description={feature.description} />
              ))}
            </section>
          </div>

          <div className="flex flex-col justify-center items-center py-10">
            <UserRoundGroup className="size-15 md:size-20" />
            <p className="py-6 text-xl md:text-4xl font-bold">What our users say about us</p>

            <section className="w-full flex flex-col justify-center">
              <div className="w-full flex justify-center items-center">
                {testimonialsData.map(
                  (testimonial, index) =>
                    index === testimonialIndex && (
                      <TestimonialCard key={index} statement={testimonial.statement} user_name={testimonial.user_name} user_type={testimonial.user_type} ratings={testimonial.ratings} />
                    ),
                )}
              </div>

              <div className="flex flex-row justify-center items-center py-2 my-4">
                <Button size="icon-lg" onClick={prevTestimonial}>
                  <ChevronLeft />
                </Button>

                <article className="flex flex-row justify-center items-center mx-4 space-x-2">
                  {Array.from({ length: testimonialsData.length }, (_, index) => (
                    <span
                      key={index}
                      onClick={() => setTestimonialIndex(index)}
                      className={`${index === testimonialIndex ? "w-6.5 bg-green-500" : "w-2.5 bg-primary"}  h-2.5 transition-[width] duration-200 rounded-full`}
                    ></span>
                  ))}
                </article>

                <Button size="icon-lg" onClick={nextTestimonial}>
                  <ChevronRight />
                </Button>
              </div>

              <span className="flex justify-center items-center px-4 md:px-0 py-2 text-[14px]">
                <NotebookPen className="mr-3 text-green-500 animate-pulse ease-in-out" size={18} />
                You can also add a review upon creating an account.
              </span>
            </section>
          </div>

          <div className="bg-primary flex flex-col justify-center items-center py-20">
            <article className="w-[80%] md:w-90 lg:w-fit bg-green-500 flex flex-row justify-center items-center text-primary-foreground py-1 px-4 space-x-1 border-2 border-green-500">
              <Rss size={12} />
              <span className="text-[14px]">Newsletter</span>
            </article>

            <p className="w-11/12 lg:w-8/12 py-6 text-xl md:text-3xl text-secondary text-center text-pretty">Subscribe to our newsletter to get updates on our features, policies and processes.</p>
            <span className="w-8/12 py-2 text-[14px] text-green-500/90 text-center">Get the latest updates, tips, and exclusive offers delivered to your inbox.</span>

            <div className="flex flex-col md:flex-row items-center md:items-start py-3 space-x-0 space-y-2 md:space-x-4 md:space-y-0">
              <div>
                <InputGroup className="w-85 h-10 border border-green-500">
                  <InputGroupAddon align="inline-end">
                    <Mail />
                  </InputGroupAddon>
                  <InputGroupInput ref={newsLetterInput} type="email" className="text-[14px]! text-secondary" placeholder="Enter your email" />
                </InputGroup>

                <p ref={newsLetterErrorShow} className="py-1 text-xs text-destructive"></p>
              </div>

              <Button
                onClick={() => handleNewsletterSub()}
                className="w-80 h-12 md:w-50 md:h-10 flex items-center gap-2 text-[15px] bg-primary-foreground text-primary hover:text-secondary"
                disabled={subscribeLoadingState && true}
              >
                {subscribeLoadingState === true ? <Spinner /> : <MailCheck />}
                Subscribe
              </Button>
            </div>
          </div>
        </main>

        <footer className="bg-green-500">
          <div className="grid grid-rows-1 lg:grid-cols-3 gap-10 justify-center px-5 py-10 lg:px-10 lg:py-25 text-primary-foreground">
            <section className="flex flex-col items-start space-y-4">
              <DynamicUptorpLogo className="size-6 md:size-10 mr-2" theme={theme} />
              <p className="text-2xl font-black">Uptorps</p>
              <span className="text-[13px]">Empowering tutors and learners through education, rewards, and financial inclusion.</span>
            </section>

            <div className="lg:col-span-2 grid grid-rows-1 gap-5 md:gap-0 md:grid-cols-3">
              <section className="flex flex-col">
                <p className="font-black text-xl">JOIN US NOW</p>
                <Link to={"/auth/signup"} className="text-link py-3">
                  <UserPlus className="mr-2" size={12} />
                  Create a new account
                </Link>
                <span className="text-[14px]">You already have an account?</span>
                <Link to={"/auth/signin"} className="text-link py-3">
                  <LogIn className="mr-2" size={12} />
                  Log into your account
                </Link>
              </section>

              <section className="flex flex-col">
                <p className="font-black text-xl mb-2">Quick Links</p>
                <Link to={"/"} className="text-link">
                  <Info className="mr-2" size={12} />
                  About Us
                </Link>
                <Link to={"/"} className="text-link">
                  <Rss className="mr-2" size={12} />
                  Blog
                </Link>
                <Link to={"/"} className="text-link">
                  <HatGlasses className="mr-2" size={12} />
                  Privacy Policy
                </Link>
                <Link to={"/"} className="text-link">
                  <Handshake className="mr-2" size={12} />
                  Terms of Service
                </Link>
              </section>

              <section className="flex flex-col">
                <p className="font-black text-xl mb-2">Reach Out To Us</p>
                <a href={"tel: #"} className="text-link">
                  <Phone className="mr-2" size={12} />
                  +233 (XX) XXXX XXX
                </a>
                <a href={"mailto: #"} className="text-link">
                  <Mail className="mr-2" size={12} />
                  uptorpscustomerservice@gmail.com
                </a>

                <span className="flex flex-row items-center text-[13px] py-2 cursor-pointer">
                  <MapPin className="mr-2" size={14} />
                  64 Oyiyiwa Street, Town 8, Accra
                </span>

                <span className="flex flex-row items-center text-[13px] py-2 cursor-pointer">
                  <Globe className="mr-2" size={14} />
                  Ghana, West-Africa
                </span>
              </section>
            </div>
          </div>

          <Separator className="mb-2" />

          <div className="flex justify-center items-center py-8 text-primary-foreground">
            <Copyright className="mr-2 size-4 md:size-6" />
            <span className="text-sm">2026 UPTORPS. All rights reserved.</span>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Homepage;
