import Image from "next/image";
import avatar from "../public/avatar.svg";
import { Timeline } from "@/components/ui/timeline";
import { timelineData } from "@/components/timeline-data";
import { IconDock } from "@/components/icon-dock";
import { TechstackSlider } from "@/components/techstack-slider";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen gap-16 -mt-20 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <main className="px-8 flex flex-col gap-2 row-start-2 items-center sm:items-start">
          <Image
            className="mx-auto size-36 sm:size-48"
            src={avatar}
            alt="pandusudo"
          />
          <h1 className="mx-auto text-2xl text-center sm:text-4xl font-bold text-foreground">
            Hello! My name is Pandu.
          </h1>
          <div className="max-w-2xl mx-auto">
            <p className="text-center text-sm sm:text-lg text-foreground">
              I am a software engineer from Indonesia with 4 years of experience
              building small to large-scale software using wide variety and
              modern tech stack.
            </p>
          </div>

          <div className="flex gap-4 items-center flex-col sm:flex-row mx-auto">
            <IconDock />
          </div>
        </main>
      </div>
      <div>
        <Timeline data={timelineData} />
      </div>
      <div>
        <div className="w-full font-[family-name:var(--font-geist-sans)] md:px-28">
          <div className="max-w-7xl mx-auto pt-20 pb-10 px-4 md:px-8 lg:px-10">
            <h1 className="text-2xl sm:text-4xl font-bold text-foreground text-center sm:text-right">
              Tech Stack
            </h1>
            <p className="text-foreground text-sm md:text-base text-center sm:text-right right-0">
              Experienced using modern tech stack for software development.
            </p>
            <TechstackSlider />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
