import { cache } from "react";
import fs from "fs/promises";
import path from "path";
import matter from "gray-matter";

export type Post = {
  title: string;
  slug: string;
  imgUrl?: string;
  body: string;
  description: string;
  type: string;
  date: string;
};

export const getPosts = cache(async () => {
  const posts = await fs.readdir("./posts/");

  let postData = await Promise.all(
    posts
      .filter(
        (file) => path.extname(file) === ".md" || path.extname(file) === ".mdx"
      )
      .map(async (file) => {
        const filePath = `./posts/${file}`;
        const postContent = await fs.readFile(filePath, "utf-8");
        const { data, content }: { data: any; content: string } =
          matter(postContent);

        return { ...data, body: content, type: "post" } as Post;
      })
  );

  // Sort posts newest to oldest
  postData = postData.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return postData;
});

export async function getPost(slug: string): Promise<Post | undefined> {
  const posts = await getPosts();
  return posts.find((post) => post.slug === slug);
}
