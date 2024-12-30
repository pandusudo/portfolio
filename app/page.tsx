import Image from "next/image";
import avatar from "../public/avatar.svg";
import { Timeline } from "@/components/ui/timeline";
import { timelineData } from "@/components/timeline-data";
import { IconDock } from "@/components/icon-dock";
import { TechstackSlider } from "@/components/techstack-slider";
import Footer from "@/components/footer";

const iconsUrl = [
  {
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-plain.svg",
    alt: "Docker",
  },
  {
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-plain.svg",
    alt: "Typescript",
  },
  {
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-plain.svg",
    alt: "Javascript",
  },
  {
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-plain.svg",
    alt: "PostgreSQL",
  },
  {
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/go/go-original-wordmark.svg",
    alt: "Golang",
  },
  {
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
    alt: "Python",
  },
  {
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg",
    alt: "PHP",
  },
  {
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg",
    alt: "MySQL",
  },
  {
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
    alt: "NextJS",
  },
  {
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nestjs/nestjs-original.svg",
    alt: "NestJS",
  },
  {
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg",
    alt: "Laravel",
  },
  {
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/graphql/graphql-plain.svg",
    alt: "GraphQL",
  },
  {
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-plain-wordmark.svg",
    alt: "MongoDB",
  },
  {
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg",
    alt: "NodeJS",
  },
  {
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prisma/prisma-original.svg",
    alt: "Prisma",
  },
  {
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
    alt: "React",
  },
];

const firstRow = iconsUrl.slice(0, iconsUrl.length / 2);
const secondRow = iconsUrl.slice(iconsUrl.length / 2);

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
