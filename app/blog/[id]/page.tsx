// "use client"

// import { useParams } from "next/navigation";
// import { Card } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { Heart, Share2, ArrowLeft } from "lucide-react";
// import Link from "next/link";

// const blogPosts = [
//   {
//     id: 1,
//     title: "Understanding Anxiety: A Comprehensive Guide",
//     excerpt: "Learn about the different types of anxiety and effective coping mechanisms...",
//     content: `
//       Anxiety is a natural human response to stress, but when it becomes overwhelming, it can significantly impact our daily lives. In this comprehensive guide, we'll explore different types of anxiety and effective strategies to manage them.

//       Types of Anxiety:
//       1. Generalized Anxiety Disorder (GAD)
//       - Characterized by persistent and excessive worry about various aspects of life
//       - Physical symptoms may include restlessness, fatigue, and muscle tension

//       2. Social Anxiety
//       - Fear of social situations and interactions
//       - Can lead to avoidance of social gatherings and professional opportunities

//       3. Panic Disorder
//       - Sudden, intense episodes of fear or discomfort
//       - Often accompanied by physical symptoms like rapid heartbeat and shortness of breath

//       Coping Mechanisms:

//       1. Mindfulness and Meditation
//       - Practice staying present in the moment
//       - Focus on breathing exercises
//       - Regular meditation practice can help reduce anxiety levels

//       2. Cognitive Behavioral Therapy (CBT) Techniques
//       - Identify negative thought patterns
//       - Challenge and reframe anxious thoughts
//       - Develop healthier coping strategies

//       3. Lifestyle Changes
//       - Regular exercise
//       - Balanced diet
//       - Adequate sleep
//       - Limiting caffeine and alcohol

//       4. Support Systems
//       - Connect with friends and family
//       - Join support groups
//       - Consider professional help when needed

//       Remember, managing anxiety is a journey, not a destination. Be patient with yourself and celebrate small victories along the way.
//     `,
//     author: "Dr. Sarah Johnson",
//     date: "March 15, 2024",
//     readTime: "8 min read",
//     category: "Mental Health",
//     image: "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
//   },
//   {
//     id: 2,
//     title: "The Power of Mindful Movement",
//     excerpt: "Discover how combining mindfulness with gentle movement can transform your mental state...",
//     content: `
//       Mindful movement is a powerful practice that combines physical activity with mental awareness. This approach can help reduce stress, improve mood, and enhance overall well-being.

//       Understanding Mindful Movement:

//       1. What is Mindful Movement?
//       - Conscious awareness during physical activity
//       - Focus on body sensations and breath
//       - Integration of mind-body connection

//       2. Benefits of Practice
//       - Reduced stress and anxiety
//       - Improved body awareness
//       - Enhanced emotional regulation
//       - Better physical coordination

//       Simple Practices to Start:

//       1. Walking Meditation
//       - Find a quiet space
//       - Walk slowly and deliberately
//       - Notice each step and breath
//       - Observe surroundings mindfully

//       2. Gentle Stretching
//       - Focus on each movement
//       - Notice muscle sensations
//       - Breathe deeply and slowly
//       - Stay present in each pose

//       3. Body Scan Exercise
//       - Lie down comfortably
//       - Progress through each body part
//       - Notice sensations without judgment
//       - Release tension consciously

//       Incorporating into Daily Life:

//       1. Morning Routine
//       - Start with simple stretches
//       - Practice mindful breathing
//       - Set intentions for the day

//       2. Work Breaks
//       - Take mindful walking breaks
//       - Do desk stretches
//       - Practice posture awareness

//       3. Evening Wind-down
//       - Gentle movement before bed
//       - Relaxation exercises
//       - Gratitude practice

//       Remember, mindful movement is about quality over quantity. Start small and build gradually.
//     `,
//     author: "Emma Thompson",
//     date: "March 14, 2024",
//     readTime: "6 min read",
//     category: "Wellness",
//     image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
//   },
//   {
//     id: 3,
//     title: "Building Healthy Relationships",
//     excerpt: "Explore the foundations of strong, nurturing relationships and communication strategies...",
//     content: `
//       Healthy relationships are fundamental to our mental well-being and personal growth. Understanding how to build and maintain them is crucial for a fulfilling life.

//       Core Elements of Healthy Relationships:

//       1. Communication
//       - Practice active listening
//       - Express feelings clearly
//       - Use "I" statements
//       - Avoid blame and criticism

//       2. Boundaries
//       - Identify personal limits
//       - Communicate boundaries clearly
//       - Respect others' boundaries
//       - Maintain healthy space

