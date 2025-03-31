'use client';

import { Button } from "@/components/ui/button";
import { Chip } from "@/components/ui/chip";
import { ArrowLeft, Calendar, Clock, Share2 } from "lucide-react";
import Image from "next/image";
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

      <article className="prose prose-lg max-w-none">
        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
        
        <div className="flex items-center text-gray-600 mb-8">
          <div className="flex items-center mr-4">
            <Calendar className="w-4 h-4 mr-2" />
            {post.date}
          </div>
          <div className="flex items-center">
            <Clock className="w-4 h-4 mr-2" />
            {post.readTime}
          </div>
        </div>

        <div className="mb-8">
          <Image
            src={post.image}
            alt={post.title}
            width={1200}
            height={600}
            className="rounded-lg"
          />
        </div>

        <div className="flex flex-wrap gap-2 mb-8">
          {post.tags.map((tag) => (
            <Chip key={tag} variant="outline">
              {tag}
            </Chip>
          ))}
        </div>

        <div
          className="prose prose-lg max-w-none"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

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
      </article>
    </div>
  );
} 