import Header from "@/components/header";
import { PostBody } from "@/components/post-body";
import { getPost, getPosts } from "@/app/lib/posts";
import { notFound } from "next/navigation";
import { conf } from "@/app/lib/constant";
import { ReadingProgress } from "@/components/reading-progress";
import { ShareButtons } from "@/components/share-buttons";
import Image from "next/image";

export async function generateStaticParams() {
  const posts = await getPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata(props: {
  params: Promise<{
    slug: string;
  }>;
}) {
  const params = await props.params;
  const post = await getPost(params.slug);

  return {
    title: post?.title,
    description: post?.description,
    authors: { name: conf.AUTHOR.NAME, url: conf.AUTHOR.URL },
    keywords: post?.description,
    openGraph: {
      type: "website",
      locale: "en_US",
      url: `${process.env.NEXT_PUBLIC_BLOG_URL}/${params.slug}`,
      title: `${post?.title} - ${conf.AUTHOR.NAME}`,
      description: post?.description,
    },
    twitter: {
      card: "summary_large_image",
      site: `@${conf.X_USERNAME}`,
      creator: `@${conf.X_USERNAME}`,
      title: `${post?.title} - ${conf.AUTHOR.NAME}`,
      description: post?.description,
    },
  };
}

export default async function PostPage(props: {
  params: Promise<{
    slug: string;
  }>;
}) {
  const params = await props.params;
  let post = null;

  try {
    post = await getPost(params.slug);
  } catch (err) {
    console.error(err);
    return notFound();
  }

  if (!post) return notFound();

  const readingTime = Math.ceil(post.body.split(/\s+/).length / 200);
  const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <>
      <ReadingProgress />
      <Header backButton={true} />

      <article className="w-full font-[family-name:var(--font-geist-sans)]">
        <div className="max-w-4xl mx-auto px-6 md:px-8 py-16 md:py-24">
          {/* Category/Tag */}
          <div className="flex items-center gap-3 mb-6">
            <span className="text-xs font-medium tracking-wider uppercase text-muted-foreground">
              Article
            </span>
            <span className="text-muted-foreground">•</span>
            <span className="text-xs text-muted-foreground">
              {readingTime} min read
            </span>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-tight mb-6">
            {post?.title}
          </h1>

          {/* Description */}
          {post?.description && (
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 max-w-3xl">
              {post.description}
            </p>
          )}

          {/* Author & Meta Info */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 pt-6 border-t border-border">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center border border-border">
                <span className="text-sm font-semibold text-foreground">
                  {conf.AUTHOR.NAME.charAt(0)}
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-medium text-foreground">
                  {conf.AUTHOR.NAME}
                </span>
                <time
                  className="text-xs text-muted-foreground"
                  dateTime={post.date}
                >
                  {formattedDate}
                </time>
              </div>
            </div>

            {/* Share Buttons */}
            <ShareButtons
              url={`${process.env.NEXT_PUBLIC_BLOG_URL}/${params.slug}`}
              title={post?.title || ""}
            />
          </div>
        </div>

        {/* Featured Image */}
        <div className="w-full max-w-5xl mx-auto px-6 md:px-8 mb-16">
          <div className="relative aspect-[21/9] rounded-2xl overflow-hidden bg-muted border border-border shadow-2xl">
            <Image
              src={`/${params.slug}/hero.png`}
              alt={post?.title || ""}
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* Article Content */}
        <div className="max-w-3xl mx-auto px-6 md:px-8 pb-24">
          <div className="prose prose-lg dark:prose-invert prose-headings:font-bold prose-headings:tracking-tight prose-a:text-primary prose-a:no-underline hover:prose-a:underline prose-strong:text-foreground prose-code:text-foreground prose-pre:bg-muted prose-pre:border prose-pre:border-border max-w-none">
            <PostBody>{post?.body}</PostBody>
          </div>

          {/* Divider */}
          <div className="mt-16 pt-8 border-t border-border">
            <p className="text-sm text-muted-foreground text-center">
              Thank you for reading! If you found this helpful, feel free to
              share it.
            </p>
          </div>
        </div>
      </article>
    </>
  );
}
