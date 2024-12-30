import Image from "next/image";
import Marquee from "./ui/marquee";
import { techstack } from "@/lib/constant";
import { AnimatedTooltip } from "./ui/animated-tooltip";

const firstRow = techstack.slice(0, techstack.length / 2);
const secondRow = techstack.slice(techstack.length / 2);

export function TechstackSlider() {
  return (
    <div className="relative flex h-max w-full py-12  flex-col items-center justify-center overflow-hidden bg-background ">
      <Marquee className="[--duration:15s] pt-24">
        <AnimatedTooltip items={firstRow} />
      </Marquee>
      <Marquee reverse className="[--duration:15s] mt-7 pt-24">
        <AnimatedTooltip items={secondRow} />
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 dark:w-1/3 bg-gradient-to-r from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 dark:w-1/3 bg-gradient-to-l from-background"></div>
    </div>
  );
}
