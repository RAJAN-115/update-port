'use client';

import { AIChatButton } from '@/components/ai/ai-chat-button';
import { VoiceNavButton } from '@/components/ai/voice-nav-button';
import { Button } from '@/components/ui/button';
import { Typography } from '@/components/ui/typography';
import { Download, Github } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center space-y-8 text-center">
        <Typography variant="h1" className="animate-fade-in-up">
          Hi, My name is Rajan
        </Typography>
        <Typography variant="h2" className="animate-fade-in-up delay-100">
          I am a DSA Problem Solver
        </Typography>
        <div className="flex items-center gap-4">
          <Button asChild className="animate-fade-in-up delay-200">
            <Link href="/resume.pdf" download>
              <Download className="mr-2 h-4 w-4" />
              Download Resume
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="animate-fade-in-up delay-300"
          >
            <Link href="https://github.com/RAJAN-115" target="_blank">
              <Github className="mr-2 h-4 w-4" />
              Visit GitHub
            </Link>
          </Button>
        </div>
        <div className="fixed bottom-4 right-4 flex flex-col gap-4">
          <VoiceNavButton />
          <AIChatButton />
        </div>
      </div>
    </div>
  );
}
