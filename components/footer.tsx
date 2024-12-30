import { conf } from "@/lib/constant";

export default function Footer() {
  return (
    <div className="mt-20">
      <div className="max-w-0 sm:max-w-3xl border-t-[1.5px] bg-transparent mx-auto border-t-muted-foreground"></div>
      <footer className="container mx-auto pt-3 pb-12 max-w-screen-lg">
        <p className="leading-7 font-[family-name:var(--font-geist-sans)] font-light text-foreground text-center mt-16">
          © 2025 Created by {conf.AUTHOR.NAME}.
        </p>
      </footer>
    </div>
  );
}