//       3. Trust and Respect
//       - Be reliable and consistent
//       - Honor commitments
//       - Show appreciation
//       - Accept differences

//       Communication Strategies:

//       1. Active Listening
//       - Give full attention
//       - Maintain eye contact
//       - Ask clarifying questions
//       - Reflect back what you hear

//       2. Emotional Expression
//       - Name your emotions
//       - Share feelings appropriately
//       - Accept others' emotions
//       - Practice empathy

//       3. Conflict Resolution
//       - Address issues early
//       - Focus on solutions
//       - Take responsibility
//       - Seek compromise

//       Building Strong Foundations:

//       1. Self-awareness
//       - Understand your needs
//       - Recognize patterns
//       - Work on personal growth

//       2. Quality Time
//       - Create shared experiences
//       - Practice presence
//       - Show genuine interest

//       3. Support System
//       - Build mutual support
//       - Celebrate successes
//       - Navigate challenges together

//       Remember, healthy relationships require ongoing effort and commitment from all parties involved.
//     `,
//     author: "Dr. Lisa Chen",
//     date: "March 13, 2024",
//     readTime: "10 min read",
//     category: "Relationships",
//     image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
//   }
// ];



// export default async function BlogPost() {
//   const params = useParams();
//   const post = await blogPosts.find(post => post.id === Number(params.id));

//   if (!post) {
//     return (
//       <div className="min-h-screen bg-gradient-to-b from-pink-50 to-purple-50 p-8">
//         <div className="max-w-3xl mx-auto">
//           <h1 className="text-3xl font-bold text-purple-900 mb-8">Blog post not found</h1>
//           <Button asChild variant="outline">
//             <Link href="/blog">
//               <ArrowLeft className="w-4 h-4 mr-2" />
//               Back to Blog
//             </Link>
//           </Button>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-pink-50 to-purple-50 p-8">
//       <div className="max-w-3xl mx-auto">
//         <Button asChild variant="outline" className="mb-8">
//           <Link href="/blog">
//             <ArrowLeft className="w-4 h-4 mr-2" />
//             Back to Blog
//           </Link>
//         </Button>

//         <Card className="overflow-hidden">
//           <img
//             src={post.image}
//             alt={post.title}
//             className="w-full h-64 object-cover"
//           />
//           <div className="p-8">
//             <div className="flex items-center gap-2 mb-4">
//               <span className="text-sm text-purple-600">{post.category}</span>
//               <span className="text-gray-400">•</span>
//               <span className="text-sm text-gray-500">{post.readTime}</span>
//             </div>

//             <h1 className="text-3xl font-bold text-purple-900 mb-4">{post.title}</h1>

//             <div className="flex items-center justify-between mb-8">
//               <div className="text-sm text-gray-500">
//                 By {post.author} • {post.date}
//               </div>
//               <div className="flex items-center gap-4">
//                 <Button variant="outline" size="sm">
//                   <Heart className="w-4 h-4 mr-2" />
//                   Like
//                 </Button>
//                 <Button variant="outline" size="sm">
//                   <Share2 className="w-4 h-4 mr-2" />
//                   Share
//                 </Button>
//               </div>
//             </div>

//             <div className="prose prose-purple max-w-none">
//               {post.content.split('\n').map((paragraph, index) => (
//                 <p key={index} className="text-gray-600 mb-4 whitespace-pre-line">
//                   {paragraph}
//                 </p>
//               ))}
//             </div>
//           </div>
//         </Card>
//       </div>
//     </div>
//   );

import type { Metadata } from "next"
import BlogPostContent from "./BlogPostContent"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

