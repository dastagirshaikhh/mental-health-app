import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { 
  Heart, 
  Flower2, 
  Brain, 
  Target, 
  BookOpen, 
  Phone, 
  Timer,
  Music4,
  Dumbbell,
  ScrollText
} from "lucide-react";
import Link from "next/link";

const features = [
  {
    icon: <Heart className="w-8 h-8 text-pink-500" />,
    title: "Mood Tracking",
    description: "Track your daily emotions and identify patterns that affect your well-being",
    link: "/dashboard"
  },
  {
    icon: <Music4 className="w-8 h-8 text-purple-500" />,
    title: "Meditation",
    description: "Access guided meditations and peaceful sounds for relaxation",
    link: "/meditation"
  },
  {
    icon: <Dumbbell className="w-8 h-8 text-blue-500" />,
    title: "Exercises",
    description: "Follow guided mental wellness exercises with timers",
    link: "/exercises"
  },
  {
    icon: <ScrollText className="w-8 h-8 text-green-500" />,
    title: "Blog",
    description: "Read articles about mental health and personal growth",
    link: "/blog"
  },
  {
    icon: <Phone className="w-8 h-8 text-red-500" />,
    title: "Support",
    description: "Access emergency contacts and mental health resources",
    link: "/support"
  },
  {
    icon: <Target className="w-8 h-8 text-indigo-500" />,
    title: "Goal Setting",
    description: "Set and track personal growth goals aligned with your mental health journey",
    link: "/dashboard"
  }
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-purple-50">
      {/* Hero Section */}
      <header className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-5xl font-bold text-purple-900 mb-6">Welcome to MindBloom</h1>
        <p className="text-xl text-gray-600 mb-8">Your safe space for mental wellness and personal growth</p>
        <div className="flex gap-4 justify-center">
          <Button asChild size="lg" className="bg-purple-600 hover:bg-purple-700">
            <Link href="/dashboard">Start Your Journey</Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href="/blog">Read Our Blog</Link>
          </Button>
        </div>
      </header>

      {/* Features Grid */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-purple-900 text-center mb-12">Explore Our Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <Link key={feature.title} href={feature.link}>
              <Card className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer h-full">
                <div className="flex flex-col items-center text-center h-full">
                  <div className="mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-purple-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-purple-100 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-purple-900 mb-6">Begin Your Wellness Journey Today</h2>
          <p className="text-lg text-gray-700 mb-8">Join our supportive community of women prioritizing their mental health</p>
          <div className="flex gap-4 justify-center">
            <Button asChild size="lg" className="bg-purple-600 hover:bg-purple-700">
              <Link href="/signup">Create Free Account</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/support">Get Support</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}