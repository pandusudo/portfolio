import Header from "@/components/header";
import { PostBody } from "@/components/post-body";
import { getPost } from "@/app/lib/posts";
import { notFound } from "next/navigation";

export default async function PostPage({
  params: _params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const params = await _params;
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
          <hr className="w-1/2 mt-4 h-1 bg-foreground border-0 mx-auto rounded-full" />
        </div>
        <div className="w-full px-7">
          <PostBody>{post?.body}</PostBody>
        </div>
      </div>
    </>
  );
}
