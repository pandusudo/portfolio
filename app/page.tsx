import Image from "next/image";
import avatar from "../public/avatar.svg";
import { Timeline } from "@/components/ui/timeline";
import { timelineData } from "@/components/timeline-data";
import { TechstackSlider } from "@/components/techstack-slider";
import { ContactSection } from "@/components/contact-section";
import Header from "@/components/header";

export default function Home() {
  return (
    <>
      <Header />
      {/* Hero Section */}
      <div className="relative min-h-[100dvh] flex items-center justify-center -mt-10 font-[family-name:var(--font-geist-sans)]">
        <main className="px-4 sm:px-6 md:px-8 py-16 sm:py-20 flex flex-col gap-4 sm:gap-6 items-center max-w-5xl mx-auto w-full">
          {/* Profile Image */}
          <div className="relative">
            <Image
              className="size-44 xs:size-28 sm:size-32 md:size-40 rounded-full ring-4 ring-primary/20 shadow-2xl"
              src={avatar}
              alt="Pandu Sudo - Software Engineer"
              priority
            />
          </div>

          {/* Value Proposition */}
          <div className="w-full max-w-3xl mx-auto space-y-6 mt-4 sm:mt-6">
            {/* Main Headline */}
            <div className="text-center">
              <h1 className="text-3xl xs:text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground tracking-tight leading-tight">
                Hey there, I am Pandu
              </h1>
            </div>

            <p className="text-center text-sm sm:text-lg md:text-xl text-foreground leading-5 sm:leading-8 px-4 sm:px-6">
              Fullstack engineer with{" "}
              <span className="font-semibold">5+ years</span> of experience
              building scalable products. Backend-focused, delivering reliable
              systems and polished user experiences.
            </p>
            <div className="hidden sm:grid sm:grid-cols-3 gap-3 text-base text-muted-foreground">
              <span className="px-3 py-2 bg-secondary text-sm rounded-full text-center">
                🚀 React & Next.js Frontend
              </span>
              <span className="px-3 py-2 bg-secondary text-sm rounded-full text-center">
                ⚡ Go, Node.js, NestJS Backend
              </span>
              <span className="px-3 py-2 bg-secondary text-sm rounded-full text-center">
                🦁 PostgreSQL, MySQL, MongoDB
              </span>
            </div>
          </div>

          {/* CTA and Social Links */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-center mt-4 sm:mt-6 w-full sm:w-auto px-4 sm:px-0">
            <a
              href="#contact"
              className="w-full sm:w-auto text-center px-6 sm:px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all shadow-lg hover:shadow-xl"
            >
              Let&apos;s Work Together
            </a>
            <a
              href={`${process.env.NEXT_PUBLIC_BLOG_URL}`}
              className="w-full sm:w-auto text-center px-6 sm:px-8 py-3 border-2 border-border rounded-lg font-semibold hover:bg-secondary transition-all"
            >
              View My Writing
            </a>
          </div>
        </main>
      </div>
      <div>
        <Timeline data={timelineData} />
      </div>
      {/* Contact Section */}
      <div id="contact" className="w-full py-20 flex flex-col items-center">
        <div className="text-center space-y-3 mb-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Let&apos;s Connect
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            I&apos;m always open to discussing new projects, creative ideas, or
            opportunities to be part of your vision.
          </p>
        </div>
        <ContactSection />
      </div>
      <div>
        <div className="w-full font-[family-name:var(--font-geist-sans)] md:px-28">
          <div className="max-w-7xl mx-auto pt-20 pb-10 px-4 md:px-8 lg:px-10">
            <h1 className="text-2xl sm:text-4xl font-bold text-foreground text-center sm:text-right">
              Tech Stack
            </h1>
            <p className="text-muted-foreground text-sm md:text-base text-center sm:text-right right-0">
              Experienced using modern tech stack for software development.
            </p>
            <TechstackSlider />
          </div>
        </div>
      </div>
    </>
  );
}
