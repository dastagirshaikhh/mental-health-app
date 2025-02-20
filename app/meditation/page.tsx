"use client"

import { useState, useRef } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Volume2, VolumeX, Play, Pause } from "lucide-react";
import { Slider } from "@/components/ui/slider";

const meditationSounds = [
  {
    title: "Rain Sounds",
    url: "https://cdn.pixabay.com/download/audio/2022/03/15/audio_c8c8a73f2b.mp3"
  },
  {
    title: "Ocean Waves",
    url: "https://cdn.pixabay.com/download/audio/2022/03/15/audio_c8c8a73f2b.mp3"
  },
  {
    title: "Forest Ambience",
    url: "https://cdn.pixabay.com/download/audio/2022/03/15/audio_c8c8a73f2b.mp3"
  }
];

export default function Meditation() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(50);
  const [currentSound, setCurrentSound] = useState<string | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const handlePlayPause = (soundUrl: string) => {
    if (!audioRef.current) {
      audioRef.current = new Audio(soundUrl);
      audioRef.current.loop = true;
    }

    if (currentSound !== soundUrl) {
      if (audioRef.current) {
        audioRef.current.src = soundUrl;
        audioRef.current.play();
        setIsPlaying(true);
        setCurrentSound(soundUrl);
      }
    } else {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleVolumeChange = (value: number[]) => {
    const newVolume = value[0];
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume / 100;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-purple-50 p-8">
      <h1 className="text-3xl font-bold text-purple-900 mb-8">Meditation Space</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-6">
          {meditationSounds.map((sound) => (
            <Card key={sound.title} className="p-6">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold text-purple-900">{sound.title}</h3>
                <Button
                  onClick={() => handlePlayPause(sound.url)}
                  variant="outline"
                  size="icon"
                >
                  {isPlaying && currentSound === sound.url ? 
                    <Pause className="w-6 h-6" /> : 
                    <Play className="w-6 h-6" />
                  }
                </Button>
              </div>
            </Card>
          ))}
        </div>

        <Card className="p-6">
          <h2 className="text-xl font-semibold text-purple-900 mb-6">Volume Control</h2>
          <div className="flex items-center gap-4">
            <VolumeX className="w-6 h-6 text-gray-500" />
            <Slider
              value={[volume]}
              onValueChange={handleVolumeChange}
              max={100}
              step={1}
            />
            <Volume2 className="w-6 h-6 text-gray-500" />
          </div>
        </Card>
      </div>
    </div>
  );
}