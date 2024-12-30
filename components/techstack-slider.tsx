import Image from "next/image";
import Marquee from "./ui/marquee";
import { techstack } from "@/lib/constant";

const firstRow = techstack.slice(0, techstack.length / 2);
const secondRow = techstack.slice(techstack.length / 2);

export function TechstackSlider() {
  return (
    <div className="relative flex h-max w-full py-16 flex-col items-center justify-center overflow-hidden bg-background ">
      <Marquee className="[--duration:15s] mt-5">
        {firstRow.map((icon) => (
          <Image
            className="px-3"
            width={100}
            height={100}
            key={icon.alt}
            alt={icon.alt}
            src={icon.url}
          />
        ))}
      </Marquee>
      <Marquee reverse className="[--duration:15s] mt-7">
        {secondRow.map((icon) => (
          <Image
            className="px-3"
            width={100}
            height={100}
            key={icon.alt}
            alt={icon.alt}
            src={icon.url}
          />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 dark:w-1/3 bg-gradient-to-r from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 dark:w-1/3 bg-gradient-to-l from-background"></div>
    </div>
  );
}
