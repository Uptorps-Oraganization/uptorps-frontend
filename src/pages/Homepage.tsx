/* eslint-disable @typescript-eslint/no-explicit-any */
import Particles from "@/components/AnimatedComponents/Particles";
import { useTheme } from "@/components/ContextHandlers/ThemeProvider";
import { FeatureCard } from "@/components/PageComponents/FeatureCard";
import { TestimonialCard } from "@/components/PageComponents/TestimonialCard";
import { Button } from "@/components/ui/button";
import { InputGroup, InputGroupAddon, InputGroupInput } from "@/components/ui/input-group";
import { Separator } from "@/components/ui/separator";
import { featuresData, testimonialsData } from "@/lib/datalib";
import { useHomeStore } from "@/statemanagers/homestore";
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
  LoaderCircle,
  LogIn,
  Mail,
  MailCheck,
  MapPin,
  Moon,
  NotebookPen,
  Phone,
  Rss,
  Star,
  Sun,
  UserPlus,
  UserRoundGroup,
  Zap,
} from "lucide-react";
import { useEffect } from "react";
import { Link } from "react-router";

const Homepage = () => {
  const { theme, setTheme } = useTheme();

  const { testimonialIndex, subscribeButtIcon, setTestimonialIndex, prevTestimonial, nextTestimonial, changeSubscribeButtIcon } = useHomeStore();

  useEffect(() => {});

  return (
    <div className="flex flex-col w-full h-full relative">
      <header className="sticky top-0 bg-green-500 flex flex-row p-2 py-4 justify-between z-10">
        <section className="flex flex-row items-center p-1 space-x-2">
          <img className="w-7.5 h-7.5" src="/uptorpsbook.svg" alt="Uptorps Book" />
          <h1 className="text-xl font-bold">Uptorps</h1>
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
            className="absolute top-0 left-0 right-0 bottom-0"
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
                <span className="text-[60px] text-green-500 font-bold ">Grow.</span>
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
            {featuresData.map((feature, index) => (
              <FeatureCard key={index} icon={feature.icon} title={feature.title} description={feature.description} />
            ))}
          </section>
        </div>

        <div className="flex flex-col justify-center items-center py-10">
          <UserRoundGroup size={80} />
          <p className="py-6 text-4xl font-bold">What our users say about us</p>

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

            <span className="flex flex-row justify-center items-center py-2 text-[14px]">
              <NotebookPen className="mr-3 text-green-500 animate-pulse ease-in-out" size={18} />
              You can also add a review upon creating an account.
            </span>
          </section>
        </div>

        <div className="bg-primary flex flex-col justify-center items-center py-20">
          <article className="w-fit bg-green-500 flex flex-row items-center py-1 px-4 space-x-1 border-2 border-green-500">
            <Rss size={12} />
            <span className="text-[14px]">Newsletter</span>
          </article>

          <p className="w-8/12 py-6 text-3xl text-secondary text-center">Subscribe to our newsletter to get updates on our features, policies and processes.</p>
          <span className="w-8/12 py-2 text-[14px] text-green-500/90 text-center">Get the latest updates, tips, and exclusive offers delivered to your inbox.</span>

          <div className="flex flex-row py-3 space-x-4">
            <InputGroup className="w-85 h-10 border border-green-500">
              <InputGroupAddon align="inline-end">
                <Mail />
              </InputGroupAddon>
              <InputGroupInput className="md:text-[14px] text-secondary" placeholder="Enter your email" />
            </InputGroup>

            <Button onClick={changeSubscribeButtIcon} className="w-40 h-10 flex items-center gap-2 text-[15px] bg-secondary text-primary hover:text-secondary">
              {subscribeButtIcon === true ? <LoaderCircle className="animate-spin w-5 h-5 " /> : <MailCheck />}
              Subscribe
            </Button>
          </div>
        </div>
      </main>

      <footer className="bg-green-500">
        <div className="grid grid-cols-3 gap-10 justify-center px-10 py-25 text-primary">
          <section className="flex flex-col items-start space-y-4">
            <img className="w-15 mb-2" src="/uptorpsbook.svg" alt="Uptorps Book" />
            <p className="text-2xl font-black">Uptorps</p>
            <span className="text-[13px]">Empowering tutors and learners through education, rewards, and financial inclusion.</span>
          </section>

          <div className="col-span-2 grid grid-cols-3">
            <section className="flex flex-col">
              <p className="font-black text-xl">JOIN US NOW</p>
              <Link to={"/"} className="flex flex-row items-center text-[13px] py-3 cursor-pointer hover:text-primary-foreground">
                <UserPlus className="mr-2" size={12} />
                Create a new account
              </Link>
              <span className="text-[14px]">You already have an account?</span>
              <Link to={"/"} className="flex flex-row items-center text-[13px] py-3 cursor-pointer hover:text-primary-foreground">
                <LogIn className="mr-2" size={12} />
                Log into your account
              </Link>
            </section>

            <section className="flex flex-col">
              <p className="font-black text-xl mb-2">Quick Links</p>
              <Link to={"/"} className="flex flex-row items-center text-[13px] py-1 cursor-pointer hover:text-primary-foreground">
                <Info className="mr-2" size={12} />
                About Us
              </Link>
              <Link to={"/"} className="flex flex-row items-center text-[13px] py-1 cursor-pointer hover:text-primary-foreground">
                <Rss className="mr-2" size={12} />
                Blog
              </Link>
              <Link to={"/"} className="flex flex-row items-center text-[13px] py-1 cursor-pointer hover:text-primary-foreground">
                <HatGlasses className="mr-2" size={12} />
                Privacy Policy
              </Link>
              <Link to={"/"} className="flex flex-row items-center text-[13px] py-1 cursor-pointer hover:text-primary-foreground">
                <Handshake className="mr-2" size={12} />
                Terms of Service
              </Link>
            </section>

            <section className="flex flex-col">
              <p className="font-black text-xl mb-2">Reach Out To Us</p>
              <a href={"tel: +233324324232"} className="flex flex-row items-center text-[13px] py-1 cursor-pointer hover:text-primary-foreground">
                <Phone className="mr-2" size={12} />
                [+233 (32) 432-4232]
              </a>
              <a href={"mailto: uptorpscustomerservice@gmail.com"} className="flex flex-row items-center text-[13px] py-1 cursor-pointer hover:text-primary-foreground">
                <Mail className="mr-2" size={12} />
                uptorpscustomerservice@gmail.com
              </a>

              <span className="flex flex-row items-center text-[13px] py-2 cursor-pointer">
                <MapPin className="mr-2" size={14} />
                64 Oyiwa Street, Cape Coast, Central-Region
              </span>

              <span className="flex flex-row items-center text-[13px] py-2 cursor-pointer">
                <Globe className="mr-2" size={14} />
                Ghana, West-Africa
              </span>
            </section>
          </div>
        </div>

        <Separator className="mb-2" />

        <div className="flex justify-center items-center py-8">
          <Copyright className="mx-4" />
          <span className="text-[14px]">2026 UPTORPS. All rights reserved.</span>
        </div>
      </footer>
    </div>
  );
};

export default Homepage;
