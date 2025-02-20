"use client"

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Share2, BookOpen } from "lucide-react";
import Link from "next/link";

const blogPosts = [
  {
    id: 1,
    title: "Understanding Anxiety: A Comprehensive Guide",
    excerpt: "Learn about the different types of anxiety and effective coping mechanisms...",
    author: "Dr. Sarah Johnson",
    date: "March 15, 2024",
    readTime: "8 min read",
    category: "Mental Health",
    image: "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    title: "The Power of Mindful Movement",
    excerpt: "Discover how combining mindfulness with gentle movement can transform your mental state...",
    author: "Emma Thompson",
    date: "March 14, 2024",
    readTime: "6 min read",
    category: "Wellness",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 3,
    title: "Building Healthy Relationships",
    excerpt: "Explore the foundations of strong, nurturing relationships and communication strategies...",
    author: "Dr. Lisa Chen",
    date: "March 13, 2024",
    readTime: "10 min read",
    category: "Relationships",
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  }
];

export default function Blog() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-purple-50 p-8">
      <h1 className="text-3xl font-bold text-purple-900 mb-8">Mental Wellness Blog</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <Card key={post.id} className="overflow-hidden">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-sm text-purple-600">{post.category}</span>
                <span className="text-gray-400">•</span>
                <span className="text-sm text-gray-500">{post.readTime}</span>
              </div>
              <h2 className="text-xl font-semibold text-purple-900 mb-2">{post.title}</h2>
              <p className="text-gray-600 mb-4">{post.excerpt}</p>
              <div className="flex items-center justify-between mb-4">
                <div className="text-sm text-gray-500">
                  By {post.author} • {post.date}
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Button variant="outline" size="sm">
                  <Heart className="w-4 h-4 mr-2" />
                  Like
                </Button>
                <Button variant="outline" size="sm">
                  <Share2 className="w-4 h-4 mr-2" />
                  Share
                </Button>
                <Button variant="outline" size="sm" asChild>
                  <Link href={`/blog/${post.id}`}>
                    <BookOpen className="w-4 h-4 mr-2" />
                    Read
                  </Link>
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}