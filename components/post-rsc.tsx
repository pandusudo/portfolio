import { getPosts } from "@/lib/posts";
import { PostCardList } from "./post-card-list";

export async function PostRSC() {
  const posts = await getPosts();
  return <PostCardList posts={posts} />;
}
