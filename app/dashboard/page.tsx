"use client"

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar } from "@/components/ui/calendar";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Smile, Meh, Frown, BookHeart, Target, Brain } from "lucide-react";

const moodData = [
  { date: '2024-03-01', mood: 8 },
  { date: '2024-03-02', mood: 6 },
  { date: '2024-03-03', mood: 7 },
  { date: '2024-03-04', mood: 9 },
  { date: '2024-03-05', mood: 5 },
];

export default function Dashboard() {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-purple-50 p-8">
      <h1 className="text-3xl font-bold text-purple-900 mb-8">Welcome back, Sarah</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content Area */}
        <div className="lg:col-span-2 space-y-8">
          <Tabs defaultValue="mood" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="mood">Mood Tracker</TabsTrigger>
              <TabsTrigger value="journal">Journal</TabsTrigger>
              <TabsTrigger value="goals">Goals</TabsTrigger>
            </TabsList>
            
            <TabsContent value="mood">
              <Card className="p-6">
                <h2 className="text-xl font-semibold mb-4">How are you feeling today?</h2>
                <div className="flex justify-center gap-4 mb-8">
                  <Button variant="outline" className="p-4">
                    <Smile className="w-8 h-8 text-green-500" />
                  </Button>
                  <Button variant="outline" className="p-4">
                    <Meh className="w-8 h-8 text-yellow-500" />
                  </Button>
                  <Button variant="outline" className="p-4">
                    <Frown className="w-8 h-8 text-red-500" />
                  </Button>
                </div>
                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={moodData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis 
                        dataKey="date" 
                        padding={{ left: 20, right: 20 }}
                        tick={{ fill: '#666' }}
                      />
                      <YAxis 
                        domain={[0, 10]}
                        tick={{ fill: '#666' }}
                      />
                      <Tooltip />
                      <Line 
                        type="monotone" 
                        dataKey="mood" 
                        stroke="#8884d8"
                        strokeWidth={2}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </Card>
            </TabsContent>

            <TabsContent value="journal">
              <Card className="p-6">
                <h2 className="text-xl font-semibold mb-4">Journal Entries</h2>
                <div className="space-y-4">
                  <Button className="w-full" variant="outline">
                    <BookHeart className="mr-2" /> New Entry
                  </Button>
                </div>
              </Card>
            </TabsContent>

            <TabsContent value="goals">
              <Card className="p-6">
                <h2 className="text-xl font-semibold mb-4">Your Goals</h2>
                <div className="space-y-4">
                  <Button className="w-full" variant="outline">
                    <Target className="mr-2" /> Set New Goal
                  </Button>
                </div>
              </Card>
            </TabsContent>
          </Tabs>
        </div>

        {/* Sidebar */}
        <div className="space-y-8">
          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-4">Calendar</h2>
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              className="rounded-md border"
            />
          </Card>

          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-4">Daily Mindfulness</h2>
            <Button className="w-full" variant="outline">
              <Brain className="mr-2" /> Start Session
            </Button>
          </Card>
        </div>
      </div>
    </div>
  );
}