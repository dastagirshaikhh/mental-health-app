"use client"

import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Timer, Play, Pause, RefreshCw } from "lucide-react";

export default function Exercises() {
  const [time, setTime] = useState(300); // 5 minutes in seconds
  const [isRunning, setIsRunning] = useState(false);
  const [selectedExercise, setSelectedExercise] = useState<string | null>(null);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isRunning && time > 0) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isRunning, time]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const exercises = [
    {
      title: "Deep Breathing",
      description: "Breathe in for 4 counts, hold for 4, exhale for 4",
      duration: "5 minutes"
    },
    {
      title: "Progressive Muscle Relaxation",
      description: "Tense and relax each muscle group",
      duration: "10 minutes"
    },
    {
      title: "Mindful Walking",
      description: "Walk slowly and focus on each step",
      duration: "15 minutes"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-purple-50 p-8">
      <h1 className="text-3xl font-bold text-purple-900 mb-8">Mental Wellness Exercises</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-6">
          {exercises.map((exercise) => (
            <Card key={exercise.title} className="p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-purple-900 mb-2">{exercise.title}</h3>
              <p className="text-gray-600 mb-4">{exercise.description}</p>
              <p className="text-sm text-purple-600 mb-4">Duration: {exercise.duration}</p>
              <Button 
                onClick={() => setSelectedExercise(exercise.title)}
                variant="outline"
                className="w-full"
              >
                Start Exercise
              </Button>
            </Card>
          ))}
        </div>

        <div className="sticky top-8">
          <Card className="p-6">
            <div className="text-center">
              <Timer className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <div className="text-4xl font-bold mb-6">{formatTime(time)}</div>
              <div className="flex justify-center gap-4">
                <Button
                  onClick={() => setIsRunning(!isRunning)}
                  variant="outline"
                  size="lg"
                >
                  {isRunning ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6" />}
                </Button>
                <Button
                  onClick={() => {
                    setTime(300);
                    setIsRunning(false);
                  }}
                  variant="outline"
                  size="lg"
                >
                  <RefreshCw className="w-6 h-6" />
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}