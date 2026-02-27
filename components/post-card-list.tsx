"use client";

import { Post } from "@/app/lib/posts";
import Link from "next/link";
import { cn } from "@/app/lib/utils";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import Image from "next/image";

interface PostCardProps {
  post: Post;
  className?: string;
}

export const PostCard = ({ post, className }: PostCardProps) => {
  const readTime = Math.ceil(post.body.split(/\s+/).length / 200);

  return (
    <Link
      href={`${process.env.NEXT_PUBLIC_BLOG_URL}/${post.slug}`}
      className={cn("group block", className)}
    >
      <article className="relative overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-1 flex flex-col">
        {/* Image Section */}
        <div className="relative h-56 md:h-64 w-full overflow-hidden bg-muted flex items-center justify-center">
          <Image
            src={`/${post.slug}/hero.png`}
            alt={post.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
        </div>

        {/* Content Section */}
        <div className="p-6 md:p-8 space-y-4 flex-1 flex flex-col justify-between">
          {/* Meta Information */}
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1.5">
              <Calendar className="h-3.5 w-3.5" />
              <time dateTime={post.date}>
                {new Date(post.date).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                })}
              </time>
            </div>
            <div className="flex items-center gap-1.5">
              <Clock className="h-3.5 w-3.5" />
              <span>{readTime} min read</span>
            </div>
          </div>

          {/* Title */}
          <h3 className="text-2xl font-bold leading-tight tracking-tight transition-colors group-hover:text-primary">
            {post.title}
          </h3>

          {/* Description */}
          <p className="line-clamp-3 text-muted-foreground leading-relaxed">
            {post.description}
          </p>

          {/* Read More Link */}
          <div className="flex items-center gap-2 text-sm font-medium text-primary pt-2">
            <span>Read article</span>
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </div>
        </div>

        {/* Hover Effect Border */}
        <div className="absolute inset-0 rounded-2xl border-2 border-primary opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none" />
      </article>
    </Link>
  );
};

interface PostCardListProps {
  posts: Post[];
  className?: string;
}

export const PostCardList = ({ posts, className }: PostCardListProps) => {
  if (posts.length === 0) {
    return (
      <div className="flex items-center justify-center min-h-64 py-12">
        <p className="text-muted-foreground text-lg">No articles found.</p>
      </div>
    );
  }

  return (
    <div className={cn("py-8 px-4 sm:px-0", className)}>
      <div className="flex flex-col gap-6">
        {posts.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>
    </div>
  );
};
