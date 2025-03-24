import { MDXComponents } from "mdx/types";
import NextImage from "next/image";
// import Link from '@components/link'
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
        className="underline font-medium"
        href={props.href || ""}
      >
        {children}
      </Link>
    );
  },
  h1: ({ children }) => {
    return <h1 className="text-2xl sm:text-4xl font-bold mb-4">{children}</h1>;
  },
  h2: ({ children }) => {
    return <h2 className="text-xl sm:text-3xl font-bold mb-4">{children}</h2>;
  },
  h3: ({ children }) => {
    return (
      <h3 className="text-lg sm:text-2xl font-semibold mb-4">{children}</h3>
    );
  },
  h4: ({ children }) => {
    return (
      <h4 className="text-base sm:text-xl font-semibold mb-4">{children}</h4>
    );
  },
  p: ({ children, ...props }) => {
    return (
      <p {...props} className="text-base mb-2">
        {children}
      </p>
    );
  },
  ul: ({ children }) => {
    return <ul className="list-disc">{children}</ul>;
  },
  ol: ({ children }) => {
    return <ul className="list-decimal">{children}</ul>;
  },
  pre: Code,
  Image: NextImage as any,
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