const blogPosts = [
  {
    id: 1,
    title: "Understanding Anxiety: A Comprehensive Guide",
    excerpt: "Learn about the different types of anxiety and effective coping mechanisms...",
    content: `Anxiety is a natural human response to stress, but when it becomes overwhelming, it can significantly impact our daily lives. In this comprehensive guide, we'll explore different types of anxiety and effective strategies to manage them.

Types of Anxiety:
1. Generalized Anxiety Disorder (GAD)
- Characterized by persistent and excessive worry about various aspects of life
- Physical symptoms may include restlessness, fatigue, and muscle tension

2. Social Anxiety
- Fear of social situations and interactions
- Can lead to avoidance of social gatherings and professional opportunities

3. Panic Disorder
- Sudden, intense episodes of fear or discomfort
- Often accompanied by physical symptoms like rapid heartbeat and shortness of breath

Coping Mechanisms:

1. Mindfulness and Meditation
- Practice staying present in the moment
- Focus on breathing exercises
- Regular meditation practice can help reduce anxiety levels

2. Cognitive Behavioral Therapy (CBT) Techniques
- Identify negative thought patterns
- Challenge and reframe anxious thoughts
- Develop healthier coping strategies

3. Lifestyle Changes
- Regular exercise
- Balanced diet
- Adequate sleep
- Limiting caffeine and alcohol

4. Support Systems
- Connect with friends and family
- Join support groups
- Consider professional help when needed

Remember, managing anxiety is a journey, not a destination. Be patient with yourself and celebrate small victories along the way.`,
    author: "Dr. Sarah Johnson",
    date: "March 15, 2024",
    readTime: "8 min read",
    category: "Mental Health",
    image: "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    title: "The Power of Mindful Movement",
    excerpt: "Discover how combining mindfulness with gentle movement can transform your mental state...",
    content: `Mindful movement is a powerful practice that combines physical activity with mental awareness. This approach can help reduce stress, improve mood, and enhance overall well-being.

Understanding Mindful Movement:

1. What is Mindful Movement?
- Conscious awareness during physical activity
- Focus on body sensations and breath
- Integration of mind-body connection

2. Benefits of Practice
- Reduced stress and anxiety
- Improved body awareness
- Enhanced emotional regulation
- Better physical coordination

Simple Practices to Start:

1. Walking Meditation
- Find a quiet space
- Walk slowly and deliberately
- Notice each step and breath
- Observe surroundings mindfully

2. Gentle Stretching
- Focus on each movement
- Notice muscle sensations
- Breathe deeply and slowly
- Stay present in each pose

3. Body Scan Exercise
- Lie down comfortably
- Progress through each body part
- Notice sensations without judgment
- Release tension consciously

Incorporating into Daily Life:

1. Morning Routine
- Start with simple stretches
- Practice mindful breathing
- Set intentions for the day

2. Work Breaks
- Take mindful walking breaks
- Do desk stretches
- Practice posture awareness

3. Evening Wind-down
- Gentle movement before bed
- Relaxation exercises
- Gratitude practice

Remember, mindful movement is about quality over quantity. Start small and build gradually.`,
    author: "Emma Thompson",
    date: "March 14, 2024",
    readTime: "6 min read",
    category: "Wellness",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    title: "Building Healthy Relationships",
    excerpt: "Explore the foundations of strong, nurturing relationships and communication strategies...",
    content: `Healthy relationships are fundamental to our mental well-being and personal growth. Understanding how to build and maintain them is crucial for a fulfilling life.

Core Elements of Healthy Relationships:

1. Communication
- Practice active listening
- Express feelings clearly
- Use "I" statements
- Avoid blame and criticism

2. Boundaries
- Identify personal limits
- Communicate boundaries clearly
- Respect others' boundaries
- Maintain healthy space

3. Trust and Respect
- Be reliable and consistent
- Honor commitments
- Show appreciation
- Accept differences

Communication Strategies:

1. Active Listening
- Give full attention
- Maintain eye contact
- Ask clarifying questions
- Reflect back what you hear

2. Emotional Expression
- Name your emotions
- Share feelings appropriately
- Accept others' emotions
- Practice empathy

3. Conflict Resolution
- Address issues early
- Focus on solutions
- Take responsibility
- Seek compromise

Building Strong Foundations:

1. Self-awareness
- Understand your needs
- Recognize patterns
- Work on personal growth

2. Quality Time
- Create shared experiences
- Practice presence
- Show genuine interest

3. Support System
- Build mutual support
- Celebrate successes
- Navigate challenges together

Remember, healthy relationships require ongoing effort and commitment from all parties involved.`,
    author: "Dr. Lisa Chen",
    date: "March 13, 2024",
    readTime: "10 min read",
    category: "Relationships",
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
]

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    id: post.id.toString(),
  }))
}

export function generateMetadata({ params }: { params: { id: string } }): Metadata {
  const post = blogPosts.find((post) => post.id === Number(params.id))

  if (!post) {
    return {
      title: "Blog Post Not Found",
    }
  }

  return {
    title: post.title,
    description: post.excerpt,
  }
}

export default function BlogPost({ params }: { params: { id: string } }) {
  const post = blogPosts.find((post) => post.id === Number(params.id))

  if (!post) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-pink-50 to-purple-50 p-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold text-purple-900 mb-8">Blog post not found</h1>
          <Button asChild variant="outline">
            <Link href="/blog">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Link>
          </Button>
        </div>
      </div>
    )
  }

  return <BlogPostContent post={post} />
}

