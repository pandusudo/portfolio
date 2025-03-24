import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import rehypeStarryNight from "rehype-starry-night";
import { mdxComponents } from "./mdx";

export function PostBody({ children }: { children: string }) {
  console.log(children, "from post body");
  return (
    <MDXRemote
      source={children}
      options={{
        mdxOptions: {
          remarkPlugins: [remarkGfm],
          rehypePlugins: [rehypeStarryNight],
        },
      }}
      components={mdxComponents}
    />
  );
}
