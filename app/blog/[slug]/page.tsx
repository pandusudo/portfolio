import Header from "@/components/header";
import { PostBody } from "@/components/post-body";
import { getPost, getPosts } from "@/app/lib/posts";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const posts = await getPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export default async function PostPage(props: {
  params: Promise<{
    slug: string;
  }>;
}) {
  const params = await props.params;
  const post = await getPost(params.slug);
  if (!post) return notFound();

  return (
    <>
      <Header backButton={true} />
      <div className="w-full md:px-24 font-[family-name:var(--font-geist-sans)]">
        <div className="max-w-7xl mx-auto pt-10 pb-10 px-5 md:px-10 lg:px-52">
          <h1 className="text-2xl sm:text-4xl font-extrabold text-foreground text-center">
            {post?.title}
          </h1>
          <p className="sm:text-sm text-xs font-light mt-2 text-foreground/80 text-center">
            {post?.date}
          </p>
          <hr className="w-1/2 mt-4 h-1 bg-foreground border-0 mx-auto rounded-full" />
        </div>
        <div className="w-full px-7">
          <PostBody>{post?.body}</PostBody>
        </div>
      </div>
    </>
  );
}
