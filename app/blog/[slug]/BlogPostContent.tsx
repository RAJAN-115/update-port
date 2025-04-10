'use client';

import { Button } from "@/components/ui/button";
import { ArrowLeft, Share2 } from "lucide-react";
import Link from "next/link";

interface BlogPost {
  id: number;
  title: string;
  content: string;
  date: string;
  readTime: string;
  author?: string;
  tags: string[];
  image: string;
  excerpt?: string;
  slug?: string;
}

interface BlogPostContentProps {
  post: BlogPost;
}

export default function BlogPostContent({ post }: BlogPostContentProps) {
  return (
    <div className="container mx-auto px-4 py-8">
      <Link href="/blog" className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-8">
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to Blog
      </Link>

      <article className="prose prose-lg dark:prose-invert mx-auto max-w-4xl p-6">
        <h1>{post.title}</h1>
        <div className="flex items-center gap-4 text-muted-foreground">
          <time>{post.date}</time>
          <span>{post.readTime}</span>
        </div>
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
      </article>

      <div className="mt-8 flex justify-between items-center">
        <Button variant="outline" asChild>
          <Link href="/blog">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Link>
        </Button>
        <Button variant="outline">
          <Share2 className="w-4 h-4 mr-2" />
          Share
        </Button>
      </div>
    </div>
  );
} 