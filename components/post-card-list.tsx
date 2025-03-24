import { Post } from "@/app/lib/posts";
import { Card } from "./ui/card";
import Link from "next/link";
import { truncateString } from "@/app/lib/utils";

export const PostCardList = ({ posts }: { posts: Post[] }) => {
  return (
    <div className="flex items-center justify-center min-h-64 py-6">
      <div
        className={`flex flex-wrap w-full gap-x-2 lg:w-screen gap-y-5 ${
          posts.length == 1 ? "justify-center" : ""
        } `}
      >
        {posts.map((post) => (
          <Link
            className="mx-auto"
            key={post.slug}
            href={`${process.env.NEXT_PUBLIC_BLOG_URL}/${post.slug}`}
          >
            <Card
              title={truncateString(post.title, 75)}
              imgUrl={
                post.imgUrl
                  ? `${process.env.NEXT_PUBLIC_BLOG_URL}/${post.imgUrl}`
                  : undefined
              }
              description={truncateString(post.description)}
              date={post.date}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};
