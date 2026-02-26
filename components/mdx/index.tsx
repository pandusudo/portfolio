import { MDXComponents } from "mdx/types";
import NextImage from "next/image";
import { Code } from "bright";
import Link from "next/link";

Code.theme = {
  dark: "github-dark",
  light: "github-light",
  lightSelector: "html.dark",
};

export const mdxComponents: MDXComponents = {
  // TODO: re-enable once anchor tags are fixed in the app router
  a: ({ children, ...props }) => {
    return (
      <Link
        {...props}
        className="font-medium text-primary underline-offset-4 hover:underline transition-colors"
        href={props.href || ""}
      >
        {children}
      </Link>
    );
  },
  h1: ({ children }) => {
    return (
      <h1 className="text-3xl md:text-4xl font-bold mt-12 mb-6 tracking-tight scroll-mt-20">
        {children}
      </h1>
    );
  },
  h2: ({ children }) => {
    return (
      <h2 className="text-2xl md:text-3xl font-bold mt-10 mb-5 tracking-tight scroll-mt-20">
        {children}
      </h2>
    );
  },
  h3: ({ children }) => {
    return (
      <h3 className="text-xl md:text-2xl font-semibold mt-8 mb-4 tracking-tight scroll-mt-20">
        {children}
      </h3>
    );
  },
  h4: ({ children }) => {
    return (
      <h4 className="text-lg md:text-xl font-semibold mt-6 mb-3 tracking-tight scroll-mt-20">
        {children}
      </h4>
    );
  },
  p: ({ children, ...props }) => {
    return (
      <p
        {...props}
        className="text-base md:text-lg leading-relaxed mb-6 text-foreground/90"
      >
        {children}
      </p>
    );
  },
  ul: ({ children }) => {
    return <ul className="list-disc pl-6 mb-6 space-y-2">{children}</ul>;
  },
  ol: ({ children }) => {
    return <ol className="list-decimal pl-6 mb-6 space-y-2">{children}</ol>;
  },
  li: ({ children }) => {
    return (
      <li className="text-base md:text-lg leading-relaxed text-foreground/90">
        {children}
      </li>
    );
  },
  blockquote: ({ children }) => {
    return (
      <blockquote className="border-l-4 border-primary/50 pl-6 py-2 my-8 italic text-lg text-foreground/80 bg-muted/30 rounded-r-lg">
        {children}
      </blockquote>
    );
  },
  hr: () => {
    return <hr className="my-12 border-t border-border" />;
  },
  pre: Code,
  img: ({
    src,
    alt,
  }: React.DetailedHTMLProps<
    React.ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
  > & {
    src: string;
    alt: string;
  }) => {
    return (
      <span className="block my-12 -mx-4 md:mx-0">
        <span className="block relative rounded-xl overflow-hidden bg-muted border border-border shadow-lg">
          <NextImage
            width={800}
            height={600}
            className="w-full h-auto"
            src={src}
            alt={alt}
          />
        </span>
        {alt && (
          <span className="block text-center text-sm text-muted-foreground mt-3 italic">
            {alt}
          </span>
        )}
      </span>
    );
  },
  Details: ({
    children,
    summary,
    ...props
  }: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLElement>,
    HTMLDetailsElement
  > & {
    summary: string;
  }) => (
    // Necessary due to a hydration error I can't quite figure out
    <details {...props}>
      {summary && <summary>{summary}</summary>}
      {children}
    </details>
  ),
};
