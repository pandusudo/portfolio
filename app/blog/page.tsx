import Header from "@/components/header";
import { PostRSC } from "@/components/post-rsc";

export default function Home() {
  return (
    <>
      <Header blogButton={true} />
      <div className="w-full md:px-32 font-[family-name:var(--font-geist-sans)]">
        <div className="max-w-7xl mx-auto pt-24 pb-16 px-4 md:px-8 lg:px-10">
          <div className="flex flex-col items-center space-y-4">
            <h1 className="text-3xl sm:text-5xl font-bold text-foreground text-center tracking-tight">
              Personal Blog
            </h1>
            <p className="text-muted-foreground text-base md:text-lg text-center max-w-2xl">
              Sharing my insights and thoughts on technology, software
              development, and everything in between.
            </p>
            <div className="w-16 h-1 bg-primary/50 rounded-full mt-2" />
          </div>
        </div>
        <PostRSC />
      </div>
    </>
  );
}
