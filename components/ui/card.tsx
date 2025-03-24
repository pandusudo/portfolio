"use client";
import { cn } from "@/lib/utils";

export const Card = ({
  title,
  imgUrl = `${process.env.NEXT_PUBLIC_WEB_URL}/avatar.svg`,
  date,
}: {
  title?: string;
  description?: string;
  imgUrl?: string;
  className?: string;
  date?: string;
}) => {
  return (
    <div className="w-96 group/card">
      <div
        className={cn(
          "cursor-pointer overflow-hidden relative border-solid border-foreground/75 border-2 card h-96 rounded-md shadow-xl max-w-sm mx-auto backgroundImage flex flex-col justify-between pt-4"
        )}
        style={{
          backgroundImage: `url(${imgUrl})`,
          backgroundSize: "cover",
        }}
      >
        <div className="absolute w-full h-full top-0 left-0 transition duration-300 group-hover/card:bg-foreground opacity-60"></div>
        <div className="flex flex-row items-center space-x-4">
          <div className="mx-auto my-20 z-10 font-bold text-transparent text-2xl transition duration-300 group-hover/card:text-background opacity-100">
            <h1>READ MORE</h1>
          </div>
        </div>
        <div className="text bg-foreground w-full h-1/4 content">
          <p
            className={cn(
              "font-bold h-2/3 text-background relative z-10 text-center",
              title && title.length < 50 ? "text-xl pt-4" : "text-base pt-2"
            )}
          >
            {title}
          </p>
          <h4 className="font-light text-base h-1/3 text-background relative z-10 text-center">
            {date}
          </h4>
        </div>
      </div>
    </div>
  );
};
