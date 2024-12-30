"use client";

import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import { ExternalLinkIcon, LucideMoonStar, LucideSun } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "./ui/navigation-menu";

const MENUS: {
  label: string;
  href?: string;
  items?: { label: string; href?: string; description?: string }[];
}[] = [];

export default function Header({ logoOnly = false }: { logoOnly?: boolean }) {
  const { setTheme } = useTheme();
  const [open, setOpen] = useState(false);

  const p = usePathname();

  return (
    <div className="container mx-auto sticky top-2 z-50 max-w-screen-lg">
      <header
        className={cn(
          "mx-auto h-[56px] w-full bg-transparent border-transparent"
        )}
      >
        <div className="container flex h-14 max-w-screen-2xl items-center justify-between">
          <div className="flex items-center gap-4">
            {/* <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild className="md:hidden flex">
                <Button size="icon" variant="ghost">
                  <LucideMenu className="w-4 h-4" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left">
                <SheetHeader>
                  <SheetTitle asChild className="!text-left text-lg">
                    <Link
                      className="flex items-center gap-3"
                      href="/"
                      onClick={() => setOpen(false)}
                    >
                      <span className="font-bold">
                        {conf.NAME.toLocaleUpperCase()}
                      </span>
                    </Link>
                  </SheetTitle>
                </SheetHeader>
                <div className="flex flex-col gap-3 py-4 pl-11">
                  <Link
                    className={cn(
                      p === "/"
                        ? "text-foreground/80"
                        : "text-foreground/60 hover:text-foreground/80",
                      "font-normal"
                    )}
                    href="/"
                    onClick={() => setOpen(false)}
                  >
                    Home
                  </Link>
                  {MENUS.filter((m) => !m.items?.length).map((menu, i) => (
                    <Link
                      key={i}
                      className={cn(
                        p.startsWith(menu.href || "")
                          ? "text-foreground/80"
                          : "text-foreground/60 hover:text-foreground/80",
                        "font-normal"
                      )}
                      href={menu.href || ""}
                      onClick={() => setOpen(false)}
                    >
                      {menu.label}
                    </Link>
                  ))}
                  {MENUS.filter((m) => m.items?.length).map((menu, i) => (
                    <div key={i} className="flex flex-col gap-3 pt-3">
                      <h4 className="font-medium text-muted-foreground/60 text-sm flex gap-2 items-center whitespace-nowrap -ml-6">
                        <ArrowUpRightIcon className="w-4 h-4" />
                        {menu.label}
                      </h4>
                      {menu.items!.map((item, ii) => (
                        <Link
                          key={ii}
                          className={cn(
                            p.startsWith(menu.href || "")
                              ? "text-foreground/80"
                              : "text-foreground/60 hover:text-foreground/80",
                            "font-normal"
                          )}
                          href={menu.href || ""}
                          onClick={() => setOpen(false)}
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  ))}
                </div>
              </SheetContent>
            </Sheet> */}
          </div>

          <div className="flex gap-2 items-center sm:mr-0 mr-5">
            <NavigationMenu className="hidden md:flex">
              <NavigationMenuList>
                {MENUS.map((menu, i) =>
                  menu.items?.length ? (
                    <NavigationMenuItem key={i}>
                      <NavigationMenuTrigger className="!bg-background/0 text-foreground/60 hover:text-foreground/80 font-normal">
                        {menu.label}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                          {menu.items.map((item, ii) => (
                            <li key={ii}>
                              <NavigationMenuLink asChild>
                                <Link
                                  href={item.href || ""}
                                  className={cn(
                                    "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                                    ""
                                  )}
                                >
                                  <div className="text-sm font-medium leading-none">
                                    {item.label}
                                  </div>
                                  <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                    {item.description}
                                  </p>
                                </Link>
                              </NavigationMenuLink>
                            </li>
                          ))}
                        </ul>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                  ) : (
                    <NavigationMenuItem key={i}>
                      {menu.href?.startsWith("http") ? (
                        <a
                          href={menu.href || ""}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <NavigationMenuLink
                            className={cn(
                              navigationMenuTriggerStyle(),
                              p.startsWith(menu.href || "")
                                ? "text-foreground/80"
                                : "text-foreground/60 hover:text-foreground/80",
                              "!bg-background/0 font-normal flex items-center gap-2"
                            )}
                          >
                            {menu.label}
                            <ExternalLinkIcon className="w-3.5 h-3.5" />
                          </NavigationMenuLink>
                        </a>
                      ) : (
                        <Link href={menu.href || ""} legacyBehavior passHref>
                          <NavigationMenuLink
                            className={cn(
                              navigationMenuTriggerStyle(),
                              p.startsWith(menu.href || "")
                                ? "text-foreground/80"
                                : "text-foreground/60 hover:text-foreground/80",
                              "!bg-background/0 font-normal"
                            )}
                          >
                            {menu.label}
                          </NavigationMenuLink>
                        </Link>
                      )}
                    </NavigationMenuItem>
                  )
                )}
              </NavigationMenuList>
            </NavigationMenu>

            <Button
              size="icon"
              variant="ghost"
              onClick={() => setTheme("dark")}
              className="dark:hidden flex backdrop-blur bg-background/95 supports-[backdrop-filter]:bg-background/30 rounded-full shadow-sm border border-solid border-muted-foreground/[.08]"
            >
              <LucideMoonStar className="size-4 mx-auto" />
            </Button>
            <Button
              size="icon"
              variant="ghost"
              onClick={() => setTheme("light")}
              className="hidden dark:flex backdrop-blur bg-background/95 supports-[backdrop-filter]:bg-background/30 rounded-full border border-solid border-foreground/[.145]"
            >
              <LucideSun className="size-4 mx-auto" />
            </Button>
          </div>
        </div>
      </header>
    </div>
  );
}