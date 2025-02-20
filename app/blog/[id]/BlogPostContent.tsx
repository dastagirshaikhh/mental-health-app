"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Heart, Share2, ArrowLeft } from 'lucide-react'
import Link from "next/link"
import Image from "next/image"

interface BlogPost {
    id: number
    title: string
    excerpt: string
    content: string
    author: string
    date: string
    readTime: string
    category: string
    image: string
}

interface BlogPostContentProps {
    post: BlogPost
}

export default function BlogPostContent({ post }: BlogPostContentProps) {
    return (
        <div className="min-h-screen bg-gradient-to-b from-pink-50 to-purple-50 p-8">
            <div className="max-w-3xl mx-auto">
                <Button asChild variant="outline" className="mb-8">
                    <Link href="/blog">
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Back to Blog
                    </Link>
                </Button>

                <Card className="overflow-hidden">
                    <Image
                        src={post.image || "/placeholder.svg"}
                        alt={post.title}
                        width={800}
                        height={400}
                        className="w-full h-64 object-cover"
                    />
                    <div className="p-8">
                        <div className="flex items-center gap-2 mb-4">
                            <span className="text-sm text-purple-600">{post.category}</span>
                            <span className="text-gray-400">•</span>
                            <span className="text-sm text-gray-500">{post.readTime}</span>
                        </div>

                        <h1 className="text-3xl font-bold text-purple-900 mb-4">{post.title}</h1>

                        <div className="flex items-center justify-between mb-8">
                            <div className="text-sm text-gray-500">
                                By {post.author} • {post.date}
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
                            </div>
                        </div>

                        <div className="prose prose-purple max-w-none">
                            {post.content.split("\n").map((paragraph, index) => (
                                <p key={index} className="text-gray-600 mb-4 whitespace-pre-line">
                                    {paragraph}
                                </p>
                            ))}
                        </div>
                    </div>
                </Card>
            </div>
        </div>
    )
}
