import Header from "@/components/header";
import { PostRSC } from "@/components/post-rsc";

export default function Home() {
  return (
    <>
      <Header blogButton={true} />
      <div className="w-full md:px-32 font-[family-name:var(--font-geist-sans)]">
        <div className="max-w-7xl mx-auto pt-20 pb-10 px-4 md:px-8 lg:px-10">
          <h1 className="text-2xl sm:text-4xl font-bold text-foreground text-center">
            Personal Blog
          </h1>
          <p className="text-foreground text-sm md:text-base text-center">
            Sharing my insights and thoughts on technology.
          </p>
        </div>
        <PostRSC />
      </div>
    </>
  );
}
