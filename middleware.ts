import { NextRequest, NextResponse } from "next/server";

export const config = {
  matcher: [
    /*
     * Match all paths except for:
     * 1. /api routes
     * 2. /_next (Next.js internals)
     * 3. /_static (inside /public)
     * 4. all root files inside /public (e.g. /favicon.ico)
     */
    "/((?!api/|_next/|_static/|_vercel|[\\w-]+\\.\\w+).*)",
  ],
};

export default async function middleware(req: NextRequest) {
  const url = req.nextUrl;
  let hostname = req.headers
    .get("host")!
    .replace(".localhost:3000", `.${process.env.NEXT_PUBLIC_ROOT_DOMAIN}`);

  if (
    hostname.includes("---") &&
    hostname.endsWith(`.${process.env.NEXT_PUBLIC_VERCEL_DEPLOYMENT_SUFFIX}`)
  ) {
    hostname = `${hostname.split("---")[0]}.${
      process.env.NEXT_PUBLIC_ROOT_DOMAIN
    }`;
  }

  const searchParams = req.nextUrl.searchParams.toString();
  // Get the pathname of the request (e.g. /, /about, /blog/first-post)
  const path = `${url.pathname}${
    searchParams.length > 0 ? `?${searchParams}` : ""
  }`;

  if (hostname == `blog.${process.env.NEXT_PUBLIC_ROOT_DOMAIN}`) {
    return NextResponse.rewrite(
      new URL(`/blog${path === "/" ? "" : path}`, req.url)
    );
  }

  const notAllowedPaths = new Set(['/blog']);
  console.log(hostname)
  if (hostname === process.env.NEXT_PUBLIC_ROOT_DOMAIN) {
    console.log(notAllowedPaths.has(path))
    if (notAllowedPaths.has(path)) {
      return NextResponse.redirect(new URL(`/`, req.url));
    } else {
      return NextResponse.rewrite(new URL(`${path}`, req.url));
    }
  }
}
